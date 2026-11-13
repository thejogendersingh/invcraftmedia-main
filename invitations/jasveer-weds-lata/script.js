window.inviteutsavSiyaramData = {
  "bride": { "name": "Lata", "shortName": "Lata", "father": "Shri Tulsi Ram", "mother": "Smt. Kamlesh" },
  "groom": { "name": "Jasveer Singh", "shortName": "Jasveer Singh", "father": "Shri Bhagat Ram", "mother": "Smt. Tripta Devi" },
  "wedding": { "dateISO": "2026-12-01T15:50:00+05:30", "hasDate": true, "dateDisplay": "1 December 2026", "dateNum": "01", "month": "DEC", "year": "2026", "city": "Mahlera, Krishangarh (Kuthar), Solan, Himachal Pradesh", "musicSrc": "./assets/intro-bgm.mp3" },
  "events": [],
  "venues": [],
  "journey": [],
  "accommodation": [],
  "gallery": [],
  "rsvp": { "contacts": [] },
  "ui": { "sending": "भेजा जा रहा है…", "error": "कृपया पुनः प्रयास करें।", "network": "नेटवर्क त्रुटि। कृपया पुनः प्रयास करें।" }
};

/*
 * Siyaram Raghukul — invitation script.
 *   1. layout   : text areas grow with their content, so the layers below them are shifted by the measured growth (design units)
 *   2. motion   : hero intro, scroll reveals, parallax, birds, message word-lighting (original design)
 *   3. features : photo carousel, countdown, music, copy buttons, video, guest RSVP (the site's own RSVP endpoint)
 * Everything the guest reads is already server-rendered in the invitation language (template-parts/siyaram-raghukul/invitation.php);
 * this file only measures, animates and wires interactions. No external libraries.
 */
(function () {
  'use strict';

  var root = document.getElementById('siyaram-invitation');
  if (!root) { return; }
  var data = window.inviteutsavSiyaramData || {};
  var rsvpCfg = window.siyaramRsvp || {};
  var ui = data.ui || {};
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var raf = window.requestAnimationFrame.bind(window);
  var desktopQuery = window.matchMedia('(min-width:1024px)');

  function $(sel, scope) { return (scope || root).querySelector(sel); }
  function $$(sel, scope) { return Array.prototype.slice.call((scope || root).querySelectorAll(sel)); }
  function el(tag, className, text) {
    var n = document.createElement(tag);
    if (className) { n.className = className; }
    if (text !== undefined) { n.textContent = text; }
    return n;
  }
  function unit() {
    var page = $('.siyaram-page');
    var w = page ? page.getBoundingClientRect().width : root.getBoundingClientRect().width;
    return w / (desktopQuery.matches ? 1440 : 390);
  }
  function cssNum(name) { return parseFloat(getComputedStyle(root).getPropertyValue(name)) || 0; }

  /* ---------- desktop variants for plain <img> elements ---------- */
  function swapDesktopSources() {
    $$('img[data-siyaram-desktop-src]').forEach(function (img) {
      if (!img.hasAttribute('data-siyaram-mobile-src')) { img.setAttribute('data-siyaram-mobile-src', img.getAttribute('src')); }
      img.setAttribute('src', desktopQuery.matches ? img.getAttribute('data-siyaram-desktop-src') : img.getAttribute('data-siyaram-mobile-src'));
    });
  }
  swapDesktopSources();

  /* ---------- 1. LAYOUT ---------- */
  var names = $$('.siyaram-details__name, .siyaram-hero__name');
  function fitNames() {
    var u = unit();
    var range = document.createRange();
    names.forEach(function (node) {
      var max = parseFloat(getComputedStyle(node).getPropertyValue('--fit-w')) || parseFloat(getComputedStyle(node.parentElement).getPropertyValue('--fit-w')) || 0;
      if (!max) { return; }
      node.style.setProperty('--siyaram-fit', '1');
      range.selectNodeContents(node);
      var natural = range.getBoundingClientRect().width;
      var limit = max * u;
      node.style.setProperty('--siyaram-fit', natural > limit ? (limit / natural).toFixed(3) : '1');
    });
  }

  /* Very long ceremony names shrink until date, name and time fit inside the card frame. */
  function fitEventTitles() {
    $$('.siyaram-event__body').forEach(function (body) {
      body.style.setProperty('--siyaram-tfit', '1');
      var k = 1;
      var guard = 0;
      var limit = body.clientHeight * 0.64; // the frame's inner window is shorter than the box
      var last = body.lastElementChild;
      while (last && last.offsetTop + last.offsetHeight > limit && k > 0.4 && guard++ < 16) {
        k -= 0.04;
        body.style.setProperty('--siyaram-tfit', k.toFixed(2));
      }
    });
  }

  function markRows() {
    var items = $$('.siyaram-event');
    if (!items.length) { return; }
    var tops = items.map(function (n) { return n.offsetTop; });
    var maxTop = Math.max.apply(null, tops);
    items.forEach(function (n, i) {
      n.classList.toggle('is-last-row', tops[i] === maxTop);
      n.classList.toggle('is-row-end', i === items.length - 1 || tops[i + 1] !== tops[i]);
    });
  }

  function setVar(name, value) { root.style.setProperty(name, String(Math.round(value * 10) / 10)); }
  function minUnits(node) { return node ? parseFloat(getComputedStyle(node).minHeight) / unit() : 0; }

  var layoutQueued = false;
  function layout() {
    layoutQueued = false;
    var u = unit();
    if (!u) { return; }
    fitNames();
    fitEventTitles();
    markRows();

    var panel = $('.siyaram-details__panel');
    setVar('--dy1', panel ? Math.max(0, panel.offsetHeight / u - minUnits(panel)) : 0);

    var flow = $('.siyaram-timeline__flow');
    setVar('--dy2', flow ? flow.offsetHeight / u - cssNum('--base-flow') : -cssNum('--base-flow')); // no ceremonies: the block collapses

    var card = $('.siyaram-couple__card');
    setVar('--dy3', card ? Math.max(0, card.offsetHeight / u - minUnits(card)) : 0);

    setVar('--dyg', $('.siyaram-carousel') ? cssNum('--gallery-extra') : -cssNum('--base-gallery')); // photos are 4:5, taller than the original landscape window

    var venues = $('.siyaram-venues');
    setVar('--dyv', venues ? venues.offsetHeight / u - cssNum('--base-venue') : -cssNum('--base-venue'));

    var rsvp = $('.siyaram-rsvp');
    setVar('--dyr', rsvp ? rsvp.offsetHeight / u - cssNum('--base-rsvp') : -cssNum('--base-rsvp'));
  }
  function requestLayout() { if (!layoutQueued) { layoutQueued = true; raf(layout); } }
  window.addEventListener('resize', function () { swapDesktopSources(); requestLayout(); });
  if (desktopQuery.addEventListener) { desktopQuery.addEventListener('change', function () { swapDesktopSources(); requestLayout(); }); }
  if (document.fonts && document.fonts.ready) { document.fonts.ready.then(requestLayout); }
  window.addEventListener('load', requestLayout);
  requestLayout();
  if (window.ResizeObserver) {
    var ro = new ResizeObserver(requestLayout);
    ['.siyaram-details__panel', '.siyaram-timeline__flow', '.siyaram-couple__card', '.siyaram-venues', '.siyaram-rsvp'].forEach(function (s) { var n = $(s); if (n) { ro.observe(n); } });
  }

  /* ---------- 2. MOTION ---------- */
  function startIntro() { root.classList.add('siyaram-is-ready'); }
  startIntro();
  var heroImages = $$('.siyaram-hero img').slice(0, 6);
  var pending = heroImages.filter(function (im) { return !im.complete; }).length;
  if (!pending) { startIntro(); }
  else {
    heroImages.forEach(function (im) {
      if (im.complete) { return; }
      var done = function () { pending -= 1; if (pending <= 0) { startIntro(); } };
      im.addEventListener('load', done, { once: true });
      im.addEventListener('error', done, { once: true });
    });
    window.setTimeout(startIntro, 400);
  }

  var reveals = $$('.siyaram-reveal');
  reveals.forEach(function (node) {
    var delay = node.getAttribute('data-siyaram-delay');
    if (delay) { node.style.setProperty('--siyaram-delay', delay + 'ms'); }
  });
  if ('IntersectionObserver' in window && !reduceMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('siyaram-is-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(function (node) { observer.observe(node); });
  } else {
    reveals.forEach(function (node) { node.classList.add('siyaram-is-visible'); });
  }

  // The couple's message lights up word by word as it scrolls into view.
  var message = $('.siyaram-couple__message');
  if (message) {
    // The owner's own line breaks stay: each typed line is lit word by word, with a line break between lines.
    var lines = message.textContent.trim().split(/\r?\n+/);
    message.textContent = '';
    lines.forEach(function (line, li) {
      var words = line.trim().split(/\s+/).filter(Boolean);
      if (li > 0) { message.appendChild(document.createElement('br')); }
      words.forEach(function (word, idx) {
        message.appendChild(el('span', 'siyaram-message__word', word));
        if (idx < words.length - 1) { message.appendChild(document.createTextNode(' ')); }
      });
    });
  }
  var messageWords = $$('.siyaram-message__word');
  var parallaxNodes = $$('[data-siyaram-parallax]').map(function (n) { return { node: n, factor: parseFloat(n.getAttribute('data-siyaram-parallax')) || 0 }; });
  var scheduled = false;
  function update() {
    scheduled = false;
    var rect = root.getBoundingClientRect();
    var scrolled = Math.max(0, -rect.top);
    var limit = 1300 * unit();
    if (!reduceMotion) {
      var y = Math.min(scrolled, limit);
      parallaxNodes.forEach(function (item) { item.node.style.setProperty('--siyaram-py', (y * item.factor).toFixed(1) + 'px'); });
    }
    if (message && messageWords.length) {
      var box = message.getBoundingClientRect();
      var vh = window.innerHeight;
      var progress = (vh * 0.82 - box.top) / (vh * 0.55 + box.height * 0.2);
      progress = Math.min(1, Math.max(0, progress));
      var lit = reduceMotion ? messageWords.length : Math.round(progress * messageWords.length);
      messageWords.forEach(function (w, i) { w.classList.toggle('siyaram-is-lit', i < lit); });
    }
  }
  function requestUpdate() { if (!scheduled) { scheduled = true; raf(update); } }
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  requestUpdate();

  // Small flowers drifting down from the top of the screen (fixed canvas, drawn in code, very soft).
  if (!reduceMotion) {
    var fc = document.createElement('canvas');
    fc.className = 'siyaram-petals';
    fc.setAttribute('aria-hidden', 'true');
    document.body.appendChild(fc);
    var fx = fc.getContext('2d');
    var fw = 0;
    var fh = 0;
    var fdpr = Math.min(window.devicePixelRatio || 1, 2);
    var flowers = [];
    var fcolors = ['#d9822b', '#b24304', '#e0a458', '#c2556b'];
    var fsize = function () {
      fw = window.innerWidth; fh = window.innerHeight;
      fc.width = Math.round(fw * fdpr); fc.height = Math.round(fh * fdpr);
      fx.setTransform(fdpr, 0, 0, fdpr, 0, 0);
    };
    fsize();
    window.addEventListener('resize', fsize);
    var fcount = fw < 700 ? 14 : 24;
    for (var q = 0; q < fcount; q += 1) {
      flowers.push({ x: Math.random(), y: Math.random() * -1, r: 4 + Math.random() * 4, vy: 22 + Math.random() * 28, sway: 12 + Math.random() * 22, ph: Math.random() * 6.28, rot: Math.random() * 6.28, vr: (Math.random() - 0.5) * 1.2, c: fcolors[q % fcolors.length] });
    }
    var drawFlower = function (f, px, py) {
      fx.save();
      fx.translate(px, py);
      fx.rotate(f.rot);
      fx.fillStyle = f.c;
      for (var k = 0; k < 5; k += 1) {
        fx.rotate(1.2566);
        fx.beginPath();
        fx.ellipse(0, -f.r * 0.62, f.r * 0.36, f.r * 0.62, 0, 0, 6.2832);
        fx.fill();
      }
      fx.fillStyle = '#fff3d6';
      fx.beginPath();
      fx.arc(0, 0, f.r * 0.22, 0, 6.2832);
      fx.fill();
      fx.restore();
    };
    var flast = performance.now();
    var fall = function (now) {
      var dt = Math.min(0.05, (now - flast) / 1000);
      flast = now;
      if (!document.hidden) {
        fx.clearRect(0, 0, fw, fh);
        flowers.forEach(function (f) {
          f.y += f.vy * dt / fh;
          f.ph += dt * 1.1;
          f.rot += f.vr * dt;
          if (f.y > 1.05) { f.y = -0.05; f.x = Math.random(); }
          drawFlower(f, f.x * fw + Math.sin(f.ph) * f.sway, f.y * fh);
        });
      }
      requestAnimationFrame(fall);
    };
    requestAnimationFrame(fall);
  }

  // Soft lamp lights rising through the hero (replaces the flock of birds).
  var canvas = $('.siyaram-hero__birds');
  if (canvas && canvas.getContext && !reduceMotion) {
    var ctx = canvas.getContext('2d');
    var birds = [];
    var heroVisible = true;
    var width = 0;
    var height = 0;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var sizeCanvas = function () {
      var b = canvas.getBoundingClientRect();
      width = Math.max(1, b.width); height = Math.max(1, b.height);
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    sizeCanvas();
    window.addEventListener('resize', sizeCanvas);
    for (var i = 0; i < 16; i += 1) {
      birds.push({ x: 0.08 + Math.random() * 0.84, y: 0.35 + Math.random() * 0.6, vy: 0.012 + Math.random() * 0.02, sway: 0.006 + Math.random() * 0.012, size: 0.7 + Math.random() * 1.1, phase: Math.random() * 6.28 });
    }    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) { heroVisible = entries[0].isIntersecting; }).observe(canvas);
    }
    var last = performance.now();
    var fly = function (now) {
      var dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (heroVisible) {
        ctx.clearRect(0, 0, width, height);
        var scale = width / 395;
        birds.forEach(function (b) {
          b.y -= b.vy * dt;
          b.phase += dt * 2.2;
          if (b.y < 0.08) { b.y = 0.98; b.x = 0.08 + Math.random() * 0.84; }
          var px = (b.x + Math.sin(b.phase) * b.sway) * width;
          var py = b.y * height;
          var r = (2.2 + Math.sin(b.phase * 3.1) * 0.5) * b.size * scale;
          var fade = Math.min(1, b.y / 0.25) * Math.min(1, (1 - b.y) / 0.12);
          var g = ctx.createRadialGradient(px, py, 0, px, py, r * 4.2);
          g.addColorStop(0, 'rgba(255,214,128,' + (0.85 * fade).toFixed(3) + ')');
          g.addColorStop(0.35, 'rgba(255,170,70,' + (0.34 * fade).toFixed(3) + ')');
          g.addColorStop(1, 'rgba(255,150,50,0)');
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(px, py, r * 4.2, 0, 6.2832);
          ctx.fill();
          ctx.fillStyle = 'rgba(255,240,200,' + (0.95 * fade).toFixed(3) + ')';
          ctx.beginPath();
          ctx.arc(px, py, r * 0.55, 0, 6.2832);
          ctx.fill();        });
      }
      raf(fly);
    };
    raf(fly);
  }

  /* ---------- 2b. WEDDING DATE REVEAL: three scratch hearts + fireworks (same mechanic as the Shubh Patrika letter theme) ---------- */
  (function dateReveal() {
    var box = $('#siyaramDate');
    if (!box) { return; }
    var hearts = $$('.siyaram-date__heart', box);
    var cursor = $('#siyaramScratchCursor');
    var trigger = function () {};

    // fireworks on both sides, started once all three hearts are revealed
    var leftC = $('#siyaramFireworksLeft');
    var rightC = $('#siyaramFireworksRight');
    if (leftC && rightC && !reduceMotion) {
      var COLORS = ['#ecc87a', '#fff1d0', '#d9822b', '#e8aebb', '#c2556b', '#f4d98f'];
      var SIZE = {
        small: { rise: 0.013, count: [8, 14], speed: [0.6, 1.6], decay: [0.02, 0.034], dot: [1, 2], ty: [0.24, 0.4] },
        medium: { rise: 0.017, count: [16, 24], speed: [0.9, 2.2], decay: [0.014, 0.026], dot: [1.2, 2.4], ty: [0.16, 0.32] },
        large: { rise: 0.021, count: [26, 40], speed: [1.3, 3.1], decay: [0.009, 0.018], dot: [1.6, 3.1], ty: [0.08, 0.22] }
      };
      var rigs = [{ canvas: leftC, side: 'left' }, { canvas: rightC, side: 'right' }].map(function (r) {
        return { canvas: r.canvas, side: r.side, ctx: r.canvas.getContext('2d'), dpr: Math.min(window.devicePixelRatio || 1, 2), parts: [], running: false, launching: false, w: 0, h: 0 };
      });
      var sizeRig = function (rig) {
        var b = rig.canvas.getBoundingClientRect();
        rig.w = b.width; rig.h = b.height;
        rig.canvas.width = Math.max(1, b.width * rig.dpr); rig.canvas.height = Math.max(1, b.height * rig.dpr);
        rig.ctx.setTransform(rig.dpr, 0, 0, rig.dpr, 0, 0);
      };
      rigs.forEach(sizeRig);
      window.addEventListener('resize', function () { rigs.forEach(sizeRig); }, { passive: true });
      var rnd = function (a, b) { return a + Math.random() * (b - a); };
      var launch = function (rig, size, style) {
        var cfg = SIZE[size];
        var left = rig.side === 'left';
        var ox = left ? rig.w * rnd(0.05, 0.23) : rig.w * rnd(0.77, 0.95);
        var tx = left ? rig.w * rnd(0.18, 0.18 + (size === 'large' ? 0.4 : 0.3)) : rig.w * rnd(0.44, 0.44 + (size === 'large' ? 0.4 : 0.3));
        rig.parts.push({ kind: 'shell', x: ox, y: rig.h, vx: (tx - ox) / rnd(56, 70), vy: -(rig.h * cfg.rise + Math.random() * 1.8), ty: rig.h * rnd(cfg.ty[0], cfg.ty[1]), color: COLORS[Math.floor(Math.random() * COLORS.length)], size: size, style: style, r: size === 'large' ? 2.6 : size === 'small' ? 1.4 : 2, trail: [] });
      };
      var explode = function (rig, sh) {
        var cfg = SIZE[sh.size];
        var n = Math.floor(rnd(cfg.count[0], cfg.count[1]));
        for (var i = 0; i < n; i += 1) {
          var ang = (Math.PI * 2 * i) / n + Math.random() * 0.3;
          var sp = rnd(cfg.speed[0], cfg.speed[1]);
          var decay = rnd(cfg.decay[0], cfg.decay[1]);
          var grav = 0.026;
          if (sh.style === 'peony') { sp *= 0.7 + Math.random() * 0.7; }
          if (sh.style === 'willow') { sp *= 0.55; decay *= 0.55; grav = 0.05; }
          rig.parts.push({ kind: 'spark', x: sh.x, y: sh.y, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp, g: grav, life: 1, decay: decay, color: sh.color, size: rnd(cfg.dot[0], cfg.dot[1]) });
        }
      };
      var tick = function (rig) {
        if (!rig.running) { return; }
        var ctx = rig.ctx;
        ctx.clearRect(0, 0, rig.w, rig.h);
        for (var i = rig.parts.length - 1; i >= 0; i -= 1) {
          var p = rig.parts[i];
          if (p.kind === 'shell') {
            p.trail.push({ x: p.x, y: p.y });
            if (p.trail.length > 6) { p.trail.shift(); }
            p.x += p.vx; p.y += p.vy; p.vy += 0.05;
            ctx.fillStyle = p.color;
            for (var t = 0; t < p.trail.length; t += 1) {
              ctx.globalAlpha = ((t + 1) / p.trail.length) * 0.36;
              ctx.beginPath(); ctx.arc(p.trail[t].x, p.trail[t].y, p.r * 0.65, 0, 6.2832); ctx.fill();
            }
            ctx.globalAlpha = 0.92; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.2832); ctx.fill();
            if (p.vy >= -0.3 || p.y <= p.ty) { explode(rig, p); rig.parts.splice(i, 1); }
          } else {
            p.x += p.vx; p.y += p.vy; p.vy += p.g; p.vx *= 0.99; p.life -= p.decay;
            if (p.life <= 0) { rig.parts.splice(i, 1); continue; }
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.life * 0.22; ctx.beginPath(); ctx.arc(p.x, p.y, p.size * 2.8, 0, 6.2832); ctx.fill();
            ctx.globalAlpha = p.life; ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, 6.2832); ctx.fill();
          }
        }
        ctx.globalAlpha = 1;
        if (!rig.launching && rig.parts.length === 0) { rig.running = false; ctx.clearRect(0, 0, rig.w, rig.h); return; }
        raf(function () { tick(rig); });
      };
      var PROGRAM = [[0, 'large', 'peony'], [260, 'small', 'ring'], [700, 'medium', 'willow'], [1150, 'large', 'ring'], [1600, 'small', 'peony'], [2100, 'medium', 'peony'], [2600, 'large', 'willow']];
      var start = function (rig, offset) {
        if (rig.running) { return; }
        rig.running = true; rig.launching = true;
        var last = 0;
        PROGRAM.forEach(function (s) {
          var d = Math.max(0, s[0] + offset + (Math.random() - 0.5) * 220);
          last = Math.max(last, d);
          window.setTimeout(function () { launch(rig, s[1], s[2]); }, d);
        });
        window.setTimeout(function () { rig.launching = false; }, last + 150);
        raf(function () { tick(rig); });
      };
      trigger = function () { sizeRig(rigs[0]); sizeRig(rigs[1]); start(rigs[0], 0); start(rigs[1], 180); };
    }

    var revealedCount = 0;
    hearts.forEach(function (heart) {
      var canvas = document.createElement('canvas');
      canvas.className = 'siyaram-date__canvas';
      heart.appendChild(canvas);
      var ctx = canvas.getContext('2d');
      var w = 0;
      var h = 0;
      var revealed = false;
      var scratching = false;
      var touched = false;
      var tickCount = 0;
      var paint = function () {
        var b = heart.getBoundingClientRect();
        w = canvas.width = Math.max(1, Math.round(b.width));
        h = canvas.height = Math.max(1, Math.round(b.height));
        var g = ctx.createLinearGradient(0, 0, w, h);
        var foil = getComputedStyle(document.getElementById('siyaram-invitation') || document.body); g.addColorStop(0, foil.getPropertyValue('--siyaram-foil-a').trim() || '#a8452a'); g.addColorStop(0.5, foil.getPropertyValue('--siyaram-foil-b').trim() || '#7a2418'); g.addColorStop(1, foil.getPropertyValue('--siyaram-foil-c').trim() || '#4b0f16'); // reddish-brown foil, clear against the saffron parchment
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = 'rgba(255,214,150,.20)'; ctx.lineWidth = 2;
        for (var x = -h; x < w; x += 11) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + h, h); ctx.stroke(); }
      };
      paint();
      if (document.fonts && document.fonts.ready) { document.fonts.ready.then(function () { if (!touched && !revealed) { paint(); } }); }
      window.addEventListener('resize', function () { if (!touched && !revealed) { paint(); } }, { passive: true });
      // the invitation scales with its width; repaint once layout has settled so the foil matches the heart box
      window.setTimeout(function () { if (!touched && !revealed) { paint(); } }, 1200);
      var point = function (e) { var r = canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
      var scratch = function (x, y) {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath(); ctx.arc(x, y, Math.max(14, w * 0.2), 0, 6.2832); ctx.fill();
      };
      var done = function () {
        if (revealed) { return; }
        revealed = true;
        canvas.classList.add('is-revealed');
        if (cursor) { cursor.classList.remove('is-active', 'is-scratching'); }
        window.setTimeout(function () { canvas.style.visibility = 'hidden'; }, 550);
        revealedCount += 1;
        if (revealedCount >= hearts.length) { trigger(); }
      };
      var check = function () {
        tickCount += 1;
        if (tickCount % 4 !== 0) { return; }
        var d = ctx.getImageData(0, 0, w, h).data;
        var cleared = 0;
        var total = 0;
        for (var i = 3; i < d.length; i += 24) { total += 1; if (d[i] < 40) { cleared += 1; } }
        if (total && cleared / total > 0.55) { done(); }
      };
      var moveCursor = function (e) { if (cursor && e.pointerType === 'mouse') { cursor.style.left = e.clientX + 'px'; cursor.style.top = e.clientY + 'px'; } };
      canvas.addEventListener('pointerdown', function (e) {
        if (revealed) { return; }
        touched = true; scratching = true;
        try { canvas.setPointerCapture(e.pointerId); } catch (err) { /* capture unsupported */ }
        moveCursor(e);
        if (cursor && e.pointerType === 'mouse') { cursor.classList.add('is-active', 'is-scratching'); }
        var p = point(e); scratch(p.x, p.y); check();
        e.preventDefault();
      });
      canvas.addEventListener('pointermove', function (e) {
        moveCursor(e);
        if (!scratching || revealed) { return; }
        var p = point(e); scratch(p.x, p.y); check();
      });
      var stop = function (e) {
        scratching = false;
        if (cursor) { cursor.classList.remove('is-scratching'); }
        if (e && e.pointerId != null) { try { canvas.releasePointerCapture(e.pointerId); } catch (err) { /* ignore */ } }
      };
      canvas.addEventListener('pointerup', stop);
      canvas.addEventListener('pointercancel', stop);
      canvas.addEventListener('pointerenter', function (e) { if (!revealed && cursor && e.pointerType === 'mouse') { cursor.classList.add('is-active'); } });
      canvas.addEventListener('pointerleave', function () { if (!scratching && cursor) { cursor.classList.remove('is-active'); } });
      heart.addEventListener('click', function () {
        if (!revealed) {
          done();
        }
      });
    });

    if ('IntersectionObserver' in window) {
      var dateObs = new IntersectionObserver(function (entries) {
        if (entries[0] && entries[0].isIntersecting) {
          hearts.forEach(function (h) {
            var cv = h.querySelector('.siyaram-date__canvas');
            if (cv && !cv.classList.contains('is-revealed')) {
              var b = h.getBoundingClientRect();
              if (b.width > 20 && Math.abs(cv.width - b.width) > 5) {
                cv.width = Math.round(b.width);
                cv.height = Math.round(b.height);
                var c = cv.getContext('2d');
                var g = c.createLinearGradient(0, 0, cv.width, cv.height);
                g.addColorStop(0, '#a8452a'); g.addColorStop(0.5, '#7a2418'); g.addColorStop(1, '#4b0f16');
                c.fillStyle = g; c.fillRect(0, 0, cv.width, cv.height);
                c.strokeStyle = 'rgba(255,214,150,.20)'; c.lineWidth = 2;
                for (var x = -cv.height; x < cv.width; x += 11) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x + cv.height, cv.height); c.stroke(); }
              }
            }
          });
        }
      }, { threshold: 0.1 });
      dateObs.observe(box);
    }
    // reduced motion: nothing to scratch, the date is simply shown
    if (reduceMotion) { $$('.siyaram-date__canvas', box).forEach(function (cv) { cv.style.display = 'none'; }); }
  })();
  /* ---------- 3. FEATURES ---------- */
  // Countdown to the wedding day.
  var cd = $('[data-siyaram-date]');
  if (cd) {
    var target = new Date(cd.getAttribute('data-siyaram-date')).getTime();
    var units = { days: $('[data-siyaram-unit="days"]', cd), hours: $('[data-siyaram-unit="hours"]', cd), minutes: $('[data-siyaram-unit="minutes"]', cd), seconds: $('[data-siyaram-unit="seconds"]', cd) };
    var pad = function (n) { return n < 10 ? '0' + n : String(n); };
    var tick = function () {
      var total = Math.floor(Math.max(0, target - Date.now()) / 1000);
      units.days.textContent = pad(Math.floor(total / 86400));
      units.hours.textContent = pad(Math.floor((total % 86400) / 3600));
      units.minutes.textContent = pad(Math.floor((total % 3600) / 60));
      units.seconds.textContent = pad(total % 60);
      units.days.style.setProperty('--p', Math.min(100, Math.floor(total / 86400)).toString());
      units.hours.style.setProperty('--p', (Math.floor((total % 86400) / 3600) / 24 * 100).toFixed(1));
      units.minutes.style.setProperty('--p', (Math.floor((total % 3600) / 60) / 60 * 100).toFixed(1));
      units.seconds.style.setProperty('--p', ((total % 60) / 60 * 100).toFixed(1));
    };
    if (!isNaN(target)) { tick(); window.setInterval(tick, 1000); }
  }

  // Background music.
  var musicBtn = $('.siyaram-music');
  var audio = $('.siyaram-music__audio');
  if (musicBtn && audio) {
    var syncMusic = function () { root.classList.toggle('siyaram-is-music-playing', !audio.paused); musicBtn.setAttribute('aria-pressed', audio.paused ? 'false' : 'true'); };
    musicBtn.addEventListener('click', function () { if (audio.paused) { audio.play().then(syncMusic, syncMusic); } else { audio.pause(); syncMusic(); } });
    // Music starts when the invitation opens. Browsers block sound before the visitor interacts, so if the first try is refused it is retried
    // on every interaction until one is accepted. Android Chrome only accepts a play() started from a finished tap (touchend / pointerup /
    // click) - NOT from touchstart / pointerdown (the old listener tried there, was refused, and then removed itself, so music never started) and
    // not from a scroll or swipe. Scroll / swipe are still tried (harmless when refused, and they work where the browser already allows sound).
    audio.preload = 'auto'; // buffered by the time of the first tap, so sound starts at once
    var startMusic = function () { var p = audio.play(); if (p && p.then) { p.then(syncMusic, armMusic); } };
    var armed = false;
    var armMusic = function () {
      if (armed) { return; }
      armed = true;
      var tapEvents = ['touchend', 'pointerup', 'mouseup', 'click', 'keydown'];
      var tryEvents = ['scroll', 'wheel', 'touchmove'];
      var lastTry = 0;
      var disarm = function () {
        tapEvents.concat(tryEvents).forEach(function (t) { document.removeEventListener(t, go, true); window.removeEventListener(t, go, true); });
      };
      var go = function (ev) {
        if (ev && ev.target && ev.target.nodeType === 1 && musicBtn.contains(ev.target)) { return; } // the button handles its own tap
        if (!audio.paused || musicBtn.__userPaused) { if (!audio.paused) { disarm(); } return; }
        var now = Date.now();
        if (now - lastTry < 400) { return; }
        lastTry = now;
        var p = audio.play();
        if (p && p.then) { p.then(function () { syncMusic(); disarm(); }, function () { /* refused: stay armed for the next interaction */ }); }
        else { disarm(); }
      };
      tapEvents.forEach(function (t) { document.addEventListener(t, go, true); });
      tryEvents.forEach(function (t) { document.addEventListener(t, go, true); window.addEventListener(t, go, true); });
    };
    musicBtn.addEventListener('click', function () { musicBtn.__userPaused = !audio.paused; }, true);
    // Opening screen: its button is the visitor's first tap, so the music starts together with the invitation opening (even on Android).
    var gate = document.getElementById('siyaram-gate');
    var gateBtn = document.getElementById('siyaram-gate-btn');
    if (gate && gateBtn) {
      var htmlEl = document.documentElement;
      htmlEl.classList.add('siyaram-gate-lock');
      gateBtn.addEventListener('click', function () {
        var p = audio.play(); // called inside the tap, which is what lets the browser start sound
        if (p && p.then) { p.then(syncMusic, armMusic); }
        htmlEl.classList.remove('siyaram-gate-lock');
        gate.classList.add('is-leaving');
        window.setTimeout(function () { if (gate.parentNode) { gate.parentNode.removeChild(gate); } }, 900);
      });
    }
    if (document.readyState === 'complete') { startMusic(); } else { window.addEventListener('load', startMusic); }
    audio.addEventListener('play', syncMusic);
    audio.addEventListener('pause', syncMusic);
  }

  // Copy buttons (venue address, hashtag).
  function copyText(text, done) {
    if (navigator.clipboard && window.isSecureContext) { navigator.clipboard.writeText(text).then(done, done); return; }
    var ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch (e) { /* ignore */ }
    document.body.removeChild(ta); done();
  }
  root.addEventListener('click', function (event) {
    var t = event.target.closest ? event.target.closest('[data-siyaram-copy]') : null;
    if (!t || !root.contains(t)) { return; }
    var hint = t.classList.contains('siyaram-hashtag__pill') ? $('.siyaram-hashtag__hint') : null;
    copyText(t.getAttribute('data-siyaram-copy'), function () {
      t.classList.add('siyaram-is-copied');
      if (hint) { hint.textContent = hint.getAttribute('data-hint-done'); hint.classList.add('siyaram-is-copied'); }
      window.setTimeout(function () {
        t.classList.remove('siyaram-is-copied');
        if (hint) { hint.textContent = hint.getAttribute('data-hint-default'); hint.classList.remove('siyaram-is-copied'); }
      }, 1800);
    });
  });

  // Pre-wedding film: the poster turns into the player on tap.
  root.addEventListener('click', function (event) {
    var b = event.target.closest ? event.target.closest('[data-siyaram-video]') : null;
    if (!b || !root.contains(b)) { return; }
    var url = b.getAttribute('data-siyaram-video');
    var frame = document.createElement('iframe');
    frame.src = url + (url.indexOf('?') > -1 ? '&' : '?') + 'autoplay=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=' + encodeURIComponent(window.location.origin);
    frame.title = '';
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    b.parentNode.replaceChild(frame, b);
    if (window.inviteutsavWatchYouTube) { window.inviteutsavWatchYouTube(frame); } // pauses the music while the film plays
  });

  // Photo carousel: autoplay, arrows, dots, swipe, keyboard.
  (function () {
    var box = $('.siyaram-carousel');
    var track = box ? $('.siyaram-carousel__track', box) : null;
    if (!box || !track) { return; }
    var slideNodes = $$('.siyaram-carousel__slide', box);
    var dots = $$('.siyaram-carousel__dot', box);
    var total = slideNodes.length;
    if (total < 2) { return; }
    var delay = 4500;
    var index = 0;
    var timer = null;
    var paused = false;
    var visible = true;
    function render(dragOffset) {
      track.style.transition = dragOffset === undefined ? '' : 'none';
      track.style.transform = 'translate3d(' + (-index * 100) + '%,0,0)' + (dragOffset ? ' translate3d(' + dragOffset + 'px,0,0)' : '');
      slideNodes.forEach(function (n, i) { n.setAttribute('aria-hidden', i === index ? 'false' : 'true'); });
      dots.forEach(function (d, i) { d.classList.toggle('siyaram-is-active', i === index); });
    }
    function restart() {
      window.clearInterval(timer);
      if (reduceMotion || paused || !visible) { return; }
      timer = window.setInterval(function () { index = (index + 1) % total; render(); }, delay);
    }
    function goTo(next) { index = (next + total) % total; render(); restart(); }
    box.addEventListener('click', function (event) {
      var n = event.target.closest ? event.target.closest('[data-siyaram-action],[data-siyaram-slide]') : null;
      if (!n) { return; }
      if (n.hasAttribute('data-siyaram-slide')) { goTo(parseInt(n.getAttribute('data-siyaram-slide'), 10) || 0); return; }
      var a = n.getAttribute('data-siyaram-action');
      if (a === 'carousel-prev') { goTo(index - 1); } else if (a === 'carousel-next') { goTo(index + 1); }
    });
    box.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') { goTo(index - 1); } else if (e.key === 'ArrowRight') { goTo(index + 1); } });
    box.addEventListener('mouseenter', function () { paused = true; restart(); });
    box.addEventListener('mouseleave', function () { paused = false; restart(); });
    box.addEventListener('focusin', function () { paused = true; restart(); });
    box.addEventListener('focusout', function () { paused = false; restart(); });
    var startX = null; var dragged = 0;
    box.addEventListener('pointerdown', function (e) {
      if (e.target.closest && e.target.closest('button')) { return; }
      startX = e.clientX; dragged = 0; paused = true; restart();
      try { box.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
    });
    box.addEventListener('pointermove', function (e) { if (startX === null) { return; } dragged = e.clientX - startX; render(dragged); });
    function endDrag() {
      if (startX === null) { return; }
      var threshold = box.clientWidth * 0.15;
      startX = null; paused = false;
      if (dragged < -threshold) { goTo(index + 1); } else if (dragged > threshold) { goTo(index - 1); } else { render(); restart(); }
      dragged = 0;
    }
    box.addEventListener('pointerup', endDrag);
    box.addEventListener('pointercancel', endDrag);
    if ('IntersectionObserver' in window) { new IntersectionObserver(function (entries) { visible = entries[0].isIntersecting; restart(); }).observe(box); }
    document.addEventListener('visibilitychange', function () { visible = !document.hidden; restart(); });
    render(); restart();
  })();

  // Guest RSVP — posts to the site's own RSVP endpoint (answers appear in the customer's dashboard).
  (function () {
    var form = document.getElementById('siyaramGuestForm');
    if (!form || !document.getElementById('siyaramGuestName')) { return; } /* contact-persons-only panel (guest form switched off) has no fields */
    var nameInput = document.getElementById('siyaramGuestName');
    var phoneInput = document.getElementById('siyaramGuestPhone');
    var noteInput = document.getElementById('siyaramGuestNote');
    var submit = $('.siyaram-rsvp__submit', form);
    var errorEl = document.getElementById('siyaramGuestError');
    var success = document.getElementById('siyaramGuestSuccess');
    var label = submit ? submit.querySelector('span') : null;
    var idleText = label ? label.textContent : '';

    function mark(input, ok) { var f = input.closest('.siyaram-rsvp__field'); if (f) { f.classList.toggle('has-error', !ok); } return ok; }
    [nameInput, phoneInput].forEach(function (i) { i.addEventListener('input', function () { mark(i, true); }); });

    var wrap = phoneInput.closest('[data-phone-field]');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var nameOk = mark(nameInput, nameInput.value.trim().length >= 2);
      var phoneOk = mark(phoneInput, (wrap && window.InviteutsavPhone) ? window.InviteutsavPhone.isValid(wrap) : /^\d{7,15}$/.test(phoneInput.value.trim()));
      if (!nameOk || !phoneOk) { (nameOk ? phoneInput : nameInput).focus(); return; }
      if (errorEl) { errorEl.hidden = true; }

      // Advanced RSVP block (wedding invitations on the new form): validated here, merged into the submission below.
      var adv = window.InviteutsavRsvpAdv ? window.InviteutsavRsvpAdv.collect(form) : null;
      if (adv && !adv.ok) { return; }

      function showDone() { form.classList.add('is-sent'); success.hidden = false; requestLayout(); }
      if (!rsvpCfg.restUrl) { showDone(); return; }

      // The guest's answers to the optional questions travel inside the message (no schema change needed).
      var answers = [];
      $$('.siyaram-rsvp__question', form).forEach(function (q) {
        var qText = (q.querySelector('.siyaram-rsvp__q') || {}).textContent;
        var sel = q.querySelector('select');
        var checks = $$('input[type="checkbox"]:checked', q);
        var radio = q.querySelector('input[type="radio"]:checked');
        var ans = sel ? sel.value : (checks.length ? checks.map(function (c) { return c.value; }).join(', ') : (radio ? radio.value : ''));
        if (qText && ans) { answers.push(qText.trim() + ' ' + ans); }
      });
      var note = ((noteInput && noteInput.value) || '').trim();
      var msg = [note, answers.join(' · ')].filter(Boolean).join(note ? ' — ' : '');

      if (submit) { submit.disabled = true; if (label) { label.textContent = ui.sending || 'Sending…'; } }
      fetch(rsvpCfg.restUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify((function (b) { return adv ? adv.merge(b) : b; })({ website: (form.querySelector('[name="website"]') || {}).value || '', guest_name: nameInput.value.trim(), guest_mobile: (function () { var h = wrap && wrap.querySelector('input[type="hidden"]'); return (h && h.value) ? h.value : phoneInput.value.trim(); })(), attending: 'yes', message: msg }))
      }).then(function (res) { return res.json().then(function (d) { return { ok: res.ok, d: d }; }); })
        .then(function (r) {
          if (submit) { submit.disabled = false; if (label) { label.textContent = idleText; } }
          if (!r.ok || !r.d.success) {
            if (errorEl) { errorEl.textContent = (r.d && r.d.message) || ui.error || 'Could not send your RSVP. Please try again.'; errorEl.hidden = false; requestLayout(); }
            return;
          }
          showDone();
          if (adv) { window.InviteutsavRsvpAdv.done(form, r.d, success); }
          if (window.inviteutsavRenderWhatsappRsvpButtons) {
            var host = document.getElementById('siyaramGuestWhatsapp');
            window.inviteutsavRenderWhatsappRsvpButtons(host, {
              contacts: (data.rsvp || {}).contacts || [],
              brideDisplayName: (data.bride || {}).shortName,
              groomDisplayName: (data.groom || {}).shortName,
              guestName: nameInput.value.trim(),
              attending: (adv && adv.fields.attending === 'no') ? 'No' : 'Yes',
              message: msg,
              behavior: rsvpCfg.whatsappBehavior
            });
          }
        })
        .catch(function () {
          if (submit) { submit.disabled = false; if (label) { label.textContent = idleText; } }
          if (errorEl) { errorEl.textContent = ui.network || 'Network error. Please try again.'; errorEl.hidden = false; requestLayout(); }
        });
    });
  })();
})();


/* Siyaram invitations: the Scroll to Continue cue on the landing screen. Shown once the opening screen is gone and while the guest is still at the top;
   a tap glides slowly (about two seconds) to the invitation panel; any wheel / touch / key press by the guest stops the glide. */
(function () {
  'use strict';
  var cue = document.getElementById('siyaram-scrollcue');
  if (!cue) { return; }
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function update() {
    var top = window.pageYOffset || document.documentElement.scrollTop || 0;
    var overlay = document.getElementById('intro-overlay');
    var isIntroActive = overlay && overlay.style.display !== 'none';
    cue.classList.toggle('is-on', !isIntroActive && !document.getElementById('siyaram-gate') && top < 120);
  }
  var gliding = false;
  function glideTo(targetTop) {
    var from = window.pageYOffset || document.documentElement.scrollTop || 0;
    var dist = targetTop - from;
    if (!dist) { return; }
    if (reduce) { window.scrollTo(0, targetTop); return; }
    var dur = Math.min(3200, Math.max(2000, Math.abs(dist) * 1.5)); // slow on purpose
    var t0 = null;
    gliding = true;
    function stop() { gliding = false; }
    ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach(function (ev) { window.addEventListener(ev, stop, { once: true, passive: true }); });
    function step(ts) {
      if (!gliding) { return; }
      if (t0 === null) { t0 = ts; }
      var p = Math.min(1, (ts - t0) / dur);
      var e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; // ease in-out
      window.scrollTo(0, from + dist * e);
      if (p < 1) { window.requestAnimationFrame(step); } else { gliding = false; }
    }
    window.requestAnimationFrame(step);
  }
  cue.addEventListener('click', function () {
    // the invitation panel is the next block after the landing screen (the section element itself starts at the page top)
    var target = document.querySelector('.siyaram-details__panel') || document.querySelector('.siyaram-details');
    if (target) { glideTo(Math.max(0, Math.round(target.getBoundingClientRect().top + (window.pageYOffset || 0) - 30))); }
  });
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  if (window.MutationObserver) { new MutationObserver(update).observe(document.body, { childList: true }); }
  document.addEventListener('click', function () { window.setTimeout(update, 120); });
  window.setTimeout(update, 600);
  update();
})();

/**
 * Shared music control for the demo invitations.
 *  - A template that already has its own music button keeps it (no duplicate); shared-music.css only moves it to the left edge.
 *  - A template with background music but no button gets a small play/pause button on the left.
 * The music is whatever <audio> the template already carries (the invitation's configured track). Browsers that block autoplay
 * simply leave the button on "play" until the visitor taps it.
 */
(function () {
  'use strict';
  var BUTTONS = '#musicToggle,#musicBtn,.music-toggle,.music-btn,.music-orb,.pd-music,.siyaram-music';
  var root = document.documentElement;

  function init() {
    var audio = document.querySelector('audio[src], audio source') ? document.querySelector('audio') : null;
    if (!audio) { return; }
    if (document.querySelector(BUTTONS)) {
      root.classList.add('iu-music-left'); // reuse the template's own control, just place it on the left
      return;
    }
    if (document.querySelector('.iu-music-fab')) { return; }

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'iu-music-fab';
    btn.setAttribute('aria-label', 'Play or pause music');
    btn.setAttribute('aria-pressed', 'false');
    btn.innerHTML =
      '<svg class="iu-music-fab__play" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.2v13.6a1 1 0 0 0 1.52.85l10.9-6.8a1 1 0 0 0 0-1.7L9.52 4.35A1 1 0 0 0 8 5.2z"/></svg>' +
      '<svg class="iu-music-fab__pause" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="4.2" height="14" rx="1.2"/><rect x="13.8" y="5" width="4.2" height="14" rx="1.2"/></svg>';
    document.body.appendChild(btn);

    var sync = function () {
      var on = !audio.paused;
      btn.classList.toggle('is-playing', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    };
    audio.addEventListener('play', sync);
    audio.addEventListener('pause', sync);
    audio.addEventListener('ended', sync);
    btn.addEventListener('click', function () {
      if (audio.paused) {
        var p = audio.play();
        if (p && p.catch) { p.catch(function () { sync(); }); }
      } else {
        audio.pause();
      }
    });
    sync();

    // This template has no music button of its own, so start the music on the visitor's first tap / swipe (browsers block sound before that).
    var armed = true;
    var first = function (ev) {
      if (!armed) { return; }
      if (ev && ev.target && btn.contains(ev.target)) { armed = false; cleanup(); return; } // the button handles its own tap
      armed = false;
      cleanup();
      if (audio.paused) { var p = audio.play(); if (p && p.catch) { p.catch(function () { sync(); }); } }
    };
    var evs = ['pointerdown', 'touchend', 'click', 'keydown'];
    var cleanup = function () { evs.forEach(function (t) { document.removeEventListener(t, first, true); }); };
    evs.forEach(function (t) { document.addEventListener(t, first, true); });
  }

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
})();

/* ============ INTRO VIDEO: TOUCH TO PLAY COMPLETE VIDEO -> WHITE BLINK -> HERO ============ */
(function initIntroVideo() {
  var overlay = document.getElementById('intro-overlay');
  var video = document.getElementById('intro-video');
  var flash = document.getElementById('intro-white-flash');
  var audio = document.querySelector('.siyaram-music__audio');
  var musicWrap = document.querySelector('.siyaram-music-wrap');

  if (!overlay || !video || !flash) { return; }

  var isStarted = false;
  var transitionStarted = false;

  // STRICTLY PAUSED ON LOAD - NO TEXT, WAITS FOR FIRST TOUCH
  video.pause();
  try { video.currentTime = 0; } catch (e) {}

  function triggerWhiteFlashTransition() {
    if (transitionStarted) { return; }
    transitionStarted = true;

    // 1. Smooth slow white flash bloom in
    flash.classList.add('is-flashing');

    // 2. At peak of white flash (520ms), hide video, open hero and start background music
    setTimeout(function () {
      overlay.style.display = 'none';
      try { video.pause(); } catch (e) {}

      // Start background music
      if (audio) {
        audio.currentTime = 0;
        var p = audio.play();
        if (p && p.then) {
          p.then(function () {
            document.documentElement.classList.add('siyaram-is-music-playing');
            if (musicWrap) { musicWrap.classList.add('is-playing'); }
          }).catch(function () {
            var playOnGesture = function () {
              audio.play().then(function () {
                document.documentElement.classList.add('siyaram-is-music-playing');
                if (musicWrap) { musicWrap.classList.add('is-playing'); }
              }).catch(function () {});
              ['click', 'touchend', 'scroll', 'pointerup', 'keydown'].forEach(function (e) {
                document.removeEventListener(e, playOnGesture, true);
              });
            };
            ['click', 'touchend', 'scroll', 'pointerup', 'keydown'].forEach(function (e) {
              document.addEventListener(e, playOnGesture, true);
            });
          });
        }
        document.documentElement.classList.add('siyaram-is-music-playing');
        if (musicWrap) { musicWrap.classList.add('is-playing'); }
      }

      // 3. Smooth slow fade out of white revealing hero section
      flash.classList.remove('is-flashing');
      flash.classList.add('is-fading-out');

      // 4. Remove flash layer completely after fade completes
      setTimeout(function () {
        flash.style.display = 'none';
        var scrollCue = document.getElementById('siyaram-scrollcue');
        if (scrollCue) { scrollCue.classList.add('is-on'); }
      }, 1000);
    }, 520);
  }

  function startVideoOnFirstTouch(e) {
    if (isStarted) return;
    isStarted = true;
    if (e && e.preventDefault && e.cancelable) { e.preventDefault(); }

    // Fade out and remove floating tap cue
    var tapCue = document.getElementById('intro-tap-cue');
    if (tapCue) {
      tapCue.style.opacity = '0';
      tapCue.style.transform = 'translate(-50%, -50%) scale(0.92)';
      setTimeout(function () {
        try { tapCue.remove(); } catch (err) {}
      }, 450);
    }

    // Remove all listeners immediately so NO further touches interrupt or skip video
    overlay.removeEventListener('click', startVideoOnFirstTouch);
    overlay.removeEventListener('touchend', startVideoOnFirstTouch);
    overlay.removeEventListener('pointerup', startVideoOnFirstTouch);

    // Prime / unlock audio under direct user gesture so browser permits playback
    if (audio) {
      audio.load();
      var unlockPromise = audio.play();
      if (unlockPromise && unlockPromise.then) {
        unlockPromise.then(function () {
          audio.pause();
          audio.currentTime = 0;
        }).catch(function () {});
      }
    }

    // Play complete video with sound
    video.muted = false;
    var playPromise = video.play();
    if (playPromise && playPromise.catch) {
      playPromise.catch(function () {
        // Fallback to muted if device restricts sound
        video.muted = true;
        video.play().catch(function () {});
      });
    }
  }

  // Listen for the first touch/click anywhere on screen to start
  overlay.addEventListener('click', startVideoOnFirstTouch);
  overlay.addEventListener('touchend', startVideoOnFirstTouch, { passive: true });
  overlay.addEventListener('pointerup', startVideoOnFirstTouch, { passive: true });

  // When video completes (near end at 5.3s of 6.02s clip), trigger smooth white blink transition
  video.addEventListener('timeupdate', function () {
    if (isStarted && !transitionStarted && video.currentTime >= 5.3) {
      triggerWhiteFlashTransition();
    }
  });

  video.addEventListener('ended', function () {
    if (isStarted) {
      triggerWhiteFlashTransition();
    }
  });
})();
