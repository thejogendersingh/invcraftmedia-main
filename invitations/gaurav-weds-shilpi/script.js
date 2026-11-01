// Modern Indian Luxury Wedding - Ultra Slow & Smooth Motion Engine

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }
  // 1. ENVELOPE OPENING & ENTRY ANIMATION
  const doorOverlay = document.getElementById('door-overlay');
  const envelopeVideo = document.getElementById('envelope-video');
  const overlayCta = document.getElementById('overlay-cta');

  let videoStarted = false;
  let fallbackTimeout = null;

  function openRoyalDoor() {
    if (!doorOverlay || doorOverlay.classList.contains('is-opened') || videoStarted) return;
    
    videoStarted = true;

    // Fade out the CTA text immediately
    if (overlayCta) {
      overlayCta.style.opacity = '0';
      overlayCta.style.transition = 'opacity 0.4s ease';
    }

    // Play the envelope opening video
    if (envelopeVideo) {
      // Force reload metadata just in case, and play
      envelopeVideo.preload = "auto";
      
      // Calculate safety fallback timer (max 4.5s or video duration + 0.2s)
      let duration = envelopeVideo.duration || 3.5;
      if (isNaN(duration) || duration <= 0) duration = 3.5;
      
      fallbackTimeout = setTimeout(() => {
        console.log('Video play safety timeout reached.');
        finishOpening();
      }, (duration * 1000) + 200);

      // Safe HTMLMediaElement.play() invocation to support older browsers/safari
      const playPromise = envelopeVideo.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Video playing successfully
        }).catch(err => {
          console.log('Video play error, falling back:', err);
          finishOpening();
        });
      }

      envelopeVideo.addEventListener('ended', finishOpening);
    } else {
      finishOpening();
    }
  }

  function finishOpening() {
    if (fallbackTimeout) {
      clearTimeout(fallbackTimeout);
      fallbackTimeout = null;
    }

    if (!doorOverlay || doorOverlay.classList.contains('is-opened')) return;

    // Trigger opening transition
    doorOverlay.classList.add('is-opened');

    // Trigger hero content micro-motion reveal
    document.body.classList.add('is-revealed');

    // Hide door overlay after smooth 2.0s transition completes
    setTimeout(() => {
      doorOverlay.style.display = 'none';
    }, 2000);

    // Start Indian Classical Ambient Raga Music
    startIndianRagaMusic();
    setTimeout(() => { if (window.resizeScratchCanvas) window.resizeScratchCanvas(); }, 400);
  }

  // Expose globally for inline HTML onclick binding
  window.openRoyalDoor = openRoyalDoor;

  if (doorOverlay) {
    doorOverlay.addEventListener('click', openRoyalDoor);
    doorOverlay.addEventListener('touchstart', (e) => {
      openRoyalDoor();
    }, { passive: true });
  }

  // 2. LIVE COUNTDOWN TIMER
  const destination = new Date('2026-11-30T19:00:00').getTime();

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

  // 3. ROMANTIC METALLIC GOLD SCRATCH CARD COVER (EXACT REFERENCE MATCH)
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

      // Iridescent Rose-Gold Diagonal Metallic Foil Gradient (Dynamic Tactile Feel)
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
      ctx.fillText('✦   S C R A T C H   T O   R E V E A L   ✦', w / 2, h / 2);
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

      // Sample every 16th pixel for performance
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

      // Left Party Popper Cannon
      confetti({
        particleCount: 85,
        angle: 60,
        spread: 75,
        origin: { x: 0.05, y: 0.75 },
        colors: ['#C5A059', '#F3D0D5', '#E8A598', '#8A3E4E', '#FFF5F6'],
      });

      // Right Party Popper Cannon
      confetti({
        particleCount: 85,
        angle: 120,
        spread: 75,
        origin: { x: 0.95, y: 0.75 },
        colors: ['#C5A059', '#F3D0D5', '#E8A598', '#8A3E4E', '#FFF5F6'],
      });

      // Center Big Party Popper Burst
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

      // Fade out scratch overlay smoothly
      scratchCanvas.style.opacity = '0';

      // PARTY POPPER FLOWER EXPLOSION!
      triggerPartyPopperExplosion();

      setTimeout(() => {
        scratchCanvas.style.pointerEvents = 'none';
      }, 700);
    }

    // Event Listeners for Touch & Mouse
    window.resizeScratchCanvas = resizeScratchCanvas;
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

  // 4. 60FPS PETALS CANVAS SIMULATION (FLOWER IMAGES)
  const canvas = document.getElementById('petals-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const img1 = new Image();
    img1.src = 'assets/flower1.webp';
    const img2 = new Image();
    img2.src = 'assets/flower2.webp';
    const img3 = new Image();
    img3.src = 'assets/flower3.webp';
    const flowerImages = [img1, img2, img3];

    const petals = [];
    const count = Math.min(Math.floor(width / 24), 50); // Clean quantity for elegant flow

    for (let i = 0; i < count; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 10 + 16, // Beautiful visible size (16px to 26px)
        speedY: Math.random() * 0.9 + 0.4, // Gentle speed matching original hearts
        speedX: Math.random() * 0.6 - 0.3, // Gentle drift matching original hearts
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03,
        image: flowerImages[Math.floor(Math.random() * flowerImages.length)],
        opacity: Math.random() * 0.3 + 0.5, // High premium opacity for visibility
      });
    }

    let wind = 0;
    function renderPetals() {
      ctx.clearRect(0, 0, width, height);
      wind += 0.005;

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(wind + p.y * 0.002) * 0.3;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) { p.y = -20; p.x = Math.random() * width; }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;

        // Draw flower image centered at coordinate
        ctx.drawImage(p.image, -p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      requestAnimationFrame(renderPetals);
    }
    renderPetals();
  }

  // 5. OFFICIAL SURILI AKHIYON WALE INSTRUMENTAL AUDIO ENGINE (100% VOLUME)
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
        bgAudio.volume = 1.0; // 100% Full Volume

        // Try primary assets/wedding_tune.mp3 for 100% Netlify & Mobile compatibility
        bgAudio.src = 'assets/wedding_tune.mp3';
        
        bgAudio.onerror = () => {
          if (bgAudio) {
            bgAudio.src = 'assets/wedding_tune.mp4';
            bgAudio.play().then(() => {
              isPlaying = true;
              updateAudioButtonUI(true);
            }).catch(startWebAudioFallback);
          }
        };
      }

      bgAudio.play().then(() => {
        isPlaying = true;
        updateAudioButtonUI(true);
      }).catch(() => {
        if (bgAudio) {
          bgAudio.src = 'assets/wedding_tune.mp4';
          bgAudio.play().then(() => {
            isPlaying = true;
            updateAudioButtonUI(true);
          }).catch(startWebAudioFallback);
        }
      });
    } catch (e) {
      startWebAudioFallback();
    }
  }

  function startWebAudioFallback() {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();

      const masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(1.0, audioCtx.currentTime); // 100% Full Volume
      masterGain.connect(audioCtx.destination);

      // Tanpura Drone Harmonies
      [110.00, 164.81, 220.00].forEach((freq) => {
        const osc = audioCtx.createOscillator();
        const droneGain = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, audioCtx.currentTime);

        droneGain.gain.setValueAtTime(0.12, audioCtx.currentTime);

        osc.connect(filter);
        filter.connect(droneGain);
        droneGain.connect(masterGain);
        osc.start();
      });

      // Shehnai & Flute Melody Loop
      function playNextNote() {
        if (!audioCtx) return;

        const osc = audioCtx.createOscillator();
        const noteGain = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();

        const isFlute = Math.random() > 0.45;
        osc.type = isFlute ? 'sine' : 'triangle';
        const freq = ragaNotes[Math.floor(Math.random() * ragaNotes.length)];
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(isFlute ? 1500 : 2600, audioCtx.currentTime);

        const duration = isFlute ? 2.5 : 1.4;
        noteGain.gain.setValueAtTime(0);
        noteGain.gain.linearRampToValueAtTime(0.35, audioCtx.currentTime + 0.15);
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
    const label = document.getElementById('audio-label');
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

  // 6. RSVP FORM SUBMIT WITH CONFETTI
  const rsvpForm = document.getElementById('rsvp-form');
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (window.confetti) {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C5A059', '#8A3E4E', '#F3D0D5', '#FFF5F6'],
        });
      }
      alert('Thank you! Your Royal RSVP has been received with joy.');
    });
  }

  // 8. SCROLL REVEAL MOTION ANIMATION FOR ALL SECTIONS & CARDS
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

  // 9. INDIAN MULTI-LANGUAGE TRANSLATION ENGINE (ENG, HIN, PUN)
  const translations = {
    eng: {
      mantra: "|| Shree Ganeshay Namah ||",
      subtitle: "The Wedding Celebration of",
      groom: "Gaurav",
      bride: "Shilpi",
      weds: "weds",
      date: "Monday, November 30, 2026",
      venue: "at KD Jalsa Banquet Hall, Mandhana, Kanpur",
      countdownTitle: "SAVE THE DATE",
      days: "DAYS",
      hours: "HOURS",
      mins: "MINUTES",
      secs: "SECONDS",
      eventsTitle: "Sacred Ceremonies",
      hostsTitle: "With Blessings",
      hostsSub: "WITH THE BLESSINGS OF OUR ELDERS",
      hostsWelcomed: "CORDIALLY INVITED",
      hostsFamilies: "The Families",
      hostsGroomSide: "Groom's Family",
      hostsBrideSide: "Bride's Family",
      hostsBottomNote: '"With hearts full of joy and gratitude, we warmly welcome you and your family to shower your blessings and be a cherished part of our special celebrations."',
      venueTitle: "Where We Celebrate",
      directionsBtn: "Get Directions",
      footerText: "WITH LOVE & BLESSINGS"
    },
    hin: {
      mantra: "|| श्री गणेशाय नमः ||",
      subtitle: "के पावन विवाह समारोह",
      groom: "गौरव",
      bride: "शिल्पी",
      weds: "संग",
      date: "सोमवार, 30 नवंबर 2026",
      venue: "केडी जलसा बैंक्वेट हॉल, मंधना, कानपुर में",
      countdownTitle: "शुभ विवाह तिथि",
      days: "दिन",
      hours: "घंटे",
      mins: "मिनट",
      secs: "सेकंड",
      eventsTitle: "शुभ विवाह कार्यक्रम",
      hostsTitle: "शुभ आशीर्वाद",
      hostsSub: "पूज्य बुजुर्गों के आशीर्वाद से",
      hostsWelcomed: "सादर आमंत्रण",
      hostsFamilies: "परिवार",
      hostsGroomSide: "वर पक्ष",
      hostsBrideSide: "वधू पक्ष",
      hostsBottomNote: '"हमारे बच्चों के पावन विवाह के शुभ अवसर पर आपका सपरिवार सादर निमंत्रण है।"',
      venueTitle: "उत्सव स्थल",
      directionsBtn: "दिशा-निर्देश",
      footerText: "स्नेह एवं आदर सहित"
    },
    pun: {
      mantra: "|| ੴ ਸ੍ਰੀ ਗਣੇਸ਼ਾਏ ਨਮਹ ||",
      subtitle: "ਦੇ ਪਵਿੱਤਰ ਵਿਆਹ ਸਮਾਗਮ",
      groom: "ਗੌਰਵ",
      bride: "ਸ਼ਿਲਪੀ",
      weds: "ਸੰਗ",
      date: "ਸੋਮਵਾਰ, 30 ਨਵੰਬਰ 2026",
      venue: "ਕੇਡੀ ਜਲਸਾ ਬੈਂਕੁਇਟ ਹਾਲ, ਮੰਧਨਾ, ਕਾਨਪੁਰ ਵਿਖੇ",
      countdownTitle: "ਸ਼ੁਭ ਵਿਆਹ ਦੀ ਤਾਰੀਖ",
      days: "ਦਿਨ",
      hours: "ਘੰਟੇ",
      mins: "ਮਿੰਟ",
      secs: "ਸਕਿੰਟ",
      eventsTitle: "ਪ੍ਰੋਗਰਾਮ ਸੂਚੀ",
      hostsTitle: "ਸ਼ੁਭ ਅਸੀਸਾਂ",
      hostsSub: "ਵੱਡਿਆਂ ਦੇ ਆਸ਼ੀਰਵਾਦ ਨਾਲ",
      hostsWelcomed: "ਜੀ ਆਇਆਂ ਨੂੰ",
      hostsFamilies: "ਪਰਿਵਾਰ",
      hostsGroomSide: "ਲੜਕੇ ਵਾਲੇ",
      hostsBrideSide: "ਲੜਕੀ ਵਾਲੇ",
      hostsBottomNote: '"ਸਾਡੇ ਬੱਚਿਆਂ ਦੇ ਸ਼ੁਭ ਵਿਆਹ ਦੇ ਅਵਸਰ \'ਤੇ ਤੁਹਾਡੀ ਹਾਜ਼ਰੀ ਦੀ ਮੰਗ ਕਰਦੇ ਹਾਂ।"',
      venueTitle: "ਵਿਆਹ ਦਾ ਸਥਾਨ",
      directionsBtn: "ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼",
      footerText: "ਪਿਆਰ ਅਤੇ ਸਤਿਕਾਰ ਸਹਿਤ"
    },
    mar: {
      mantra: "|| श्री गणेशाय नमः ||",
      subtitle: "यांच्या शुभ विवाह सोहळ्यात",
      groom: "गौरव",
      bride: "शिल्पी",
      weds: "विवाह करतात",
      date: "सोमवार, ३० नोव्हेंबर २०२६",
      venue: "केडी जलसा बँक्वेट हॉल, मंधना, कानपूर येथे",
      countdownTitle: "शुभ विवाह तिथी",
      days: "दिवस",
      hours: "तास",
      mins: "मिनिटे",
      secs: "सेकंड",
      eventsTitle: "कार्यक्रम सूची",
      hostsTitle: "आशीर्वादासह",
      hostsSub: "वडिलधाऱ्यांच्या आशीर्वादाने",
      hostsWelcomed: "सादर आमंत्रण",
      hostsFamilies: "कुटुंब",
      hostsGroomSide: "वर पक्ष",
      hostsBrideSide: "वधू पक्ष",
      hostsBottomNote: '"आमच्या मुलांच्या शुभ विवाह सोहळ्यात आपल्या उपस्थितीसाठी नम्र विनंती आहे."',
      venueTitle: "उत्सव स्थळ",
      directionsBtn: "દિશાનિર્દેશ",
      footerText: "प्रेम व शुभेच्छांसह"
    },
    guj: {
      mantra: "|| શ્રી ગણેશાય નમઃ ||",
      subtitle: "ના પવિત્ર વિવાહ સમારોહ",
      groom: "ગૌરવ",
      bride: "શિલ્પી",
      weds: "સાથે",
      date: "સોમવાર, ૩૦ નવેમ્બર ૨૦૨૬",
      venue: "કેડી જલસા બેન્ક્વેટ હોલ, મંધના, કાનપુર ખાતે",
      countdownTitle: "શુભ વિવાહ તિથિ",
      days: "દિવસ",
      hours: "કલાક",
      mins: "મિનિટ",
      secs: "સેકન્ડ",
      eventsTitle: "કાર્યક્રમ સૂચિ",
      hostsTitle: "આશીર્વાદ સહિત",
      hostsSub: "વડીલોના આશીર્વાદ સાથે",
      hostsWelcomed: "સ્વાગત છે",
      hostsFamilies: "પરિવાર",
      hostsGroomSide: "વર પક્ષ",
      hostsBrideSide: "વધૂ પક્ષ",
      hostsBottomNote: '"અમારા સંતાનના શુભ વિવાહ પ્રસંગે આપની ઉપસ્થિતિ ઈચ્છીએ છીએ."',
      venueTitle: "ઉત્સવ સ્થળ",
      directionsBtn: "દિશા-નિર્દેશ",
      footerText: "પ્રેમ અને શ્રદ્ધા સહ"
    },
    tam: {
      mantra: "|| ஸ்ரீ கணேசாய நமஹ ||",
      subtitle: "திருமண விழாவில்",
      groom: "கௌரவ்",
      bride: "ஷில்பி",
      weds: "மணக்கிறார்",
      date: "திங்கட்கிழமை, நவம்பர் 30, 2026",
      venue: "கேடி ஜல்சா பேங்க்வெட் ஹால், மந்தனா, கான்பூர்",
      countdownTitle: "திருமண நாள்",
      days: "நாட்கள்",
      hours: "மணி",
      mins: "நிமிடம்",
      secs: "வினாடி",
      eventsTitle: "நிகழ்ச்சிகள்",
      hostsTitle: "ஆசியோடு",
      hostsSub: "பெரியோர்களின் ஆசியோடு",
      hostsWelcomed: "அன்போடு அழைக்கிறோம்",
      hostsFamilies: "குடும்பங்கள்",
      hostsGroomSide: "மணமகன் தரப்பு",
      hostsBrideSide: "மணமகள் தரப்பு",
      hostsBottomNote: '"எங்கள் பிள்ளைகளின் திருமண விழாவில் கலந்துகொள்ள அன்போடு அழைக்கிறோம்."',
      venueTitle: "கொண்டாட்ட இடம்",
      directionsBtn: "வழி காட்டு",
      footerText: "அன்பும் ஆசியும்"
    },
    tel: {
      mantra: "|| శ్రీ గణేశాయ నమః ||",
      subtitle: "వివాహ వేడుకకు",
      groom: "గౌరవ్",
      bride: "శిల్పి",
      weds: "వివాహమాడుతున్నారు",
      date: "సోమవారం, నవంబర్ 30, 2026",
      venue: "కేడీ జల్సా బాంక్వెట్ హాల్, మంధన, కాన్పూర్",
      countdownTitle: "శుభ వివాహ తేదీ",
      days: "రోజులు",
      hours: "గంటలు",
      mins: "నిమిషాలు",
      secs: "సెకన్లు",
      eventsTitle: "కార్యక్రమాలు",
      hostsTitle: "ఆశీర్వాదంతో",
      hostsSub: "పెద్దల ఆశీర్వాదంతో",
      hostsWelcomed: "ఆత్మీయంగా ఆహ్వానిస్తున్నాం",
      hostsFamilies: "కుటుంబాలు",
      hostsGroomSide: "వరుడి వైపు",
      hostsBrideSide: "వధువు వైపు",
      hostsBottomNote: '"మా పిల్లల వివాహ వేడుకలో మీ సమక్షం కోసం ఆత్మీయంగా వేడుకుంటున్నాం."',
      venueTitle: "వేడుక స్థలం",
      directionsBtn: "దిశలు పొందండి",
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
      // Hover effect via JS since buttons use inline styles
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

    // Update the lang-label span only (preserves the icon)
    const langLabel = document.getElementById('lang-label');
    if (langLabel) {
      const labels = {
        eng: 'ENG', hin: 'हिन', pun: 'ਪੰਜ',
        mar: 'मरा', guj: 'ગુજ', tam: 'தமி', tel: 'తెలు'
      };
      langLabel.textContent = labels[lang] || 'ENG';
    }

    // Dynamic replacement loop for elements with data-trans attribute
    const transElements = document.querySelectorAll('[data-trans]');
    transElements.forEach((el) => {
      const key = el.getAttribute('data-trans');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Highlight active pill via inline style (buttons use inline CSS)
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

    // Apply styling class for Devanagari/Gurmukhi to prevent vertical overlap
    const heroTitleContainer = document.querySelector('.hero-anim-title');
    if (heroTitleContainer) {
      if (lang === 'eng') {
        heroTitleContainer.classList.remove('lang-non-eng');
      } else {
        heroTitleContainer.classList.add('lang-non-eng');
      }
    }

    localStorage.setItem('selectedLanguage', lang);
  }

  // Load language preference from local cache, default to ENG
  const savedLang = localStorage.getItem('selectedLanguage') || 'eng';
  setLanguage(savedLang);
});

// Helper Scroll Function
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ----------------------------------------------------
// FULLSCREEN GALLERY LIGHTBOX MODAL
// ----------------------------------------------------
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

// ----------------------------------------------------
// 5-SECOND AUTOMATIC GALLERY CAROUSEL LOGIC
// ----------------------------------------------------
const gallerySlides = [
  { 
    img: 'assets/gallery-1.webp', 
    thumb: 'assets/gallery-1.webp',
    tag: 'Pre-Wedding', 
    title: 'Cherished Moments', 
    desc: 'Capturing the beautiful beginning of our forever' 
  },
  { 
    img: 'assets/gallery-2.webp', 
    thumb: 'assets/gallery-2.webp',
    tag: 'Together Forever', 
    title: 'Soulful Bond', 
    desc: 'Two hearts beating in eternal harmony' 
  },
  { 
    img: 'assets/gallery-3.webp', 
    thumb: 'assets/gallery-3.webp',
    tag: 'Sweet Memories', 
    title: 'Pure Happiness', 
    desc: 'Treasured laughter and timeless promises' 
  },
  { 
    img: 'assets/gallery-4.webp', 
    thumb: 'assets/gallery-4.webp',
    tag: 'Celebration of Love', 
    title: 'Grace & Elegance', 
    desc: 'Walking hand in hand toward our golden future' 
  },
  { 
    img: 'assets/gallery-5.webp', 
    thumb: 'assets/gallery-5.webp',
    tag: 'Royal Matrimony', 
    title: 'Sacred Union', 
    desc: 'Every moment spent together is a blessing' 
  },
  { 
    img: 'assets/gallery-6.webp', 
    thumb: 'assets/gallery-6.webp',
    tag: 'Eternal Love', 
    title: 'Hearts Entwined', 
    desc: 'United in faith, love, and companionship' 
  },
  { 
    img: 'assets/gallery-7.webp', 
    thumb: 'assets/gallery-7.webp',
    tag: 'Infinite Bliss', 
    title: 'A Lifetime Together', 
    desc: 'Beginning an exquisite adventure of togetherness' 
  }
];

let currentSlideIdx = 0;
let carouselTimer = null;

function updateGalleryCarouselUI() {
  const featuredImg = document.getElementById('carousel-featured-img');
  const tagEl = document.getElementById('carousel-category-tag');
  const titleEl = document.getElementById('carousel-title');
  const descEl = document.getElementById('carousel-desc');
  const dotsContainer = document.getElementById('carousel-dots-container');

  if (!featuredImg || !gallerySlides[currentSlideIdx]) return;

  const current = gallerySlides[currentSlideIdx];

  featuredImg.style.opacity = '0.3';
  setTimeout(() => {
    featuredImg.src = current.img;
    if (tagEl) tagEl.textContent = current.tag;
    if (titleEl) titleEl.textContent = current.title;
    if (descEl) descEl.textContent = current.desc;
    featuredImg.style.opacity = '1';
  }, 200);

  // Update dots
  if (dotsContainer) {
    let dotsHTML = '';
    for (let i = 0; i < gallerySlides.length; i++) {
      const cls = i === currentSlideIdx ? 'bg-[#C5A059] w-5' : 'bg-white/40';
      dotsHTML += `<span onclick="setGallerySlide(${i})" class="w-2 h-2 rounded-full cursor-pointer transition-all ${cls}"></span>`;
    }
    dotsContainer.innerHTML = dotsHTML;
  }

  // Update thumbnails
  const thumbs = document.querySelectorAll('.carousel-thumb');
  thumbs.forEach((thumb, idx) => {
    const thumbImg = thumb.querySelector('img');
    if (thumbImg && gallerySlides[idx]) {
      thumbImg.src = gallerySlides[idx].thumb;
    }
    if (idx === currentSlideIdx) {
      thumb.classList.add('border-2', 'border-[#C5A059]', 'opacity-100', 'scale-105');
      thumb.classList.remove('opacity-60');
    } else {
      thumb.classList.remove('border-2', 'opacity-100', 'scale-105');
      thumb.classList.add('opacity-60');
    }
  });
}

function nextGallerySlide() {
  currentSlideIdx = (currentSlideIdx + 1) % gallerySlides.length;
  updateGalleryCarouselUI();
}

function prevGallerySlide() {
  currentSlideIdx = (currentSlideIdx - 1 + gallerySlides.length) % gallerySlides.length;
  updateGalleryCarouselUI();
}

function setGallerySlide(index) {
  if (index >= 0 && index < gallerySlides.length) {
    currentSlideIdx = index;
    updateGalleryCarouselUI();
    resetCarouselTimer();
  }
}

function openCurrentCarouselLightbox() {
  const current = gallerySlides[currentSlideIdx];
  if (current && window.openLightbox) {
    window.openLightbox(current.img, current.title);
  }
}

function resetCarouselTimer() {
  if (carouselTimer) clearInterval(carouselTimer);
  carouselTimer = setInterval(() => {
    nextGallerySlide();
  }, 5000);
}

// Expose slide functions globally
window.nextGallerySlide = nextGallerySlide;
window.prevGallerySlide = prevGallerySlide;
window.setGallerySlide = setGallerySlide;
window.openCurrentCarouselLightbox = openCurrentCarouselLightbox;

// Initialize slide rotation when script starts
setTimeout(() => {
  updateGalleryCarouselUI();
  resetCarouselTimer();
}, 200);
