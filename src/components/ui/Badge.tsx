// src/components/ui/Badge.tsx

import React from "react";

interface BadgeProps {
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <div className="inline-flex items-center justify-center gap-2 rounded-3xl border-[2px] border-[#2e2e2e] backdrop-blur px-5 py-3">
      <span className="font-alexandria text-[14px] leading-4 text-green-badge-text text-green-500/100">
        {text}
      </span>
    </div>
  );
};

export default Badge;
