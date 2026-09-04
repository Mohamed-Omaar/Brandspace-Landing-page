document.body.style.visibility = "hidden";
(() => {
  const enhancements = document.createElement("link");
  enhancements.rel = "stylesheet";
  enhancements.href = "./enhancements.css";
  document.head.appendChild(enhancements);

  const gate = document.createElement("script");
  gate.src = "../access-gate.js";
  gate.onerror = () => { document.body.style.visibility = "visible"; };
  document.head.appendChild(gate);
})();

const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

function setMenu(open) {
  mobileMenu?.classList.toggle('open', open);
  menuButton?.setAttribute('aria-expanded', String(open));
  if (menuButton) menuButton.textContent = open ? '×' : '☰';
}

menuButton?.addEventListener('click', () => setMenu(!mobileMenu?.classList.contains('open')));
mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });

/* Replace the simple footer with the full preview footer. */
const footer = document.querySelector('.footer');
if (footer) {
  footer.className = 'footer footer-pro wrap reveal';
  footer.innerHTML = `
    <div class="footer-main">
      <div class="footer-identity">
        <div>
          <a class="footer-logo" href="#top" aria-label="BrandSpace home">
            <img src="/brandspace-logo.svg" alt="" />
            <span><small>BRANDSPACE</small><b>Your brand presence, one space.</b></span>
          </a>
          <h3>One intelligent space for a brand that <strong>keeps learning.</strong></h3>
          <p>Define it, organize it, express it, publish it and learn from it — with the same trusted brand context behind every action.</p>
        </div>
      </div>
      <div class="footer-access">
        <span class="eyebrow">EARLY ACCESS</span>
        <h3>Be among the first brands inside BrandSpace.</h3>
        <p>Leave your email and we’ll keep you in the early-access list as the product moves toward launch.</p>
        <form class="early-form" id="earlyAccessForm" novalidate>
          <input id="earlyAccessEmail" name="email" type="email" inputmode="email" autocomplete="email" placeholder="you@company.com" aria-label="Email address" required />
          <button type="submit">Join early access →</button>
        </form>
        <small class="form-status" id="earlyAccessStatus" aria-live="polite">No spam. Product updates and early-access invitations only.</small>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="social-links" aria-label="BrandSpace social media">
        <a href="#" data-preview-social="Instagram" aria-label="Instagram"><i></i>Instagram</a>
        <a href="#" data-preview-social="LinkedIn" aria-label="LinkedIn"><i></i>LinkedIn</a>
        <a href="#" data-preview-social="X" aria-label="X"><i></i>X</a>
      </div>
      <span class="footer-meta">© 2026 BrandSpace · Product preview</span>
      <a class="footer-top-link" href="#top">Back to the top ↑</a>
    </div>`;
}

/* Stagger the important grids so their contents reveal progressively. */
const staggerSelectors = [
  '.promise', '.outcomes', '.mind-grid', '.mind-principles', '.loop-map',
  '.feature-grid', '.trust-grid', '.roadmap', '.board-grid', '.workspace-stats'
];
staggerSelectors.forEach(selector => {
  document.querySelectorAll(selector).forEach(group => {
    [...group.children].forEach((child, index) => {
      child.classList.add('motion-child');
      child.style.setProperty('--motion-delay', `${Math.min(index, 7) * 75}ms`);
    });
  });
});

/* Give major sections slight timing variation. */
document.querySelectorAll('.reveal').forEach((el, index) => {
  el.dataset.revealDelay = String((index % 4) + 1);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -7% 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* Preview-only Early Access interaction. A real receiver is connected at launch. */
const earlyForm = document.getElementById('earlyAccessForm');
const earlyEmail = document.getElementById('earlyAccessEmail');
const earlyStatus = document.getElementById('earlyAccessStatus');

earlyForm?.addEventListener('submit', event => {
  event.preventDefault();
  const email = earlyEmail?.value.trim() || '';
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  earlyStatus?.classList.remove('success', 'error');
  if (!valid) {
    if (earlyStatus) {
      earlyStatus.textContent = 'Enter a valid work email to continue.';
      earlyStatus.classList.add('error');
    }
    earlyEmail?.focus();
    return;
  }

  try {
    const existing = JSON.parse(localStorage.getItem('brandspace_preview_early_access') || '[]');
    if (!existing.includes(email)) existing.push(email);
    localStorage.setItem('brandspace_preview_early_access', JSON.stringify(existing));
  } catch (_) {}

  if (earlyStatus) {
    earlyStatus.textContent = 'You’re on the preview early-access list. ✓';
    earlyStatus.classList.add('success');
  }
  if (earlyEmail) earlyEmail.value = '';
});

/* Social handles are intentionally not invented in the preview. */
document.querySelectorAll('[data-preview-social]').forEach(link => {
  link.addEventListener('click', event => {
    if (link.getAttribute('href') === '#') event.preventDefault();
  });
});

/* Premium header response and gentle ambient parallax. */
const header = document.querySelector('.site-header');
const orbs = [...document.querySelectorAll('.orb')];
let ticking = false;

function updateScrollMotion() {
  const y = window.scrollY;
  if (header) {
    header.style.boxShadow = y > 18
      ? '0 16px 44px rgba(24,17,45,.11)'
      : '0 12px 38px rgba(24,17,45,.07)';
  }
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    orbs.forEach((orb, index) => {
      const shift = Math.min(30, y * (0.008 + index * 0.003));
      orb.style.marginTop = `${index % 2 ? -shift : shift}px`;
    });
  }
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateScrollMotion);
    ticking = true;
  }
}, { passive: true });
updateScrollMotion();
