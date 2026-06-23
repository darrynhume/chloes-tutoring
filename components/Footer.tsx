import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3E5F34] text-white/90 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-y-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-white/95 flex items-center justify-center text-sage-dark font-semibold">
              C
            </div>
            <span className="font-semibold text-xl tracking-tight text-white">Chloe&apos;s Tutoring</span>
          </div>
          <p className="text-sm leading-relaxed text-white/70 max-w-[19rem]">
            Qualified primary teacher providing personalised, nurturing tutoring 
            on the Gold Coast and surrounds.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-sm">
          <div className="font-semibold tracking-wide mb-4 text-white">Quick Links</div>
          <ul className="space-y-2.5">
            <li><a href="#about" className="hover:text-white">About Chloe</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#why-us" className="hover:text-white">Why Choose Chloe</a></li>
            <li><a href="#location" className="hover:text-white">Location &amp; Availability</a></li>
            <li><a href="#contact" className="hover:text-white">Book a Consultation</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-sm">
          <div className="font-semibold tracking-wide mb-4 text-white">Get in Touch</div>
          <div className="space-y-3 text-white/80">
            <div>
              <div className="font-medium text-white">Phone</div>
              <a href="tel:0417783386" className="hover:text-white">0417 783 386</a>
            </div>
            <div>
              <div className="font-medium text-white">Email</div>
              <a href="mailto:chloe.rahurahu96@gmail.com" className="hover:text-white break-all">
                chloe.rahurahu96@gmail.com
              </a>
            </div>
            <div>
              <div className="font-medium text-white">Location</div>
              Gold Coast and Surrounds, Queensland
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-white/20 text-center text-xs text-white/60 max-w-6xl mx-auto px-6">
        © {currentYear} Chloe&apos;s Tutoring. All rights reserved. • Gold Coast, Queensland
      </div>
    </footer>
  );
}
