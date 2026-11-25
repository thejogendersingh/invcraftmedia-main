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
      "gate.sub": "TO A WEDDING<br>IN UDAIPUR",
      "gate.tap": "Tap the water",
      "hero.welcome": "Welcome to the wedding of",
      "hero.city": "UDAIPUR",
      "hero.scroll": "Scroll down",
      "couple.brideFirst": "Tanya",
      "couple.groomFirst": "Vikram",
      "couple.brideFull": "Tanya Sharma",
      "couple.groomFull": "Vikram Mehra",
      "date.title": "The Date",
      "date.scratchHint": "Scratch to reveal the date",
      "date.dayVal": "14",
      "date.monthVal": "February",
      "date.yearVal": "2027",
      "date.dayLabel": "DAY",
      "date.monthLabel": "MONTH",
      "date.yearLabel": "YEAR",
      "date.summaryTime": "Sunday, at 7:00 pm",
      "date.summaryPlace": "By the lake, with dinner after the pheras",
      "common.addToCalendar": "Add to calendar",
      "formal.lead": "With the blessings of our elders,<br>you are invited to the wedding of",
      "formal.daughterOf": "DAUGHTER OF",
      "formal.brideParents": "SMT. ANJALI &amp;<br>SHRI RAJEEV SHARMA",
      "formal.with": "with",
      "formal.sonOf": "SON OF",
      "formal.groomParents": "SMT. KAVITA &amp;<br>SHRI SUNIL MEHRA",
      "formal.date": "Sunday, 14 February 2027",
      "formal.venue": "The Haveli, Lake Pichola, Udaipur",
      "story.title": "Our story",
      "story.intro": "We met at a friend's Holi in Indore, both trying to stay out of the colour. Five years, one long year apart and many plates of poha later, we are getting married.",
      "story.m1Title": "Holi 2021",
      "story.m1Desc": "Two people hiding from the colour, together",
      "story.m2Title": "2023",
      "story.m2Desc": "Indore and Bengaluru, one long call a night",
      "story.m3Title": "Diwali 2025",
      "story.m3Desc": "Both families said yes over one plate of mithai",
      "gallery.title": "Us, so far",
      "gallery.c1": "Our first portrait together",
      "gallery.c2": "In the garden at home",
      "gallery.c3": "The look he gives her",
      "gallery.c4": "Under the bougainvillea",
      "gallery.c5": "For Dadi's album",
      "gallery.c6": "By the fountain",
      "gallery.swipe": "Swipe to see more",
      "events.title": "The celebrations",
      "events.mehendiDay": "FRI, 12 FEB",
      "events.mehendiTime": "5:00 pm",
      "events.mehendiName": "Mehendi",
      "events.mehendiPlace": "The garden terrace",
      "events.sangeetDay": "SAT, 13 FEB",
      "events.sangeetTime": "7:30 pm",
      "events.sangeetName": "Sangeet",
      "events.sangeetPlace": "The darbar hall",
      "events.weddingDay": "SUN, 14 FEB",
      "events.weddingTime": "7:00 pm",
      "events.weddingName": "Wedding",
      "events.weddingPlace": "By the lake, with dinner after the pheras",
      "countdown.title": "The celebration begins",
      "countdown.days": "Days",
      "countdown.hours": "Hours",
      "countdown.minutes": "Minutes",
      "countdown.seconds": "Seconds",
      "countdown.sub": "until the Mehendi, on Friday, 12 February",
      "location.title": "Location",
      "location.city": "UDAIPUR",
      "location.venue": "The Haveli, Lake Pichola",
      "location.address": "Gangaur Ghat Road,<br>Udaipur, Rajasthan",
      "location.showMap": "Show the map",
      "location.openMaps": "OPEN IN GOOGLE MAPS",
      "travel.title": "Getting there",
      "travel.airport": "Udaipur airport (UDR) is 40 minutes away. We'll meet every flight on the 12th.",
      "travel.train": "Udaipur City railway station is 20 minutes away.",
      "travel.stayKicker": "WHERE TO STAY",
      "travel.stayPlace": "The Haveli, family wing",
      "travel.stayCopy": "Rooms are held for family from the 12th to the 15th.",
      "dress.title": "Dress code",
      "dress.sub": "A colour for each function, if you'd like a hint.",
      "dress.mehendiDesc": "Greens and soft pinks",
      "dress.sangeetDesc": "Jewel tones and sparkle",
      "dress.weddingDesc": "Traditional Indian, in any colour you love",
      "families.title": "Our families",
      "families.b1": "WITH THE BLESSINGS OF",
      "families.n1a": "Late Smt. Kamla Devi &amp; Shri Ram Prasad Sharma",
      "families.n1b": "Smt. Shanti &amp; Shri Om Prakash Mehra",
      "families.b2": "EAGER TO SEE YOU",
      "families.n2a": "The Sharma family, Indore",
      "families.n2b": "The Mehra family, Lucknow",
      "families.b3": "WAITING TO WELCOME YOU",
      "families.n3": "Rahul, Neha, Karan and Pooja",
      "families.b4": "DON'T YOU DARE MISS IT",
      "families.n4": "Aarav and Myra say: you must come to the wedding!",
      "song.title": "Our song",
      "song.caption": "Plays on Spotify",
      "rsvp.title": "Will you join us?",
      "rsvp.sub": "Please let us know how many of you are coming to each function, by 20 January.",
      "rsvp.nameLabel": "YOUR NAME",
      "rsvp.namePlaceholder": "e.g. Shreya Sharma",
      "rsvp.mehendiDate": "Fri, 12 Feb",
      "rsvp.sangeetDate": "Sat, 13 Feb",
      "rsvp.weddingDate": "Sun, 14 Feb",
      "rsvp.sendBtn": "SEND ON WHATSAPP",
      "rsvp.helper": "This opens WhatsApp with your reply written out. Nothing is sent until you press send.",
      "footer.love": "With love, the Sharma<br>and Mehra families",
      "footer.couple": "Tanya &amp; Vikram",
    },
    hi: {
      "gate.invited": "सादर आमंत्रण",
      "gate.sub": "उदयपुर में<br>शुभ विवाह समारोह",
      "gate.tap": "जल को स्पर्श करें",
      "hero.welcome": "शुभ विवाह में आपका स्वागत है",
      "hero.city": "उदयपुर",
      "hero.scroll": "नीचे स्क्रॉल करें",
      "couple.brideFirst": "तान्या",
      "couple.groomFirst": "विक्रम",
      "couple.brideFull": "तान्या शर्मा",
      "couple.groomFull": "विक्रम मेहरा",
      "date.title": "शुभ तिथि",
      "date.scratchHint": "तिथि देखने के लिए स्क्रैच करें",
      "date.dayVal": "१४",
      "date.monthVal": "फ़रवरी",
      "date.yearVal": "२०२७",
      "date.dayLabel": "दिन",
      "date.monthLabel": "माह",
      "date.yearLabel": "वर्ष",
      "date.summaryTime": "रविवार, शाम ७:०० बजे",
      "date.summaryPlace": "झील के किनारे, फेरों के बाद रात्रिभोज",
      "common.addToCalendar": "कैलेंडर में जोड़ें",
      "formal.lead": "बड़ों के आशीर्वाद से,<br>आप सादर आमंत्रित हैं शुभ विवाह में",
      "formal.daughterOf": "सुपुत्री",
      "formal.brideParents": "श्रीमती अंजलि एवं<br>श्री राजीव शर्मा",
      "formal.with": "संग",
      "formal.sonOf": "सुपुत्र",
      "formal.groomParents": "श्रीमती कविता एवं<br>श्री सुनील मेहरा",
      "formal.date": "रविवार, १४ फ़रवरी २०२७",
      "formal.venue": "द हवेली, पिछोला झील, उदयपुर",
      "story.title": "हमारी कहानी",
      "story.intro": "हम इंदौर में एक दोस्त की होली पर मिले थे, दोनों रंगों से बचते हुए। पाँच साल, एक लंबा साल दूर रहकर और ढेर सारी पोहा प्लेटों के बाद, अब हम शादी कर रहे हैं।",
      "story.m1Title": "होली २०२१",
      "story.m1Desc": "रंगों से छुपते हुए, पहली मुलाक़ात",
      "story.m2Title": "२०२३",
      "story.m2Desc": "इंदौर और बेंगलुरु, हर रात एक लंबी कॉल",
      "story.m3Title": "दीवाली २०२५",
      "story.m3Desc": "दोनों परिवारों ने मिठाई के साथ हाँ कहा",
      "gallery.title": "अब तक का सफ़र",
      "gallery.c1": "हमारी पहली साथ तस्वीर",
      "gallery.c2": "घर के बगीचे में",
      "gallery.c3": "उनकी वो प्यारी नज़र",
      "gallery.c4": "बोगनवेलिया के नीचे",
      "gallery.c5": "दादी के एल्बम के लिए",
      "gallery.c6": "फव्वारे के पास",
      "gallery.swipe": "और देखने के लिए स्वाइप करें",
      "events.title": "मांगलिक कार्यक्रम",
      "events.mehendiDay": "शुक्रवार, १२ फ़रवरी",
      "events.mehendiTime": "शाम ५:०० बजे",
      "events.mehendiName": "मेहंदी",
      "events.mehendiPlace": "द गार्डन टेरेस",
      "events.sangeetDay": "शनिवार, १३ फ़रवरी",
      "events.sangeetTime": "शाम ७:३० बजे",
      "events.sangeetName": "संगीत",
      "events.sangeetPlace": "द दरबार हॉल",
      "events.weddingDay": "रविवार, १४ फ़रवरी",
      "events.weddingTime": "शाम ७:०० बजे",
      "events.weddingName": "विवाह",
      "events.weddingPlace": "झील के किनारे, फेरों के बाद रात्रिभोज",
      "countdown.title": "उत्सव का शुभारंभ",
      "countdown.days": "दिन",
      "countdown.hours": "घंटे",
      "countdown.minutes": "मिनट",
      "countdown.seconds": "सेकंड",
      "countdown.sub": "मेहंदी समारोह तक — शुक्रवार, १२ फ़रवरी",
      "location.title": "विवाह स्थल",
      "location.city": "उदयपुर",
      "location.venue": "द हवेली, पिछोला झील",
      "location.address": "गणगौर घाट रोड,<br>उदयपुर, राजस्थान",
      "location.showMap": "मानचित्र देखें",
      "location.openMaps": "गूगल मैप्स में खोलें",
      "travel.title": "कैसे पहुँचें",
      "travel.airport": "उदयपुर हवाई अड्डा (UDR) ४० मिनट की दूरी पर है। १२ तारीख को हर फ्लाइट पर स्वागत टीम मौजूद रहेगी।",
      "travel.train": "उदयपुर सिटी रेलवे स्टेशन २० मिनट की दूरी पर है।",
      "travel.stayKicker": "ठहरने की व्यवस्था",
      "travel.stayPlace": "द हवेली, फ़ैमिली विंग",
      "travel.stayCopy": "१२ से १५ फ़रवरी तक परिवार के लिए कमरे आरक्षित हैं।",
      "dress.title": "परिधान संकेत",
      "dress.sub": "प्रत्येक समारोह के लिए रंगों का सुझाव।",
      "dress.mehendiDesc": "हरा और हल्का गुलाबी",
      "dress.sangeetDesc": "ज्वेल टोन्स और चमकदार परिधान",
      "dress.weddingDesc": "पारंपरिक भारतीय परिधान, आपकी पसंद के रंग में",
      "families.title": "हमारे परिवार",
      "families.b1": "आशीर्वाद सहित",
      "families.n1a": "स्व. श्रीमती कमला देवी एवं श्री राम प्रसाद शर्मा",
      "families.n1b": "श्रीमती शांति एवं श्री ओम प्रकाश मेहरा",
      "families.b2": "दर्शनाभिलाषी",
      "families.n2a": "शर्मा परिवार, इंदौर",
      "families.n2b": "मेहरा परिवार, लखनऊ",
      "families.b3": "स्वागताकांक्षी",
      "families.n3": "राहुल, नेहा, करण और पूजा",
      "families.b4": "मेरे मामा-बुआ की शादी में जलूल-जलूल आना",
      "families.n4": "आरव और मायरा कहते हैं: शादी में ज़रूर आना!",
      "song.title": "हमारा गीत",
      "song.caption": "Spotify पर सुनें",
      "rsvp.title": "क्या आप पधारेंगे?",
      "rsvp.sub": "कृपया २० जनवरी तक बताएं कि प्रत्येक समारोह में कितने सदस्य पधार रहे हैं।",
      "rsvp.nameLabel": "आपका नाम",
      "rsvp.namePlaceholder": "जैसे: श्रेया शर्मा",
      "rsvp.mehendiDate": "शुक्रवार, १२ फ़रवरी",
      "rsvp.sangeetDate": "शनिवार, १३ फ़रवरी",
      "rsvp.weddingDate": "रविवार, १४ फ़रवरी",
      "rsvp.sendBtn": "व्हाट्सएप पर भेजें",
      "rsvp.helper": "यह आपके संदेश के साथ व्हाट्सएप खोलेगा। जब तक आप सेंड न दबाएं, कुछ नहीं भेजा जाएगा।",
      "footer.love": "सप्रेम, शर्मा एवं<br>मेहरा परिवार",
      "footer.couple": "तान्या एवं विक्रम",
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
      if (usingCustomFile && customAudio) {
        playing = true;
        customAudio.play().catch(() => startSynth());
        updateAudioUI();
        return;
      }
      // Check once if user placed `assets/wedding-song.mp3`
      if (!customAudio) {
        const audio = new Audio("assets/wedding-song.mp3");
        audio.loop = true;
        audio.volume = 0.55;
        audio.addEventListener("canplaythrough", () => {
          usingCustomFile = true;
        }, { once: true });
        audio.addEventListener("error", () => {
          usingCustomFile = false;
        }, { once: true });
        customAudio = audio;
      }
      startSynth();
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
  // 7. LIVE COUNTDOWN (Target: 12 Feb 2027, 5:00 PM IST)
  // ---------------------------------------------------------
  function initCountdown() {
    const targetMs = new Date("2027-02-12T17:00:00+05:30").getTime();
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
    mehendi: {
      title: "Tanya & Vikram — Mehendi",
      start: "20270212T113000Z", // 5:00 PM IST
      end: "20270212T153000Z",
      location: "The Garden Terrace, The Haveli, Lake Pichola, Udaipur",
      desc: "Mehendi celebration — Greens and soft pinks.",
    },
    sangeet: {
      title: "Tanya & Vikram — Sangeet",
      start: "20270213T140000Z", // 7:30 PM IST
      end: "20270213T183000Z",
      location: "The Darbar Hall, The Haveli, Lake Pichola, Udaipur",
      desc: "Sangeet night — Jewel tones and sparkle.",
    },
    wedding: {
      title: "Tanya & Vikram — Wedding",
      start: "20270214T133000Z", // 7:00 PM IST
      end: "20270214T183000Z",
      location: "The Haveli, Lake Pichola, Udaipur, Rajasthan",
      desc: "Wedding ceremony by the lake, with dinner after the pheras.",
    },
  };

  function downloadICS(key) {
    const ev = CALENDAR_EVENTS[key] || CALENDAR_EVENTS.wedding;
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Kamal Wedding Invite//EN",
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
    a.download = `tanya-vikram-${key}.ics`;
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
    const counts = { mehendi: 1, sangeet: 1, wedding: 1 };
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

    // RSVP WhatsApp Submit
    const rsvpForm = document.getElementById("rsvpForm");
    if (rsvpForm) {
      rsvpForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameInput = document.getElementById("guestName");
        const name = (nameInput?.value || "").trim() || (currentLang === "hi" ? "मेहमान" : "Guest");

        const msg = currentLang === "hi"
          ? `नमस्ते! तान्या एवं विक्रम के विवाह के लिए हमारा RSVP:\nनाम: ${name}\n• मेहंदी (12 फ़रवरी): ${counts.mehendi}\n• संगीत (13 फ़रवरी): ${counts.sangeet}\n• विवाह (14 फ़रवरी): ${counts.wedding}\nजल्द मिलते हैं!`
          : `Hi! RSVP for Tanya & Vikram's wedding:\nName: ${name}\n• Mehendi (Fri, 12 Feb): ${counts.mehendi}\n• Sangeet (Sat, 13 Feb): ${counts.sangeet}\n• Wedding (Sun, 14 Feb): ${counts.wedding}\nCan't wait to celebrate together!`;

        const waUrl = `https://wa.me/?text=${encodeURIComponent(msg)}`;
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
