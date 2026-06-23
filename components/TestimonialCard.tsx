import React from "react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  detail: string; // e.g. "Parent of Year 3 student, Worongary"
  initials: string;
}

export default function TestimonialCard({ quote, name, detail, initials }: TestimonialCardProps) {
  return (
    <div className="testimonial card p-7 md:p-8 flex flex-col">
      <div className="text-sage-dark text-[15px] leading-relaxed mb-6 flex-1">
        “{quote}”
      </div>
      <div className="flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-full bg-sage-light flex-shrink-0 flex items-center justify-center text-sage-dark font-semibold text-sm">
          {initials}
        </div>
        <div>
          <div className="font-semibold tracking-tight text-sage-dark">{name}</div>
          <div className="text-xs text-text-muted tracking-wide">{detail}</div>
        </div>
      </div>
    </div>
  );
}
