// Shouvik weds Sneha - Royal Wedding Reception Invitation Script
// Theme: Gilded Hall (InvCraft Media)

const translations = {
  bn: {
    meta_title: "সৌভিক ও স্নেহা — শুভ বিবাহোত্তর প্রীতিভোজ",
    tap_to_open: "আমন্ত্রণ পত্রটি খুলতে স্পর্শ করুন",
    kicker: "|| ওঁ শ্রী শ্রী প্রজাপতয়ে নমঃ || • শুভ প্রীতিভোজ ও বধূবরণ",
    groom_name: "সৌভিক",
    and_label: "ও",
    bride_name: "স্নেহা",
    reception_date: "১৭ই মাঘ ১৪৩৩ • ইং ১লা ফেব্রুয়ারী ২০২৭",
    invitation_line: "শ্রীমতী টুম্পা ঘোষ সবিনয় তাঁর একমাত্র পুত্র সৌভিক ও স্নেহার শুভ বিবাহোত্তর প্রীতিভোজ অনুষ্ঠানে আপনাদের সাদর আমন্ত্রণ জানাচ্ছেন",
    nav_family: "পরিচিতি",
    nav_events: "স্মারকলিপি",
    nav_venue: "স্থান ও পথনির্দেশ",
    nav_calendar: "ক্যালেন্ডার",
    countdown_title: "প্রীতিভোজের আর মাত্র বাকি",
    cnt_days: "দিন",
    cnt_hours: "ঘণ্টা",
    cnt_mins: "মিনিট",
    cnt_secs: "সেকেন্ড",
    letter_title: "সবিনয় নিবেদন",
    letter_salutation: "মহাশয় / মহাশয়া,",
    letter_body: "ঈশ্বরের আশীর্বাদ মাথায় নিয়ে আগামী ১৪ই মাঘ, ১৪৩৩ (ইং ২৯ শে জানুয়ারী ২০২৭, শুক্রবার) সৌভিক ও স্নেহা কে বিবাহ বন্ধনে আবদ্ধ করতে চলেছি। এতদুপলক্ষে আগামী ১৭ই মাঘ ১৪৩৩ (ইং ১লা ফেব্রুয়ারী ২০২৭, সোমবার) সন্ধ্যায় আয়োজিত প্রীতিভোজ ও বধূবরণ অনুষ্ঠানে আপনারা উপস্থিত থাকিয়া নবদম্পতিদের আশীর্বাদ প্রদান ও প্রীতিভোজ অনুষ্ঠানে যোগদান করিয়া বাধিত করিবেন এই কামনা রহিল।",
    letter_apology: "পত্রদ্বারা নিমন্ত্রণের ত্রুটি মার্জ্জনীয়।",
    letter_closing: "নমস্কারান্তে:",
    letter_host: "শ্রীমতী টুম্পা ঘোষ ও ঘোষ পরিবার",
    contact_label: "দূরভাষ: ৯৮৩১৭১৬৯৫৩",
    family_heading_kicker: "বংশ পরিচয়",
    family_heading_title: "শুভ পরিচিতি",
    groom_side_title: "পাত্র পক্ষ",
    groom_fullName: "কল্যাণীয় সৌভিক",
    groom_father: "পিতা: স্বর্গীয় আশীষ ঘোষ",
    groom_mother: "মাতা: শ্রীমতী টুম্পা ঘোষ",
    groom_grandparents: "পিতামহ-পিতামহী: স্বর্গীয় মনমোহন ঘোষ ও স্বর্গীয়া শীলা ঘোষ",
    bride_side_title: "পাত্রী পক্ষ",
    bride_fullName: "কল্যাণীয়া স্নেহা",
    bride_father: "পিতা: শ্রীযুক্ত শেখর মান্না",
    bride_mother: "মাতা: শ্রীমতী রত্না মান্না",
    bride_desc: "কনিষ্ঠা কন্যা",
    chapters_kicker: "মাঙ্গলিক মুহূর্তমালা",
    chapters_title: "স্মারকলিপি",
    tab_1_title: "শুভ বিবাহ",
    tab_1_date: "১৪ই মাঘ ১৪৩৩ (ইং ২৯ শে জানুয়ারী ২০২৭)",
    tab_1_day: "শুক্রবার",
    tab_1_venue: "পবিত্র বিবাহ মণ্ডপ",
    tab_1_note: "ঈশ্বরের আশীর্বাদ ও মাঙ্গলিক বৈদিক রীতিতে শুভ পরিণয়",
    tab_2_title: "প্রীতিভোজ ও বধূবরণ",
    tab_2_date: "১৭ই মাঘ ১৪৩৩ (ইং ১লা ফেব্রুয়ারী ২০২৭)",
    tab_2_day: "সোমবার • সন্ধ্যা ৬:৩০ ঘটিকা হইতে",
    tab_2_venue: '"গরীব খানা" বিবাহ অনুষ্ঠান ভবন, মানকুন্ডু, হুগলী',
    tab_2_note: "নবদম্পতিদের শুভ আশীর্বাদ প্রদান ও সান্ধ্যকালীন প্রীতিভোজ",
    venue_kicker: "অনুষ্ঠান ভবন",
    venue_title: '"গরীব খানা" বিবাহ অনুষ্ঠান ভবন',
    venue_address: "জে. সি. খান রোড, মানকুন্ডু, চন্দননগর, হুগলী - ৭১২১৩৯",
    venue_directions_label: "পথনির্দেশ:",
    venue_directions: 'মানকুন্ডু স্টেশন হইতে "STATE BANK OF INDIA" দিকে ৫ মিনিটের হাঁটা পথ',
    btn_directions: "গুগল ম্যাপে পথ দেখুন",
    btn_calendar: "ক্যালেন্ডারে যুক্ত করুন",
    btn_call: "ফোন করুন: ৯৮৩১৭১৬৯৫৩",
    footer_closing: "আপনাদের সস্নেহ উপস্থিতির প্রতীক্ষায়...",
    footer_date: "০১ . ০২ . ২০২৭",
    footer_family: "ঘোষ পরিবার"
  },
  en: {
    meta_title: "Shouvik & Sneha — Wedding Reception Invitation",
    tap_to_open: "Tap anywhere to open invitation",
    kicker: "|| Om Shree Prajapataye Namah || • Wedding Reception Ceremony",
    groom_name: "Shouvik",
    and_label: "&",
    bride_name: "Sneha",
    reception_date: "Monday, 1st February 2027",
    invitation_line: "Mrs. Tumpa Ghosh requests the honour of your gracious presence on the auspicious occasion of the Wedding Reception Ceremony of her only son",
    nav_family: "Family",
    nav_events: "Ceremonies",
    nav_venue: "Venue & Directions",
    nav_calendar: "Calendar",
    countdown_title: "Countdown to the Reception",
    cnt_days: "Days",
    cnt_hours: "Hours",
    cnt_mins: "Minutes",
    cnt_secs: "Seconds",
    letter_title: "Solemn Invitation",
    letter_salutation: "Respected Sir / Madam,",
    letter_body: "With the divine blessings of the Almighty, we are uniting Shouvik & Sneha in holy matrimony on Friday, 29th January 2027. On this joyous occasion, we cordially invite your gracious presence with family at the Wedding Reception and Welcome Ceremony on Monday, 1st February 2027 from 6:30 PM onwards to shower your blessings upon the newlywed couple.",
    letter_apology: "Please consider this digital invitation as a personal card.",
    letter_closing: "With Warm Regards,",
    letter_host: "Mrs. Tumpa Ghosh & Ghosh Family",
    contact_label: "Phone: +91 9831716953",
    family_heading_kicker: "Family Lineage",
    family_heading_title: "The Families",
    groom_side_title: "Groom's Side",
    groom_fullName: "Shouvik",
    groom_father: "Father: Late Asish Kumar Ghosh",
    groom_mother: "Mother: Mrs. Tumpa Ghosh",
    groom_grandparents: "Grandson of: Late Monmohan Ghosh & Late Sila Ghosh",
    bride_side_title: "Bride's Side",
    bride_fullName: "Sneha",
    bride_father: "Father: Mr. Sekhar Manna",
    bride_mother: "Mother: Mrs. Ratna Manna",
    bride_desc: "Youngest Daughter",
    chapters_kicker: "Auspicious Moments",
    chapters_title: "Celebration Chapters",
    tab_1_title: "The Holy Wedding",
    tab_1_date: "Friday, 29th January 2027",
    tab_1_day: "14th Magh 1433",
    tab_1_venue: "Holy Wedding Mandap",
    tab_1_note: "Sacred Vedic matrimony with divine rituals & prayers",
    tab_2_title: "Wedding Reception",
    tab_2_date: "Monday, 1st February 2027",
    tab_2_day: "From 6:30 PM Onwards",
    tab_2_venue: '"Garib Khana Marriage Ceremony Hall", Mankundu, Hooghly',
    tab_2_note: "Dinner, blessings, and warm celebratory hospitality",
    venue_kicker: "The Venue",
    venue_title: '"Garib Khana Marriage Ceremony Hall"',
    venue_address: "J.C. Khan Road, Mankundu, Chandannagar, Hooghly - 712139",
    venue_directions_label: "Directions:",
    venue_directions: '5 minutes walking distance from Mankundu Railway Station towards State Bank of India',
    btn_directions: "View on Google Maps",
    btn_calendar: "Add to Calendar (.ics)",
    btn_call: "Call: 9831716953",
    footer_closing: "With love and gratitude, we await you.",
    footer_date: "01 . 02 . 2027",
    footer_family: "Ghosh Family"
  }
};

// Event Chapters Data
const eventsData = {
  bn: [
    {
      num: "01",
      badge: "মাঙ্গলিক শুভ বিবাহ",
      title: "শুভ বিবাহ",
      dayTime: "শুক্রবার, ১৪ই মাঘ ১৪৩৩ (২৯ শে জানুয়ারী ২০২৭)",
      venue: "পবিত্র বিবাহ মণ্ডপ",
      note: "ঈশ্বরের আশীর্বাদ ও বৈদিক মাঙ্গলিক আচার-অনুষ্ঠানে সৌভিক ও স্নেহার শুভ পরিণয়।"
    },
    {
      num: "02",
      badge: "প্রধান বিবাহোত্তর উৎসব",
      title: "প্রীতিভোজ ও বধূবরণ",
      dayTime: "সোমবার, ১৭ই মাঘ ১৪৩৩ (১লা ফেব্রুয়ারী ২০২৭) • সন্ধ্যা ৬:৩০ ঘটিকা হইতে",
      venue: '"গরীব খানা" বিবাহ অনুষ্ঠান ভবন, জে. সি. খান রোড, মানকুন্ডু',
      note: "নবদম্পতিদের আশীর্বাদ প্রদান ও নৈশভোজ অনুষ্ঠানে আপনাদের সাদর আমন্ত্রণ।"
    }
  ],
  en: [
    {
      num: "01",
      badge: "The Holy Matrimony",
      title: "The Wedding Ceremony",
      dayTime: "Friday, 29th January 2027 (14th Magh 1433)",
      venue: "Sacred Wedding Mandap",
      note: "Uniting two souls under divine Vedic traditions and sacred rituals."
    },
    {
      num: "02",
      badge: "Main Celebration Event",
      title: "Wedding Reception & Dinner",
      dayTime: "Monday, 1st February 2027 • From 6:30 PM Onwards",
      venue: '"Garib Khana Marriage Ceremony Hall", J.C. Khan Road, Mankundu',
      note: "An evening of blessings, warmth, and delicious celebratory feast."
    }
  ]
};

// State
let currentLang = 'bn'; // Default Bengali as requested!
let currentChapter = 1; // Default to Reception (main event)
let isMuted = false;
let isCoverOpened = false;

// Audio Control
const bgMusic = document.getElementById('bg-music');
const audioToggleBtn = document.getElementById('audio-toggle-btn');
const audioIcon = document.getElementById('audio-icon');

function toggleAudio() {
  if (!bgMusic) return;
  if (bgMusic.paused) {
    bgMusic.play().then(() => {
      isMuted = false;
      updateAudioIcon();
    }).catch(e => console.log('Autoplay policy prevented audio play:', e));
  } else {
    bgMusic.pause();
    isMuted = true;
    updateAudioIcon();
  }
}

function updateAudioIcon() {
  if (!audioIcon) return;
  if (isMuted || (bgMusic && bgMusic.paused)) {
    audioIcon.innerHTML = `<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>`;
  } else {
    audioIcon.innerHTML = `<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>`;
  }
}

// Cover Opening
function openCover() {
  if (isCoverOpened) return;
  isCoverOpened = true;
  const coverOverlay = document.getElementById('cover-overlay');
  if (coverOverlay) {
    coverOverlay.classList.add('fade-out');
    setTimeout(() => {
      coverOverlay.style.display = 'none';
    }, 850);
  }

  // Play video & music
  const introVideo = document.getElementById('intro-video');
  if (introVideo) {
    introVideo.play().catch(() => {});
  }
  if (bgMusic) {
    bgMusic.play().then(() => {
      isMuted = false;
      updateAudioIcon();
    }).catch(() => {
      isMuted = true;
      updateAudioIcon();
    });
  }
}

// Skip Intro Video
function skipIntro() {
  const introContainer = document.getElementById('intro-video-container');
  if (introContainer) {
    introContainer.style.display = 'none';
  }
  const heroContent = document.getElementById('hero-main-content');
  if (heroContent) {
    heroContent.classList.remove('opacity-0', 'pointer-events-none');
    heroContent.classList.add('opacity-100');
  }
  const target = document.getElementById('story');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

// Language Switcher
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;

  document.body.classList.remove('lang-bn', 'lang-en');
  document.body.classList.add('lang-' + lang);

  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById('lang-btn-' + lang);
  if (activeBtn) activeBtn.classList.add('active');

  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Render active chapter content
  selectChapter(currentChapter);
}

// Event Chapter Switcher
function selectChapter(idx) {
  currentChapter = idx;
  const list = eventsData[currentLang] || eventsData.bn;
  const item = list[idx];
  if (!item) return;

  // Update tabs active state
  document.querySelectorAll('.tab-btn').forEach((btn, i) => {
    if (i === idx) {
      btn.classList.add('is-active');
    } else {
      btn.classList.remove('is-active');
    }
  });

  // Update content with animation
  const stageEl = document.getElementById('stage-content');
  if (stageEl) {
    stageEl.style.animation = 'none';
    stageEl.offsetHeight; // trigger reflow
    stageEl.style.animation = 'chapter-in 0.5s cubic-bezier(0.25, 1, 0.5, 1) both';

    document.getElementById('stage-num').textContent = item.num;
    document.getElementById('stage-badge').textContent = item.badge;
    document.getElementById('stage-title').textContent = item.title;
    document.getElementById('stage-daytime').textContent = item.dayTime;
    document.getElementById('stage-venue').textContent = item.venue;
    document.getElementById('stage-note').textContent = item.note;
  }
}

// Live Countdown Timer
function startCountdown() {
  // Target: Monday, 1st February 2027 at 18:30 IST (Reception)
  const targetTime = new Date('2027-02-01T18:30:00+05:30').getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance <= 0) {
      document.getElementById('cnt-days').textContent = '00';
      document.getElementById('cnt-hours').textContent = '00';
      document.getElementById('cnt-mins').textContent = '00';
      document.getElementById('cnt-secs').textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = n => String(n).padStart(2, '0');
    const elD = document.getElementById('cnt-days');
    const elH = document.getElementById('cnt-hours');
    const elM = document.getElementById('cnt-mins');
    const elS = document.getElementById('cnt-secs');

    if (elD) elD.textContent = pad(days);
    if (elH) elH.textContent = pad(hours);
    if (elM) elM.textContent = pad(minutes);
    if (elS) elS.textContent = pad(seconds);
  }

  update();
  setInterval(update, 1000);
}

// Add to Calendar (.ics download)
function downloadCalendar() {
  const event = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Shouvik and Sneha//Wedding Reception//EN',
    'BEGIN:VEVENT',
    'UID:20270201T183000@shouvik-sneha',
    'DTSTAMP:20261107T000000Z',
    'DTSTART:20270201T130000Z',
    'DTEND:20270201T183000Z',
    'SUMMARY:Wedding Reception of Shouvik & Sneha',
    'LOCATION:Garib Khana Marriage Ceremony Hall, J.C Khan Road, Mankundu, Chandannagar - 712139',
    'DESCRIPTION:Wedding Reception Ceremony of Shouvik with Sneha hosted by Mrs. Tumpa Ghosh. From 6:30 PM onwards. Contact: 9831716953',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([event], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'Shouvik-Sneha-Reception.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Scroll Reveal Observer
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-on');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Smooth Safe Audio on Tab Visibility
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    if (bgMusic && !bgMusic.paused) {
      bgMusic.pause();
    }
  } else {
    if (!isMuted && isCoverOpened && bgMusic) {
      bgMusic.play().catch(() => {});
    }
  }
});

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  setLanguage('bn');
  startCountdown();
  initScrollReveal();
  selectChapter(1); // Set to Reception (main ceremony)
});

