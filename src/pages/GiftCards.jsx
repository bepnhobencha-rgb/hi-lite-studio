import React from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { IMAGES, BOOKING_URL, BUSINESS } from "@/lib/constants";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function GiftCards() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-80 md:h-[420px] flex items-end overflow-hidden">
        <img
          src={IMAGES.treatment1}
          alt="Gift card for head spa"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-black/5" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-3">
            The Perfect Gift
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-wide">
            Gift Cards
          </h1>
        </div>
      </section>

      {/* Gift Card Content */}
      <section className="py-28 md:py-40 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-20">
            <Gift size={44} className="mx-auto text-gold mb-7" strokeWidth={1} />
            <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground tracking-wide mb-5">
              Give the Gift of <span className="italic">Relaxation</span>
            </h2>
            <p className="font-body text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
              A HI-LITE HEAD SPA gift card is the perfect way to show someone you care. Treat a loved one to a luxury head spa experience they will never forget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="bg-white border border-[#e8dfd4] rounded-sm p-12 text-center shadow-sm"
            >
              <h3 className="font-heading text-2xl font-medium text-foreground mb-4">
                Purchase Online
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-10">
                Buy a gift card instantly through our online booking system. Choose any amount or service.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-3.5 bg-[#D4B996] text-white text-sm font-body font-medium tracking-widest rounded-full shadow-[0_4px_14px_rgba(212,185,150,0.4)] hover:bg-[#C2A57F] transition-all duration-300"
              >
                Buy via Booking System
              </a>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="bg-white border border-[#e8dfd4] rounded-sm p-12 text-center shadow-sm"
            >
              <h3 className="font-heading text-2xl font-medium text-foreground mb-4">
                Contact Us Directly
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-10">
                Prefer a personalized touch? Contact us to arrange a custom gift card for any occasion.
              </p>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-block px-10 py-3.5 border border-[#D4B996] text-[#D4B996] text-sm font-body font-medium tracking-widest rounded-full hover:bg-[#D4B996] hover:text-white transition-all duration-300"
              >
                Contact Us for Gift Cards
              </a>
            </motion.div>
          </div>

          {/* Occasions */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-20 text-center"
          >
            <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-6">
              Perfect For
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Birthdays", "Anniversaries", "Mother's Day", "Self-Care", "Thank You", "Holidays"].map(
                (occasion) => (
                  <span
                    key={occasion}
                    className="px-6 py-2.5 bg-white border border-[#e8dfd4] rounded-full font-body text-sm text-[#8E8E8E]"
                  >
                    {occasion}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}