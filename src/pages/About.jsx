import React from "react";
import { motion } from "framer-motion";
import { IMAGES, BUSINESS } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import BookingCTA from "@/components/shared/BookingCTA";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[420px] md:h-[520px] flex items-end overflow-hidden">
        <img
          src="https://media.base44.com/images/public/69cdb2c167f73801514de491/0efb5ceb0_Unknown-46.jpg"
          alt="Hi-Lite head spa water treatment"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.82) saturate(0.75) contrast(1.08) sepia(0.18) hue-rotate(-10deg)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.08) 55%, rgba(0,0,0,0.0) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-16 w-full">
          <p className="font-body text-[10px] tracking-[0.5em] uppercase mb-3" style={{ color: "#C4919A" }}>
            Our Story
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-[0.04em]">
            About {BUSINESS.name}
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-40 md:py-56 px-4 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeUp}>
            <p className="font-body text-[10px] tracking-[0.5em] uppercase mb-5" style={{ color: "#B37880" }}>
              Our Philosophy
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground tracking-wide leading-[1.2] mb-8">
              More Than a Salon. <br />
              <span className="italic">A Sanctuary.</span>
            </h2>
            <div className="w-8 h-px mb-10" style={{ background: "linear-gradient(to right, #C4919A, #B37880)" }} />
            <div className="space-y-6 font-body text-sm text-[#8E8E8E] leading-[1.95]">
              <p>
                {BUSINESS.name} was created with a singular vision: to provide a space where you can truly let go. This is not a regular salon — it is a luxury experience focused on stress relief, scalp detox, mental reset, and deep relaxation.
              </p>
              <p>
                Every ritual we offer is carefully designed to calm the mind and restore the body. From the moment you walk through our doors, you are enveloped in warmth, comfort, and care.
              </p>
              <p>
                Founded in 2023, Hi-Lite Studio was born from a passion for bringing genuine luxury wellness to the heart of Westminster, CA — just 15 minutes from Huntington Beach. Our location was chosen with intention: a peaceful neighborhood retreat that feels worlds away from the everyday rush, yet close enough to be your regular escape.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
          >
            <img
              src="https://media.base44.com/images/public/69cdb2c167f73801514de491/8e25a2d23_Unknown-65.jpg"
              alt="Hi-Lite Studio specialist performing head spa treatment"
              className="w-full h-[520px] object-cover object-top rounded-2xl"
              style={{ filter: "brightness(0.88) saturate(0.72) contrast(1.08) sepia(0.22) hue-rotate(-15deg)", boxShadow: "0 24px 70px rgba(196,145,154,0.25), 0 4px 20px rgba(0,0,0,0.12)" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-36 md:py-48 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="What We Believe"
            title="Our Guiding Values"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Calm",
                text: "We create an environment of total serenity, where every detail supports your relaxation.",
              },
              {
                title: "Care",
                text: "Every treatment is personalized. We listen to your needs and tailor each session just for you.",
              },
              {
                title: "Quality",
                text: "We use only premium products and proven techniques to deliver exceptional results.",
              },
            ].map((v, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.12 }}
                className="text-center p-12 border border-[#ede8e0] rounded-2xl bg-[#F8F5F0] shadow-[0_2px_20px_rgba(196,145,154,0.08)] hover:shadow-[0_6px_32px_rgba(196,145,154,0.18)] transition-shadow duration-500"
              >
                <div className="flex items-center justify-center gap-2 mb-8">
                  <div className="h-px w-8" style={{ background: "linear-gradient(to right, transparent, #C4919A)" }} />
                  <div className="w-1 h-1 rounded-full" style={{ background: "#C4919A" }} />
                  <div className="h-px w-8" style={{ background: "linear-gradient(to left, transparent, #C4919A)" }} />
                </div>
                <h3 className="font-heading text-2xl font-medium text-foreground mb-4 italic tracking-wide">
                  {v.title}
                </h3>
                <p className="font-body text-sm text-[#8E8E8E] leading-[1.9]">
                  {v.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA
        headline="Experience the Difference"
        subtext="Step into our sanctuary and discover what true relaxation feels like."
      />
    </div>
  );
}