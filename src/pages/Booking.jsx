import React from "react";
import { motion } from "framer-motion";
import { BOOKING_URL, IMAGES } from "@/lib/constants";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

const steps = [
  { num: "01", title: "Choose Your Service", desc: "Browse our rituals and select the experience that speaks to you." },
  { num: "02", title: "Pick Your Time", desc: "Select a date and time that fits your schedule." },
  { num: "03", title: "Confirm & Relax", desc: "Complete your booking and get ready for total relaxation." },
];

export default function Booking() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[380px] md:h-[460px] flex items-end overflow-hidden">
        <img
          src={IMAGES.treatmentRoom}
          alt="Hi-Lite Studio treatment room"
          className="absolute inset-0 w-full h-full object-cover object-left"
          style={{ filter: "brightness(1.05) saturate(0.88) contrast(0.96)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.48) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.04) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-16 w-full">
          <p className="font-body text-[10px] tracking-[0.5em] uppercase mb-3" style={{ color: "#C4919A" }}>
            Reserve Your Ritual
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-[0.04em]">
            Book Your Experience
          </h1>
        </div>
      </section>

      {/* Steps */}
      <section className="py-40 md:py-56 px-4 bg-[#F8F5F0]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="font-body text-[10px] tracking-[0.5em] uppercase mb-5" style={{ color: "#B37880" }}>
              Simple & Seamless
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground tracking-wide mb-5 leading-[1.2]">
              Book Your Session in Seconds
            </h2>
            {/* Divider */}
            <div className="flex items-center justify-center gap-3 mt-6 mb-6">
              <div className="h-px w-10" style={{ background: "linear-gradient(to right, transparent, #C4919A)" }} />
              <div className="w-1 h-1 rounded-full" style={{ background: "#C4919A" }} />
              <div className="h-px w-10" style={{ background: "linear-gradient(to left, transparent, #C4919A)" }} />
            </div>
            <p className="font-body text-sm text-[#8E8E8E] max-w-md mx-auto leading-[1.9] mb-24">
              Reserving your luxury head spa experience is easy. Follow three simple steps and your sanctuary awaits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.15 }}
                className="p-12 bg-white border border-[#ede8e0] rounded-2xl shadow-[0_2px_20px_rgba(196,145,154,0.08)] hover:shadow-[0_6px_32px_rgba(196,145,154,0.18)] transition-shadow duration-400"
              >
                <span className="font-heading text-5xl font-light" style={{ color: "rgba(196,145,154,0.35)" }}>
                  {step.num}
                </span>
                <div className="w-5 h-px mt-5 mb-5" style={{ background: "linear-gradient(to right, #C4919A, #B37880)" }} />
                <h3 className="font-heading text-xl font-medium text-foreground mb-3 tracking-wide">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-[#8E8E8E] leading-[1.9]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.35 }}
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-16 py-4.5 text-sm font-body font-medium tracking-[0.22em] rounded-full transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #C4919A 0%, #B37880 100%)",
                color: "#fff",
                boxShadow: "0 8px 32px rgba(196,145,154,0.5)",
              }}
              onMouseOver={e => { e.currentTarget.style.boxShadow = "0 14px 40px rgba(196,145,154,0.65)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseOut={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(196,145,154,0.5)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Book Now — Reserve Your Ritual
            </a>
            <p className="font-body text-[11px] text-[#9E9E9E] mt-5 tracking-widest">
              You will be redirected to our secure booking system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Assurance */}
      <section className="py-28 md:py-36 px-4 bg-white border-t border-[#ede8e0]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-10" style={{ background: "linear-gradient(to right, transparent, #C4919A)" }} />
              <div className="w-1 h-1 rounded-full" style={{ background: "#C4919A" }} />
              <div className="h-px w-10" style={{ background: "linear-gradient(to left, transparent, #C4919A)" }} />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground tracking-wide mb-5">
              Your Relaxation, <span className="italic">Guaranteed</span>
            </h3>
            <p className="font-body text-sm text-[#8E8E8E] leading-[1.9] max-w-md mx-auto">
              Every session is designed to deliver the ultimate relaxation experience. If you have any questions before booking, do not hesitate to contact us.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}