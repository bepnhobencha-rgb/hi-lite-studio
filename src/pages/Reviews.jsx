import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { IMAGES } from "@/lib/constants";

import SectionHeader from "@/components/shared/SectionHeader";
import BookingCTA from "@/components/shared/BookingCTA";

const reviews = [
  {
    name: "Jessica M.",
    rating: 5,
    text: "Absolutely incredible experience. From the moment I walked in, I felt so relaxed. The scalp massage was heavenly, and my hair feels amazing. I will definitely be coming back.",
  },
  {
    name: "Sarah L.",
    rating: 5,
    text: "This is not your average salon. It is truly a luxury experience. The hot stone therapy combined with the herbal treatment was life-changing. My stress just melted away.",
  },
  {
    name: "Emily T.",
    rating: 5,
    text: "I got the Royal package and it was worth every penny. The staff was so attentive and professional. I left feeling like a completely new person. Highly recommend.",
  },
  {
    name: "Amanda R.",
    rating: 5,
    text: "I brought my mom here for her birthday and she absolutely loved it. The atmosphere is so calming and beautiful. The VVIP treatment is beyond amazing.",
  },
  {
    name: "Michelle K.",
    rating: 5,
    text: "Best head spa in the area, hands down. The Deluxe package with the foot massage add-on was the perfect way to unwind after a stressful week.",
  },
  {
    name: "Tina W.",
    rating: 5,
    text: "I have been searching for a proper head spa experience and finally found it here. The Gua Sha treatment was incredibly soothing. My scalp has never felt this clean.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function Reviews() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[420px] md:h-[520px] flex items-end overflow-hidden">
        <img
          src="https://media.base44.com/images/public/69cdb2c167f73801514de491/e7a72c70d_Gemini_Generated_Image_7zxufn7zxufn7zxu.png"
          alt="Client receiving head spa treatment at Hi-Lite Studio"
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={{ filter: "brightness(0.88) saturate(0.88) contrast(1.06) sepia(0.12) hue-rotate(-5deg)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.08) 55%, rgba(0,0,0,0.0) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-16 w-full">
          <p className="font-body text-[10px] tracking-[0.5em] uppercase mb-3" style={{ color: "#C4919A" }}>
            What Clients Say
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-[0.04em]">
            Client Reviews
          </h1>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-40 md:py-56 px-4 bg-[#F8F5F0]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Trusted by Our Clients"
            title="Voices of Relaxation"
            subtitle="Hear from those who have experienced the Hi-Lite Studio difference."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.09 }}
                className="bg-white border border-[#ede8e0] rounded-2xl p-10 flex flex-col shadow-[0_2px_18px_rgba(196,145,154,0.08)] hover:shadow-[0_6px_30px_rgba(196,145,154,0.16)] transition-shadow duration-400"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={13} className="fill-[#C4919A] text-[#C4919A]" />
                  ))}
                </div>
                <p className="font-body text-sm text-[#8E8E8E] leading-[1.95] flex-1 italic">
                  "{r.text}"
                </p>
                <div className="mt-8 pt-6 border-t border-[#ede8e0]">
                  <p className="font-body text-sm font-medium text-foreground tracking-wide">
                    — {r.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA
        headline="Join Our Happy Clients"
        subtext="Experience the luxury relaxation that keeps our clients coming back."
      />
    </div>
  );
}