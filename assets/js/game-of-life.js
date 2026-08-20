/*
 * Game of Life running behind the site header.
 *
 * Design goals (in order):
 *   1. As little CPU as possible.
 *   2. Subtle visual: a low-density, low-opacity cellular automaton that
 *      complements the existing drifting gradient on the header.
 *
 * Why it's cheap:
 *   - The simulation runs on a tiny grid (~150 × ~22 cells ≈ 3.3k cells)
 *     whose internal pixel resolution matches its grid size; CSS scales it
 *     up to fill the header. No anti-aliasing, no per-frame redraw.
 *   - A single `setInterval` drives both step + paint, so we don't pay the
 *     `requestAnimationFrame` cost when nothing visible needs updating.
 *   - The loop is paused when the header is off-screen (IntersectionObserver)
 *     or when the tab is hidden (visibilitychange).
 *   - If the grid stabilises (no change in 30 generations), the loop is
 *     paused until the user scrolls back to / away from the header.
 *   - When the population dies out, a sparse random pattern is seeded so
 *     the simulation can resume without user interaction.
 *   - `prefers-reduced-motion: reduce` renders exactly one static frame.
 *
 * Theme: the cell color is read from `--c-accent` on every draw, so theme
 * switches (light/dark) propagate automatically.
 */
(function () {
  "use strict";

  var canvas = document.getElementById("header-gol");
  if (!canvas) return;
  if (!canvas.getContext) return;

  var ctx = canvas.getContext("2d", { alpha: true });

  // --- Tunables (small grid + slow step rate = trivial CPU) ---
  var STEP_MS = 110;          // ~9 generations per second
  var STABLE_LIMIT = 30;      // generations with no change → pause
  var DEAD_THRESHOLD = 0.015; // <1.5% of cells alive → re-seed
  var INITIAL_DENSITY = 0.18; // 18% live cells in a fresh random seed
  var MIN_COLS = 80;
  var MAX_COLS = 220;
  var MIN_ROWS = 14;
  var MAX_ROWS = 36;
  var CELL_TARGET_PX = 6;     // display size of one cell after CSS scaling

  // --- State ---
  var cols = 0;
  var rows = 0;
  var bufA = null;
  var bufB = null;
  var cur = null; // points at the live grid (a Uint8Array view of bufA or bufB)
  var nxt = null;
  var lastHash = 0;
  var stableCount = 0;
  var paused = false;       // paused because stable
  var inView = true;        // tracked by IntersectionObserver
  var visible = true;       // tracked by visibilitychange
  var reducedMotion = false;
  var timer = null;
  var resizeRaf = 0;

  // --- Helpers ---
  function makeGrid() { return new Uint8Array(cols * rows); }

  function seedRandom() {
    for (var i = 0; i < cur.length; i++) {
      cur[i] = Math.random() < INITIAL_DENSITY ? 1 : 0;
    }
  }

  // Cheap content hash so we can detect "the grid stopped changing".
  function hash() {
    var h = 2166136261 >>> 0;
    for (var i = 0; i < cur.length; i++) {
      h ^= cur[i];
      h = Math.imul(h, 16777619) >>> 0;
    }
    return h;
  }

  // One generation of B3/S23 on a toroidal grid (edges wrap so patterns
  // don't pile up at the borders).
  function step() {
    var w = cols, h = rows;
    var a = cur, b = nxt;
    for (var y = 0; y < h; y++) {
      var ym = y === 0 ? h - 1 : y - 1;
      var yp = y === h - 1 ? 0 : y + 1;
      var rowY = y * w;
      var rowYm = ym * w;
      var rowYp = yp * w;
      for (var x = 0; x < w; x++) {
        var xl = x === 0 ? w - 1 : x - 1;
        var xr = x === w - 1 ? 0 : x + 1;
        var n =
          a[rowYm + xl] + a[rowYm + x] + a[rowYm + xr] +
          a[rowY  + xl]                   + a[rowY  + xr] +
          a[rowYp + xl] + a[rowYp + x] + a[rowYp + xr];
        var self = a[rowY + x];
        // Survive with 2 or 3 neighbours; born with exactly 3.
        b[rowY + x] = (self && (n === 2 || n === 3)) || (!self && n === 3) ? 1 : 0;
      }
    }
    var tmp = cur; cur = nxt; nxt = tmp;
  }

  function liveCount() {
    var c = 0;
    for (var i = 0; i < cur.length; i++) c += cur[i];
    return c;
  }

  function readAccent() {
    var v = getComputedStyle(document.documentElement).getPropertyValue("--c-accent");
    return (v && v.trim()) || "#0e8ea0";
  }

  function draw() {
    // Match the internal pixel resolution to the grid: one canvas pixel
    // per cell. CSS upscales it for us.
    if (canvas.width !== cols || canvas.height !== rows) {
      canvas.width = cols;
      canvas.height = rows;
    }
    ctx.clearRect(0, 0, cols, rows);
    ctx.fillStyle = readAccent();
    // Most cells are dead; only paint live ones. ~3000 fillRects/step
    // at full density is still cheap, and density is usually much lower.
    var w = cols;
    for (var y = 0; y < rows; y++) {
      var row = y * w;
      for (var x = 0; x < w; x++) {
        if (cur[row + x]) ctx.fillRect(x, y, 1, 1);
      }
    }
  }

  function tick() {
    step();
    var h = hash();
    if (h === lastHash) {
      stableCount++;
      if (stableCount >= STABLE_LIMIT) {
        paused = true;
        pause();
        return;
      }
    } else {
      stableCount = 0;
      lastHash = h;
    }
    if (liveCount() < cols * rows * DEAD_THRESHOLD) {
      seedRandom();
      lastHash = hash();
      stableCount = 0;
    }
    draw();
  }

  function start() {
    if (timer || reducedMotion) return;
    if (!inView || !visible) return;
    paused = false;
    timer = setInterval(tick, STEP_MS);
  }

  function pause() {
    if (!timer) return;
    clearInterval(timer);
    timer = null;
  }

  function shouldRun() {
    return !reducedMotion && inView && visible && !paused;
  }

  function sync() {
    if (shouldRun()) start(); else pause();
  }

  function resize() {
    resizeRaf = 0;
    var host = canvas.parentElement;
    if (!host) return;
    var rect = host.getBoundingClientRect();
    var w = Math.max(1, Math.floor(rect.width));
    var h = Math.max(1, Math.floor(rect.height));
    if (w === 0 || h === 0) return;

    var newCols = Math.max(MIN_COLS, Math.min(MAX_COLS, Math.round(w / CELL_TARGET_PX)));
    var newRows = Math.max(MIN_ROWS, Math.min(MAX_ROWS, Math.round(h / CELL_TARGET_PX)));
    if (newCols === cols && newRows === rows && bufA) return;

    cols = newCols;
    rows = newRows;
    bufA = makeGrid();
    bufB = makeGrid();
    cur = bufA;
    nxt = bufB;
    seedRandom();
    lastHash = hash();
    stableCount = 0;
    paused = false;
    draw();
    sync();
  }

  function scheduleResize() {
    if (resizeRaf) return;
    resizeRaf = requestAnimationFrame(resize);
  }

  // --- Visibility / reduced-motion plumbing ---

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      inView = entries[0].isIntersecting;
      sync();
    }, { threshold: 0 });
    io.observe(canvas.parentElement);
  }

  document.addEventListener("visibilitychange", function () {
    visible = document.visibilityState === "visible";
    sync();
  });

  if (window.matchMedia) {
    var mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion = mql.matches;
    var onMq = function (e) {
      reducedMotion = e.matches;
      sync();
    };
    if (mql.addEventListener) mql.addEventListener("change", onMq);
    else if (mql.addListener) mql.addListener(onMq); // very old browsers
  }

  if ("ResizeObserver" in window) {
    new ResizeObserver(scheduleResize).observe(canvas.parentElement);
  } else {
    window.addEventListener("resize", scheduleResize);
  }

  // --- Boot ---

  function init() {
    resize();
    if (reducedMotion) {
      // One static frame; no loop.
      draw();
      return;
    }
    sync();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();