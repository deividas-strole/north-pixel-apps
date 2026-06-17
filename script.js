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


<section class="fly-walk-section animated-section" aria-hidden="true">
  <div class="fly-track">
    <div class="gradient-fly">
      <svg viewBox="0 0 140 90" class="fly-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lakeFlyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ff006e" />
            <stop offset="50%" stop-color="#2563eb" />
            <stop offset="100%" stop-color="#ffbe0b" />
          </linearGradient>

          <radialGradient id="wingGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
            <stop offset="100%" stop-color="#2563eb" stop-opacity="0.18" />
          </radialGradient>
        </defs>

        <ellipse class="fly-wing wing-top" cx="57" cy="27" rx="28" ry="15" fill="url(#wingGlow)" />
        <ellipse class="fly-wing wing-bottom" cx="57" cy="61" rx="28" ry="15" fill="url(#wingGlow)" />

        <ellipse cx="76" cy="45" rx="30" ry="17" fill="url(#lakeFlyGradient)" />
        <circle cx="108" cy="42" r="13" fill="url(#lakeFlyGradient)" />

        <circle cx="113" cy="38" r="3.5" fill="#ffffff" opacity="0.95" />
        <circle cx="114" cy="38" r="1.5" fill="#111111" opacity="0.75" />

        <path class="fly-leg leg-a" d="M66 58 C55 68, 43 70, 34 78" />
        <path class="fly-leg leg-b" d="M76 61 C68 73, 60 78, 52 84" />
        <path class="fly-leg leg-c" d="M88 58 C86 70, 84 78, 78 86" />

        <path class="fly-leg leg-d" d="M66 32 C55 22, 43 20, 34 12" />
        <path class="fly-leg leg-e" d="M76 29 C68 17, 60 12, 52 6" />
        <path class="fly-leg leg-f" d="M88 32 C86 20, 84 12, 78 4" />

        <path d="M119 40 C127 36, 132 35, 136 36" stroke="#2563eb" stroke-width="3" stroke-linecap="round" fill="none" />
      </svg>
    </div>
  </div>
</section>


    <section class="animated-section services-section">
      <div class="section-heading stagger">
        <p class="eyebrow">What we do</p>
        <h2>Simple services. Professional results.</h2>
      </div>

      <div class="cards">
        <article class="card animated-card">
          <span>01</span>
          <h3>Websites & AI</h3>
          <p>Modern, responsive websites with practical AI features, SEO-ready structure, and clean design for businesses.</p>
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
          <p>Our marketing partner combines human strategy with AI-powered research and analysis to improve search visibility, content planning, keyword strategy, outreach, and measurable digital growth.</p>
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
       <input type="hidden" name="access_key" value="b33b0ab6-4525-4fdb-a808-45d3b8eb6a6f" />
        <input type="hidden" name="subject" value="Inquiry from Lake Apps" />
        <input type="hidden" name="from_name" value="Lake Apps" />
        <input type="checkbox" name="botcheck" class="hidden" style="display: none;" />
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
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      console.log('Web3Forms response:', result);

      if (result.success) {
        alert('Thank you. Your message has been sent.');
        form.reset();
      } else {
        alert(result.message || 'Something went wrong. Please try again or email us directly.');
      }
    } catch (error) {
      console.error('Web3Forms error:', error);
      alert('Something went wrong. Please try again or email us directly.');
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
      }
    }
  });
}

  observeAnimatedSections();
  setupScrollRotatingTeamPhotos();
  setupWalkingFly();

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

// Walking fly

function setupWalkingFly() {
  const flySection = document.querySelector('.fly-walk-section');
  const fly = document.querySelector('.gradient-fly');

  if (!flySection || !fly) {
    return;
  }

const isMobile = window.innerWidth <= 700;
const startOffset = isMobile ? -25 : -25;
const speed = isMobile ? 0.12 : 0.8;
const enterPoint = isMobile ? 0.95 : 1.15;

  let lastScrollY = window.scrollY;
  let flyX = startOffset;
  let hasEnteredScreen = false;

  function setFlyPosition(x) {
    flyX = x;
    fly.dataset.flyX = String(flyX);
    fly.style.setProperty('--fly-x', `${flyX}px`);
  }

  setFlyPosition(startOffset);
  fly.classList.add('facing-right');

  function moveFlyOnScroll() {
    const currentScrollY = window.scrollY;
    const scrollDifference = currentScrollY - lastScrollY;

    const sectionRect = flySection.getBoundingClientRect();

  const sectionJustEntered =
  sectionRect.top < window.innerHeight * enterPoint &&
  sectionRect.bottom > 0;

    if (!sectionJustEntered) {
      hasEnteredScreen = false;
      lastScrollY = currentScrollY;
      return;
    }

    if (!hasEnteredScreen) {
      hasEnteredScreen = true;

      if (scrollDifference >= 0) {
        setFlyPosition(startOffset);
        fly.classList.remove('facing-left');
        fly.classList.add('facing-right');
      } else {
        const trackWidth = flySection.offsetWidth;
        const flyWidth = fly.offsetWidth;
        const maxMove = Math.max(trackWidth - flyWidth, 0);

        setFlyPosition(maxMove);
        fly.classList.remove('facing-right');
        fly.classList.add('facing-left');
      }

      lastScrollY = currentScrollY;
      return;
    }

    if (scrollDifference === 0) {
      return;
    }

    const trackWidth = flySection.offsetWidth;
    const flyWidth = fly.offsetWidth;
    const maxMove = Math.max(trackWidth - flyWidth, 0);

    setFlyPosition(Math.max(startOffset, Math.min(flyX + scrollDifference * speed, maxMove)));

    if (scrollDifference > 0) {
      fly.classList.remove('facing-left');
      fly.classList.add('facing-right');
    } else {
      fly.classList.remove('facing-right');
      fly.classList.add('facing-left');
    }

    lastScrollY = currentScrollY;
  }

  window.removeEventListener('scroll', moveFlyOnScroll);
  window.addEventListener('scroll', moveFlyOnScroll);
}
