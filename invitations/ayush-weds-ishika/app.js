/* =========================================================
   KAMAL — INTERACTIVE WEDDING INVITATION ENGINE
   Tap-the-water boat drift, gold scratch-off cards,
   scroll-blooming lotuses, bilingual EN/HI, countdown,
   .ics calendar export, Web Audio chime & WhatsApp RSVP
   ========================================================= */

(function () {
  "use strict";

  // Prevent browser from restoring bottom/footer scroll while gate is locked
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);
  window.addEventListener("pageshow", () => {
    if (document.body.classList.contains("gate-locked")) {
      window.scrollTo(0, 0);
    }
  });

  // ---------------------------------------------------------
  // 1. BILINGUAL DICTIONARY (English & Devanagari Hindi)
  // ---------------------------------------------------------
  const I18N = {
    en: {
      "gate.invited": "You're invited",
      "gate.sub": "TO A WEDDING<br>IN AHORE, RAJASTHAN",
      "gate.tap": "Tap the water",
      "hero.welcome": "॥ Shri Ganeshaya Namah ॥",
      "hero.city": "27 · 01 · 2027 · AHORE",
      "hero.scroll": "Scroll down",
      "couple.groomFirst": "Ayush",
      "couple.brideFirst": "Ishika",
      "couple.groomFull": "Chi. Ayush",
      "couple.brideFull": "Sau. Ka. Ishika",
      "date.title": "The Date",
      "date.scratchHint": "Scratch to reveal the date",
      "date.dayVal": "27",
      "date.monthVal": "January",
      "date.yearVal": "2027",
      "date.dayLabel": "DAY",
      "date.monthLabel": "MONTH",
      "date.yearLabel": "YEAR",
      "date.summaryTime": "Budhwar (Wednesday), 7:00 pm onwards",
      "date.summaryPlace": "Samvat 2083 · Magh Vad 6 · Ahore, Rajasthan",
      "common.addToCalendar": "Add to calendar",
      "formal.lead": "Shriman Manyavar,<br>Mangalmay Shri Jineshwar Bhagwan ki asim kripa se hamare yahan",
      "formal.groomGrandLabel": "SUPAUTRA",
      "formal.groomGrand": "Smt. Manjula Devi – Late Kothari Kantilalji Motichandji Bagrecha Solanki",
      "formal.sonOf": "SUPUTRA",
      "formal.groomParents": "Smt. Veena Devi – Kothari Kirtikumarji Bagrecha Solanki",
      "formal.with": "sang",
      "formal.brideGrandLabel": "SUPAUTRI",
      "formal.brideGrand": "Smt. Sukhi Devi – Shri Vimalchandji Ghatmalji Tilesra Mutha",
      "formal.daughterOf": "SUPUTRI",
      "formal.brideParents": "Smt. Samata Devi – Shri Sanjayji Tilesra Mutha",
      "formal.note": "ka shubh vivah Samvat 2083 Magh Vad 6, Budhwar, dinank 27-01-2027 ko hona nishchit hua hai. Is prasang par aap saparivar padharkar nav-dampati ko shubhashirvad pradan kar hamein anugrahit karein.",
      "gallery.title": "Ayush &amp; Ishika",
      "gallery.swipe": "Swipe to see more",
      "events.title": "The celebrations",
      "events.mayraDay": "SOMVAR, 25 JAN",
      "events.mayraTime": "Subah 10:00 baje se",
      "events.mayraName": "Mayra",
      "events.mayraPlace": "Sanghvi Nohra, Ahore, Rajasthan",
      "events.bandoliDay": "SOMVAR, 25 JAN",
      "events.bandoliTime": "Ratri 8:00 baje se",
      "events.bandoliName": "Bandoli",
      "events.bandoliPlace": "Ahore, Rajasthan",
      "events.haldiDay": "MANGALVAR, 26 JAN",
      "events.haldiTime": "Dopahar 12:00 baje se",
      "events.haldiName": "Haldi Carnival",
      "events.haldiPlace": "Ahore, Rajasthan",
      "events.sangeetDay": "MANGALVAR, 26 JAN",
      "events.sangeetTime": "Ratri 8:00 baje se",
      "events.sangeetName": "Sangeet Sandhya",
      "events.sangeetPlace": "Ahore, Rajasthan",
      "events.weddingDay": "BUDHWAR, 27 JAN",
      "events.weddingTime": "Shaam 7:00 baje se",
      "events.weddingName": "Baraat Prasthan",
      "events.weddingSub": "tatpashchat Hasth Milaap evam Phere",
      "events.weddingPlace": "Ahore, Rajasthan",
      "events.samdhiTitle": "SAMDHI PRAVAR",
      "events.samdhiText": "Sha Sanjayji Vimalchandji Tilesra Mutha ke yahan baraat jayegi",
      "countdown.title": "The celebration begins",
      "countdown.days": "Days",
      "countdown.hours": "Hours",
      "countdown.minutes": "Minutes",
      "countdown.seconds": "Seconds",
      "countdown.sub": "until the Mayra, on Monday, 25 January 2027",
      "location.title": "Shubhsthal",
      "location.city": "AHORE, RAJASTHAN",
      "location.venue": "Moti Nivas, Dera ki Seri",
      "location.address": "Kothari Vikramkumar, Kirtikumar, Amitkumar Kantilalji Motichandji Kothari<br>Ahore, Dist. Jalore (Rajasthan)",
      "location.showMap": "Show the map",
      "location.openMaps": "OPEN IN GOOGLE MAPS",
      "families.title": "Our Families",
      "families.visheshTitle": "VISHESH PRARTHI",
      "families.visheshNames": "Smt. Veena Devi Shantilalji Kundanmalji Folamutha (Salecha)<br>Kunal – Jainam Folamutha (Salecha)",
      "families.nanihalTitle": "NANIHAL PAKSH",
      "families.nanihalNames": "Shriman Sha. Shripalji, Mahavirji, Gautamji, Manishji, Kumarpalji, Shrenikji, Rishabji, Adarshji evam samast Jugrajji Phoolchandji Kothari (Talavat) Parivar, Ahore",
      "families.divyaTitle": "DIVYASHISH",
      "families.divyaNames": "Late Smt. Panibai Motichandji Kothari<br>Bhuasa Late Smt. Ratanbai Parasmalji Mishrimalji Bafna<br>Late Smt. Shantibai Vagtavarmalji Kothari<br>Late Kothari Kantilalji Motichandji (Bagrecha Solanki)<br>Late Shri Kanrajji Kothari (Talavat)",
      "families.darshanTitle": "AAPKE DARSHANABHILASHI",
      "families.darshanNames": "Kothari Karanrajji, Ambalal, Sureshkumar, Jayantilal, Dilipkumar, Vikramkumar, Ambalal, Lalitkumar, Manojkumar, Amitkumar, Ajaykumar, Rajendrakumar, Harvish, Vishal, Abhishek, Pakshal, Rahul, Kalpesh, Moksh, Tanuj, Manas, Harsh, Jainam, Bhavik, Vihaan, Viyaan, Vyay evam samast Bagrecha Solanki Parivar, Ahore",
      "families.swagatTitle": "SWAGATOTSUK",
      "firms.title": "Pratishthan",
      "firms.shubhKicker": "SHUBHSTHAL",
      "rsvp.title": "Will you join us?",
      "rsvp.sub": "Please let us know how many of you are joining each celebration in Ahore.",
      "rsvp.nameLabel": "YOUR NAME",
      "rsvp.namePlaceholder": "e.g. Rajesh Kothari",
      "rsvp.mayraDate": "Mon, 25 Jan · 10:00 am",
      "rsvp.bandoliDate": "Mon, 25 Jan · 8:00 pm",
      "rsvp.haldiDate": "Tue, 26 Jan · 12:00 pm",
      "rsvp.sangeetDate": "Tue, 26 Jan · 8:00 pm",
      "rsvp.weddingDate": "Wed, 27 Jan · 7:00 pm",
      "rsvp.sendBtn": "SEND ON WHATSAPP",
      "rsvp.helper": "This opens WhatsApp with your reply written out. Nothing is sent until you press send.",
      "footer.awaiting": "AWAITING YOUR GRACIOUS PRESENCE",
      "footer.host": "Kothari Kirtikumar Kantilalji Bagrecha Solanki",
      "footer.couple": "Ayush &amp; Ishika",
    },
    hi: {
      "gate.invited": "सादर आमंत्रण",
      "gate.sub": "अहोरे, राजस्थान में<br>शुभ विवाह समारोह",
      "gate.tap": "जल को स्पर्श करें",
      "hero.welcome": "॥ श्री गणेशाय नमः ॥",
      "hero.city": "२७ · ०१ · २०२७ · अहोरे",
      "hero.scroll": "नीचे स्क्रॉल करें",
      "couple.groomFirst": "आयुष",
      "couple.brideFirst": "इशिका",
      "couple.groomFull": "चि. आयुष",
      "couple.brideFull": "सौ. का. इशिका",
      "date.title": "शुभ तिथि",
      "date.scratchHint": "तिथि देखने के लिए स्क्रैच करें",
      "date.dayVal": "२७",
      "date.monthVal": "जनवरी",
      "date.yearVal": "२०२७",
      "date.dayLabel": "दिन",
      "date.monthLabel": "माह",
      "date.yearLabel": "वर्ष",
      "date.summaryTime": "बुधवार, शाम ७:०० बजे से",
      "date.summaryPlace": "संवत २०८३ · माघ वद ६ · अहोरे, राजस्थान",
      "common.addToCalendar": "कैलेंडर में जोड़ें",
      "formal.lead": "श्रीमान् मान्यवर,<br>मंगलमय श्री जिनेश्वर भगवान की असीम कृपा से हमारे यहाँ",
      "formal.groomGrandLabel": "सुपौत्र",
      "formal.groomGrand": "श्रीमती मंजुला देवी – स्व. कोठारी कांतिलालजी मोतीचंदजी बागरेचा सोलंकी",
      "formal.sonOf": "सुपुत्र",
      "formal.groomParents": "श्रीमती वीणा देवी – कोठारी कीर्तिकुमारजी बागरेचा सोलंकी",
      "formal.with": "संग",
      "formal.brideGrandLabel": "सुपौत्री",
      "formal.brideGrand": "श्रीमती सुखी देवी – श्री विमलचंदजी घाटमलजी तिलेसरा मुथा",
      "formal.daughterOf": "सुपुत्री",
      "formal.brideParents": "श्रीमती समता देवी – श्री संजयजी तिलेसरा मुथा",
      "formal.note": "का शुभ विवाह संवत २०८३ माघ वद ६, बुधवार, दिनांक २७-०१-२०२७ को होना निश्चित हुआ है। इस पावन प्रसंग पर आप सपरिवार पधारकर नव-दंपति को शुभाशीर्वाद प्रदान कर हमें अनुग्रहीत करें।",
      "gallery.title": "आयुष एवं इशिका",
      "gallery.swipe": "और तस्वीरें देखने के लिए स्वाइप करें",
      "events.title": "मांगलिक कार्यक्रम",
      "events.mayraDay": "सोमवार, २५ जनवरी",
      "events.mayraTime": "सुबह १०:०० बजे से",
      "events.mayraName": "मायरा",
      "events.mayraPlace": "संघवी नोहरा, अहोरे, राजस्थान",
      "events.bandoliDay": "सोमवार, २५ जनवरी",
      "events.bandoliTime": "रात्रि ८:०० बजे से",
      "events.bandoliName": "बन्दोली",
      "events.bandoliPlace": "अहोरे, राजस्थान",
      "events.haldiDay": "मंगलवार, २६ जनवरी",
      "events.haldiTime": "दोपहर १२:०० बजे से",
      "events.haldiName": "हल्दी कार्निवल",
      "events.haldiPlace": "अहोरे, राजस्थान",
      "events.sangeetDay": "मंगलवार, २६ जनवरी",
      "events.sangeetTime": "रात्रि ८:०० बजे से",
      "events.sangeetName": "संगीत संध्या",
      "events.sangeetPlace": "अहोरे, राजस्थान",
      "events.weddingDay": "बुधवार, २७ जनवरी",
      "events.weddingTime": "शाम ७:०० बजे से",
      "events.weddingName": "बारात प्रस्थान",
      "events.weddingSub": "तत्पश्चात् हस्त मिलाप एवं फेरे",
      "events.weddingPlace": "अहोरे, राजस्थान",
      "events.samdhiTitle": "समधी प्रवर",
      "events.samdhiText": "शाह संजयजी विमलचंदजी तिलेसरा मुथा के यहाँ बारात जाएगी",
      "countdown.title": "उत्सव का शुभारंभ",
      "countdown.days": "दिन",
      "countdown.hours": "घंटे",
      "countdown.minutes": "मिनट",
      "countdown.seconds": "सेकंड",
      "countdown.sub": "मायरा समारोह तक — सोमवार, २५ जनवरी २०२७",
      "location.title": "शुभस्थल",
      "location.city": "अहोरे, राजस्थान",
      "location.venue": "मोती निवास, डेरा की सेरी",
      "location.address": "कोठारी विक्रमकुमार, कीर्तिकुमार, अमितकुमार कांतिलालजी मोतीचंदजी कोठारी<br>अहोरे, जिला जालोर (राजस्थान)",
      "location.showMap": "मानचित्र देखें",
      "location.openMaps": "गूगल मैप्स में खोलें",
      "families.title": "हमारे परिवार",
      "families.visheshTitle": "विशेष प्रार्थी",
      "families.visheshNames": "श्रीमती वीणा देवी शांतिलालजी कुंदनमलजी फोलामुथा (सालेचा)<br>कुणाल – जैनम फोलामुथा (सालेचा)",
      "families.nanihalTitle": "ननिहाल पक्ष",
      "families.nanihalNames": "श्रीमान् शाह श्रीपालजी, महावीरजी, गौतमजी, मनीषजी, कुमारपालजी, श्रेणिकजी, ऋषभजी, आदर्शजी एवं समस्त जुगराजजी फूलचंदजी कोठारी (तलावत) परिवार, अहोरे",
      "families.divyaTitle": "दिव्याशीष",
      "families.divyaNames": "स्व. श्रीमती पानीबाई मोतीचंदजी कोठारी<br>भुआसा स्व. श्रीमती रतनबाई पारसमलजी मिश्रीमलजी बाफना<br>स्व. श्रीमती शांतिबाई वक्तावरमलजी कोठारी<br>स्व. कोठारी कांतिलालजी मोतीचंदजी (बागरेचा सोलंकी)<br>स्व. श्री कानराजजी कोठारी (तलावत)",
      "families.darshanTitle": "आपके दर्शनाभिलाषी",
      "families.darshanNames": "कोठारी करणराजजी, अंबालाल, सुरेशकुमार, जयंतीलाल, दिलीपकुमार, विक्रमकुमार, अंबालाल, ललितकुमार, मनोजकुमार, अमितकुमार, अजयकुमार, राजेंद्रकुमार, हर्विष, विशाल, अभिषेक, पक्षल, राहुल, कल्पेश, मोक्ष, तनुज, मानस, हर्ष, जैनम, भाविक, विहान, वियान, व्यय एवं समस्त बागरेचा सोलंकी परिवार, अहोरे",
      "families.swagatTitle": "स्वागतोत्सुक",
      "firms.title": "प्रतिष्ठान",
      "firms.shubhKicker": "शुभस्थल",
      "rsvp.title": "क्या आप पधारेंगे?",
      "rsvp.sub": "कृपया बताएं कि अहोरे में प्रत्येक समारोह में कितने सदस्य पधार रहे हैं।",
      "rsvp.nameLabel": "आपका नाम",
      "rsvp.namePlaceholder": "जैसे: राजेश कोठारी",
      "rsvp.mayraDate": "सोमवार, २५ जनवरी · सुबह १०:०० बजे",
      "rsvp.bandoliDate": "सोमवार, २५ जनवरी · रात्रि ८:०० बजे",
      "rsvp.haldiDate": "मंगलवार, २६ जनवरी · दोपहर १२:०० बजे",
      "rsvp.sangeetDate": "मंगलवार, २६ जनवरी · रात्रि ८:०० बजे",
      "rsvp.weddingDate": "बुधवार, २७ जनवरी · शाम ७:०० बजे",
      "rsvp.sendBtn": "व्हाट्सएप पर भेजें",
      "rsvp.helper": "यह आपके संदेश के साथ व्हाट्सएप खोलेगा। जब तक आप सेंड न दबाएं, कुछ नहीं भेजा जाएगा।",
      "footer.awaiting": "आपके शुभ आगमन की प्रतीक्षा में",
      "footer.host": "कोठारी कीर्तिकुमार कांतिलालजी बागरेचा सोलंकी",
      "footer.couple": "आयुष एवं इशिका",
    },
  };

  let currentLang = "en";

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    const dict = I18N[lang] || I18N.en;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    const langBtn = document.getElementById("langToggleBtn");
    if (langBtn) {
      langBtn.textContent = lang === "en" ? "हिं" : "En";
    }
  }

  // ---------------------------------------------------------
  // 2. ROYAL INDIAN WEDDING BACKGROUND MUSIC (Lush Santoor + Flute + Tanpura)
  //    Also auto-uses `assets/wedding-song.mp3` if present!
  // ---------------------------------------------------------
  const AmbientAudio = (function () {
    let ctx = null;
    let masterGain = null;
    let delayNode = null;
    let feedbackGain = null;
    let droneNodes = [];
    let playing = false;
    let timerId = null;
    let customAudio = null;
    let usingCustomFile = false;

    // Romantic Raag Yaman / Royal Udaipur Wedding Melody (Hz)
    // Scale: C4 D4 E4 F#4 G4 A4 B4 C5 D5 E5
    const MELODY = [
      { f: 329.63, d: 1.2, t: 900 },  // Ga
      { f: 369.99, d: 1.4, t: 900 },  // Ma#
      { f: 392.00, d: 1.8, t: 1100 }, // Pa
      { f: 493.88, d: 1.6, t: 950 },  // Ni
      { f: 440.00, d: 1.4, t: 850 },  // Dha
      { f: 392.00, d: 2.0, t: 1200 }, // Pa
      { f: 369.99, d: 1.3, t: 850 },  // Ma#
      { f: 329.63, d: 1.6, t: 950 },  // Ga
      { f: 293.66, d: 1.8, t: 1100 }, // Re
      { f: 329.63, d: 1.4, t: 900 },  // Ga
      { f: 392.00, d: 1.5, t: 900 },  // Pa
      { f: 523.25, d: 2.2, t: 1300 }, // Sa'
      { f: 493.88, d: 1.5, t: 900 },  // Ni
      { f: 440.00, d: 1.4, t: 850 },  // Dha
      { f: 392.00, d: 1.6, t: 950 },  // Pa
      { f: 329.63, d: 2.2, t: 1300 }, // Ga
    ];
    const CHORDS = [
      [130.81, 196.00, 261.63], // C5 / Sa-Pa-Sa
      [146.83, 220.00, 293.66], // D5
      [164.81, 246.94, 329.63], // Em
      [196.00, 246.94, 293.66], // G
    ];
    let step = 0;

    function initWebAudio() {
      if (ctx) return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      ctx = new AudioCtx();

      masterGain = ctx.createGain();
      masterGain.gain.value = 0.0001;

      // Warm concert-hall echo/reverb feedback loop
      delayNode = ctx.createDelay(1.0);
      delayNode.delayTime.value = 0.36;
      feedbackGain = ctx.createGain();
      feedbackGain.gain.value = 0.34;
      const wetFilter = ctx.createBiquadFilter();
      wetFilter.type = "lowpass";
      wetFilter.frequency.value = 2100;

      delayNode.connect(wetFilter);
      wetFilter.connect(feedbackGain);
      feedbackGain.connect(delayNode);
      wetFilter.connect(masterGain);

      masterGain.connect(ctx.destination);
    }

    function startTanpuraDrone() {
      if (!ctx || droneNodes.length) return;
      // Soft continuous warm tanpura Sa (C3) + Pa (G3)
      [130.81, 196.0].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.value = freq;
        filter.type = "lowpass";
        filter.frequency.value = idx === 0 ? 340 : 480;
        gain.gain.value = idx === 0 ? 0.028 : 0.018;
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(masterGain);
        osc.start();
        droneNodes.push({ osc, gain });
      });
    }

    function playSantoor(freq, duration = 2.4, vol = 0.11) {
      if (!ctx || !playing) return;
      const now = ctx.currentTime;
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      // Santoor shimmering double-string detune
      osc1.type = "triangle";
      osc2.type = "sine";
      osc1.frequency.setValueAtTime(freq, now);
      osc2.frequency.setValueAtTime(freq * 2.003, now);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(3200, now);
      filter.frequency.exponentialRampToValueAtTime(900, now + duration);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(vol, now + 0.025);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);
      gain.connect(delayNode);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + duration + 0.08);
      osc2.stop(now + duration + 0.08);
    }

    function playBansuriBreath(freq, duration = 1.9, vol = 0.06) {
      if (!ctx || !playing) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);
      // Gentle expressive bansuri vibrato
      lfo.frequency.value = 5.2;
      lfoGain.gain.value = 2.6;
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(vol, now + 0.28);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(masterGain);
      gain.connect(delayNode);

      osc.start(now);
      lfo.start(now);
      osc.stop(now + duration + 0.08);
      lfo.stop(now + duration + 0.08);
    }

    function playWarmChord(notes) {
      if (!ctx || !playing) return;
      notes.forEach((f, idx) => {
        setTimeout(() => {
          if (playing) playSantoor(f, 3.2, 0.045);
        }, idx * 110);
      });
    }

    function startSynth() {
      initWebAudio();
      if (!ctx) return;
      if (ctx.state === "suspended") ctx.resume();
      startTanpuraDrone();
      playing = true;
      masterGain.gain.cancelScheduledValues(ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0.65, ctx.currentTime + 1.0);

      function tick() {
        if (!playing) return;
        const n = MELODY[step % MELODY.length];
        playSantoor(n.f, n.d + 1.1, 0.105);
        if (step % 2 === 0) {
          playBansuriBreath(n.f * 2, n.d + 0.7, 0.048);
        }
        if (step % 4 === 0) {
          const chord = CHORDS[Math.floor(step / 4) % CHORDS.length];
          playWarmChord(chord);
        }
        step++;
        timerId = setTimeout(tick, n.t);
      }
      if (!timerId) tick();
      updateAudioUI();
    }

    function start() {
      if (!customAudio) {
        const audio = new Audio("assets/wedding-song.mp3");
        audio.loop = true;
        audio.volume = 0.65;
        audio.preload = "auto";
        customAudio = audio;
      }
      usingCustomFile = true;
      playing = true;
      customAudio.play().catch(() => {
        usingCustomFile = false;
        startSynth();
      });
      updateAudioUI();
    }

    function pause() {
      playing = false;
      if (usingCustomFile && customAudio) {
        customAudio.pause();
      }
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
      if (ctx && masterGain) {
        masterGain.gain.cancelScheduledValues(ctx.currentTime);
        masterGain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.45);
      }
      updateAudioUI();
    }

    function toggle() {
      if (playing) pause();
      else start();
    }

    function updateAudioUI() {
      const btn = document.getElementById("audioToggleBtn");
      if (!btn) return;
      const pauseIcon = btn.querySelector(".audio-icon-pause");
      const playIcon = btn.querySelector(".audio-icon-play");
      if (pauseIcon && playIcon) {
        pauseIcon.hidden = !playing;
        playIcon.hidden = playing;
      }
    }

    return { start, pause, toggle, isPlaying: () => playing };
  })();

  // ---------------------------------------------------------
  // 3. STAGE 0 -> STAGE 1: TAP THE WATER OPENING
  // ---------------------------------------------------------
  function initPondGate() {
    const hero = document.getElementById("pondHero");
    const rippleLayer = document.getElementById("rippleLayer");
    const heroReveal = document.getElementById("heroReveal");
    const floatingControls = document.getElementById("floatingControls");
    let opened = false;

    function spawnRipple(x, y) {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          const el = document.createElement("span");
          el.className = "water-ripple";
          el.style.left = `${x}px`;
          el.style.top = `${y}px`;
          rippleLayer.appendChild(el);
          setTimeout(() => el.remove(), 1750);
        }, i * 240);
      }
    }

    function openPond(clientX, clientY) {
      if (opened) return;
      opened = true;

      const rect = hero.getBoundingClientRect();
      const x = clientX ? clientX - rect.left : rect.width * 0.5;
      const y = clientY ? clientY - rect.top : rect.height * 0.62;
      spawnRipple(x, y);

      // Start boat drift & fade out gate greeting
      hero.classList.add("is-opening");
      AmbientAudio.start();

      // Gentle wake ripples along the boat's path
      setTimeout(() => spawnRipple(rect.width * 0.34, rect.height * 0.67), 700);
      setTimeout(() => spawnRipple(rect.width * 0.48, rect.height * 0.58), 1500);

      // Reveal couple names with staggered ks-wipe + unlock scrolling
      setTimeout(() => {
        hero.classList.add("is-opened");
        heroReveal.setAttribute("aria-hidden", "false");
        document.body.classList.remove("gate-locked");
        floatingControls.classList.add("is-visible");
        window.scrollTo(0, 0);
        window.dispatchEvent(new Event("scroll"));
      }, 1750);
    }

    hero.addEventListener("click", (e) => {
      if (!opened) {
        openPond(e.clientX, e.clientY);
      } else {
        // Subtle water ripple if tapping open water later
        const rect = hero.getBoundingClientRect();
        spawnRipple(e.clientX - rect.left, e.clientY - rect.top);
      }
    });
  }

  // ---------------------------------------------------------
  // 4. INTERACTIVE GOLD FOIL SCRATCH-OFF DATE CARDS
  // ---------------------------------------------------------
  function initScratchCards() {
    const cards = Array.from(document.querySelectorAll(".scratch-card"));
    const revealedNote = document.getElementById("dateRevealedNote");
    let clearedCount = 0;

    function paintGoldFoil(canvas) {
      const ctx = canvas.getContext("2d");
      const w = canvas.width;
      const h = canvas.height;

      // Diagonal metallic gold foil gradient
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0.0, "#9E7736");
      grad.addColorStop(0.24, "#D7B673");
      grad.addColorStop(0.45, "#F2DFB0");
      grad.addColorStop(0.68, "#B48A42");
      grad.addColorStop(0.86, "#DFC280");
      grad.addColorStop(1.0, "#8E682B");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Fine metallic speckles
      for (let i = 0; i < 650; i++) {
        const sx = Math.random() * w;
        const sy = Math.random() * h;
        const r = Math.random() * 1.4;
        ctx.fillStyle = Math.random() > 0.45 ? "rgba(255,250,235,0.45)" : "rgba(110,76,22,0.22)";
        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Delicate rounded inner hairline border
      ctx.strokeStyle = "rgba(255, 248, 228, 0.72)";
      ctx.lineWidth = 2.4;
      const pad = 12;
      const rad = 16;
      ctx.beginPath();
      ctx.roundRect(pad, pad, w - pad * 2, h - pad * 2, rad);
      ctx.stroke();

      // Centered 4-point star ✦
      ctx.fillStyle = "rgba(255, 250, 236, 0.9)";
      const cx = w / 2;
      const cy = h / 2;
      const sr = 18;
      ctx.beginPath();
      ctx.moveTo(cx, cy - sr);
      ctx.quadraticCurveTo(cx + 3, cy - 3, cx + sr, cy);
      ctx.quadraticCurveTo(cx + 3, cy + 3, cx, cy + sr);
      ctx.quadraticCurveTo(cx - 3, cy + 3, cx - sr, cy);
      ctx.quadraticCurveTo(cx - 3, cy - 3, cx, cy - sr);
      ctx.closePath();
      ctx.fill();
    }

    cards.forEach((card) => {
      const canvas = card.querySelector(".scratch-canvas");
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      paintGoldFoil(canvas);

      let isDrawing = false;
      let isCleared = false;
      let strokes = 0;

      function getCoords(e) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        return {
          x: (e.clientX - rect.left) * scaleX,
          y: (e.clientY - rect.top) * scaleY,
        };
      }

      function scratchAt(x, y) {
        if (isCleared) return;
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(x, y, 28, 0, Math.PI * 2);
        ctx.fill();
        strokes++;

        if (strokes % 6 === 0) checkProgress();
      }

      function checkProgress() {
        if (isCleared) return;
        const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        let transparent = 0;
        const total = pixels.length / 4;
        for (let i = 3; i < pixels.length; i += 16) {
          if (pixels[i] < 128) transparent++;
        }
        const ratio = transparent / (total / 4);
        if (ratio > 0.36) {
          isCleared = true;
          card.classList.add("is-cleared");
          clearedCount++;
          if (clearedCount >= cards.length && revealedNote) {
            revealedNote.classList.add("is-visible");
          }
        }
      }

      canvas.addEventListener("pointerdown", (e) => {
        isDrawing = true;
        canvas.setPointerCapture(e.pointerId);
        const { x, y } = getCoords(e);
        scratchAt(x, y);
      });

      canvas.addEventListener("pointermove", (e) => {
        if (!isDrawing) return;
        const { x, y } = getCoords(e);
        scratchAt(x, y);
      });

      canvas.addEventListener("pointerup", () => {
        isDrawing = false;
        checkProgress();
      });

      // Double-click convenience to clear card immediately
      canvas.addEventListener("dblclick", () => {
        if (!isCleared) {
          isCleared = true;
          card.classList.add("is-cleared");
          clearedCount++;
          if (clearedCount >= cards.length && revealedNote) {
            revealedNote.classList.add("is-visible");
          }
        }
      });
    });
  }

  // ---------------------------------------------------------
  // 5. SCROLL-BLOOMING LOTUSES & DRIFTING LILY PADS
  // ---------------------------------------------------------
  function initScrollDecorations() {
    const lotusNodes = Array.from(document.querySelectorAll("[data-bloom-lotus]"));
    const stage = document.getElementById("celebrationsStage");
    const lilyTop = document.getElementById("lilyTopLeft");
    const lilyBottom = document.getElementById("lilyBottomRight");

    function update() {
      const vh = window.innerHeight || 800;

      // Scroll-blooming lotus markers (90% -> 45% viewport height)
      lotusNodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const raw = (vh * 0.9 - centerY) / (vh * 0.45);
        const p = Math.max(0, Math.min(1, raw));

        const scale = 0.48 + p * 0.58;
        const rot = -20 + p * 20;
        const op = 0.65 + p * 0.35;
        node.style.transform = `translate(-50%, -50%) scale(${scale.toFixed(3)}) rotate(${rot.toFixed(1)}deg)`;
        node.style.opacity = op.toFixed(2);
      });

      // Drifting lily pads horizontal parallax (±12%)
      if (stage && lilyTop && lilyBottom) {
        const sRect = stage.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (vh - sRect.top) / (vh + sRect.height)));
        const shift = (progress - 0.5) * 24; // -12% to +12%
        lilyTop.style.transform = `translateX(${shift.toFixed(1)}%) rotate(-6deg)`;
        lilyBottom.style.transform = `translateX(${(-shift).toFixed(1)}%) rotate(172deg)`;
      }
    }

    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    update();
  }

  // ---------------------------------------------------------
  // 6. SCROLL REVEAL OBSERVER
  // ---------------------------------------------------------
  function initScrollReveal() {
    const items = document.querySelectorAll(".reveal-on-scroll");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-inview"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-inview");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((el) => io.observe(el));
  }

  // ---------------------------------------------------------
  // 7. LIVE COUNTDOWN (Target: 25 Jan 2027, 10:00 AM IST — Mayra)
  // ---------------------------------------------------------
  function initCountdown() {
    const targetMs = new Date("2027-01-25T10:00:00+05:30").getTime();
    const elD = document.getElementById("cdDays");
    const elH = document.getElementById("cdHours");
    const elM = document.getElementById("cdMins");
    const elS = document.getElementById("cdSecs");

    function pad(n) {
      return String(Math.max(0, n)).padStart(2, "0");
    }

    function tick() {
      const diff = Math.max(0, targetMs - Date.now());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      if (elD) elD.textContent = pad(days);
      if (elH) elH.textContent = pad(hours);
      if (elM) elM.textContent = pad(mins);
      if (elS) elS.textContent = pad(secs);
    }

    tick();
    setInterval(tick, 1000);
  }

  // ---------------------------------------------------------
  // 8. ADD TO CALENDAR (.ics FILE DOWNLOAD)
  // ---------------------------------------------------------
  const CALENDAR_EVENTS = {
    mayra: {
      title: "Ayush & Ishika — Mayra",
      start: "20270125T043000Z", // 10:00 AM IST
      end: "20270125T083000Z",
      location: "Sanghvi Nohra, Ahore, Rajasthan",
      desc: "Mayra celebration (Magh Vad 3) — #Jashn-ऐ-इश्का.",
    },
    bandoli: {
      title: "Ayush & Ishika — Bandoli",
      start: "20270125T143000Z", // 8:00 PM IST
      end: "20270125T173000Z",
      location: "Ahore, Rajasthan",
      desc: "Bandoli celebration (Magh Vad 3) — #Jashn-ऐ-इश्का.",
    },
    haldi: {
      title: "Ayush & Ishika — Haldi Carnival",
      start: "20270126T063000Z", // 12:00 PM IST
      end: "20270126T100000Z",
      location: "Ahore, Rajasthan",
      desc: "Haldi Carnival (Magh Vad 5) — #Jashn-ऐ-इश्का.",
    },
    sangeet: {
      title: "Ayush & Ishika — Sangeet Sandhya",
      start: "20270126T143000Z", // 8:00 PM IST
      end: "20270126T183000Z",
      location: "Ahore, Rajasthan",
      desc: "Sangeet Sandhya (Magh Vad 5) — #Jashn-ऐ-इश्का.",
    },
    wedding: {
      title: "Ayush & Ishika — Baraat Prasthan, Hasth Milaap & Phere",
      start: "20270127T133000Z", // 7:00 PM IST
      end: "20270127T183000Z",
      location: "Moti Nivas, Dera ki Seri, Ahore, Dist. Jalore, Rajasthan",
      desc: "Baraat Prasthan tatpashchat Hasth Milaap evam Phere (Magh Vad 6, Samvat 2083).",
    },
  };

  function downloadICS(key) {
    const ev = CALENDAR_EVENTS[key] || CALENDAR_EVENTS.wedding;
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//InvCraft Media//Ayush & Ishika Wedding//EN",
      "BEGIN:VEVENT",
      `DTSTART:${ev.start}`,
      `DTEND:${ev.end}`,
      `SUMMARY:${ev.title}`,
      `LOCATION:${ev.location}`,
      `DESCRIPTION:${ev.desc}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ayush-ishika-${key}.ics`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast(currentLang === "hi" ? "कैलेंडर फ़ाइल डाउनलोड हो गई" : "Calendar invite downloaded");
  }

  // ---------------------------------------------------------
  // 9. INTERACTIVE MAP, SONG PLAYER & WHATSAPP RSVP
  // ---------------------------------------------------------
  function initMapAndSongAndRsvp() {
    // Stylized Map -> Live Interactive Map
    const showMapBtn = document.getElementById("showMapBtn");
    const stylizedMap = document.getElementById("stylizedMap");
    const liveMapEmbed = document.getElementById("liveMapEmbed");
    if (showMapBtn && stylizedMap && liveMapEmbed) {
      showMapBtn.addEventListener("click", () => {
        const iframe = liveMapEmbed.querySelector("iframe");
        if (iframe && iframe.dataset.src) {
          iframe.src = iframe.dataset.src;
        }
        stylizedMap.hidden = true;
        liveMapEmbed.hidden = false;
      });
    }

    // Our Song interactive player
    const songPlayBtn = document.getElementById("songPlayBtn");
    const songPrevBtn = document.getElementById("songPrevBtn");
    const songFill = document.getElementById("songProgressFill");
    const songScrubber = document.getElementById("songScrubber");
    let songPlaying = false;
    let songProgress = 36;
    let songInterval = null;

    function updateSongUI() {
      if (!songPlayBtn) return;
      const playIco = songPlayBtn.querySelector(".icon-play");
      const pauseIco = songPlayBtn.querySelector(".icon-pause");
      if (playIco && pauseIco) {
        playIco.hidden = songPlaying;
        pauseIco.hidden = !songPlaying;
      }
      if (songFill && songScrubber) {
        songFill.style.width = `${songProgress}%`;
        songScrubber.style.left = `${songProgress}%`;
      }
    }

    if (songPlayBtn) {
      songPlayBtn.addEventListener("click", () => {
        songPlaying = !songPlaying;
        if (songPlaying) {
          AmbientAudio.start();
          songInterval = setInterval(() => {
            songProgress = songProgress >= 100 ? 0 : songProgress + 0.5;
            updateSongUI();
          }, 250);
        } else {
          clearInterval(songInterval);
          AmbientAudio.pause();
        }
        updateSongUI();
      });
    }

    if (songPrevBtn) {
      songPrevBtn.addEventListener("click", () => {
        songProgress = 0;
        updateSongUI();
      });
    }

    // Calendar buttons
    document.querySelectorAll("[data-calendar]").forEach((btn) => {
      btn.addEventListener("click", () => downloadICS(btn.getAttribute("data-calendar")));
    });

    // RSVP Guest Counter Steppers
    const counts = { mayra: 1, bandoli: 1, haldi: 1, sangeet: 1, wedding: 1 };
    document.querySelectorAll(".stepper").forEach((stepper) => {
      const fn = stepper.getAttribute("data-fn");
      const countEl = stepper.querySelector(".stepper-count");
      stepper.querySelectorAll(".stepper-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const delta = Number(btn.getAttribute("data-delta"));
          counts[fn] = Math.max(0, Math.min(15, counts[fn] + delta));
          if (countEl) countEl.textContent = String(counts[fn]);
        });
      });
    });

    // RSVP WhatsApp Submit (Direct to Kothari Kirtikumarji: +91 9440868551)
    const rsvpForm = document.getElementById("rsvpForm");
    if (rsvpForm) {
      rsvpForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameInput = document.getElementById("guestName");
        const name = (nameInput?.value || "").trim() || (currentLang === "hi" ? "मेहमान" : "Guest");

        const msg = currentLang === "hi"
          ? `जय जिनेन्द्र / नमस्ते! चि. आयुष एवं सौ. का. इशिका के विवाह (#Jashn-ऐ-इश्का) के लिए हमारा RSVP:\nनाम: ${name}\n• मायरा (25 जनवरी): ${counts.mayra}\n• बन्दोली (25 जनवरी): ${counts.bandoli}\n• हल्दी कार्निवल (26 जनवरी): ${counts.haldi}\n• संगीत संध्या (26 जनवरी): ${counts.sangeet}\n• बारात प्रस्थान एवं फेरे (27 जनवरी): ${counts.wedding}\nअहोरे में जल्द मिलते हैं!`
          : `Jai Jinendra / Namaste! RSVP for Chi. Ayush & Sau. Ka. Ishika's wedding (#Jashn-ऐ-इश्का):\nName: ${name}\n• Mayra (Mon, 25 Jan): ${counts.mayra}\n• Bandoli (Mon, 25 Jan): ${counts.bandoli}\n• Haldi Carnival (Tue, 26 Jan): ${counts.haldi}\n• Sangeet Sandhya (Tue, 26 Jan): ${counts.sangeet}\n• Baraat & Phere (Wed, 27 Jan): ${counts.wedding}\nCan't wait to celebrate together in Ahore!`;

        const waUrl = `https://wa.me/919440868551?text=${encodeURIComponent(msg)}`;
        showToast(currentLang === "hi" ? "व्हाट्सएप खुल रहा है..." : "Opening WhatsApp with your RSVP...");
        window.open(waUrl, "_blank", "noopener,noreferrer");
      });
    }

    // Floating Language & Audio Controls
    const langBtn = document.getElementById("langToggleBtn");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        applyLanguage(currentLang === "en" ? "hi" : "en");
      });
    }

    const audioBtn = document.getElementById("audioToggleBtn");
    if (audioBtn) {
      audioBtn.addEventListener("click", () => AmbientAudio.toggle());
    }
  }

  // Toast helper
  let toastTimeout = null;
  function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-shown");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove("is-shown"), 2600);
  }

  // ---------------------------------------------------------
  // BOOTSTRAP
  // ---------------------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    if (window.KamalArtwork) {
      window.KamalArtwork.mountAllArtwork();
    }
    applyLanguage("en");
    initPondGate();
    initScratchCards();
    initScrollDecorations();
    initScrollReveal();
    initCountdown();
    initMapAndSongAndRsvp();
  });
})();
