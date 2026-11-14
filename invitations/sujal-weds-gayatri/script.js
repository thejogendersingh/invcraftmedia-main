/**
 * =============================================================================
 * ROYAL WEDDING INVITATION — JAVASCRIPT ENGINE
 * Sujal & Gayatri — Royal Rajasthani Wedding
 * InvCraft Media Central Hosting System
 * =============================================================================
 */

'use strict';

/* -----------------------------------------------------------------------------
   CONFIG OBJECT (All customizable parameters, text, dates & asset paths)
   ----------------------------------------------------------------------------- */
const CONFIG = {
  // Couple Information (Groom First)
  groom: {
    name: "Sujal",
    fullName: "Chi. Sujal",
    parents: "Son of Smt. Madhu Devi & Shri Mukesh Kumar Ji Lawat",
    grandparents: "Grandson of Late Smt. Sulochna Devi & Late Shri Durgadutt Ji Lawat",
    native: "Native of Alsisar (Currently Jaipur)",
    tagline: "Lawat Family",
    bio: "Her steadfast anchor, warmest smile, and constant support in every walk of life.",
    photo: "Assets/Couple IMages/Couple_image.webp"
  },
  bride: {
    name: "Gayatri",
    fullName: "Sau. Kaa. Gayatri",
    parents: "Daughter of Smt. Sharda Devi & Sahji Shri Basant Kumar Ji Chhaparwal",
    grandparents: "Granddaughter of Smt. Vimla Devi & Sahji Shri Babulal Ji Chhaparwal",
    native: "Native of Sardarshahar (Churu)",
    tagline: "Chhaparwal Family",
    bio: "His joyful grace, brightest laughter, and the soul behind every happy moment.",
    photo: "Assets/Couple IMages/Couple_image1.webp"
  },

  // Wedding Date & Time (Main Ceremony - 26 Nov 2026, 7:00 PM IST)
  weddingDate: "2026-11-26T19:00:00+05:30", // ISO 8601 for live countdown
  weddingDateDisplay: "Thursday, 26 November 2026",
  weddingCity: "Sardarshahar, Rajasthan",
  venueName: "Maheshwari Bhawan",
  venueAddress: "Near Ganesh Ji Temple, Sardarshahar (Churu), Rajasthan",
  venueMapUrl: "https://www.google.com/maps/search/?api=1&query=Maheshwari+Bhawan,+Sardarshahar",
  hashtag: "#SujalWedsGayatri",
  websiteUrl: "https://invcraftmedia.com/sujal-weds-gayatri/",

  // Assets Mapping
  entranceVideo: "Assets/entrance_video.mp4",
  entrancePoster: "Assets/Entrance_first_frame.webp",
  backgroundMusic: "Assets/ReelAudio-7073.mp3",

  // Section Backgrounds Mapping
  sectionBackgrounds: {
    hero: "Assets/bg_images/bg_hero_mobile.webp",
    message: "Assets/bg_images/bg_mobile.webp",
    countdown: "Assets/bg_images/bg2_mobile.webp",
    couple: "Assets/bg_images/bg2_mobile.webp",
    story: "Assets/bg_images/bg_mobile.webp",
    events: "Assets/bg_images/bg1_mobile.webp",
    footer: "Assets/bg_images/bg1_mobile.webp"
  },

  // Events Itinerary (5 Primary Ceremonies covering all 7 Vedic Rituals)
  events: [
    {
      title: "Tilak & Pritibhoj",
      dateStr: "Tuesday, 24 Nov 2026 • 04:15 PM & 06:15 PM",
      startIso: "2026-11-24T16:15:00+05:30",
      endIso: "2026-11-24T19:00:00+05:30",
      venue: "Maheshwari Bhawan, Near Ganesh Mandir, Sardarshahar",
      dressCode: "Traditional Festive Ethnic",
      desc: "Auspicious Tilak ceremony followed by royal Pritibhoj feast with family and friends.",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Maheshwari+Bhawan,+Sardarshahar",
      image: "Assets/Events/reception-event.webp"
    },
    {
      title: "Mahila Sangeet",
      dateStr: "Tuesday, 24 Nov 2026 • 07:15 PM Onwards",
      startIso: "2026-11-24T19:15:00+05:30",
      endIso: "2026-11-24T23:30:00+05:30",
      venue: "Maheshwari Bhawan, Near Ganesh Mandir, Sardarshahar",
      dressCode: "Glamorous Festive Sparkle",
      desc: "A musical evening of traditional folk tunes, dance performances, and vibrant celebrations.",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Maheshwari+Bhawan,+Sardarshahar",
      image: "Assets/Events/Sangeet-event.webp"
    },
    {
      title: "Hald Haath Baan",
      dateStr: "Wednesday, 25 Nov 2026 • 11:00 AM Onwards",
      startIso: "2026-11-25T11:00:00+05:30",
      endIso: "2026-11-25T15:00:00+05:30",
      venue: "Maheshwari Bhawan, Near Ganesh Mandir, Sardarshahar",
      dressCode: "Sunshine Yellow & Traditional Rajasthani",
      desc: "Sacred turmeric rituals, auspicious blessings, and joyful celebration with family.",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Maheshwari+Bhawan,+Sardarshahar",
      image: "Assets/Events/Haldi-mehndi-event.webp"
    },
    {
      title: "Chaak-Bhaat Ceremony",
      dateStr: "Thursday, 26 Nov 2026 • 11:15 AM Onwards",
      startIso: "2026-11-26T11:15:00+05:30",
      endIso: "2026-11-26T15:00:00+05:30",
      venue: "Maheshwari Bhawan, Near Ganesh Mandir, Sardarshahar",
      dressCode: "Traditional Marwari Royal Attire",
      desc: "Auspicious maternal Chaak-Bhaat ritual, blessings, and customary honours.",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Maheshwari+Bhawan,+Sardarshahar",
      image: "Assets/Events/reception-event.webp"
    },
    {
      title: "Dhukav & Shubh Vivah",
      dateStr: "Thursday, 26 Nov 2026 • 06:15 PM & Night Pheras",
      startIso: "2026-11-26T18:15:00+05:30",
      endIso: "2026-11-27T02:00:00+05:30",
      venue: "Maheshwari Bhawan, Near Ganesh Mandir, Sardarshahar",
      dressCode: "Royal Wedding Formal Ethnic",
      desc: "Barat arrival, Dhukav ceremony, and sacred Panigrahan Sanskar (Seven Vows) under Vedic chants.",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Maheshwari+Bhawan,+Sardarshahar",
      image: "Assets/Events/wedding-event.webp"
    }
  ]
};

/* -----------------------------------------------------------------------------
   GLOBAL STATE
   ----------------------------------------------------------------------------- */
const AppState = {
  entrancePassed: false,
  scratchDone: false,
  heroParticlesActive: true,
  currentStoryIdx: 0,
  currentEventIdx: 0,
  isMusicPlaying: false,
  currentLang: 'en'
};

/* -----------------------------------------------------------------------------
   BILINGUAL TRANSLATION DICTIONARY (English & Hindi)
   ----------------------------------------------------------------------------- */
const TRANSLATIONS = {
  en: {
    entrancePrompt: "Tap to Open Invitation",
    heroInviteTag: "We Invite You To Celebrate The Wedding Of",
    groomFirstName: "Sujal",
    andConnector: "&",
    brideFirstName: "Gayatri",
    heroFamiliesText: "Together with their families",
    scrollCueText: "Scroll To Celebrate",

    messageLead: "With the supreme grace of Almighty and the divine blessings of our revered elders, we cordially invite you to celebrate the wedding ceremony of",
    groomFullName: "Chi. Sujal",
    groomLineage: "Son of Smt. Madhu Devi & Shri Mukesh Kumar Ji Lawat",
    groomGrandparents: "Grandson of Late Smt. Sulochna Devi & Late Shri Durgadutt Ji Lawat",
    groomNative: "Native of Alsisar (Currently Jaipur)",
    messageConnector: "&",
    brideFullName: "Sau. Kaa. Gayatri",
    brideLineage: "Daughter of Smt. Sharda Devi & Sahji Shri Basant Kumar Ji Chhaparwal",
    brideGrandparents: "Granddaughter of Smt. Vimla Devi & Sahji Shri Babulal Ji Chhaparwal",
    brideNative: "Native of Sardarshahar (Churu)",
    messageAuspiciousDate: "Shubh Miti Mangsar Badi Dooj Samvat 2083, Thursday, 26 November 2026",
    messageClosingQuote: "“Please grace this auspicious occasion with your family, shower your blessings upon the newlyweds, and honor us with your gracious presence.”",

    saveTheDateTag: "Save The Date",
    countdownTitle: "An Auspicious Date",
    scratchCaption: "Scratch the gold foil to reveal the wedding date!",
    revealDateBig: "26 NOVEMBER 2026",
    revealVenue: "Maheshwari Bhawan • Sardarshahar",
    countdownLabel: "Counting Down To The Big Day",
    cdUnitDays: "Days",
    cdUnitHours: "Hours",
    cdUnitMins: "Mins",
    cdUnitSecs: "Secs",
    cdExpiredMsg: "🎉 The Auspicious Day Is Here! 🎉",

    coupleSectionTitle: "Meet The Couple",
    groomRoleTag: "The Groom",
    groomCardName: "Sujal",
    groomTagline: "Lawat Family",
    groomTrait: "“Her steadfast anchor, warmest smile, and constant support in every walk of life.”",
    sparkHintTag: "✦ Tap to Celebrate ✦",
    brideRoleTag: "The Bride",
    brideCardName: "Gayatri",
    brideTagline: "Chhaparwal Family",
    brideTrait: "“His joyful grace, brightest laughter, and the soul behind every happy moment.”",

    storyBadge: "✦ A Sacred Union ✦",
    storyTitle: "Two Hearts, One Journey",
    storyTagline: "“From the heritage roots of Alsisar to the vibrant lanes of Sardarshahar”",
    storyCh1Badge: "Destined Together • Chapter 1",
    storyCh1Title: "A Graceful Beginning",
    storyCh1Text: "With the blessings of our elders and the guiding warmth of family traditions, two loving families came together. What began with warm conversations soon blossomed into a timeless bond of mutual respect, companionship, and boundless happiness.",
    storyCh2Badge: "Eternal Bond • Chapter 2",
    storyCh2Title: "United in Seven Vows",
    storyCh2Quote: "“Surrounded by the sacred holy fire, heartfelt blessings, and loving smiles of family, Sujal and Gayatri embark on this sacred journey of marriage to walk hand-in-hand for eternity.”",
    storyStatusKey: "Status:",
    storyStatusVal: "United for Eternity.",

    eventsTitle: "Wedding Itinerary",
    eventsCaption: "Join us in celebrating the rituals & festive joy",
    ev0Pill: "24 Nov 2026 • Tilak & Feast",
    ev0Title: "Tilak & Pritibhoj",
    ev0Date: "Tuesday, 24 November 2026",
    ev0Time: "Tilak: 04:15 PM • Pritibhoj: 06:15 PM",
    ev0Venue: "Maheshwari Bhawan, Near Ganesh Mandir, Sardarshahar",
    ev1Pill: "24 Nov 2026 • Sangeet",
    ev1Title: "Mahila Sangeet",
    ev1Date: "Tuesday, 24 November 2026",
    ev1Time: "From 07:15 PM Onwards",
    ev1Venue: "Maheshwari Bhawan, Near Ganesh Mandir, Sardarshahar",
    ev2Pill: "25 Nov 2026 • Baan",
    ev2Title: "Hald Haath Baan",
    ev2Date: "Wednesday, 25 November 2026",
    ev2Time: "Morning 11:00 AM Onwards",
    ev2Venue: "Maheshwari Bhawan, Near Ganesh Mandir, Sardarshahar",
    ev3Pill: "26 Nov 2026 • Chaak-Bhaat",
    ev3Title: "Chaak-Bhaat Ceremony",
    ev3Date: "Thursday, 26 November 2026",
    ev3Time: "Morning 11:15 AM Onwards",
    ev3Venue: "Maheshwari Bhawan, Near Ganesh Mandir, Sardarshahar",
    ev4Ribbon: "✦ The Auspicious Wedding Ceremony ✦",
    ev4Pill: "26 Nov 2026 • Shubh Vivah",
    ev4Title: "Dhukav & Shubh Vivah",
    ev4Date: "Thursday, 26 November 2026",
    ev4Time: "Dhukav: 06:15 PM • Pheras: Night Shubh Lagnanusar",
    ev4Venue: "Maheshwari Bhawan, Near Ganesh Mandir, Sardarshahar",
    btnViewLocation: "View Location",
    btnAddCalendar: "Add to Calendar",

    familySigLabel: "With Best Compliments & Warm Regards",
    familySigTitle: "Lawat and Chhaparwal Family",
    sehraPaksh: "Sehra Paksh: Lawat (Alsisar/Jaipur)",
    chunariPaksh: "Chunari Paksh: Chhaparwal (Sardarshahar)",
    firmsHeader: "✦ Business Establishments (Groom Side) ✦",
    darshanabhilashi: "Well-Wishers: Shri Ramratan, Ramgopal Ji, Ramotar, Sitaram, Manohar Lal, Rajkumar, Vijay & All Lawat Family",
    swagatkarta: "Welcomers: Komal-Yogesh Lawat, Manisha-Yash Lawat",
    vineet: "Solicited By: Shri Gopal Lawat",
    nanihalPaksh: "Maternal Family: Shri Shiv Prasad Ji, Shri Jugal Ji, Shri Vinod Ji, Shri Manoj Ji, Shri Deepak Ji & All Baberwal Family (Ramgarh Shekhawati)",
    jamaiPaksh: "Sister & Brother-in-Law: Sarita Bai - Bhawani Shankar Ji Saraswat (Kolkata)",
    balManuharTitle: "🌸 Bal Manuhar 🌸",
    balManuharText: "“Hamare Bhaiya Ki Shaadi Mein Zaroor-Zaroor Aana - Medha, Khanak”<br>“Mere Chachu Ki Shaadi Mein Zaroor-Zaroor Aana - Kartik”",
    womenNote: "Note: Kindly accept ladies' invitation through this card.",

    footerThankYou: "Thank You",
    footerNames: "Sujal & Gayatri",
    footerBlessingText: "With warm love, heartfelt prayers, and regards from both the Lawat & Chhaparwal families.",
    btnShare: "Share Invitation",
    btnBackToTop: "Back to Top",
    footerCredit: "Handcrafted with love for our special day • November 2026"
  },
  hi: {
    entrancePrompt: "शुभ निमंत्रण पत्र खोलें",
    heroInviteTag: "विवाह समारोह में आप सादर आमंत्रित हैं",
    groomFirstName: "सुजल",
    andConnector: "संग",
    brideFirstName: "गायत्री",
    heroFamiliesText: "सपरिवार आपका हार्दिक स्वागत करते हैं",
    scrollCueText: "उत्सव दर्शन हेतु नीचे स्क्रॉल करें",

    messageLead: "परमपिता परमेश्वर की असीम अनुकम्पा एवं पूज्य बड़े-बुजुर्गों के पावन आशीर्वाद से, हम आपको हमारे वैवाहिक उत्सव में सादर आमंत्रित करते हैं",
    groomFullName: "चि. सुजल",
    groomLineage: "सुपुत्र: श्रीमती मधु देवी एवं श्री मुकेश कुमार जी लावट",
    groomGrandparents: "सुपौत्र: स्व. श्रीमती सुलोचना देवी एवं स्व. श्री दुर्गादत्त जी लावट",
    groomNative: "निवासी: अलसीसर (हाल निवासी-जयपुर)",
    messageConnector: "संग",
    brideFullName: "सौ. कां. गायत्री",
    brideLineage: "सुपुत्री: श्रीमती शारदा देवी एवं साहजी श्री बसंत कुमार जी छापरवाल",
    brideGrandparents: "सुपौत्री: श्रीमती विमला देवी एवं साहजी श्री बाबूलाल जी छापरवाल",
    brideNative: "निवासी: सरदारशहर (चूरू)",
    messageAuspiciousDate: "शुभ मिति मंगसर बदी दूज संवत् २०८३, गुरूवार, २६ नवम्बर २०२६",
    messageClosingQuote: "“अतः आप इस मांगलिक बेला पर सपरिवार पधारकर वर-वधू को शुभाशीष प्रदान कर हमें अनुगृहीत करें।”",

    saveTheDateTag: "शुभ लग्न",
    countdownTitle: "पावन लग्न तिथि",
    scratchCaption: "विवाह की शुभ तिथि जानने के लिए सोने की परत स्क्रैच करें!",
    revealDateBig: "२६ नवम्बर २०२६",
    revealVenue: "माहेश्वरी भवन • सरदारशहर",
    countdownLabel: "शुभ विवाह के पावन क्षणों की उलटी गिनती",
    cdUnitDays: "दिन",
    cdUnitHours: "घंटे",
    cdUnitMins: "मिनट",
    cdUnitSecs: "सेकंड",
    cdExpiredMsg: "🎉 मंगलमय शुभ दिन आ गया है! 🎉",

    coupleSectionTitle: "वर एवं वधू",
    groomRoleTag: "वर",
    groomCardName: "सुजल",
    groomTagline: "लावट परिवार",
    groomTrait: "“उनका शांत संबल, मधुर मुस्कान और जीवन के हर मोड़ पर सबसे मजबूत सहारा।”",
    sparkHintTag: "✦ उत्सव मनाएं ✦",
    brideRoleTag: "वधू",
    brideCardName: "गायत्री",
    brideTagline: "छापरवाल परिवार",
    brideTrait: "“उनकी सबसे प्यारी मुस्कान, हर दिन का उल्लास और जीवन की सच्ची खुशी।”",

    storyBadge: "✦ पावन परिणय ✦",
    storyTitle: "दो दिलों का पावन संगम",
    storyTagline: "“अलसीसर की धरा से सरदारशहर के आंगन तक का पावन सफर”",
    storyCh1Badge: "ईश्वरीय संयोग • अध्याय १",
    storyCh1Title: "एक पावन शुरुआत",
    storyCh1Text: "बड़ों के पावन आशीर्वाद और पारिवारिक परंपराओं के सानिध्य में दो परिवारों का मिलन हुआ। पहली मुलाकात और आत्मीय बातचीत से शुरू हुआ यह सफर जल्द ही अटूट विश्वास, प्रेम और सम्मान के पावन बंधन में बंध गया।",
    storyCh2Badge: "सदा के लिए एक • अध्याय २",
    storyCh2Title: "बंधे सात फेरों के बंधन में",
    storyCh2Quote: "“अग्नि के सात फेरे लेकर, बड़ों का शुभाशीष पाकर सुजल और गायत्री ने एक-दूजे का हाथ थामकर जीवन के इस नए सफर में कदम रखा है।”",
    storyStatusKey: "स्थिति:",
    storyStatusVal: "सदा-सदा के लिए एक।",

    eventsTitle: "वैवाहिक कार्यक्रम",
    eventsCaption: "मांगलिक उत्सव एवं रस्मों में पधारकर हमारा उत्साह बढ़ाएं",
    ev0Pill: "२४ नवम्बर २०२६ • तिलक",
    ev0Title: "तिलक एवं प्रीतिभोज",
    ev0Date: "मंगलवार, २४ नवम्बर २०२६",
    ev0Time: "तिलक: सायं ४.१५ बजे • प्रीतिभोज: सायं ६.१५ बजे",
    ev0Venue: "माहेश्वरी भवन, गणेश जी मन्दिर के पास, सरदारशहर",
    ev1Pill: "२४ नवम्बर २०२६ • संगीत",
    ev1Title: "महिला संगीत",
    ev1Date: "मंगलवार, २४ नवम्बर २०२६",
    ev1Time: "सायं ०७:१५ बजे से",
    ev1Venue: "माहेश्वरी भवन, गणेश जी मन्दिर के पास, सरदारशहर",
    ev2Pill: "२५ नवम्बर २०२६ • बान",
    ev2Title: "हल्द हाथ बान",
    ev2Date: "बुधवार, २५ नवम्बर २०२६",
    ev2Time: "प्रातः ११:०० बजे से",
    ev2Venue: "माहेश्वरी भवन, गणेश जी मन्दिर के पास, सरदारशहर",
    ev3Pill: "२६ नवम्बर २०२६ • चाक-भात",
    ev3Title: "चाक-भात (मायरा)",
    ev3Date: "गुरूवार, २६ नवम्बर २०२६",
    ev3Time: "प्रातः ११:१५ बजे से",
    ev3Venue: "माहेश्वरी भवन, गणेश जी मन्दिर के पास, सरदारशहर",
    ev4Ribbon: "✦ पावन शुभ विवाह संस्कार ✦",
    ev4Pill: "२६ नवम्बर २०२६ • शुभ विवाह",
    ev4Title: "ढुकाव एवं पाणिग्रहण संस्कार (शुभ विवाह)",
    ev4Date: "गुरूवार, २६ नवम्बर २०२६",
    ev4Time: "ढुकाव: सायं ६.१५ बजे • पाणिग्रहण: रात्रि शुभलग्नानुसार",
    ev4Venue: "माहेश्वरी भवन, गणेश जी मन्दिर के पास, सरदारशहर",
    btnViewLocation: "लोकेशन देखें",
    btnAddCalendar: "कैलेंडर में जोड़ें",

    familySigLabel: "सादर स्नेह एवं मंगलकामनाएं",
    familySigTitle: "लावट एवं छापरवाल परिवार",
    sehraPaksh: "सेहरा पक्ष: लावट (अलसीसर/जयपुर)",
    chunariPaksh: "चुनरी पक्ष: छापरवाल (सरदारशहर)",
    firmsHeader: "✦ प्रतिष्ठान वर पक्ष ✦",
    darshanabhilashi: "दर्शनाभिलाषी: श्री रामरतन, रामगोपाल जी, रामोतार, सीताराम, मनोहरलाल, राजकुमार, विजय एवं समस्त लावट परिवार",
    swagatkarta: "स्वागतकर्ता: कोमल-योगेश लावट, मनीषा-यश लावट",
    vineet: "विनीत: श्री गोपाल लावट",
    nanihalPaksh: "ननिहाल पक्ष: श्री शिव प्रसाद जी, श्री जुगल जी, श्री विनोद जी, श्री मनोज जी, श्री दीपक जी एवं समस्त बबेरवाल परिवार (रामगढ़ शेखावाटी)",
    jamaiPaksh: "जंवाई पक्ष: सरिता बाई - भवानी शंकर जी सरास्वत (कलकत्ता)",
    balManuharTitle: "🌸 बाल मनुहार 🌸",
    balManuharText: "“हमारे भैया की शादी में जरूर-जरूर आना - मेधा, खनक”<br>“मेरे चाचू की शादी में जरूर-जरूर आना - कार्तिक”",
    womenNote: "नोट: कृपया महिलाओं का निमंत्रण इसी पत्रिका द्वारा स्वीकार करें।",

    footerThankYou: "हार्दिक आभार",
    footerNames: "सुजल एवं गायत्री",
    footerBlessingText: "लावट एवं छापरवाल परिवार की ओर से सप्रेम आभार एवं मंगलकामनाएं।",
    btnShare: "निमंत्रण शेयर करें",
    btnBackToTop: "शीर्ष पर जाएं",
    footerCredit: "हमारे इस पावन दिन के लिए सस्नेह समर्पित • नवम्बर २०२६"
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

  if (groomName && CONFIG.groom.fullName) groomName.textContent = CONFIG.groom.fullName;
  if (groomTagline && CONFIG.groom.tagline) groomTagline.textContent = CONFIG.groom.tagline;
  if (groomParents && CONFIG.groom.parents) groomParents.textContent = CONFIG.groom.parents;
  if (groomGrandparents && CONFIG.groom.grandparents) groomGrandparents.textContent = CONFIG.groom.grandparents;
  if (groomBio && CONFIG.groom.bio) groomBio.textContent = `“${CONFIG.groom.bio}”`;
  if (groomPhoto && CONFIG.groom.photo) groomPhoto.src = CONFIG.groom.photo;

  const brideName = document.querySelector('#brideCard .couple-name');
  const brideTagline = document.querySelector('#brideCard .couple-tagline');
  const brideParents = document.querySelector('#brideCard .couple-parents');
  const brideGrandparents = document.querySelector('#brideCard .couple-grandparents');
  const brideBio = document.querySelector('#brideCard .couple-bio');
  const bridePhoto = document.querySelector('#brideCard .couple-photo');

  if (brideName && CONFIG.bride.fullName) brideName.textContent = CONFIG.bride.fullName;
  if (brideTagline && CONFIG.bride.tagline) brideTagline.textContent = CONFIG.bride.tagline;
  if (brideParents && CONFIG.bride.parents) brideParents.textContent = CONFIG.bride.parents;
  if (brideGrandparents && CONFIG.bride.grandparents) brideGrandparents.textContent = CONFIG.bride.grandparents;
  if (brideBio && CONFIG.bride.bio) brideBio.textContent = `“${CONFIG.bride.bio}”`;
  if (bridePhoto && CONFIG.bride.photo) bridePhoto.src = CONFIG.bride.photo;

  const hashtagText = document.querySelector('.hashtag-text');
  if (hashtagText && CONFIG.hashtag) hashtagText.textContent = CONFIG.hashtag;

  const footerNames = document.querySelector('.footer-names');
  if (footerNames && CONFIG.groom.name && CONFIG.bride.name) {
    footerNames.textContent = `${CONFIG.groom.name} & ${CONFIG.bride.name}`;
  }
}

/* -----------------------------------------------------------------------------
   MODULE 2: CINEMATIC ENTRANCE SCREEN
   Full-screen video curtain with "Tap to Open", unmuted playback, and 2s dissolve.
   ----------------------------------------------------------------------------- */
function initEntrance() {
  const overlay = document.getElementById('entranceOverlay');
  const video = document.getElementById('entranceVideo');
  const promptBtn = document.getElementById('entrancePrompt');
  const skipBtn = document.getElementById('entranceSkip');
  const bloom = document.getElementById('entranceBloom');

  if (!overlay || !video) return;

  // Always keep entrance video muted
  video.muted = true;

  // Set video poster and source from CONFIG
  if (CONFIG.entrancePoster && !video.getAttribute('poster')) {
    video.poster = CONFIG.entrancePoster;
  }
  if (CONFIG.entranceVideo) {
    const source = video.querySelector('source');
    if (source) source.src = CONFIG.entranceVideo + '#t=0.001';
    video.load();
  }

  // Ensure first frame is displayed by seeking to start as soon as metadata is loaded
  video.addEventListener('loadedmetadata', () => {
    try {
      video.muted = true;
      video.currentTime = 0.001;
    } catch (e) {
      // Ignore if not permitted
    }
  });

  // Smooth cinematic dissolve transition into hero
  const dissolveIntoHero = () => {
    if (AppState.entrancePassed) return;
    AppState.entrancePassed = true;

    // Trigger bloom flash
    if (bloom) bloom.classList.add('bloom-active');

    // Add dissolve CSS classes
    overlay.classList.add('dissolving');

    // Trigger Cinematic Dolly Zoom on Hero background & line-by-line reveal
    const heroSection = document.getElementById('hero');
    if (heroSection) heroSection.classList.add('hero-revealed');

    // Reveal hero content lines with staggered timings
    const heroReveals = document.querySelectorAll('#hero .hero-line, #hero .reveal');
    heroReveals.forEach((el) => el.classList.add('in-view'));

    // Ensure background music continues smoothly
    playBackgroundMusic();



    // Unlock body scroll after transition completes
    setTimeout(() => {
      document.body.classList.remove('scroll-locked');
      overlay.style.display = 'none';
      overlay.setAttribute('aria-hidden', 'true');
      resetScrollToTop();
    }, 2200);
  };

  // Play background music instantly and muted video upon tap (iPhone & Android optimized)
  let entranceTapStarted = false;

  const handleOpenTap = (e) => {
    if (e) {
      if (e.type === 'touchend' && e.cancelable) {
        e.preventDefault();
      }
      if (e.stopPropagation) {
        e.stopPropagation();
      }
    }

    // 1. Immediately play background music on user tap/click
    playBackgroundMusic().catch(() => {
      // Retry once on next user interaction if somehow deferred
      const retryAudio = () => {
        playBackgroundMusic().finally(() => {
          document.removeEventListener('click', retryAudio);
          document.removeEventListener('touchend', retryAudio);
        });
      };
      document.addEventListener('click', retryAudio, { once: true });
      document.addEventListener('touchend', retryAudio, { once: true });
    });

    if (entranceTapStarted) return;
    entranceTapStarted = true;

    // 2. Hide prompt button immediately
    if (promptBtn) promptBtn.classList.add('hidden');

    // 3. Play entrance video (strictly muted so it never competes for audio context)
    video.muted = true;
    try {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video playing smoothly (muted)
          })
          .catch((err) => {
            console.warn("Video playback issue, falling back to dissolve:", err);
            dissolveIntoHero();
          });
      }
    } catch (err) {
      console.warn("Video play exception:", err);
      dissolveIntoHero();
    }
  };

  // Attach strictly to user activation gesture events (click & touchend)
  // Note: touchstart and pointerdown are NOT user activation gestures in browsers and cause play() to be blocked
  const attachTapHandler = (el) => {
    if (!el) return;
    el.addEventListener('touchend', handleOpenTap, { passive: false });
    el.addEventListener('click', handleOpenTap);
  };

  attachTapHandler(promptBtn);
  attachTapHandler(overlay);

  // Dissolve on video ended
  video.addEventListener('ended', dissolveIntoHero);

  // Skip / direct open fallback button
  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      video.pause();
      playBackgroundMusic();
      dissolveIntoHero();
    });
  }

  // Video error handling fallback
  video.addEventListener('error', () => {
    console.warn("Video unable to load; displaying direct open fallback.");
    promptBtn.querySelector('.entrance-btn-label').textContent = "Open Invitation";
    promptBtn.addEventListener('click', () => {
      playBackgroundMusic();
      dissolveIntoHero();
    }, { once: true });
  });
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
  window.redrawScratchFoil = function() {
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
    { delay: 0,   x: w * 0.28, y: h * 0.65, count: 55, spread: 65, speed: 18, angle: -65 },
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
          title: `${CONFIG.groom.name} & ${CONFIG.bride.name} Wedding Invitation`,
          text: `Agrawal and Soni Family invite you to celebrate the wedding of ${CONFIG.groom.name} & ${CONFIG.bride.name} on ${CONFIG.weddingDateDisplay} in ${CONFIG.weddingCity}!`,
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
  if (lang !== 'en' && lang !== 'hi') lang = 'en';
  AppState.currentLang = lang;
  try {
    localStorage.setItem('sujal_gayatri_lang', lang);
  } catch (e) {}

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
        el.textContent = dict[key];
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

  // Retrieve saved language preference or default to English
  let savedLang = 'en';
  try {
    savedLang = localStorage.getItem('sujal_gayatri_lang') || 'en';
  } catch (e) {}

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
  resetScrollToTop();
  initStage();
  applyConfigToDOM();
  initMusicPlayer();
  initEntrance();
  initReveal();
  initHeroParticles();
  initScratchCard();
  initCountdown();
  initCoupleSwitcher();
  initCoupleSparkButton();
  initStoryCarousel();
  initWeddingEvents();
  initShareAndHashtag();
  initLanguageSwitcher();
});
