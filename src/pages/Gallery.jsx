import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { IMAGES } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import BookingCTA from "@/components/shared/BookingCTA";

const galleryImages = [
  { src: IMAGES.reception, alt: "Hi-Lite Studio reception with gold logo", filter: "brightness(1.08) saturate(0.93)" },
  { src: IMAGES.treatmentRoom, alt: "Hi-Lite Studio treatment room", filter: "brightness(1.05) saturate(0.88) contrast(0.96)" },
  { src: IMAGES.frontDesk, alt: "Hi-Lite Studio front desk interior", filter: "brightness(1.06) saturate(0.85) contrast(0.95)" },
  { src: IMAGES.treatment1, alt: "Head spa wash treatment", filter: "" },
  { src: IMAGES.treatment2, alt: "Relaxing scalp therapy", filter: "" },
  { src: IMAGES.massage, alt: "Spa massage therapy", filter: "" },
  { src: IMAGES.scalp, alt: "Scalp massage close-up", filter: "" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[380px] md:h-[460px] flex items-end overflow-hidden">
        <img
          src={IMAGES.reception}
          alt="Hi-Lite Studio reception"
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={{ filter: "brightness(1.05) saturate(0.9)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.48) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.04) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-16 w-full">
          <p className="font-body text-[10px] tracking-[0.5em] uppercase mb-3" style={{ color: "#D4B996" }}>
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