import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BrandScroller from '../components/BrandScroller';
import ExchangePlusSection from '../components/ExchangePlusSection';
import FeaturesSection from '../components/FeaturesSection'; // Import the new component
import StatisticsSection from '../components/StatisticsSection';
import HowItWorks from '../components/HowItWorks';
import PopularCryptocurrencies from '../components/PopularCryptocurrencies';
import PortfolioSection from '../components/PortfolioSection';
import YourMoneyYourChoice from '../components/YourMoneyYourChoice';
// import IntegrationFAQ from '../components/IntegrationFAQ';
import DownloadSection from '../components/DownloadSection';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="bg-gray-900">
      <BrandScroller />
      </div>
      <ExchangePlusSection />
      <FeaturesSection /> {/* Add the FeaturesSection component here */}
        <StatisticsSection/>
        <HowItWorks/>
        <PopularCryptocurrencies/>
        <PortfolioSection/>
        <YourMoneyYourChoice/>
        {/* <IntegrationFAQ/> */}
        <DownloadSection/>
    </>
  );
}

export default HomePage;