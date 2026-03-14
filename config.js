// ╔══════════════════════════════════════════════════════════════════╗
// ║  WINT GROUP — SITE CONFIGURATION                                ║
// ║  Edit ONLY this file. Everything else pulls from here.          ║
// ╚══════════════════════════════════════════════════════════════════╝

const CONFIG = {

  // ── META PIXEL ────────────────────────────────────────────────
  // Get this from Facebook Ads Manager → Events Manager → Pixel
  META_PIXEL_ID: "YOUR_PIXEL_ID",

  // ── FORM ENDPOINT ─────────────────────────────────────────────
  // Google Apps Script Web App URL (see SETUP.md for instructions)
  FORM_ENDPOINT: "https://script.google.com/a/macros/wintage.in/s/AKfycbyKVrIFzoR1Nu5d4SUPtjsqgQiIL47_KH-87kIqztS9J8Rh6zqGLA_tmxuFVTIpSzdk/exec",

  // ── LOGO ──────────────────────────────────────────────────────
  // Path to your logo image. Leave empty "" to show text "Wint.Group"
  LOGO_URL: "",

  // ── HERO ──────────────────────────────────────────────────────
  HERO_HEADLINE: "Your Next Bestseller Is Already Made",
  HERO_SUBTEXT: "We manufacture dresses, blazers, co-ords, jumpsuits, suits & more — and ship to boutiques worldwide with no minimum order quantity.",
  // Hero background image (optional). Leave empty for gradient-only.
  HERO_IMAGE: "",

  // ── HOW MANY IMAGES PER SLIDER ────────────────────────────────
  SLIDER_PREVIEW_COUNT: 10,    // images shown in the slider on main page
  GRID_COLUMNS_MOBILE: 3,     // columns on the "View All" page (mobile)

  // ── WOMEN'S SLIDERS (shown on page load) ──────────────────────
  // Each slider: name (display), slug (URL), sources (Shopify collections)
  // sources = array of "domain/collections/handle" strings
  // Multiple sources get merged and shuffled automatically

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

  // ── CTA BUTTON TEXTS ──────────────────────────────────────────
  CTA_HERO: "Get Started",
  CTA_AFTER_FIRST_SLIDERS: "Like What You See? Let's Talk",
  CTA_AFTER_ALL: "Ready to Order?",
  CTA_FORM_SUBMIT: "Send My Details",

  // ── WHY US SECTION ────────────────────────────────────────────
  WHY_US: [
    { icon: "📦", title: "No Minimum Order Quantity", text: "Order what sells. We have a minimum order value — not a minimum quantity. Test styles risk-free." },
    { icon: "✈️", title: "8–20 Day Delivery", text: "From our production floor to your boutique in 8 to 20 days. Restock fast, keep shelves fresh." },
    { icon: "💰", title: "Duties & Taxes Included", text: "The price you see is the price you pay. No surprise customs charges on delivery." },
    { icon: "🛒", title: "Order Through Faire", text: "We're on Faire — net-60 terms, free returns on first orders, and a flow you already know." }
  ],

  // ── TRUST LINE ────────────────────────────────────────────────
  TRUST_TEXT: "Trusted by boutiques across the US, UK, and Australia",

  // ── FOOTER LINKS ──────────────────────────────────────────────
  FOOTER_LINKS: [
    { label: "Faire Store", url: "#" },
    { label: "Instagram", url: "#" },
    { label: "Facebook", url: "#" }
  ]
};
