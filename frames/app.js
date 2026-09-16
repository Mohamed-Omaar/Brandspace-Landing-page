(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const timers = [];

  // Presentation shell refinement: keep only the product-shaped surface.
  // No notch, status bar, battery, edge stroke or gesture bar. The frame now
  // uses the same soft radius/shadow language as the BrandSpace demo surfaces.
  const style = document.createElement('style');
  style.textContent = `
    :root{--phone:330px}
    .stage{width:min(1180px,calc(100% - 48px));padding:34px 0 42px}
    .phones{grid-template-columns:repeat(3,var(--phone));gap:38px;justify-content:center}
    .device{
      height:600px!important;
      border:0!important;
      border-radius:29px!important;
      background:#fff!important;
      box-shadow:0 22px 70px rgba(34,25,63,.10),0 4px 18px rgba(34,25,63,.045)!important;
      overflow:hidden;
    }
    .device:before,.device-top,.gesture{display:none!important}
    .app-topbar{
      height:58px!important;
      padding:12px 14px 10px!important;
      border-bottom:1px solid rgba(17,17,20,.06)!important;
      background:#fff!important;
    }
    .brand-mark{
      width:31px!important;
      height:31px!important;
      border-radius:9px!important;
      background:transparent url('/brandspace-logo.svg') center/contain no-repeat!important;
      color:transparent!important;
      font-size:0!important;
      box-shadow:none!important;
    }
    .app-view{padding:10px!important;background:#fafafa!important}
    .bottom-nav{height:46px!important;padding:3px 4px 5px!important;background:#fff!important}
    .frame-label{padding-top:13px!important}
    .demo-hero{min-height:118px!important;padding:11px!important}
    .demo-hero h2{font-size:14px!important}
    .surface-card{padding:9px!important;border-radius:15px!important}
    .brain-stage{height:244px!important;margin:4px -2px 2px!important}
    .brain-stage:before{width:205px!important;height:205px!important}
    .ring-one{width:144px!important;height:144px!important}
    .ring-two{width:205px!important;height:205px!important}
    .brain-center{width:76px!important;height:76px!important;border-radius:25px!important}
    .chart-card{min-height:158px!important}
    .chart-bars{height:112px!important;padding-top:8px!important}
    .audience-card{padding-bottom:8px!important}
    @media(max-width:1080px){
      :root{--phone:310px}
      .phones{gap:24px}
      .device{height:575px!important}
    }
    @media(max-width:860px){
      .phones{justify-content:flex-start}
      .device{height:600px!important}
    }
  `;
  document.head.appendChild(style);

  const formatValue = (value, el) => {
    const suffix = el.dataset.suffix || '';
    const decimals = Number(el.dataset.decimals || 0);
    const pad = Number(el.dataset.pad || 0);
    const format = el.dataset.format || '';
    let text;
    if (format === 'compact') {
      text = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(value);
    } else if (format === 'comma') {
      text = Math.round(value).toLocaleString('en-US');
    } else if (decimals) {
      text = Number(value).toFixed(decimals);
    } else {
      text = String(Math.round(value));
    }
    if (pad) text = text.padStart(pad, '0');
    return text + suffix;
  };

  function animateCounter(el, duration = 900) {
    const target = Number(el.dataset.value || 0);
    if (!Number.isFinite(target)) return;
    if (reduceMotion) {
      el.textContent = formatValue(target, el);
      return;
    }
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
    scope.querySelectorAll('[data-value]').forEach(el => {
      el.textContent = formatValue(0, el);
      animateCounter(el);
    });
  }

  function every(fn, ms) {
    if (reduceMotion) return;
    const id = setInterval(() => {
      if (!document.hidden) fn();
    }, ms);
    timers.push(id);
  }

  // Overview: behave like someone scanning the next scheduled item, then moving
  // through the existing demo quick actions. Counters replay as the dashboard refreshes.
  const overview = document.querySelector('[data-phone="overview"]');
  if (overview) {
    const rows = [...overview.querySelectorAll('[data-overview-row]')];
    const quick = [...overview.querySelectorAll('[data-quick]')];
    let rowIndex = 0;
    let quickIndex = 0;
    replayCounters(overview);
    every(() => {
      rows.forEach((row, i) => row.classList.toggle('active', i === rowIndex));
      rowIndex = (rowIndex + 1) % rows.length;
    }, 2200);
    every(() => {
      quick.forEach((card, i) => card.classList.toggle('active', i === quickIndex));
      quickIndex = (quickIndex + 1) % quick.length;
    }, 3000);
    every(() => replayCounters(overview), 7000);
  }

  // Brand Brain: rotate focus through the exact knowledge areas from the demo.
  // The cursor glides to each node first, then the node becomes active and the
  // panel updates — a quiet approximation of a person exploring the map.
  const brain = document.querySelector('[data-phone="brain"]');
  if (brain) {
    const nodes = [...brain.querySelectorAll('.brain-node')];
    const cursor = brain.querySelector('.brain-cursor');
    const stage = brain.querySelector('.brain-stage');
    const title = brain.querySelector('#brainAreaTitle');
    const detail = brain.querySelector('#brainAreaDetail');
    let index = 0;
    replayCounters(brain);

    const focusNode = node => {
      if (!node || !cursor || !stage) return;
      const nodeRect = node.getBoundingClientRect();
      const stageRect = stage.getBoundingClientRect();
      const left = nodeRect.left - stageRect.left + nodeRect.width * .5;
      const top = nodeRect.top - stageRect.top + nodeRect.height * .5;
      cursor.style.left = `${left}px`;
      cursor.style.top = `${top}px`;
      setTimeout(() => {
        if (document.hidden) return;
        nodes.forEach(n => n.classList.toggle('active', n === node));
        if (title) title.textContent = node.dataset.area || '';
        if (detail) detail.textContent = node.dataset.detail || '';
      }, reduceMotion ? 0 : 520);
    };

    requestAnimationFrame(() => focusNode(nodes[0]));
    every(() => {
      index = (index + 1) % nodes.length;
      focusNode(nodes[index]);
    }, 2500);
    every(() => replayCounters(brain), 7800);
    window.addEventListener('resize', () => focusNode(nodes[index]), { passive: true });
  }

  // Analytics: the demo chart already loops via CSS. Rotate the channel focus,
  // briefly touch the period control, and replay the numbers on the same rhythm
  // as a fresh analytics refresh.
  const analytics = document.querySelector('[data-phone="analytics"]');
  if (analytics) {
    const ranks = [...analytics.querySelectorAll('[data-rank]')];
    const period = analytics.querySelector('#periodButton');
    const badge = analytics.querySelector('#trendBadge');
    let rankIndex = 0;
    replayCounters(analytics);

    every(() => {
      rankIndex = (rankIndex + 1) % ranks.length;
      ranks.forEach((row, i) => row.classList.toggle('active', i === rankIndex));
    }, 2400);

    every(() => {
      replayCounters(analytics);
      period?.classList.add('flash');
      if (badge) {
        badge.textContent = '+18.4%';
        badge.animate(
          [{ transform: 'translateY(3px)', opacity: .45 }, { transform: 'translateY(0)', opacity: 1 }],
          { duration: 450, easing: 'ease-out' },
        );
      }
      setTimeout(() => period?.classList.remove('flash'), 700);
    }, 5600);
  }

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      document.querySelectorAll('.phone').forEach(replayCounters);
    }
  });

  window.addEventListener('pagehide', () => timers.forEach(clearInterval), { once: true });
})();