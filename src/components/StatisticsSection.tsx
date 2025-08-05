import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Inline SVG components for cryptocurrency icons and graphs
const BitcoinIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#F7931A"/>
    <path d="M22.5 14.25c.25-1.75-1-2.75-3-3.25l.625-2.5-1.5-.375-.625 2.375c-.375-.125-.75-.25-1.125-.375l.625-2.375-1.5-.375-.625 2.5c-.375-.125-.625-.25-1-.375v-.125l-2.125-.5-.375 1.5s1 .25 1 .25c.5.125.625.5.625.75l-.625 2.5c0 0 .125 0 .125 0-.125 0-.125 0-.125 0l-.875 3.5c-.125.25-.375.5-.75.375 0 0-1-.25-1-.25L10 20l2 .5c.375.125.75.125 1.125.25L12.5 23.25l1.5.375.625-2.5c.375.125.75.25 1.125.25l-.625 2.5 1.5.375.625-2.5c2.375.5 4.125.25 4.875-1.875.625-1.75 0-2.75-1.25-3.375.875-.25 1.5-.875 1.625-2.25zM19 19.125c-.5 1.75-3.25.875-4.125.625l.75-3c.875.25 3.875.75 3.375 2.375zm.375-4.5c-.375 1.625-2.75.875-3.5.625l.625-2.75c.75.25 3.25.625 2.875 2.125z" fill="white"/>
  </svg>
);

const EthereumIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#627EEA"/>
    <path d="M16 4v8.87l7.5 3.35L16 4z" fill="white" fillOpacity="0.6"/>
    <path d="M16 4L8.5 16.22l7.5-3.35V4z" fill="white"/>
    <path d="M16 21.97v6.03l7.5-10.38L16 21.97z" fill="white" fillOpacity="0.6"/>
    <path d="M16 28v-6.03l-7.5-4.35L16 28z" fill="white"/>
    <path d="M16 20.62l7.5-4.4-7.5-3.35v7.75z" fill="white" fillOpacity="0.2"/>
    <path d="M8.5 16.22l7.5 4.4v-7.75l-7.5 3.35z" fill="white" fillOpacity="0.6"/>
  </svg>
);

const LitecoinIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#BFBBBB"/>
    <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm.5 17.5h-7l1.5-5 1.25-4.25 1.5-5h4l-2.75 9.5h5l-1 3.5-3 1.25z" fill="white"/>
  </svg>
);

const BinanceIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#F3BA2F"/>
    <path d="M16 7l3 3-6 6-3-3 6-6zM10 13l3 3-3 3-3-3 3-3zM22 13l3 3-3 3-3-3 3-3zM16 19l3 3-3 3-3-3 3-3z" fill="white"/>
    <path d="M19 16l-3-3-3 3 3 3 3-3z" fill="white"/>
  </svg>
);

// Growth graph SVG component
const GrowthGraphUp = () => (
  <svg width="96" height="40" viewBox="0 0 96 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 30L12 25L24 28L36 15L48 20L60 10L72 5L84 8L95 1" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1 39H95" stroke="#E5E7EB" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2"/>
  </svg>
);

// Balance graph SVG component
const BalanceGraph = () => (
  <svg width="100%" height="80" viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 60L20 55L40 58L60 40L80 45L100 30L120 25L140 35L160 20L180 25L200 15L220 20L240 10L260 15L279 5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1 79H279" stroke="#E5E7EB" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2"/>
    <path d="M1 60L20 55L40 58L60 40L80 45L100 30L120 25L140 35L160 20L180 25L200 15L220 20L240 10L260 15L279 5" fill="url(#paint0_linear)" fillOpacity="0.1"/>
    <defs>
      <linearGradient id="paint0_linear" x1="140" y1="5" x2="140" y2="79" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10B981"/>
        <stop offset="1" stopColor="#10B981" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);


// Framer Motion Variants for animations
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15, // Stagger children elements
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, x: 100 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// Reusable Statistic Item Component
interface StatisticItemProps {
  value: string;
  label: string;
  isGreen?: boolean;
}

const StatisticItem: React.FC<StatisticItemProps> = ({
  value,
  label,
  isGreen = false,
}) => (
  <motion.div
    variants={itemVariants}
    className="border-b border-gray-800 pb-4 last:border-b-0 last:pb-0"
  >
    <p
      className={`text-4xl font-extrabold ${
        isGreen ? "text-coiner-green" : "text-white"
      } mb-1`}
    >
      {value}
    </p>
    <p className="text-light-text text-lg">{label}</p>
  </motion.div>
);

const StatisticsSection: React.FC = () => {
  return (
    <motion.section
      className="bg-dark-background text-white py-16 sm:py-20 lg:py-24 px-4 font-inter overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Animate when 30% of section is visible
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content Block */}
        <div className="flex flex-col text-center lg:text-left">
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
          >
            Our statistics over the years
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-light-text mb-12 max-w-xl mx-auto lg:mx-0"
          >
            Follow our remarkable growth journey over the years through
            comprehensive statistics, reflecting our unwavering dedication to
            excellence and customer satisfaction.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-y-12 sm:gap-x-8 text-left">
            <StatisticItem value="250+" label="Happy Clients" />
            <StatisticItem
              value="90%"
              label="Customer Satisfaction"
              isGreen={true}
            />
            <StatisticItem
              value="5k"
              label="Successful Project"
              isGreen={true}
            />
            <StatisticItem value="100%" label="Security Certification" />
          </div>
        </div>

        {/* Right Visual Block - Crypto Cards */}
        <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[600px] flex justify-center items-center">
          {/* Large Card (Bitcoin, Ethereum, Litecoin, Binance) */}
          <motion.div
            variants={cardVariants}
            className="absolute bg-card-bg rounded-3xl p-6 sm:p-8 w-[85%] max-w-[420px] shadow-2xl z-10
                       -rotate-6 translate-x-4 -translate-y-4 lg:-rotate-12 lg:translate-x-12 lg:-translate-y-8"
            style={{ originX: 0.5, originY: 0.5 }} // Center origin for rotation
          >
            {/* Bitcoin Row */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
              <div className="flex items-center">
                <BitcoinIcon />
                <span className="font-semibold text-dark-text text-lg">
                  Bitcoin <span className="text-gray-500 text-sm">BTC</span>
                </span>
              </div>
              <div className="flex items-center text-coiner-green font-medium">
                6.5%
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </div>
            </div>

            {/* Ethereum Row */}
            <div className="pb-4 mb-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <EthereumIcon />
                  <span className="font-semibold text-dark-text text-lg">
                    Ethereum <span className="text-gray-500 text-sm">ETH</span>
                  </span>
                </div>
                <div className="flex items-center text-coiner-green font-medium">
                  3.4%
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-gray-500 text-sm mb-2">Price</p>
              <div className="flex items-center justify-between">
                <p className="text-dark-text text-2xl font-bold">
                  $ 170,892.90
                </p>
                <GrowthGraphUp />
              </div>
            </div>

            {/* Litecoin Row */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
              <div className="flex items-center">
                <LitecoinIcon />
                <span className="font-semibold text-dark-text text-lg">
                  Litecoin <span className="text-gray-500 text-sm">LTC</span>
                </span>
              </div>
              <div className="flex items-center text-red-500 font-medium">
                2.5%
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>

            {/* Binance Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <BinanceIcon />
                <span className="font-semibold text-dark-text text-lg">
                  Binance <span className="text-gray-500 text-sm">BNB</span>
                </span>
              </div>
              <div className="flex items-center text-coiner-green font-medium">
                4.3%
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Smaller Balance Card */}
          <motion.div
            variants={cardVariants}
            className="absolute bg-card-bg rounded-3xl p-6 sm:p-8 w-[70%] max-w-[300px] shadow-2xl z-20
                       rotate-6 -translate-x-20 translate-y-20 lg:rotate-12 lg:-translate-x-28 lg:translate-y-24"
            style={{ originX: 0.5, originY: 0.5 }} // Center origin for rotation
          >
            <p className="text-gray-500 text-sm mb-2">Your Balance</p>
            <p className="text-dark-text text-3xl font-bold mb-4">3545.23</p>
            <div className="relative">
              <BalanceGraph />
              <div className="absolute bottom-0 left-0 flex items-center bg-white rounded-full p-2 pr-3 shadow-md -mb-3">
                <div className="w-5 h-5 mr-1">
                  <EthereumIcon />
                </div>
                <span className="text-coiner-green text-xs font-semibold">
                  +6.58%
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default StatisticsSection;
