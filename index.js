// Selected initial date reference (Default: Jan 1, 2014)
let startDate = new Date('2014-01-01T00:00:00');

// DOM Elements Reference
const els = {
  years: document.getElementById('years'),
  months: document.getElementById('months'),
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
  fullBgLayer: document.getElementById('full-bg-layer'),
  footerImgContainer: document.getElementById('footer-image-container'),
  btnModeFull: document.getElementById('btn-mode-full'),
  btnModeFooter: document.getElementById('btn-mode-footer')
};

const milestoneDescEl = document.getElementById('milestone-description');

/**
 * Exact Time Counter Calculation
 */
function updateCounter() {
  const now = new Date();

  let cursor = new Date(startDate);
  let years = now.getFullYear() - cursor.getFullYear();
  cursor.setFullYear(cursor.getFullYear() + years);

  if (cursor > now) {
    years--;
    cursor.setFullYear(cursor.getFullYear() - 1);
  }

  let months = now.getMonth() - cursor.getMonth();
  if (months < 0) months += 12;

  const monthCursor = new Date(cursor);
  monthCursor.setMonth(monthCursor.getMonth() + months);

  if (monthCursor > now) {
    months--;
    monthCursor.setMonth(monthCursor.getMonth() - 1);
  }

  let remaining = now - monthCursor;

  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;

  const days = Math.floor(remaining / day);
  remaining -= days * day;

  const hours = Math.floor(remaining / hour);
  remaining -= hours * hour;

  const mins = Math.floor(remaining / minute);
  remaining -= mins * minute;

  const seconds = Math.floor(remaining / second);

  els.years.textContent = String(years).padStart(2, '0');
  els.months.textContent = String(months).padStart(2, '0');
  els.days.textContent = String(days).padStart(2, '0');
  els.hours.textContent = String(hours).padStart(2, '0');
  els.minutes.textContent = String(mins).padStart(2, '0');
  els.seconds.textContent = String(seconds).padStart(2, '0');
}

// Initialize Timer Loop
updateCounter();
setInterval(updateCounter, 1000);

/**
 * Start Date Preset Selectors Logic & Tooltips
 */
document.querySelectorAll('.preset-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    // Toggle Active Button Style
    document.querySelectorAll('.preset-btn').forEach((b) => {
      b.classList.remove('active', 'border-vicePink/50', 'bg-vicePink/30', 'text-white');
      b.classList.add('border-white/15', 'bg-slate-900/50', 'text-slate-200');
    });

    btn.classList.add('active', 'border-vicePink/50', 'bg-vicePink/30', 'text-white');
    btn.classList.remove('border-white/15', 'bg-slate-900/50', 'text-slate-200');

    // Update Start Date & Recalculate
    const dateStr = btn.getAttribute('data-start');
    startDate = new Date(dateStr + 'T00:00:00');
    updateCounter();

    // Update Milestone Description
    const desc = btn.getAttribute('data-desc');
    if (milestoneDescEl && desc) {
      milestoneDescEl.textContent = desc;
    }
  });
});

/**
 * Image Display Modes Switcher (Background vs Footer)
 */
function setDisplayMode(mode) {
  if (mode === 'full') {
    els.fullBgLayer.classList.remove('opacity-0', 'pointer-events-none');
    els.fullBgLayer.classList.add('opacity-70');
    els.footerImgContainer.classList.add('hidden');

    els.btnModeFull.className =
      'px-3.5 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 bg-gradient-to-r from-vicePink to-viceAccent text-white shadow-md';
    els.btnModeFooter.className =
      'px-3.5 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 text-slate-300 hover:text-white hover:bg-white/5';
  } else {
    els.fullBgLayer.classList.remove('opacity-70');
    els.fullBgLayer.classList.add('opacity-0', 'pointer-events-none');
    els.footerImgContainer.classList.remove('hidden');

    els.btnModeFooter.className =
      'px-3.5 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 bg-gradient-to-r from-vicePink to-viceAccent text-white shadow-md';
    els.btnModeFull.className =
      'px-3.5 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 text-slate-300 hover:text-white hover:bg-white/5';
  }
}

els.btnModeFull.addEventListener('click', () => setDisplayMode('full'));
els.btnModeFooter.addEventListener('click', () => setDisplayMode('footer'));

setDisplayMode('full');

/**
 * Generador de partículas flotantes (Motas retro)
 */
const particlesContainer = document.getElementById('particles-container');
const particleCount = 25;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  const size = Math.random() * 3 + 1;
  const left = Math.random() * 100;
  const duration = Math.random() * 8 + 6;
  const delay = Math.random() * 5;

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${left}%`;
  particle.style.animationDuration = `${duration}s`;
  particle.style.animationDelay = `${delay}s`;

  if (i % 3 === 0) {
    particle.style.background = '#ff6fae';
    particle.style.boxShadow = '0 0 6px #ff6fae';
  } else if (i % 3 === 1) {
    particle.style.background = '#69d9d0';
    particle.style.boxShadow = '0 0 6px #69d9d0';
  } else {
    particle.style.background = '#ffffff';
  }

  particlesContainer.appendChild(particle);
}

/**
 * Easter Egg: Reproductor de Audio Synthwave
 */
const audioBtn = document.getElementById('audio-toggle-btn');
const audioEl = document.getElementById('synthwave-audio');
const audioIcon = document.getElementById('audio-icon');
let isPlaying = false;

audioBtn.addEventListener('click', () => {
  if (isPlaying) {
    audioEl.pause();
    audioIcon.className = 'fa-solid fa-volume-xmark text-vicePink';
    audioBtn.classList.remove('border-vicePink', 'shadow-vicePink/20');
    isPlaying = false;
  } else {
    audioEl
      .play()
      .then(() => {
        audioIcon.className = 'fa-solid fa-volume-high text-viceAqua animate-pulse';
        audioBtn.classList.add('border-vicePink', 'shadow-vicePink/20');
        isPlaying = true;
      })
      .catch((err) => {
        console.log('Reproducción bloqueada por el navegador:', err);
      });
  }
});

/**
 * Toggle de Tema (Modo Neón Extremo)
 */
const themeBtn = document.getElementById('theme-toggle-btn');
const themeIcon = document.getElementById('theme-icon');
let isNeonMode = false;

themeBtn.addEventListener('click', () => {
  isNeonMode = !isNeonMode;
  document.body.classList.toggle('neon-mode', isNeonMode);

  if (isNeonMode) {
    themeIcon.className = 'fa-solid fa-bolt text-vicePink animate-bounce';
    themeBtn.style.borderColor = '#ff6fae';
  } else {
    themeIcon.className = 'fa-solid fa-moon text-viceAqua';
    themeBtn.style.borderColor = 'rgba(255, 255, 255, 0.1)';
  }
});
