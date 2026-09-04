(() => {
  if (window.__brandspaceProtectedPreview) return;
  window.__brandspaceProtectedPreview = true;

  const SESSION_KEY = 'brandspace_preview_session_id';
  let sessionId = sessionStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = Math.random().toString(36).slice(2, 8).toUpperCase();
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }

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
    #bs-confidential-watermark{
      position:fixed;inset:0;z-index:2147482000;pointer-events:none;overflow:hidden;
      opacity:.085;display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:150px;
      align-items:center;justify-items:center;mix-blend-mode:multiply;
    }
    #bs-confidential-watermark span{
      white-space:nowrap;transform:rotate(-24deg);font:800 11px/1 Inter,Cairo,"Segoe UI",Arial,sans-serif;
      letter-spacing:.08em;color:#111114;text-transform:uppercase;
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
    @media(max-width:640px){
      #bs-confidential-watermark{grid-template-columns:repeat(2,1fr);grid-auto-rows:125px}
      #bs-confidential-watermark span{font-size:9px}
    }
  `;
  document.head.appendChild(style);
  document.documentElement.classList.add('bs-protected');

  const watermark = document.createElement('div');
  watermark.id = 'bs-confidential-watermark';
  const label = `CONFIDENTIAL • BRANDSPACE • SESSION ${sessionId}`;
  watermark.innerHTML = Array.from({length: 24}, () => `<span>${label}</span>`).join('');
  document.body.appendChild(watermark);

  const shield = document.createElement('div');
  shield.id = 'bs-capture-shield';
  shield.innerHTML = '<div><strong>Confidential BrandSpace preview</strong><br><span>Screen capture and printing are restricted.</span></div>';
  document.body.appendChild(shield);

  const stop = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  ['copy','cut','contextmenu','dragstart','selectstart'].forEach(type => {
    document.addEventListener(type, stop, true);
  });

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