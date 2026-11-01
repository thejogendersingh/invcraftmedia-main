// Modern Indian Luxury Wedding - Ultra Slow & Smooth Motion Engine

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 1. ENVELOPE OPENING & ENTRY ANIMATION
  const doorOverlay = document.getElementById('door-overlay');
  const doorSealBtn = document.getElementById('door-seal-btn');

  function openRoyalDoor() {
    if (!doorOverlay || doorOverlay.classList.contains('is-opened')) return;
    
    // Trigger opening transition
    doorOverlay.classList.add('is-opened');

    // Trigger hero content micro-motion reveal
    document.body.classList.add('is-revealed');

    // Ensure background video plays
    const heroVideo = document.querySelector('.hero-bg-video');
    if (heroVideo) {
      heroVideo.muted = true;
      heroVideo.play().catch(err => console.log('Video play error:', err));
    }

    // Hide door overlay after smooth 2.0s transition completes
    setTimeout(() => {
      doorOverlay.style.display = 'none';
    }, 2000);

    // Start Indian Classical Ambient Raga Music
    startIndianRagaMusic();
  }

  // Pre-trigger video autoplay on load
  const heroVideoInitial = document.querySelector('.hero-bg-video');
  if (heroVideoInitial) {
    heroVideoInitial.muted = true;
    heroVideoInitial.play().catch(() => {});
  }

  if (doorOverlay) doorOverlay.addEventListener('click', openRoyalDoor);
  if (doorSealBtn) doorSealBtn.addEventListener('click', openRoyalDoor);

  // 2. LIVE COUNTDOWN TIMER (Starts on Reception: 10-Nov-2026 19:00 IST)
  const destination = new Date('2026-11-10T19:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = destination - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
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

  // 3. ROMANTIC METALLIC GOLD SCRATCH CARD COVER
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
      drawReferenceMatchCover();
    }

    function drawReferenceMatchCover() {
      if (isRevealed) return;
      const w = scratchCanvas.width;
      const h = scratchCanvas.height;

      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, w, h);

      // Iridescent Rose-Gold Metallic Foil Gradient
      const cardGrad = ctx.createLinearGradient(0, 0, w, h);
      cardGrad.addColorStop(0, '#F5D6C6');
      cardGrad.addColorStop(0.22, '#FFF0E5');
      cardGrad.addColorStop(0.48, '#E2B39E');
      cardGrad.addColorStop(0.74, '#FFF9F6');
      cardGrad.addColorStop(1, '#C59F89');

      ctx.fillStyle = cardGrad;
      ctx.fillRect(0, 0, w, h);

      // Soft white inner border for card dimensioning
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(10, 10, w - 20, h - 20);

      // Contemporary spaced-out uppercase sans-serif text
      ctx.fillStyle = '#2A2022';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      const fontSize = Math.min(Math.max(w / 26, 11), 13);
      ctx.font = `500 ${fontSize}px "Plus Jakarta Sans", sans-serif`;
      ctx.shadowColor = 'rgba(255, 255, 255, 0.85)';
      ctx.shadowBlur = 3;
      ctx.fillText('✦   U N V E I L   T H E   C O U N T D O W N   ✦', w / 2, h / 2);
      ctx.shadowColor = 'transparent';
    }

    function getScratchPos(e) {
      const rect = scratchCanvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    }

    function scratch(e) {
      if (!isScratching || isRevealed) return;
      e.preventDefault();

      const pos = getScratchPos(e);
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 44, 0, Math.PI * 2);
      ctx.fill();

      checkScratchProgress();
    }

    let scratchCheckThrottle = 0;
    function checkScratchProgress() {
      scratchCheckThrottle++;
      if (scratchCheckThrottle % 8 !== 0 || isRevealed) return;

      const w = scratchCanvas.width;
      const h = scratchCanvas.height;
      const imageData = ctx.getImageData(0, 0, w, h);
      const pixels = imageData.data;
      let clearPixels = 0;

      for (let i = 3; i < pixels.length; i += 64) {
        if (pixels[i] === 0) {
          clearPixels++;
        }
      }

      const totalSampled = pixels.length / 64;
      const percentage = (clearPixels / totalSampled) * 100;

      if (percentage > 30) {
        revealFullCountdown();
      }
    }

    function triggerPartyPopperExplosion() {
      if (!window.confetti) return;

      confetti({
        particleCount: 85,
        angle: 60,
        spread: 75,
        origin: { x: 0.05, y: 0.75 },
        colors: ['#C5A059', '#F3D0D5', '#E8A598', '#8A3E4E', '#FFF5F6'],
      });

      confetti({
        particleCount: 85,
        angle: 120,
        spread: 75,
        origin: { x: 0.95, y: 0.75 },
        colors: ['#C5A059', '#F3D0D5', '#E8A598', '#8A3E4E', '#FFF5F6'],
      });

      setTimeout(() => {
        confetti({
          particleCount: 140,
          spread: 115,
          origin: { x: 0.5, y: 0.6 },
          colors: ['#C5A059', '#F2B705', '#E8A598', '#D4AF37', '#FFFFFF'],
          scalar: 1.3,
        });
      }, 120);
    }

    function revealFullCountdown() {
      if (isRevealed) return;
      isRevealed = true;

      scratchCanvas.style.opacity = '0';
      triggerPartyPopperExplosion();

      setTimeout(() => {
        scratchCanvas.style.pointerEvents = 'none';
      }, 700);
    }

    window.addEventListener('resize', resizeScratchCanvas);
    setTimeout(resizeScratchCanvas, 100);
    if (document.fonts) {
      document.fonts.ready.then(resizeScratchCanvas);
    }

    scratchCanvas.addEventListener('mousedown', (e) => { isScratching = true; scratch(e); });
    scratchCanvas.addEventListener('mousemove', scratch);
    window.addEventListener('mouseup', () => { isScratching = false; });

    scratchCanvas.addEventListener('touchstart', (e) => { isScratching = true; scratch(e); }, { passive: false });
    scratchCanvas.addEventListener('touchmove', scratch, { passive: false });
    window.addEventListener('touchend', () => { isScratching = false; });
  }

  // 4. 60FPS PETALS CANVAS SIMULATION
  const canvas = document.getElementById('petals-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const petals = [];
    const count = Math.min(Math.floor(width / 22), 65);
    const colors = ['#D8B4A6', '#C5A059', '#E8D4C8', '#D4A396', '#FFFDF9', '#F4EAD4', '#8C263E'];

    for (let i = 0; i < count; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 9 + 5,
        speedY: Math.random() * 0.9 + 0.4,
        speedX: Math.random() * 0.6 - 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.35 + 0.2,
      });
    }

    let wind = 0;
    function renderPetals() {
      ctx.clearRect(0, 0, width, height);
      wind += 0.005;

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(wind + p.y * 0.002) * 0.4;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) { p.y = -20; p.x = Math.random() * width; }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-p.size / 2, -p.size, -p.size, p.size / 3, 0, p.size);
        ctx.bezierCurveTo(p.size, p.size / 3, p.size / 2, -p.size, 0, 0);
        ctx.fill();
        ctx.restore();
      });

      requestAnimationFrame(renderPetals);
    }
    renderPetals();
  }

  // 5. WEDDING MUSIC ENGINE
  let bgAudio = null;
  let audioCtx = null;
  let isPlaying = false;
  const ragaNotes = [220.00, 246.94, 277.18, 311.13, 329.63, 369.99, 415.30, 440.00, 493.88, 554.37];

  function startIndianRagaMusic() {
    if (isPlaying) return;

    try {
      if (!bgAudio) {
        bgAudio = new Audio();
        bgAudio.loop = true;
        bgAudio.volume = 1.0;
        bgAudio.src = 'assets/wedding_tune.mp3';
        
        bgAudio.onerror = () => {
          startWebAudioFallback();
        };
      }

      bgAudio.play().then(() => {
        isPlaying = true;
        updateAudioButtonUI(true);
      }).catch(() => {
        startWebAudioFallback();
      });
    } catch (e) {
      startWebAudioFallback();
    }
  }

  function startWebAudioFallback() {
    try {
      if (audioCtx) return;
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();

      const masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      masterGain.connect(audioCtx.destination);

      const tanpuraFreqs = [110.00, 164.81, 220.00];
      tanpuraFreqs.forEach(freq => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.03, audioCtx.currentTime);

        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(400, audioCtx.currentTime);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(masterGain);
        osc.start();
      });

      let noteIdx = 0;
      function playNextNote() {
        if (!audioCtx) return;
        const osc = audioCtx.createOscillator();
        const noteGain = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();

        const isFlute = Math.random() > 0.4;
        osc.type = isFlute ? 'sine' : 'triangle';
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(isFlute ? 1200 : 800, audioCtx.currentTime);

        const freq = ragaNotes[noteIdx % ragaNotes.length];
        noteIdx = (noteIdx + 1 + Math.floor(Math.random() * 3)) % ragaNotes.length;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        const duration = isFlute ? 2.5 : 1.5;
        noteGain.gain.setValueAtTime(0, audioCtx.currentTime);
        noteGain.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 0.3);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

        osc.connect(filter);
        filter.connect(noteGain);
        noteGain.connect(masterGain);

        osc.start();
        osc.stop(audioCtx.currentTime + duration + 0.1);

        setTimeout(playNextNote, isFlute ? 1200 : 800);
      }

      playNextNote();
      isPlaying = true;
      updateAudioButtonUI(true);
    } catch (e) {
      console.log('Audio init error:', e);
    }
  }

  function updateAudioButtonUI(playing) {
    const btn = document.getElementById('audio-toggle-btn');
    if (btn) {
      btn.innerHTML = playing
        ? '<i data-lucide="volume-2" style="width:14px;height:14px;color:#C5A059;flex-shrink:0;"></i><span id="audio-label" style="font-size:9px;font-weight:700;letter-spacing:0.18em;color:#C5A059;text-transform:uppercase;white-space:nowrap;">MUSIC</span>'
        : '<i data-lucide="volume-x" style="width:14px;height:14px;color:rgba(255,255,255,0.35);flex-shrink:0;"></i><span id="audio-label" style="font-size:9px;font-weight:700;letter-spacing:0.18em;color:rgba(255,255,255,0.35);text-transform:uppercase;white-space:nowrap;">MUTED</span>';
      if (window.lucide) lucide.createIcons();
    }
  }

  function stopAllAudio() {
    if (bgAudio) {
      bgAudio.pause();
      bgAudio.currentTime = 0;
    }
    if (audioCtx) {
      audioCtx.close();
      audioCtx = null;
    }
    isPlaying = false;
    updateAudioButtonUI(false);
  }

  const audioToggleBtn = document.getElementById('audio-toggle-btn');
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      if (isPlaying) {
        stopAllAudio();
      } else {
        startIndianRagaMusic();
      }
    });
  }

  // 6. SCROLL REVEAL MOTION ANIMATION
  const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.scroll-reveal').forEach((el) => {
    scrollObserver.observe(el);
  });

  // 7. MULTI-LANGUAGE TRANSLATION ENGINE (ENG, KAN, HIN, TAM, TEL)
  const translations = {
    eng: {
      mantra1: "|| Shree Male Mahadeshwara Krupe || • || Shree Umathooru Urkateshwari Krupe ||",
      mantra2: "🙏 ॥ ಶ್ರೀ ಮಲೆ ಮಹದೇಶ್ವರ ಕೃಪೆ ॥ • ॥ ಶ್ರೀ ಉಮ್ಮತ್ತೂರು ಊರುಕಾಟೇಶ್ವರಿ ಕೃಪೆ ॥ 🙏",
      subtitle: "The Wedding Celebration of",
      subtitleKan: "💐 ಶುಭ ವಿವಾಹ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ 💐",
      groom: "Manohar M",
      bride: "Harshitha MK",
      weds: "weds",
      coupleKan: "ಚಿ.ರಾ. ಮನೋಹರ್ ಎಂ. & ಚಿ. ಸೌ. ಹರ್ಷಿತಾ ಎಂ.ಕೆ.",
      tagline: "❤️ Two hearts, one soul, one beautiful journey forever. ❤️",
      taglineKan: "❤️ ಎರಡು ಹೃದಯಗಳು, ಒಂದೇ ಆತ್ಮ, ಪ್ರೀತಿ ಮತ್ತು ಅನುರಾಗದಿಂದ ಕೂಡಿದ ಎಂದೆಂದಿಗೂ ಸುಂದರವಾದ ಪಯಣ. ❤️",
      countdownBadge: "THE CELEBRATION BEGINS • ಶುಭಾರಂಭ",
      countdownLoc: "Mysuru • Channapatna • Karnataka",
      days: "DAYS",
      hours: "HOURS",
      mins: "MINUTES",
      secs: "SECONDS",
      eventsBadge: "THE ITINERARY • ವಿವಾಹ ಮಹೋತ್ಸವದ ಕಾರ್ಯಕ್ರಮಗಳು",
      eventsTitle: "Sacred Ceremonies",
      hostsTitle: "With Blessings",
      hostsSub: "WITH THE BLESSINGS OF OUR ELDERS • ಹಿರಿಯರ ಆಶೀರ್ವಾದ",
      venueTitle: "Where We Celebrate",
      footerText: "WITH LOVE & BLESSINGS • ಪ್ರೀತಿ ಮತ್ತು ಆಶೀರ್ವಾದಗಳೊಂದಿಗೆ"
    },
    kan: {
      mantra1: "|| ಶ್ರೀ ಮಲೆ ಮಹದೇಶ್ವರ ಕೃಪೆ || • || ಶ್ರೀ ಉಮ್ಮತ್ತೂರು ಊರುಕಾಟೇಶ್ವರಿ ಕೃಪೆ ||",
      mantra2: "🙏 ॥ ಶ್ರೀ ಮಲೆ ಮಹದೇಶ್ವರ ಕೃಪೆ ॥ • ॥ ಶ್ರೀ ಉಮ್ಮತ್ತೂರು ಊರುಕಾಟೇಶ್ವರಿ ಕೃಪೆ ॥ 🙏",
      subtitle: "ಶುಭ ವಿವಾಹ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ",
      subtitleKan: "ಹಿರಿಯರ ಆಶೀರ್ವಾದ ಹಾಗೂ ದೇವರ ಕೃಪೆಯೊಂದಿಗೆ",
      groom: "ಮನೋಹರ್ ಎಂ.",
      bride: "ಹರ್ಷಿತಾ ಎಂ.ಕೆ.",
      weds: "ಮತ್ತು",
      coupleKan: "ಚಿ.ರಾ. ಮನೋಹರ್ ಎಂ. & ಚಿ. ಸೌ. ಹರ್ಷಿತಾ ಎಂ.ಕೆ.",
      tagline: "❤️ ಎರಡು ಹೃದಯಗಳು, ಒಂದೇ ಆತ್ಮ, ಎಂದೆಂದಿಗೂ ಸುಂದರವಾದ ಪಯಣ. ❤️",
      taglineKan: "ಪ್ರೀತಿ ಮತ್ತು ಅನುರಾಗದಿಂದ ಕೂಡಿದ ಸುಂದರವಾದ ಪಯಣ.",
      countdownBadge: "ಶುಭಾರಂಭ",
      countdownLoc: "ಮೈಸೂರು • ಚನ್ನಪಟ್ಟಣ • ಕರ್ನಾಟಕ",
      days: "ದಿನಗಳು",
      hours: "ಗಂಟೆಗಳು",
      mins: "ನಿಮಿಷಗಳು",
      secs: "ಸೆಕೆಂಡುಗಳು",
      eventsBadge: "ವಿವಾಹ ಮಹೋತ್ಸವದ ಕಾರ್ಯಕ್ರಮಗಳು",
      eventsTitle: "ಶುಭ ಕಾರ್ಯಕ್ರಮಗಳು",
      hostsTitle: "ಶುಭ ಆಶೀರ್ವಾದ",
      hostsSub: "ಹಿರಿಯರ ಆಶೀರ್ವಾದದೊಂದಿಗೆ",
      venueTitle: "ಸಮಾರಂಭದ ಸ್ಥಳಗಳು",
      footerText: "ಪ್ರೀತಿ ಮತ್ತು ಆಶೀರ್ವಾದಗಳೊಂದಿಗೆ"
    },
    hin: {
      mantra1: "|| श्री मले महादेश्वर कृपे || • || श्री उम्मत्तूरु ऊरुकाटेश्वरी कृपे ||",
      mantra2: "🙏 ॥ श्री मले महादेश्वर कृपे ॥ • ॥ श्री उम्मत्तूरु ऊरुकाटेश्वरी कृपे ॥ 🙏",
      subtitle: "शुभ विवाह समारोह",
      subtitleKan: "💐 ಶುಭ ವಿವಾಹ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ 💐",
      groom: "मनोहर एम.",
      bride: "हर्षिता एम.के.",
      weds: "संग",
      coupleKan: "ಚಿ.ರಾ. ಮನೋಹರ್ ಎಂ. & ಚಿ. ಸೌ. ಹರ್ಷಿತಾ ಎಂ.ಕೆ.",
      tagline: "❤️ Two hearts, one soul, one beautiful journey forever. ❤️",
      taglineKan: "❤️ दो दिल, एक आत्मा, सदैव का पावन संगम ❤️",
      countdownBadge: "शुभ आरंभ",
      countdownLoc: "मैसूर • चन्नापटना • कर्नाटक",
      days: "दिन",
      hours: "घंटे",
      mins: "मिनट",
      secs: "सेकंड",
      eventsBadge: "वैवाहिक कार्यक्रम",
      eventsTitle: "पावन अनुष्ठान",
      hostsTitle: "शुभ आशीर्वाद",
      hostsSub: "पूज्य बुजुर्गों के आशीर्वाद से",
      venueTitle: "उत्सव स्थल",
      footerText: "स्नेह एवं आदर सहित"
    },
    tam: {
      mantra1: "|| ஸ்ரீ மலே மகாதேஸ்வரா கிருபை ||",
      mantra2: "🙏 ॥ ஸ்ரீ மலே மகாதேஸ்வரா கிருபை ॥ 🙏",
      subtitle: "திருமண அழைப்பிதழ்",
      subtitleKan: "💐 ಶುಭ ವಿವಾಹ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ 💐",
      groom: "மனோகர் எம்.",
      bride: "ஹர்ஷிதா எம்.கே.",
      weds: "மணக்கிறார்",
      coupleKan: "மனோகர் & ஹர்ஷிதா",
      tagline: "❤️ Two hearts, one soul, one beautiful journey forever. ❤️",
      taglineKan: "❤️ இரு இதயம், ஒரு ஆன்மா, இனிய பயணம் ❤️",
      countdownBadge: "திருமண நாள்",
      countdownLoc: "மைசூர் • சன்னபட்னா",
      days: "நாட்கள்",
      hours: "மணி",
      mins: "நிமிடம்",
      secs: "வினாடி",
      eventsBadge: "நிகழ்ச்சிகள்",
      eventsTitle: "திருமண விழா",
      hostsTitle: "ஆசியோடு",
      hostsSub: "பெரியோர்களின் ஆசியோடு",
      venueTitle: "கொண்டாட்ட இடம்",
      footerText: "அன்பும் ஆசியும்"
    },
    tel: {
      mantra1: "|| శ్రీ మలే మహాదేశ్వర కృప ||",
      mantra2: "🙏 ॥ శ్రీ మలే మహాదేశ్వర కృప ॥ 🙏",
      subtitle: "వివాహ ఆహ్వాన పత్రిక",
      subtitleKan: "💐 ಶುಭ ವಿವಾಹ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ 💐",
      groom: "మనోహర్ ఎం.",
      bride: "హర్షిత ఎం.కె.",
      weds: "వివాహమాడుతున్నారు",
      coupleKan: "మనోహర్ & హర్షిత",
      tagline: "❤️ Two hearts, one soul, one beautiful journey forever. ❤️",
      taglineKan: "❤️ రెండు హృదయాలు, ఒకే ఆత్మ, అందమైన ప్రయాణం ❤️",
      countdownBadge: "శుభారంభం",
      countdownLoc: "మైసూర్ • చన్నపట్న",
      days: "రోజులు",
      hours: "గంటలు",
      mins: "నిమిషాలు",
      secs: "సెకన్లు",
      eventsBadge: "కార్యక్రమాలు",
      eventsTitle: "శుభ వేడుకలు",
      hostsTitle: "ఆశీర్వాదాలతో",
      hostsSub: "పెద్దల ఆశీర్వాదంతో",
      venueTitle: "వేడుక స్థలం",
      footerText: "ప్రేమతో మరియు ఆశీర్వాదంతో"
    }
  };

  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langDropdown = document.getElementById('language-dropdown');

  if (langToggleBtn && langDropdown) {
    let langOpen = false;

    function openLangDropdown() {
      langOpen = true;
      langDropdown.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4', 'scale-95');
      langDropdown.classList.add('opacity-100', 'translate-y-0', 'scale-100');
    }

    function closeLangDropdown() {
      langOpen = false;
      langDropdown.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4', 'scale-95');
      langDropdown.classList.remove('opacity-100', 'translate-y-0', 'scale-100');
    }

    langToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langOpen ? closeLangDropdown() : openLangDropdown();
    });

    document.addEventListener('click', () => {
      if (langOpen) closeLangDropdown();
    });

    const langOptions = document.querySelectorAll('.lang-opt');
    langOptions.forEach((opt) => {
      opt.addEventListener('mouseenter', () => {
        if (opt.getAttribute('data-lang') !== currentActiveLang) {
          opt.style.color = '#C5A059';
          opt.style.background = 'rgba(197,160,89,0.1)';
          opt.style.borderColor = 'rgba(197,160,89,0.2)';
        }
      });
      opt.addEventListener('mouseleave', () => {
        if (opt.getAttribute('data-lang') !== currentActiveLang) {
          opt.style.color = 'rgba(255,255,255,0.65)';
          opt.style.background = 'rgba(255,255,255,0.04)';
          opt.style.borderColor = 'rgba(255,255,255,0.08)';
        }
      });
      opt.addEventListener('click', (e) => {
        const lang = e.currentTarget.getAttribute('data-lang');
        setLanguage(lang);
        closeLangDropdown();
      });
    });
  }

  let currentActiveLang = 'eng';

  function setLanguage(lang) {
    if (!lang) return;
    currentActiveLang = lang;

    const langLabel = document.getElementById('lang-label');
    if (langLabel) {
      const labels = {
        eng: 'ENG', kan: 'ಕನ್ನಡ', hin: 'हिन', tam: 'தமி', tel: 'తెలు'
      };
      langLabel.textContent = labels[lang] || 'ENG';
    }

    const transElements = document.querySelectorAll('[data-trans]');
    transElements.forEach((el) => {
      const key = el.getAttribute('data-trans');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll('.lang-opt').forEach(btn => {
      const isActive = btn.getAttribute('data-lang') === lang;
      if (isActive) {
        btn.style.color = '#C5A059';
        btn.style.background = 'rgba(197,160,89,0.15)';
        btn.style.borderColor = 'rgba(197,160,89,0.35)';
      } else {
        btn.style.color = 'rgba(255,255,255,0.65)';
        btn.style.background = 'rgba(255,255,255,0.04)';
        btn.style.borderColor = 'rgba(255,255,255,0.08)';
      }
    });

    localStorage.setItem('selectedLanguage', lang);
  }

  const savedLang = localStorage.getItem('selectedLanguage') || 'eng';
  setLanguage(savedLang);
});

// Helper Scroll Function
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}


// Interactive Venue Switcher
const venueData = {
  wedding: {
    title: 'Sri Thimmamma Dasegowda Kalyana Mantapa, BM Road, Kengal, Channapatna',
    mapSrc: 'https://maps.google.com/maps?q=Sri+Thimmamma+Dasegowda+Kalyana+Mantapa+Kengal+Channapatna&t=&z=15&ie=UTF8&iwloc=&output=embed',
    dirHref: 'https://www.google.com/maps/dir/?api=1&destination=Sri+Thimmamma+Dasegowda+Kalyana+Mantapa+Kengal+Channapatna',
    btnText: 'Get Directions to Wedding Venue'
  },
  reception: {
    title: 'Lalitha Mahal Palace, Lalitha Mahal Nagar, Mysuru, Karnataka',
    mapSrc: 'https://maps.google.com/maps?q=Lalitha+Mahal+Palace+Mysuru&t=&z=15&ie=UTF8&iwloc=&output=embed',
    dirHref: 'https://www.google.com/maps/dir/?api=1&destination=Lalitha+Mahal+Palace+Mysuru',
    btnText: 'Get Directions to Reception Venue'
  },
  haldi: {
    title: '#427 Sudha Mahal, 17th Cross, Alanahalli Layout, Lalitha Mahal Nagara, Mysuru',
    mapSrc: 'https://maps.google.com/maps?q=Alanahalli+Layout+Lalitha+Mahal+Nagara+Mysuru&t=&z=15&ie=UTF8&iwloc=&output=embed',
    dirHref: 'https://www.google.com/maps/dir/?api=1&destination=Alanahalli+Layout+Lalitha+Mahal+Nagara+Mysuru',
    btnText: 'Get Directions to Haldi Venue'
  }
};

function switchVenue(type) {
  const data = venueData[type];
  if (!data) return;

  const iframe = document.getElementById('venue-map-iframe');
  const sub = document.getElementById('venue-title-sub');
  const dirLink = document.getElementById('venue-direction-link');
  const dirText = document.getElementById('venue-direction-text');

  if (iframe) iframe.src = data.mapSrc;
  if (sub) sub.textContent = data.title;
  if (dirLink) dirLink.href = data.dirHref;
  if (dirText) dirText.textContent = data.btnText;

  ['wedding', 'reception', 'haldi'].forEach(t => {
    const btn = document.getElementById(`tab-${t}`);
    if (btn) {
      if (t === type) {
        btn.className = 'venue-tab-btn active px-4 py-2 rounded-full font-sans text-[10px] uppercase tracking-[0.16em] font-bold transition-all duration-300 bg-royal-gold text-white shadow-sm border border-royal-gold';
      } else {
        btn.className = 'venue-tab-btn px-4 py-2 rounded-full font-sans text-[10px] uppercase tracking-[0.16em] font-bold transition-all duration-300 bg-white text-charcoal-muted border border-gray-200 hover:border-royal-gold';
      }
    }
  });
}

window.switchVenue = switchVenue;


// Lightbox Modal functions for Gallery
function openLightbox(src, caption) {
  const modal = document.getElementById('gallery-lightbox');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  if (!modal || !img) return;
  img.src = src;
  if (cap) cap.textContent = caption || '';
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeLightbox() {
  const modal = document.getElementById('gallery-lightbox');
  if (!modal) return;
  modal.classList.remove('flex');
  modal.classList.add('hidden');
}

window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

// SACRED GALLERY SINGLE LUXURY SLIDER SYSTEM
const gallerySlidesData = [
  {
    img: 'assets/photo1.jpg',
    badge: 'DIVINE BLESSING',
    title: 'Sacred Union',
    kan: 'ಪಾವನ ದೈವಿಕ ಸಾನ್ನಿಧ್ಯ'
  },
  {
    img: 'assets/photo2.jpg',
    badge: 'ROYAL MOMENT',
    title: 'Together in Harmony',
    kan: 'ಸಂತಸದ ಶುಭ ಕ್ಷಣಗಳು'
  },
  {
    img: 'assets/photo3.jpg',
    badge: 'FOREVER JOURNEY',
    title: 'Blessed Beginnings',
    kan: 'ನವ ಜೀವನದ ಶುಭಾರಂಭ'
  }
];

let currentGalleryIdx = 0;
let galleryAutoSlideInterval = null;

function renderGallerySlide(idx) {
  if (idx < 0) idx = gallerySlidesData.length - 1;
  if (idx >= gallerySlidesData.length) idx = 0;
  currentGalleryIdx = idx;

  const data = gallerySlidesData[currentGalleryIdx];
  const imgEl = document.getElementById('gallery-slide-img');
  const badgeEl = document.getElementById('gallery-slide-badge');
  const titleEl = document.getElementById('gallery-slide-title');
  const kanEl = document.getElementById('gallery-slide-kannada');
  const dots = document.querySelectorAll('.slide-dot');

  if (imgEl) {
    imgEl.style.opacity = '0.3';
    setTimeout(() => {
      imgEl.src = data.img;
      imgEl.style.opacity = '1';
    }, 200);
  }

  if (badgeEl) badgeEl.textContent = data.badge;
  if (titleEl) titleEl.textContent = data.title;
  if (kanEl) kanEl.textContent = data.kan;

  if (dots && dots.length > 0) {
    dots.forEach((dot, dIdx) => {
      if (dIdx === currentGalleryIdx) {
        dot.className = 'slide-dot w-7 h-2 rounded-full bg-royal-gold transition-all duration-300';
      } else {
        dot.className = 'slide-dot w-2 h-2 rounded-full bg-gray-300 hover:bg-royal-gold/60 transition-all duration-300';
      }
    });
  }
}

function nextGallerySlide(e) {
  if (e) e.stopPropagation();
  renderGallerySlide(currentGalleryIdx + 1);
  resetGalleryAutoSlide();
}

function prevGallerySlide(e) {
  if (e) e.stopPropagation();
  renderGallerySlide(currentGalleryIdx - 1);
  resetGalleryAutoSlide();
}

function goToSlide(idx) {
  renderGallerySlide(idx);
  resetGalleryAutoSlide();
}

function openCurrentSlideLightbox() {
  const current = gallerySlidesData[currentGalleryIdx];
  if (current) {
    openLightbox(current.img, `${current.title} • ${current.kan}`);
  }
}

function resetGalleryAutoSlide() {
  if (galleryAutoSlideInterval) clearInterval(galleryAutoSlideInterval);
  galleryAutoSlideInterval = setInterval(() => {
    renderGallerySlide(currentGalleryIdx + 1);
  }, 4500);
}

// Start auto-slide on load
if (document.getElementById('gallery-slide-img')) {
  resetGalleryAutoSlide();
}

window.nextGallerySlide = nextGallerySlide;
window.prevGallerySlide = prevGallerySlide;
window.goToSlide = goToSlide;
window.openCurrentSlideLightbox = openCurrentSlideLightbox;
