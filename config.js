// ╔══════════════════════════════════════════════════════════════════╗
// ║  WINT GROUP — SITE CONFIGURATION                                ║
// ║  Edit ONLY this file. Everything else pulls from here.          ║
// ╚══════════════════════════════════════════════════════════════════╝

const CONFIG = {

  // ── META PIXEL ────────────────────────────────────────────────
  META_PIXEL_ID: "1597135191493446",

  // ── FORM ENDPOINT ─────────────────────────────────────────────
  FORM_ENDPOINT: "https://script.google.com/macros/s/AKfycbyApscsw5qjMp2HaYFwVOhX8vGRJyJXNc-IL7qlF9sVcRUcaNNR4ZFzrxruP4MUe1FD/exec",

  // ── LOGO ──────────────────────────────────────────────────────
  LOGO_URL: "assets/logo.png",

  // ── HERO ──────────────────────────────────────────────────────
  HERO_HEADLINE: "Wholesale That Actually Works for Small Boutiques",
  HERO_SUBTEXT: "We manufacture dresses, blazers, co-ords, jumpsuits, suits & more — and ship to boutiques worldwide with no MOQs.",
  HERO_IMAGE: "assets/hero.jpg",

  // ── FORM BACKGROUND IMAGE (optional) ──────────────────────────
  FORM_IMAGE: "assets/form-bg.jpg",
  CTA_HERO: "Get Started",
  // ── HOW MANY IMAGES PER SLIDER ────────────────────────────────
  SLIDER_PREVIEW_COUNT: 10,
  GRID_COLUMNS_MOBILE: 3,

  // ── WOMEN'S SLIDERS (shown on page load) ──────────────────────
  SLIDERS_WOMEN: [
    {
      name: "Boho Dresses",
      slug: "women-boho-dresses",
      sources: [
        "indophilia.store/collections/handloom-dresses"
      ]
    },
    {
      name: "Western Dresses",
      slug: "women-western-dresses",
      sources: [
        "talethread.com/collections/dresses"
      ]
    },
    {
      name: "Western Blazers & Suits",
      slug: "women-western-blazersuit",
      sources: [
        "talethread.com/collections/blazers"
      ]
    },
    {
      name: "Boho Blazers & Jackets",
      slug: "women-boho-blazersuit",
      sources: [
        "indophilia.store/collections/handloom-blazers"
      ]
    },
    {
      name: "Tops & Shirts",
      slug: "women-western-tops",
      sources: [
        "indophilia.store/collections/tops"
      ]
    },
    {
      name: "Co-ord Sets",
      slug: "women-western-coords",
      sources: [
        "talethread.com/collections/co-ords"
      ]
    },
    {
      name: "Skirts & Bottoms",
      slug: "women-western-bottoms",
      sources: [
        "talethread.com/collections/skirts"
      ]
    }
  ],

  // ── MEN'S SLIDERS (collapsed, loads on click) ─────────────────
  SLIDERS_MEN: [
    {
      name: "Suits & Blazers",
      slug: "mens-suitsblazers",
      sources: [
        "wintage.in/collections/suits",
        "wintage.in/collections/mens-blazers"
      ]
    },
    {
      name: "South Asian Menswear",
      slug: "mens-southasianclothing",
      sources: [
        "wintage.in/collections/bandhgala",
        "wintage.in/collections/nehru-jackets",
        "wintage.in/collections/kurta-pyjama-all-brands"
      ]
    }
  ],

  // ── WHY US SECTION ────────────────────────────────────────────
  WHY_US: [
    { icon: "📦", title: "No Minimum Order Quantity", text: "Order what sells. We have a minimum order value that is 100$ — not a minimum quantity. Test styles risk-free." },
    { icon: "✈️", title: "12–20 Day Delivery", text: "From our production floor to your boutique in 8 to 20 days. Restock fast, keep shelves fresh." },
    { icon: "💰", title: "Duties & Taxes Included", text: "The price you see is the price you pay. No surprise customs charges on delivery." },
    { icon: "🛒", title: "Order Directly or through Faire", text: "Extra 5% off on direct orders" }
  ],

  // ── TRUST LINE ────────────────────────────────────────────────
  TRUST_TEXT: "Trusted by boutiques across the US, UK, and Australia",

  // ── FOOTER LINKS ──────────────────────────────────────────────
  FOOTER_LINKS: [
    { label: "Faire Store", url: "http://indophilia.faire.com/" },
    { label: "Instagram", url: "http://instagram.com/wintagewholesale" },
    { label: "Facebook", url: "http://facebook.com/wintagewholesale" },
    { label: "Privacy Policy", url: "/privacy.html" },
  ]
};
