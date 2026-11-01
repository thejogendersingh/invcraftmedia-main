    const CONFIG = {
      groomName: "Shubham Bugreja",
      brideName: "Navtinder Kaur",
      heroMessage: "Invite you to a celebration of colour, laughter and a lifetime of togetherness.",
      hashtag: "#Shubhnav",
      countdownIso: "2026-11-13T20:00:00+05:30",
      functionsEyebrow: "Four days of joy & blessings",

      /* ---- ENTRY GATE (screen 1) ---- */
      gateLine1: "With the blessings of grandparents",
      gateLine2: "Late Sdn. Charan Kaur & Late S. Bawa Singh",
      gateForever: "Request the pleasure of your gracious presence on the wedding of their beloved daughter",

      /* ---- WELCOME + PARENTS (screen 2) ---- */
      welcomeLead: "Request the pleasure of your gracious presence on the wedding of their beloved daughter",
      brideRelation: "D/O",
      brideParents: "Sdn. Kamlesh Kaur & S. Gurbhag Singh",
      groomRelation: "S/O",
      groomParents: "Mrs. Punita Rani & Mr. Umesh Kumar",

      /* ---- CLOSING NOTE (screen 5) ---- */
      closingMessage: "The best moments in life are meant to be shared. Thank you for being a part of our story. We can't wait to celebrate this beautiful beginning with you!",
      closingSignOff: "With Best Compliments From:",
      closingNames: "All Relatives & Friends",
      contactLabel: "R.S.V.P Details",

      venueName: "Palki Palace",
      venueSubtitle: "Chandigarh-Kharar Road, Balongi, Mohali (Pb.)",
      venueAddressLine1: "Palki Palace",
      venueAddressLine2: "Mohali, Punjab",
      venueSchedule: "Celebrations · 11–13 November 2026",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Palki%20Palace%20Chandigarh-Kharar%20Road%2C%20Balongi%2C%20Mohali",
      residenceCoordinates: "30°44'11.5\"N 76°40'06.1\"E",
      residenceMapUrl: "https://www.google.com/maps/search/?api=1&query=2527+Sector+37C+Chandigarh",
      rsvpNumber: "+91 9501818005",
      locationWhatsappMessage: "Hello, I would like the location for Navtinder Kaur and Shubham Bugreja's wedding celebration.",
      rsvpWhatsappMessage: "Hello, we are delighted to RSVP for Navtinder Kaur & Shubham Bugreja's wedding!",

      /* ---- EXACT FUNCTIONS FROM WEDDING INVITATION CARD ---- */
      functions: [
        {
          enabled: true,
          name: "Haldi Glow",
          tagline: "glow of love & turmeric",
          details: "Like haldi, may our bond become brighter and stronger with timeless blessings.",
          day: "Wednesday",
          date: "11th November, 2026",
          time: "03:00 PM",
          venueArea: "At Residence",
          venueName: "#2527 Sector 37C Chandigarh",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=2527+Sector+37C+Chandigarh",
          image: "assets/box1.webp"
        },
        {
          enabled: true,
          name: "Hands Of Happiness",
          tagline: "green leaves, red hearts",
          details: "A beautiful evening dipped in love, music and shagan mehndi.",
          day: "Wednesday",
          date: "11th November, 2026",
          time: "05:00 PM",
          venueArea: "At Residence",
          venueName: "#2527 Sector 37C Chandigarh",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=2527+Sector+37C+Chandigarh",
          image: "assets/box2.webp"
        },
        {
          enabled: true,
          name: "The Grand Jam",
          tagline: "dance under the stars",
          details: "An evening of traditional Jaago, high spirits, Punjabi beats and endless joy.",
          day: "Thursday",
          date: "12th November, 2026",
          time: "06:00 PM",
          venueArea: "Hotel Shanti Nagar",
          venueName: "Airport Road, TDI, Sector-118, Mohali (Pb.)",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Shanti+Nagar+Airport+Road+TDI+Sector-118+Mohali",
          image: "assets/box3.webp"
        },
        {
          enabled: true,
          name: "The Promise",
          tagline: "the grand celebration",
          details: "Two souls unite in sacred vows and eternal love to begin a lifetime of togetherness.",
          day: "Friday",
          date: "13th November, 2026",
          time: "08:00 PM",
          venueArea: "Palki Palace",
          venueName: "Chandigarh-Kharar Road, Balongi, Mohali (Pb.)",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Palki%20Palace%2C%20Chandigarh-Kharar%20Road%2C%20Balongi%2C%20Mohali",
          image: "assets/box4.webp"
        }
      ],

      /* ---- RSVP CONTACTS (GIRL'S SIDE) ---- */
      rsvpContacts: [
        {
          name: "Gurbhag Singh",
          role: "Family / Host",
          phone: "95018 18005",
          phoneRaw: "9501818005",
          whatsappMsg: "Hello Gurbhag Singh ji, We are delighted to attend Navtinder & Shubham's wedding celebration!"
        },
        {
          name: "Navtinder Kaur",
          role: "Bride",
          phone: "88476 43470",
          phoneRaw: "8847643470",
          whatsappMsg: "Dear Navtinder, heartiest congratulations on your wedding with Shubham!"
        },
        {
          name: "Kamlesh Kaur",
          role: "Family / Host",
          phone: "99148 02527",
          phoneRaw: "9914802527",
          whatsappMsg: "Hello Kamlesh Kaur ji, Warm greetings and congratulations on Navtinder's wedding!"
        }
      ]
    };

    const EVENT_THEMES = [
      { background: "#281b0f", accent: "#f5c748", image: "assets/box1.webp" },
      { background: "#162814", accent: "#8be076", image: "assets/box2.webp" },
      { background: "#271228", accent: "#f089cf", image: "assets/box3.webp" },
      { background: "#2f131a", accent: "#f5a782", image: "assets/box4.webp" },
      { background: "#152a11", accent: "#96d47f", image: "assets/images/mehendi.webp" },
      { background: "#2d1526", accent: "#f291c4", image: "assets/images/carnival.webp" },
      { background: "#2e250b", accent: "#f5c748", image: "assets/images/haldi.webp" },
      { background: "#231737", accent: "#bd9bee", image: "assets/images/sangeet.webp" },
      { background: "#301d0d", accent: "#f2ad57", image: "assets/images/baraat.webp" },
      { background: "#2f121a", accent: "#f486a3", image: "assets/images/wedding.webp" },
      { background: "#0e2625", accent: "#5ccdc6", image: "assets/images/reception.webp" }
    ];

    function inviteEscape(value) {
      return String(value == null ? "" : value).replace(/[&<>"']/g, character => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
      })[character]);
    }

    function inviteDateParts(iso) {
      const date = new Date(iso);
      const safeDate = Number.isNaN(date.getTime()) ? new Date("2028-07-14T00:00:00+05:30") : date;
      const longParts = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata", day: "2-digit", month: "long", year: "numeric"
      }).formatToParts(safeDate);
      const shortMonth = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata", month: "short"
      }).format(safeDate);
      const weekday = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata", weekday: "short"
      }).format(safeDate);
      const pick = type => (longParts.find(part => part.type === type) || {}).value || "";
      return { day: pick("day"), month: pick("month"), shortMonth, weekday, year: pick("year") };
    }

    function inviteWhatsappNumber(value) {
      let digits = String(value || "").replace(/\D/g, "");
      if (digits.length === 10) digits = "91" + digits;
      return digits;
    }

    function render() {
      const setText = (id, value) => {
        const node = document.getElementById(id);
        if (node) node.textContent = value == null ? "" : value;
      };
      const groom = String(CONFIG.groomName || "Groom").trim();
      const bride = String(CONFIG.brideName || "Bride").trim();
      const names = bride + " weds " + groom;
      const initials = (bride.charAt(0) + groom.charAt(0)).toUpperCase();
      const spacedInitials = bride.charAt(0).toUpperCase() + " · " + groom.charAt(0).toUpperCase();
      const date = inviteDateParts(CONFIG.countdownIso);

      setText("gateInitials", spacedInitials);
      const gateTitle = document.getElementById("gateTitle");
      if (gateTitle) gateTitle.innerHTML = "<span>" + inviteEscape(bride) + "</span><em>weds</em><span>" + inviteEscape(groom) + "</span>";
      setText("gateHashtag", CONFIG.hashtag);
      const gateKicker = document.getElementById("gateKicker");
      if (gateKicker) gateKicker.innerHTML = inviteEscape(CONFIG.gateLine1) + "<br>" + inviteEscape(CONFIG.gateLine2);
      setText("gateForever", CONFIG.gateForever);
      setText("welcomeBrideName", bride);
      setText("welcomeBrideRelation", CONFIG.brideRelation);
      setText("welcomeBrideParents", CONFIG.brideParents);
      setText("welcomeGroomName", groom);
      setText("welcomeGroomRelation", CONFIG.groomRelation);
      setText("welcomeGroomParents", CONFIG.groomParents);
      const welcomeLead = document.getElementById("welcomeLead");
      if (welcomeLead) welcomeLead.textContent = CONFIG.welcomeLead;
      setText("filmWelcomeLead", CONFIG.welcomeLead);
      setText("filmBrideName", bride);
      setText("filmBrideRelation", CONFIG.brideRelation);
      setText("filmBrideParents", CONFIG.brideParents);
      setText("filmGroomName", groom);
      setText("filmGroomRelation", CONFIG.groomRelation);
      setText("filmGroomParents", CONFIG.groomParents);
      setText("closingMessage", CONFIG.closingMessage);
      setText("closingSignOff", CONFIG.closingSignOff);
      setText("closingNames", CONFIG.closingNames || names);
      setText("contactLabel", CONFIG.contactLabel);

      setText("navInitials", initials);
      setText("navNames", names);
      setText("heroGroom", groom);
      setText("heroBride", bride);
      setText("heroDateDay", String(Number(date.day) || date.day));
      setText("heroDateRest", date.shortMonth + " · " + date.year);
      setText("heroIntro", CONFIG.heroMessage);
      setText("heroHashtag", CONFIG.hashtag);
      const filmLines = document.getElementById("filmLines");
      if (filmLines) filmLines.innerHTML = inviteEscape(CONFIG.gateLine1) + "<br>" + inviteEscape(CONFIG.gateLine2);
      setText("filmForever", CONFIG.gateForever);
      const filmNames = document.getElementById("filmNames");
      if (filmNames) filmNames.innerHTML = "<span>" + inviteEscape(bride) + "</span><em>weds</em><span>" + inviteEscape(groom) + "</span>";
      setText("scratchYear", date.year);
      setText("scratchMonth", date.shortMonth);
      setText("scratchDay", String(Number(date.day) || date.day));
      setText("scratchDow", date.weekday);
      setText("functionsEyebrow", CONFIG.functionsEyebrow);
      setText("venueName", CONFIG.venueName);
      setText("venueSubtitle", CONFIG.venueSubtitle);
      setText("venueAddressLine1", CONFIG.venueAddressLine1);
      setText("venueAddressLine2", CONFIG.venueAddressLine2);
      setText("venueSchedule", CONFIG.venueSchedule);
      setText("rsvpNumber", CONFIG.rsvpNumber);
      setText("finalHashtag", CONFIG.hashtag);
      setText("footerNamesDate", names + " · 13 " + date.month + " " + date.year);

      const countdown = document.getElementById("countdown");
      if (countdown) countdown.setAttribute("aria-label", "Countdown to " + date.day + " " + date.month + " " + date.year);
      const mapLink = document.getElementById("mapLink");
      if (mapLink) mapLink.href = CONFIG.mapUrl || "#";
      const phone = inviteWhatsappNumber(CONFIG.rsvpNumber);
      const locationLink = document.getElementById("locationWhatsappLink");
      const rsvpLink = document.getElementById("rsvpWhatsappLink");
      if (locationLink) locationLink.href = "https://wa.me/" + phone + "?text=" + encodeURIComponent(CONFIG.locationWhatsappMessage || "");
      if (rsvpLink) rsvpLink.href = "https://wa.me/" + phone + "?text=" + encodeURIComponent(CONFIG.rsvpWhatsappMessage || "");

      const rsvpContainer = document.getElementById("rsvpContactsList");
      if (rsvpContainer && Array.isArray(CONFIG.rsvpContacts)) {
        rsvpContainer.innerHTML = CONFIG.rsvpContacts.map(contact => {
          const rawPhone = inviteWhatsappNumber(contact.phoneRaw || contact.phone);
          const callPhone = String(contact.phoneRaw || contact.phone).replace(/\s+/g, "");
          const waMsg = contact.whatsappMsg || ("Hello " + contact.name + ", regards for Navtinder & Shubham's wedding!");
          const waUrl = "https://wa.me/" + rawPhone + "?text=" + encodeURIComponent(waMsg);
          return '<div class="rsvp-item-card">' +
            '<div class="rsvp-person-info">' +
              (contact.role ? '<span class="rsvp-person-relation">' + inviteEscape(contact.role) + '</span>' : '') +
              '<h4 class="rsvp-person-name">' + inviteEscape(contact.name) + '</h4>' +
              '<span class="rsvp-person-phone">+91 ' + inviteEscape(contact.phone) + '</span>' +
            '</div>' +
            '<div class="rsvp-btn-group">' +
              '<a href="tel:+91' + inviteEscape(callPhone) + '" class="rsvp-action-btn rsvp-btn-call" title="Call ' + inviteEscape(contact.name) + '" aria-label="Call ' + inviteEscape(contact.name) + '">' +
                '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
              '</a>' +
              '<a href="' + waUrl + '" target="_blank" rel="noopener" class="rsvp-action-btn rsvp-btn-wa" title="WhatsApp ' + inviteEscape(contact.name) + '" aria-label="WhatsApp ' + inviteEscape(contact.name) + '">' +
                '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.4-4.2a8.5 8.5 0 1 1 15.6-4.6Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" fill="none"/><path d="M8.2 7.7c.3-.5.6-.5.9-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.4 0 .6.5.9 1.2 1.7 2.1 2.2.3.2.5.2.7 0l.8-1c.2-.2.4-.3.7-.2l1.8.8c.3.1.5.3.5.5 0 .3-.1 1.2-.7 1.7-.5.5-1.3.8-2.2.6-1-.2-2.8-.9-4.6-2.5-2.3-2-3-4.3-3.1-5.1 0-.4.1-.6.2-.8Z"/></svg>' +
              '</a>' +
            '</div>' +
          '</div>';
        }).join("");
      }

      const ribbonValues = [
        (CONFIG.venueAddressLine2 || "") + " · 13 " + date.month + " " + date.year,
        "Two hearts, one celebration",
        CONFIG.hashtag || "#Shubhnav"
      ];
      document.querySelectorAll(".ribbon-track span").forEach((node, index) => {
        node.textContent = ribbonValues[index % ribbonValues.length];
      });

      const eventsSection = document.getElementById("events");
      const track = document.getElementById("eventStack");
      const visibleFunctions = Array.isArray(CONFIG.functions)
        ? CONFIG.functions.filter(item => item && item.enabled !== false)
        : [];
      if (eventsSection) eventsSection.hidden = visibleFunctions.length === 0;
      if (track) {
        track.innerHTML = visibleFunctions.map((event, index) => {
          const theme = EVENT_THEMES[index % EVENT_THEMES.length];
          const title = event.name || "Celebration";
          const image = event.image || theme.image;
          const pin = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
            '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" stroke-width="1.7"/>' +
            '<circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.7"/></svg>';
          const mapQuery = encodeURIComponent((event.venueArea || "") + " " + (event.venueName || ""));
          const mapUrl = event.mapUrl || ("https://www.google.com/maps/search/?api=1&query=" + mapQuery);
          return '<article class="event-card" data-image="' + inviteEscape(image) + '" style="--slide-bg:' + theme.background + ';--accent:' + theme.accent + ';--i:' + index + ';z-index:' + (index + 1) + '">' +
            '<span class="event-badge">Function ' + String(index + 1).padStart(2, "0") + '</span>' +
            '<div class="event-media">' +
            '<img src="' + inviteEscape(image) + '" alt="' + inviteEscape(title) + ' celebration" loading="lazy"></div>' +
            '<div class="event-copy">' +
            '<h3>' + inviteEscape(title) + '</h3>' +
            (event.details ? '<p class="event-note">' + inviteEscape(event.details) + '</p>' : '') +
            '<div class="event-when">' +
            '<b>On ' + inviteEscape(event.day) + ' | ' + inviteEscape(event.date) + '</b>' +
            '<b>' + inviteEscape(event.time) + '</b></div>' +
            '<div class="event-divider" aria-hidden="true"><i></i><span>&#10086;</span><i></i></div>' +
            '<a class="event-place event-where event-map-link" href="' + mapUrl + '" target="_blank" rel="noopener" title="Open location in Google Maps">' + pin + '<span class="event-where-text">' +
            '<b>' + inviteEscape(event.venueArea) + '</b>' +
            '<span>' + inviteEscape(event.venueName) + '</span></span></a>' +
            '</div></article>';
        }).join("");
      }
      if (typeof window.__updateCountdown === "function") window.__updateCountdown();
    }

    render();

    (() => {
      const body = document.body;
      const gate = document.getElementById('enterGate');
      const enterButton = document.getElementById('enterButton');
      if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);

      enterButton.addEventListener('click', () => {
        gate.classList.add('is-open');
        body.classList.remove('is-locked');
        body.classList.add('has-entered');
        if (typeof window.__primeFilm === 'function') window.__primeFilm();
        if (typeof window.__startMusic === 'function') window.__startMusic();
        /* the page was locked behind the gate, so repaint the film once the
           gate opens instead of waiting for the first scroll */
        if (typeof window.__refreshFilm === 'function') {
          window.__refreshFilm();
          setTimeout(window.__refreshFilm, 120);
        }
        setTimeout(() => gate.setAttribute('aria-hidden', 'true'), 900);
      });

      document.addEventListener('pointermove', (event) => {
        if (window.__freezeTilt) return;
        const x = (event.clientX / window.innerWidth - .5) * 2;
        const y = (event.clientY / window.innerHeight - .5) * 2;
        document.documentElement.style.setProperty('--mx', x.toFixed(3));
        document.documentElement.style.setProperty('--my', y.toFixed(3));
      }, { passive: true });

      const petals = document.getElementById('petals');
      const petalColours = ['#f2a7b7', '#f7c85f', '#eb7f70', '#ffffff'];
      for (let i = 0; i < 18; i++) {
        const petal = document.createElement('i');
        petal.className = 'petal';
        petal.style.setProperty('--left', `${Math.random() * 100}%`);
        petal.style.setProperty('--size', `${7 + Math.random() * 9}px`);
        petal.style.setProperty('--petal-color', petalColours[i % petalColours.length]);
        petal.style.setProperty('--duration', `${10 + Math.random() * 12}s`);
        petal.style.setProperty('--delay', `${-Math.random() * 18}s`);
        petal.style.setProperty('--drift', `${-90 + Math.random() * 180}px`);
        petal.style.setProperty('--blur', `${Math.random() > .75 ? 2 : 0}px`);
        petals.appendChild(petal);
      }

      const fireworksCanvas = document.getElementById('fireworksCanvas');
      const fireworksCtx = fireworksCanvas.getContext('2d');
      const fireworkButton = document.getElementById('fireworkButton');
      const fireworkStatus = document.getElementById('fireworkStatus');
      const fireworkColours = ['#ffd166', '#ff7a90', '#7ee8df', '#ffffff', '#c9a7ff', '#ff9f43'];
      const fireworkParticles = [];
      const confettiColours = ['#ffd166', '#ff7a90', '#7ee8df', '#ffffff', '#c9a7ff', '#ff9f43', '#f0899f', '#ffd6a1'];
      const confettiParticles = [];
      let fireworksRaf = 0;

      /* Confetti is paper, not sparks: solid tumbling rectangles drawn with
         source-over, unlike the additive firework streaks. */
      function createConfettiBurst(x, y) {
        const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
        const total = reduced ? 24 : (window.innerWidth < 650 ? 95 : 160);
        for (let i = 0; i < total; i++) {
          const angle = -Math.PI / 2 + (Math.random() - .5) * Math.PI * 1.2;
          const speed = 4 + Math.random() * 9.5;
          confettiParticles.push({
            x: x + (Math.random() - .5) * 46,
            y: y + (Math.random() - .5) * 24,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            gravity: .14 + Math.random() * .09,
            w: 5 + Math.random() * 6,
            h: 8 + Math.random() * 8,
            rot: Math.random() * Math.PI * 2,
            spin: (Math.random() - .5) * .3,
            alpha: 1,
            decay: .005 + Math.random() * .006,
            colour: confettiColours[i % confettiColours.length]
          });
        }
        if (!fireworksRaf) fireworksRaf = requestAnimationFrame(drawFireworks);
      }
      window.__confetti = createConfettiBurst;

      function sizeFireworksCanvas() {
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        fireworksCanvas.width = Math.round(window.innerWidth * dpr);
        fireworksCanvas.height = Math.round(window.innerHeight * dpr);
        fireworksCanvas.style.width = `${window.innerWidth}px`;
        fireworksCanvas.style.height = `${window.innerHeight}px`;
        fireworksCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      function createFireworkBurst(x, y, colour) {
        const total = window.innerWidth < 650 ? 38 : 56;
        for (let i = 0; i < total; i++) {
          const angle = Math.PI * 2 * i / total + Math.random() * .12;
          const speed = 2.2 + Math.random() * 4.8;
          fireworkParticles.push({
            x, y,
            lastX: x,
            lastY: y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            gravity: .035 + Math.random() * .025,
            alpha: 1,
            decay: .012 + Math.random() * .012,
            colour,
            width: .8 + Math.random() * 1.7
          });
        }
        if (!fireworksRaf) fireworksRaf = requestAnimationFrame(drawFireworks);
      }

      function drawFireworks() {
        fireworksCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        fireworksCtx.globalCompositeOperation = 'lighter';
        for (let i = fireworkParticles.length - 1; i >= 0; i--) {
          const particle = fireworkParticles[i];
          particle.lastX = particle.x;
          particle.lastY = particle.y;
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.vx *= .988;
          particle.vy = particle.vy * .988 + particle.gravity;
          particle.alpha -= particle.decay;
          if (particle.alpha <= 0) {
            fireworkParticles.splice(i, 1);
            continue;
          }
          fireworksCtx.beginPath();
          fireworksCtx.moveTo(particle.lastX, particle.lastY);
          fireworksCtx.lineTo(particle.x, particle.y);
          fireworksCtx.strokeStyle = particle.colour;
          fireworksCtx.globalAlpha = particle.alpha;
          fireworksCtx.lineWidth = particle.width;
          fireworksCtx.stroke();
        }
        fireworksCtx.globalAlpha = 1;
        fireworksCtx.globalCompositeOperation = 'source-over';

        for (let i = confettiParticles.length - 1; i >= 0; i--) {
          const flake = confettiParticles[i];
          flake.x += flake.vx;
          flake.y += flake.vy;
          flake.vx *= .986;
          flake.vy = flake.vy * .986 + flake.gravity;
          flake.rot += flake.spin;
          flake.alpha -= flake.decay;
          if (flake.alpha <= 0 || flake.y > window.innerHeight + 80) {
            confettiParticles.splice(i, 1);
            continue;
          }
          fireworksCtx.save();
          fireworksCtx.translate(flake.x, flake.y);
          fireworksCtx.rotate(flake.rot);
          fireworksCtx.globalAlpha = Math.min(1, flake.alpha);
          fireworksCtx.fillStyle = flake.colour;
          /* squash the height as it spins so each piece looks like it is
             tumbling in 3D rather than sliding flat */
          fireworksCtx.fillRect(-flake.w / 2, -flake.h / 2, flake.w,
            flake.h * (.3 + Math.abs(Math.cos(flake.rot)) * .7));
          fireworksCtx.restore();
        }
        fireworksCtx.globalAlpha = 1;

        if (fireworkParticles.length || confettiParticles.length) {
          fireworksRaf = requestAnimationFrame(drawFireworks);
        } else {
          fireworksRaf = 0;
          fireworksCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        }
      }

      sizeFireworksCanvas();
      addEventListener('resize', sizeFireworksCanvas, { passive: true });
      fireworkButton.addEventListener('click', () => {
        fireworkStatus.textContent = 'Celebration fireworks launched';
        const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
        const bursts = reducedMotion ? 1 : (window.innerWidth < 650 ? 5 : 7);
        for (let i = 0; i < bursts; i++) {
          setTimeout(() => {
            const x = window.innerWidth * (.14 + Math.random() * .72);
            const y = window.innerHeight * (.12 + Math.random() * .45);
            createFireworkBurst(x, y, fireworkColours[i % fireworkColours.length]);
          }, reducedMotion ? 0 : i * 150);
        }
        setTimeout(() => { fireworkStatus.textContent = ''; }, 1800);
      });


      /* ---------------- wedding music ----------------
         Browsers block audio until a real user gesture, so playback starts on
         the gate tap. The toggle then works anywhere on the page. */
      const music = document.getElementById('bgMusic');
      const musicButton = document.getElementById('musicButton');
      const musicLabel = document.getElementById('musicLabel');
      const MUSIC_VOLUME = 0.55;
      let fadeTimer = 0;

      function fadeMusic(to, done) {
        clearInterval(fadeTimer);
        fadeTimer = setInterval(() => {
          const delta = to - music.volume;
          if (Math.abs(delta) < 0.04) {
            music.volume = to;
            clearInterval(fadeTimer);
            if (done) done();
            return;
          }
          music.volume = Math.min(1, Math.max(0, music.volume + delta * 0.2));
        }, 40);
      }

      function setMusicUi(playing) {
        musicButton.classList.toggle('is-muted', !playing);
        musicButton.classList.toggle('is-playing', playing);
        musicButton.setAttribute('aria-pressed', playing ? 'true' : 'false');
        musicLabel.textContent = playing ? 'Music' : 'Music off';
      }

      let musicWanted = false;

      function startMusic() {
        musicWanted = true;
        music.volume = 0;
        const attempt = music.play();
        if (attempt && typeof attempt.then === 'function') {
          attempt.then(() => { setMusicUi(true); fadeMusic(MUSIC_VOLUME); })
                 .catch(() => setMusicUi(false));
        } else {
          setMusicUi(true);
          fadeMusic(MUSIC_VOLUME);
        }
      }

      function stopMusic() {
        musicWanted = false;
        fadeMusic(0, () => music.pause());
        /* guarantee silence even if the fade interval is throttled or dropped */
        setTimeout(() => { if (!musicWanted) { music.pause(); music.volume = 0; } }, 420);
        setMusicUi(false);
      }

      window.__startMusic = startMusic;
      setMusicUi(false);
      musicButton.addEventListener('click', () => {
        if (music.paused) startMusic(); else stopMusic();
      });
      /* pause while the tab is hidden; only resume if the user still wants music */
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) music.pause();
        else if (musicWanted) music.play().catch(() => {});
      });
      /* nothing may restart it behind the user's back */
      music.addEventListener('play', () => { if (!musicWanted) music.pause(); });

      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: .14 });
      document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

      const film = document.getElementById('film');
      const video = document.getElementById('scrollVideo');
      const filmCanvas = document.getElementById('filmCanvas');
      const filmCtx = filmCanvas.getContext('2d');
      const progress = document.getElementById('filmProgress');
      const percent = document.getElementById('filmPercent');
      const captions = [...document.querySelectorAll('.film-caption')];
      const filmStatus = document.getElementById('filmStatus');

      /* Chrome ignores the `media` attribute on <source> inside <video>, so
         the source is chosen here instead of in the markup. */
      /* Decoding is what makes scrubbing stutter: every seek has to decode
         from the previous keyframe forward. Phones get a 720p build with a
         keyframe every 4 frames, so a seek decodes 4 frames of 720p instead
         of 6 frames of 1080p - roughly a third of the work. Quality is high
         (CRF 25); the earlier soft-looking 720p was heavily compressed, which
         was the actual problem, not the resolution. Desktops keep the 1080p
         master. */
      const DESKTOP_SRC = 'assets/hero-optimized.mp4';
      const isHandheld = /Android|iPhone|iPod/i.test(navigator.userAgent)
        || (window.matchMedia('(pointer: coarse)').matches && window.innerWidth < 1024);
      const FILM_SRC = DESKTOP_SRC;

      /* ================= frame sequence (handhelds) =================
         Scrubbing a video means SEEKING, and a seek has to decode from the
         previous keyframe forward. On a phone that is what drops frames, and
         no amount of tuning removes it. So handhelds do not scrub a video at
         all: they flip through still frames. Showing frame N is one
         drawImage of an already-decoded picture - no decoder, no seeking, no
         buffering wait. Desktop keeps the full film. */
      const FRAME_COUNT = 100;
      const useFrames = isHandheld;
      const frames = new Array(FRAME_COUNT);
      let framesLoaded = 0;
      let lastFrameDrawn = -1;

      function framePath(i) {
        return 'assets/frames/f' + String(i + 1).padStart(3, '0') + '.jpg';
      }

      function loadFrame(i) {
        if (frames[i]) return;
        const img = new Image();
        img.decoding = 'async';
        frames[i] = img;
        img.onload = () => {
          framesLoaded++;
          if (framesLoaded === 1) { ready = true; document.body.classList.add('film-ready'); }
          showProgress(framesLoaded / FRAME_COUNT);
          requestFilmUpdate();
        };
        img.onerror = () => { frames[i] = null; };
        img.src = framePath(i);
      }

      /* Load first frame immediately for instant visual rendering, then coarse pass, then fill */
      function loadFrameSequence() {
        loadFrame(0);
        loadFrame(1);
        for (let i = 8; i < FRAME_COUNT; i += 8) loadFrame(i);
        let next = 2;
        const fill = () => {
          let started = 0;
          while (next < FRAME_COUNT && started < 8) {
            if (!frames[next]) { loadFrame(next); started++; }
            next++;
          }
          if (next < FRAME_COUNT) setTimeout(fill, 80);
        };
        setTimeout(fill, 200);
      }

      /* Nearest frame that has actually arrived, so early scrolling still
         shows a picture instead of nothing. */
      function nearestReadyFrame(idx) {
        for (let d = 0; d < FRAME_COUNT; d++) {
          const a = idx - d, b = idx + d;
          if (a >= 0 && frames[a] && frames[a].complete && frames[a].naturalWidth) return a;
          if (b < FRAME_COUNT && frames[b] && frames[b].complete && frames[b].naturalWidth) return b;
        }
        return -1;
      }

      function paintSequenceFrame(force) {
        if (!canvasW || !canvasH) return;
        const idx = nearestReadyFrame(Math.round(amount * (FRAME_COUNT - 1)));
        if (idx < 0 || (!force && idx === lastFrameDrawn)) return;
        const img = frames[idx];
        const scale = Math.max(canvasW / img.naturalWidth, canvasH / img.naturalHeight);
        const dw = img.naturalWidth * scale;
        const dh = img.naturalHeight * scale;
        try {
          filmCtx.drawImage(img, (canvasW - dw) / 2, (canvasH - dh) / 2, dw, dh);
          lastFrameDrawn = idx;
        } catch (e) { /* keep the last good frame */ }
      }
      let currentSrc = FILM_SRC;


      let duration = 10.0;
      let filmRaf = 0;
      let ready = false;
      let seeking = false;
      let smoothTime = 0;
      let targetTime = 0;
      let amount = 0;
      let lastPaint = 0;
      let lastTick = 0;
      let triedFallback = false;
      let blobUrl = null;
      let lastPaintedTime = -1;
      let canvasW = 0;
      let canvasH = 0;

      /* ================= loading =================
         WebKit (every browser on iPhone/iPad, and Safari) CANNOT play or seek
         a video from a blob: URL - blob URLs do not answer byte-range requests
         there, so the element just never becomes ready. Blobs are therefore
         used only on Chromium/Gecko, where a fully in-memory video makes
         scrubbing instant. WebKit gets the plain URL and is buffered up front
         instead. */
      const isWebKit = /iPad|iPhone|iPod/.test(navigator.userAgent)
        || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
        || (/^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent));

      let watchdog = 0;

      function loadFilm(src) {
        currentSrc = src;
        clearTimeout(watchdog);
        /* Attach the direct video source immediately so browser starts streaming & decoding right away */
        attach(src);

        if (isWebKit || location.protocol === 'file:') return;

        /* In background on Chromium/Gecko, cache blob to make scrubbing 100% memory-instant */
        try {
          const xhr = new XMLHttpRequest();
          xhr.open('GET', src, true);
          xhr.responseType = 'blob';
          xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300 && xhr.response && xhr.response.size) {
              if (blobUrl) URL.revokeObjectURL(blobUrl);
              blobUrl = URL.createObjectURL(xhr.response);
              const curTime = video.currentTime;
              attach(blobUrl);
              try { video.currentTime = curTime; } catch (e) {}
            }
          };
          xhr.send();
        } catch (e) {}
      }

      function showProgress(fraction) {
        if (!filmStatus) return;
        const pct = Math.round(Math.min(1, Math.max(0, fraction)) * 100);
        filmStatus.textContent = pct < 100 ? 'Preparing the film \u00b7 ' + pct + '%' : '';
      }

      /* On WebKit the progress readout comes from the element's own buffer. */
      video.addEventListener('progress', () => {
        if (!video.buffered.length || !Number.isFinite(video.duration) || !video.duration) return;
        showProgress(video.buffered.end(video.buffered.length - 1) / video.duration);
      });

      function attach(url) {
        if (video.src === url && video.readyState > 0) return;
        video.src = url;
        try { video.load(); } catch (e) {}
      }

      function filmReady() {
        if (video.readyState < 2) return;
        ready = true;
        clearTimeout(watchdog);
        if (filmStatus) filmStatus.textContent = '';
        document.body.classList.add('film-ready');
        sizeFilmCanvas();
        paintFrame(true);
        requestFilmUpdate();
      }

      video.addEventListener('loadedmetadata', () => {
        if (Number.isFinite(video.duration) && video.duration > 0) duration = video.duration;
        /* resume where the scroll is - the blob swap reloads the element and
           used to snap the film back to frame 0 */
        try { video.currentTime = Math.min(duration - 0.05, Math.max(0.02, smoothTime)); } catch (e) {}
        filmReady();
      });
      video.addEventListener('loadeddata', filmReady);
      video.addEventListener('canplay', filmReady);
      let seekCost = 120;
      video.addEventListener('seeked', () => {
        if (lastPaint) seekCost = Math.max(60, Math.min(600, (performance.now() - lastPaint) * 0.5 + seekCost * 0.5));
        seeking = false;
        paintFrame(true);
        requestFilmUpdate();
      });

      /* The film is scrubbed, never played. Anything that starts playback
         (autoplay heuristics, a gesture, the OS media session) would race the
         scroll position, so pause it straight away. */
      video.addEventListener('play', () => { if (!priming) video.pause(); });

      /* One retry on the lighter file, then leave the poster showing rather
         than a black box. */
      video.addEventListener('error', () => {
        if (triedFallback) return;
        triedFallback = true;
        setTimeout(() => attach(DESKTOP_SRC), 300);
      });

      /* iOS will not decode or seek a video that has never been activated by
         a user gesture. One muted play/pause on first touch unlocks it. */
      let primed = false;
      let priming = false;
      function primeFilm() {
        /* phones scrub image frames, not the video - playing it there painted
           the whole film over the canvas */
        if (useFrames) return;
        if (primed) return;
        primed = true;
        priming = true;
        const done = () => {
          priming = false;
          try { video.pause(); video.currentTime = Math.max(0.02, smoothTime); } catch (e) {}
        };
        /* Only reload if nothing has loaded yet. Calling load() on an already
           ready video threw away the decoded film on every Enter click, so it
           randomly showed the poster image instead of the film. */
        if (video.readyState === 0) { try { video.load(); } catch (e) {} }
        const attempt = video.play();
        if (attempt && typeof attempt.then === 'function') {
          attempt.then(done).catch(() => { priming = false; primed = false; });
        } else {
          done();
        }
      }
      window.__primeFilm = primeFilm;
      ['pointerdown', 'touchstart', 'keydown', 'wheel'].forEach(evt => {
        addEventListener(evt, primeFilm, { once: true, passive: true });
      });

      /* ================= painting ================= */
      function sizeFilmCanvas() {
        /* Capped at 2. At dpr 3 the canvas was 1170x2532 - over 3 megapixels
           repainted every frame - which is a big part of why scrolling
           stuttered. The source is 1080 wide and cover-crop only shows about
           80% of it, so a 2x canvas is already downsampling: the film stays
           sharp and the paint costs less than half as much. */
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        const w = Math.round(filmCanvas.clientWidth * dpr);
        const h = Math.round(filmCanvas.clientHeight * dpr);
        if (!w || !h || (w === canvasW && h === canvasH)) return;
        canvasW = filmCanvas.width = w;
        canvasH = filmCanvas.height = h;
        lastPaintedTime = -1;
        lastFrameDrawn = -1;
        if (useFrames) paintSequenceFrame(true); else paintFrame(true);
      }

      /* Cover-fit, matching the old object-fit: cover. Never clears first, so
         a failed draw leaves the previous frame on screen instead of black. */
      function paintFrame(force) {
        if (!canvasW || !canvasH) return;
        const vw = video.videoWidth;
        const vh = video.videoHeight;
        if (!vw || !vh || video.readyState < 2) return;
        if (!force && video.currentTime === lastPaintedTime) return;
        const scale = Math.max(canvasW / vw, canvasH / vh);
        const dw = vw * scale;
        const dh = vh * scale;
        try {
          filmCtx.drawImage(video, (canvasW - dw) / 2, (canvasH - dh) / 2, dw, dh);
          lastPaintedTime = video.currentTime;
        } catch (e) { /* keep the last good frame */ }
      }

      /* requestVideoFrameCallback already fires on every presented frame, so
         the scroll loop must not paint as well - doing both drew each frame
         twice and stole time from seeking. */
      const hasRvfc = 'requestVideoFrameCallback' in HTMLVideoElement.prototype;
      if (hasRvfc && !useFrames) {
        /* skip frames presented while the priming play() is running, or the
           film visibly plays on its own for a moment */
        const onFrame = () => {
          if (!priming && video.paused) paintFrame(true);
          video.requestVideoFrameCallback(onFrame);
        };
        video.requestVideoFrameCallback(onFrame);
      }
      /* Only measured on resize now. It used to run inside the scroll loop,
         and reading clientWidth there forced a layout on every frame. */
      addEventListener('resize', sizeFilmCanvas, { passive: true });
      addEventListener('orientationchange', () => setTimeout(sizeFilmCanvas, 250), { passive: true });

      /* ================= scroll ================= */
      function readScroll() {
        const rect = film.getBoundingClientRect();
        const total = Math.max(1, film.offsetHeight - window.innerHeight);
        amount = Math.min(1, Math.max(0, -rect.top / total));
        targetTime = Math.min(duration - 0.05, Math.max(0.02, amount * duration));
      }

      function paintOverlays() {
        progress.style.transform = 'scaleY(' + amount.toFixed(4) + ')';
        percent.textContent = String(Math.round(amount * 100)).padStart(2, '0');
        captions.forEach(caption => {
          const from = parseFloat(caption.dataset.start || '0');
          const to = parseFloat(caption.dataset.end || '1');
          const mid = (from + to) / 2;
          const half = Math.max(0.001, (to - from) / 2);
          const raw = 1 - Math.abs(amount - mid) / half;
          const visibility = Math.max(0, Math.min(1, raw * 1.4));
          caption.style.opacity = visibility.toFixed(3);
          caption.style.filter = visibility < 0.98 ? 'blur(' + ((1 - visibility) * 4).toFixed(1) + 'px)' : 'none';
          caption.style.transform = 'translateY(calc(-50% + ' + ((1 - visibility) * 22).toFixed(1) +
            'px)) scale(' + (0.975 + visibility * 0.025).toFixed(4) + ')';
          caption.classList.toggle('is-active', visibility > 0.4);
        });
      }

      function tick(now) {
        filmRaf = 0;
        readScroll();
        paintOverlays();
        if (!hasRvfc && !useFrames && !priming) paintFrame(false);

        if (useFrames) {
          paintSequenceFrame(false);
          return;
        }

        if (ready) {
          /* Frame-rate independent easing: a fixed step per frame moved half
             as fast on a 30fps phone, which made the opening feel choppy. */
          const dt = lastTick ? Math.min(64, now - lastTick) : 16.7;
          lastTick = now;
          const ease = 1 - Math.pow(1 - 0.22, dt / 16.7);
          const delta = targetTime - smoothTime;
          smoothTime += Math.abs(delta) > 0.9 ? delta : delta * ease;

          const drift = Math.abs(video.currentTime - smoothTime);
          if (!seeking && drift > 0.035) {
            seeking = true;
            lastPaint = now;
            try {
              /* NOT fastSeek: that snaps to the nearest keyframe, which on
                 this film would jump in ~1 second steps on Safari and
                 Firefox. Precise seeking lands on the exact frame. */
              video.currentTime = smoothTime;
            } catch (e) { seeking = false; }
            /* Give a seek up to twice the time the slowest one has taken so
               far before assuming it was dropped. A fixed short timeout made
               us fire a second seek on top of one still in flight, and on a
               slow decoder they queued up and fell behind. */
            const guard = Math.min(600, Math.max(160, seekCost * 2));
            setTimeout(() => { seeking = false; }, guard);
          }
          /* Keep the loop alive until the VIDEO has caught up, not just until
             the easing has settled - otherwise it parked on a stale frame. */
          if (Math.abs(delta) > 0.004 || drift > 0.035) requestFilmUpdate();
        }
      }

      function requestFilmUpdate() {
        if (!filmRaf) filmRaf = requestAnimationFrame(tick);
      }

      addEventListener('scroll', requestFilmUpdate, { passive: true });
      addEventListener('resize', requestFilmUpdate, { passive: true });

      if ('IntersectionObserver' in window) {
        new IntersectionObserver(entries => {
          entries.forEach(entry => { if (entry.isIntersecting) requestFilmUpdate(); });
        }, { threshold: 0 }).observe(film);
      }

      if (useFrames) {
        video.removeAttribute('poster');
        loadFrameSequence();
      } else {
        loadFilm(currentSrc);
      }
      sizeFilmCanvas();
      readScroll();
      smoothTime = targetTime;
      paintOverlays();
      requestFilmUpdate();

      window.__refreshFilm = () => {
        sizeFilmCanvas();
        lastPaintedTime = -1;
        lastFrameDrawn = -1;
        if (useFrames) paintSequenceFrame(true); else paintFrame(true);
        requestFilmUpdate();
      };
      addEventListener('pageshow', () => window.__refreshFilm());

      const countEls = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
      };
      function updateCountdown() {
        const configuredTarget = new Date(CONFIG.countdownIso).getTime();
        const target = Number.isFinite(configuredTarget) ? configuredTarget : Date.now();
        const delta = Math.max(0, target - Date.now());
        const days = Math.floor(delta / 86400000);
        const hours = Math.floor(delta % 86400000 / 3600000);
        const minutes = Math.floor(delta % 3600000 / 60000);
        const seconds = Math.floor(delta % 60000 / 1000);
        countEls.days.textContent = String(days).padStart(2, '0');
        countEls.hours.textContent = String(hours).padStart(2, '0');
        countEls.minutes.textContent = String(minutes).padStart(2, '0');
        countEls.seconds.textContent = String(seconds).padStart(2, '0');
      }
      window.__updateCountdown = updateCountdown;
      updateCountdown();
      setInterval(updateCountdown, 1000);

      const scratchStage = document.getElementById('scratchStage');
      const scratchCanvas = document.getElementById('scratchCanvas');
      const scratchReset = document.getElementById('scratchReset');
      const scratchCtx = scratchCanvas.getContext('2d', { willReadFrequently: true });
      let scratching = false;

      function drawScratchCover() {
        /* Use the LAYOUT size, not getBoundingClientRect: the card is tilted, so
           its bounding box is ~3% larger than the element and the canvas ended up
           stretched, making the brush drift away from the cursor near the edges. */
        const rect = { width: scratchCanvas.offsetWidth, height: scratchCanvas.offsetHeight };
        if (!rect.width || !rect.height) return;
        const dpr = Math.min(2, devicePixelRatio || 1);
        scratchCanvas.width = Math.max(1, Math.round(rect.width * dpr));
        scratchCanvas.height = Math.max(1, Math.round(rect.height * dpr));
        scratchCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
        scratchCtx.globalCompositeOperation = 'source-over';
        const gradient = scratchCtx.createLinearGradient(0, 0, rect.width, rect.height);
        gradient.addColorStop(0, '#e8455a');
        gradient.addColorStop(.35, '#c4162f');
        gradient.addColorStop(.62, '#e05469');
        gradient.addColorStop(1, '#a80f26');
        scratchCtx.fillStyle = gradient;
        scratchCtx.fillRect(0, 0, rect.width, rect.height);
        scratchCtx.globalAlpha = .16;
        for (let i = 0; i < 150; i++) {
          scratchCtx.fillStyle = i % 2 ? '#fff' : '#7d0a1c';
          scratchCtx.beginPath();
          scratchCtx.arc(Math.random() * rect.width, Math.random() * rect.height, Math.random() * 2.2, 0, Math.PI * 2);
          scratchCtx.fill();
        }
        scratchCtx.globalAlpha = 1;
        scratchCtx.fillStyle = 'rgba(255,255,255,.92)';
        scratchCtx.textAlign = 'center';
        scratchCtx.textBaseline = 'middle';
        scratchCtx.font = `600 ${Math.max(11, rect.width * .03)}px Jost, Arial`;
        scratchCtx.fillText('SCRATCH TO REVEAL', rect.width / 2, rect.height * .42 - 10);
        scratchCtx.font = `500 ${Math.max(9, rect.width * .022)}px Jost, Arial`;
        scratchCtx.fillText('A DATE MADE FOR CELEBRATION', rect.width / 2, rect.height * .42 + 16);
        scratchCtx.shadowBlur = 0;
        refreshScratchMatrix();
        scratchStage.classList.remove('is-revealed');
        if (scratchStage.parentElement) scratchStage.parentElement.classList.remove('is-revealed');
        lastX = null;
        lastY = null;
      }

      /* Brush radius scales with the card, with a bigger floor than before. */
      function scratchRadius() {
        const rect = scratchCanvas.getBoundingClientRect();
        return Math.max(38, rect.width * 0.105);
      }

      let lastX = null, lastY = null, checkQueued = false;

      /* The card is tilted with rotateX/rotateY/rotate, so clientX-rect.left is
         NOT where the finger actually is on the canvas — the brush used to land
         offset from the cursor. Invert the accumulated transform instead. */
      function accumulatedMatrix(el) {
        let matrix = new DOMMatrix();
        let node = el;
        while (node && node !== document.body) {
          const value = getComputedStyle(node).transform;
          if (value && value !== 'none') matrix = new DOMMatrix(value).multiply(matrix);
          node = node.parentElement;
        }
        return matrix;
      }

      let scratchInverse = null;

      function refreshScratchMatrix() {
        try { scratchInverse = accumulatedMatrix(scratchCanvas).inverse(); }
        catch (e) { scratchInverse = null; }
      }

      function toCanvasPoint(clientX, clientY) {
        const rect = scratchCanvas.getBoundingClientRect();
        /* the transforms rotate about the centre, so the centre is trustworthy
           even though the bounding box is not */
        let dx = clientX - (rect.left + rect.width / 2);
        let dy = clientY - (rect.top + rect.height / 2);
        if (scratchInverse) {
          const point = scratchInverse.transformPoint(new DOMPoint(dx, dy, 0, 1));
          dx = point.x; dy = point.y;
        }
        return { x: dx + scratchCanvas.offsetWidth / 2, y: dy + scratchCanvas.offsetHeight / 2 };
      }

      function scratchPoint(x, y) {
        const radius = scratchRadius();
        scratchCtx.globalCompositeOperation = 'destination-out';
        /* soft edge so the reveal does not look like stamped circles */
        scratchCtx.shadowColor = 'rgba(0,0,0,1)';
        scratchCtx.shadowBlur = radius * 0.45;
        scratchCtx.lineCap = 'round';
        scratchCtx.lineJoin = 'round';
        scratchCtx.lineWidth = radius * 2;
        scratchCtx.strokeStyle = 'rgba(0,0,0,1)';
        scratchCtx.beginPath();
        if (lastX === null) {
          /* a tap with no movement still needs a mark */
          scratchCtx.moveTo(x, y);
          scratchCtx.lineTo(x + 0.01, y + 0.01);
        } else {
          scratchCtx.moveTo(lastX, lastY);
          scratchCtx.lineTo(x, y);
        }
        scratchCtx.stroke();
        scratchCtx.shadowBlur = 0;
        lastX = x; lastY = y;
      }

      function scratchAt(event) {
        if (!scratching || scratchStage.classList.contains('is-revealed')) return;
        /* the tilt transition is still settling right after pointerdown, so keep
           the inverse matrix current instead of trusting the pointerdown value */
        refreshScratchMatrix();
        /* coalesced events give every sample the OS captured between frames,
           so a fast swipe draws a continuous line instead of a dotted trail */
        const points = (typeof event.getCoalescedEvents === 'function')
          ? event.getCoalescedEvents() : [event];
        (points.length ? points : [event]).forEach(raw => {
          const point = toCanvasPoint(raw.clientX, raw.clientY);
          scratchPoint(point.x, point.y);
        });
        queueScratchCheck();
        sparkleWhileScratching();
      }

      /* small crackers going off around the heart as you scratch */
      let lastSpark = 0;
      function sparkleWhileScratching() {
        if (typeof createFireworkBurst !== 'function') return;
        if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const now = performance.now();
        if (now - lastSpark < 430) return;
        lastSpark = now;
        const rect = scratchStage.getBoundingClientRect();
        const x = rect.left + rect.width * (Math.random() < .5 ? -.12 - Math.random() * .18 : 1.12 + Math.random() * .18);
        const y = rect.top + rect.height * (0.05 + Math.random() * 0.55);
        createFireworkBurst(
          Math.min(window.innerWidth - 10, Math.max(10, x)),
          Math.max(40, y),
          fireworkColours[Math.floor(Math.random() * fireworkColours.length)]
        );
      }

      /* The coverage test reads the whole bitmap, so run it at most once a
         frame instead of on every pointer sample. */
      function queueScratchCheck() {
        if (checkQueued) return;
        checkQueued = true;
        requestAnimationFrame(() => {
          checkQueued = false;
          checkScratch();
        });
      }

      function checkScratch() {
        const sample = scratchCtx.getImageData(0, 0, scratchCanvas.width, scratchCanvas.height).data;
        const step = 4 * 64;
        let transparent = 0, total = 0;
        for (let i = 3; i < sample.length; i += step) {
          total++;
          if (sample[i] < 30) transparent++;
        }
        if (total && transparent / total > .28 && !scratchStage.classList.contains('is-revealed')) {
          scratchStage.classList.add('is-revealed');
          if (scratchStage.parentElement) scratchStage.parentElement.classList.add('is-revealed');
          celebrateScratch();
        }
      }

      /* burst from the middle of the heart, plus a couple of side pops */
      function celebrateScratch() {
        if (typeof window.__confetti !== 'function') return;
        const rect = scratchStage.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        window.__confetti(cx, cy);
        setTimeout(() => window.__confetti(cx - rect.width * .32, cy + 20), 160);
        setTimeout(() => window.__confetti(cx + rect.width * .32, cy + 20), 300);
      }

      function endScratch() {
        scratching = false;
        window.__freezeTilt = false;
        lastX = null; lastY = null;
        checkScratch();
      }

      scratchCanvas.addEventListener('pointerdown', event => {
        if (scratchStage.classList.contains('is-revealed')) return;
        scratching = true;
        lastX = null; lastY = null;
        window.__freezeTilt = true;
        refreshScratchMatrix();
        try { scratchCanvas.setPointerCapture(event.pointerId); } catch (e) {}
        scratchAt(event);
      });
      scratchCanvas.addEventListener('pointermove', scratchAt);
      scratchCanvas.addEventListener('pointerup', endScratch);
      scratchCanvas.addEventListener('pointerleave', () => { lastX = null; lastY = null; });
      scratchCanvas.addEventListener('pointercancel', endScratch);
      scratchReset.addEventListener('click', drawScratchCover);
      new ResizeObserver(drawScratchCover).observe(scratchStage);
    })();