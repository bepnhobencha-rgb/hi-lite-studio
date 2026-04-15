import React from "react";
import { BOOKING_URL } from "@/lib/constants";
import { useBrand } from "@/lib/BrandContext";
import { motion } from "framer-motion";

export default function BookingCTA({
  headline,
  subtext,
  buttonText,
}) {
  const brand = useBrand();
  const resolvedHeadline = headline ?? brand.ctaHeadline;
  const resolvedSubtext = subtext ?? brand.ctaSubtext;
  const resolvedButton = buttonText ?? brand.ctaButton;
  return (
    <section className="py-36 md:py-48 px-4 bg-white text-center border-t border-[#ede8e0]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto"
      >
        {/* Brand divider */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-14" style={{ background: `linear-gradient(to right, transparent, ${brand.primary})` }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: brand.primary }} />
          <div className="h-px w-14" style={{ background: `linear-gradient(to left, transparent, ${brand.primary})` }} />
        </div>

        <h2 className="font-heading text-3xl md:text-5xl font-light tracking-wide mb-6 text-foreground leading-[1.2]">
          {resolvedHeadline}
        </h2>
        <p className="font-body text-sm text-[#8E8E8E] mb-12 max-w-md mx-auto leading-[1.9]">
          {resolvedSubtext}
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-14 py-4 text-sm font-body font-medium tracking-[0.22em] rounded-full transition-all duration-300"
          style={{
            background: brand.btnGradient,
            color: "#fff",
            boxShadow: `0 8px 32px rgba(${brand.primaryRgb},0.45)`,
          }}
          onMouseOver={e => { e.currentTarget.style.boxShadow = `0 14px 42px rgba(${brand.primaryRgb},0.62)`; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseOut={e => { e.currentTarget.style.boxShadow = `0 8px 32px rgba(${brand.primaryRgb},0.45)`; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          {resolvedButton}
        </a>

        {/* After-hours call notice */}
        <p className="font-body text-xs text-[#9E9E9E] mt-6 leading-relaxed">
          Want to book <span className="font-medium text-[#8E8E8E]">outside business hours</span>? Call us directly —{" "}
          <a
            href="tel:+17144879379"
            className="font-medium transition-colors hover:opacity-80"
            style={{ color: brand.primary }}
          >
            (714) 487-9379
          </a>
        </p>
      </motion.div>
    </section>
  );
}