import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <div className={`text-center mb-10 md:mb-12 ${className}`}>
      <h2 className="text-balance">{title}</h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl mx-auto text-text-muted text-lg leading-snug">
          {subtitle}
        </p>
      )}
    </div>
  );
}
