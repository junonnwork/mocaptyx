'use strict';
// Start only when the visitor presses Play, and keep one example playing at a time.
const videos = [...document.querySelectorAll('video')];
for (const current of videos) {
  current.addEventListener('play', () => {
    for (const video of videos) if (video !== current) video.pause();
  });
}
