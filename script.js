/* ═══════════════════════════════════════════════
   WAGNER ASTOPILCO — PORTFOLIO SCRIPTS
═══════════════════════════════════════════════ */

/* ── i18n Translations ────────────────────────── */
const translations = {
  es: {
    "brand":                   "WA",
    "nav.home":                "Home",
    "nav.about":               "Sobre mí",
    "nav.projects":            "Proyectos",
    "nav.services":            "Servicios",
    "nav.contact":             "Contacto",
    "hero.eyebrow":            "Desarrollador Web & Móvil",
    "hero.tagline":            "Construyendo soluciones modernas orientadas a resultados.",
    "hero.cta.primary":        "Ver proyectos",
    "hero.cta.secondary":      "Hablemos",
    "about.title":             "Construyendo\ncon propósito",
    "about.p1":                "Soy Ingeniero de Sistemas con experiencia en el desarrollo de aplicaciones web modernas y aplicaciones Android. Mi enfoque está en entregar productos robustos, bien arquitecturados y con una experiencia de usuario cuidada.",
    "about.p2":                "Trabajo principalmente con <strong>Laravel</strong>, <strong>Vue.js</strong>, <strong>MySQL</strong> y Android con <strong>Java</strong>. Actualmente profundizo en arquitectura de software, integración frontend–backend, mejores prácticas de UX e integraciones con IA.",
    "about.cta":               "Trabajemos juntos",
    "about.stat1":             "Años de experiencia",
    "about.stat2":             "Proyectos completados",
    "about.stat3":             "Tecnologías dominadas",
    "about.stat4":             "Compromiso con el cliente",
    "about.tech":              "Tecnologías principales",
    "about.otherTech":         "Otras tecnologías conocidas",
    "projects.title":          "Trabajos destacados",
    "projects.filter.all":     "Todos",
    "projects.filter.web":     "Web",
    "projects.filter.mobile":  "Móvil",
    "projects.filter.ia":      "IA",
    "projects.demo":           "Demo",
    "projects.code":           "Código",
    "projects.github":         "Ver más en GitHub →",
    "projects.gym.title":      "Sistema de Gimnasio",
    "projects.gym.desc":       "Sistema administrativo para control de membresías, pagos y asistencia con panel de estadísticas en tiempo real.",
    "projects.dental.title":   "Landing Page de Consultorio Dental",
    "projects.dental.desc":    "Página de presentación optimizada para conversión y adaptada a cualquier dispositivo.",
    "projects.ia.title":      "Asistente IA de Reservas Deportivas",
    "projects.ia.desc":       "Solucion de automatización para reservar y agendar citas deportivas con google calendar, mercado pago y Gemini.",
    "projects.app.title":      "App Android de Gestión",
    "projects.app.desc":       "Aplicación móvil nativa con sincronización en tiempo real, modo offline y notificaciones push para gestión de campo.",
    "projects.dash.title":     "Dashboard Analítico",
    "projects.dash.desc":      "Panel de control con gráficos interactivos, exportación de reportes en PDF/Excel y gestión de roles de usuario.",
    "projects.ecom.title":     "E-commerce Móvil",
    "projects.ecom.desc":      "App de compras con carrito, pasarela de pagos integrada, seguimiento de pedidos y panel de vendedor.",
    "services.title":          "Te ofrecemos",
    "svc.badge":               "Popular",
    "svc.websites.title":       "Páginas y Sitios Web",
    "svc.websites.desc":        "Soluciones web orientadas a fortalecer la presencia digital, facilitar la información y generar nuevas oportunidades de interacción con potenciales clientes.",
    "svc.websites.f1":          "Páginas web informativas",
    "svc.websites.f2":          "Sitios web corporativos",
    "svc.websites.f3":          "Landing pages",
    "svc.websites.f4":          "Catálogos de productos",
    "svc.webapp.title":         "Sistemas Web Administrativos",
    "svc.webapp.desc":          "Soluciones web destinadas a organizar y controlar procesos de negocio facilitando la gestión desde una plataforma adaptada a las necesidades específicas.",
    "svc.webapp.f1":            "Dashboards y sistemas de gestión",
    "svc.webapp.f2":            "Sistemas de gestión de clientes (CRM)",
    "svc.webapp.f3":            "Sistemas de gestión empresarial (ERP)",
    "svc.android.title":        "Aplicaciones Android",
    "svc.android.desc":         "Soluciones diseñadas para optimizar la experiencia del usuario en dispositivos móviles así como complementar servicios existentes.",
    "svc.android.f1":           "Desarrollo de producto a medida",
    "svc.android.f2":           "Complemento de servicio existente",
    "svc.android.f3":           "Herramientas para procesos internos",
    "svc.auto.title":           "Automatizaciones",
    "svc.auto.desc":            "Soluciones orientadas a automatizar tareas, conectar herramientas y optimizar procesos, reduciendo la intervención manual.",
    "svc.auto.f1":              "Automatización de tareas repetitivas",
    "svc.auto.f2":              "Flujos automáticos de procesos",
    "svc.auto.f3":              "Chatbots y asistentes virtuales",
    "svc.maint.title":          "Mantenimiento y Soporte Web",
    "svc.maint.desc":           "Servicio destinado a mantener operativos, seguros y actualizados los productos digitales desarrollados.",
    "svc.maint.f1":             "Cambios y ampliaciones funcionales",
    "svc.maint.f2":             "Optimización de rendimiento",
    "svc.maint.f3":             "Actualización y modernización tecnológica",
    "svc.maint.f4":             "Revisión y solución de incidencias",
    "svc.redisign.title":       "Rediseño y Optimización Web",
    "svc.redisign.desc":        "Servicio destinado a modernizar la apariencia en diferentes dispositivos y optimizar la experiencia de usuario de los productos digitales.",
    "svc.redisign.f1":          "Rediseño de interfaz de usuario",
    "svc.redisign.f2":          "Optimización UI en diferentes dispositivos",
    "svc.redisign.f3":          "Optimización para conversion y SEO",
    "svc.redisign.f4":          "Integración de nuevas funcionalidades",
    "contact.title":            "Hablemos de tu proyecto",
    "contact.intro":            "¿Tienes una idea o proyecto en mente? Estoy disponible para trabajos freelance y colaboraciones. No dudes en escribirme.",
    "contact.name":             "Nombre",
    "contact.email":            "Correo electrónico",
    "contact.service":          "Servicio de interés",
    "contact.service.default":  "Selecciona un servicio",
    "contact.message":          "Mensaje",
    "contact.send":             "Enviar mensaje",
    "contact.success":          "¡Mensaje enviado! Te responderé pronto.",
    "footer.tagline":           "Construyendo soluciones web modernas,\nfuncionales y enfocadas en resultados reales.",
    "footer.nav.title":         "Navegación",
    "footer.social.title":      "Redes sociales",
    "footer.copy":              "© 2025 Wagner Astopilco. Todos los derechos reservados.",
    "wsp.tooltip":              "¡Escríbeme!",
  },
  en: {
    "brand":                   "WA",
    "nav.home":                "Home",
    "nav.about":               "About Me",
    "nav.projects":            "Projects",
    "nav.services":            "Services",
    "nav.contact":             "Contact",
    "hero.eyebrow":            "Systems Engineering · Freelance",
    "hero.tagline":            "Web & Mobile Developer — building modern results-oriented solutions.",
    "hero.cta.primary":        "View projects",
    "hero.cta.secondary":      "Let's talk",
    "hero.scroll":             "Scroll",
    "about.title":             "Building\nwith purpose",
    "about.p1":                "I am a Systems Engineer with experience developing modern web applications and Android apps. My focus is on delivering robust, well-architected products with a polished user experience.",
    "about.p2":                "I mainly work with <strong>Laravel</strong>, <strong>Vue.js</strong>, <strong>MySQL</strong> and Android with <strong>Java</strong>. Currently deepening my knowledge in software architecture, frontend–backend integration, UX best practices and IA integration.",
    "about.cta":               "Let's work together",
    "about.stat1":             "Years of experience",
    "about.stat2":             "Completed projects",
    "about.stat3":             "Mastered technologies",
    "about.stat4":             "Client commitment",
    "about.tech":              "Technology stack",
    "about.otherTech":         "Other known technologies",
    "projects.title":          "Featured work",
    "projects.filter.all":     "All",
    "projects.filter.web":     "Web",
    "projects.filter.mobile":  "Mobile",
    "projects.filter.ia":      "IA",
    "projects.demo":           "Demo",
    "projects.code":           "Code",
    "projects.github":         "See more on GitHub →",
    "projects.gym.title":      "Gym Management System",
    "projects.gym.desc":       "Administrative system for membership, payment, and attendance control with a real-time statistics dashboard.",
    "projects.dental.title":    "Landing Page for Dental Clinic",
    "projects.dental.desc":     "Page optimized for conversion and adapted for any device.",
    "projects.ia.title":       "AI Assistant for Sports Reservations",
    "projects.ia.desc":        "Automation solution for booking and scheduling sports appointments with Google Calendar, Mercado Pago, and Gemini.",
    "projects.app.title":      "Android Management App",
    "projects.app.desc":       "Native mobile app with real-time sync, offline mode, and push notifications for field management.",
    "projects.dash.title":     "Analytics Dashboard",
    "projects.dash.desc":      "Control panel with interactive charts, PDF/Excel report export, and user role management.",
    "projects.ecom.title":     "Mobile E-commerce",
    "projects.ecom.desc":      "Shopping app with cart, integrated payment gateway, order tracking, and vendor panel.",
    "services.title":          "What I offer",
    "svc.badge":               "Popular",
    "svc.websites.title":       "Pages and Websites",
    "svc.websites.desc":        "Web solutions designed to strengthen digital presence, provide information, and generate new opportunities for interaction with potential clients.",
    "svc.websites.f1":          "Informational websites",
    "svc.websites.f2":          "Corporate websites",
    "svc.websites.f3":          "Landing pages",
    "svc.websites.f4":          "Product catalogs",
    "svc.webapp.title":        "Web Applications and Admin Systems",
    "svc.webapp.desc":         "Web solutions designed to organize and control business processes, facilitating management from a platform tailored to specific needs.",
    "svc.webapp.f1":           "Dashboards and management systems",
    "svc.webapp.f2":           "Customer management systems (CRM)",
    "svc.webapp.f3":           "Enterprise resource planning (ERP)",
    "svc.android.title":       "Android Applications",
    "svc.android.desc":        "Solutions designed to optimize user experience on mobile devices and complement existing services.",
    "svc.android.f1":          "Custom product development",
    "svc.android.f2":          "Complement to existing service",
    "svc.android.f3":          "Tools for internal processes",
    "svc.auto.title":          "Automation Solutions",
    "svc.auto.desc":           "Solutions aimed at automating tasks, connecting tools, and optimizing processes, reducing manual intervention.",
    "svc.auto.f1":             "Automating repetitive tasks",
    "svc.auto.f2":             "Automated process flows",
    "svc.auto.f3":             "Chatbots and virtual assistants",
    "svc.maint.title":         "Web Maintenance and Support",
    "svc.maint.desc":          "Service aimed at keeping developed digital products operational, secure, and up-to-date.",
    "svc.maint.f1":            "Functional changes and expansions",
    "svc.maint.f2":            "Performance optimization",
    "svc.maint.f3":            "Technological update and modernization",
    "svc.maint.f4":            "Issue review and resolution",
    "svc.redisign.title":      "Web Redesign and Optimization",
    "svc.redisign.desc":       "Service aimed at modernizing the appearance across different devices and optimizing the user experience of digital products.",
    "svc.redisign.f1":         "User interface redesign",
    "svc.redisign.f2":         "UI optimization across different devices",
    "svc.redisign.f3":         "Conversion and SEO optimization",
    "svc.redisign.f4":         "Integration of new functionalities",
    "contact.title":           "Let's talk about your project",
    "contact.intro":           "Do you have an idea or project in mind? I'm available for freelance work and collaborations. Don't hesitate to write to me.",
    "contact.name":            "Name",
    "contact.email":           "Email address",
    "contact.service":         "Service of interest",
    "contact.service.default": "Select a service",
    "contact.message":         "Message",
    "contact.send":            "Send message",
    "contact.success":         "Message sent! I'll get back to you soon.",
    "footer.tagline":          "Building modern web solutions,\nfunctional and focused on real results.",
    "footer.nav.title":        "Navigation",
    "footer.social.title":     "Social media",
    "footer.copy":             "© 2025 Wagner Astopilco. All rights reserved.",
    "wsp.tooltip":             "Write to me!",
  }
};

/* ── State ────────────────────────────────────── */
let currentLang  = localStorage.getItem('wa-lang')  || 'es';
let currentTheme = localStorage.getItem('wa-theme') || 'auto';

/* ── Theme ────────────────────────────────────── */
function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  const resolved = theme === 'auto' ? getSystemTheme() : theme;
  document.documentElement.setAttribute('data-theme', resolved);
  const icon = document.getElementById('themeIcon');
  if (icon) {
    icon.className = resolved === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
}

function toggleTheme() {
  if (currentTheme === 'auto') {
    const sys = getSystemTheme();
    currentTheme = sys === 'dark' ? 'light' : 'dark';
  } else {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  }
  localStorage.setItem('wa-theme', currentTheme);
  applyTheme(currentTheme);
}

document.getElementById('themeToggle').addEventListener('click', toggleTheme);

// Listen for system theme changes when mode is auto
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (currentTheme === 'auto') applyTheme('auto');
});

applyTheme(currentTheme);

/* ── Language ─────────────────────────────────── */
function applyLang(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!t[key]) return;

    const raw = t[key];
    // Handle section titles with \n as <br>
    const formatted = raw.replace(/\n/g, '<br>');

    // For elements that allow HTML (p tags with strong)
    if (el.tagName === 'P' || el.tagName === 'H2') {
      el.innerHTML = formatted;
    } else {
      el.textContent = t[key];
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update lang toggle label
  document.getElementById('langLabel').textContent = lang === 'es' ? 'EN' : 'ES';

  // Update filter buttons text in case they need refresh
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const key = btn.getAttribute('data-i18n');
    if (t[key]) btn.textContent = t[key];
  });
}

function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  localStorage.setItem('wa-lang', currentLang);
  applyLang(currentLang);
}

document.getElementById('langToggle').addEventListener('click', toggleLang);
applyLang(currentLang);

/* ── Navbar: scroll & active ──────────────────── */
const navbar    = document.getElementById('navbar');
const navLinks  = document.querySelectorAll('.nav-links a');
const sections  = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  // Scrolled class for shadow
  navbar.classList.toggle('scrolled', window.scrollY > 30);

  // Active nav link
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

/* ── Hamburger menu ───────────────────────────── */
const hamburger   = document.getElementById('hamburger');
const navLinksEl  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksEl.classList.toggle('open');
});

navLinksEl.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksEl.classList.remove('open');
  });
});

/* ── Project Filters ──────────────────────────── */
const filterBtns = document.querySelectorAll('.filter-btn');
const projCards  = document.querySelectorAll('.proj-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    projCards.forEach(card => {
      const match = filter === 'all' || card.getAttribute('data-cat') === filter;
      card.classList.toggle('hidden', !match);
    });
  });
});

/* ── Contact Form ─────────────────────────────── */
const form       = document.getElementById('contactForm');
const submitBtn  = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simple validation
  let valid = true;
  ['name','email','message'].forEach(id => {
    const el = document.getElementById(id);
    if (!el.value.trim()) {
      el.style.borderColor = '#c0392b';
      valid = false;
    } else {
      el.style.borderColor = '';
    }
  });
  if (!valid) return;

  // Simulate sending
  submitBtn.style.opacity = '0.6';
  submitBtn.style.pointerEvents = 'none';
  submitBtn.querySelector('span').textContent =
    currentLang === 'es' ? 'Enviando…' : 'Sending…';

  setTimeout(() => {
    form.reset();
    submitBtn.style.opacity = '';
    submitBtn.style.pointerEvents = '';
    submitBtn.querySelector('span').textContent =
      translations[currentLang]['contact.send'];
    formSuccess.classList.add('show');
    setTimeout(() => formSuccess.classList.remove('show'), 5000);
  }, 1400);
});

// Remove error border on input
['name','email','message'].forEach(id => {
  document.getElementById(id).addEventListener('input', function() {
    this.style.borderColor = '';
  });
});

/* ── Scroll Reveal ────────────────────────────── */
function initReveal() {
  const revealTargets = [
    '.about-grid',
    '.stat-card',
    '.tech-item',
    '.proj-card',
    '.svc-card',
    '.contact-info',
    '.contact-form',
    '.section-label',
    '.section-title',
  ];

  const allReveal = document.querySelectorAll(revealTargets.join(','));
  allReveal.forEach((el, i) => {
    el.classList.add('reveal');
    // Stagger cards
    if (el.matches('.stat-card, .tech-item, .proj-card, .svc-card')) {
      const siblings = el.parentElement.querySelectorAll(el.tagName + ', .stat-card, .tech-item, .proj-card, .svc-card');
      const idx = Array.from(siblings).indexOf(el);
      el.style.transitionDelay = `${idx * 0.07}s`;
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  allReveal.forEach(el => observer.observe(el));
}

initReveal();

/* ── Smooth anchor scroll ─────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 68;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
