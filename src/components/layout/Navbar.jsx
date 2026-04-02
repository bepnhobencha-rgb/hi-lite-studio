import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { BOOKING_URL, BUSINESS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Promotions", path: "/promotions" },
  { label: "Gallery", path: "/gallery" },
  { label: "About", path: "/about" },
  { label: "Reviews", path: "/reviews" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
  { label: "Gift Cards", path: "/gift-cards" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e8dfd4]"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-heading text-xl lg:text-2xl font-semibold tracking-wider text-[#2C2C2C]">
              {BUSINESS.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-body tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? "text-[#2C2C2C] font-medium"
                    : "text-[#8E8E8E] hover:text-[#2C2C2C]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-7 py-2.5 bg-[#D4B996] text-white text-sm font-body font-medium tracking-wider rounded-full shadow-[0_4px_14px_rgba(212,185,150,0.4)] hover:bg-[#C2A57F] transition-all duration-300"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-[#2C2C2C]"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-[#e8dfd4] overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-3 text-base font-body tracking-wide border-b border-[#e8dfd4]/60 transition-colors ${
                    location.pathname === link.path
                      ? "text-[#2C2C2C] font-medium"
                      : "text-[#8E8E8E]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full py-3.5 bg-[#D4B996] text-white text-center text-sm font-body font-medium tracking-wider rounded-full shadow-[0_4px_14px_rgba(212,185,150,0.4)] hover:bg-[#C2A57F] transition-all duration-300"
              >
                Book Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}