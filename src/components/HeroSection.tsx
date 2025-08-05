
// No local image imports needed when using CDN URLs
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden min-h-screen flex items-center justify-center font-poppins">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <img
          src="https://framerusercontent.com/images/ZoO46Q0SHYWPmETAlOKdYbmEktE.png"
          alt="bg pattern"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
        {/* Content Section */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 animate-fade-in-up [animation-delay:0.1s]">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            Trusted Secure <span className="text-primary-green">Web3</span> Crypto Exchange
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
            Experience peace of mind with our trusted and secure Web3 crypto exchange. Safeguard your assets and embrace seamless transactions in the decentralized world. Join us for a worry-free trading.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Get Started Button */}
            <a
              href="#"
              className="inline-block px-8 py-4 rounded-full font-semibold text-neutral-900
                         bg-gradient-to-r from-primary-yellow via-primary-green to-primary-cyan
                         hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg transform"
            >
              Get Started
            </a>

            {/* Explore Button */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white
                         border-2 border-primary-yellow/60 group relative overflow-hidden transform
                         hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <span className="relative z-10">Explore</span>
              {/* Arrow Icon container with gradient */}
              <div className="ml-3 w-8 h-8 rounded-full flex items-center justify-center
                              bg-gradient-to-br from-primary-yellow to-primary-blue
                              relative z-10">
                <img
                  src="https://framerusercontent.com/images/ngy1IpEcsZnZ2Mo0jrOre8Wk8.svg"
                  alt="Arrow"
                  className="w-4 h-4"
                />
              </div>
              {/* Subtle inner glow/pulse effect on hover */}
              <div className="absolute inset-0 rounded-full bg-primary-yellow/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
            </a>
          </div>
        </div>

        {/* Dashboard UI Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative md:block animate-fade-in-up [animation-delay:0.3s]">
          <div className="w-full max-w-xl lg:max-w-none h-auto relative bg-card-dark-bg rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 ease-in-out">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="text-xl font-bold text-white">Coiner</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary-blue/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white text-sm">David Metcalfe</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="p-6">
              {/* Balance Section */}
              <div className="mb-8">
                <div className="text-gray-400 text-sm mb-1">Total Balance</div>
                <div className="text-3xl font-bold text-white">$338,086.20</div>
              </div>
              
              {/* Asset Cards */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                {[
                  { symbol: "BTC", balance: "$632.000", change: "-0.28%", color: "#F7931A" },
                  { symbol: "ETH", balance: "$592.000", change: "+1.20%", color: "#627EEA" },
                  { symbol: "LTC", balance: "$354.000", change: "+0.35%", color: "#345D9D" },
                  { symbol: "USDT", balance: "$238.000", change: "-0.15%", color: "#26A17B" }
                ].map((coin, index) => (
                  <div key={index} className="bg-coiner-card-bg-primary p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: coin.color }}>
                        {coin.symbol[0]}
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </div>
                    <div className="text-sm font-bold text-white mb-1">{coin.balance}</div>
                    <div className={`text-xs ${coin.change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                      {coin.change}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Analytics Chart */}
              <div className="bg-coiner-card-bg p-4 rounded-lg mb-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-lg font-bold text-white">Analytics</div>
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 rounded-full bg-primary-cyan"></div>
                      <span className="text-xs text-gray-400">Income</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                      <span className="text-xs text-gray-400">Outcome</span>
                    </div>
                    <div className="px-2 py-1 bg-gray-800 rounded text-xs text-white">2024</div>
                  </div>
                </div>
                
                {/* Chart Bars */}
                <div className="flex items-end justify-between h-32 mb-2">
                  {[35, 28, 32, 30, 40, 28, 45, 30].map((height, index) => (
                    <div key={index} className="w-8 bg-gradient-to-t from-primary-green to-primary-cyan rounded-md" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
                
                {/* Chart Labels */}
                <div className="flex justify-between text-xs text-gray-400">
                  <div>Jan</div>
                  <div>Feb</div>
                  <div>Mar</div>
                  <div>Apr</div>
                  <div>May</div>
                  <div>Jun</div>
                  <div>Jul</div>
                  <div>Aug</div>
                </div>
              </div>
              
              {/* Exchange Section */}
              <div className="bg-coiner-card-bg p-4 rounded-lg">
                <div className="text-lg font-bold text-white mb-4">Exchange</div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="text-sm font-medium text-white">1</div>
                    <div className="text-sm font-medium text-white">BTC</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-white">$102.89 USD</div>
                </div>
                <div className="flex justify-between mb-4">
                  <div className="w-20 h-8 bg-gray-800 rounded flex items-center justify-center text-white">10</div>
                  <div className="w-20 h-8 bg-gray-800 rounded flex items-center justify-center text-green-500">$</div>
                </div>
                <div className="flex justify-between mb-4">
                  <div className="text-sm text-white">1028.9</div>
                  <div className="text-xs text-gray-400">1 ETH = 2500 USD</div>
                </div>
                <button className="w-full py-2 rounded-lg bg-gradient-to-r from-primary-green to-primary-cyan text-neutral-900 font-semibold hover:opacity-90 transition-opacity">
                  Exchange
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative SVGs (positioning will require fine-tuning based on screen size) */}
      {/* These are absolutely positioned and will float */}

      {/* Bitcoin */}
      <img src="https://framerusercontent.com/images/3ZdkAjBRU7fZ49d9ktystzLkU.svg" alt="bitcoin" className="absolute top-[10%] left-[5%] w-16 md:w-24 z-20 animate-float hidden sm:block" />

      {/* Litecoin */}
      <img src="https://framerusercontent.com/images/g7SkHIIZZrXE1QZOOweIJSPsVeU.svg" alt="litecoin" className="absolute top-[30%] right-[5%] w-12 md:w-20 z-20 animate-float-slow hidden sm:block" />

      {/* Binance Coin */}
      <img src="https://framerusercontent.com/images/wDarZl4QiJ3qIRKVkEVluE0yE.svg" alt="binance coin" className="absolute bottom-[20%] left-[15%] w-12 md:w-20 z-20 animate-float-reverse hidden sm:block" />

      {/* Tether */}
      <img src="https://framerusercontent.com/images/ESqyW6qXru2MvWsGvcdZsAVvko.svg" alt="tether" className="absolute bottom-[5%] left-[45%] w-16 md:w-28 z-20 hidden md:block animate-float" />

      {/* Ethereum */}
      <img src="https://framerusercontent.com/images/iHBZcuRgwXgQXxCSDG0ZHSsf27Q.svg" alt="ethereum" className="absolute top-[60%] right-[10%] w-16 md:w-28 z-20 hidden sm:block animate-float-slow" />

    </section>
  );
};

export default HeroSection;