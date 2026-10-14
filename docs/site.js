/* Links are enabled only after the real public repository has been configured. */
(() => {
  'use strict';
  fetch('site.json')
    .then(response => response.ok ? response.json() : null)
    .then(config => {
      if (!config || typeof config.repository !== 'string') return;
      if (!/^https:\/\/github\.com\/[A-Za-z0-9-]+\/[A-Za-z0-9_.-]+\/?$/.test(config.repository)) return;
      for (const link of document.querySelectorAll('[data-repository-link]')) {
        link.href = config.repository;
        link.hidden = false;
      }
    })
    .catch(() => { /* All page content and navigation work without JavaScript. */ });
})();
