(() => {
  const STORAGE_KEY = 'brandspace_preview_unlocked';
  const PASSWORD_HASH = 'bedea0e85fab156c85c945769256abb50579a665ba6f30ca994b839da79642aa';

  const unlockPage = () => {
    const staleGate = document.getElementById('brandspace-access-gate');
    if (staleGate) staleGate.remove();
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.style.visibility = 'visible';
    document.body.style.pointerEvents = '';
  };

  if (sessionStorage.getItem(STORAGE_KEY) === '1') {
    unlockPage();
    return;
  }

  document.documentElement.style.overflow = 'hidden';
  document.body.style.pointerEvents = '';

  const style = document.createElement('style');
  style.textContent = `
    #brandspace-access-gate{visibility:visible!important;pointer-events:auto!important;position:fixed;inset:0;z-index:2147483647;display:grid;place-items:center;padding:22px;overflow:auto;background:radial-gradient(circle at 12% 8%,rgba(121,53,254,.28),transparent 34%),radial-gradient(circle at 90% 92%,rgba(255,221,21,.34),transparent 34%),radial-gradient(circle at 82% 18%,rgba(255,153,185,.22),transparent 28%),#f3f3f3;font-family:Inter,Cairo,"Segoe UI",Arial,sans-serif;color:#111114}
    #brandspace-access-gate *{box-sizing:border-box}
    .bs-gate-card{width:min(430px,100%);padding:34px;border-radius:28px;background:rgba(255,255,255,.88);backdrop-filter:blur(26px);-webkit-backdrop-filter:blur(26px);box-shadow:0 28px 80px rgba(35,22,66,.14)}
    .bs-gate-brand{display:flex;align-items:center;gap:10px;margin-bottom:28px;font-weight:850;font-size:15px}.bs-gate-mark{width:38px;height:38px;border-radius:12px;background:#111114;color:#fff;display:grid;place-items:center;font-weight:850}.bs-gate-kicker{display:inline-flex;align-items:center;gap:7px;padding:7px 10px;border-radius:999px;background:#f3efff;color:#5f25cf;font-size:9px;font-weight:850;letter-spacing:.08em;text-transform:uppercase}.bs-gate-kicker:before{content:"";width:6px;height:6px;border-radius:50%;background:#7935fe}.bs-gate-card h1{margin:16px 0 9px;font-size:34px;line-height:1;letter-spacing:-.055em}.bs-gate-card>p{margin:0 0 24px;color:#717179;font-size:12px;line-height:1.65}.bs-gate-label{display:block;margin:0 0 7px;font-size:9px;font-weight:850;letter-spacing:.06em;text-transform:uppercase;color:#717179}.bs-gate-input-wrap{display:grid;grid-template-columns:1fr auto;gap:6px;padding:6px;background:#f5f5f6;border-radius:14px;box-shadow:inset 0 0 0 1px transparent;transition:.2s}.bs-gate-input-wrap:focus-within{box-shadow:inset 0 0 0 1px rgba(121,53,254,.28);background:#f3efff}.bs-gate-input{min-width:0;height:43px;border:0;outline:0;background:transparent;padding:0 10px;font:inherit;font-size:13px}.bs-gate-show{width:42px;border:0;border-radius:10px;background:#fff;color:#717179;cursor:pointer;font-size:10px;font-weight:800}.bs-gate-submit{width:100%;height:46px;margin-top:10px;border:0;border-radius:13px;background:#111114;color:#fff;cursor:pointer;font:inherit;font-size:11px;font-weight:850;transition:transform .18s,box-shadow .18s}.bs-gate-submit:hover{transform:translateY(-1px);box-shadow:0 10px 24px rgba(17,17,20,.16)}.bs-gate-error{min-height:17px;margin:9px 2px 0;color:#b83245;font-size:9px;font-weight:700}.bs-gate-foot{display:flex;align-items:center;gap:7px;margin-top:18px;color:#a3a3aa;font-size:8px}.bs-gate-foot span{width:6px;height:6px;border-radius:50%;background:#ffdd15}.bs-gate-card.shake{animation:bsGateShake .28s ease}@keyframes bsGateShake{0%,100%{transform:translateX(0)}25%{transform:translateX(-7px)}75%{transform:translateX(7px)}}
    @media(max-width:520px){.bs-gate-card{padding:26px 22px;border-radius:23px}.bs-gate-card h1{font-size:29px}}
  `;
  document.head.appendChild(style);

  const gate = document.createElement('div');
  gate.id = 'brandspace-access-gate';
  gate.innerHTML = `
    <form class="bs-gate-card" id="bsGateForm" autocomplete="off">
      <div class="bs-gate-brand"><span class="bs-gate-mark">B</span><span>BrandSpace</span></div>
      <span class="bs-gate-kicker">Private preview</span>
      <h1>Protected access.</h1>
      <p>This BrandSpace preview is private. Enter the access password to continue.</p>
      <label class="bs-gate-label" for="bsGatePassword">Password</label>
      <div class="bs-gate-input-wrap">
        <input class="bs-gate-input" id="bsGatePassword" type="password" autocomplete="current-password" placeholder="Enter password" autofocus />
        <button class="bs-gate-show" id="bsGateShow" type="button" aria-label="Show password">Show</button>
      </div>
      <button class="bs-gate-submit" type="submit">Unlock preview</button>
      <div class="bs-gate-error" id="bsGateError" role="alert" aria-live="polite"></div>
      <div class="bs-gate-foot"><span></span>Confidential BrandSpace preview</div>
    </form>`;
  document.body.appendChild(gate);
  document.body.style.visibility = 'visible';

  const form = document.getElementById('bsGateForm');
  const input = document.getElementById('bsGatePassword');
  const error = document.getElementById('bsGateError');
  const show = document.getElementById('bsGateShow');

  show.addEventListener('click', () => {
    const reveal = input.type === 'password';
    input.type = reveal ? 'text' : 'password';
    show.textContent = reveal ? 'Hide' : 'Show';
    show.setAttribute('aria-label', reveal ? 'Hide password' : 'Show password');
    input.focus();
  });

  async function sha256(value) {
    const data = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, '0')).join('');
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    error.textContent = '';
    const enteredHash = await sha256(input.value);
    if (enteredHash === PASSWORD_HASH) {
      sessionStorage.setItem(STORAGE_KEY, '1');
      unlockPage();
      return;
    }
    error.textContent = 'Incorrect password. Please try again.';
    form.classList.remove('shake');
    void form.offsetWidth;
    form.classList.add('shake');
    input.select();
  });
})();