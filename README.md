# InvCraft Media – Central Wedding Invitation Hosting System

A centralized, scalable static hosting architecture designed to host 500–700+ independent client wedding invitations on a single custom domain (`https://invcraftmedia.com`), powered by a single GitHub repository and Cloudflare Pages.

---

## 1. System Overview

- **Main Domain:** `https://invcraftmedia.com`
- **Hosting Engine:** Cloudflare Pages (High-speed global Edge CDN)
- **Repository:** Single central GitHub repository
- **Routing:** Direct invitation URLs via clean URL paths (e.g., `https://invcraftmedia.com/krishna-weds-shreya/`)
- **Isolation:** 100% independent HTML, CSS, JavaScript, and assets per wedding invitation.

---

## 2. Directory Architecture

```text
Invitation-Managment/
│
├── INVITATION_RULES.md         # Master development & safety rules (MANDATORY)
├── README.md                   # System documentation & onboarding guide
├── index.html                  # InvCraft Media root brand homepage
├── 404.html                    # Luxury branded 404 page for misspelled links
├── _redirects                  # Cloudflare Pages 200 rewrite & 301 direct rules
├── _headers                    # Caching policy (instant HTML revalidate, 1-yr asset cache)
├── .gitignore                  # Git exclusions (OS files, temp data)
│
├── invitations/                # Isolated client invitation directories
│   ├── krishna-weds-shreya/    # Sample Invitation 1
│   │   ├── index.html          # Semantic HTML5 page with custom Open Graph meta
│   │   ├── style.css           # Scoped stylesheet (Midnight Gold palette)
│   │   ├── script.js           # Scoped JavaScript (audio player, countdown)
│   │   └── assets/             # Invitation-specific assets
│   │       └── PENDING_ASSETS.md
│   │
│   └── rohit-weds-priya/       # Sample Invitation 2
│       ├── index.html          # Semantic HTML5 page with custom Open Graph meta
│       ├── style.css           # Scoped stylesheet (Royal Rose & Champagne palette)
│       ├── script.js           # Scoped JavaScript (wave audio player, countdown)
│       └── assets/             # Invitation-specific assets
│           └── PENDING_ASSETS.md
│
└── shared/
    └── shared-assets/          # Common InvCraft Media branding (logo, favicon)
        └── README.md
```

---

## 3. How Direct URLs Work

Each invitation is accessible directly via its clean slug without exposing internal folder paths:

| Desired Public URL | Internal Route | Method |
|---|---|---|
| `https://invcraftmedia.com/krishna-weds-shreya/` | `/invitations/krishna-weds-shreya/index.html` | 200 Rewrite via `_redirects` |
| `https://invcraftmedia.com/rohit-weds-priya/` | `/invitations/rohit-weds-priya/index.html` | 200 Rewrite via `_redirects` |
| `https://invcraftmedia.com/krishna-weds-shreya` | `https://invcraftmedia.com/krishna-weds-shreya/` | 301 Canonical Trailing Slash |

### Cloudflare Pages `_redirects` Syntax
Every new invitation has an entry in `_redirects`:
```text
/<slug>/*    /invitations/<slug>/:splat    200
/<slug>      /invitations/<slug>/          301
```

---

## 4. Cloudflare Pages Configuration Guide

Follow these exact steps in your Cloudflare dashboard:

### Step 4.1: Connect GitHub Repository
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation, go to **Workers & Pages**.
3. Click **Create Application** > select the **Pages** tab.
4. Click **Connect to Git** and choose your GitHub account.
5. Select your repository: `Invitation-Managment` (or your chosen repository name).

### Step 4.2: Build & Deployment Settings
Set the build configurations exactly as follows:
- **Project name:** `invcraft-central-hosting` (or `invcraftmedia`)
- **Production branch:** `main`
- **Framework preset:** `None`
- **Build command:** *(Leave completely blank / empty)*
- **Build output directory:** `.` *(Single dot representing the root folder)*
- **Root directory:** `/` *(Single slash)*

Click **Save and Deploy**. Cloudflare Pages will deploy your site in ~15 seconds.

### Step 4.3: Custom Domain Setup
1. In Cloudflare Pages, go to **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Enter your domain: `invcraftmedia.com` (and `www.invcraftmedia.com`).
4. Follow the Cloudflare DNS verification prompt (instant if your DNS is managed on Cloudflare).

---

## 5. Adding 4–5 New Invitations Daily (SOP)

Adding a new invitation takes less than 5 minutes:

### Step 1: Create a Feature Branch
```bash
git checkout main
git pull origin main
git checkout -b invite/ankush-weds-muskan
```

### Step 2: Create the Invitation Directory
Copy an existing template (e.g., `krishna-weds-shreya`):
```bash
cp -r invitations/krishna-weds-shreya invitations/ankush-weds-muskan
```

### Step 3: Add Client Content & Assets
1. Put the couple's photos in `invitations/ankush-weds-muskan/assets/images/`.
2. Put the background song in `invitations/ankush-weds-muskan/assets/audio/`.
3. Open `invitations/ankush-weds-muskan/index.html` and update:
   - `<title>` and Open Graph tags (`og:title`, `og:image`, `og:url`).
   - Couple names, wedding dates, and function itinerary.
   - Google Maps link for the venue.
   - WhatsApp RSVP contact phone number.

### Step 4: Register the URL in `_redirects`
Append the new route pair to `_redirects`:
```text
# Client: Ankush Weds Muskan
/ankush-weds-muskan/*    /invitations/ankush-weds-muskan/:splat    200
/ankush-weds-muskan      /invitations/ankush-weds-muskan/          301
```

### Step 5: Test & Deploy
```bash
git add invitations/ankush-weds-muskan/ _redirects
git commit -m "feat(invite): add ankush-weds-muskan invitation"
git push origin invite/ankush-weds-muskan
```
1. Open the **Cloudflare Preview Deployment URL** generated on the GitHub Pull Request.
2. Verify audio, countdown, Google Maps link, and WhatsApp RSVP on your mobile phone.
3. Merge the Pull Request into `main`. The invitation is live at:
   `https://invcraftmedia.com/ankush-weds-muskan/` within 30 seconds.

---

## 6. Scaling to 500–700 Invitations

This architecture is built specifically to scale to 500–700+ websites without performance degradation:

1. **Zero Runtime Server Cost:** Every page is static HTML/CSS/JS served directly from Cloudflare's 300+ Edge Data Centers.
2. **Bandwidth Optimization:** Images are compressed to WebP/AVIF, audio to 64–96kbps MP3s (`< 1.5MB`), and `_headers` ensures assets are cached for 1 year (`immutable`).
3. **Redirect Limit Capacity:** Cloudflare Pages supports **2,000 rules** in `_redirects`. 700 invitations require 1,400 rules, remaining well within the limit.
4. **Git Organization:** Keep all invitation folders under `/invitations/` to maintain a clean root repository structure.

---

## 7. Safety Guarantee: Zero Cross-Site Contamination

- **Relative Paths Only:** Every invitation uses `./style.css`, `./script.js`, and `./assets/...`. It never looks outside its folder.
- **Isolated CSS:** Invitation styles are completely self-contained with custom CSS variables scoped to that page.
- **Isolated JS:** All JavaScript runs inside self-contained IIFE closures (`(function() { ... })();`), preventing any global variable collisions.
- **Independent Commits:** Each git commit only touches `invitations/<target-client>/` and `_redirects`. Other folders are completely untouched.

---

## 8. Current Source Files & Missing Assets Status

| Item | Location | Status | Action Required |
|---|---|---|---|
| Central Hosting Architecture | Root | **Complete** | Ready for Cloudflare connection |
| Permanent Rules Document | `INVITATION_RULES.md` | **Complete** | Follow for every future invite |
| Krishna & Shreya Template | `invitations/krishna-weds-shreya/` | **Structure Complete** | Place client's original audio & images into `assets/` |
| Rohit & Priya Template | `invitations/rohit-weds-priya/` | **Structure Complete** | Place client's original audio & images into `assets/` |
| Client Specific Wedding Data | `index.html` files | **Marked Pending** | Replace `[SOURCE CONTENT PENDING]` tags with client's exact details |

> [!NOTE]
> Per project requirements, no wedding details or client data were invented or filled with dummy text. All pending items are marked with clear HTML comment markers ready for original client assets.
