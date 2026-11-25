// ==========================================================================
// INVCRAFTMEDIA - Streamlined Client Experience Logic
// 1. Direct-to-WhatsApp Flow (Custom pre-filled order messages)
// 2. Interactive Mobile Fullscreen Preview Modal (#previewModal)
// 3. Category Filter Tabs & Realtime Search
// 4. Floating WhatsApp CTA & Drawer Menu
// 5. Interactive FAQ Accordion
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // Configuration: WhatsApp Phone Number (Direct Orders & Customization)
  // --------------------------------------------------------------------------
  const WHATSAPP_PHONE = '918209415303';

  // --------------------------------------------------------------------------
  // DOM Elements
  // --------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const navDrawerBackdrop = document.getElementById('navDrawerBackdrop');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const activeCountPill = document.getElementById('activeCountPill');

  // Preview Modal
  const previewModal = document.getElementById('previewModal');
  const modalBackBtn = document.getElementById('modalBackBtn');
  const previewIframe = document.getElementById('previewIframe');
  const previewLoader = document.getElementById('previewLoader');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitleText = document.getElementById('modalSubtitleText');
  const modalExternalLink = document.getElementById('modalExternalLink');
  const previewSellBar = document.getElementById('previewSellBar');
  const sellBarCode = document.getElementById('sellBarCode');
  const previewWhatsappBtn = document.getElementById('startCustomizeFromPreviewBtn') || document.getElementById('previewWhatsappBtn');

  // Search & Filtering
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const emptySearchState = document.getElementById('emptySearchState');
  const emptyDesc = document.getElementById('emptyDesc');
  const emptyResetBtn = document.getElementById('emptyResetBtn');
  const samplesGrid = document.getElementById('samplesGrid');
  const sampleCards = document.querySelectorAll('.sample-card');
  const catChips = document.querySelectorAll('.cat-chip, .filter-pill');
  const bottomNavTabs = document.querySelectorAll('.bottom-mobile-nav .nav-tab');
  const sortSelect = document.getElementById('sortSelect');
  const activeStyleLabel = document.getElementById('activeStyleLabel');
  const activeCount = document.getElementById('activeCount');

  // --------------------------------------------------------------------------
  // Configure WhatsApp Links
  // --------------------------------------------------------------------------
  const drawerWaBtn = document.querySelector('.drawer-wa-btn');
  if (drawerWaBtn) {
    const defaultMsg = 'Hello InvCraftMedia! I want to explore wedding invitation designs.';
    drawerWaBtn.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(defaultMsg)}`;
  }

  // --------------------------------------------------------------------------
  // Mobile Nav Drawer Toggle
  // --------------------------------------------------------------------------
  let isMenuOpen = false;

  function setHamburgerMenuState(open) {
    isMenuOpen = open;
    if (mobileNavDrawer) {
      mobileNavDrawer.classList.toggle('active', open);
      mobileNavDrawer.setAttribute('aria-hidden', (!open).toString());
    }
    if (navDrawerBackdrop) {
      navDrawerBackdrop.classList.toggle('active', open);
    }
    if (mobileMenuBtn) {
      mobileMenuBtn.setAttribute('aria-expanded', open.toString());
    }
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setHamburgerMenuState(!isMenuOpen);
    });
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', () => setHamburgerMenuState(false));
  }

  if (navDrawerBackdrop) {
    navDrawerBackdrop.addEventListener('click', () => setHamburgerMenuState(false));
  }

  document.querySelectorAll('[data-close-drawer]').forEach(item => {
    item.addEventListener('click', () => {
      const filterVal = item.getAttribute('data-drawer-filter');
      if (filterVal) {
        setCategory(filterVal);
      }
      setHamburgerMenuState(false);
    });
  });

  // --------------------------------------------------------------------------
  // Card Data Extraction Helper
  // --------------------------------------------------------------------------
  function extractCardData(card) {
    return {
      code: card.getAttribute('data-code') || '001',
      name: card.getAttribute('data-name') || card.querySelector('.card-title')?.textContent.trim() || 'Wedding Sample',
      theme: card.getAttribute('data-theme') || card.querySelector('.card-sub')?.textContent.trim() || 'Digital Wedding Invite',
      category: card.getAttribute('data-category') || 'hindu',
      url: card.getAttribute('data-url') || '',
      cover: card.querySelector('.card-img')?.getAttribute('src') || ''
    };
  }

  // --------------------------------------------------------------------------
  // Live Mobile Preview Modal
  // --------------------------------------------------------------------------
  function openPreview(data) {
    if (!data || !data.url) return;

    if (modalTitle) modalTitle.textContent = data.name;
    if (modalSubtitleText) modalSubtitleText.textContent = data.theme;
    if (modalExternalLink) modalExternalLink.href = data.url;
    if (sellBarCode) sellBarCode.textContent = `DESIGN #${data.code}`;

    // WhatsApp Message
    if (previewWhatsappBtn) {
      const msg = `Hello InvCraftMedia! I want to customize this wedding invitation:
📌 Design #${data.code} - ${data.name}
🎨 Theme: ${data.theme}
💰 Offer Price: ₹1,499 (Regular ₹3,499)
🔗 Live Demo: ${data.url}

Please share how to add my wedding details!`;
      previewWhatsappBtn.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
    }

    if (previewLoader) previewLoader.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    if (previewModal) {
      previewModal.scrollTop = 0;
      previewModal.classList.add('active');
      previewModal.setAttribute('aria-hidden', 'false');
      requestAnimationFrame(syncPhoneIframeScale);
    }

    if (previewIframe) {
      previewIframe.src = data.url;
      const hideLoader = () => {
        if (previewLoader) previewLoader.classList.add('hidden');
        previewIframe.removeEventListener('load', hideLoader);
      };
      previewIframe.addEventListener('load', hideLoader);
      setTimeout(hideLoader, 3000);
    }
  }

  function closePreview() {
    if (!previewModal || !previewModal.classList.contains('active')) return;
    previewModal.classList.remove('active');
    previewModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (previewIframe) previewIframe.src = 'about:blank';
      if (previewLoader) previewLoader.classList.remove('hidden');
    }, 200);
  }

  if (modalBackBtn) {
    modalBackBtn.addEventListener('click', closePreview);
  }

  const previewFooterBackBtn = document.getElementById('previewFooterBackBtn');
  if (previewFooterBackBtn) {
    previewFooterBackBtn.addEventListener('click', closePreview);
  }

  const bottomAllSamplesBtn = document.getElementById('bottomAllSamplesBtn');
  if (bottomAllSamplesBtn) {
    bottomAllSamplesBtn.addEventListener('click', (e) => {
      e.preventDefault();
      setCategory('all');
      const catalog = document.getElementById('catalogSection');
      if (catalog) {
        catalog.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Attach preview triggers to cards
  sampleCards.forEach(card => {
    const data = extractCardData(card);

    card.addEventListener('click', () => {
      openPreview(data);
    });

    const playBtn = card.querySelector('.play-pill-btn');
    if (playBtn) {
      playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openPreview(data);
      });
    }
  });

  // --------------------------------------------------------------------------
  // Search & Filtering Engine
  // --------------------------------------------------------------------------
  let currentCategory = 'all';
  let currentSearchQuery = '';

  function applyFilters() {
    let visibleCount = 0;
    const query = currentSearchQuery.trim().toLowerCase();
    const activeFilter = currentCategory.toLowerCase();

    sampleCards.forEach(card => {
      const cardCategory = (card.getAttribute('data-category') || '').toLowerCase();
      const cardStyle = (card.getAttribute('data-style') || '').toLowerCase();
      const cardName = (card.getAttribute('data-name') || '').toLowerCase();
      const cardTheme = (card.getAttribute('data-theme') || '').toLowerCase();
      const cardCode = (card.getAttribute('data-code') || '').toLowerCase();

      // Check category/style match
      const matchesCategory = (
        activeFilter === 'all' || 
        cardCategory === activeFilter || 
        cardStyle === activeFilter
      );

      // Check search match
      const matchesSearch = !query || 
        cardName.includes(query) || 
        cardTheme.includes(query) || 
        cardCode.includes(query) ||
        `#${cardCode}`.includes(query);

      const isVisible = matchesCategory && matchesSearch;

      if (isVisible) {
        card.classList.remove('is-hidden');
        card.style.display = '';
        visibleCount++;
      } else {
        card.classList.add('is-hidden');
        card.style.display = 'none';
      }
    });

    if (activeCount) {
      activeCount.textContent = `Showing ${visibleCount} invitation${visibleCount === 1 ? '' : 's'}`;
    }
    if (activeCountPill) {
      activeCountPill.textContent = String(visibleCount);
    }

    if (emptySearchState) {
      if (visibleCount === 0) {
        emptySearchState.style.display = 'block';
        if (emptyDesc) {
          emptyDesc.textContent = query
            ? `No templates matching "${query}" in this category.`
            : 'No invitations found for the selected category.';
        }
      } else {
        emptySearchState.style.display = 'none';
      }
    }
  }

  function setCategory(catValue) {
    currentCategory = catValue;

    // Sync top category chips
    catChips.forEach(chip => {
      const chipFilter = chip.getAttribute('data-filter') || 'all';
      chip.classList.toggle('active', chipFilter === currentCategory);
    });

    // Sync bottom navigation tabs
    bottomNavTabs.forEach(tab => {
      const tabFilter = tab.getAttribute('data-filter') || 'all';
      tab.classList.toggle('active', tabFilter === currentCategory);
    });

    if (activeStyleLabel) {
      const activeBtn = document.querySelector(`.cat-chip[data-filter="${currentCategory}"]`) || 
                        document.querySelector(`.bottom-mobile-nav .nav-tab[data-filter="${currentCategory}"]`);
      activeStyleLabel.textContent = currentCategory === 'all' 
        ? 'All Collections' 
        : (activeBtn ? activeBtn.textContent.trim() : currentCategory);
    }

    applyFilters();
  }

  // Top Category Chips (Horizontal Scroll)
  catChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const filter = chip.getAttribute('data-filter') || 'all';
      setCategory(filter);
    });
  });

  // Bottom Mobile Nav Tabs
  bottomNavTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = tab.getAttribute('data-filter') || 'all';
      setCategory(filter);

      // Scroll matching chip into view in the top category bar
      const matchingChip = document.querySelector(`.cat-chip[data-filter="${filter}"]`);
      if (matchingChip && matchingChip.scrollIntoView) {
        matchingChip.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }

      // Smooth scroll up to catalog
      const catalog = document.getElementById('catalogSection');
      if (catalog) {
        catalog.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Search Input Handlers
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.classList.toggle('visible', currentSearchQuery.length > 0);
      }
      applyFilters();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearchQuery = '';
      searchClearBtn.classList.remove('visible');
      applyFilters();
      if (searchInput) searchInput.focus();
    });
  }

  if (emptyResetBtn) {
    emptyResetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearchQuery = '';
      if (searchClearBtn) searchClearBtn.classList.remove('visible');

      currentCategory = 'all';
      filterPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-filter') === 'all'));
      bottomNavTabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-filter') === 'all'));
      if (activeStyleLabel) activeStyleLabel.textContent = 'All Collections';

      applyFilters();
    });
  }

  // Sort Dropdown
  if (sortSelect && samplesGrid) {
    sortSelect.addEventListener('change', () => {
      const val = sortSelect.value;
      const cardsArr = Array.from(sampleCards);

      cardsArr.sort((a, b) => {
        const orderA = parseInt(a.getAttribute('data-order') || '0', 10);
        const orderB = parseInt(b.getAttribute('data-order') || '0', 10);
        const isPopA = a.hasAttribute('data-popular') ? 1 : 0;
        const isPopB = b.hasAttribute('data-popular') ? 1 : 0;
        const isNewA = a.hasAttribute('data-new') ? 1 : 0;
        const isNewB = b.hasAttribute('data-new') ? 1 : 0;

        if (val === 'popular') return isPopB - isPopA || orderA - orderB;
        if (val === 'newest') return isNewB - isNewA || orderB - orderA;
        return orderA - orderB;
      });

      cardsArr.forEach(card => samplesGrid.appendChild(card));
    });
  }

  // --------------------------------------------------------------------------
  // Interactive FAQ Accordion
  // --------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        // Close other items
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            const btn = other.querySelector('.faq-question');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          }
        });
        // Toggle current
        item.classList.toggle('active', !isOpen);
        questionBtn.setAttribute('aria-expanded', (!isOpen).toString());
      });
    }
  });

  // --------------------------------------------------------------------------
  // Header Language Switcher (EN / HI / MR)
  // --------------------------------------------------------------------------
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langDropdown = document.getElementById('langDropdown');
  const activeLangCode = document.getElementById('activeLangCode');
  const langOptions = document.querySelectorAll('.lang-opt');

  const langCopy = {
    en: {
      code: 'EN',
      eyebrow: 'DIGITAL WEDDING INVITATIONS',
      title: 'We bring your dream digital wedding invitation to life.',
      sub: 'Choose a design you love. Our team personalises it with your names, photos and wedding details, ready to share with your guests.',
      cta: 'EXPLORE DESIGNS \u00A0\u2192',
      priceNote: 'From \u20B91,499 \u00B7 One-time payment'
    },
    hi: {
      code: 'HI',
      eyebrow: 'डिजिटल वेडिंग इनविटेशन',
      title: 'आपके सपनों का डिजिटल शादी कार्ड अब हकीकत में।',
      sub: 'अपना पसंदीदा डिज़ाइन चुनें। हमारी टीम आपके नाम, फोटो और शादी की जानकारी के साथ इसे तैयार करके देगी।',
      cta: 'डिज़ाइन देखें \u00A0\u2192',
      priceNote: 'सिर्फ \u20B91,499 से \u00B7 वन-टाइम पेमेंट'
    },
    mr: {
      code: 'MR',
      eyebrow: 'डिजिटल शुभविवाह निमंत्रण',
      title: 'तुमच्या स्वप्नातील डिजिटल लग्नपत्रिका आता सत्यात.',
      sub: 'तुम्हाला आवडणारी डिझाइन निवडा. आमची टीम तुमच्या नावांसह आणि लग्नाच्या तपशीलांसह ती तयार करून देईल.',
      cta: 'डिझाइन पहा \u00A0\u2192',
      priceNote: 'फक्त \u20B91,499 पासून \u00B7 वन-टाइम पेमेंट'
    }
  };

  if (langToggleBtn && langDropdown) {
    langToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = langDropdown.classList.toggle('active');
      langToggleBtn.setAttribute('aria-expanded', isOpen.toString());
    });

    langOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        const lang = opt.getAttribute('data-lang') || 'en';
        const copy = langCopy[lang] || langCopy.en;
        langOptions.forEach(o => o.classList.toggle('active', o === opt));
        if (activeLangCode) activeLangCode.textContent = copy.code;

        const eyebrowEl = document.querySelector('.hero-eyebrow');
        const titleEl = document.querySelector('.hero-title');
        const subEl = document.querySelector('.hero-subtitle');
        const ctaEl = document.querySelector('.btn-primary-hero');
        const priceNoteEl = document.getElementById('heroPriceNote');
        if (eyebrowEl) eyebrowEl.textContent = copy.eyebrow;
        if (titleEl) titleEl.textContent = copy.title;
        if (subEl) subEl.textContent = copy.sub;
        if (ctaEl) ctaEl.textContent = copy.cta;
        if (priceNoteEl) priceNoteEl.textContent = copy.priceNote;

        langDropdown.classList.remove('active');
        langToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', () => {
      langDropdown.classList.remove('active');
      langToggleBtn.setAttribute('aria-expanded', 'false');
    });
  }

  // --------------------------------------------------------------------------
  // Clone Exact Home Footer into Preview Page (Single Source of Truth)
  // --------------------------------------------------------------------------
  const mainSiteFooter = document.getElementById('mainSiteFooter');
  const previewFooterMount = document.getElementById('previewFooterMount');
  if (mainSiteFooter && previewFooterMount) {
    const clonedFooter = mainSiteFooter.cloneNode(true);
    clonedFooter.removeAttribute('id');
    clonedFooter.querySelectorAll('[data-footer-filter]').forEach(link => {
      link.addEventListener('click', () => {
        const f = link.getAttribute('data-footer-filter');
        closePreview();
        if (f) setCategory(f);
      });
    });
    clonedFooter.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', () => closePreview());
    });
    previewFooterMount.appendChild(clonedFooter);
  }

  // Also wire main footer collection filter links
  document.querySelectorAll('#mainSiteFooter [data-footer-filter]').forEach(link => {
    link.addEventListener('click', () => {
      const f = link.getAttribute('data-footer-filter');
      if (f) setCategory(f);
    });
  });

  // --------------------------------------------------------------------------
  // Content & Copyright Protection (Disable Right-Click on Images & Console Notice)
  // --------------------------------------------------------------------------
  document.addEventListener('contextmenu', (e) => {
    if (e.target.closest('.sample-card, .hero-showcase, .preview-device-stage, img')) {
      e.preventDefault();
    }
  });

  document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') e.preventDefault();
  });

  if (typeof console !== 'undefined' && console.log) {
    console.log(
      '%cSTOP! COPYRIGHT PROTECTED BY INVCRAFTMEDIA',
      'color: #581822; font-size: 16px; font-weight: bold;'
    );
    console.log(
      '%cAll designs, code, and previews on this site are proprietary property of INVCRAFTMEDIA (invcraftmedia@gmail.com). Cloning, scraping, or AI training is strictly prohibited.',
      'color: #444; font-size: 12px;'
    );
  }

  // --------------------------------------------------------------------------
  // Real Smartphone (390px) Viewport Scaling for Hero & Preview Phone Iframes
  // --------------------------------------------------------------------------
  const VIRTUAL_PHONE_WIDTH = 390;

  function syncPhoneIframeScale() {
    document.querySelectorAll('.hero-phone-screen').forEach((screen) => {
      const iframe = screen.querySelector('iframe');
      if (!iframe) return;
      const w = screen.clientWidth;
      const h = screen.clientHeight;
      if (!w || !h) return;
      const scale = w / VIRTUAL_PHONE_WIDTH;
      iframe.style.width = VIRTUAL_PHONE_WIDTH + 'px';
      iframe.style.height = Math.ceil(h / scale) + 'px';
      iframe.style.transform = 'scale(' + scale.toFixed(5) + ')';
    });
  }

  syncPhoneIframeScale();
  window.addEventListener('resize', syncPhoneIframeScale);
  if (typeof ResizeObserver !== 'undefined') {
    const phoneRO = new ResizeObserver(syncPhoneIframeScale);
    document.querySelectorAll('.hero-phone-screen').forEach((el) => phoneRO.observe(el));
  }

  // --------------------------------------------------------------------------
  // Keyboard Escape
  // --------------------------------------------------------------------------
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      setHamburgerMenuState(false);
      closePreview();
    }
  });
});
