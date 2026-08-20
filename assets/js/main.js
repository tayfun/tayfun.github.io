/*
 * Author:  Tayfun Sen
 * URL:     https://blog.tayfunsen.com
 *
 * Modernized: no jQuery dependency, uses vanilla JS and
 * `Intl.RelativeTimeFormat` for friendlier post dates.
 */
(function () {
  "use strict";

  // Replace the text of every <time class="postdate"> with a relative
  // time like "today", "3 days ago", "2 months ago". The original date
  // remains available via the `title` attribute and the `datetime`
  // attribute, so the relative format is purely a progressive enhancement.
  function prettyDates() {
    if (typeof Intl === "undefined" || !Intl.RelativeTimeFormat) {
      return; // Older browsers: leave the original, fully accessible text.
    }
    var rtf = new Intl.RelativeTimeFormat(document.documentElement.lang || "en", {
      numeric: "auto",
    });
    var now = Date.now();
    var DAY = 86400000;
    var MONTH = 30 * DAY;
    var YEAR = 365 * DAY;

    var nodes = document.querySelectorAll("time.postdate");
    Array.prototype.forEach.call(nodes, function (el) {
      var iso = el.getAttribute("datetime");
      if (!iso) return;
      var stamp = Date.parse(iso);
      if (isNaN(stamp)) return;
      var diff = stamp - now;
      var abs = Math.abs(diff);
      var value, unit;
      if (abs < DAY) {
        value = Math.round(diff / (3600 * 1000));
        unit = "hour";
      } else if (abs < MONTH) {
        value = Math.round(diff / DAY);
        unit = "day";
      } else if (abs < YEAR) {
        value = Math.round(diff / MONTH);
        unit = "month";
      } else {
        value = Math.round(diff / YEAR);
        unit = "year";
      }
      el.textContent = rtf.format(value, unit);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", prettyDates);
  } else {
    prettyDates();
  }
})();
