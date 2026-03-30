import React from "react";
import { motion } from "framer-motion";
import { BOOKING_URL, IMAGES } from "@/lib/constants";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const steps = [
  { num: "01", title: "Choose Your Service", desc: "Browse our rituals and select the experience that speaks to you." },
  { num: "02", title: "Pick Your Time", desc: "Select a date and time that fits your schedule." },
  { num: "03", title: "Confirm & Relax", desc: "Complete your booking and get ready for total relaxation." },
];

export default function Booking() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <img
          src={IMAGES.hero}
          alt="Book your head spa"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-white/70 mb-2">
            Reserve Your Ritual
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-light text-white tracking-wide">
            Book Your Experience
          </h1>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Simple & Seamless
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-wide mb-4">
              Book Your Session in Seconds
            </h2>
            <p className="font-body text-sm text-muted-foreground max-w-lg mx-auto mb-16">
              Reserving your luxury head spa experience is easy. Follow three simple steps and your sanctuary awaits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.15 }}
                className="p-8 bg-card border border-border rounded-sm"
              >
                <span className="font-heading text-4xl font-light text-muted-foreground/30">
                  {step.num}
                </span>
                <h3 className="font-heading text-xl font-medium text-foreground mt-4 mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-14 py-4 bg-primary text-primary-foreground text-base font-body font-medium tracking-widest rounded-sm hover:opacity-90 transition-opacity"
            >
              Book Now
            </a>
            <p className="font-body text-xs text-muted-foreground mt-4">
              You will be redirected to our secure booking system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Assurance */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h3 className="font-heading text-2xl font-light text-foreground tracking-wide mb-4">
              Your Relaxation, <span className="italic">Guaranteed</span>
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
              Every session is designed to deliver the ultimate relaxation experience. If you have any questions before booking, do not hesitate to contact us.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}