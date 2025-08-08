import React from "react";
import icon1 from "../../assets/iconfuture/icon1.svg";
import icon2 from "../../assets/iconfuture/icon2.svg";
import icon3 from "../../assets/iconfuture/icon3.svg";
import Badge from "../ui/Badge";

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

const featuresData: FeatureItem[] = [
  {
    icon: icon1,
    title: "Scalability",
    description: "Adapt and grow, no matter the demand on grow",
  },
  {
    icon: icon2,
    title: "Decentralisation",
    description:
      "Decentralization. Web3 aims to move away from the centralized",
  },
  {
    icon: icon3,
    title: "Connectivity",
    description:
      "Computers will be able to understand information similarly to humans",
  },
  {
    icon: icon1,
    title: "Scalability",
    description: "Adapt and grow, no matter the demand on grow",
  },
  {
    icon: icon2,
    title: "Decentralisation",
    description:
      "Decentralization. Web3 aims to move away from the centralized",
  },
  {
    icon: icon3,
    title: "Connectivity",
    description:
      "Computers will be able to understand information similarly to humans",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="relative isolate bg-[#000000] overflow-hidden px-6 md:px-12 lg:px-24 py-20 md:py-24">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -left-72 -top-[700px] h-[600px] w-[600px] rounded-full"
        style={{ background: "rgba(74, 90, 236, 0.16)", filter: "blur(140px)" }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-9 h-[425px] w-[606px] -translate-x-1/2 rounded-full"
        style={{ background: "rgba(74, 90, 236, 0.06)", filter: "blur(140px)" }}
      />

      {/* Header */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
        <div className="p-10 bg-black">
          <Badge text="Features" />
        </div>
        <h2 className="font-alexandria text-[36px] sm:text-[44px] lg:text-[48px] leading-[1] text-feature-white capitalize">
          Future Breakdown
        </h2>
        <p className="max-w-2xl font-inter text-[16px] sm:text-[18px] leading-[1.4] text-[#999999]">
          Secure, scalable, and decentralized solutions for your digital
          assets—experience the future of financial freedom.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="relative z-10 mx-auto mt-12 grid max-w-[1200px] from-[#121212] via-[#131313] to-[#141418]  grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="group rounded-xl px-9 py-12 text-center backdrop-blur-sm border border-[#2b2b2b] transition-all duration-300 hover:-translate-y-1"
            style={{ background: "rgba(255,255,255,0.07)" }}
          >
            <div className="mx-auto mb-9 flex h-12 w-12 items-center justify-center rounded-full ">
              <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
            </div>
            <div className="mx-auto flex max-w-[312px] flex-col items-center gap-4">
              <h3 className="font-inter text-[20px] leading-[28px] text-feature-white font-[400]">
                {feature.title}
              </h3>
              <p className="font-alexandria text-[16px] leading-5 text-[#999999]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
