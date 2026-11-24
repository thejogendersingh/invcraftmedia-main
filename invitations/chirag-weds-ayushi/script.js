/**
 * =============================================================================
 * ROYAL WEDDING INVITATION — JAVASCRIPT ENGINE
 * Ayushi & Chirag — Royal Rajasthani Wedding
 * InvCraft Media Central Hosting System
 * =============================================================================
 */

'use strict';

/* -----------------------------------------------------------------------------
   CONFIG OBJECT (All customizable parameters, text, dates & asset paths)
   ----------------------------------------------------------------------------- */
const CONFIG = {
  // Couple Information (Bride Side Invitation — Bride First!)
  bride: {
    name: "Ayushi",
    fullName: "Sau. Kaa. Ayushi Agrawal",
    parents: "Daughter of Smt. Sangeeta & Shri Satish Agrawal",
    grandparents: "Granddaughter of Late Smt. Ram Dulari Devi & Late Shri Kishan Lalji Agrawal",
    native: "Agrawal Family, Ambikapur (C.G.)",
    tagline: "Agrawal Family",
    bio: "Her joyful grace, brightest laughter, and the soul behind every cherished moment.",
    photo: "./Assets/single-bride.webp"
  },
  groom: {
    name: "Chirag",
    fullName: "Chi. Chirag Garg",
    parents: "Son of Smt. Rajni & Shri Sanjay Garg",
    grandparents: "Grandson of Late Smt. Roshni Garg & Late Shri Ram Lal Garg",
    native: "Garg Family, Ambikapur (C.G.)",
    tagline: "Garg Family",
    bio: "Her steadfast anchor, warmest smile, and constant support in every walk of life.",
    photo: "./Assets/single-groom.webp"
  },

  // Wedding Date & Time (Main Reception — 12 Dec 2026, 8:00 PM IST)
  weddingDate: "2026-12-12T20:00:00+05:30",
  weddingDateDisplay: "11 – 12 December 2026",
  weddingCity: "Ambikapur, Chhattisgarh",
  venueName: "Purple Orchid Hotel & Resort",
  venueAddress: "Purple Orchid Hotel & Resort, Ambikapur (Chhattisgarh)",
  venueMapUrl: "https://www.google.com/maps/search/?api=1&query=Purple+Orchid+Hotel+and+Resort+Ambikapur",
  hashtag: "#AyushiWedsChirag",
  websiteUrl: "https://invcraftmedia.com/ayushi-weds-chirag/",

  // Assets Mapping
  entranceVideo: "./Assets/entrance_video.mp4",
  entrancePoster: "./Assets/Entrance_first_frame.webp",
  backgroundMusic: "./Assets/wedding-song.mp3",

  // Section Backgrounds Mapping
  sectionBackgrounds: {
    hero: "./Assets/bg_images/bg_hero_mobile.webp",
    message: "./Assets/bg_images/bg_mobile.webp",
    countdown: "./Assets/bg_images/bg2_mobile.webp",
    couple: "./Assets/bg_images/bg2_mobile.webp",
    story: "./Assets/bg_images/bg_mobile.webp",
    events: "./Assets/bg_images/bg1_mobile.webp",
    footer: "./Assets/bg_images/bg1_mobile.webp"
  },

  // Events Itinerary (5 Confirmed Ceremonies — 11 & 12 December 2026)
  events: [
    {
      title: "Carnival",
      dateStr: "Friday, 11 Dec 2026 • 10:00 AM",
      startIso: "2026-12-11T10:00:00+05:30",
      endIso: "2026-12-11T14:00:00+05:30",
      venue: "The Grand Imperia, Ambikapur",
      dressCode: "Vibrant Festive & Fun",
      desc: "A vibrant morning filled with colours, games, laughter, and joy.",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Grand+Imperia+Ambikapur",
      image: "./Assets/Events/carnival-event.webp"
    },
    {
      title: "Neg Tilak",
      dateStr: "Friday, 11 Dec 2026 • 05:00 PM",
      startIso: "2026-12-11T17:00:00+05:30",
      endIso: "2026-12-11T19:00:00+05:30",
      venue: "Purple Orchid Hotel & Resort, Ambikapur",
      dressCode: "Traditional Festive Ethnic",
      desc: "An auspicious beginning of love, respect, and cherished family traditions.",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Purple+Orchid+Hotel+and+Resort+Ambikapur",
      image: "./Assets/Events/reception-event.webp"
    },
    {
      title: "Jashn-e-Sangeet",
      dateStr: "Friday, 11 Dec 2026 • 07:00 PM",
      startIso: "2026-12-11T19:00:00+05:30",
      endIso: "2026-12-11T23:30:00+05:30",
      venue: "Purple Orchid Hotel & Resort, Ambikapur",
      dressCode: "Glamorous Festive Sparkle",
      desc: "An unforgettable evening of music, dance, and celebration with family.",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Purple+Orchid+Hotel+and+Resort+Ambikapur",
      image: "./Assets/Events/Sangeet-event.webp"
    },
    {
      title: "Mayra",
      dateStr: "Saturday, 12 Dec 2026 • 10:00 AM",
      startIso: "2026-12-12T10:00:00+05:30",
      endIso: "2026-12-12T14:00:00+05:30",
      venue: "Purple Orchid Hotel & Resort, Ambikapur",
      dressCode: "Traditional Festive Attire",
      desc: "Warmth, blessings, and joyous songs from the maternal family.",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Purple+Orchid+Hotel+and+Resort+Ambikapur",
      image: "./Assets/Events/mayra-event.webp"
    },
    {
      title: "Grand Reception",
      dateStr: "Saturday, 12 Dec 2026 • 08:00 PM",
      startIso: "2026-12-12T20:00:00+05:30",
      endIso: "2026-12-12T23:30:00+05:30",
      venue: "Purple Orchid Hotel & Resort, Ambikapur",
      dressCode: "Royal Wedding Formal Ethnic",
      desc: "A grand celebration of love, blessings, and dinner for the newlyweds.",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Purple+Orchid+Hotel+and+Resort+Ambikapur",
      image: "./Assets/Events/reception-event-custom.webp"
    },
    {
      title: "Shubh Vivah & Phere",
      dateStr: "Saturday, 12 Dec 2026 • Night Auspicious Muhurat",
      startIso: "2026-12-12T22:30:00+05:30",
      endIso: "2026-12-13T03:00:00+05:30",
      venue: "Purple Orchid Hotel & Resort, Ambikapur",
      dressCode: "Traditional Wedding Attire",
      desc: "Sacred Panigrahan Sanskar and Seven Vows (Phere) under Vedic chants.",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Purple+Orchid+Hotel+and+Resort+Ambikapur",
      image: "./Assets/Events/wedding-event.webp"
    }
  ]
};

/* -----------------------------------------------------------------------------
   GLOBAL STATE
   ----------------------------------------------------------------------------- */
const AppState = {
  entrancePassed: false,
  entranceOpening: false,
  scratchDone: false,
  heroParticlesActive: true,
  currentStoryIdx: 0,
  currentEventIdx: 0,
  isMusicPlaying: false,
  currentLang: 'hi'
};

/* -----------------------------------------------------------------------------
   BILINGUAL TRANSLATION DICTIONARY (English & Hindi)
   ----------------------------------------------------------------------------- */
const TRANSLATIONS = {
  en: {
    entrancePrompt: "Tap to Open Invitation",
    heroInviteTag: "We Invite You To Celebrate The Wedding Of",
    brideFirstName: "Ayushi",
    andConnector: "&",
    groomFirstName: "Chirag",
    heroFamiliesText: "Agrawal Family & Samast Manheru Parivaar warmly welcome you",
    scrollCueText: "Scroll To Celebrate",

    messageLead: "With the divine blessings of our elders, the Agrawal & Garg families cordially invite you to celebrate the auspicious wedding of",
    brideFullName: "Ayushi Agrawal",
    brideGrandparents: "Granddaughter of Late Smt. Ram Dulari Devi & Late Shri Kishan Lalji Agrawal",
    brideLineage: "Daughter of Smt. Sangeeta & Shri Satish Agrawal",
    brideNative: "Agrawal Family",
    messageConnector: "&",
    groomFullName: "Chirag Garg",
    groomGrandparents: "Grandson of Late Smt. Roshni Garg & Late Shri Ram Lal Garg",
    groomLineage: "Son of Smt. Rajni & Shri Sanjay Garg",
    groomNative: "Garg Family, Ambikapur (C.G.)",
    messageAuspiciousDate: "Friday & Saturday, 11 – 12 December 2026 • Ambikapur (C.G.)",
    messageClosingQuote: "“Please grace this auspicious occasion with your family, shower your blessings upon the newlyweds, and honor us with your gracious presence.”",

    saveTheDateTag: "Save The Date",
    countdownTitle: "An Auspicious Date",
    scratchCaption: "Scratch the gold foil to reveal the wedding date!",
    revealDateBig: "11 – 12 DECEMBER 2026",
    revealVenue: "Purple Orchid Hotel & Resort • Ambikapur",
    countdownLabel: "Counting Down To The Celebration",
    cdUnitDays: "Days",
    cdUnitHours: "Hours",
    cdUnitMins: "Mins",
    cdUnitSecs: "Secs",
    cdExpiredMsg: "🎉 The Auspicious Day Is Here! 🎉",

    coupleSectionTitle: "Meet The Couple",
    couplePlaceholderTag: "Couple Image",
    brideRoleTag: "The Bride",
    brideCardName: "Ayushi Agrawal",
    brideTagline: "Agrawal Family",
    brideTrait: "“Her joyful grace, brightest laughter, and the soul behind every happy moment.”",
    sparkHintTag: "✦ Tap to Celebrate ✦",
    groomRoleTag: "The Groom",
    groomCardName: "Chirag Garg",
    groomTagline: "Garg Family",
    groomTrait: "“Her steadfast anchor, warmest smile, and constant support in every walk of life.”",

    storyBadge: "✦ A Sacred Union ✦",
    storyTitle: "Two Hearts, One Journey",
    storyTagline: "“Two loving families united forever in blessings and celebration”",
    storyCh1Badge: "Destined Together • Chapter 1",
    storyCh1Title: "A Graceful Beginning",
    storyCh1Text: "With the blessings of our elders and the warmth of cherished family traditions, the Agrawal and Garg families came together. What began with heartfelt conversations soon blossomed into a timeless bond of love, respect, and joy.",
    storyCh2Badge: "Forever Begins • Chapter 2",
    storyCh2Title: "United in Sacred Vows",
    storyCh2Quote: "“Surrounded by heartfelt blessings and the loving smiles of family, Ayushi and Chirag step hand-in-hand into a beautiful lifetime together.”",
    storyStatusKey: "Status:",
    storyStatusVal: "United for Eternity.",

    eventsTitle: "Wedding Festivities",
    eventsCaption: "Join us in celebrating two joyous days of rituals & festive delight",
    ev0Pill: "11 Dec 2026 • Carnival",
    ev0Title: "Carnival",
    ev0Date: "Friday, 11 December 2026",
    ev0Time: "Morning 10:00 AM",
    ev0Venue: "The Grand Imperia, Ambikapur",
    ev1Pill: "11 Dec 2026 • Neg Tilak",
    ev1Title: "Neg Tilak",
    ev1Date: "Friday, 11 December 2026",
    ev1Time: "Evening 05:00 PM",
    ev1Venue: "Purple Orchid Hotel & Resort, Ambikapur",
    ev2Pill: "11 Dec 2026 • Sangeet",
    ev2Title: "Jashn-e-Sangeet",
    ev2Date: "Friday, 11 December 2026",
    ev2Time: "Evening 07:00 PM",
    ev2Venue: "Purple Orchid Hotel & Resort, Ambikapur",
    ev3Pill: "12 Dec 2026 • Mayra",
    ev3Title: "Mayra",
    ev3Date: "Saturday, 12 December 2026",
    ev3Time: "Morning 10:00 AM",
    ev3Venue: "Purple Orchid Hotel & Resort, Ambikapur",
    ev4Ribbon: "✦ Grand Wedding Reception ✦",
    ev4Pill: "12 Dec 2026 • Reception",
    ev4Title: "Grand Reception",
    ev4Date: "Saturday, 12 December 2026",
    ev4Time: "Night 08:00 PM",
    ev4Venue: "Purple Orchid Hotel & Resort, Ambikapur",
    ev5Ribbon: "✦ The Auspicious Wedding Ceremony ✦",
    ev5Pill: "12 Dec 2026 • Shubh Phere",
    ev5Title: "Shubh Vivah & Phere",
    ev5Date: "Saturday, 12 December 2026",
    ev5Time: "Night • As per Auspicious Muhurat",
    ev5Venue: "Purple Orchid Hotel & Resort, Ambikapur",
    btnViewLocation: "View Location",
    btnAddCalendar: "Add to Calendar",

    familySigLabel: "With Best Compliments & Warm Regards",
    familySigTitle: "Agrawal & Garg Family",
    chunariPaksh: "Bride Side: Agrawal Family",
    sehraPaksh: "Groom Side: Garg Family",
    brideFirmsHeader: "✦ Bride Side Firms (Agrawal Family) ✦",
    groomFirmsHeader: "✦ Groom Side Firms (Garg Family) ✦",
    brideCompTitle: "✦ Vinit ✦",
    brideCompNames: "Prayagraj Agrawal · Makhan Agrawal",
    swagatTitle: "✦ Swagatotsuk ✦",
    swagatNames: "Satish Agrawal · Bajrang Agrawal · Ramesh Agrawal · Piyush Agrawal",
    contactHeader: "✦ Contact ✦",

    footerThankYou: "Thank You",
    footerNames: "Ayushi & Chirag",
    footerBlessingText: "Agrawal Family & Samast Manheru Parivaar warmly welcome you with love and blessings.",
    btnShare: "Share Invitation",
    btnBackToTop: "Back to Top",
    footerCredit: "Handcrafted with love for our special day • December 2026"
  },
  hi: {
    entrancePrompt: "शुभ निमंत्रण पत्र खोलें",
    heroInviteTag: "शुभ परिणय उत्सव में आप सादर आमंत्रित हैं",
    brideFirstName: "आयुषी",
    andConnector: "संग",
    groomFirstName: "चिराग",
    heroFamiliesText: "अग्रवाल परिवार एवं समस्त मानहेरू परिवार आपका हार्दिक स्वागत करता है",
    scrollCueText: "उत्सव दर्शन हेतु नीचे स्क्रॉल करें",

    messageLead: "परमपिता परमात्मा की असीम कृपा एवं पूर्वजों के पावन आशीर्वाद से, अग्रवाल एवं गर्ग परिवार आपको शुभ परिणय उत्सव में सपरिवार सादर आमंत्रित करते हैं",
    brideFullName: "सौ. कां. आयुषी अग्रवाल",
    brideGrandparents: "सुपौत्री: स्व. श्रीमती राम दुलारी देवी एवं स्व. श्री किशनलाल जी अग्रवाल",
    brideLineage: "सुपुत्री: श्रीमती संगीता एवं श्री सतीश अग्रवाल",
    brideNative: "अग्रवाल परिवार",
    messageConnector: "संग",
    groomFullName: "चि. चिराग गर्ग",
    groomGrandparents: "सुपौत्र: स्व. श्रीमती रोशनी गर्ग एवं स्व. श्री रामलाल गर्ग",
    groomLineage: "सुपुत्र: श्रीमती रजनी एवं श्री संजय गर्ग",
    groomNative: "गर्ग परिवार, अंबिकापुर (छ.ग.)",
    messageAuspiciousDate: "शुक्रवार एवं शनिवार, 11–12 दिसंबर 2026 • अंबिकापुर (छ.ग.)",
    messageClosingQuote: "“अतः आप इस मांगलिक बेला पर सपरिवार पधारकर नवदंपति को शुभाशीष प्रदान कर हमें अनुगृहीत करें।”",

    saveTheDateTag: "शुभ तिथि",
    countdownTitle: "पावन शुभ तिथि",
    scratchCaption: "शुभ विवाह की तिथि जानने के लिए सोने की परत स्क्रैच करें!",
    revealDateBig: "11 – 12 दिसंबर 2026",
    revealVenue: "पर्पल ऑर्किड होटल एंड रिसॉर्ट • अंबिकापुर",
    countdownLabel: "शुभ उत्सव के पावन क्षणों की उलटी गिनती",
    cdUnitDays: "दिन",
    cdUnitHours: "घंटे",
    cdUnitMins: "मिनट",
    cdUnitSecs: "सेकंड",
    cdExpiredMsg: "🎉 मंगलमय शुभ दिन आ गया है! 🎉",

    coupleSectionTitle: "वधू एवं वर",
    couplePlaceholderTag: "कपल फोटो",
    brideRoleTag: "वधू",
    brideCardName: "आयुषी अग्रवाल",
    brideTagline: "अग्रवाल परिवार",
    brideTrait: "“उनकी मधुर मुस्कान, हर पल का उल्लास और अपनों के जीवन की सच्ची खुशी।”",
    sparkHintTag: "✦ उत्सव मनाएं ✦",
    groomRoleTag: "वर",
    groomCardName: "चिराग गर्ग",
    groomTagline: "गर्ग परिवार",
    groomTrait: "“उनका शांत संबल, आत्मीय मुस्कान और जीवन के हर मोड़ पर सबसे मजबूत सहारा।”",

    storyBadge: "✦ पावन परिणय ✦",
    storyTitle: "दो दिलों का पावन संगम",
    storyTagline: "“दो परिवारों का पावन मिलन, दो हृदयों का शुभ संगम”",
    storyCh1Badge: "ईश्वरीय संयोग • अध्याय १",
    storyCh1Title: "एक पावन शुरुआत",
    storyCh1Text: "बड़ों के पावन आशीर्वाद और पारिवारिक परंपराओं के सानिध्य में अग्रवाल एवं गर्ग परिवार का शुभ मिलन हुआ। आत्मीय बातचीत से शुरू हुआ यह सफर जल्द ही अटूट विश्वास, प्रेम और सम्मान के पावन बंधन में बंध गया।",
    storyCh2Badge: "सदा के लिए एक • अध्याय २",
    storyCh2Title: "नवजीवन का पावन आरंभ",
    storyCh2Quote: "“बड़ों का शुभाशीष और अपनों का स्नेह पाकर आयुषी और चिराग ने एक-दूजे का हाथ थामकर जीवन के इस सुंदर नए सफर में कदम रखा है।”",
    storyStatusKey: "स्थिति:",
    storyStatusVal: "सदा-सदा के लिए एक।",

    eventsTitle: "मांगलिक कार्यक्रम",
    eventsCaption: "रस्मों, संगीत और परिवार संग खुशियों के दो पावन दिन",
    ev0Pill: "11 दिसंबर 2026 • कार्निवल",
    ev0Title: "कार्निवल",
    ev0Date: "शुक्रवार, 11 दिसंबर 2026",
    ev0Time: "प्रातः 10:00 बजे",
    ev0Venue: "द ग्रैंड इम्पेरिया, अंबिकापुर",
    ev1Pill: "11 दिसंबर 2026 • नेग तिलक",
    ev1Title: "नेग तिलक",
    ev1Date: "शुक्रवार, 11 दिसंबर 2026",
    ev1Time: "सायं 5:00 बजे",
    ev1Venue: "पर्पल ऑर्किड होटल एंड रिसॉर्ट, अंबिकापुर",
    ev2Pill: "11 दिसंबर 2026 • संगीत",
    ev2Title: "जश्न-ए-संगीत",
    ev2Date: "शुक्रवार, 11 दिसंबर 2026",
    ev2Time: "सायं 7:00 बजे",
    ev2Venue: "पर्पल ऑर्किड होटल एंड रिसॉर्ट, अंबिकापुर",
    ev3Pill: "12 दिसंबर 2026 • मायरा",
    ev3Title: "मायरा",
    ev3Date: "शनिवार, 12 दिसंबर 2026",
    ev3Time: "प्रातः 10:00 बजे",
    ev3Venue: "पर्पल ऑर्किड होटल एंड रिसॉर्ट, अंबिकापुर",
    ev4Ribbon: "✦ भव्य स्वागत समारोह ✦",
    ev4Pill: "12 दिसंबर 2026 • रिसेप्शन",
    ev4Title: "स्वागत समारोह (रिसेप्शन)",
    ev4Date: "शनिवार, 12 दिसंबर 2026",
    ev4Time: "रात्रि 8:00 बजे",
    ev4Venue: "पर्पल ऑर्किड होटल एंड रिसॉर्ट, अंबिकापुर",
    ev5Ribbon: "✦ पावन शुभ विवाह संस्कार ✦",
    ev5Pill: "12 दिसंबर 2026 • पावन फेरे",
    ev5Title: "पाणिग्रहण संस्कार एवं फेरे",
    ev5Date: "शनिवार, 12 दिसंबर 2026",
    ev5Time: "रात्रि • शुभ लग्नानुसार",
    ev5Venue: "पर्पल ऑर्किड होटल एंड रिसॉर्ट, अंबिकापुर",
    btnViewLocation: "लोकेशन देखें",
    btnAddCalendar: "कैलेंडर में जोड़ें",

    familySigLabel: "सादर स्नेह एवं मंगलकामनाएं",
    familySigTitle: "अग्रवाल एवं गर्ग परिवार",
    chunariPaksh: "वधू पक्ष: अग्रवाल परिवार",
    sehraPaksh: "वर पक्ष: गर्ग परिवार",
    brideFirmsHeader: "✦ प्रतिष्ठान — वधू पक्ष (अग्रवाल परिवार) ✦",
    groomFirmsHeader: "✦ प्रतिष्ठान — वर पक्ष (गर्ग परिवार) ✦",
    brideCompTitle: "✦ विनीत ✦",
    brideCompNames: "प्रयागराज अग्रवाल · माखन अग्रवाल",
    swagatTitle: "✦ स्वागतोत्सुक ✦",
    swagatNames: "सतीश अग्रवाल · बजरंग अग्रवाल · रमेश अग्रवाल · पीयूष अग्रवाल",
    contactHeader: "✦ संपर्क सूत्र ✦",

    footerThankYou: "हार्दिक आभार",
    footerNames: "आयुषी एवं चिराग",
    footerBlessingText: "अग्रवाल परिवार एवं समस्त मानहेरू परिवार आपका हार्दिक स्वागत करता है।",
    btnShare: "निमंत्रण शेयर करें",
    btnBackToTop: "शीर्ष पर जाएं",
    footerCredit: "हमारे इस पावन दिन के लिए सस्नेह समर्पित • दिसंबर 2026"
  }
};

/* -----------------------------------------------------------------------------
   MODULE 1: STAGE & ASPECT RATIO SYSTEM
   Calculates exact natural aspect ratio of background images so ZERO cropping occurs.
   ----------------------------------------------------------------------------- */
function initStage() {
  const sections = document.querySelectorAll('.page-section');

  sections.forEach((section) => {
    const bgKey = section.getAttribute('data-bg');
    const stage = section.querySelector('.stage');
    const bgImg = stage ? stage.querySelector('.stage-bg') : null;

    if (!stage || !bgImg) return;

    // Apply mapped background from CONFIG if set (prevent image flicker if already set)
    if (bgKey && CONFIG.sectionBackgrounds[bgKey] && bgImg.getAttribute('src') !== CONFIG.sectionBackgrounds[bgKey]) {
      bgImg.src = CONFIG.sectionBackgrounds[bgKey];
    }

    // Function to calculate and update --ar
    const updateAspectRatio = () => {
      if (bgImg.naturalWidth && bgImg.naturalHeight) {
        const ar = bgImg.naturalWidth / bgImg.naturalHeight;
        stage.style.setProperty('--ar', ar.toFixed(5));
      }
    };

    if (bgImg.complete && bgImg.naturalWidth > 0) {
      updateAspectRatio();
    } else {
      bgImg.addEventListener('load', updateAspectRatio, { once: true });
    }
  });

  window.addEventListener('resize', () => {
    sections.forEach((section) => {
      const stage = section.querySelector('.stage');
      const bgImg = stage ? stage.querySelector('.stage-bg') : null;
      if (stage && bgImg && bgImg.naturalWidth) {
        const ar = bgImg.naturalWidth / bgImg.naturalHeight;
        stage.style.setProperty('--ar', ar.toFixed(5));
      }
    });
  });
}

/* -----------------------------------------------------------------------------
   MODULE 1B: DYNAMIC DOM SYNC FROM CONFIG
   Ensures any modifications to the CONFIG object at the top instantly reflect across DOM
   ----------------------------------------------------------------------------- */
function applyConfigToDOM() {
  const groomEl = document.querySelector('.groom-name');
  const brideEl = document.querySelector('.bride-name');
  if (groomEl && CONFIG.groom.name) groomEl.textContent = CONFIG.groom.name;
  if (brideEl && CONFIG.bride.name) brideEl.textContent = CONFIG.bride.name;

  const metaDate = document.querySelector('.meta-date');
  const metaCity = document.querySelector('.meta-city');
  if (metaDate && CONFIG.weddingDateDisplay) metaDate.textContent = CONFIG.weddingDateDisplay.toUpperCase();
  if (metaCity && CONFIG.weddingCity) metaCity.textContent = CONFIG.weddingCity;

  const revealDateBig = document.querySelector('.reveal-date-big');
  if (revealDateBig && CONFIG.weddingDateDisplay) {
    revealDateBig.textContent = CONFIG.weddingDateDisplay.toUpperCase();
  }

  const groomName = document.querySelector('#groomCard .couple-name');
  const groomTagline = document.querySelector('#groomCard .couple-tagline');
  const groomParents = document.querySelector('#groomCard .couple-parents');
  const groomGrandparents = document.querySelector('#groomCard .couple-grandparents');
  const groomBio = document.querySelector('#groomCard .couple-bio');
  const groomPhoto = document.querySelector('#groomCard .couple-photo');
  const bridePhoto = document.querySelector('#brideCard .couple-photo');

  // Do not overwrite couple card with hardcoded English strings during init
  if (groomPhoto && CONFIG.groom.photo) groomPhoto.src = CONFIG.groom.photo;
  if (bridePhoto && CONFIG.bride.photo) bridePhoto.src = CONFIG.bride.photo;

  const hashtagText = document.querySelector('.hashtag-text');
  if (hashtagText && CONFIG.hashtag) hashtagText.textContent = CONFIG.hashtag;

  const footerNames = document.querySelector('.footer-names');
  if (footerNames && CONFIG.groom.name && CONFIG.bride.name) {
    footerNames.textContent = `${CONFIG.bride.name} & ${CONFIG.groom.name}`;
  }
}

/* -----------------------------------------------------------------------------
   MODULE 2: FULL-DEVICE DUAL PARTING ENVELOPE INTRO SCREEN
   Animates intro-top upward and intro-bottom downward gracefully over 4.2s.
   ----------------------------------------------------------------------------- */
function initEntrance() {
  const overlay = document.getElementById('entranceOverlay');
  const video = document.getElementById('entranceVideo');
  const poster = document.getElementById('entrancePoster');
  const tapWrap = document.getElementById('entranceTapWrap');
  if (!overlay) return;

  let finished = false;
  const finishEntrance = () => {
    if (finished) return;
    finished = true;

    const heroSection = document.getElementById('hero');
    if (heroSection) heroSection.classList.add('hero-revealed');
    const heroReveals = document.querySelectorAll('#hero .hero-line, #hero .reveal');
    heroReveals.forEach((el) => el.classList.add('in-view'));

    overlay.classList.add('dissolving');
    document.body.classList.remove('scroll-locked');
    overlay.style.pointerEvents = 'none';
    AppState.entrancePassed = true;

    setTimeout(() => {
      overlay.style.display = 'none';
      overlay.setAttribute('aria-hidden', 'true');
      resetScrollToTop();
    }, 900);
  };

  const openEntrance = () => {
    if (AppState.entranceOpening || AppState.entrancePassed) return;
    AppState.entranceOpening = true;

    // Hide tap button and crisp poster smoothly as video starts
    if (tapWrap) {
      tapWrap.style.opacity = '0';
      setTimeout(() => { tapWrap.style.display = 'none'; }, 250);
    }
    if (poster) {
      poster.style.opacity = '0';
      setTimeout(() => { poster.style.display = 'none'; }, 260);
    }

    // Start background wedding music on user gesture
    try {
      playBackgroundMusic().catch(() => { });
    } catch (e) { }

    // Play entrance video smoothly from start
    if (video) {
      video.muted = true;
      try { video.currentTime = 0; } catch (e) { }
      const p = video.play();
      if (p && p.catch) {
        p.catch(() => setTimeout(finishEntrance, 300));
      }
      video.addEventListener('ended', finishEntrance, { once: true });
      // Fallback timer slightly after 4.33s video duration
      setTimeout(finishEntrance, 4800);
    } else {
      setTimeout(finishEntrance, 300);
    }
  };

  window.dissolveEntrance = openEntrance;

  overlay.addEventListener('click', openEntrance);
  overlay.addEventListener('touchend', (e) => {
    e.preventDefault();
    openEntrance();
  }, { passive: false });
}

/* -----------------------------------------------------------------------------
   MODULE 3: REVEAL ON SCROLL & HERO PARTICLES OBSERVER
   ----------------------------------------------------------------------------- */
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const sections = document.querySelectorAll('.page-section');

  // Reveal observer
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach((el) => revealObserver.observe(el));

  // Section observer for hero canvas particle pause/resume
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        if (id === 'hero') {
          AppState.heroParticlesActive = true;
        } else {
          AppState.heroParticlesActive = false;
        }
      }
    });
  }, { threshold: 0.5 });

  sections.forEach((sec) => sectionObserver.observe(sec));
}

/* -----------------------------------------------------------------------------
   MODULE 4: FLOATING PETALS & GOLD SPARKLES (Hero Canvas)
   Pauses automatically when off-screen to conserve GPU / battery.
   ----------------------------------------------------------------------------- */
function initHeroParticles() {
  const canvas = document.getElementById('petalCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  };
  resize();
  window.addEventListener('resize', resize);

  // Particle models: rose petals and gold glimmer specs
  const particles = [];
  const COUNT = 22;

  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 8 + 4,
      speedY: Math.random() * 0.9 + 0.4,
      speedX: (Math.random() - 0.5) * 0.5,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.5,
      type: Math.random() > 0.4 ? 'petal' : 'gold',
      opacity: Math.random() * 0.5 + 0.35,
      sway: Math.random() * 2
    });
  }

  function render() {
    if (AppState.heroParticlesActive) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.02 + p.sway) * 0.6 + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > canvas.height + 20) {
          p.y = -15;
          p.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'petal') {
          // Romantic rose petal curve
          ctx.fillStyle = '#D6457F';
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(-p.size, -p.size * 0.6, -p.size * 0.6, p.size, 0, p.size * 1.3);
          ctx.bezierCurveTo(p.size * 0.6, p.size, p.size, -p.size * 0.6, 0, 0);
          ctx.fill();
        } else {
          // Golden sparkle diamond
          ctx.fillStyle = '#D9B65A';
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 0.5);
          ctx.lineTo(p.size * 0.4, 0);
          ctx.lineTo(0, p.size * 0.5);
          ctx.lineTo(-p.size * 0.4, 0);
          ctx.closePath();
          ctx.fill();
        }

        ctx.restore();
      });
    }

    animationFrameId = requestAnimationFrame(render);
  }

  render();
}

/* -----------------------------------------------------------------------------
   MODULE 5: PROGRAMMATIC GOLD-FOIL SCRATCH CARD
   Handles high-DPI scaling, scratch physics, auto-clear threshold & confetti.
   ----------------------------------------------------------------------------- */
function initScratchCard() {
  const canvas = document.getElementById('scratchCanvas');
  const wrapper = document.getElementById('scratchWrapper');
  const hint = document.getElementById('scratchHint');
  if (!canvas || !wrapper) return;

  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  let isScratching = false;
  let scratchedPixels = 0;
  let totalPixels = 0;

  function setupFoil() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;

    // Opulent metallic gold gradient
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#8C6A1F');
    grad.addColorStop(0.25, '#D9B65A');
    grad.addColorStop(0.5, '#FFF1CC');
    grad.addColorStop(0.75, '#D9B65A');
    grad.addColorStop(1, '#8C6A1F');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // (Decorative inner border removed)

    // Centered label & icon
    if (AppState.currentLang === 'hi') {
      ctx.fillStyle = '#4A2E35';
      ctx.font = '600 13px "Tiro Devanagari Hindi", serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('✨ सस्नेह स्क्रैच करें ✨', w / 2, h / 2 - 8);

      ctx.font = '500 11px "Tiro Devanagari Hindi", serif';
      ctx.fillStyle = '#6E4E10';
      ctx.fillText('पावन लग्न तिथि जानने के लिए', w / 2, h / 2 + 14);
    } else {
      ctx.fillStyle = '#4A2E35';
      ctx.font = '600 13px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('✨ SCRATCH WITH LOVE ✨', w / 2, h / 2 - 8);

      ctx.font = '500 10px "Montserrat", sans-serif';
      ctx.fillStyle = '#6E4E10';
      ctx.fillText('To Reveal Auspicious Date', w / 2, h / 2 + 14);
    }

    totalPixels = (w * h) / 64; // sampled grid
  }

  // Check scratch percentage in real time
  let lastCheckTime = 0;
  function checkScratchPercentage(force = false) {
    if (AppState.scratchDone) return;

    const now = performance.now();
    if (!force && now - lastCheckTime < 75) return;
    lastCheckTime = now;

    const dpr = window.devicePixelRatio || 1;
    const sampleStep = Math.max(4, Math.floor(6 * dpr));
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    let transparentCount = 0;
    let sampledCount = 0;

    for (let y = 0; y < canvas.height; y += sampleStep) {
      for (let x = 0; x < canvas.width; x += sampleStep) {
        const index = (y * canvas.width + x) * 4;
        if (data[index + 3] < 128) {
          transparentCount++;
        }
        sampledCount++;
      }
    }

    if (sampledCount === 0) return;
    const percent = (transparentCount / sampledCount) * 100;

    // Once 45–50% is cleared, smoothly fade out the remaining foil automatically
    if (percent >= 45) {
      autoRevealDate();
    }
  }

  // Clear foil with smooth fade & launch 5-burst celebratory confetti
  function autoRevealDate() {
    if (AppState.scratchDone) return;
    AppState.scratchDone = true;

    // Smoothly fade out remaining foil and hint
    canvas.style.transition = 'opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1)';
    canvas.style.opacity = '0';
    canvas.style.pointerEvents = 'none';
    if (hint) {
      hint.style.transition = 'opacity 0.4s ease';
      hint.style.opacity = '0';
      hint.style.pointerEvents = 'none';
    }

    // Upon full reveal, launch festive celebration by firing 5 consecutive, staggered bursts
    setTimeout(() => {
      canvas.style.display = 'none';
      launchFestiveConfettiCelebration();
    }, 400);
  }

  // Scratch action
  function scratch(e) {
    if (AppState.scratchDone) return;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.clientX !== undefined ? e.clientX : (e.touches ? e.touches[0].clientX : 0);
    const clientY = e.clientY !== undefined ? e.clientY : (e.touches ? e.touches[0].clientY : 0);

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 26, 0, Math.PI * 2);
    ctx.fill();

    if (hint && hint.style.opacity !== '0') {
      hint.style.opacity = '0';
      hint.style.pointerEvents = 'none';
    }

    checkScratchPercentage(false);
  }

  // Pointer event listeners (touch-action: none prevents page scroll during scratch)
  canvas.addEventListener('pointerdown', (e) => {
    isScratching = true;
    canvas.setPointerCapture(e.pointerId);
    scratch(e);
  });

  canvas.addEventListener('pointermove', (e) => {
    if (isScratching) scratch(e);
  });

  const stopScratching = () => {
    if (isScratching) {
      isScratching = false;
      checkScratchPercentage(true);
    }
  };
  canvas.addEventListener('pointerup', stopScratching);
  canvas.addEventListener('pointercancel', stopScratching);

  setupFoil();
  window.redrawScratchFoil = function () {
    if (!AppState.scratchDone && canvas && canvas.getContext) {
      setupFoil();
    }
  };
  window.addEventListener('resize', () => {
    if (!AppState.scratchDone) setupFoil();
  });
}

// -----------------------------------------------------------------------------
// FESTIVE 5-BURST CELEBRATION CONFETTI
// Fires 5 consecutive, staggered bursts across the screen in signature accent colors
// -----------------------------------------------------------------------------
function launchFestiveConfettiCelebration() {
  const burstCanvas = document.createElement('canvas');
  burstCanvas.className = 'festive-confetti-canvas';
  burstCanvas.style.position = 'fixed';
  burstCanvas.style.inset = '0';
  burstCanvas.style.width = '100vw';
  burstCanvas.style.height = '100vh';
  burstCanvas.style.pointerEvents = 'none';
  burstCanvas.style.zIndex = '999999';
  document.body.appendChild(burstCanvas);

  const dpr = window.devicePixelRatio || 1;
  const updateSize = () => {
    burstCanvas.width = window.innerWidth * dpr;
    burstCanvas.height = window.innerHeight * dpr;
  };
  updateSize();

  const ctx = burstCanvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const bits = [];
  // Site's signature accent colors:
  // Royal gold, rose pink, coral, marigold, sage leaf, peach, sparkling champagne
  const signatureColors = [
    '#B8923A', '#D9B65A', '#F5E2A8', // Royal Gold tones
    '#D6457F',                        // Signature Rose Pink
    '#F08A74',                        // Festive Coral
    '#F2A93B',                        // Marigold Yellow
    '#6E9E73',                        // Sage Leaf Green
    '#F9D9C4',                        // Delicate Peach
    '#FFFFFF'                         // Sparkling White
  ];

  function addBurst(originX, originY, count, angleSpread, baseVelocity, upwardAngle) {
    for (let i = 0; i < count; i++) {
      const angle = (upwardAngle - angleSpread / 2) + Math.random() * angleSpread;
      const rad = (angle * Math.PI) / 180;
      const speed = baseVelocity * (0.6 + Math.random() * 0.8);
      const isCircle = Math.random() < 0.35;
      const isSparkle = !isCircle && Math.random() < 0.3;

      bits.push({
        x: originX,
        y: originY,
        vx: Math.cos(rad) * speed,
        vy: Math.sin(rad) * speed,
        gravity: 0.28 + Math.random() * 0.12,
        drag: 0.982,
        size: Math.random() * 6 + 4,
        color: signatureColors[Math.floor(Math.random() * signatureColors.length)],
        alpha: 1,
        fadeSpeed: 0.007 + Math.random() * 0.008,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 14,
        oscillationSpeed: Math.random() * 0.1 + 0.05,
        oscillation: Math.random() * Math.PI,
        shape: isSparkle ? 'sparkle' : (isCircle ? 'circle' : 'ribbon')
      });
    }
  }

  const w = window.innerWidth;
  const h = window.innerHeight;

  // 5 Consecutive, Staggered Bursts across the screen:
  const bursts = [
    // Burst 1 (t = 0ms): Center-left fountain firing up & towards center
    { delay: 0, x: w * 0.28, y: h * 0.65, count: 55, spread: 65, speed: 18, angle: -65 },
    // Burst 2 (t = 220ms): Center-right fountain firing up & towards center
    { delay: 220, x: w * 0.72, y: h * 0.65, count: 55, spread: 65, speed: 18, angle: -115 },
    // Burst 3 (t = 440ms): Grand central aerial explosion right over the auspicious date
    { delay: 440, x: w * 0.50, y: h * 0.45, count: 75, spread: 360, speed: 16, angle: 0 },
    // Burst 4 (t = 660ms): Left flank celebratory shower
    { delay: 660, x: w * 0.15, y: h * 0.55, count: 50, spread: 75, speed: 17, angle: -55 },
    // Burst 5 (t = 880ms): Right flank grand finale shower
    { delay: 880, x: w * 0.85, y: h * 0.55, count: 50, spread: 75, speed: 17, angle: -125 }
  ];

  bursts.forEach((b) => {
    setTimeout(() => {
      addBurst(b.x, b.y, b.count, b.spread, b.speed, b.angle);
    }, b.delay);
  });

  const startTime = performance.now();
  let animId;

  function animate() {
    ctx.clearRect(0, 0, w, h);
    let activeBits = 0;

    for (let i = 0; i < bits.length; i++) {
      const p = bits[i];
      if (p.alpha <= 0) continue;

      activeBits++;
      p.vx *= p.drag;
      p.vy *= p.drag;
      p.vy += p.gravity;
      p.x += p.vx + Math.sin(p.oscillation) * 0.8;
      p.y += p.vy;
      p.oscillation += p.oscillationSpeed;
      p.rotation += p.rotSpeed;
      p.alpha -= p.fadeSpeed;

      if (p.alpha > 0) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;

        if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === 'sparkle') {
          // 4-point golden star sparkle
          const s = p.size;
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.quadraticCurveTo(0, 0, s, 0);
          ctx.quadraticCurveTo(0, 0, 0, s);
          ctx.quadraticCurveTo(0, 0, -s, 0);
          ctx.quadraticCurveTo(0, 0, 0, -s);
          ctx.fill();
        } else {
          // Fluttering rectangular ribbon
          ctx.fillRect(-p.size / 2, -p.size * 0.35, p.size, p.size * 0.7);
        }
        ctx.restore();
      }
    }

    if (activeBits > 0 || performance.now() - startTime < 3500) {
      animId = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animId);
      burstCanvas.remove();
    }
  }

  animId = requestAnimationFrame(animate);
}

/* -----------------------------------------------------------------------------
   MODULE 6: LIVE WEDDING COUNTDOWN TIMER
   ----------------------------------------------------------------------------- */
function initCountdown() {
  const daysEl = document.getElementById('cdDays');
  const hoursEl = document.getElementById('cdHours');
  const minsEl = document.getElementById('cdMinutes');
  const secsEl = document.getElementById('cdSeconds');
  const gridEl = document.getElementById('countdownGrid');
  const expiredMsg = document.getElementById('cdExpiredMsg');

  const targetDate = new Date(CONFIG.weddingDate).getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      if (gridEl) gridEl.style.display = 'none';
      if (expiredMsg) expiredMsg.style.display = 'block';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* -----------------------------------------------------------------------------
   MODULE 7: COUPLE INTRO TAB SWITCHER
   ----------------------------------------------------------------------------- */
function initCoupleSwitcher() {
  const groomBtn = document.getElementById('tabGroomBtn');
  const brideBtn = document.getElementById('tabBrideBtn');
  const groomCard = document.getElementById('groomCard');
  const brideCard = document.getElementById('brideCard');
  const slider = document.getElementById('coupleSlider');

  if (!groomBtn || !brideBtn || !groomCard || !brideCard) return;

  function switchTab(showGroom) {
    groomBtn.classList.toggle('active', showGroom);
    groomBtn.setAttribute('aria-selected', showGroom);
    brideBtn.classList.toggle('active', !showGroom);
    brideBtn.setAttribute('aria-selected', !showGroom);

    groomCard.classList.toggle('active', showGroom);
    brideCard.classList.toggle('active', !showGroom);
  }

  groomBtn.addEventListener('click', () => switchTab(true));
  brideBtn.addEventListener('click', () => switchTab(false));

  // Touch swipe support on couple cards
  let touchStartX = 0;
  if (slider) {
    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchEndX - touchStartX;
      if (diff > 45) switchTab(true); // swiped right -> groom
      else if (diff < -45) switchTab(false); // swiped left -> bride
    }, { passive: true });
  }
}

/* -----------------------------------------------------------------------------
   MODULE 7.5: COUPLE SPARK BUTTON & BILATERAL PAPER CONFETTI CANNON
   Shoots celebratory paper ribbons and flower confetti from left & right sides
   ----------------------------------------------------------------------------- */
let activeSparkCanvas = null;
let activeSparkCtx = null;
let activeSparkBits = [];
let sparkAnimId = null;
let sparkStartTime = 0;

function launchBilateralPaperConfetti(btn) {
  const dpr = window.devicePixelRatio || 1;
  const w = window.innerWidth;
  const h = window.innerHeight;

  if (!activeSparkCanvas) {
    activeSparkCanvas = document.createElement('canvas');
    activeSparkCanvas.className = 'couple-spark-canvas';
    activeSparkCanvas.style.position = 'fixed';
    activeSparkCanvas.style.inset = '0';
    activeSparkCanvas.style.width = '100vw';
    activeSparkCanvas.style.height = '100vh';
    activeSparkCanvas.style.pointerEvents = 'none';
    activeSparkCanvas.style.zIndex = '999999';
    document.body.appendChild(activeSparkCanvas);

    activeSparkCanvas.width = w * dpr;
    activeSparkCanvas.height = h * dpr;
    activeSparkCtx = activeSparkCanvas.getContext('2d');
    activeSparkCtx.scale(dpr, dpr);
  }

  // Get button coordinates to anchor central burst
  const rect = btn.getBoundingClientRect();
  const btnX = rect.left + rect.width / 2;
  const btnY = rect.top + rect.height / 2;

  // Signature festive colors: gold foil, rose pink, crimson, peach, coral, marigold, champagne
  const festiveColors = [
    '#B8923A', '#D9B65A', '#F4DC96', // Royal gold foil
    '#D6457F', '#B8284B',            // Romantic rose & crimson
    '#F08A74', '#F2A93B',            // Coral & marigold
    '#FFFDF8', '#F9D9C4'             // Champagne & soft peach
  ];

  function spawnCannon(originX, originY, count, angleSpread, baseVelocity, upwardAngle) {
    for (let i = 0; i < count; i++) {
      const angle = (upwardAngle - angleSpread / 2) + Math.random() * angleSpread;
      const rad = (angle * Math.PI) / 180;
      const speed = baseVelocity * (0.55 + Math.random() * 0.9);
      const isRibbon = Math.random() < 0.6;
      const isCircle = !isRibbon && Math.random() < 0.5;

      activeSparkBits.push({
        x: originX,
        y: originY,
        vx: Math.cos(rad) * speed,
        vy: Math.sin(rad) * speed,
        gravity: 0.20 + Math.random() * 0.10,
        drag: 0.984,
        size: Math.random() * 3 + 2.5, // Small, delicate confetti particles (2.5px - 5.5px)
        widthRatio: Math.random() * 1.2 + 1.1,
        color: festiveColors[Math.floor(Math.random() * festiveColors.length)],
        alpha: 1,
        fadeSpeed: 0.007 + Math.random() * 0.008,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 18,
        oscillationSpeed: Math.random() * 0.14 + 0.08,
        oscillation: Math.random() * Math.PI,
        shape: isRibbon ? 'ribbon' : (isCircle ? 'circle' : 'sparkle')
      });
    }
  }

  // 1. LEFT SIDE CANNON: Fires upward and rightward into the screen
  const cannonY = Math.min(Math.max(btnY, h * 0.35), h * 0.75);
  spawnCannon(0, cannonY, 75, 55, 22, -45);

  // 2. RIGHT SIDE CANNON: Fires upward and leftward into the screen
  spawnCannon(w, cannonY, 75, 55, 22, -135);

  // 3. CENTER FLOWER POP: Radiates 360 degrees outward from the rose
  spawnCannon(btnX, btnY, 45, 360, 13, 0);

  // Staggered follow-up burst for grand celebratory shower
  setTimeout(() => {
    spawnCannon(w * 0.08, cannonY - 40, 50, 60, 19, -50);
    spawnCannon(w * 0.92, cannonY - 40, 50, 60, 19, -130);
  }, 180);

  sparkStartTime = performance.now();

  if (!sparkAnimId) {
    function animateSpark() {
      activeSparkCtx.clearRect(0, 0, w, h);
      let activeBits = 0;

      for (let i = 0; i < activeSparkBits.length; i++) {
        const p = activeSparkBits[i];
        if (p.alpha <= 0) continue;

        activeBits++;
        p.vx *= p.drag;
        p.vy *= p.drag;
        p.vy += p.gravity;
        p.x += p.vx + Math.sin(p.oscillation) * 0.9;
        p.y += p.vy;
        p.oscillation += p.oscillationSpeed;
        p.rotation += p.rotSpeed;
        p.alpha -= p.fadeSpeed;

        if (p.alpha > 0) {
          activeSparkCtx.save();
          activeSparkCtx.translate(p.x, p.y);
          activeSparkCtx.rotate((p.rotation * Math.PI) / 180);
          activeSparkCtx.globalAlpha = Math.max(0, p.alpha);
          activeSparkCtx.fillStyle = p.color;

          if (p.shape === 'circle') {
            // Delicate circular paper confetti
            activeSparkCtx.beginPath();
            activeSparkCtx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
            activeSparkCtx.fill();
          } else if (p.shape === 'sparkle') {
            // Small golden star sparkle
            const s = p.size * 0.9;
            activeSparkCtx.beginPath();
            activeSparkCtx.moveTo(0, -s);
            activeSparkCtx.quadraticCurveTo(0, 0, s, 0);
            activeSparkCtx.quadraticCurveTo(0, 0, 0, s);
            activeSparkCtx.quadraticCurveTo(0, 0, -s, 0);
            activeSparkCtx.quadraticCurveTo(0, 0, 0, -s);
            activeSparkCtx.fill();
          } else {
            // Small fluttering rectangular paper confetti ribbon
            const flip = Math.sin(p.oscillation);
            activeSparkCtx.fillRect(-p.size / 2, (-p.size * p.widthRatio * flip) / 2, p.size, p.size * p.widthRatio * flip);
          }
          activeSparkCtx.restore();
        }
      }

      if (activeBits > 0 || performance.now() - sparkStartTime < 4000) {
        sparkAnimId = requestAnimationFrame(animateSpark);
      } else {
        cancelAnimationFrame(sparkAnimId);
        sparkAnimId = null;
        if (activeSparkCanvas) {
          activeSparkCanvas.remove();
          activeSparkCanvas = null;
          activeSparkCtx = null;
          activeSparkBits = [];
        }
      }
    }

    sparkAnimId = requestAnimationFrame(animateSpark);
  }
}

function initCoupleSparkButton() {
  const btn = document.getElementById('coupleSparkBtn');
  if (!btn) return;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Trigger flower pop micro-bounce
    btn.classList.remove('spark-popped');
    void btn.offsetWidth;
    btn.classList.add('spark-popped');

    // Launch bilateral paper confetti burst from left and right side
    launchBilateralPaperConfetti(btn);
  });
}

/* -----------------------------------------------------------------------------
   MODULE 8: LOVE STORY CAROUSEL
   ----------------------------------------------------------------------------- */
function initStoryCarousel() {
  const slides = document.querySelectorAll('.story-slide');
  const prevBtn = document.getElementById('storyPrevBtn');
  const nextBtn = document.getElementById('storyNextBtn');
  const dotsContainer = document.getElementById('storyDots');
  const carousel = document.getElementById('storyCarousel');

  if (!slides.length || !dotsContainer) return;

  // Render navigation dots
  dotsContainer.innerHTML = '';
  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = `dot ${idx === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
    dot.addEventListener('click', () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.dot');

  function goToSlide(index) {
    AppState.currentStoryIdx = (index + slides.length) % slides.length;

    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === AppState.currentStoryIdx);
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === AppState.currentStoryIdx);
    });
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(AppState.currentStoryIdx - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(AppState.currentStoryIdx + 1));

  // Touch swipe support
  let touchStartX = 0;
  if (carousel) {
    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (diff > 40) goToSlide(AppState.currentStoryIdx - 1);
      else if (diff < -40) goToSlide(AppState.currentStoryIdx + 1);
    }, { passive: true });
  }
}

/* -----------------------------------------------------------------------------
   MODULE 9: WEDDING EVENTS TABS & ICAL GENERATOR
   ----------------------------------------------------------------------------- */
function initWeddingEvents() {
  const tabs = document.querySelectorAll('.event-tab-btn');
  const cards = document.querySelectorAll('.event-card-item');
  const calButtons = document.querySelectorAll('.btn-cal');
  const carousel = document.getElementById('eventsCarousel');

  function showEvent(idx) {
    AppState.currentEventIdx = (idx + cards.length) % cards.length;

    tabs.forEach((tab) => {
      tab.classList.toggle('active', parseInt(tab.getAttribute('data-event'), 10) === AppState.currentEventIdx);
    });

    cards.forEach((card, i) => {
      card.classList.toggle('active', i === AppState.currentEventIdx);
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const idx = parseInt(tab.getAttribute('data-event'), 10);
      showEvent(idx);
    });
  });

  // Swipe support for event cards
  let touchStartX = 0;
  if (carousel) {
    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (diff > 45) showEvent(AppState.currentEventIdx - 1);
      else if (diff < -45) showEvent(AppState.currentEventIdx + 1);
    }, { passive: true });
  }

  // Pure Vanilla .ics Calendar File Download Generator
  calButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute('data-event-idx'), 10);
      const ev = CONFIG.events[idx];
      if (!ev) return;

      const formatIcsTime = (iso) => {
        const d = new Date(iso);
        return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
      };

      const start = formatIcsTime(ev.startIso);
      const end = formatIcsTime(ev.endIso);
      const title = `${ev.title} — ${CONFIG.groom.name} & ${CONFIG.bride.name}'s Wedding`;
      const description = `${ev.desc} | Dress Code: ${ev.dressCode}`;

      const icsData = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Royal Wedding Invitation//EN",
        "CALSCALE:GREGORIAN",
        "BEGIN:VEVENT",
        `SUMMARY:${title}`,
        `DESCRIPTION:${description}`,
        `LOCATION:${ev.venue}`,
        `DTSTART:${start}`,
        `DTEND:${end}`,
        "STATUS:CONFIRMED",
        "END:VEVENT",
        "END:VCALENDAR"
      ].join("\r\n");

      const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${ev.title.replace(/\s+/g, '_')}.ics`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast(`Added ${ev.title} to Calendar!`);
    });
  });
}


/* -----------------------------------------------------------------------------
   MODULE 10: SOCIAL SHARING & CLIPBOARD COPY
   ----------------------------------------------------------------------------- */
function initShareAndHashtag() {
  const shareBtn = document.getElementById('shareBtn');
  const hashtagBtn = document.getElementById('hashtagPill');

  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      const shareUrl = CONFIG.websiteUrl || window.location.href;
      if (navigator.share) {
        navigator.share({
          title: `${CONFIG.bride.name} & ${CONFIG.groom.name} Wedding Invitation`,
          text: `Agrawal and Garg Family invite you to celebrate the wedding of ${CONFIG.bride.name} & ${CONFIG.groom.name} on ${CONFIG.weddingDateDisplay} in ${CONFIG.weddingCity}!`,
          url: shareUrl
        }).catch((err) => console.log('Share dismissed:', err));
      } else {
        copyToClipboard(shareUrl, "Invitation link copied to clipboard!");
      }
    });
  }

  if (hashtagBtn) {
    hashtagBtn.addEventListener('click', () => {
      copyToClipboard(CONFIG.hashtag, `Hashtag ${CONFIG.hashtag} copied!`);
    });
  }
}

function copyToClipboard(text, successMsg) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const tempInput = document.createElement('input');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  showToast(successMsg);
}

// Toast notification
function showToast(msg) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 2800);
}

/* -----------------------------------------------------------------------------
   SCROLL POSITION RESET ON RELOAD
   Ensures the website always opens from the very top on reload.
   ----------------------------------------------------------------------------- */
function resetScrollToTop() {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  const container = document.querySelector('.page-container');
  if (container) {
    container.scrollTop = 0;
  }

  // Clear any existing hash so browser does not jump to target section
  if (window.location.hash) {
    try {
      history.replaceState(null, null, window.location.pathname + window.location.search);
    } catch (e) {
      // Ignore if restricted
    }
  }
}

// Reset immediately before unload and on load
window.addEventListener('beforeunload', resetScrollToTop);
window.addEventListener('load', resetScrollToTop);

/* -----------------------------------------------------------------------------
   MODULE 15: BACKGROUND MUSIC SYSTEM & FLOATING TOGGLE
   ----------------------------------------------------------------------------- */
function playBackgroundMusic() {
  const audio = document.getElementById('bgMusicAudio');
  const btn = document.getElementById('musicToggleBtn');
  if (!audio) return Promise.reject(new Error("Audio element not found"));

  // Ensure volume is fully unmuted and ready for iOS WebKit & Android Chrome
  audio.muted = false;
  audio.volume = 1.0;

  const playPromise = audio.play();
  if (playPromise !== undefined) {
    return playPromise
      .then(() => {
        AppState.isMusicPlaying = true;
        if (btn) {
          btn.classList.add('is-playing');
          btn.classList.remove('is-muted');
          btn.setAttribute('aria-pressed', 'true');
        }
      })
      .catch((err) => {
        console.warn("Background music play attempt deferred until user interaction:", err);
        throw err;
      });
  }
  return Promise.resolve();
}

function pauseBackgroundMusic() {
  const audio = document.getElementById('bgMusicAudio');
  const btn = document.getElementById('musicToggleBtn');
  if (!audio) return;

  audio.pause();
  AppState.isMusicPlaying = false;
  if (btn) {
    btn.classList.remove('is-playing');
    btn.classList.add('is-muted');
    btn.setAttribute('aria-pressed', 'false');
  }
}

function initMusicPlayer() {
  const audio = document.getElementById('bgMusicAudio');
  const btn = document.getElementById('musicToggleBtn');
  if (!audio || !btn) return;

  // Set audio source from config if specified and different
  if (CONFIG.backgroundMusic) {
    const currentSrc = audio.getAttribute('src') || (audio.querySelector('source') ? audio.querySelector('source').getAttribute('src') : '');
    if (currentSrc !== CONFIG.backgroundMusic) {
      audio.src = CONFIG.backgroundMusic;
      const source = audio.querySelector('source');
      if (source) source.src = CONFIG.backgroundMusic;
      audio.load();
    }
  }

  // Toggle button click listener
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (audio.paused) {
      playBackgroundMusic();
      showToast("Music Playing ♫");
    } else {
      pauseBackgroundMusic();
      showToast("Music Paused");
    }
  });

  // Track playback state in case audio ends or pauses externally
  audio.addEventListener('play', () => {
    AppState.isMusicPlaying = true;
    btn.classList.add('is-playing');
    btn.classList.remove('is-muted');
    btn.setAttribute('aria-pressed', 'true');
  });

  audio.addEventListener('pause', () => {
    AppState.isMusicPlaying = false;
    btn.classList.remove('is-playing');
    btn.classList.add('is-muted');
    btn.setAttribute('aria-pressed', 'false');
  });

  // Auto-pause when tab/window is hidden or minimized, and resume if previously playing
  let wasPlayingBeforeHidden = false;
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (AppState.isMusicPlaying) {
        wasPlayingBeforeHidden = true;
        pauseBackgroundMusic();
      }
    } else {
      if (wasPlayingBeforeHidden && AppState.entrancePassed) {
        wasPlayingBeforeHidden = false;
        playBackgroundMusic();
      }
    }
  });

  // Forcefully stop and unload audio when user closes page or navigates away
  const stopAudioOnExit = () => {
    try {
      audio.pause();
      audio.currentTime = 0;
    } catch (e) {
      // Ignored on teardown
    }
  };
  window.addEventListener('pagehide', stopAudioOnExit);
  window.addEventListener('beforeunload', stopAudioOnExit);
}


/* -----------------------------------------------------------------------------
   MODULE 17: BILINGUAL LANGUAGE SWITCHER (ENGLISH <-> HINDI)
   ----------------------------------------------------------------------------- */
function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'hi') lang = 'hi';
  AppState.currentLang = lang;
  try {
    localStorage.setItem('ayushi_chirag_lang_v3', lang);
  } catch (e) { }

  document.documentElement.lang = lang;
  document.body.classList.toggle('lang-hindi', lang === 'hi');

  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.classList.toggle('hi-active', lang === 'hi');
    const enOpt = langBtn.querySelector('.lang-opt-en');
    const hiOpt = langBtn.querySelector('.lang-opt-hi');
    if (enOpt) enOpt.classList.toggle('is-active', lang === 'en');
    if (hiOpt) hiOpt.classList.toggle('is-active', lang === 'hi');
    langBtn.setAttribute('aria-label', lang === 'en' ? 'Switch language to Hindi' : 'Switch language to English');
    langBtn.setAttribute('title', lang === 'en' ? 'हिन्दी में देखें (Switch to Hindi)' : 'View in English (अंग्रेजी में देखें)');
  }

  // Update all data-i18n elements
  const dict = TRANSLATIONS[lang];
  if (dict) {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (typeof dict[key] === 'string' && (dict[key].includes('<') || dict[key].includes('&'))) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });
  }

  // Refresh scratch foil text if not scratched yet
  if (window.redrawScratchFoil) {
    window.redrawScratchFoil();
  }
}

function initLanguageSwitcher() {
  const langBtn = document.getElementById('langToggleBtn');
  if (!langBtn) return;

  // Default strictly to Hindi (hi) unless user explicitly clicks EN
  let savedLang = 'hi';
  try {
    const cached = localStorage.getItem('ayushi_chirag_lang_v3');
    if (cached === 'en' || cached === 'hi') {
      savedLang = cached;
    } else {
      savedLang = 'hi';
    }
  } catch (e) {
    savedLang = 'hi';
  }

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const target = e.target;
    if (target.closest('.lang-opt-en')) {
      setLanguage('en');
    } else if (target.closest('.lang-opt-hi')) {
      setLanguage('hi');
    } else {
      // Toggle
      setLanguage(AppState.currentLang === 'en' ? 'hi' : 'en');
    }
  });

  // Apply initially selected language
  setLanguage(savedLang);
}

/* -----------------------------------------------------------------------------
   INITIALIZATION LIFECYCLE
   ----------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  try { resetScrollToTop(); } catch (e) { console.error(e); }
  try { initEntrance(); } catch (e) { console.error(e); }
  try { initStage(); } catch (e) { console.error(e); }
  try { applyConfigToDOM(); } catch (e) { console.error(e); }
  try { initMusicPlayer(); } catch (e) { console.error(e); }
  try { initReveal(); } catch (e) { console.error(e); }
  try { initHeroParticles(); } catch (e) { console.error(e); }
  try { initScratchCard(); } catch (e) { console.error(e); }
  try { initCountdown(); } catch (e) { console.error(e); }
  try { initCoupleSwitcher(); } catch (e) { console.error(e); }
  try { initCoupleSparkButton(); } catch (e) { console.error(e); }
  try { initStoryCarousel(); } catch (e) { console.error(e); }
  try { initWeddingEvents(); } catch (e) { console.error(e); }
  try { initShareAndHashtag(); } catch (e) { console.error(e); }
  try { initLanguageSwitcher(); } catch (e) { console.error(e); }
  try { setLanguage(AppState.currentLang || 'hi'); } catch (e) { console.error(e); }
});
