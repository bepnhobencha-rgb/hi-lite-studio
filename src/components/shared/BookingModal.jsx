import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Phone, ArrowRight, CalendarCheck } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";
import { useBrand } from "@/lib/BrandContext";

export default function BookingModal({ isOpen, onClose }) {
  const brand = useBrand();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
              {/* Top accent */}
              <div className="h-1 w-full" style={{ background: brand.btnGradient }} />

              <div className="p-8 sm:p-10">
                {/* Close */}
                <button
                  onClick={onClose}
                  className="absolute top-5 right-5 text-[#AEAEAE] hover:text-[#2C2C2C] transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #fdf5f6, #f5e8ea)" }}>
                    <CalendarCheck size={28} strokeWidth={1.4} style={{ color: brand.primary }} />
                  </div>
                </div>

                {/* Title */}
                <h2 className="font-heading text-2xl md:text-3xl font-light text-center text-foreground tracking-wide mb-2">
                  Ready to Book?
                </h2>
                <p className="font-body text-sm text-[#8E8E8E] text-center leading-relaxed mb-8">
                  You'll be taken to our secure booking system to select your service and time.
                </p>

                {/* Hours notice */}
                <div className="bg-[#F8F5F0] border border-[#ede8e0] rounded-2xl p-5 mb-8">
                  <div className="flex items-start gap-3 mb-3">
                    <Clock size={16} className="mt-0.5 shrink-0" style={{ color: brand.primary }} />
                    <div>
                      <p className="font-body text-sm font-medium text-[#2C2C2C]">Business Hours</p>
                      <p className="font-body text-xs text-[#8E8E8E] mt-0.5">Mon – Sun: 9:00 AM – 7:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="mt-0.5 shrink-0" style={{ color: brand.primary }} />
                    <div>
                      <p className="font-body text-sm font-medium text-[#2C2C2C]">Need a time outside these hours?</p>
                      <p className="font-body text-xs text-[#8E8E8E] mt-0.5">
                        Call us directly —{" "}
                        <a
                          href="tel:+17144879379"
                          className="font-semibold transition-opacity hover:opacity-75"
                          style={{ color: brand.primary }}
                        >
                          (714) 487-9379
                        </a>
                        {" "}and we'll take care of you.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA buttons */}
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2.5 w-full py-4 text-sm font-body font-medium tracking-[0.18em] rounded-full transition-all duration-300 mb-3"
                  style={{
                    background: brand.btnGradient,
                    color: "#fff",
                    boxShadow: `0 8px 28px rgba(${brand.primaryRgb},0.45)`,
                  }}
                  onMouseOver={e => { e.currentTarget.style.boxShadow = `0 12px 36px rgba(${brand.primaryRgb},0.6)`; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseOut={e => { e.currentTarget.style.boxShadow = `0 8px 28px rgba(${brand.primaryRgb},0.45)`; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  Continue to Booking <ArrowRight size={15} />
                </a>

                <button
                  onClick={onClose}
                  className="w-full py-3 text-sm font-body text-[#AEAEAE] hover:text-[#2C2C2C] transition-colors tracking-wide"
                >
                  Not now
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}