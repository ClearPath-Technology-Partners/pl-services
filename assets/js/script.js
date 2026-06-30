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
