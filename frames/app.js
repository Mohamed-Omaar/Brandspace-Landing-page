(() => {
  const deckStyle = document.createElement('link');
  deckStyle.rel = 'stylesheet';
  deckStyle.href = './deck.css';
  document.head.appendChild(deckStyle);

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const timers = [];
  let particleRaf = 0;

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

  function cycle(containerSelector, itemSelector, ms = 2600, className = 'active') {
    document.querySelectorAll(containerSelector).forEach(container => {
      const items = [...container.querySelectorAll(itemSelector)];
      if (items.length < 2) return;
      let index = Math.max(0, items.findIndex(item => item.classList.contains(className)));
      every(() => {
        index = (index + 1) % items.length;
        items.forEach((item, i) => item.classList.toggle(className, i === index));
      }, ms);
    });
  }

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

  const brain = document.querySelector('[data-phone="brain"]');
  if (brain) {
    const nodes = [...brain.querySelectorAll('.brain-node')];
    const cursor = brain.querySelector('.brain-cursor');
    const stage = brain.querySelector('.brain-stage');
    const cloud = brain.querySelector('.brain-particles');
    const title = brain.querySelector('#brainAreaTitle');
    const detail = brain.querySelector('#brainAreaDetail');
    let index = 0;
    replayCounters(brain);

    if (cloud) {
      const particles = [];
      const count = 96;
      for (let i = 0; i < count; i += 1) {
        const dot = document.createElement('i');
        dot.className = 'brain-particle';
        if (i % 4 === 0) dot.classList.add('purple');
        if (i % 11 === 0) dot.classList.add('yellow');
        cloud.appendChild(dot);
        const ratio = i / Math.max(1, count - 1);
        const inclination = Math.acos(1 - 2 * ratio);
        const azimuth = 2 * Math.PI * 1.61803398875 * i;
        particles.push({el: dot,x: Math.sin(inclination) * Math.cos(azimuth),y: Math.sin(inclination) * Math.sin(azimuth),z: Math.cos(inclination)});
      }
      const renderParticles = now => {
        const t = reduceMotion ? 0 : now * 0.00022;
        const ct = Math.cos(t), st = Math.sin(t);
        const tilt = Math.sin(t * 1.7) * 0.12;
        const cTilt = Math.cos(tilt), sTilt = Math.sin(tilt);
        particles.forEach(p => {
          const rx = p.x * ct - p.z * st;
          const rz = p.x * st + p.z * ct;
          const ry = p.y * cTilt - rz * sTilt;
          const rz2 = p.y * sTilt + rz * cTilt;
          const depth = (rz2 + 1) * 0.5;
          const radius = 39 + depth * 8;
          p.el.style.left = `${50 + rx * radius}%`;
          p.el.style.top = `${48 + ry * radius}%`;
          p.el.style.opacity = `${0.18 + depth * 0.72}`;
          p.el.style.transform = `translate(-50%,-50%) scale(${0.55 + depth * 0.9})`;
        });
        if (!reduceMotion) particleRaf = requestAnimationFrame(renderParticles);
      };
      particleRaf = requestAnimationFrame(renderParticles);
    }

    const focusNode = node => {
      if (!node || !cursor || !stage) return;
      const nodeRect = node.getBoundingClientRect();
      const stageRect = stage.getBoundingClientRect();
      cursor.style.left = `${nodeRect.left - stageRect.left + nodeRect.width * .5}px`;
      cursor.style.top = `${nodeRect.top - stageRect.top + nodeRect.height * .5}px`;
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
        badge.animate([{transform:'translateY(3px)',opacity:.45},{transform:'translateY(0)',opacity:1}],{duration:450,easing:'ease-out'});
      }
      setTimeout(() => period?.classList.remove('flash'), 700);
    }, 5600);
  }

  /* Continuous “someone is using it” motion for the remaining demo-derived screens. */
  cycle('[data-calendar-grid]', '[data-cycle-item]', 2400);
  cycle('[data-post-grid]', '[data-cycle-item]', 2600);
  cycle('[data-cycle-tabs]', 'button', 3200);
  cycle('[data-channel-row]', 'button', 2200);
  cycle('[data-studio-tools]', 'button', 2300);
  cycle('.asset-row-mini', 'button', 3000);
  cycle('[data-feature-list]', '[data-cycle-item]', 2500);
  cycle('[data-media-grid]', '[data-cycle-item]', 2600);
  cycle('[data-suggestions]', 'button', 2300);
  cycle('[data-idea-stack]', '[data-cycle-item]', 2500);
  cycle('[data-account-list]', '[data-cycle-item]', 2600);
  cycle('[data-approval-list]', '[data-cycle-item]', 2400);
  cycle('[data-team-list]', '[data-cycle-item]', 2500);

  document.querySelectorAll('[data-phone="campaigns"],[data-phone="reports"],[data-phone="team"]').forEach(scope => {
    replayCounters(scope);
    every(() => replayCounters(scope), 7200);
  });

  const caption = document.getElementById('captionTyping');
  if (caption && !reduceMotion) {
    const phrases = [
      'A new collection, built for the pace of real life.',
      'Thoughtful details, simple choices, and more room to breathe.',
    ];
    let phraseIndex = 0;
    const typePhrase = text => {
      let i = 0;
      caption.textContent = '';
      const id = setInterval(() => {
        if (document.hidden) return;
        caption.textContent = text.slice(0, i += 1);
        if (i >= text.length) clearInterval(id);
      }, 34);
      timers.push(id);
    };
    typePhrase(phrases[0]);
    every(() => {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typePhrase(phrases[phraseIndex]);
    }, 5600);
  }

  const slides = [...document.querySelectorAll('.slide-card')];
  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.animate([{transform:'translateY(10px)',opacity:.92},{transform:'translateY(0)',opacity:1}],{duration:650,easing:'cubic-bezier(.2,.75,.25,1)',fill:'both'});
        }
      });
    }, {threshold:.16});
    slides.forEach(slide => observer.observe(slide));
  }

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) document.querySelectorAll('.phone').forEach(replayCounters);
  });

  window.addEventListener('pagehide', () => {
    timers.forEach(clearInterval);
    if (particleRaf) cancelAnimationFrame(particleRaf);
  }, {once:true});
})();