import React from "react";
import { motion } from "framer-motion";
import { Gift, Users, Star, Sparkles } from "lucide-react";
import { PROMOTIONS, IMAGES, BOOKING_URL } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import BookingCTA from "@/components/shared/BookingCTA";

const icons = [Star, Sparkles, Users, Gift];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function Promotions() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[380px] md:h-[460px] flex items-end overflow-hidden">
        <img
          src={IMAGES.spaPromo}
          alt="Luxury spa treatment at Hi-Lite Studio"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "brightness(1.10) saturate(0.72) contrast(1.08) sepia(0.07)" }}
        />
        {/* Warm champagne tint overlay — lifts shadows, adds luxury warmth */}
        <div className="absolute inset-0" style={{ background: "rgba(248,245,240,0.10)" }} />
        {/* Soft gradient only at bottom for text legibility */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.06) 50%, rgba(0,0,0,0.0) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-16 w-full">
          <p className="font-body text-[10px] tracking-[0.5em] uppercase mb-3" style={{ color: "#C4919A" }}>
            Special Offers
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-[0.04em]">
            Promotions
          </h1>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-40 md:py-56 px-4 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Limited Time"
            title="Exclusive Offers"
            subtitle="Take advantage of our special promotions and discover the luxury of Hi-Lite Studio."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROMOTIONS.map((promo, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                  className="bg-white border border-[#ede8e0] rounded-2xl p-12 flex flex-col shadow-[0_2px_20px_rgba(196,145,154,0.08)] hover:shadow-[0_8px_36px_rgba(196,145,154,0.18)] transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-7" style={{ background: "linear-gradient(135deg, #fdf5f6, #f5e8ea)" }}>
                    <Icon size={24} strokeWidth={1.3} style={{ color: "#B37880" }} />
                  </div>
                  <h3 className="font-heading text-2xl font-medium text-foreground mb-3 tracking-wide">
                    {promo.title}
                  </h3>
                  <p className="font-body text-sm text-[#8E8E8E] leading-[1.9] mb-10 flex-1">
                    {promo.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-[#ede8e0]">
                    <span className="font-heading text-2xl font-light" style={{ color: "#B37880" }}>
                      {promo.detail}
                    </span>
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 text-xs font-body tracking-[0.2em] rounded-full transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, #C4919A 0%, #B37880 100%)",
                        color: "#fff",
                        boxShadow: "0 4px 16px rgba(196,145,154,0.38)",
                      }}
                      onMouseOver={e => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(196,145,154,0.55)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                      onMouseOut={e => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(196,145,154,0.38)"; e.currentTarget.style.transform = "translateY(0)"; }}
                    >
                      Book Now
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <BookingCTA
        headline="It's Time to Unwind"
        subtext="These offers will not last forever. Treat yourself to the relaxation you deserve."
      />
    </div>
  );
}