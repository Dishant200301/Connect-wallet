import Navbar from "@/components/Navbar";
import HeroSection from "../components/crypto_components/HeroSection";
import FutureBreakdownSection from "@/components/crypto_components/FutureBreakdownSection";
import StatisticsSection from "@/components/crypto_components/StatisticsSection";

export default function CryptoPage() {
  return (
    <>
      <div className="bg-transparent ">
        <Navbar />
      </div>
      <HeroSection />
      <FutureBreakdownSection />
      <StatisticsSection />
    </>
  );
}
