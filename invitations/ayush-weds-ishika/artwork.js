/* =========================================================
   KAMAL — REAL NATHDWARA ARTWORK & PHOTOGRAPH MOUNTER
   Uses real painted watercolor assets & editorial portraits
   ========================================================= */

(function () {
  "use strict";

  // Scalloped circular clip path generator for Celebration Medallions
  function scallopedCirclePath(cx, cy, rOuter, rInner, lobes = 18) {
    let d = "";
    for (let i = 0; i < lobes; i++) {
      const a1 = (i / lobes) * Math.PI * 2;
      const aMid = ((i + 0.5) / lobes) * Math.PI * 2;
      const a2 = ((i + 1) / lobes) * Math.PI * 2;
      const x1 = cx + Math.cos(a1) * rInner;
      const y1 = cy + Math.sin(a1) * rInner;
      const xm = cx + Math.cos(aMid) * rOuter;
      const ym = cy + Math.sin(aMid) * rOuter;
      const x2 = cx + Math.cos(a2) * rInner;
      const y2 = cy + Math.sin(a2) * rInner;
      if (i === 0) d += `M ${x1.toFixed(1)} ${y1.toFixed(1)} `;
      d += `Q ${xm.toFixed(1)} ${ym.toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)} `;
    }
    return d + "Z";
  }

  // Real Nathdwara medallion painting clipped inside a crisp scalloped sage-green & gold frame
  function buildRealMedallion(id, imgSrc, scaleZoom = 1.0) {
    const clip = scallopedCirclePath(100, 100, 95, 88, 18);
    const size = (200 * scaleZoom).toFixed(1);
    const offset = ((200 - 200 * scaleZoom) / 2).toFixed(1);
    return `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="clip_${id}"><path d="${clip}"/></clipPath>
      </defs>
      <path d="${clip}" fill="#85A574" stroke="#B69454" stroke-width="1.6"/>
      <image href="${imgSrc}" x="${offset}" y="${offset}" width="${size}" height="${size}" preserveAspectRatio="xMidYMid slice" clip-path="url(#clip_${id})"/>
      <path d="${clip}" fill="none" stroke="#85A574" stroke-width="4.2"/>
      <path d="${clip}" fill="none" stroke="#C9A35B" stroke-width="1"/>
    </svg>`;
  }

  // Real editorial couple portrait clipped inside crisp white-bordered scalloped Mughal arch
  function buildRealCoupleArch(variant) {
    const archClip = `
      M 130 14
      C 142 24, 150 36, 152 48
      C 170 50, 184 60, 192 76
      C 214 80, 232 96, 238 120
      L 238 306 L 22 306 L 22 120
      C 28 96, 46 80, 68 76
      C 76 60, 90 50, 108 48
      C 110 36, 118 24, 130 14 Z`;

    return `
    <svg viewBox="0 0 260 320" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="galArch_${variant}"><path d="${archClip}"/></clipPath>
      </defs>
      <path d="${archClip}" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="13" stroke-linejoin="round"/>
      <image href="assets/couple-${variant}.jpg" x="14" y="10" width="232" height="302" preserveAspectRatio="xMidYMin slice" clip-path="url(#galArch_${variant})"/>
      <path d="${archClip}" fill="none" stroke="#D2B070" stroke-width="0.9" opacity="0.55"/>
    </svg>`;
  }

  // Architectural Scalloped Mughal Arch Frame (Section 3 Formal Invitation Card)
  function buildMughalArch() {
    const outerPath = `
      M 200 22
      C 214 34, 224 50, 224 68
      C 242 70, 256 80, 264 96
      C 284 96, 300 106, 310 124
      C 332 126, 348 140, 354 162
      C 374 172, 386 192, 386 218
      C 386 238, 378 254, 372 264
      L 372 704 L 28 704 L 28 264
      C 22 254, 14 238, 14 218
      C 14 192, 26 172, 46 162
      C 52 140, 68 126, 90 124
      C 100 106, 116 96, 136 96
      C 144 80, 158 70, 176 68
      C 176 50, 186 34, 200 22 Z`;

    const innerPath = `
      M 200 34
      C 212 45, 219 58, 219 74
      C 236 77, 249 86, 256 102
      C 276 102, 291 112, 301 129
      C 322 132, 338 146, 344 167
      C 363 176, 375 195, 375 218
      C 375 236, 368 251, 362 261
      L 362 694 L 38 694 L 38 261
      C 32 251, 25 236, 25 218
      C 25 195, 37 176, 56 167
      C 62 146, 78 132, 99 129
      C 109 112, 124 102, 144 102
      C 151 86, 164 77, 181 74
      C 181 58, 188 45, 200 34 Z`;

    return `
    <svg viewBox="0 0 400 720" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="archShadow" x="-5%" y="-2%" width="110%" height="106%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#5B4438" flood-opacity="0.10"/>
        </filter>
      </defs>
      <path d="M200 2 C204 8, 204 14, 200 18 C196 14, 196 8, 200 2 Z" fill="none" stroke="#C2954A" stroke-width="1.2"/>
      <path d="${outerPath}" fill="#FAF1ED" stroke="#FFFFFF" stroke-width="2" filter="url(#archShadow)"/>
      <path d="${innerPath}" fill="#F6E6E2" stroke="#C69D59" stroke-width="1.15"/>
    </svg>`;
  }

  // AI Monogram Seal (concentric navy-indigo circle + serif A I)
  function buildMonogram() {
    return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="none" stroke="#1F3442" stroke-width="1.6"/>
      <circle cx="50" cy="50" r="42.5" fill="none" stroke="#1F3442" stroke-width="0.8"/>
      <text x="23" y="62" font-family="Cormorant Garamond, Georgia, serif" font-size="44" font-weight="500" fill="#1F3442">A</text>
      <text x="53" y="68" font-family="Cormorant Garamond, Georgia, serif" font-size="44" font-weight="400" fill="#1F3442">I</text>
    </svg>`;
  }

  // Mount all real image assets & architectural frames into DOM
  function mountAllArtwork() {
    const pondEl = document.getElementById("pondArtLayer");
    if (pondEl) {
      pondEl.innerHTML = `<img src="assets/pond-bg.jpg" alt="" class="pond-bg-img" draggable="false" />`;
    }

    const boatEl = document.getElementById("flowerBoatArt");
    if (boatEl) {
      boatEl.innerHTML = `<img src="assets/boat.png" alt="" class="flower-boat-img" draggable="false" />`;
    }

    document.querySelectorAll("[data-artwork]").forEach((el) => {
      const key = el.getAttribute("data-artwork");
      switch (key) {
        case "divider":
          el.innerHTML = `<img src="assets/divider.png" alt="" class="divider-img" draggable="false" />`;
          break;
        case "mughalArch":
          el.innerHTML = buildMughalArch();
          break;
        case "monogram":
          el.innerHTML = buildMonogram();
          break;
        case "lilyCluster":
          el.innerHTML = `<img src="assets/lily-pads.png" alt="" class="lily-pads-img" draggable="false" />`;
          break;
        case "medallionMayra":
          el.innerHTML = buildRealMedallion("mayra", "assets/medallion-mayra.jpg", 1.06);
          break;
        case "medallionBandoli":
          el.innerHTML = buildRealMedallion("bandoli", "assets/medallion-bandoli.jpg", 1.06);
          break;
        case "medallionHaldi":
          el.innerHTML = buildRealMedallion("haldi", "assets/medallion-mehendi.jpg", 1.12);
          break;
        case "medallionSangeet":
          el.innerHTML = buildRealMedallion("sangeet", "assets/medallion-sangeet.jpg", 1.08);
          break;
        case "medallionWedding":
          el.innerHTML = buildRealMedallion("wedding", "assets/medallion-wedding.jpg", 1.14);
          break;
        case "venueHaveli":
          el.innerHTML = `<img src="assets/venue-haveli.jpg" alt="Moti Nivas, Ahore, Rajasthan" class="venue-haveli-img" loading="lazy" />`;
          break;
        case "dresscodeAttire":
          el.innerHTML = `<img src="assets/dresscode-attire.png" alt="Coordinated Indian wedding attire" class="dresscode-attire-img" loading="lazy" />`;
          break;
        case "couple1": el.innerHTML = buildRealCoupleArch(1); break;
        case "couple2": el.innerHTML = buildRealCoupleArch(2); break;
        case "couple3": el.innerHTML = buildRealCoupleArch(3); break;
        case "couple4": el.innerHTML = buildRealCoupleArch(4); break;
        case "couple5": el.innerHTML = buildRealCoupleArch(5); break;
        case "couple6": el.innerHTML = buildRealCoupleArch(6); break;
        case "couple7": el.innerHTML = buildRealCoupleArch(7); break;
        case "couple8": el.innerHTML = buildRealCoupleArch(8); break;
        case "couple9": el.innerHTML = buildRealCoupleArch(9); break;
        case "couple1Square":
          el.innerHTML = `<img src="assets/couple-1.jpg" alt="Tanya and Vikram" class="song-cover-img" loading="lazy" />`;
          break;
      }
    });

    document.querySelectorAll("[data-bloom-lotus]").forEach((el) => {
      el.innerHTML = `<img src="assets/lotus-bloom.png" alt="" class="bloom-lotus-img" draggable="false" />`;
    });
  }

  window.KamalArtwork = { mountAllArtwork };
})();
