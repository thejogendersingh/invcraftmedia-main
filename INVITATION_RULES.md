# INVITATION_RULES.md – Master Development & Deployment Standards
**InvCraft Media – Central Wedding Invitation Hosting System**  
*Document Version: 1.0.0 | Status: Mandatory & Permanent*

---

## 1. Core Architecture Principles

InvCraft Media hosts hundreds (500–700+) of independent client wedding invitation websites on a single central domain (`https://invcraftmedia.com`), powered by a single GitHub repository and a single Cloudflare Pages project.

To maintain 100% stability, zero downtime, and prevent regressions across hundreds of live client websites, **every developer, assistant, and team member MUST strictly obey the rules set forth in this document.**

---

## 2. The 10 Mandatory Safety Commandments

> [!CRITICAL]
> Violation of these 10 rules risks disrupting an active client's wedding day. Treat every live URL as mission-critical production infrastructure.

1. **NEVER modify an existing invitation while working on a new one.** Every task must be strictly scoped to its target invitation folder.
2. **NEVER overwrite another client's assets.** HTML, CSS, JavaScript, images, audio, video, and fonts must remain completely isolated.
3. **Every invitation MUST live in its own independent folder.** No invitation may depend on another invitation's code or local files.
4. **Always use strictly relative asset paths** (e.g., `./assets/image.webp`, NOT `/assets/image.webp` and NOT `../assets/image.webp`).
5. **ZERO global CSS leakage.** All custom CSS must be scoped to the invitation wrapper or isolated within the invitation's own stylesheet. Never alter root or shared styles without comprehensive verification.
6. **ZERO global JavaScript collisions.** Never declare un-scoped global variables on `window`. Wrap all code in Immediately Invoked Function Expressions (IIFE) or scoped blocks.
7. **NEVER delete an existing invitation folder.** Existing folders are permanent records of client events.
8. **NEVER rename an existing client URL or slug without written client authorization.** Links are printed on physical cards, sent via WhatsApp, and bookmarked by guests.
9. **NEVER replace client information with placeholder or dummy data.** If client details are pending, clearly mark the missing sections with `<!-- [SOURCE CONTENT PENDING] -->` comments.
10. **NEVER execute destructive or bulk automated operations without explicit review and approval.**

---

## 3. Folder & URL Naming Conventions

### 3.1 Folder Naming Rules
- Folder names **must be strictly lowercase**.
- Words must be separated by single hyphens (`-`).
- Characters allowed: `a-z`, `0-9`, and `-`.
- **Prohibited:** Spaces, underscores (`_`), uppercase letters, accented characters, special characters (`&`, `@`, `+`, `!`, `#`).

### 3.2 Standard Slug Formats
- Standard wedding: `groom-weds-bride` (e.g., `krishna-weds-shreya`)
- Alternative: `bride-and-groom` or `clientname-wedding` (only when requested by client).
- **Prohibited:** Generic names like `invite1`, `wedding-new`, `temp`, `client-a`.

### 3.3 Target URL Structure
- Production URL: `https://invcraftmedia.com/<folder-slug>/`
- Direct trailing slash must be maintained: `https://invcraftmedia.com/krishna-weds-shreya/`
- Every invitation must load directly via its direct URL. Guests must never be redirected to the homepage or asked to log in.

---

## 4. Internal Invitation Architecture

Every invitation folder inside `/invitations/<folder-slug>/` must adhere to this standard layout:

```text
invitations/<folder-slug>/
├── index.html        # Clean semantic HTML5 page with dedicated Open Graph metadata
├── style.css         # Invitation-specific responsive stylesheet
├── script.js         # Isolated vanilla JavaScript (music player, countdown, animations)
└── assets/           # Local folder containing all client assets
    ├── images/       # WebP / AVIF / compressed JPEG images
    ├── audio/        # Background audio (MP3/AAC, optimized <= 1.5MB)
    ├── icons/        # SVG / PNG icons
    └── fonts/        # Local webfonts (WOFF2 preferred, if not using Google Fonts)
```

### Path Resolution Rule
Inside `/invitations/<folder-slug>/index.html`:
- Style: `<link rel="stylesheet" href="./style.css">`
- Script: `<script src="./script.js" defer></script>`
- Images: `<img src="./assets/images/couple.webp" alt="Couple Name">`
- Audio: `<audio id="bg-audio" src="./assets/audio/music.mp3" preload="none"></audio>`

*Notice the `./` prefix:* This guarantees that whether the page is served directly, locally, or rewritten via Cloudflare, asset resolution is always 100% correct.

---

## 5. WhatsApp & Social Media Sharing Compatibility

Wedding invitations are overwhelmingly distributed via **WhatsApp, Instagram Direct, and iMessage**. The Open Graph (`og:*`) meta tags MUST be configured perfectly in each `index.html`:

```html
<!-- Primary Meta Tags -->
<title>Krishna & Shreya – Wedding Invitation | InvCraft Media</title>
<meta name="title" content="Krishna & Shreya – Wedding Invitation">
<meta name="description" content="We invite you to celebrate our special day with us. Click to view wedding details, venue map, and schedule.">

<!-- Open Graph / Facebook / WhatsApp -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://invcraftmedia.com/krishna-weds-shreya/">
<meta property="og:title" content="Krishna & Shreya – Wedding Invitation">
<meta property="og:description" content="Join us in celebrating our wedding. Tap to view the invitation & details.">
<meta property="og:image" content="https://invcraftmedia.com/krishna-weds-shreya/assets/images/og-preview.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:type" content="image/jpeg">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Krishna & Shreya – Wedding Invitation">
<meta name="twitter:description" content="Join us in celebrating our wedding. Tap to view the invitation & details.">
<meta name="twitter:image" content="https://invcraftmedia.com/krishna-weds-shreya/assets/images/og-preview.jpg">
```

### WhatsApp Preview Guidelines:
1. **Absolute URL for `og:image`:** WhatsApp requires full `https://invcraftmedia.com/...` image URLs. Relative URLs will NOT generate preview cards.
2. **File Size Constraint:** The preview image (`og-preview.jpg`) must be **under 300 KB** (ideally 150–250 KB). WhatsApp drops previews if the image is too large.
3. **Dimensions:** Recommended ratio is `1.91:1` (`1200x630px`) or square `1:1` (`800x800px` or `600x600px`). Ensure central framing so circular or rectangular crops both look clean.
4. **Format:** Standard `.jpg` or `.png` (do not use `.webp` for `og:image` as older WhatsApp builds fail to parse WebP preview thumbnails).

---

## 6. Performance & Optimization Rules

Invitations are viewed primarily on mobile devices, often on cellular 4G/5G connections at wedding halls or in transit.

### 6.1 Images
- **Modern Formats:** Convert photos to `.webp` or `.avif`. Keep a compressed `.jpg` only for WhatsApp `og:image`.
- **Target File Sizes:**
  - Hero banner: `< 250 KB`
  - Gallery photos: `< 150 KB` each
  - Decorative icons/textures: `< 50 KB` (use SVGs where possible)
- **Lazy Loading:** Add `loading="lazy"` and `decoding="async"` to all images below the initial viewport fold.
- **Explicit Dimensions:** Always supply `width` and `height` attributes to prevent Cumulative Layout Shift (CLS).

### 6.2 Background Music & Audio
- **Autoplay Restriction:** iOS Safari and Android Chrome strictly block audio playback without a prior user gesture.
- **Implementation Requirement:** Never rely on native HTML `autoplay`. Always provide an elegant floating **Music Toggle Button** (Play / Pause).
- **Format & Compression:** Use `.mp3` or `.aac` compressed to **64 kbps to 96 kbps mono/stereo**. A 3-minute track should not exceed **1.5 MB**.
- **Preload Strategy:** Set `preload="none"` or `preload="metadata"` so guests don't waste cellular bandwidth unless they tap play.
- **Tab Visibility:** Use the Page Visibility API (`document.visibilityState`) to pause audio if the user switches apps or locks their screen.

### 6.3 CSS & JavaScript Performance
- Use **pure Vanilla JavaScript** (ES6+). Do NOT include jQuery, Heavy React bundles, or multi-megabyte animation engines.
- If using lightweight animation libraries (e.g. AOS, Canvas Confetti), load only minified versions locally or from high-speed CDNs with subresource integrity.
- Keep total invitation page payload **under 3.5 MB** (including audio).

---

## 7. Cloudflare Pages Deployment & Routing

### 7.1 Build Settings in Cloudflare Pages
- **Framework preset:** `None`
- **Build command:** `None` (leave completely empty)
- **Build output directory:** `.` (root directory)
- **Root directory:** `/`

### 7.2 URL Rewriting via `_redirects`
Cloudflare Pages serves files statically. To enable direct clean URLs (`https://invcraftmedia.com/krishna-weds-shreya/`) that route internally to `/invitations/krishna-weds-shreya/`, the root `_redirects` file manages 200 rewrites:

```text
# Cloudflare Pages 200 Rewrite Rules
/krishna-weds-shreya/*    /invitations/krishna-weds-shreya/:splat    200
/krishna-weds-shreya      /invitations/krishna-weds-shreya/          301

/rohit-weds-priya/*       /invitations/rohit-weds-priya/:splat       200
/rohit-weds-priya         /invitations/rohit-weds-priya/             301
```

*Note on Scale:* Cloudflare Pages supports up to **2,000 redirect rules** in a single `_redirects` file, effortlessly covering the 500–700 invitations target.

---

## 8. Step-by-Step Standard Operating Procedure (SOP)

### Adding a New Invitation (Daily Workflow – 5 Minutes)
1. **Branch out:** Create a clean branch from `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b invite/groom-weds-bride
   ```
2. **Duplicate template:** Copy the standard template folder into `/invitations/groom-weds-bride/`.
3. **Place assets:** Place optimized client images into `./assets/images/` and audio into `./assets/audio/`.
4. **Update `index.html`:** Fill in client details (names, dates, venue coordinates, RSVP phone/WhatsApp numbers, Open Graph tags).
5. **Add route to `_redirects`:** Add the rewrite pair in `_redirects`:
   ```text
   /groom-weds-bride/*    /invitations/groom-weds-bride/:splat    200
   /groom-weds-bride      /invitations/groom-weds-bride/          301
   ```
6. **Local verification:** Open `/invitations/groom-weds-bride/index.html` in a mobile browser preview or local server.
7. **Commit & Push:**
   ```bash
   git add invitations/groom-weds-bride/ _redirects
   git commit -m "feat(invite): add groom-weds-bride invitation"
   git push origin invite/groom-weds-bride
   ```
8. **Preview & Merge:** Test the Cloudflare Preview Deployment URL. Send preview link to client for approval. Once approved, merge pull request into `main`.

---

## 9. Rollback & Emergency Recovery

In the event of an unexpected issue on a live invitation:
1. **Cloudflare Instant Rollback (Fastest - < 30 seconds):**
   - Navigate to **Cloudflare Dashboard > Workers & Pages > Pages > invcraft-central-hosting > Deployments**.
   - Locate the previous successful production deployment.
   - Click **Manage Deployment > Rollback to this deployment**.
2. **Git Revert Procedure:**
   ```bash
   git checkout main
   git pull origin main
   git revert <commit-hash>
   git push origin main
   ```
   Cloudflare Pages will automatically trigger a new production build with the fixed state.

---

## 10. Pre-Flight Quality Checklist

Every invitation must pass this checklist before merging into `main`:
- [ ] Folder name follows `lowercase-hyphenated` pattern.
- [ ] Direct URL tested with and without trailing slash.
- [ ] All asset paths use relative format (`./assets/...`).
- [ ] Open Graph `og:image` is an absolute URL (`https://invcraftmedia.com/...`), JPG format, `< 300 KB`.
- [ ] WhatsApp preview tested on a real phone or debugger tool.
- [ ] Audio toggle works smoothly on both iOS Safari and Android Chrome.
- [ ] Background music pauses when the browser tab is switched or backgrounded.
- [ ] Google Maps direction link opens the exact wedding venue location.
- [ ] "Add to Calendar" / RSVP WhatsApp link functions with pre-filled text.
- [ ] No console errors or broken 404 network requests in DevTools.
- [ ] No other client folder or file was modified in this commit.
