import React from "react";
import { motion } from "framer-motion";
import { IMAGES, BUSINESS } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import BookingCTA from "@/components/shared/BookingCTA";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-80 md:h-[420px] flex items-end overflow-hidden">
        <img
          src={IMAGES.interior}
          alt="Hi - Lite Studio interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-3">
            Our Story
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-wide">
            About {BUSINESS.name}
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-28 md:py-40 px-4 bg-background">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-4">
              Our Philosophy
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground tracking-wide mb-8">
              More Than a Salon. <br />
              <span className="italic">A Sanctuary.</span>
            </h2>
            <div className="space-y-5 font-body text-sm text-muted-foreground leading-relaxed">
              <p>
                {BUSINESS.name} was created with a singular vision: to provide a space where you can truly let go. This is not a regular salon — it is a luxury experience focused on stress relief, scalp detox, mental reset, and deep relaxation.
              </p>
              <p>
                Every ritual we offer is carefully designed to calm the mind and restore the body. From the moment you walk through our doors, you are enveloped in warmth, comfort, and care.
              </p>
              <p>
                Located in Westminster, CA, our spa blends modern techniques with time-honored traditions to deliver an experience unlike any other. We use premium products, personalized care, and a gentle, unhurried approach that honors your need for rest.
                </p>
                <p>
                Conveniently located at 5938 Westminster Blvd., Westminster, Hi - Lite Studio offers a peaceful place to relax and recharge.
              </p>
            </div>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
          >
            <img
              src={IMAGES.interior}
              alt="Inside Hi - Lite Studio"
              className="w-full h-[480px] object-cover rounded-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 md:py-36 px-4 bg-card">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="What We Believe"
            title="Our Guiding Values"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="text-center p-10 border border-border rounded-sm"
              >
                <div className="w-8 h-px bg-gold mx-auto mb-6" />
                <h3 className="font-heading text-2xl font-medium text-foreground mb-4 italic">
                  {v.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
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