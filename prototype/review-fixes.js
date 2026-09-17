// Post-build review helpers: keep every visible prototype control responsive.
// The prototype intentionally simulates behavior rather than calling a backend.

document.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.action || button.dataset.page) return;
  if (typeof toastMsg === 'function') {
    toastMsg('Prototype control selected. Final behavior is represented elsewhere in this flow.');
  }
});

// Keep the top-bar credit counter aligned with simulated AI actions.
(function syncCredits() {
  const value = document.getElementById('top-credit-value');
  if (value && typeof state !== 'undefined') value.textContent = Number(state.credits).toLocaleString();
  requestAnimationFrame(syncCredits);
})();
