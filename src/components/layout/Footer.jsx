import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";
import { useBrand } from "@/lib/BrandContext";

export default function Footer() {
  const brand = useBrand();
  return (
    <footer className="bg-[#F8F5F0] border-t border-[#e8dfd4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-semibold tracking-wider mb-3 text-[#2C2C2C]">
              {brand.name}
            </h3>
            <div className="w-8 h-px mb-4" style={{ background: brand.primary }} />
            <p className="font-body text-sm text-[#8E8E8E] italic">
              {brand.slogan}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-5 tracking-wide text-[#2C2C2C]">
              Explore
            </h4>
            <div className="space-y-3 font-body text-sm">
              {[
                { label: "Services", path: "/services" },
                { label: "Promotions", path: "/promotions" },
                { label: "Gallery", path: "/gallery" },
                { label: "About", path: "/about" },
                { label: "Gift Cards", path: "/gift-cards" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-[#8E8E8E] hover:text-[#2C2C2C] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-5 tracking-wide text-[#2C2C2C]">
              Contact
            </h4>
            <div className="space-y-4 font-body text-sm text-[#8E8E8E]">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: brand.primary }} />
                <span>{brand.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0" style={{ color: brand.primary }} />
                <a href={`tel:${brand.phone}`} className="hover:text-[#2C2C2C] transition-colors">
                  {brand.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0" style={{ color: brand.primary }} />
                <a href={`mailto:${brand.email}`} className="hover:text-[#2C2C2C] transition-colors">
                  {brand.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="shrink-0" style={{ color: brand.primary }} />
                <span>{brand.hours}</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-5 tracking-wide text-[#2C2C2C]">
              {brand.footerCtaTitle}
            </h4>
            <p className="font-body text-sm text-[#8E8E8E] mb-6">
              {brand.footerCta}
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 text-white text-sm font-body font-medium tracking-wider rounded-full transition-all duration-300"
              style={{ background: brand.btnGradient, boxShadow: `0 4px 14px rgba(${brand.primaryRgb},0.4)` }}
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[#e8dfd4] text-center">
          <p className="font-body text-xs text-[#8E8E8E] tracking-wide">
            © {new Date().getFullYear()} {brand.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}