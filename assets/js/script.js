// Hero beams canvas animation (home page only)
(function initHeroBeams() {
  const canvas = document.getElementById('hero-beams-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const BEAM_COUNT = 15;
  let beams = [];
  let animId;

  function createBeam(w, h) {
    return {
      x: Math.random() * w * 1.5 - w * 0.25,
      y: Math.random() * h * 1.5 - h * 0.25,
      width: 30 + Math.random() * 60,
      length: h * 2.5,
      angle: -35 + Math.random() * 10,
      speed: 0.6 + Math.random() * 1.2,
      opacity: 0.12 + Math.random() * 0.16,
      hue: 190 + Math.random() * 70,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.03
    };
  }

  function resetBeam(beam, index, total) {
    const col = index % 3;
    const spacing = canvas.offsetWidth / 3;
    beam.y = canvas.offsetHeight + 100;
    beam.x = col * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
    beam.width = 100 + Math.random() * 100;
    beam.speed = 0.5 + Math.random() * 0.4;
    beam.hue = 190 + (index * 70) / total;
    beam.opacity = 0.2 + Math.random() * 0.1;
    return beam;
  }

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    const hero = canvas.parentElement;
    const w = hero.offsetWidth;
    const h = hero.offsetHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    beams = Array.from({ length: BEAM_COUNT }, () => createBeam(w, h));
  }

  function drawBeam(beam) {
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    const pulse = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2);
    ctx.save();
    ctx.translate(beam.x, beam.y);
    ctx.rotate(beam.angle * Math.PI / 180);
    const grad = ctx.createLinearGradient(0, 0, 0, beam.length);
    grad.addColorStop(0,   `hsla(${beam.hue},85%,65%,0)`);
    grad.addColorStop(0.1, `hsla(${beam.hue},85%,65%,${pulse * 0.5})`);
    grad.addColorStop(0.4, `hsla(${beam.hue},85%,65%,${pulse})`);
    grad.addColorStop(0.6, `hsla(${beam.hue},85%,65%,${pulse})`);
    grad.addColorStop(0.9, `hsla(${beam.hue},85%,65%,${pulse * 0.5})`);
    grad.addColorStop(1,   `hsla(${beam.hue},85%,65%,0)`);
    ctx.fillStyle = grad;
    ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
    ctx.restore();
  }

  function animate() {
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    ctx.clearRect(0, 0, w, h);
    const total = beams.length;
    beams.forEach((beam, i) => {
      beam.y -= beam.speed;
      beam.pulse += beam.pulseSpeed;
      if (beam.y + beam.length < -100) resetBeam(beam, i, total);
      drawBeam(beam);
    });
    animId = requestAnimationFrame(animate);
  }

  resize();
  window.addEventListener('resize', resize);
  animate();
})();

document.addEventListener('DOMContentLoaded', () => {

  // FAQ accordion
  document.addEventListener('click', e => {
    const btn = e.target.closest('.faq-q');
    if (!btn) return;
    const item = btn.closest('.faq-item');
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });

  // Service toggle buttons
  document.addEventListener('click', e => {
    if (e.target.classList.contains('t-btn')) {
      e.target.classList.toggle('active');
    }
  });

  // Quote form
  document.addEventListener('submit', e => {
    if (!e.target.matches('#quote-form')) return;
    e.preventDefault();
    const submitBtn = e.target.querySelector('.btn-submit');
    submitBtn.textContent = '✓ Request Sent — We\'ll be in touch soon!';
    submitBtn.style.background = '#1a7a3a';
    submitBtn.disabled = true;
    e.target.querySelectorAll('.ff').forEach(f => f.disabled = true);
    e.target.querySelectorAll('.t-btn').forEach(b => { b.disabled = true; b.style.opacity = '.5'; });
  });

  // Scroll-reveal (simple fade-in on scroll)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.svc-card, .rv-card, .why-item, .step-card, .g-item, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });
});
