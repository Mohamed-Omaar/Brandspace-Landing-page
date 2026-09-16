(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const timers = [];

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