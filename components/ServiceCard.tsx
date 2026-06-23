import React from "react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="card p-7 flex flex-col h-full group">
      <div className="service-icon mb-5 group-hover:scale-105 transition-transform">
        <Icon size={26} strokeWidth={2.1} />
      </div>
      <h3 className="text-[1.1rem] mb-2.5 font-semibold text-sage-dark leading-snug tracking-tight">
        {title}
      </h3>
      <p className="text-[0.95rem] text-text-muted leading-relaxed flex-1">
        {description}
      </p>
    </div>
  );
}
