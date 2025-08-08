import React from "react";
import Badge from "../ui/Badge";

interface StatisticItem {
  value: string;
  label: string;
}

interface StatisticCardProps extends StatisticItem {
  delay: number;
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  value,
  label,
  delay,
}) => (
  <div
    className="
      flex flex-col items-center justify-center
      p-12 gap-4
      bg-[rgba(255,255,255,0.05)]
      border border-[rgba(255,255,255,0.1)]
      rounded-xl
      transition-transform duration-300
      hover:scale-[1.02] hover:bg-white/10 hover:shadow-lg
      animate-fade-in-up
    "
    style={{ animationDelay: `${delay}ms` }}
  >
    <p className="font-['DM_Sans'] text-[32px] font-medium text-[#99E39E] leading-[120%] tracking-[-0.02em] text-center">
      {value}
    </p>
    <p className="font-['DM_Sans'] text-[16px] leading-[140%] text-center text-[rgba(255,255,255,0.8)]">
      {label}
    </p>
  </div>
);

const StatisticsSection: React.FC = () => {
  const statistics: StatisticItem[] = [
    { value: "6M+", label: "Active users" },
    { value: "24/7", label: "Users support" },
    { value: "160+", label: "Countries" },
    { value: "$22B+", label: "Trade volume" },
  ];

  return (
    <section
      className="
        relative flex flex-col items-center
        py-[120px] gap-[72px]
        w-full bg-[#0F0F0F] text-center
        overflow-hidden animate-fade-in
      "
    >
      {/* Glow background ellipse */}
      <div className="p-10 bg-[#0f0f0f]">
      <Badge text="Statistics" />
    </div>

      {/* Heading */}
      <h2 className="font-['Alexandria'] text-[48px] text-[#E5E5E5] capitalize leading-[100%] z-10">
        Completely Leverage Product
      </h2>

      {/* Description */}
      <p className="font-['Inter'] text-[18px] leading-[140%] text-center text-[#999999] max-w-[644px] z-10">
        Leading the way in blockchain innovation, we are redefining how the
        world connects, secures, and transacts, bringing a new era of
        decentralized technology.
      </p>

      {/* Statistics Cards */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-[24px] max-w-[1200px] w-full px-4 z-10
        "
      >
        {statistics.map((stat, index) => (
          <StatisticCard
            key={index}
            value={stat.value}
            label={stat.label}
            delay={index * 150}
          />
        ))}
      </div>
    </section>
  );
};

export default StatisticsSection;
