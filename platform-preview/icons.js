/* A single, lightweight stroke icon family for the static visual preview. */
(() => {
  const paths = {
    overview: '<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/>',
    posts: '<rect x="4" y="3" width="16" height="18" rx="3"/><path d="M8 8h8M8 12h8M8 16h5"/>',
    composer: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/>',
    studio: '<path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6Z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z"/>',
    campaigns: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>',
    media: '<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2"/><path d="m21 15-4-4-8 8"/>',
    copilot: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z"/><path d="M19 17v4M17 19h4"/>',
    ideas: '<path d="M9 18h6M10 22h4"/><path d="M8.5 15.5A7 7 0 1 1 15.5 15.5C14.6 16.2 14 17 14 18h-4c0-1-.6-1.8-1.5-2.5Z"/>',
    analytics: '<path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/>',
    reports: '<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h7M9 17h7"/>',
    social: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M19 5 15 9M5 19l4-4"/>',
    approvals: '<path d="m4 12 5 5L20 6"/>',
    team: '<circle cx="9" cy="8" r="4"/><path d="M2 21c0-4 3-7 7-7s7 3 7 7M17 11a4 4 0 0 1 5 4"/>',
    roles: '<rect x="3" y="11" width="18" height="10" rx="3"/><path d="M7 11V8a5 5 0 0 1 10 0v3"/>',
    brand: '<path d="M12 3a9 9 0 1 0 0 18h1.5a2 2 0 0 0 0-4H12a2 2 0 0 1 0-4h4a5 5 0 0 0 0-10Z"/><circle cx="7.5" cy="10" r="1"/><circle cx="9" cy="6.5" r="1"/>',
    plan: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 10h18M7 15h3"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1-2.8 2.8-.1-.1a1.8 1.8 0 0 0-2-.4 1.8 1.8 0 0 0-1 1.6V21h-4v-.1a1.8 1.8 0 0 0-1-1.6 1.8 1.8 0 0 0-2 .4l-.1.1-2.8-2.8.1-.1a1.8 1.8 0 0 0 .4-2 1.8 1.8 0 0 0-1.6-1H3v-4h.1a1.8 1.8 0 0 0 1.6-1 1.8 1.8 0 0 0-.4-2l-.1-.1L7 4l.1.1a1.8 1.8 0 0 0 2 .4 1.8 1.8 0 0 0 1-1.6V3h4v.1a1.8 1.8 0 0 0 1 1.6 1.8 1.8 0 0 0 2-.4l.1-.1L20 7l-.1.1a1.8 1.8 0 0 0-.4 2 1.8 1.8 0 0 0 1.6 1h.1v4h-.1a1.8 1.8 0 0 0-1.7 1Z"/>',
    default: '<circle cx="12" cy="12" r="8"/><path d="M9 12h6"/>'
  };

  const aliases = { "brand-brain": "copilot", features: "studio", customers: "team", workspaces: "overview" };
  const svg = (body) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

  function applyIcons() {
    document.querySelectorAll('.nav-item[data-view-target] .nav-icon').forEach((node) => {
      const route = node.closest('.nav-item')?.dataset.viewTarget || 'default';
      const key = aliases[route] || route;
      if (node.dataset.bsIcon === key) return;
      node.dataset.bsIcon = key;
      node.innerHTML = svg(paths[key] || paths.default);
    });
    const brain = document.querySelector('#brandBrainIntegratedNav .nav-icon');
    if (brain && brain.dataset.bsIcon !== 'copilot') {
      brain.dataset.bsIcon = 'copilot';
      brain.innerHTML = svg(paths.copilot);
    }
  }

  applyIcons();
  const nav = document.getElementById('navList');
  if (nav) new MutationObserver(applyIcons).observe(nav, { childList: true, subtree: true });
})();
