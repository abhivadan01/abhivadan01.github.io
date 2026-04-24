// ═══════ TYPING EFFECT ═══════
const phrases = [
  'Embedded Systems',
  'Edge AI Solutions',
  'IoT Hardware',
  'Industrial Automation',
  'Intelligent Prototypes'
];
let phraseIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById('typedText');

function typeLoop() {
  const current = phrases[phraseIdx];
  if (!deleting) {
    typedEl.textContent = current.substring(0, charIdx + 1);
    charIdx++;
    if (charIdx === current.length) { deleting = true; setTimeout(typeLoop, 1800); return; }
    setTimeout(typeLoop, 80);
  } else {
    typedEl.textContent = current.substring(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; setTimeout(typeLoop, 400); return; }
    setTimeout(typeLoop, 40);
  }
}
typeLoop();

// ═══════ CURSOR BLINK ═══════
setInterval(() => {
  const c = document.querySelector('.cursor');
  if (c) c.style.opacity = c.style.opacity === '0' ? '1' : '0';
}, 530);

// ═══════ NAVBAR SCROLL ═══════
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ═══════ HAMBURGER ═══════
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
});

// ═══════ ACTIVE NAV LINK ═══════
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 200) current = sec.getAttribute('id');
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// ═══════ FADE-UP ON SCROLL ═══════
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ═══════ COUNTER ANIMATION ═══════
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target;
      const target = parseInt(el.dataset.target);
      let count = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        count += step;
        if (count >= target) { count = target; clearInterval(timer); }
        el.textContent = count + '+';
      }, 40);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-number[data-target]').forEach(el => counterObserver.observe(el));

// ═══════ PROJECT MODAL ═══════
const projectData = [
  {
    name: 'Smart Handwriting Learning Device',
    role: 'Embedded Systems & Edge AI Developer',
    award: '🏆 2nd Prize – WAVES Summit 2025 Innovate2Educate Challenge',
    media: 'assets/projects/handwriting_device/demo.mp4',
    mediaType: 'video',
    bullets: [
      'Built a low-cost stencil device using conductive copper path tracing and real-time touch feedback for handwriting improvement.',
      'Implemented an offline <strong>Edge AI model (1D CNN)</strong> for stroke validation and pattern analysis on-device.',
      'Developed embedded control logic for timing, continuity detection, and real-time scoring.',
      'Integrated <strong>ESP32 & Raspberry Pi</strong> with e-paper display for offline, real-time interaction.',
      'GPIO-based continuity detection; fully offline, reliable system. Aligned with Digital India & NEP 2020.'
    ],
    tags: ['ESP32', 'Raspberry Pi', '1D CNN', 'Edge AI', 'e-Paper', 'Python', 'C']
  },
  {
    name: 'Automatic Milk Dispensing System',
    role: 'Embedded & IoT Developer · Flow Calibration Engineer',
    award: '🥇 Finalist – EW Challenge 2024',
    media: 'assets/projects/milk_dispensing/demo.mp4',
    mediaType: 'video',
    bullets: [
      'Developed complete embedded firmware on microcontroller for automated liquid dispensing.',
      'Calibrated <strong>YF-S201 flow sensor</strong> for accurate liquid measurement.',
      'Integrated <strong>RFID-based authentication</strong> for secure user access.',
      'Enabled real-time <strong>cloud-based data logging</strong>, transaction tracking, and system diagnostics.'
    ],
    tags: ['Microcontroller', 'RFID', 'YF-S201', 'IoT', 'Cloud Logging', 'C']
  },
  {
    name: 'Intelligent Pneumatic Control System',
    role: 'Design & Automation Engineer',
    award: '🏭 JASC 2024 – CAD Design & Industrial Automation Challenge',
    media: 'assets/projects/pneumatic_control/thumbnail.jpg',
    mediaType: 'image',
    bullets: [
      'Designed and programmed a <strong>PLC-based pneumatic automation</strong> setup for industrial applications.',
      'Prepared CAD models using <strong>Fusion 360</strong> and tuned system parameters for smooth actuation.',
      'Improved operational efficiency, energy efficiency, reliability, and system safety.'
    ],
    tags: ['PLC', 'Ladder Logic', 'Pneumatics', 'Siemens TIA Portal', 'Fusion 360']
  },
  {
    name: 'Automated Environmental Monitoring System',
    role: 'Circuit & System Developer',
    award: '🌡️ Multi-Sensor IoT System',
    media: 'assets/projects/environmental_monitoring/demo.mp4',
    mediaType: 'video',
    bullets: [
      'Designed a multi-sensor system using <strong>ESP32</strong> with gas, temperature, and humidity sensors.',
      'Automated control of fans and relays to maintain stable plant conditions.',
      'Developed firmware for real-time display on <strong>OLED</strong> and cloud data logging.'
    ],
    tags: ['ESP32', 'Gas Sensor', 'DHT Sensor', 'IoT', 'OLED', 'Relay Control']
  },
  {
    name: 'AI-Powered Smart FOB & Road Safety System',
    role: 'Ideation · System Architecture · Presentation',
    award: '🚦 National Semi-Finalist – Road Safety Hackathon 2025 (NHAI & HOAI)',
    media: 'assets/projects/smart_fob/thumbnail.png',
    mediaType: 'image',
    bullets: [
      'Proposed an <strong>AI-powered Smart FOB</strong> and road safety system using IoT, motion sensors, and smart signage.',
      'Designed a scalable real-time alert architecture to reduce jaywalking and enhance pedestrian safety.',
      'Selected for National Semi-Final by NHAI & HOAI.'
    ],
    tags: ['AI', 'IoT', 'Motion Sensors', 'Smart Signage', 'System Architecture']
  },
  {
    name: 'Lab Equipment Booking & Maintenance Tracker',
    role: 'Frontend / Software Developer',
    award: '💻 Full Web Application (Solo Project)',
    media: 'assets/projects/local_chat/thumbnail.png',
    mediaType: 'image',
    bullets: [
      'Designed a responsive, role-based web app enabling students to book lab equipment and raise maintenance tickets.',
      'Admins can manage bookings, resolve issues, and monitor usage history.',
      'Implemented tabbed dashboards, dynamic form handling, simulated authentication, and notifications using pure client-side technologies.'
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Role-Based Auth']
  }
];

function openModal(idx) {
  const p = projectData[idx];
  const modal = document.getElementById('projectModal');
  const mediaDiv = document.getElementById('modalMedia');
  const bodyDiv = document.getElementById('modalBody');

  if (p.mediaType === 'video') {
    mediaDiv.innerHTML = `<video src="${p.media}" autoplay loop muted playsinline style="width:100%;height:100%;object-fit:cover;"></video>`;
  } else {
    mediaDiv.innerHTML = `<img src="${p.media}" alt="${p.name}">`;
  }

  bodyDiv.innerHTML = `
    <h2>${p.name}</h2>
    <div class="modal-role">${p.role}</div>
    <div class="modal-award">${p.award}</div>
    <ul>${p.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  document.getElementById('modalMedia').innerHTML = '';
}

document.getElementById('projectModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ═══════ CONTACT FORM ═══════
function handleSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('formName').value;
  const email = document.getElementById('formEmail').value;
  const subject = document.getElementById('formSubject').value || 'Portfolio Contact';
  const message = document.getElementById('formMessage').value;
  const mailto = `mailto:jayabalabhivadan2002@gmail.com?subject=${encodeURIComponent(subject + ' - from ' + name)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;
  window.location.href = mailto;
}
