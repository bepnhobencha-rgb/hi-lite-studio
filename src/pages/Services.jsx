import React from "react";
import { motion } from "framer-motion";
import { SERVICES, ADDONS, BOOKING_URL, IMAGES } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import BookingCTA from "@/components/shared/BookingCTA";
import { useBrand } from "@/lib/BrandContext";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function Services() {
  const brand = useBrand();
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[380px] md:h-[460px] flex items-end overflow-hidden">
        <img
          src="https://media.base44.com/images/public/69cdb2c167f73801514de491/405febdc4_Gemini_Generated_Image_mbp56cmbp56cmbp5.png"
          alt="Hi-Lite Studio head spa service"
          className="absolute inset-0 w-full h-full object-cover object-left"
          style={{ filter: brand.imageFilterContent }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.48) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.04) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-16 w-full">
          <p className="font-body text-[10px] tracking-[0.5em] uppercase mb-3" style={{ color: brand.primary }}>
            Our Offerings
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-[0.04em]">
            Services & Rituals
          </h1>
        </div>
      </section>

      {/* Services */}
      <section className="py-40 md:py-56 px-4 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Choose Your Ritual"
            title="Head Spa Experiences"
            subtitle="Every session is a journey designed to restore your mind and revive your scalp."
          />
          <div className="space-y-7">
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className={`relative bg-white rounded-2xl p-10 md:p-12 flex flex-col md:flex-row md:items-center gap-8 transition-shadow duration-400 ${
                  s.badge
                    ? "border border-[#C4919A]/40 shadow-[0_4px_28px_rgba(196,145,154,0.18)]"
                    : "border border-[#ede8e0] shadow-[0_2px_18px_rgba(0,0,0,0.04)]"
                } hover:shadow-[0_8px_40px_rgba(196,145,154,0.2)]`}
              >
                {s.badge && (
                  <span
                    className="absolute top-0 right-6 text-[10px] font-body tracking-[0.18em] text-white uppercase px-5 py-1.5 rounded-b-full"
                    style={{ background: brand.btnGradient }}
                  >
                    {s.badge}
                  </span>
                )}
                <div className="flex-1">
                  {/* Brand accent */}
                  <div className="w-6 h-px mb-5" style={{ background: brand.btnGradient }} />
                  <div className="flex flex-wrap items-baseline gap-3 mb-3">
                    <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground tracking-wide">
                      {s.name}
                    </h3>
                    <span className="font-body text-[11px] text-[#9E9E9E] tracking-widest uppercase">
                      {s.duration}
                    </span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 mt-5">
                    {s.features.map((f, j) => (
                      <li key={j} className="font-body text-sm text-[#8E8E8E] flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: brand.primary }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col items-center md:items-end gap-5 md:min-w-[180px]">
                  <p className="font-heading text-4xl font-light text-foreground">${s.price}</p>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-3.5 text-sm font-body tracking-[0.18em] rounded-full transition-all duration-300"
                    style={{ background: brand.btnGradient, color: "#fff", boxShadow: `0 6px 20px rgba(${brand.primaryRgb},0.4)` }}
                    onMouseOver={e => { e.currentTarget.style.boxShadow = `0 10px 28px rgba(${brand.primaryRgb},0.55)`; e.currentTarget.style.transform = "translateY(-1px)"; }}
                    onMouseOut={e => { e.currentTarget.style.boxShadow = `0 6px 20px rgba(${brand.primaryRgb},0.4)`; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    Book
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-36 md:py-48 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Enhance Your Visit"
            title="Curated Add-Ons"
            subtitle="Personalize your experience with these premium enhancements."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ADDONS.map((addon, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className="flex items-center justify-between py-5 px-7 bg-[#F8F5F0] border border-[#ede8e0] rounded-xl"
              >
                <span className="font-body text-sm text-foreground leading-relaxed">{addon.name}</span>
                <span className="font-heading text-xl font-light ml-4 shrink-0" style={{ color: brand.accentText }}>${addon.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA
        headline="Find Your Perfect Ritual"
        subtext="Not sure which service is right for you? Our specialists will guide you."
      />
    </div>
  );
}