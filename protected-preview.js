(() => {
  if (window.__brandspaceProtectedPreview) return;
  window.__brandspaceProtectedPreview = true;

  const style = document.createElement('style');
  style.id = 'bs-content-protection-style';
  style.textContent = `
    html.bs-protected, html.bs-protected body{ -webkit-touch-callout:none; }
    html.bs-protected body, html.bs-protected body *:not(input):not(textarea){
      -webkit-user-select:none!important;
      user-select:none!important;
    }
    html.bs-protected img, html.bs-protected video, html.bs-protected canvas{
      -webkit-user-drag:none!important;
      user-drag:none!important;
    }
    #bs-capture-shield{
      position:fixed;inset:0;z-index:2147482500;display:none;place-items:center;
      background:#111114;color:#fff;text-align:center;padding:24px;font:700 14px/1.6 Inter,Cairo,"Segoe UI",Arial,sans-serif;
    }
    #bs-capture-shield.visible{display:grid}
    @media print{
      html.bs-protected body>*{display:none!important}
      html.bs-protected body::before{
        content:"Printing is disabled for this confidential BrandSpace preview.";
        display:block!important;padding:48px;font:700 18px/1.5 Arial,sans-serif;color:#111;
      }
    }
  `;
  document.head.appendChild(style);
  document.documentElement.classList.add('bs-protected');

  const shield = document.createElement('div');
  shield.id = 'bs-capture-shield';
  shield.innerHTML = '<div><strong>Confidential BrandSpace preview</strong><br><span>Screen capture and printing are restricted.</span></div>';
  document.body.appendChild(shield);

  const stop = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  document.addEventListener('copy', stop, true);
  document.addEventListener('cut', stop, true);
  document.addEventListener('contextmenu', stop, true);
  document.addEventListener('dragstart', stop, true);
  document.addEventListener('selectstart', (event) => {
    if (event.target?.matches?.('input, textarea')) return;
    stop(event);
  }, true);

  document.addEventListener('keydown', (event) => {
    const key = String(event.key || '').toLowerCase();
    const mod = event.ctrlKey || event.metaKey;
    const blockedModKeys = ['c','x','s','p','u'];
    const devtoolsCombo = mod && event.shiftKey && ['i','j','c'].includes(key);
    const isF12 = event.key === 'F12';
    const isPrintScreen = event.key === 'PrintScreen';

    if ((mod && blockedModKeys.includes(key)) || devtoolsCombo || isF12) {
      stop(event);
      return;
    }

    if (isPrintScreen) {
      stop(event);
      shield.classList.add('visible');
      setTimeout(() => shield.classList.remove('visible'), 1200);
      try { navigator.clipboard?.writeText('Screen capture is restricted for this confidential BrandSpace preview.'); } catch (_) {}
    }
  }, true);

  window.addEventListener('beforeprint', () => shield.classList.add('visible'));
  window.addEventListener('afterprint', () => shield.classList.remove('visible'));
})();