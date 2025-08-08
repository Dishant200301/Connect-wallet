import React from "react";
import { FaPlay } from "react-icons/fa";
import image from "../../assets/abstract-shape.png"; // 🟢 Put your Hero image in public/assets

import bitcoinIcon from "../../assets/bitcoin.svg";
import ethereumIcon from "../../assets/ethereum.svg";
import litecoinIcon from "../../assets/litecoin.svg";
import polkadotIcon from "../../assets/polkadot.svg";
import solanaIcon from "../../assets/solana.svg";
import chainlinkIcon from "../../assets/chainlink.svg";
import othersIcon from "../../assets/others.svg";

const coins = [
  {
    label: "Highest volume",
    name: "Bitcoin",
    price: "93575.5",
    icon: bitcoinIcon,
  },
  {
    label: "Top gainer",
    name: "Ethereum",
    price: "3337.28",
    icon: ethereumIcon,
  },
  {
    label: "New listing",
    name: "Litecoin",
    price: "105.000",
    icon: litecoinIcon,
  },
  {
    label: "Most traded",
    name: "Polkadot",
    price: "6.6423",
    icon: polkadotIcon,
  },
  {
    label: "Biggest gainers",
    name: "Solana",
    price: "189.63",
    icon: solanaIcon,
  },
  {
    label: "Trending",
    name: "Chainlink",
    price: "19.991",
    icon: chainlinkIcon,
  },
  { label: "Trending", name: "Others", price: "19.991", icon: othersIcon },
];
const HeroSection: React.FC = () => {
  const repeatedCoins = [...coins, ...coins];
  return (
    <section className="bg-gradient-to-br from-[#050b18] via-[#06060d] to-black text-white px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Text Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center px-4 py-1 mb-6 rounded-full bg-[#101418] w-max text-sm text-[#90EE90] border border-[#2b2b2b]">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
            Decentralised
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
            Revolutionizing <br /> Web3 Finance
          </h1>
          <p className="text-gray-400 max-w-xl mb-8">
            Secure, scalable, and decentralized solutions for your digital
            assets—experience the future of financial freedom.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button className="bg-lime-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition">
              Get Started
            </button>
            <button className="flex items-center gap-2 border border-white px-6 py-3 rounded-full hover:bg-white/10 transition">
              <FaPlay className="text-sm" />
              Watch video
            </button>
          </div>
        </div>

        {/* Right 3D Graphic */}
        <div className="flex-1 flex justify-center">
          <img
            src={image} // 🟢 Put your Hero image in public/assets
            alt="Web3 Graphic"
            className="w-[320px] sm:w-[400px] md:w-[450px] lg:w-[500px]"
          />
        </div>
      </div>

      {/* Featured Crypto Section */}
      <div className="mt-20 text-center">
        <p className="text-green-400 text-sm mb-2">
          Featured <span className="text-white">crypto coins</span>
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Top crypto coins updates
        </h2>

        <div className="overflow-hidden relative mt-12">
  <div className="flex w-max animate-scroll gap-4 px-4">
    {repeatedCoins.map((coin, i) => (
      <div
        key={i}
        className="flex flex-col items-start p-5 gap-4 min-w-[180px] h-[167px] 
                   bg-white/5 border border-white/10 rounded-2xl text-left 
                   hover:bg-white/[0.08] transition"
      >
        {/* Top label */}
        <p className="text-sm text-white/60 font-normal w-[140px] h-[15px]">
          {coin.label}
        </p>

        {/* Icon */}
        <div className="w-8 h-8">
          <img
            src={coin.icon}
            alt={coin.name}
            className="w-8 h-8 object-contain"
          />
        </div>

        {/* Name + Price */}
        <div className="flex flex-col gap-1 w-[140px]">
          <p className="text-white font-medium text-base tracking-[-0.02em]">
            {coin.name}
          </p>
          <div className="flex items-center gap-[2px]">
            <p className="text-white font-normal text-sm">
              {coin.price}
            </p>
            <span className="text-white/60 text-sm">USD</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default HeroSection;
