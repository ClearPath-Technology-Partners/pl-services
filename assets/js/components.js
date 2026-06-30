const NAV = `
<nav class="site-nav">
  <a href="index.html" class="nav-logo"><img src="assets/images/logo.png" alt="PL Services LLC" class="nav-logo-img"></a>
  <ul class="nav-links">
    <li class="nav-dropdown">
      <a href="#">Services ▾</a>
      <div class="nav-drop-menu">
        <a href="lawn-care.html">Lawn Care &amp; Landscaping</a>
        <a href="car-detailing.html">Mobile Car Detailing</a>
        <a href="junk-removal.html">Junk Removal &amp; Moving</a>
        <a href="gutter-cleaning.html">Gutter Cleaning</a>
        <a href="snow-removal.html">Snow Removal</a>
      </div>
    </li>
    <li><a href="gallery.html">Gallery</a></li>
    <li><a href="reviews.html">Reviews</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
  <button class="nav-mob-btn" id="mob-toggle" aria-label="Menu">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  </button>
  <a href="contact.html" class="btn-primary nav-cta">Get a Free Quote</a>
</nav>
<div class="mobile-nav" id="mob-nav">
  <a href="index.html">Home</a>
  <a href="lawn-care.html">Lawn Care &amp; Landscaping</a>
  <a href="car-detailing.html">Mobile Car Detailing</a>
  <a href="junk-removal.html">Junk Removal &amp; Moving</a>
  <a href="gutter-cleaning.html">Gutter Cleaning</a>
  <a href="snow-removal.html">Snow Removal</a>
  <a href="gallery.html">Gallery</a>
  <a href="reviews.html">Reviews</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact / Get a Quote</a>
</div>`;

const TICKER = `
<div class="ticker-wrap">
  <div class="ticker-track">
    <span class="ticker-item">Lawn Care <span class="t-dot">●</span></span>
    <span class="ticker-item">Car Detailing <span class="t-dot">●</span></span>
    <span class="ticker-item">Junk Removal <span class="t-dot">●</span></span>
    <span class="ticker-item">Furniture Moving <span class="t-dot">●</span></span>
    <span class="ticker-item">Gutter Cleaning <span class="t-dot">●</span></span>
    <span class="ticker-item">Snow Removal <span class="t-dot">●</span></span>
    <span class="ticker-item">Power Washing <span class="t-dot">●</span></span>
    <span class="ticker-item">Handyman Work <span class="t-dot">●</span></span>
    <span class="ticker-item">Lawn Care <span class="t-dot">●</span></span>
    <span class="ticker-item">Car Detailing <span class="t-dot">●</span></span>
    <span class="ticker-item">Junk Removal <span class="t-dot">●</span></span>
    <span class="ticker-item">Furniture Moving <span class="t-dot">●</span></span>
    <span class="ticker-item">Gutter Cleaning <span class="t-dot">●</span></span>
    <span class="ticker-item">Snow Removal <span class="t-dot">●</span></span>
    <span class="ticker-item">Power Washing <span class="t-dot">●</span></span>
    <span class="ticker-item">Handyman Work <span class="t-dot">●</span></span>
  </div>
</div>`;

const QUOTE_FORM = `
<section class="quote-section" id="quote">
  <div class="container">
    <div class="quote-inner">
      <div class="q-left">
        <span class="eyebrow">Free No-Obligation Quote</span>
        <h2>Get Your Free Quote</h2>
        <p>No commitment, no pressure. Send us a few details and we'll get back to you fast — usually within a couple of hours.</p>
        <div class="q-details">
          <div class="q-det">
            <div class="q-det-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
            <div class="q-det-text"><strong>Fast response</strong>We typically reply within 2–4 hours during the day.</div>
          </div>
          <div class="q-det">
            <div class="q-det-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg></div>
            <div class="q-det-text"><strong>No obligation</strong>A quote is just information — no pressure to book.</div>
          </div>
          <div class="q-det">
            <div class="q-det-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/></svg></div>
            <div class="q-det-text"><strong>Senior &amp; veteran discounts</strong>20–30% off for qualifying customers — just mention it.</div>
          </div>
        </div>
      </div>
      <div class="qf-card">
        <div class="qf-title">Get your free quote</div>
        <div class="qf-sub">No commitment. We'll look at the job and give you a straight number.</div>
        <form class="qf-form" id="quote-form">
          <div class="form-row">
            <input class="ff" type="text" placeholder="Your name" required>
            <select class="ff">
              <option disabled selected>Property type</option>
              <option>Home</option>
              <option>Business</option>
              <option>Rental property</option>
              <option>Other</option>
            </select>
          </div>
          <input class="ff" type="email" placeholder="Email address" required>
          <input class="ff" type="tel" placeholder="Phone number">
          <span class="svc-lbl">Services you need</span>
          <div class="svc-toggles">
            <button type="button" class="t-btn">Lawn Care</button>
            <button type="button" class="t-btn">Car Detailing</button>
            <button type="button" class="t-btn">Junk Removal</button>
            <button type="button" class="t-btn">Furniture Moving</button>
            <button type="button" class="t-btn">Gutter Cleaning</button>
            <button type="button" class="t-btn">Snow Removal</button>
            <button type="button" class="t-btn">Power Washing</button>
            <button type="button" class="t-btn">Not sure yet</button>
          </div>
          <textarea class="ff" placeholder="Tell us what you need done — a few details help us get back to you faster."></textarea>
          <button type="submit" class="btn-submit">Get My Free Quote →</button>
          <p class="form-note">No spam. No pressure. Just a fair price.</p>
        </form>
      </div>
    </div>
  </div>
</section>`;

const AREA_BAND = `
<div class="area-band">
  <div class="container">
    <div class="area-inner">
      <span class="area-lbl">Service Areas</span>
      <div class="counties">
        <span class="county">Sandusky</span>
        <span class="county">Erie County</span>
        <span class="county">Lorain County</span>
        <span class="county">Cuyahoga County</span>
        <span class="county">Huron County</span>
        <span class="county">Ottawa County</span>
      </div>
    </div>
  </div>
</div>`;

const FOOTER = `
<div class="map-section">
  <div class="map-section-inner">
    <div class="map-text-row">
      <div>
        <span class="eyebrow">Our Location</span>
        <h3 class="map-heading">Based in Sandusky.<br>Serving Northern Ohio.</h3>
      </div>
      <div class="map-contact-quick">
        <a href="tel:4405416681" class="btn-primary ph-icon-sm" style="white-space:nowrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
          440-541-6681
        </a>
        <a href="contact.html#quote" class="btn-outline">Get a Free Quote →</a>
      </div>
    </div>
    <div class="map-embed">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d764473.2118066788!2d-82.163854!3d41.54275815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x61c94b875753b181%3A0xace746070fc66157!2sPL%20Services%20LLC!5e0!3m2!1sen!2sus!4v1782784009280!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  </div>
</div>
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="assets/images/logo.png" alt="PL Services LLC" style="height:52px;width:auto;display:block;margin-bottom:4px">
        <p>Locally owned in Sandusky, Ohio. Reliable lawn, home, auto &amp; hauling services across Northern Ohio since 2018.</p>
        <div class="footer-socials">
          <a href="https://www.facebook.com/peyton.lerch.2025/" target="_blank" rel="noopener">Facebook</a>
          <a href="https://www.instagram.com/pl.services_/" target="_blank" rel="noopener">Instagram</a>
          <a href="https://www.google.com/search?q=PL+Services+LLC+Reviews&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-__MsCIfERP-M7L07Cd3g_t_HKKCUBsO_9CDvdBYVOok3WmDDxHjyftuU1w13GnnYl99DkTVVk-UA7TSSqgXtgQke1F08" target="_blank" rel="noopener">Google Reviews</a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Services</h5>
        <ul class="footer-links">
          <li><a href="lawn-care.html">Lawn Care &amp; Landscaping</a></li>
          <li><a href="car-detailing.html">Mobile Car Detailing</a></li>
          <li><a href="junk-removal.html">Junk Removal</a></li>
          <li><a href="junk-removal.html">Furniture Moving</a></li>
          <li><a href="gutter-cleaning.html">Gutter Cleaning</a></li>
          <li><a href="snow-removal.html">Snow Removal</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Company</h5>
        <ul class="footer-links">
          <li><a href="about.html">About PL Services</a></li>
          <li><a href="gallery.html">Gallery &amp; Before/After</a></li>
          <li><a href="reviews.html">Customer Reviews</a></li>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="contact.html">Get a Free Quote</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Contact</h5>
        <div class="fc-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
          <span><a href="tel:4405416681">440-541-6681</a><br>Call or text anytime</span>
        </div>
        <div class="fc-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
          <span>peytonlerch8@gmail.com</span>
        </div>
        <div class="fc-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
          <span>Sandusky, Ohio<br>Serving Northern Ohio</span>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 PL Services LLC. All rights reserved.</p>
      <div class="fb-links">
        <a href="#">Senior &amp; Veteran Discounts</a>
        <a href="contact.html">Request a Quote</a>
      </div>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-ph');
  const footerEl = document.getElementById('footer-ph');
  const tickerEl = document.getElementById('ticker-ph');
  const quoteEl = document.getElementById('quote-ph');
  const areaEl = document.getElementById('area-ph');

  if (navEl) navEl.innerHTML = NAV;
  if (footerEl) footerEl.innerHTML = FOOTER;
  if (tickerEl) tickerEl.innerHTML = TICKER;
  if (quoteEl) quoteEl.innerHTML = QUOTE_FORM;
  if (areaEl) areaEl.innerHTML = AREA_BAND;

  document.addEventListener('click', e => {
    if (e.target.closest('#mob-toggle')) {
      document.getElementById('mob-nav')?.classList.toggle('open');
    }
  });
});
