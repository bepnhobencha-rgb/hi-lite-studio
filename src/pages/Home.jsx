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
  transition: { duration: 0.8 },
};

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.treatmentAction1}
          alt="Hi-Lite Studio head spa treatment"
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(1.1) saturate(0.85) contrast(0.96)" }}
        />
        {/* Very soft overlay — 15-20% */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 40%, rgba(0,0,0,0.38) 100%)" }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="font-body text-[10px] tracking-[0.55em] uppercase mb-8"
          style={{ color: "#D4B996", letterSpacing: "0.55em" }}
        >
          Your Sanctuary for Relaxation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-[0.03em] leading-[1.12]"
        >
          Reset Your Mind.
          <br />
          <span className="italic font-light">Revive Your Scalp.</span>
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="flex items-center justify-center gap-3 mt-10 mb-8"
        >
          <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, rgba(212,185,150,0.7))" }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#D4B996" }} />
          <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, rgba(212,185,150,0.7))" }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.9 }}
          className="font-body text-sm md:text-base text-white/80 max-w-md mx-auto leading-[1.9] tracking-wide"
        >
          A luxury head spa experience designed to melt stress away, detox your scalp, and restore your energy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-14 py-4 text-sm font-body font-medium tracking-[0.2em] rounded-full transition-all duration-400"
            style={{
              background: "linear-gradient(135deg, #D4B996 0%, #C2A57F 100%)",
              color: "#fff",
              boxShadow: "0 8px 32px rgba(212,185,150,0.55), 0 2px 8px rgba(0,0,0,0.08)",
            }}
            onMouseOver={e => { e.currentTarget.style.boxShadow = "0 12px 36px rgba(212,185,150,0.7), 0 3px 10px rgba(0,0,0,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseOut={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(212,185,150,0.55), 0 2px 8px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Book Your Experience
          </a>
          <Link
            to="/services"
            className="flex items-center gap-2.5 text-white/75 hover:text-white text-sm font-body tracking-widest uppercase transition-colors duration-300"
            style={{ fontSize: "11px", letterSpacing: "0.18em" }}
          >
            View Services <ArrowRight size={13} />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-16" style={{ background: "linear-gradient(to bottom, rgba(212,185,150,0.6), transparent)" }} />
      </motion.div>
    </section>
  );
}

function LocationNote() {
  return (
    <div className="py-7 px-4 bg-white border-b border-[#ede8e0] text-center">
      <p className="font-body text-[11px] text-[#9E9E9E] max-w-xl mx-auto leading-relaxed tracking-widest uppercase">
        5938 Westminster Blvd., Westminster, CA &nbsp;·&nbsp; Mon – Sun: 9 AM – 7 PM
      </p>
    </div>
  );
}

function ProblemSection() {
  const problems = [
    { icon: Brain, text: "Stress & Mental Fatigue" },
    { icon: Sparkles, text: "Head & Neck Tension" },
    { icon: Droplets, text: "Oily Scalp or Buildup" },
    { icon: Leaf, text: "Dull, Heavy Hair" },
  ];

  return (
    <section className="py-40 md:py-56 px-4 bg-[#F8F5F0]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Sound Familiar?"
          title="When Life Weighs You Down"
          subtitle="Modern life takes a toll on your mind and scalp. This is your invitation to let go."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="text-center p-12 bg-white rounded-xl border border-[#ede8e0] shadow-[0_2px_20px_rgba(212,185,150,0.08)] hover:shadow-[0_6px_28px_rgba(212,185,150,0.16)] transition-shadow duration-500"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-7" style={{ background: "linear-gradient(135deg, #faf6f0, #f3ece1)" }}>
                <item.icon size={24} strokeWidth={1.3} style={{ color: "#C2A57F" }} />
              </div>
              <p className="font-body text-sm text-foreground tracking-wide leading-relaxed">{item.text}</p>
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
    "Scalp detox & deep cleanse",
    "Improved circulation",
    "Healthier, revitalized hair",
    "Complete mental reset",
  ];

  return (
    <section className="py-40 md:py-56 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div {...fadeUp}>
          <p className="font-body text-[10px] tracking-[0.45em] uppercase mb-5" style={{ color: "#C2A57F" }}>
            The Ritual
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-wide leading-[1.2] mb-12">
            What a Head Spa <br /><span className="italic">Restores in You</span>
          </h2>
          <div className="space-y-0">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.09 }}
                className="flex items-center gap-6 py-5 border-b border-[#ede8e0]"
              >
                <span className="font-body text-[11px] tracking-wider w-6 shrink-0" style={{ color: "#D4B996" }}>0{i + 1}</span>
                <span className="font-body text-sm text-foreground tracking-wide">{b}</span>
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
            src={IMAGES.hairResult}
            alt="Beautiful hair result after Hi-Lite Studio treatment"
            className="w-full h-[520px] object-cover object-top rounded-2xl"
            style={{ filter: "brightness(1.06) saturate(0.9) contrast(0.97)" }}
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}
          />
          <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.06), transparent)" }} />
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedServices() {
  const featured = SERVICES.slice(0, 3);

  return (
    <section className="py-40 md:py-56 px-4 bg-[#F8F5F0]">
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
              transition={{ ...fadeUp.transition, delay: i * 0.12 }}
              className="bg-white border border-[#ede8e0] rounded-2xl p-10 flex flex-col relative shadow-[0_4px_24px_rgba(212,185,150,0.1)] hover:shadow-[0_8px_40px_rgba(212,185,150,0.2)] transition-all duration-500 hover:-translate-y-1"
            >
              {s.badge && (
                <span
                  className="absolute top-5 right-5 text-[10px] font-body tracking-[0.15em] text-white uppercase px-4 py-1.5 rounded-full"
                  style={{ background: "linear-gradient(135deg, #D4B996 0%, #C2A57F 100%)" }}
                >
                  {s.badge}
                </span>
              )}
              {/* Gold top accent line */}
              <div className="w-8 h-px mb-8" style={{ background: "linear-gradient(to right, #D4B996, #C2A57F)" }} />
              <h3 className="font-heading text-2xl font-medium text-foreground mb-1 tracking-wide">
                {s.name}
              </h3>
              <p className="font-body text-[11px] text-[#9E9E9E] mb-5 tracking-widest uppercase">
                {s.duration}
              </p>
              <p className="font-heading text-4xl font-light text-foreground mb-8">
                ${s.price}
              </p>
              <ul className="space-y-3 mb-10 flex-1">
                {s.features.map((f, j) => (
                  <li key={j} className="font-body text-sm text-[#8E8E8E] flex items-start gap-3 leading-relaxed">
                    <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: "#D4B996" }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-4 text-sm font-body tracking-[0.18em] rounded-full transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #D4B996 0%, #C2A57F 100%)",
                  color: "#fff",
                  boxShadow: "0 6px 20px rgba(212,185,150,0.4)",
                }}
                onMouseOver={e => { e.currentTarget.style.boxShadow = "0 10px 28px rgba(212,185,150,0.55)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseOut={e => { e.currentTarget.style.boxShadow = "0 6px 20px rgba(212,185,150,0.4)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link
            to="/services"
            className="inline-flex items-center gap-2.5 font-body text-[11px] tracking-[0.22em] uppercase transition-colors duration-300 hover:opacity-100"
            style={{ color: "#C2A57F" }}
          >
            View All Services <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ImageStrip() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 h-72 md:h-96">
      {[
        { src: IMAGES.reception, filter: "brightness(1.08) saturate(0.92)" },
        { src: IMAGES.treatmentRoom, filter: "brightness(1.06) saturate(0.88) contrast(0.96)" },
        { src: IMAGES.hairResult, filter: "brightness(1.06) saturate(0.9)" },
        { src: IMAGES.scalptool, filter: "brightness(1.08) saturate(0.88)" },
      ].map((img, i) => (
        <div key={i} className="overflow-hidden relative">
          <img
            src={img.src}
            alt="Hi-Lite Studio experience"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            style={{ filter: img.filter }}
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
      <LocationNote />
      <ProblemSection />
      <BenefitsSection />
      <FeaturedServices />
      <ImageStrip />
      <BookingCTA />
    </div>
  );
}