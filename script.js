const app = document.querySelector('#app');
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}

const illustrations = {
  home: `
  <svg viewBox="0 0 640 520" role="img" aria-label="Abstract black and white software interface illustration" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="brandGradientHome" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ff006e"/>
        <stop offset="50%" stop-color="#2563eb"/>
        <stop offset="100%" stop-color="#ffbe0b"/>
      </linearGradient>
    </defs>

    <rect width="640" height="520" fill="white"/>
    <rect x="72" y="76" width="496" height="344" rx="34" fill="white" stroke="#0a0a0a" stroke-width="14"/>
    <circle cx="122" cy="130" r="13" fill="url(#brandGradientHome)"/>
    <circle cx="166" cy="130" r="13" fill="url(#brandGradientHome)"/>
    <circle cx="210" cy="130" r="13" fill="url(#brandGradientHome)"/>
    <rect x="112" y="188" width="186" height="32" rx="16" fill="#0a0a0a"/>
    <rect x="112" y="250" width="416" height="24" rx="12" fill="#0a0a0a" opacity=".85"/>
    <rect x="112" y="302" width="346" height="24" rx="12" fill="#0a0a0a" opacity=".65"/>
    <path d="M458 178l44 44-44 44M386 266l-44-44 44-44" fill="none" stroke="#0a0a0a" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  
  about: `
  <svg viewBox="0 0 640 520" role="img" aria-label="Abstract black and white connected nodes illustration" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="brandGradientAbout" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ff006e"/>
        <stop offset="50%" stop-color="#2563eb"/>
        <stop offset="100%" stop-color="#ffbe0b"/>
      </linearGradient>
    </defs>

    <rect width="640" height="520" fill="white"/>
    <path d="M138 372L266 214l126 98 110-168" fill="none" stroke="#0a0a0a" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="138" cy="372" r="54" fill="white" stroke="#0a0a0a" stroke-width="14"/>
    <circle cx="266" cy="214" r="55" fill="url(#brandGradientAbout)" stroke="#0a0a0a" stroke-width="14"/>
    <circle cx="392" cy="312" r="52" fill="white" stroke="#0a0a0a" stroke-width="14"/>
    <circle cx="502" cy="144" r="56" fill="url(#brandGradientAbout)" stroke="#0a0a0a" stroke-width="14"/>
    <rect x="92" y="94" width="168" height="24" rx="12" fill="#0a0a0a" opacity=".75"/>
    <rect x="92" y="136" width="120" height="24" rx="12" fill="#0a0a0a" opacity=".45"/>
  </svg>`,
  
  contact: `
  <svg viewBox="0 0 640 520" role="img" aria-label="Abstract black and white contact envelope illustration" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="brandGradientContact" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ff006e"/>
        <stop offset="50%" stop-color="#2563eb"/>
        <stop offset="100%" stop-color="#ffbe0b"/>
      </linearGradient>
    </defs>

    <rect width="640" height="520" fill="white"/>
    <rect x="96" y="138" width="448" height="284" rx="38" fill="white" stroke="#0a0a0a" stroke-width="14"/>
    <path d="M116 174l204 150 204-150" fill="none" stroke="#0a0a0a" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M116 390l154-122M524 390L370 268" fill="none" stroke="#0a0a0a" stroke-width="16" stroke-linecap="round"/>

    <circle cx="486" cy="112" r="47" fill="url(#brandGradientContact)" stroke="#0a0a0a" stroke-width="14"/>
    <path d="M466 112h40M486 92v40" stroke="white" stroke-width="10" stroke-linecap="round"/>
  </svg>`
};

const pages = {
  home: `
    <section class="animated-section hero grid-two">
      <div class="copy-block stagger">
        <p class="eyebrow">Software • Design • SEO</p>
        <h1>Modern websites and software made simple.</h1>
        <p class="lead">California-based U.S. team creating clean, fast, and practical digital products for businesses that need a stronger online presence and smarter workflows.</p>
        <div class="button-row">
          <button class="button primary" data-page="contact">Start a Project</button>
          <button class="button secondary" data-page="about">Learn More</button>
        </div>
      </div>
      <div class="image-card floating-image">${illustrations.home}</div>
    </section>

    <section class="animated-section services-section">
      <div class="section-heading stagger">
        <p class="eyebrow">What we do</p>
        <h2>Simple services. Professional results.</h2>
      </div>

      <div class="cards">
        <article class="card animated-card">
          <span>01</span>
          <h3>Websites</h3>
          <p>Minimal, responsive, SEO-ready websites for small businesses and professional brands.</p>
        </article>

        <article class="card animated-card">
          <span>02</span>
          <h3>Web Apps</h3>
          <p>Practical web applications designed for real workflows, dashboards, and client portals.</p>
        </article>

        <article class="card animated-card">
          <span>03</span>
          <h3>Growth</h3>
          <p>Content structure, local SEO, technical SEO, and landing pages built to convert visitors.</p>
        </article>
      </div>
    </section>`,

  about: `
    <section class="animated-section page-hero grid-two">
      <div class="copy-block stagger">
        <p class="eyebrow">About us</p>
        <h1>Built in California. Made for business.</h1>
        <p class="lead">Lake Apps is a California-based U.S. digital studio creating modern websites, custom software, and digital growth solutions. We keep every project clear, direct, and practical.</p>
      </div>

      <div class="image-card floating-image">${illustrations.about}</div>
    </section>

    <section class="animated-section team-section" id="our-team">
      <div class="section-heading stagger">
        <p class="eyebrow">Our Team</p>
        <h2>Technology, design, and growth working together.</h2>
      </div>

      <div class="team-photo-grid">
      <article class="team-member animated-card">
          <img src="images/helen-saf.jpg" alt="Helen Saf" class="rotating-team-photo" />
          <h3>Helen Saf</h3>
          <p>Business / Designer</p>
        </article>
        
        <article class="team-member animated-card">
          <img src="images/deividas-strole.jpg" alt="Deividas Strole" class="rotating-team-photo" />
          <h3>Deividas Strole</h3>
          <p>Developer / Software Engineer</p>
        </article>

        <article class="team-member animated-card">
          <img src="images/marketing.jpg" alt="Marketing and SEO Specialist" class="rotating-team-photo" />
          <h3>Cooly</h3>
          <p>SEO / Marketing</p>
        </article>
      </div>
    </section>

    <section class="animated-section split-section">
      <div class="section-heading stagger">
        <p class="eyebrow">Team structure</p>
        <h2>Built for speed and accountability.</h2>
      </div>

      <div class="timeline">
       <div class="timeline-item animated-card">
           <strong>Business & Design</strong>
           <p>Helena Saf manages client communication, visual direction, layout, branding, and project organization. She holds Bachelor’s and Master’s degrees and has multi-year experience with corporate U.S. and international companies.</p>
       </div>
      
       <div class="timeline-item animated-card">
          <strong>Development</strong>
          <p>Deividas Strole leads software architecture, coding, deployment, performance, and technical maintenance. He holds a Bachelor’s degree in Computer Science and a Master’s degree in Software Engineering, with experience in Java, JavaScript technologies, and modern web application development.</p>        </div>
       
        <div class="timeline-item animated-card">
          <strong>Marketing & SEO</strong>
          <p>Our marketing partner handles search visibility, content planning, keyword strategy, and outreach.</p>
        </div>
      </div>
    </section>`,

  contact: `
    <section class="animated-section page-hero grid-two">
      <div class="copy-block stagger">
        <p class="eyebrow">Contact</p>
        <h1>Tell us what you want to build.</h1>
        <p class="lead">Send a short message about your business, website, or app idea. We will respond with a clear next step.</p>
      </div>

      <div class="image-card floating-image">${illustrations.contact}</div>
    </section>

    <section class="animated-section contact-panel">
      <form class="contact-form" id="contact-form">
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" />
        </label>

        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" />
        </label>

        <label>
          Message
          <textarea name="message" rows="6" placeholder="Tell us about your project"></textarea>
        </label>

        <button class="button primary" type="submit">Send Message</button>
      </form>
    </section>`
};

function getCurrentPage() {
  const hash = window.location.hash.replace('#/', '').replace('#', '');
  return ['about', 'contact'].includes(hash) ? hash : 'home';
}

function routeTo(page) {
  window.location.hash = page === 'home' ? '#/' : `#/${page}`;
}

function renderPage() {
  const page = getCurrentPage();

  if (!app) {
    return;
  }

  app.innerHTML = pages[page];

  document.querySelectorAll('[data-page]').forEach((element) => {
    element.addEventListener('click', () => routeTo(element.dataset.page));
    element.classList.toggle(
      'active',
      element.dataset.page === page && element.classList.contains('nav-link')
    );
  });

  const form = document.querySelector('#contact-form');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Demo form only. Connect this form to your email service or backend later.');
    });
  }

  observeAnimatedSections();
  setupScrollRotatingTeamPhotos();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function observeAnimatedSections() {
  const sections = document.querySelectorAll('.animated-section');

  if (!('IntersectionObserver' in window)) {
    sections.forEach((section) => section.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupScrollRotatingTeamPhotos() {
  const photos = document.querySelectorAll('.rotating-team-photo');

  if (!photos.length) {
    return;
  }

  function rotatePhotosOnScroll() {
    const rotation = 180 + window.scrollY * 0.35;

    photos.forEach((photo) => {
      photo.style.transform = `rotate(${rotation}deg) scale(1)`;
    });
  }

  window.removeEventListener('scroll', rotatePhotosOnScroll);
  window.addEventListener('scroll', rotatePhotosOnScroll);

  rotatePhotosOnScroll();
}

window.addEventListener('hashchange', renderPage);

if (!window.location.hash) {
  window.location.hash = '#/';
} else {
  renderPage();
}
