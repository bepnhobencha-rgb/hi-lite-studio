import React from "react";
import { BOOKING_URL } from "@/lib/constants";
import { motion } from "framer-motion";

export default function BookingCTA({
  headline = "Ready for Your Reset?",
  subtext = "Book your luxury head spa experience and let the stress melt away.",
  buttonText = "Book Your Experience"
}) {
  return (
    <section className="py-36 md:py-48 px-4 bg-white text-center border-t border-[#ede8e0]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto"
      >
        {/* Gold divider */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-14" style={{ background: "linear-gradient(to right, transparent, #D4B996)" }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#D4B996" }} />
          <div className="h-px w-14" style={{ background: "linear-gradient(to left, transparent, #D4B996)" }} />
        </div>

        <h2 className="font-heading text-3xl md:text-5xl font-light tracking-wide mb-6 text-foreground leading-[1.2]">
          {headline}
        </h2>
        <p className="font-body text-sm text-[#8E8E8E] mb-12 max-w-md mx-auto leading-[1.9]">
          {subtext}
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-14 py-4 text-sm font-body font-medium tracking-[0.22em] rounded-full transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #D4B996 0%, #C2A57F 100%)",
            color: "#fff",
            boxShadow: "0 8px 32px rgba(212,185,150,0.5)",
          }}
          onMouseOver={e => { e.currentTarget.style.boxShadow = "0 14px 42px rgba(212,185,150,0.65)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseOut={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(212,185,150,0.5)"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          {buttonText}
        </a>
      </motion.div>
    </section>
  );
}