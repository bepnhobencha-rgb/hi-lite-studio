import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-20 md:mb-24"
    >
      {eyebrow && (
        <p className="font-body text-xs tracking-[0.4em] uppercase mb-4"
          style={{ color: "#B37880" }}>
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-wide">
        {title}
      </h2>
      {/* Gold gradient divider */}
      <div className="flex items-center justify-center gap-3 mt-5 mb-5">
        <div className="h-px w-10" style={{ background: "linear-gradient(to right, transparent, #C4919A)" }} />
        <div className="w-1 h-1 rounded-full" style={{ background: "#C4919A" }} />
        <div className="h-px w-10" style={{ background: "linear-gradient(to left, transparent, #C4919A)" }} />
      </div>
      {subtitle && (
        <p className="font-body text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed mt-2">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}