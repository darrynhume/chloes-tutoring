"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Families Choose Chloe" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-warm-ivory/95 backdrop-blur-md border-b border-warm-sand">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-sage flex items-center justify-center text-white font-semibold text-lg">
            C
          </div>
          <span className="font-semibold text-2xl tracking-tight text-sage-dark">
            Chloe&apos;s Tutoring
          </span>

        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-9 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-[15px] font-medium"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Button href="#contact" variant="primary" className="text-sm px-6 py-3">
            Book a Free Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-sage-dark"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-warm-sand bg-warm-ivory mobile-menu">
          <div className="px-6 py-6 flex flex-col gap-5 text-base">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link py-1 font-medium"
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <Button href="#contact" variant="primary" className="w-full justify-center">
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
