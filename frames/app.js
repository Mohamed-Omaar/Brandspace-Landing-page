(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const frames = [...document.querySelectorAll('[data-frame]')];
  const dots = [...document.querySelectorAll('.progress-dot')];
  const animatedNumbers = new WeakSet();

  function formatNumber(value, el) {
    const decimals = Number(el.dataset.decimals || 0);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const format = el.dataset.format || '';

    if (format === 'compact') {
      const formatter = new Intl.NumberFormat('en', {
        notation: 'compact',
        maximumFractionDigits: value >= 100000 ? 0 : 1,
      });
      return `${prefix}${formatter.format(value)}${suffix}`;
    }

    const body = decimals > 0
      ? Number(value).toFixed(decimals)
      : Math.round(value).toLocaleString('en-US');
    return `${prefix}${body}${suffix}`;
  }

  function animateNumber(el) {
    if (animatedNumbers.has(el)) return;
    animatedNumbers.add(el);

    const target = Number(el.dataset.count || 0);
    if (!Number.isFinite(target)) return;

    if (reduceMotion) {
      el.textContent = formatNumber(target, el);
      return;
    }

    const duration = 1100;
    const start = performance.now();
    const easeOut = t => 1 - Math.pow(1 - t, 3);

    const tick = now => {
      const progress = Math.min(1, (now - start) / duration);
      el.textContent = formatNumber(target * easeOut(progress), el);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  function activateFrame(frame) {
    frame.classList.add('is-active');
    frame.querySelectorAll('.phone').forEach(phone => phone.classList.add('is-in'));
    frame.querySelectorAll('[data-count]').forEach(animateNumber);
    const id = frame.dataset.frame;
    dots.forEach(dot => dot.classList.toggle('active', dot.dataset.go === id));
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) activateFrame(entry.target);
      });
    }, { threshold: 0.34, rootMargin: '-8% 0px -18% 0px' });
    frames.forEach(frame => observer.observe(frame));
  } else {
    frames.forEach(activateFrame);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      document.getElementById(dot.dataset.go)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  });

  // Give the cover composition a subtle, deterministic entrance.
  requestAnimationFrame(() => document.body.classList.add('ready'));

  // Keep the progress indicator aligned with the closest frame even during fast scrolls.
  let scheduled = false;
  window.addEventListener('scroll', () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      const viewportCenter = window.innerHeight * 0.5;
      let closest = null;
      let distance = Infinity;
      frames.forEach(frame => {
        const rect = frame.getBoundingClientRect();
        const d = Math.abs(rect.top + rect.height * 0.5 - viewportCenter);
        if (d < distance) {
          distance = d;
          closest = frame;
        }
      });
      if (closest) {
        const id = closest.dataset.frame;
        dots.forEach(dot => dot.classList.toggle('active', dot.dataset.go === id));
      }
    });
  }, { passive: true });
})();