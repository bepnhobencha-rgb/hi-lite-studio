import React from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { IMAGES, GIFT_CARD_URL, BUSINESS } from "@/lib/constants";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

const goldBtn = {
  background: "linear-gradient(135deg, #D4B996 0%, #C2A57F 100%)",
  color: "#fff",
  boxShadow: "0 6px 24px rgba(212,185,150,0.45)",
};

export default function GiftCards() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[380px] md:h-[460px] flex items-end overflow-hidden">
        <img
          src={IMAGES.giftCard}
          alt="Hi-Lite Studio gift card"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "brightness(1.08) saturate(0.9) contrast(0.96)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.48) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.04) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-16 w-full">
          <p className="font-body text-[10px] tracking-[0.5em] uppercase mb-3" style={{ color: "#D4B996" }}>
            The Perfect Gift
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-[0.04em]">
            Gift Cards
          </h1>
        </div>
      </section>

      {/* Gift Card Content */}
      <section className="py-40 md:py-56 px-4 bg-[#F8F5F0]">
        <div className="max-w-4xl mx-auto">

          {/* Intro */}
          <motion.div {...fadeUp} className="text-center mb-24">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8" style={{ background: "linear-gradient(135deg, #faf6f0, #f0e8da)" }}>
              <Gift size={36} strokeWidth={1} style={{ color: "#C2A57F" }} />
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground tracking-wide mb-6 leading-[1.2]">
              Give the Gift of <span className="italic">Relaxation</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10" style={{ background: "linear-gradient(to right, transparent, #D4B996)" }} />
              <div className="w-1 h-1 rounded-full" style={{ background: "#D4B996" }} />
              <div className="h-px w-10" style={{ background: "linear-gradient(to left, transparent, #D4B996)" }} />
            </div>
            <p className="font-body text-sm text-[#8E8E8E] max-w-lg mx-auto leading-[1.9]">
              A Hi-Lite Studio gift card is the perfect way to show someone you care. Treat a loved one to a luxury head spa experience they will never forget.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="bg-white border border-[#ede8e0] rounded-2xl p-14 text-center shadow-[0_4px_24px_rgba(212,185,150,0.1)] hover:shadow-[0_8px_36px_rgba(212,185,150,0.2)] transition-all duration-400"
            >
              <h3 className="font-heading text-2xl font-medium text-foreground mb-4 tracking-wide">
                Purchase Online
              </h3>
              <div className="w-6 h-px mx-auto mb-5" style={{ background: "linear-gradient(to right, #D4B996, #C2A57F)" }} />
              <p className="font-body text-sm text-[#8E8E8E] leading-[1.9] mb-12">
                Buy a gift card instantly through our online booking system. Choose any amount or service.
              </p>
              <a
                href={GIFT_CARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 text-sm font-body font-medium tracking-[0.18em] rounded-full transition-all duration-300"
                style={goldBtn}
                onMouseOver={e => { e.currentTarget.style.boxShadow = "0 10px 30px rgba(212,185,150,0.6)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseOut={e => { e.currentTarget.style.boxShadow = "0 6px 24px rgba(212,185,150,0.45)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Buy via Booking System
              </a>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="bg-white border border-[#ede8e0] rounded-2xl p-14 text-center shadow-[0_4px_24px_rgba(212,185,150,0.1)] hover:shadow-[0_8px_36px_rgba(212,185,150,0.2)] transition-all duration-400"
            >
              <h3 className="font-heading text-2xl font-medium text-foreground mb-4 tracking-wide">
                Contact Us Directly
              </h3>
              <div className="w-6 h-px mx-auto mb-5" style={{ background: "linear-gradient(to right, #D4B996, #C2A57F)" }} />
              <p className="font-body text-sm text-[#8E8E8E] leading-[1.9] mb-12">
                Prefer a personalized touch? Contact us to arrange a custom gift card for any occasion.
              </p>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-block px-10 py-4 text-sm font-body font-medium tracking-[0.18em] rounded-full border transition-all duration-300 hover:text-white"
                style={{ borderColor: "#D4B996", color: "#C2A57F" }}
                onMouseOver={e => { e.currentTarget.style.background = "linear-gradient(135deg, #D4B996, #C2A57F)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(212,185,150,0.45)"; }}
                onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C2A57F"; e.currentTarget.style.boxShadow = "none"; }}
              >
                Call Us for Gift Cards
              </a>
            </motion.div>
          </div>

          {/* Occasions */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-24 text-center"
          >
            <p className="font-body text-[10px] tracking-[0.5em] uppercase mb-8" style={{ color: "#C2A57F" }}>
              Perfect For
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Birthdays", "Anniversaries", "Mother's Day", "Self-Care", "Thank You", "Holidays"].map(
                (occasion) => (
                  <span
                    key={occasion}
                    className="px-6 py-2.5 bg-white border border-[#ede8e0] rounded-full font-body text-sm text-[#8E8E8E] tracking-wide"
                  >
                    {occasion}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}