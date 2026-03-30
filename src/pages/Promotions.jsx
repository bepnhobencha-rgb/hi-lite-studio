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
  transition: { duration: 0.6 },
};

export default function Promotions() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-80 flex items-end overflow-hidden">
        <img
          src={IMAGES.massage}
          alt="HI-LITE HEAD SPA promotions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-white/70 mb-2">
            Special Offers
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-light text-white tracking-wide">
            Promotions
          </h1>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-20 md:py-28 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Limited Time"
            title="Exclusive Offers"
            subtitle="Take advantage of our special promotions and discover the luxury of HI-LITE HEAD SPA."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROMOTIONS.map((promo, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                  className="bg-card border border-border rounded-sm p-8 md:p-10 flex flex-col"
                >
                  <Icon size={24} className="text-muted-foreground mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading text-2xl font-medium text-foreground mb-2">
                    {promo.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {promo.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-2xl font-light text-foreground">
                      {promo.detail}
                    </span>
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-primary text-primary-foreground text-xs font-body tracking-wider rounded-sm hover:opacity-90 transition-opacity"
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
        headline="Do Not Miss Out"
        subtext="These offers will not last forever. Treat yourself to the relaxation you deserve."
      />
    </div>
  );
}