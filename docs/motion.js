'use strict';
// Start only when the visitor presses Play, and keep one example playing at a time.
const videos = [...document.querySelectorAll('video')];
for (const current of videos) {
  current.addEventListener('play', () => {
    for (const video of videos) if (video !== current) video.pause();
  });
}

// Keep shared section anchors when switching languages. Links also work
// without JavaScript, and each language has its own shareable URL.
function updateLanguageLinks() {
  for (const link of document.querySelectorAll('[data-language-link]')) {
    const destination = new URL(link.href);
    destination.hash = window.location.hash;
    link.href = destination.href;
  }
}
updateLanguageLinks();
window.addEventListener('hashchange', updateLanguageLinks);
