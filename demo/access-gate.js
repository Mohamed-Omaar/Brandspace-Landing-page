(() => {
  const reveal = () => {
    if (document.body) document.body.style.visibility = 'visible';
  };

  const script = document.createElement('script');
  script.src = '/access-gate.js';
  script.async = false;
  script.onerror = reveal;
  document.head.appendChild(script);

  // Safety fallback so a failed protection load never leaves nested previews blank.
  window.setTimeout(() => {
    const gate = document.getElementById('brandspace-access-gate');
    if (!gate && document.body && document.body.style.visibility === 'hidden') reveal();
  }, 2500);
})();
