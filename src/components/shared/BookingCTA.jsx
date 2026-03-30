import React from "react";
import { BOOKING_URL } from "@/lib/constants";
import { motion } from "framer-motion";

export default function BookingCTA({ 
  headline = "Ready for Your Reset?", 
  subtext = "Book your luxury head spa experience and let the stress melt away.",
  buttonText = "Book Your Experience"
}) {
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-light tracking-wide mb-4">
          {headline}
        </h2>
        <p className="font-body text-sm text-primary-foreground/70 mb-8 max-w-md mx-auto">
          {subtext}
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-3.5 bg-primary-foreground text-primary text-sm font-body font-medium tracking-widest rounded-sm hover:opacity-90 transition-opacity"
        >
          {buttonText}
        </a>
      </motion.div>
    </section>
  );
}