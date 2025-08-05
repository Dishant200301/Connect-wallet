
// No local image imports needed when using CDN URLs

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

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative md:block animate-fade-in-up [animation-delay:0.3s]">
          <img
            src="https://framerusercontent.com/images/DbY7cvm12ymahzXVmnWsT0C1yA.webp"
            alt="statistics dashboard"
            className="w-full max-w-xl lg:max-w-none h-auto object-contain transform hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>

      {/* Floating Decorative SVGs (positioning will require fine-tuning based on screen size) */}
      {/* These are absolutely positioned and will float */}

      {/* Bitcoin 1 */}
      <img src="https://framerusercontent.com/images/3ZdkAjBRU7fZ49d9ktystzLkU.svg" alt="bitcoin" className="absolute top-[10%] left-[5%] w-16 md:w-24 z-20 animate-float hidden sm:block" />

      {/* Bitcoin Diamond 1 */}
      <img src="https://framerusercontent.com/images/g7SkHIIZZrXE1QZOOweIJSPsVeU.svg" alt="bitcoin diamond" className="absolute top-[30%] right-[5%] w-12 md:w-20 z-20 animate-float-slow hidden sm:block" />

      {/* Bitcoin Diamond 2 */}
      <img src="https://framerusercontent.com/images/wDarZl4QiJ3qIRKVkEVluE0yE.svg" alt="bitcoin diamond" className="absolute bottom-[20%] left-[15%] w-12 md:w-20 z-20 animate-float-reverse hidden sm:block" />

      {/* Bitcoin T (Larger, more central in Framer) */}
      <img src="https://framerusercontent.com/images/ESqyW6qXru2MvWsGvcdZsAVvko.svg" alt="bitcoin T" className="absolute bottom-[5%] left-[45%] w-16 md:w-28 z-20 hidden md:block animate-float" />

      {/* Bitcoin T2 (Smaller, subtle) */}
      <img src="https://framerusercontent.com/images/iHBZcuRgwXgQXxCSDG0ZHSsf27Q.svg" alt="bitcoin T" className="absolute top-[60%] right-[10%] w-16 md:w-28 z-20 hidden sm:block animate-float-slow" />

    </section>
  );
};

export default HeroSection;