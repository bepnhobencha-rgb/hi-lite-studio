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
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12" style={{ background: "linear-gradient(to right, transparent, #D4B996)" }} />
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4B996]" />
          <div className="h-px w-12" style={{ background: "linear-gradient(to left, transparent, #D4B996)" }} />
        </div>
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
          className="inline-block px-14 py-4 bg-[#D4B996] text-white text-sm font-body font-medium tracking-widest rounded-full shadow-[0_6px_24px_rgba(212,185,150,0.5)] hover:bg-[#C2A57F] hover:shadow-[0_8px_28px_rgba(212,185,150,0.6)] transition-all duration-300"
        >
          {buttonText}
        </a>
      </motion.div>
    </section>
  );
}