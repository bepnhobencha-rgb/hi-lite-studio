import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { IMAGES } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import BookingCTA from "@/components/shared/BookingCTA";

const galleryImages = [
  { src: IMAGES.interior, alt: "HI-LITE HEAD SPA interior" },
  { src: IMAGES.hero, alt: "Luxury scalp treatment" },
  { src: IMAGES.treatment1, alt: "Head spa wash treatment" },
  { src: IMAGES.treatment2, alt: "Relaxing scalp therapy" },
  { src: IMAGES.massage, alt: "Spa massage therapy" },
  { src: IMAGES.scalp, alt: "Scalp massage close-up" },
  { src: IMAGES.facial, alt: "Facial and head treatment" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-80 md:h-[420px] flex items-end overflow-hidden">
        <img
          src={IMAGES.interior}
          alt="HI-LITE HEAD SPA gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-black/5" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-3">
            A Glimpse Inside
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-wide">
            Gallery
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-28 md:py-40 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Our Space"
            title="See the Experience"
            subtitle="Step inside HI-LITE HEAD SPA and feel the calm before you arrive."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="cursor-pointer overflow-hidden rounded-sm aspect-[4/3]"
                onClick={() => setSelected(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
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
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selected.src}
              alt={selected.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <BookingCTA />
    </div>
  );
}