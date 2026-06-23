import React from "react";
import { LucideIcon } from "lucide-react";

interface WhyCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function WhyCard({ icon: Icon, title, description }: WhyCardProps) {
  return (
    <div className="flex gap-4">
      <div className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-xl bg-sage/10 text-sage-dark flex items-center justify-center">
        <Icon size={20} />
      </div>
      <div>
        <h4 className="font-semibold tracking-tight mb-1 text-base">{title}</h4>
        <p className="text-sm text-text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
