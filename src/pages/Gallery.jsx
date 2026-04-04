import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { IMAGES } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import BookingCTA from "@/components/shared/BookingCTA";

// Group 1: Warm / cream / gold — brand-aligned, lead the gallery
// Group 2: Neutral — treatment scenes, professional
// Group 3: Artistic / colorful — atmospheric accent, placed last
const galleryImages = [
  // Group 1 — Warm / cream / gold
  { src: IMAGES.reception,        alt: "Hi-Lite Studio reception with gold logo",    filter: "brightness(1.08) saturate(0.92) contrast(0.96)" },
  { src: IMAGES.hairResult,       alt: "Beautiful hair result after treatment",       filter: "brightness(1.06) saturate(0.9) contrast(0.97)" },
  { src: IMAGES.scalptool,        alt: "Scalp water treatment ritual",                filter: "brightness(1.07) saturate(0.88) contrast(0.96)" },
  { src: IMAGES.happyClients,     alt: "Happy clients at Hi-Lite Studio",             filter: "brightness(1.07) saturate(0.88) contrast(0.96)" },
  { src: IMAGES.groupClients,     alt: "Group celebration at Hi-Lite Studio",         filter: "brightness(1.06) saturate(0.88) contrast(0.96)" },
  // Group 2 — Neutral / treatment scenes
  { src: IMAGES.treatmentRoom,    alt: "Hi-Lite Studio treatment room with beds",     filter: "brightness(1.06) saturate(0.88) contrast(0.96)" },
  { src: IMAGES.ledTreatment,     alt: "LED scalp therapy treatment",                 filter: "brightness(1.08) saturate(0.82) contrast(0.96)" },
  { src: IMAGES.treatmentAction1, alt: "Spa treatment in progress",                   filter: "brightness(1.06) saturate(0.84) contrast(0.96)" },
  { src: IMAGES.treatmentAction2, alt: "Head spa session in progress",                filter: "brightness(1.06) saturate(0.84) contrast(0.96)" },
  // Group 3 — Artistic / colorful (blue/purple accent, placed last)
  { src: IMAGES.bonsaiWall,       alt: "Hi-Lite Studio circular bonsai art wall",     filter: "brightness(1.08) saturate(0.72) contrast(0.93)" },
  { src: IMAGES.valentineSofa,    alt: "Scalp water treatment halo device at Hi-Lite Studio", filter: "brightness(1.1) saturate(0.85) contrast(1.0) sepia(0.06)" },
  { src: IMAGES.scalptoolCurly,   alt: "Scalp treatment device on curly hair",        filter: "brightness(1.08) saturate(0.78) contrast(0.95)" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[420px] md:h-[520px] flex items-end overflow-hidden">
        <img
          src={IMAGES.luxuryMassage}
          alt="Luxury head spa treatment at Hi-Lite Studio"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.88) saturate(0.88) contrast(1.06) sepia(0.12) hue-rotate(-5deg)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.08) 55%, rgba(0,0,0,0.0) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-16 w-full">
          <p className="font-body text-[10px] tracking-[0.5em] uppercase mb-3" style={{ color: "#C4919A" }}>
            A Glimpse Inside
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-[0.04em]">
            Gallery
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-40 md:py-56 px-4 bg-[#F8F5F0]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Our Space"
            title="See the Experience"
            subtitle="Step inside Hi-Lite Studio and feel the calm before you arrive."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="cursor-pointer overflow-hidden rounded-2xl aspect-[4/3] shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_36px_rgba(0,0,0,0.12)] transition-shadow duration-400"
                onClick={() => setSelected(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  style={img.filter ? { filter: img.filter } : {}}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/85 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X size={26} />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selected.src}
              alt={selected.alt}
              className="max-w-full max-h-[88vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <BookingCTA />
    </div>
  );
}