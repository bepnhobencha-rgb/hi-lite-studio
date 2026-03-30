import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { BUSINESS, BOOKING_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-semibold tracking-wider mb-3">
              {BUSINESS.name}
            </h3>
            <p className="font-body text-sm text-primary-foreground/70 italic">
              {BUSINESS.slogan}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-4 tracking-wide">
              Explore
            </h4>
            <div className="space-y-2 font-body text-sm">
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
                  className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-4 tracking-wide">
              Contact
            </h4>
            <div className="space-y-3 font-body text-sm text-primary-foreground/70">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>{BUSINESS.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0" />
                <a href={`tel:${BUSINESS.phone}`} className="hover:text-primary-foreground transition-colors">
                  {BUSINESS.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-primary-foreground transition-colors">
                  {BUSINESS.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="shrink-0" />
                <span>{BUSINESS.hours}</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-4 tracking-wide">
              Ready to Relax?
            </h4>
            <p className="font-body text-sm text-primary-foreground/70 mb-4">
              Book your luxury head spa experience today.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary-foreground text-primary text-sm font-body font-medium tracking-wider rounded-sm hover:opacity-90 transition-opacity"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="font-body text-xs text-primary-foreground/50 tracking-wide">
            © {new Date().getFullYear()} {BUSINESS.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}