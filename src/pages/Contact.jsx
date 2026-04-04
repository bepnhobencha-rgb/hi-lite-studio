import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";
import BookingCTA from "@/components/shared/BookingCTA";
import { useBrand } from "@/lib/BrandContext";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

export default function Contact() {
  const brand = useBrand();

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: brand.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(brand.address)}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: brand.phone,
      href: `tel:${brand.phone}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: brand.email,
      href: `mailto:${brand.email}`,
    },
    {
      icon: Clock,
      label: "Hours",
      value: brand.hours,
      href: null,
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[420px] md:h-[520px] flex items-end overflow-hidden">
        <img
          src="https://media.base44.com/images/public/69cdb2c167f73801514de491/07aa412a4_Gemini_Generated_Image_ykw98gykw98gykw9.png"
          alt="Hi-Lite head spa treatment"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.88) saturate(0.88) contrast(1.06) sepia(0.12) hue-rotate(-5deg)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.08) 55%, rgba(0,0,0,0.0) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-16 w-full">
          <p className="font-body text-[10px] tracking-[0.5em] uppercase mb-3" style={{ color: brand.primary }}>
            Get in Touch
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-[0.04em]">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-40 md:py-56 px-4 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div {...fadeUp}>
            <p className="font-body text-[10px] tracking-[0.5em] uppercase mb-5" style={{ color: brand.accentText }}>
              Visit Us
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground tracking-wide leading-[1.2] mb-4">
              We Would Love <br />
              <span className="italic">to Hear from You</span>
            </h2>
            <div className="w-8 h-px mb-12" style={{ background: brand.btnGradient }} />

            <div className="space-y-7">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                  className="flex items-start gap-5 pb-7 border-b border-[#ede8e0]"
                >
                  <div className="p-3.5 bg-white rounded-xl border border-[#ede8e0] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                    <item.icon size={18} strokeWidth={1.5} style={{ color: brand.accentText }} />
                  </div>
                  <div>
                    <p className="font-body text-[10px] text-[#9E9E9E] tracking-[0.3em] uppercase mb-1.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.label === "Address" ? "_blank" : undefined}
                        rel={item.label === "Address" ? "noopener noreferrer" : undefined}
                        className="font-body text-sm text-foreground hover:underline leading-relaxed"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-body text-sm text-foreground leading-relaxed">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.45 }}
              className="mt-14"
            >
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-4 text-sm font-body font-medium tracking-[0.2em] rounded-full transition-all duration-300"
                style={{
                  background: brand.btnGradient,
                  color: "#fff",
                  boxShadow: `0 6px 24px rgba(${brand.primaryRgb},0.45)`,
                }}
                onMouseOver={e => { e.currentTarget.style.boxShadow = `0 10px 32px rgba(${brand.primaryRgb},0.6)`; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseOut={e => { e.currentTarget.style.boxShadow = `0 6px 24px rgba(${brand.primaryRgb},0.45)`; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Book Now
              </a>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="rounded-2xl overflow-hidden h-[420px] lg:h-full min-h-[420px] shadow-[0_8px_40px_rgba(0,0,0,0.1)]"
          >
            <iframe
              title={`${brand.name} Location`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(brand.address)}&t=&z=17&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-80"
            />
          </motion.div>
        </div>
      </section>

      <BookingCTA
        headline="Ready to Reset?"
        subtext="Your sanctuary awaits. Book your experience today."
      />
    </div>
  );
}