// Nagarjuna weds Nikhitha - South Indian Wedding Invitation Script

const translations = {
  en: {
    door_mantra: "|| SRIRASTHU • SHUBHAMASTHU • AVIGNAMASTHU ||",
    hero_mantra: "|| SRIRASTHU • SHUBHAMASTHU • AVIGNAMASTHU ||",
    hero_subtext: "Cordially Invite You To Celebrate The Wedding Of",
    groom_name: "Nagarjuna",
    weds_label: "weds",
    bride_name: "Nikhitha",
    hero_date: "22nd November 2026",
    hero_venue: "S.S.V. Function Hall, Hanumakonda",
    open_invitation: "Open Invitation",
    save_the_date: "SAVE THE DATE",
    cnt_days: "DAYS",
    cnt_hours: "HOURS",
    cnt_mins: "MINUTES",
    cnt_secs: "SECONDS",
    story_tag: "SACRED CELEBRATION",
    story_title: "Our Divine Journey",
    story_subtitle: "Two souls united by destiny, blessed by elders & sacred vows",
    s1_title: "The Auspicious Beginning",
    s1_desc: "Two families joined by tradition and affection, initiating a divine union of two hearts.",
    s2_title: "The Sacred Promise",
    s2_desc: "Surrounded by holy blessings and fragrant flowers, a lifelong promise to walk together in harmony.",
    s3_title: "Sumuhurtham & Seven Vows",
    s3_desc: "Under the sacred Mandap with Veda mantras and Talambralu, beginning the journey of seven lifetimes.",
    events_title: "Wedding Festivities",
    lbl_date: "DATE",
    lbl_time: "TIME",
    lbl_venue: "VENUE",
    e1_name: "Ganesh Pujan & Pellikoduku / Pellikoothuru",
    e1_desc: "Auspicious prayers invoking Lord Ganesha for prosperity & joy",
    e1_date: "Sat, 21 Nov 2026",
    e1_time: "10:00 AM onwards",
    e1_venue: "At Residence, Hanumakonda",
    e2_name: "Haldi & Mangala Snanam",
    e2_desc: "Traditional turmeric celebrations, marigold showers & blessings",
    e2_date: "Sat, 21 Nov 2026",
    e2_time: "02:00 PM onwards",
    e2_venue: "At Residence, Hanumakonda",
    e3_name: "Edurukollu & Sangeeth",
    e3_desc: "Traditional groom welcome, joyful sangeeth & family celebration",
    e3_date: "Sat, 21 Nov 2026",
    e3_time: "06:30 PM onwards",
    e3_venue: "S.S.V. Function Hall, Hanumakonda",
    e4_name: "Sumuhurtham : Kalyana Mahotsavam",
    e4_desc: "Auspicious muhurtham in Ashwini Nakshatram, Dhanassu Lagnam",
    e4_date: "Sun, 22 Nov 2026",
    e4_time: "09:49 AM Sharp",
    e4_venue: "S.S.V. Function Hall, Opp. Vijaya Talkies, Hanumakonda",
    e5_name: "Kalyana Vindu : Wedding Feast",
    e5_desc: "Delicious traditional lunch hosted with warm hospitality",
    e5_date: "Sun, 22 Nov 2026",
    e5_time: "12:00 PM onwards",
    e5_venue: "S.S.V. Function Hall Dining, Hanumakonda",
    hosts_sub: "WITH THE BLESSINGS OF OUR ELDERS",
    hosts_title: "Elders & Parivaar",
    welcomed_by: "Invited By",
    family_names: "Smt. & Sri Ravva Ramesh - Vani",
    groom_fam_label: "Groom's Family",
    groom_parents: "Smt. & Sri Goranti Vasudha - Vittal Guptha",
    groom_grandparents: "Only Son: Chi. Nagarjuna",
    bride_fam_label: "Bride's Family",
    bride_parents: "Chi. Ravva Harish - Samatha (Shailaja)",
    bride_grandparents: "Blessings of: Smt. Ravva Bhagyamma - (Late Upender)",
    hosts_note: '"We solicit your gracious presence with family and friends on the auspicious occasion of the marriage of our daughter Chi.La.Sow. Nikhitha with Chi. Nagarjuna."',
    venue_label: "VENUE",
    where_celebrate: "Kalyana Vedika",
    get_directions: "Get Directions",
    footer_love: "WITH BEST COMPLIMENTS FROM NEAR & DEAR",
    hashtag: "#NAGARJUNAWEDSNIKHITHA"
  },
  te: {
    door_mantra: "|| శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు ||",
    hero_mantra: "|| శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు ||",
    hero_subtext: "వివాహ మహోత్సవ ఆహ్వాన శుభపత్రిక",
    groom_name: "నాగార్జున",
    weds_label: "మరియు",
    bride_name: "నిఖిత",
    hero_date: "22 నవంబర్ 2026",
    hero_venue: "యస్.యస్.వి. ఫంక్షన్ హాల్, హనుమకొండ",
    open_invitation: "ఆహ్వాన పత్రికను తెరవండి",
    save_the_date: "శుభ ముహూర్తం",
    cnt_days: "రోజులు",
    cnt_hours: "గంటలు",
    cnt_mins: "నిమిషాలు",
    cnt_secs: "సెకన్లు",
    story_tag: "పవిత్ర కలయిక",
    story_title: "మా పవిత్ర ప్రయాణం",
    story_subtitle: "పెద్దల ఆశీస్సులు, వేద మంత్రాల సాక్షిగా మొదలవుతున్న నూతన జీవన ప్రయాణం",
    s1_title: "శుభారంభం",
    s1_desc: "సంప్రదాయాలు, ప్రేమానురాగాల కలయికతో రెండు కుటుంబాల ఆశీస్సులతో మొదలైన పవిత్ర బంధం.",
    s2_title: "తోడుగా జీవించే ప్రమాణం",
    s2_desc: "పూల పరిమళాల నడుమ, పెద్దల సమక్షంలో జీవితాంతం ఒకరికొకరు తోడుగా ఉంటామని చేసుకున్న వాగ్దానం.",
    s3_title: "సుముహూర్తం & మాంగల్య ధారణ",
    s3_desc: "వేద మంత్రాలు, తలంబ్రాల శోభతో ఏడేడు జన్మల అనుబంధానికి వేసే శుభారంభం.",
    events_title: "వివాహ శుభ కార్యక్రమాలు",
    lbl_date: "తేదీ",
    lbl_time: "సమయం",
    lbl_venue: "వేదిక",
    e1_name: "శ్రీ గణపతి పూజ & పెళ్ళికూతురు / పెళ్ళికొడుకు",
    e1_desc: "విఘ్నాలు తొలగి శుభాలు కలగాలని విఘ్నేశ్వరుని పూజ",
    e1_date: "శనివారం, 21 నవంబర్ 2026",
    e1_time: "ఉదయం 10:00 గంటల నుండి",
    e1_venue: "స్వగృహమున, హనుమకొండ",
    e2_name: "హల్దీ & మంగళస్నానాలు",
    e2_desc: "పసుపు పూతల శోభ, సంప్రదాయ మంగళస్నానాల సంబరం",
    e2_date: "శనివారం, 21 నవంబర్ 2026",
    e2_time: "మధ్యాహ్నం 02:00 గంటల నుండి",
    e2_venue: "స్వగృహమున, హనుమకొండ",
    e3_name: "ఎదురుకోళ్ళు & సంగీత్",
    e3_desc: "పెళ్ళికొడుకుకు ఘన స్వాగతం మరియు సంగీత్ సంబరాలు",
    e3_date: "శనివారం, 21 నవంబర్ 2026",
    e3_time: "సాయంత్రం 06:30 గంటల నుండి",
    e3_venue: "యస్.యస్.వి. ఫంక్షన్ హాల్, హనుమకొండ",
    e4_name: "సుముహూర్తం : కల్యాణ మహోత్సవం",
    e4_desc: "అశ్విని నక్షత్రయుక్త ధనస్సు లగ్న పుష్కరాంశ సుముహూర్తమున",
    e4_date: "ఆదివారం, 22 నవంబర్ 2026",
    e4_time: "ఉ॥గం॥ 9-49 ని॥లకు",
    e4_venue: "యస్.యస్.వి. ఫంక్షన్ హాల్, విజయ టాకీస్ ఎదురుగా, హనుమకొండ",
    e5_name: "కళ్యాణ విందు",
    e5_desc: "వివాహానంతరము మా ఆతిథ్యము స్వీకరించి మమ్మానందింపజేయ ప్రార్థన",
    e5_date: "ఆదివారం, 22 నవంబర్ 2026",
    e5_time: "మధ్యాహ్నం 12:00 గంటల నుండి",
    e5_venue: "యస్.యస్.వి. ఫంక్షన్ హాల్ డైనింగ్, హనుమకొండ",
    hosts_sub: "పెద్దల దివ్యాశీస్సులతో...",
    hosts_title: "ఆహ్వానించువారు & పెద్దలు",
    welcomed_by: "ఆహ్వానించువారు",
    family_names: "శ్రీమతి & శ్రీ రవ్వా రమేష్ - వాణి",
    groom_fam_label: "పెళ్లికొడుకు తరఫున",
    groom_parents: "శ్రీమతి & శ్రీ గోరంటి వసుధ - విఠల్ గుప్త",
    groom_grandparents: "ఏకైక పుత్రుడు: చి॥ నాగార్జున",
    bride_fam_label: "పెళ్లికూతురు తరఫున",
    bride_parents: "చి॥ రవ్వా హరీష్ - సమత (శైలజ)",
    bride_grandparents: "దివ్యాశీస్సులు: శ్రీమతి రవ్వ భాగ్యమ్మ - (కీ॥శే॥ ఉపేందర్)",
    hosts_note: '"కావున తామెల్లరు విచ్చేసి నూతన వధూవరులను ఆశీర్వదించి మా ఆతిథ్యము స్వీకరించి మమ్మానందింపజేయ ప్రార్థన."',
    venue_label: "కళ్యాణవేదిక",
    where_celebrate: "కళ్యాణవేదిక",
    get_directions: "మార్గం చూడండి",
    footer_love: "బంధుమిత్రుల అభినందనలతో...",
    hashtag: "#NAGARJUNAWEDSNIKHITHA"
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
// ANIMATED STORY PLAYER LOGIC
// ----------------------------------------------------
let currentStory = 0;
const totalStories = 3;
let storyProgressInterval = null;
let isStoryPlaying = true;
let storyProgress = 0;

function updateStoryUI() {
  const slides = document.querySelectorAll('.story-slide');
  slides.forEach((slide, idx) => {
    if (idx === currentStory) {
      slide.classList.add('active');
      slide.style.opacity = '1';
      slide.style.pointerEvents = 'auto';
    } else {
      slide.classList.remove('active');
      slide.style.opacity = '0';
      slide.style.pointerEvents = 'none';
    }
  });

  for (let i = 0; i < totalStories; i++) {
    const bar = document.getElementById(`story-bar-${i}`);
    if (bar) {
      if (i < currentStory) {
        bar.style.width = '100%';
      } else if (i === currentStory) {
        bar.style.width = `${storyProgress}%`;
      } else {
        bar.style.width = '0%';
      }
    }
  }
}

function startStoryTimer() {
  if (storyProgressInterval) clearInterval(storyProgressInterval);
  storyProgress = 0;

  storyProgressInterval = setInterval(() => {
    if (!isStoryPlaying) return;

    storyProgress += 1.25; // ~5 seconds per slide
    const currentBar = document.getElementById(`story-bar-${currentStory}`);
    if (currentBar) {
      currentBar.style.width = `${storyProgress}%`;
    }

    if (storyProgress >= 100) {
      nextStory();
    }
  }, 60);
}

function nextStory(e) {
  if (e) e.stopPropagation();
  currentStory = (currentStory + 1) % totalStories;
  startStoryTimer();
  updateStoryUI();
}

function prevStory(e) {
  if (e) e.stopPropagation();
  currentStory = (currentStory - 1 + totalStories) % totalStories;
  startStoryTimer();
  updateStoryUI();
}

function goToStory(index) {
  currentStory = index;
  startStoryTimer();
  updateStoryUI();
}

function toggleStoryPlay() {
  isStoryPlaying = !isStoryPlaying;
  const btn = document.getElementById('story-play-btn');
  if (btn) {
    btn.textContent = isStoryPlaying ? '⏸' : '▶';
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
    startStoryTimer();
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

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 2;
      ctx.strokeRect(10, 10, w - 20, h - 20);

      ctx.fillStyle = '#7A001E';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const fontSize = Math.min(Math.max(w / 22, 16), 22);
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

  // Initialize Story UI
  updateStoryUI();
});

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
