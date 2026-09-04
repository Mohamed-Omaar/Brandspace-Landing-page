document.body.style.visibility = "hidden";
(() => {
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

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (!header) return;
  header.style.boxShadow = window.scrollY > 18
    ? '0 16px 44px rgba(24,17,45,.11)'
    : '0 12px 38px rgba(24,17,45,.07)';
}, { passive: true });