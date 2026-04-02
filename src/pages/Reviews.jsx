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
    text: "Absolutely incredible experience! From the moment I walked in, I felt so relaxed. The scalp massage was heavenly, and my hair feels amazing. I will definitely be coming back.",
  },
  {
    name: "Sarah L.",
    rating: 5,
    text: "This is not your average salon. It is truly a luxury experience. The hot stone therapy combined with the herbal treatment was life-changing. My stress just melted away.",
  },
  {
    name: "Emily T.",
    rating: 5,
    text: "I got the Royal package and it was worth every penny. The staff was so attentive and professional. I left feeling like a completely new person. Highly recommend!",
  },
  {
    name: "Amanda R.",
    rating: 5,
    text: "I brought my mom here for her birthday and she absolutely loved it. The atmosphere is so calming and beautiful. The VVIP treatment is beyond amazing.",
  },
  {
    name: "Michelle K.",
    rating: 5,
    text: "Best head spa in Anaheim, hands down! The Deluxe package with the foot massage add-on was the perfect way to unwind after a stressful week.",
  },
  {
    name: "Tina W.",
    rating: 5,
    text: "I have been searching for a proper head spa experience and finally found it here. The Gua Sha treatment was incredibly soothing. My scalp has never felt this clean and healthy.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Reviews() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-80 md:h-[420px] flex items-end overflow-hidden">
        <img
          src={IMAGES.treatment2}
          alt="Relaxing head spa"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-3">
            What Clients Say
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-wide">
            Reviews
          </h1>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-28 md:py-40 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Trusted by Our Clients"
            title="Voices of Relaxation"
            subtitle="Hear from those who have experienced the HI-LITE HEAD SPA difference."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="bg-white border border-[#e8dfd4] rounded-sm p-10 flex flex-col shadow-sm"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={13} className="fill-[#D4B996] text-[#D4B996]" />
                  ))}
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 italic">
                  "{r.text}"
                </p>
                <p className="font-body text-sm font-medium text-foreground mt-8">
                  — {r.name}
                </p>
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