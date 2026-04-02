import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IMAGES, BOOKING_URL, SERVICES } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import BookingCTA from "@/components/shared/BookingCTA";
import { ArrowRight, Sparkles, Droplets, Heart, Brain, Leaf } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

// Reusable dark button style
const btnDark = "inline-block px-10 py-4 bg-foreground text-background text-sm font-body font-medium tracking-widest rounded-full hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] hover:opacity-85 transition-all duration-300";
const btnOutline = "inline-block px-10 py-4 border border-foreground text-foreground text-sm font-body font-medium tracking-widest rounded-full hover:bg-foreground hover:text-background hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-all duration-300";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Luxury head spa treatment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-body text-xs tracking-[0.45em] uppercase text-gold mb-8"
        >
          Your Sanctuary for Relaxation
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-wide leading-tight"
        >
          Reset Your Mind.
          <br />
          <span className="italic">Revive Your Scalp.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-body text-sm md:text-base text-white/75 mt-8 max-w-xl mx-auto leading-relaxed"
        >
          A luxury head spa experience designed to melt stress away, detox your scalp, and restore your energy.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-4 bg-white text-neutral-900 text-sm font-body font-medium tracking-widest rounded-full hover:shadow-[0_0_28px_rgba(255,255,255,0.3)] hover:opacity-95 transition-all duration-300"
          >
            Book Your Experience
          </a>
          <Link
            to="/services"
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-body tracking-wide transition-colors"
          >
            View Services <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-14 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}

function DisneylandNote() {
  return (
    <div className="py-8 px-4 bg-card border-b border-border text-center">
      <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Conveniently located at 5938 Westminster Blvd., Westminster, CA, Hi - Lite Studio offers a peaceful place to relax and recharge.
      </p>
    </div>
  );
}

function ProblemSection() {
  const problems = [
    { icon: Brain, text: "Stress and fatigue" },
    { icon: Sparkles, text: "Head and neck tension" },
    { icon: Droplets, text: "Oily scalp or buildup" },
    { icon: Leaf, text: "Hair feeling dull or heavy" },
  ];

  return (
    <section className="py-28 md:py-40 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Sound Familiar?"
          title="When Life Weighs You Down"
          subtitle="Modern life takes a toll on your mind and scalp. Recognize any of these?"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="text-center p-10 bg-card rounded-sm border border-border"
            >
              <item.icon size={28} className="mx-auto mb-5 text-gold" strokeWidth={1.5} />
              <p className="font-body text-sm text-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    "Immediate stress relief",
    "Scalp detox",
    "Better circulation",
    "Healthier hair",
    "Mental reset",
  ];

  return (
    <section className="py-28 md:py-40 px-4 bg-card">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeUp}>
          <p className="font-body text-xs tracking-[0.35em] uppercase text-gold mb-4">
            The Ritual
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-wide mb-10">
            What a Head Spa <span className="italic">Restores</span>
          </h2>
          <div className="space-y-5">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="flex items-center gap-5 py-4 border-b border-border"
              >
                <span className="text-xs font-body text-gold w-6">0{i + 1}</span>
                <span className="font-body text-foreground">{b}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="relative"
        >
          <img
            src={IMAGES.scalp}
            alt="Scalp massage treatment"
            className="w-full h-[520px] object-cover rounded-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-sm" />
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedServices() {
  const featured = SERVICES.slice(0, 3);

  return (
    <section className="py-28 md:py-40 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Our Rituals"
          title="Signature Experiences"
          subtitle="Each session is a carefully crafted journey for your mind and scalp."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((s, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="bg-card border border-border rounded-sm p-10 flex flex-col relative"
            >
              {s.badge && (
                <span className="absolute top-4 right-4 text-xs font-body tracking-wider text-gold-foreground bg-gold px-3 py-1 rounded-full">
                  {s.badge}
                </span>
              )}
              <h3 className="font-heading text-2xl font-medium text-foreground mb-1">
                {s.name}
              </h3>
              <p className="font-body text-xs text-muted-foreground mb-5">
                {s.duration}
              </p>
              <p className="font-heading text-3xl font-light text-foreground mb-8">
                ${s.price}
              </p>
              <ul className="space-y-2.5 mb-10 flex-1">
                {s.features.map((f, j) => (
                  <li key={j} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-3.5 bg-foreground text-background text-sm font-body tracking-wider rounded-full hover:shadow-[0_0_18px_rgba(0,0,0,0.2)] hover:opacity-85 transition-all duration-300"
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground tracking-wide transition-colors"
          >
            View All Services <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ImageStrip() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 h-72 md:h-96">
      {[IMAGES.treatment1, IMAGES.treatment2, IMAGES.massage, IMAGES.interior].map((img, i) => (
        <div key={i} className="overflow-hidden">
          <img
            src={img}
            alt="Hi - Lite Studio experience"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      ))}
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Hero />
      <DisneylandNote />
      <ProblemSection />
      <BenefitsSection />
      <FeaturedServices />
      <ImageStrip />
      <BookingCTA />
    </div>
  );
}