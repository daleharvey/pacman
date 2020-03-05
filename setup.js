var el = document.getElementById("pacman");

if (Modernizr.canvas && Modernizr.localstorage &&
    Modernizr.audio && (Modernizr.audio.ogg || Modernizr.audio.mp3)) {
  window.setTimeout(function () { PACMAN.init(el, "./"); }, 0);
} else {
  el.innerHTML = "Sorry, needs a decent browser<br /><small>" +
    "(firefox 3.6+, Chrome 4+, Opera 10+ and Safari 4+)</small>";
}
