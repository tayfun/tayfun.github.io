name: really-deleting-buffers-in-vim
layout: post
title: Really deleting buffers in vim
time: 2009-02-25 11:53:00 +02:00

If you are using :bd to delete a buffer but you can still see the buffers when you :ls, and this frustrates you, then read on. I also would like deleted buffers to be really deleted and not just hidden with ["No Name"]. I use the elegant <a href="http://www.vim.org/scripts/script.php?script_id=159">minibufexplorer</a> for buffer management so when I say delete this buffer, I mean it. You see lots of empty buffers when you Ctrl-Tab to shift through open buffers and that is annoying. So, <a href="http://encarta.msn.com/dictionary_/without%2520further%2520ado.html">without further ado</a> here's what you need:<br /><br />Do a <code>:set nohidden</code> on your vim window to be able to delete buffers on that window only. If you want this setting on all your vim sessions, remove the <code>set hidden</code> line from your vimrc and gvimrc files.<br /><br />Hope this helps you too.
