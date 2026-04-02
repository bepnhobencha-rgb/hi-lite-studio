import React from "react";
import { motion } from "framer-motion";
import { SERVICES, ADDONS, BOOKING_URL, IMAGES } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import BookingCTA from "@/components/shared/BookingCTA";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-80 md:h-[420px] flex items-end overflow-hidden">
        <img
          src={IMAGES.facial}
          alt="Head spa treatment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-black/5" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-3">
            Our Offerings
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-wide">
            Services & Rituals
          </h1>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 md:py-40 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Choose Your Ritual"
            title="Head Spa Experiences"
            subtitle="Every session is a journey designed to restore your mind and revive your scalp."
          />
          <div className="space-y-8">
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className={`relative bg-white border rounded-sm p-10 md:p-12 flex flex-col md:flex-row md:items-center gap-8 shadow-sm ${
                  s.badge ? "border-[#D4B996]/50" : "border-[#e8dfd4]"
                }`}
              >
                {s.badge && (
                  <span className="absolute top-0 right-0 bg-[#D4B996] text-white text-xs font-body tracking-wider px-5 py-1.5 rounded-bl-sm rounded-tr-sm">
                    {s.badge}
                  </span>
                )}
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-3 mb-3">
                    <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground">
                      {s.name}
                    </h3>
                    <span className="font-body text-xs text-muted-foreground tracking-wide">
                      {s.duration}
                    </span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-5">
                    {s.features.map((f, j) => (
                      <li key={j} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col items-center md:items-end gap-4 md:min-w-[160px]">
                  <p className="font-heading text-4xl font-light text-foreground">${s.price}</p>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-3 bg-[#D4B996] text-white text-sm font-body tracking-wider rounded-full shadow-[0_4px_14px_rgba(212,185,150,0.4)] hover:bg-[#C2A57F] transition-all duration-300"
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
      <section className="py-28 md:py-36 px-4 bg-[#F8F5F0]">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Enhance Your Visit"
            title="Add-Ons"
            subtitle="Personalize your experience with these premium enhancements."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ADDONS.map((addon, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className="flex items-center justify-between py-5 px-7 bg-white border border-[#e8dfd4] rounded-sm shadow-sm"
              >
                <span className="font-body text-sm text-foreground">{addon.name}</span>
                <span className="font-heading text-xl font-medium text-gold">${addon.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA
        headline="Find Your Perfect Ritual"
        subtext="Not sure which service is right for you? Book a session and our specialists will guide you."
      />
    </div>
  );
}