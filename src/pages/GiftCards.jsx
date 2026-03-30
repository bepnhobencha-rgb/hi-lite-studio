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
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <img
          src={IMAGES.treatment1}
          alt="Gift card for head spa"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-white/70 mb-2">
            The Perfect Gift
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-light text-white tracking-wide">
            Gift Cards
          </h1>
        </div>
      </section>

      {/* Gift Card Content */}
      <section className="py-20 md:py-28 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <Gift size={40} className="mx-auto text-muted-foreground mb-6" strokeWidth={1} />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-wide mb-4">
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
              className="bg-card border border-border rounded-sm p-10 text-center"
            >
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
                Purchase Online
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
                Buy a gift card instantly through our online booking system. Choose any amount or service.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-3.5 bg-primary text-primary-foreground text-sm font-body font-medium tracking-widest rounded-sm hover:opacity-90 transition-opacity"
              >
                Buy via Booking System
              </a>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="bg-card border border-border rounded-sm p-10 text-center"
            >
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
                Contact Us Directly
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
                Prefer a personalized touch? Contact us to arrange a custom gift card for any occasion.
              </p>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-block px-10 py-3.5 border border-foreground text-foreground text-sm font-body font-medium tracking-widest rounded-sm hover:bg-foreground hover:text-background transition-colors"
              >
                Contact Us for Gift Cards
              </a>
            </motion.div>
          </div>

          {/* Occasions */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Perfect For
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Birthdays", "Anniversaries", "Mother's Day", "Self-Care", "Thank You", "Holidays"].map(
                (occasion) => (
                  <span
                    key={occasion}
                    className="px-5 py-2 bg-card border border-border rounded-sm font-body text-sm text-muted-foreground"
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