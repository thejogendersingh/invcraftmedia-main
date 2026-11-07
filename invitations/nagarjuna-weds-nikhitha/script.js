// Nikhitha weds Nagarjuna - South Indian Wedding Invitation Script

const translations = {
  en: {
    door_mantra: "|| SRIRASTHU • SHUBHAMASTHU • AVIGNAMASTHU ||",
    hero_mantra: "|| SRIRASTHU • SHUBHAMASTHU • AVIGNAMASTHU ||",
    hero_subtext: "Ravva Family Cordially Invites You To Celebrate The Wedding Of",
    hero_sloka: "|| Adityadi Grahas-sarve Svanakshatra Svarasayah | Kurvantu Mangalam Tabhyam Yayor-Udvaha Patrika ||",
    bride_name: "Nikhitha",
    weds_label: "weds",
    groom_name: "Nagarjuna",
    footer_bride: "Nikhitha",
    footer_weds: "weds",
    footer_groom: "Nagarjuna",
    hero_date: "22nd November 2026",
    hero_venue: "S.S.V. Function Hall, Hanumakonda",
    open_invitation: "Open Invitation",
    save_the_date: "SUBHA MUHURTHAM",
    muhurtham_timing: "09:49 AM • Ashwini Nakshatram, Dhanassu Lagnam",
    cnt_days: "DAYS",
    cnt_hours: "HOURS",
    cnt_mins: "MINUTES",
    cnt_secs: "SECONDS",
    events_title: "Wedding Ceremonies",
    lbl_date: "DATE",
    lbl_time: "TIME",
    lbl_venue: "VENUE",
    e1_badge: "MAIN WEDDING CEREMONY",
    e1_name: "Sumuhurtham : Kalyana Mahotsavam",
    e1_desc: "Auspicious wedding muhurtham in Ashwini Nakshatram, Dhanassu Lagnam",
    e1_date: "Sunday, 22nd November 2026",
    e1_time: "09:49 AM Sharp",
    e1_venue: "S.S.V. Function Hall, Opp. Vijaya Talkies, Hanumakonda",
    e2_badge: "TRADITIONAL WEDDING FEAST",
    e2_name: "Kalyana Vindu : Wedding Lunch",
    e2_desc: "Delicious traditional feast hosted with warm hospitality following the muhurtham",
    e2_date: "Sunday, 22nd November 2026",
    e2_time: "12:00 PM onwards",
    e2_venue: "S.S.V. Function Hall Dining, Hanumakonda",
    hosts_title: "With the Divine Blessings of: Smt. Ravva Bhagyamma - (Late Upender)",
    welcomed_by: "Invited By",
    family_names: "Smt. & Sri Ravva Ramesh - Vani",
    bride_fam_label: "Bride's Family",
    bride_parents: "Chi. Ravva Harish - Samatha (Shailaja)",
    bride_grandparents: "Bride: Chi.La.Sow. Nikhitha",
    groom_fam_label: "Groom's Family",
    groom_parents: "Smt. & Sri Goranti Vasudha - Vittal Guptha",
    groom_grandparents: "Groom: Chi. Nagarjuna",
    hosts_note: '"We solicit your gracious presence with family and friends on the auspicious occasion of the marriage of our daughter Chi.La.Sow. Nikhitha with Chi. Nagarjuna."',
    venue_label: "VENUE",
    where_celebrate: "Kalyana Vedika",
    get_directions: "Get Directions",
    footer_love: "WITH BEST COMPLIMENTS FROM NEAR & DEAR",
    hashtag: "#NIKHITHAWEDSNAGARJUNA"
  },
  te: {
    door_mantra: "|| శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు ||",
    hero_mantra: "|| శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు ||",
    hero_subtext: "రవ్వా వారి వివాహ మహోత్సవ ఆహ్వాన శుభపత్రిక",
    hero_sloka: "శ్లో॥ ఆదిత్యాది గ్రహాస్సర్వే స్వనక్షత్ర స్వరాశయః | కుర్వంతు మంగళం తాభ్యాం యయోరుద్వాహ పత్రికా॥",
    bride_name: "చి॥ల॥సౌ॥ నిఖిత",
    weds_label: "వివాహము",
    groom_name: "చి॥ నాగార్జున తో",
    footer_bride: "చి॥ల॥సౌ॥ నిఖిత",
    footer_weds: "వివాహము",
    footer_groom: "చి॥ నాగార్జున తో",
    hero_date: "22 నవంబర్ 2026",
    hero_venue: "యస్.యస్.వి. ఫంక్షన్ హాల్, హనుమకొండ",
    open_invitation: "ఆహ్వాన పత్రికను తెరవండి",
    save_the_date: "శుభ ముహూర్తం",
    muhurtham_timing: "ఉ॥గం॥ 9-49 ని॥లకు • అశ్విని నక్షత్రయుక్త ధనస్సు లగ్నం",
    cnt_days: "రోజులు",
    cnt_hours: "గంటలు",
    cnt_mins: "నిమిషాలు",
    cnt_secs: "సెకన్లు",
    events_title: "వివాహ శుభ కార్యక్రమాలు",
    lbl_date: "తేదీ",
    lbl_time: "సమయం",
    lbl_venue: "వేదిక",
    e1_badge: "ప్రధాన వివాహ కల్యాణ మహోత్సవం",
    e1_name: "సుముహూర్తం : కల్యాణ మహోత్సవం",
    e1_desc: "అశ్విని నక్షత్రయుక్త ధనస్సు లగ్న పుష్కరాంశ సుముహూర్తమున",
    e1_date: "ఆదివారం, 22 నవంబర్ 2026",
    e1_time: "ఉ॥గం॥ 9-49 ని॥లకు",
    e1_venue: "యస్.యస్.వి. ఫంక్షన్ హాల్, విజయ టాకీస్ ఎదురుగా, హనుమకొండ",
    e2_badge: "వివాహ విందు",
    e2_name: "కళ్యాణ విందు",
    e2_desc: "వివాహానంతరము మా ఆతిథ్యము స్వీకరించి మమ్మానందింపజేయ ప్రార్థన",
    e2_date: "ఆదివారం, 22 నవంబర్ 2026",
    e2_time: "మధ్యాహ్నం 12:00 గంటల నుండి",
    e2_venue: "యస్.యస్.వి. ఫంక్షన్ హాల్ డైనింగ్, హనుమకొండ",
    hosts_title: "దివ్యాశీస్సులు: శ్రీమతి రవ్వా భాగ్యమ్మ - (కీ॥శే॥ ఉపేందర్)",
    welcomed_by: "ఆహ్వానించువారు",
    family_names: "శ్రీమతి & శ్రీ రవ్వా రమేష్ - వాణి",
    bride_fam_label: "పెళ్లికూతురు తరఫున",
    bride_parents: "చి॥ రవ్వా హరీష్ - సమత (శైలజ)",
    bride_grandparents: "వధువు: చి॥ల॥సౌ॥ నిఖిత",
    groom_fam_label: "పెళ్లికొడుకు తరఫున",
    groom_parents: "శ్రీమతి & శ్రీ గోరంటి వసుధ - విఠల్ గుప్త",
    groom_grandparents: "వరుడు: చి॥ నాగార్జున",
    hosts_note: '"కావున తామెల్లరు విచ్చేసి నూతన వధూవరులను ఆశీర్వదించి మా ఆతిథ్యము స్వీకరించి మమ్మానందింపజేయ ప్రార్థన."',
    venue_label: "కళ్యాణవేదిక",
    where_celebrate: "కళ్యాణవేదిక",
    get_directions: "మార్గం చూడండి",
    footer_love: "బంధుమిత్రుల అభినందనలతో...",
    hashtag: "#NIKHITHAWEDSNAGARJUNA"
  }
};

let currentLang = localStorage.getItem('selected_language') || 'te';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('selected_language', lang);

  document.body.classList.remove('lang-en', 'lang-te');
  document.body.classList.add('lang-' + lang);

  document.querySelectorAll('.lang-pill').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById('lang-btn-' + lang);
  if (activeBtn) activeBtn.classList.add('active');

  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  if (window.drawScratchCover) {
    window.drawScratchCover();
  }
}

// ----------------------------------------------------
// FLOATING PETALS & FLOWERS CANVAS ENGINE
// ----------------------------------------------------
function initSlowPetalsCanvas() {
  const canvas = document.getElementById('petals-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const petalsCount = 28;
  const petals = [];

  for (let i = 0; i < petalsCount; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 7 + Math.random() * 12,
      vy: 0.25 + Math.random() * 0.45,
      vx: -0.15 + Math.random() * 0.3,
      swayFreq: 0.006 + Math.random() * 0.01,
      swayAmp: 0.8 + Math.random() * 1.4,
      angle: Math.random() * Math.PI * 2,
      vAngle: 0.004 + Math.random() * 0.008,
      opacity: 0.2 + Math.random() * 0.25,
      type: Math.random() > 0.4 ? 'flower' : Math.random() > 0.5 ? 'petal' : 'leaf'
    });
  }

  function drawJasmineFlower(ctx, x, y, size, angle, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.globalAlpha = opacity;

    ctx.fillStyle = '#FFFDF7';
    for (let i = 0; i < 5; i++) {
      ctx.rotate((Math.PI * 2) / 5);
      ctx.beginPath();
      ctx.ellipse(0, size * 0.6, size * 0.35, size * 0.65, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.beginPath();
    ctx.arc(0, 0, size * 0.25, 0, Math.PI * 2);
    ctx.fillStyle = '#E5A93C';
    ctx.fill();

    ctx.restore();
  }

  function drawMarigoldPetal(ctx, x, y, size, angle, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.globalAlpha = opacity;

    ctx.fillStyle = opacity > 0.3 ? '#D4AF37' : '#E89000';
    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.quadraticCurveTo(size * 0.7, 0, 0, size);
    ctx.quadraticCurveTo(-size * 0.7, 0, 0, -size);
    ctx.fill();

    ctx.restore();
  }

  function drawSoftLeaf(ctx, x, y, size, angle, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.globalAlpha = opacity * 0.8;

    ctx.fillStyle = '#2C5E43';
    ctx.beginPath();
    ctx.moveTo(0, -size * 1.2);
    ctx.quadraticCurveTo(size * 0.6, 0, 0, size * 1.2);
    ctx.quadraticCurveTo(-size * 0.6, 0, 0, -size * 1.2);
    ctx.fill();

    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let p of petals) {
      p.y += p.vy;
      p.x += Math.sin(p.y * p.swayFreq) * p.swayAmp + p.vx;
      p.angle += p.vAngle;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
      if (p.x > width + 20) p.x = -20;
      if (p.x < -20) p.x = width + 20;

      if (p.type === 'flower') {
        drawJasmineFlower(ctx, p.x, p.y, p.size, p.angle, p.opacity);
      } else if (p.type === 'petal') {
        drawMarigoldPetal(ctx, p.x, p.y, p.size, p.angle, p.opacity);
      } else {
        drawSoftLeaf(ctx, p.x, p.y, p.size, p.angle, p.opacity);
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// ----------------------------------------------------
// CONTINUOUS HERO VIDEO PLAYBACK ENGINE
// ----------------------------------------------------
function ensureContinuousHeroVideo() {
  const video = document.getElementById('hero-bg-video');
  if (!video) return;

  video.muted = true;
  video.loop = true;

  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      const resumeVideo = () => {
        video.play();
        document.removeEventListener('touchstart', resumeVideo);
        document.removeEventListener('click', resumeVideo);
      };
      document.addEventListener('touchstart', resumeVideo, { once: true });
      document.addEventListener('click', resumeVideo, { once: true });
    });
  }

  video.addEventListener('pause', () => {
    video.play();
  });
}

// ----------------------------------------------------
// DOM READY & EVENTS ENGINE
// ----------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  initSlowPetalsCanvas();
  ensureContinuousHeroVideo();

  if (window.lucide) {
    lucide.createIcons();
  }

  // Double Door opening logic
  const doorOverlay = document.getElementById('door-overlay');
  const doorSealBtn = document.getElementById('door-seal-btn');

  function openRoyalDoor() {
    if (!doorOverlay || doorOverlay.classList.contains('is-opened')) return;
    doorOverlay.classList.add('is-opened');
    document.body.classList.add('is-revealed');
    ensureContinuousHeroVideo();

    setTimeout(() => {
      doorOverlay.style.display = 'none';
    }, 5500);

    startIndianRagaMusic();
  }

  if (doorOverlay) doorOverlay.addEventListener('click', openRoyalDoor);
  if (doorSealBtn) doorSealBtn.addEventListener('click', openRoyalDoor);

  // Countdown timer for 22 November 2026 at 09:49 AM IST
  const destination = new Date('2026-11-22T09:49:00').getTime();
  function updateCountdown() {
    const now = new Date().getTime();
    const diff = destination - now;
    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    const dEl = document.getElementById('cnt-days');
    const hEl = document.getElementById('cnt-hours');
    const mEl = document.getElementById('cnt-mins');
    const sEl = document.getElementById('cnt-secs');

    if (dEl) dEl.textContent = String(days).padStart(2, '0');
    if (hEl) hEl.textContent = String(hours).padStart(2, '0');
    if (mEl) mEl.textContent = String(mins).padStart(2, '0');
    if (sEl) sEl.textContent = String(secs).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Scratch card cover logic
  const scratchCanvas = document.getElementById('scratch-canvas');
  const scratchWrapper = document.getElementById('scratch-card-wrapper');

  if (scratchCanvas && scratchWrapper) {
    const ctx = scratchCanvas.getContext('2d');
    let isScratching = false;
    let isRevealed = false;

    function resizeScratchCanvas() {
      const rect = scratchWrapper.getBoundingClientRect();
      scratchCanvas.width = rect.width;
      scratchCanvas.height = rect.height;
      drawCover();
    }

    function drawCover() {
      if (isRevealed) return;
      const w = scratchCanvas.width;
      const h = scratchCanvas.height;

      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, w, h);

      const cardGrad = ctx.createLinearGradient(0, 0, w, h);
      cardGrad.addColorStop(0, '#D4AF37');
      cardGrad.addColorStop(0.5, '#F3D69A');
      cardGrad.addColorStop(1, '#B58E29');

      ctx.fillStyle = cardGrad;
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(6, 6, w - 12, h - 12);

      ctx.fillStyle = '#7A001E';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const fontSize = Math.min(Math.max(w / 24, 14), 18);
      ctx.font = `bold ${fontSize}px "Cormorant Garamond", serif`;
      
      const scratchText = currentLang === 'te' ? '✦ చూడటానికి తుడవండి ✦' : 
                         '✦ Scratch to Reveal ✦';
      ctx.fillText(scratchText, w / 2, h / 2);
    }

    window.drawScratchCover = drawCover;

    function getScratchPos(e) {
      const rect = scratchCanvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return { x: clientX - rect.left, y: clientY - rect.top };
    }

    function scratch(e) {
      if (!isScratching || isRevealed) return;
      e.preventDefault();
      const pos = getScratchPos(e);
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 44, 0, Math.PI * 2);
      ctx.fill();

      checkProgress();
    }

    function checkProgress() {
      if (isRevealed) return;
      const w = scratchCanvas.width;
      const h = scratchCanvas.height;
      const pixels = ctx.getImageData(0, 0, w, h).data;
      let clearPixels = 0;
      for (let i = 3; i < pixels.length; i += 64) {
        if (pixels[i] === 0) clearPixels++;
      }
      if ((clearPixels / (pixels.length / 64)) * 100 > 30) {
        isRevealed = true;
        scratchCanvas.style.opacity = '0';
        setTimeout(() => { scratchCanvas.style.display = 'none'; }, 700);
        triggerConfetti();
      }
    }

    function triggerConfetti() {
      if (!window.confetti) return;
      confetti({ particleCount: 80, angle: 60, spread: 75, origin: { x: 0.05, y: 0.75 }, colors: ['#D4AF37', '#7A001E', '#FFFDF7'] });
      confetti({ particleCount: 80, angle: 120, spread: 75, origin: { x: 0.95, y: 0.75 }, colors: ['#D4AF37', '#7A001E', '#FFFDF7'] });
    }

    scratchCanvas.addEventListener('mousedown', () => isScratching = true);
    scratchCanvas.addEventListener('mouseup', () => isScratching = false);
    scratchCanvas.addEventListener('mousemove', scratch);
    scratchCanvas.addEventListener('touchstart', () => isScratching = true);
    scratchCanvas.addEventListener('touchend', () => isScratching = false);
    scratchCanvas.addEventListener('touchmove', scratch);

    window.addEventListener('resize', resizeScratchCanvas);
    setTimeout(resizeScratchCanvas, 150);
  }

  // Scroll reveal animation
  const scrollElements = document.querySelectorAll('.scroll-reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  scrollElements.forEach(el => observer.observe(el));

  // Audio Music Engine
  let isPlayingMusic = false;
  const audioBtn = document.getElementById('audio-toggle-btn');
  const bgAudio = new Audio('./assets/wedding_tune.mp3');
  bgAudio.loop = true;
  bgAudio.volume = 0.65;

  function startIndianRagaMusic() {
    if (isPlayingMusic) return;
    bgAudio.play().then(() => {
      isPlayingMusic = true;
      if (audioBtn) audioBtn.classList.add('animate-pulse');
    }).catch(() => {
      // Browser autoplay policy catch
    });
  }

  // Global browser gesture unlock: Start audio on very first user interaction anywhere
  const unlockAudioOnUserGesture = () => {
    startIndianRagaMusic();
    document.removeEventListener('click', unlockAudioOnUserGesture);
    document.removeEventListener('touchstart', unlockAudioOnUserGesture);
    document.removeEventListener('scroll', unlockAudioOnUserGesture);
    document.removeEventListener('keydown', unlockAudioOnUserGesture);
  };

  document.addEventListener('click', unlockAudioOnUserGesture);
  document.addEventListener('touchstart', unlockAudioOnUserGesture);
  document.addEventListener('scroll', unlockAudioOnUserGesture, { passive: true });
  document.addEventListener('keydown', unlockAudioOnUserGesture);

  if (audioBtn) {
    audioBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isPlayingMusic) {
        bgAudio.pause();
        isPlayingMusic = false;
        audioBtn.classList.remove('animate-pulse');
      } else {
        bgAudio.play().then(() => {
          isPlayingMusic = true;
          audioBtn.classList.add('animate-pulse');
        }).catch(() => {});
      }
    });
  }
});

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
