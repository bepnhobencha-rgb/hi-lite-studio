import React from "react";
import { BOOKING_URL } from "@/lib/constants";
import { motion } from "framer-motion";

export default function BookingCTA({ 
  headline = "Ready for Your Reset?", 
  subtext = "Book your luxury head spa experience and let the stress melt away.",
  buttonText = "Book Your Experience"
}) {
  return (
    <section className="py-28 md:py-36 px-4 bg-[#F8F5F0] text-center border-t border-[#e8dfd4]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <div className="w-8 h-px bg-[#D4B996] mx-auto mb-8" />
        <h2 className="font-heading text-3xl md:text-5xl font-light tracking-wide mb-6 text-[#2C2C2C]">
          {headline}
        </h2>
        <p className="font-body text-sm text-[#8E8E8E] mb-10 max-w-md mx-auto leading-relaxed">
          {subtext}
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-4 bg-[#D4B996] text-white text-sm font-body font-medium tracking-widest rounded-full shadow-[0_4px_18px_rgba(212,185,150,0.45)] hover:bg-[#C2A57F] transition-all duration-300"
        >
          {buttonText}
        </a>
      </motion.div>
    </section>
  );
}