// ============================================================
//  DUAL BRAND CONFIGURATION
//  Brand A: Hi-Lite Head Spa  (Champagne Gold / Clean Luxury)
//  Brand B: Hi-Lite Studio    (Dusty Rose / Romantic Luxury)
// ============================================================

export const BRANDS = {

  // ── BRAND A ─────────────────────────────────────────────
  headSpa: {
    id: "headSpa",
    name: "Hi-Lite Head Spa",
    fullName: "Hi-Lite Head Spa Westminster",
    slogan: "Professional Scalp Therapy",

    address: "5938 Westminster Blvd., Westminster, CA 92683",
    phone: "+1 (714) 487-9379",
    email: "hiliteheadspa@gmail.com",
    hours: "Mon – Sun: 9:00 AM – 7:00 PM",

    // Colors
    primary: "#D4B996",
    primaryDark: "#C2A57F",
    primaryRgb: "212,185,150",
    accentText: "#C2A57F",
    borderColor: "#e8dfd4",

    // Button gradient
    btnGradient: "linear-gradient(135deg, #D4B996 0%, #C2A57F 100%)",
    btnShadow: "0 8px 32px rgba(212,185,150,0.5)",
    btnShadowHover: "0 14px 42px rgba(212,185,150,0.65)",

    // Hero
    heroHeadline: ["Reset Your Mind.", "Revive Your Scalp."],
    heroSubtext: "Professional scalp therapy designed to detox, restore circulation, and bring clarity back to your mind.",
    heroEyebrow: "Professional Head Spa · Westminster, CA",
    heroFilter: "brightness(1.12) saturate(0.85) contrast(1.05)",

    // Tone
    benefitsTitle: "What Our Therapy Restores",
    benefitsEyebrow: "The Treatment",
    problemTitle: "When Your Scalp Needs Care",
    problemEyebrow: "Sound Familiar?",
    problemSubtitle: "Scalp health affects everything — your hair, your stress, your focus. This is where you fix that.",
    sectionRitualEyebrow: "Our Treatments",
    sectionRitualTitle: "Signature Therapies",
    sectionRitualSubtitle: "Each session is clinically crafted to deliver maximum scalp health and relaxation results.",
    ctaHeadline: "Ready for Your Treatment?",
    ctaSubtext: "Book your professional scalp therapy and experience the difference from the first session.",
    ctaButton: "Book Your Treatment",
    footerCta: "Book your professional scalp therapy today.",
    footerCtaTitle: "Ready for Treatment?",

    // Image filters (brighter, cleaner)
    imageFilterHero: "brightness(1.1) saturate(0.85) contrast(1.05)",
    imageFilterContent: "brightness(1.08) saturate(0.88) contrast(1.02)",
    imageFilterStrip: "brightness(1.1) saturate(0.88)",
  },

  // ── BRAND B ─────────────────────────────────────────────
  studio: {
    id: "studio",
    name: "Hi - Lite Studio",
    fullName: "Hi - Lite Studio Westminster",
    slogan: "Your Sanctuary for Relaxation",

    address: "5938 Westminster Blvd., Westminster, CA 92683",
    phone: "+1 (714) 487-9379",
    email: "thinguyenllc2022@gmail.com",
    hours: "Mon – Sun: 9:00 AM – 7:00 PM",

    // Colors
    primary: "#C4919A",
    primaryDark: "#B37880",
    primaryRgb: "196,145,154",
    accentText: "#B37880",
    borderColor: "#ede8e0",

    // Button gradient
    btnGradient: "linear-gradient(135deg, #C4919A 0%, #B37880 100%)",
    btnShadow: "0 8px 32px rgba(196,145,154,0.5)",
    btnShadowHover: "0 14px 42px rgba(196,145,154,0.65)",

    // Hero
    heroHeadline: ["Where Relaxation", "Becomes Ritual."],
    heroSubtext: "A private escape where luxury rituals melt stress away — restoring your scalp, your energy, and your sense of self.",
    heroEyebrow: "Luxury Head Spa · Westminster, CA",
    heroFilter: "brightness(0.96) saturate(0.82) contrast(1.08) sepia(0.06)",

    // Tone
    benefitsTitle: "What a Head Spa Restores in You",
    benefitsEyebrow: "The Ritual",
    problemTitle: "When Life Weighs You Down",
    problemEyebrow: "Sound Familiar?",
    problemSubtitle: "Modern life takes a toll on your mind and scalp. This is your invitation to let go.",
    sectionRitualEyebrow: "Our Rituals",
    sectionRitualTitle: "Signature Experiences",
    sectionRitualSubtitle: "Each session is a carefully crafted journey for your mind and scalp.",
    ctaHeadline: "Ready for Your Reset?",
    ctaSubtext: "Book your luxury head spa experience and let the stress melt away.",
    ctaButton: "Book Your Experience",
    footerCta: "Book your luxury head spa experience today.",
    footerCtaTitle: "Ready to Relax?",

    // Image filters (warmer, softer, romantic)
    imageFilterHero: "brightness(0.96) saturate(0.82) contrast(1.08) sepia(0.06)",
    imageFilterContent: "brightness(1.0) saturate(0.8) contrast(1.02) sepia(0.08)",
    imageFilterStrip: "brightness(0.98) saturate(0.85) contrast(1.04) sepia(0.06)",
  },
};

// Change this to switch the active brand:
// "headSpa" → Hi-Lite Head Spa (Gold)
// "studio"  → Hi-Lite Studio (Rose)
export const ACTIVE_BRAND = "studio";

export const BRAND = BRANDS[ACTIVE_BRAND];