(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const timers = [];
  let particleRaf = 0;

  const ensureStylesheet = href => {
    if (document.querySelector(`link[href="${href}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  };

  ensureStylesheet('./deck.css');
  ensureStylesheet('./extras.css');

  const extraSlides = `
    <section class="slide-card" id="slide-6">
      <header class="slide-head"><div><span class="slide-kicker">06 · Decide & coordinate</span><h2>Strategy becomes<br><strong>daily direction.</strong></h2></div><p>Strategy, the command layer and the activity trail keep the workspace moving with context instead of disconnected tasks.</p></header>
      <section class="phones">
        <article class="phone" data-phone="strategy"><div class="device"><header class="app-topbar"><img class="ui-logo" src="/brandspace-logo.svg" alt="BrandSpace" /><div class="page-title"><small>Plan</small><b>Strategy</b></div><button class="top-icon">✦</button></header><div class="app-view strategy-view"><div class="extra-hero"><small>Quarterly strategy</small><b>Build demand without losing brand clarity.</b><p>Accepted direction stays connected to Brand Brain, campaigns and performance.</p></div><section class="extra-card"><span class="extra-label">Strategy health</span><div class="strategy-score"><strong data-value="84" data-suffix="%">0%</strong><span>↗ 6 pts this month</span></div><div class="strategy-progress"><i></i></div></section><div class="pillar-list" data-cycle-group="strategy-pillars"><button class="pillar-row active"><span>01</span><div><b>Educate before selling</b><small>Thought leadership · 40%</small></div><em>Strong</em></button><button class="pillar-row"><span>02</span><div><b>Show the product in motion</b><small>Feature proof · 35%</small></div><em>Growing</em></button><button class="pillar-row"><span>03</span><div><b>Build founder trust</b><small>Human stories · 25%</small></div><em>On track</em></button></div><section class="strategy-next"><span>✦</span><div><b>Next recommendation</b><small>Turn the strongest analytics insight into next week's lead theme.</small></div></section></div><nav class="bottom-nav"><button>⌂<small>Home</small></button><button class="active">◇<small>Strategy</small></button><button>◌<small>Campaigns</small></button><button>↗<small>Analytics</small></button></nav></div><div class="frame-label"><b>Strategy</b><small>Pillars · health · connected recommendations</small></div></article>
        <article class="phone" data-phone="command"><div class="device"><header class="app-topbar"><img class="ui-logo" src="/brandspace-logo.svg" alt="BrandSpace" /><div class="page-title"><small>Workspace</small><b>Command Center</b></div><button class="top-icon">•••</button></header><div class="app-view command-view"><div class="extra-hero"><small>Today</small><b>Your workspace at a glance.</b><p>Only the decisions and signals that need attention right now.</p></div><div class="command-metrics"><article><small>Ready</small><b data-value="12">0</b><em>to publish</em></article><article><small>Review</small><b data-value="3">0</b><em>waiting</em></article><article><small>Alerts</small><b data-value="2">0</b><em>important</em></article></div><div class="command-focus" data-cycle-group="command-focus"><button class="command-row active"><span>✓</span><div><b>Approve founder story</b><small>LinkedIn · due in 42 min</small></div><em>Review</em></button><button class="command-row"><span>↗</span><div><b>Performance spike</b><small>Instagram saves up 27%</small></div><em>Insight</em></button><button class="command-row"><span>□</span><div><b>Calendar gap</b><small>Thursday evening is open</small></div><em>Plan</em></button><button class="command-row"><span>⚡</span><div><b>Automation ready</b><small>Approved → Calendar rule</small></div><em>Live</em></button></div><section class="live-strip"><i></i><div><b>Live workspace</b><small>Signals update without leaving this view.</small></div></section></div><nav class="bottom-nav"><button class="active">⌂<small>Command</small></button><button>✓<small>Approvals</small></button><button>□<small>Calendar</small></button><button>↗<small>Analytics</small></button></nav></div><div class="frame-label"><b>Command Center</b><small>Priorities · signals · live workspace focus</small></div></article>
        <article class="phone" data-phone="activity"><div class="device"><header class="app-topbar"><img class="ui-logo" src="/brandspace-logo.svg" alt="BrandSpace" /><div class="page-title"><small>Workspace history</small><b>Activity</b></div><button class="top-icon">⌕</button></header><div class="app-view activity-view"><div class="mini-toolbar"><span><small>Activity log</small><b>Everything that changed</b></span><button>All activity ⌄</button></div><div class="activity-feed" data-cycle-group="activity-feed"><button class="activity-item active"><span>✓</span><div><b>Sara approved Founder story</b><small>Content · LinkedIn</small></div><em>2m</em></button><button class="activity-item"><span>✦</span><div><b>Copilot created 3 content ideas</b><small>AI · BrandSpace</small></div><em>8m</em></button><button class="activity-item"><span>□</span><div><b>Launch post moved to 09:00</b><small>Calendar · Instagram</small></div><em>21m</em></button><button class="activity-item"><span>↗</span><div><b>Analytics refresh completed</b><small>4 connected channels</small></div><em>34m</em></button><button class="activity-item"><span>⚡</span><div><b>Automation run succeeded</b><small>Approved → Calendar</small></div><em>48m</em></button><button class="activity-item"><span>♙</span><div><b>Youssef role updated</b><small>Team · Content creator</small></div><em>1h</em></button></div><section class="activity-footer"><span>Audit trail stays attached to the workspace.</span><b>View details →</b></section></div><nav class="bottom-nav"><button>⌂<small>Home</small></button><button class="active">≡<small>Activity</small></button><button>♙<small>Team</small></button><button>⚙<small>Settings</small></button></nav></div><div class="frame-label"><b>Activity log</b><small>People · AI · system events · audit trail</small></div></article>
      </section>
    </section>

    <section class="slide-card" id="slide-7">
      <header class="slide-head"><div><span class="slide-kicker">07 · Run the system</span><h2>Automate the routine.<br><strong>Keep control.</strong></h2></div><p>Rules, notifications and the publishing queue make execution feel active while keeping external actions visible and governed.</p></header>
      <section class="phones">
        <article class="phone" data-phone="automations"><div class="device"><header class="app-topbar"><img class="ui-logo" src="/brandspace-logo.svg" alt="BrandSpace" /><div class="page-title"><small>Workflows</small><b>Automations</b></div><button class="top-icon">＋</button></header><div class="app-view automation-view"><div class="extra-hero"><small>Automations</small><b>Let approved work move itself.</b><p>Rules respond to workspace events and keep human confirmation where policy requires it.</p></div><section class="automation-rule"><div class="rule-title"><span><small>Live rule</small><b>Approved content → Calendar</b></span><em>On</em></div><div class="automation-flow" data-auto-flow><div class="auto-node active"><span>✓</span><b>Approved</b></div><div class="auto-link"><i></i></div><div class="auto-node"><span>◇</span><b>Check brand</b></div><div class="auto-link"><i></i></div><div class="auto-node"><span>□</span><b>Schedule</b></div></div></section><div class="automation-stats"><article><small>Runs</small><b data-value="38">0</b></article><article><small>Success</small><b data-value="37">0</b></article><article><small>Needs review</small><b data-value="1">0</b></article></div><section class="automation-note"><span>⚿</span><div><b>Authority re-checked at run time</b><small>Rules never bypass live workspace permissions.</small></div></section></div><nav class="bottom-nav"><button>⌂<small>Home</small></button><button class="active">⚡<small>Automate</small></button><button>≡<small>Runs</small></button><button>⚙<small>Settings</small></button></nav></div><div class="frame-label"><b>Automations</b><small>Trigger · condition · action · live runs</small></div></article>
        <article class="phone" data-phone="notifications"><div class="device"><header class="app-topbar"><img class="ui-logo" src="/brandspace-logo.svg" alt="BrandSpace" /><div class="page-title"><small>Inbox</small><b>Notifications</b></div><button class="top-icon">✓</button></header><div class="app-view notifications-view"><div class="mini-toolbar"><span><small>Notifications</small><b>What needs your attention</b></span><em>4 unread</em></div><div class="notification-tabs"><button class="active">All</button><button>Approvals</button><button>Publishing</button><button>System</button></div><div class="notification-list" data-cycle-group="notifications"><button class="notification-row unread active"><span>✓</span><div><b>Founder story needs approval</b><small>LinkedIn · due in 42 minutes</small></div><em>Now</em></button><button class="notification-row unread"><span>↗</span><div><b>Reach is up 18.4%</b><small>Analytics insight is ready</small></div><em>8m</em></button><button class="notification-row unread"><span>□</span><div><b>Post published successfully</b><small>Instagram · Collection launch</small></div><em>16m</em></button><button class="notification-row"><span>♙</span><div><b>Sara joined the workspace</b><small>Workspace admin</small></div><em>1h</em></button><button class="notification-row"><span>⚡</span><div><b>Automation completed</b><small>Approved → Calendar</small></div><em>2h</em></button></div><section class="notification-summary"><span>Notifications stay scoped to your workspace.</span><b>Mark all read</b></section></div><nav class="bottom-nav"><button>⌂<small>Home</small></button><button class="active">♢<small>Inbox</small></button><button>✓<small>Approvals</small></button><button>⚙<small>Settings</small></button></nav></div><div class="frame-label"><b>Notifications</b><small>Approvals · publishing · analytics · system</small></div></article>
        <article class="phone" data-phone="publishing"><div class="device"><header class="app-topbar"><img class="ui-logo" src="/brandspace-logo.svg" alt="BrandSpace" /><div class="page-title"><small>Delivery</small><b>Publishing queue</b></div><button class="top-icon">•••</button></header><div class="app-view publishing-view"><div class="extra-hero"><small>Publishing</small><b>Every post has a visible state.</b><p>Scheduled, publishing and confirmed delivery stay separate so the queue never hides what happened.</p></div><div class="publish-summary"><article><small>Queued</small><b data-value="8">0</b></article><article><small>Published today</small><b data-value="5">0</b></article></div><div class="publish-queue" data-cycle-group="publish-queue"><button class="publish-row active"><span>IG</span><div><b>Collection launch</b><small>Instagram · 09:00</small></div><em>Published</em></button><button class="publish-row waiting"><span>in</span><div><b>Founder story</b><small>LinkedIn · 13:30</small></div><em>Queued</em></button><button class="publish-row waiting"><span>f</span><div><b>Three useful tips</b><small>Facebook · 18:00</small></div><em>Queued</em></button><button class="publish-row"><span>X</span><div><b>Weekly recap</b><small>X · Tomorrow 10:00</small></div><em>Ready</em></button></div><section class="channel-health"><small>Connected channel health</small><div><span><i></i> Instagram</span><span><i></i> LinkedIn</span><span><i></i> Facebook</span></div></section></div><nav class="bottom-nav"><button>⌂<small>Home</small></button><button>◎<small>Social</small></button><button class="active">⇧<small>Publish</small></button><button>≡<small>History</small></button></nav></div><div class="frame-label"><b>Social publishing</b><small>Queue · delivery state · channel health</small></div></article>
      </section>
    </section>

    <section class="slide-card" id="slide-8">
      <header class="slide-head"><div><span class="slide-kicker">08 · Operate the workspace</span><h2>Control usage,<br><strong>access and scale.</strong></h2></div><p>Settings, credits and workspace controls close the loop so the product can be operated—not just used.</p></header>
      <section class="phones">
        <article class="phone" data-phone="settings"><div class="device"><header class="app-topbar"><img class="ui-logo" src="/brandspace-logo.svg" alt="BrandSpace" /><div class="page-title"><small>Manage</small><b>Settings</b></div><button class="top-icon">⚙</button></header><div class="app-view settings-view"><div class="mini-toolbar"><span><small>Settings</small><b>Workspace preferences</b></span><em>Saved</em></div><div class="settings-tabs" data-cycle-group="settings-tabs"><button class="active">General</button><button>Brand</button><button>AI</button><button>Publishing</button></div><section class="settings-panel"><div class="setting-row"><span><b>Approval gate</b><small>Require approval before external publishing</small></span><button class="toggle-mini on"></button></div><div class="setting-row"><span><b>Arabic dialect</b><small>Saudi / Gulf</small></span><b>Saudi ⌄</b></div><div class="setting-row"><span><b>Workspace timezone</b><small>Calendar and schedule wall-clock</small></span><b>Riyadh ⌄</b></div><div class="setting-row"><span><b>AI suggestions</b><small>Show grounded recommendations</small></span><button class="toggle-mini on"></button></div><div class="setting-row"><span><b>Activity notifications</b><small>In-app workspace alerts</small></span><button class="toggle-mini on"></button></div></section><div class="setting-footer">Changes stay scoped to this workspace.</div></div><nav class="bottom-nav"><button>⌂<small>Home</small></button><button>♙<small>Team</small></button><button>⚿<small>Access</small></button><button class="active">⚙<small>Settings</small></button></nav></div><div class="frame-label"><b>Settings</b><small>Brand · AI · publishing · workspace preferences</small></div></article>
        <article class="phone" data-phone="billing"><div class="device"><header class="app-topbar"><img class="ui-logo" src="/brandspace-logo.svg" alt="BrandSpace" /><div class="page-title"><small>Usage</small><b>Billing & credits</b></div><button class="top-icon">•••</button></header><div class="app-view billing-view"><section class="plan-card"><div class="plan-card-head"><span><small>Current plan</small><b>Growth Workspace</b></span><em>Active</em></div></section><div class="billing-stats"><article><small>AI credits left</small><b data-value="7600" data-format="compact">0</b></article><article><small>Reset in</small><b data-value="12" data-suffix=" days">0</b></article></div><div class="usage-grid"><section class="usage-row"><div><span><small>AI credits</small><b>7,600 / 10,000</b></span><b>76%</b></div><i><em style="width:76%"></em></i></section><section class="usage-row"><div><span><small>Storage</small><b>2.4 GB / 10 GB</b></span><b>24%</b></div><i><em style="width:24%"></em></i></section><section class="usage-row"><div><span><small>Team seats</small><b>4 / 8</b></span><b>50%</b></div><i><em style="width:50%"></em></i></section></div><section class="extra-card lav"><span class="extra-label">This cycle</span><b>AI usage is within plan</b><small>Estimated to finish the month with 18% credits remaining.</small></section><section class="billing-note"><b>Usage is visible before limits are reached.</b><small>Plan changes and billing actions remain explicit workspace operations.</small></section></div><nav class="bottom-nav"><button>⌂<small>Home</small></button><button>↗<small>Usage</small></button><button class="active">◈<small>Billing</small></button><button>⚙<small>Settings</small></button></nav></div><div class="frame-label"><b>Billing & credits</b><small>Plan · AI usage · storage · seats</small></div></article>
        <article class="phone" data-phone="workspace-controls"><div class="device"><header class="app-topbar"><img class="ui-logo" src="/brandspace-logo.svg" alt="BrandSpace" /><div class="page-title"><small>Access</small><b>Workspace controls</b></div><button class="top-icon">＋</button></header><div class="app-view workspace-view"><div class="extra-hero"><small>Workspace controls</small><b>People get the access they need—nothing more.</b></div><div class="workspace-summary"><article><small>Members</small><b data-value="4">0</b></article><article><small>Roles</small><b data-value="4">0</b></article><article><small>Brands</small><b data-value="2">0</b></article></div><div class="workspace-list" data-cycle-group="workspace-list"><button class="workspace-row active"><span>MM</span><div><b>Mohamed Mostafa</b><small>Owner · All brands</small></div><em>Full</em></button><button class="workspace-row"><span>SA</span><div><b>Sara Ahmed</b><small>Workspace admin · All brands</small></div><em>Admin</em></button><button class="workspace-row"><span>YK</span><div><b>Youssef Khaled</b><small>Content creator · BrandSpace</small></div><em>Scoped</em></button><button class="workspace-row"><span>LN</span><div><b>Lina Nasser</b><small>Reviewer · BrandSpace</small></div><em>Read + review</em></button></div><section class="access-card"><small>Live access policy</small><b>Brand and workspace scope is checked before every protected action.</b><div><span>Workspace</span><span>Role</span><span>Brand scope</span></div></section></div><nav class="bottom-nav"><button>⌂<small>Home</small></button><button class="active">♙<small>People</small></button><button>⚿<small>Roles</small></button><button>⚙<small>Settings</small></button></nav></div><div class="frame-label"><b>Workspace controls</b><small>Members · roles · brand scope · authority</small></div></article>
      </section>
    </section>`;

  const deck = document.querySelector('.deck');
  if (deck && !document.querySelector('#slide-6')) deck.insertAdjacentHTML('beforeend', extraSlides);

  const formatValue = (value, el) => {
    const suffix = el.dataset.suffix || '';
    const decimals = Number(el.dataset.decimals || 0);
    const pad = Number(el.dataset.pad || 0);
    const format = el.dataset.format || '';
    let text;
    if (format === 'compact') text = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(value);
    else if (format === 'comma') text = Math.round(value).toLocaleString('en-US');
    else if (decimals) text = Number(value).toFixed(decimals);
    else text = String(Math.round(value));
    if (pad) text = text.padStart(pad, '0');
    return text + suffix;
  };

  function animateCounter(el, duration = 900) {
    const target = Number(el.dataset.value || 0);
    if (!Number.isFinite(target)) return;
    if (reduceMotion) { el.textContent = formatValue(target, el); return; }
    const started = performance.now();
    const ease = t => 1 - Math.pow(1 - t, 3);
    const tick = now => {
      const p = Math.min(1, (now - started) / duration);
      el.textContent = formatValue(target * ease(p), el);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  function replayCounters(scope) {
    if (!scope) return;
    scope.querySelectorAll('[data-value]').forEach(el => { el.textContent = formatValue(0, el); animateCounter(el); });
  }

  function every(fn, ms) {
    if (reduceMotion) return;
    const id = setInterval(() => { if (!document.hidden) fn(); }, ms);
    timers.push(id);
  }

  function cycleChildren(container, selector = ':scope > *', ms = 2400, callback) {
    if (!container) return;
    const items = [...container.querySelectorAll(selector)];
    if (items.length < 2) return;
    let index = Math.max(0, items.findIndex(item => item.classList.contains('active')));
    const apply = () => { items.forEach((item, i) => item.classList.toggle('active', i === index)); callback?.(items[index], index, items); };
    apply();
    every(() => { index = (index + 1) % items.length; apply(); }, ms);
  }

  const overview = document.querySelector('[data-phone="overview"]');
  if (overview) {
    const rows = [...overview.querySelectorAll('[data-overview-row]')];
    const quick = [...overview.querySelectorAll('[data-quick]')];
    let rowIndex = 0, quickIndex = 0;
    replayCounters(overview);
    every(() => { rows.forEach((row, i) => row.classList.toggle('active', i === rowIndex)); rowIndex = (rowIndex + 1) % rows.length; }, 2200);
    every(() => { quick.forEach((card, i) => card.classList.toggle('active', i === quickIndex)); quickIndex = (quickIndex + 1) % quick.length; }, 3000);
  }

  const brain = document.querySelector('[data-phone="brain"]');
  if (brain) {
    const nodes = [...brain.querySelectorAll('.brain-node')];
    const cursor = brain.querySelector('.brain-cursor');
    const stage = brain.querySelector('.brain-stage');
    const cloud = brain.querySelector('.brain-particles');
    const title = brain.querySelector('#brainAreaTitle');
    const detail = brain.querySelector('#brainAreaDetail');
    let index = 0;
    if (cloud) {
      const particles = [];
      const count = 96;
      for (let i = 0; i < count; i += 1) {
        const dot = document.createElement('i'); dot.className = 'brain-particle';
        if (i % 4 === 0) dot.classList.add('purple'); if (i % 11 === 0) dot.classList.add('yellow'); cloud.appendChild(dot);
        const ratio = i / Math.max(1, count - 1), inclination = Math.acos(1 - 2 * ratio), azimuth = 2 * Math.PI * 1.61803398875 * i;
        particles.push({ el: dot, x: Math.sin(inclination) * Math.cos(azimuth), y: Math.sin(inclination) * Math.sin(azimuth), z: Math.cos(inclination) });
      }
      const renderParticles = now => {
        const t = reduceMotion ? 0 : now * 0.00022, ct = Math.cos(t), st = Math.sin(t), tilt = Math.sin(t * 1.7) * 0.12, cTilt = Math.cos(tilt), sTilt = Math.sin(tilt);
        particles.forEach(p => { const rx = p.x * ct - p.z * st, rz = p.x * st + p.z * ct, ry = p.y * cTilt - rz * sTilt, rz2 = p.y * sTilt + rz * cTilt, depth = (rz2 + 1) * .5, radius = 39 + depth * 8; p.el.style.left = `${50 + rx * radius}%`; p.el.style.top = `${48 + ry * radius}%`; p.el.style.opacity = `${.18 + depth * .72}`; p.el.style.transform = `translate(-50%,-50%) scale(${.55 + depth * .9})`; });
        if (!reduceMotion) particleRaf = requestAnimationFrame(renderParticles);
      };
      particleRaf = requestAnimationFrame(renderParticles);
    }
    const focusNode = node => {
      if (!node || !cursor || !stage) return;
      const nr = node.getBoundingClientRect(), sr = stage.getBoundingClientRect();
      cursor.style.left = `${nr.left - sr.left + nr.width * .5}px`; cursor.style.top = `${nr.top - sr.top + nr.height * .5}px`;
      setTimeout(() => { if (document.hidden) return; nodes.forEach(n => n.classList.toggle('active', n === node)); if (title) title.textContent = node.dataset.area || ''; if (detail) detail.textContent = node.dataset.detail || ''; }, reduceMotion ? 0 : 520);
    };
    requestAnimationFrame(() => focusNode(nodes[0]));
    every(() => { index = (index + 1) % nodes.length; focusNode(nodes[index]); }, 2500);
    window.addEventListener('resize', () => focusNode(nodes[index]), { passive: true });
  }

  const analytics = document.querySelector('[data-phone="analytics"]');
  if (analytics) {
    const ranks = [...analytics.querySelectorAll('[data-rank]')], period = analytics.querySelector('#periodButton'), badge = analytics.querySelector('#trendBadge');
    let rankIndex = 0;
    every(() => { rankIndex = (rankIndex + 1) % ranks.length; ranks.forEach((row, i) => row.classList.toggle('active', i === rankIndex)); }, 2400);
    every(() => { period?.classList.add('flash'); badge?.animate([{ transform: 'translateY(3px)', opacity: .45 }, { transform: 'translateY(0)', opacity: 1 }], { duration: 450, easing: 'ease-out' }); setTimeout(() => period?.classList.remove('flash'), 700); }, 5600);
  }

  ['.calendar-mini', '.post-grid-mini', '.feature-list-mini', '.media-grid-big', '.idea-stack', '.account-list', '.approval-list', '.team-list'].forEach((selector, i) => document.querySelectorAll(selector).forEach(container => cycleChildren(container, ':scope > [data-cycle-item]', 2250 + i * 120)));
  document.querySelectorAll('.tabs-mini').forEach(container => cycleChildren(container, ':scope > button', 3400));
  document.querySelectorAll('[data-channel-row]').forEach(container => cycleChildren(container, ':scope > button', 3100));
  document.querySelectorAll('[data-studio-tools]').forEach(container => cycleChildren(container, ':scope > button', 2300));
  document.querySelectorAll('.asset-row-mini').forEach(container => cycleChildren(container, ':scope > button', 2800));
  document.querySelectorAll('[data-suggestions]').forEach(container => cycleChildren(container, ':scope > button', 2600));

  const caption = document.querySelector('#captionTyping');
  if (caption && !reduceMotion) {
    const lines = ['A new collection, built for the pace of real life.', 'Made to move with your day — not slow it down.', 'One clear story. Four channels. Ready to publish.'];
    let lineIndex = 0;
    const typeLine = text => { let p = 0; caption.textContent = ''; const id = setInterval(() => { if (document.hidden) return; caption.textContent = text.slice(0, ++p); if (p >= text.length) clearInterval(id); }, 28); timers.push(id); };
    every(() => { lineIndex = (lineIndex + 1) % lines.length; typeLine(lines[lineIndex]); }, 5200);
  }

  document.querySelectorAll('[data-cycle-group]').forEach((container, i) => cycleChildren(container, ':scope > button', 2200 + (i % 4) * 260, (_active, index) => {
    if (container.dataset.cycleGroup === 'notifications') [...container.children].forEach((item, itemIndex) => item.classList.toggle('unread', itemIndex >= index && itemIndex < 3));
  }));

  const autoFlow = document.querySelector('[data-auto-flow]');
  if (autoFlow) {
    const nodes = [...autoFlow.querySelectorAll('.auto-node')]; let i = 0;
    every(() => { i = (i + 1) % nodes.length; nodes.forEach((node, index) => node.classList.toggle('active', index === i)); }, 1800);
  }

  document.querySelectorAll('[data-phone]').forEach(replayCounters);
  every(() => document.querySelectorAll('[data-phone]').forEach(replayCounters), 8500);

  document.addEventListener('visibilitychange', () => { if (!document.hidden) document.querySelectorAll('[data-phone]').forEach(replayCounters); });
  window.addEventListener('pagehide', () => { timers.forEach(clearInterval); if (particleRaf) cancelAnimationFrame(particleRaf); }, { once: true });
})();