// src/components/IntegrationFAQ.tsx
import { useState } from 'react';

// Reusable component for the social/integration icons
interface SocialIconProps {
  src: string;
  alt: string;
  className?: string; // For absolute positioning and size (responsive classes)
  animationDelay?: string; // e.g., 'animation-delay-[200ms]' for staggered float
}

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt, className, animationDelay }) => {
  return (
    <div className={`absolute animate-float animate-lightPulse ${className} ${animationDelay || ''}
                    transition-transform duration-300 ease-in-out hover:scale-110`}>
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </div>
  );
};

// Data for the social media/integration icons (ADJUSTED FOR YOUR LATEST IMAGE)
const socialIconsData = [
  {
    src: 'https://framerusercontent.com/images/lQuVG2InTY6otgOM3j573UbpHS8.svg', // Facebook
    alt: 'Facebook icon',
    // Positions adjusted for responsiveness and visual alignment
    position: 'top-[10%] left-[8%] md:top-[12%] md:left-[10%] lg:top-[15%] lg:left-[12%]',
    // Sizes adjusted for responsiveness
    size: 'w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20',
    delay: 'animation-delay-[200ms]',
  },
  {
    src: 'https://framerusercontent.com/images/F8IBQL7mVzSLQWnr7aBIz4iG1pY.svg', // Instagram
    alt: 'Instagram icon',
    position: 'top-[10%] right-[8%] md:top-[12%] md:right-[10%] lg:top-[15%] lg:right-[12%]',
    size: 'w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20',
    delay: 'animation-delay-[400ms]',
  },
  {
    src: 'https://framerusercontent.com/images/WFurfZkrWOfsy0zTEtgftifkcw.svg', // Telegram
    alt: 'Telegram icon',
    position: 'top-[45%] left-[5%] md:top-[40%] md:left-[8%] lg:top-[38%] lg:left-[10%]',
    size: 'w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16',
    delay: 'animation-delay-[600ms]',
  },
  {
    src: 'https://framerusercontent.com/images/sODcBLr5nheCZ4lseKHsFwzjri4.svg', // WhatsApp (largest icon)
    alt: 'WhatsApp icon',
    position: 'bottom-[10%] left-[10%] md:bottom-[12%] md:left-[12%] lg:bottom-[15%] lg:left-[15%]',
    size: 'w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24',
    delay: 'animation-delay-[800ms]',
  },
  {
    src: 'https://framerusercontent.com/images/TivJDUwQ4R9LiWxcWifYC7gpc.svg', // Twitter
    alt: 'Twitter icon',
    // Hidden on small screens as per original design
    position: 'bottom-[10%] right-[10%] md:bottom-[12%] md:right-[12%] lg:bottom-[15%] lg:right-[15%] hidden md:block',
    size: 'w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16',
    delay: 'animation-delay-[1000ms]',
  },
  {
    src: 'https://framerusercontent.com/images/4V3gLPpiB8as1IEmNR3mH3NjHU.svg', // LinkedIn
    alt: 'LinkedIn icon',
    // Hidden on small screens as per original design
    position: 'top-[45%] right-[5%] md:top-[40%] md:right-[8%] lg:top-[38%] lg:right-[10%] hidden md:block',
    size: 'w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16',
    delay: 'animation-delay-[1200ms]',
  },
];

// Data for FAQ items (no changes from previous good version)
const faqItems = [
  {
    id: 'account',
    question: 'How do I create an account on the Coiner website?',
    answer: 'To create an account, navigate to the "Sign Up" page, fill in your details, and follow the verification steps. You\'ll receive an email confirmation to complete the process.',
  },
  {
    id: 'fund',
    question: 'How can I fund my account for Web3 trading, is it possible?',
    answer: 'Yes, you can fund your account using various methods including bank transfers, credit/debit cards, and direct cryptocurrency deposits. For Web3 trading, ensure your wallet is connected and funded.',
  },
  {
    id: 'cryptocurrencies',
    question: 'What cryptocurrencies are supported on the Coiner platform?',
    answer: 'Coiner supports a wide range of popular cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Tether (USDT), Binance Coin (BNB), and many more. Check our platform for the full list.',
  },
  {
    id: 'support',
    question: 'Does Coiner offer 24/7 customer support for Web3 trading inquiries?',
    answer: 'Absolutely! Coiner provides 24/7 customer support for all your trading inquiries, including Web3 specific questions. Our team is available via live chat, email, and phone.',
  },
  {
    id: 'algorithm',
    question: 'How does the advanced algorithm work to optimize Web3 trades?',
    answer: 'Our advanced algorithm utilizes AI and machine learning to analyze market data, predict trends, and execute trades at optimal times, aiming to maximize returns and minimize risks in Web3 environments.',
  },
  {
    id: 'mobile',
    question: 'Can I use Coiner on mobile devices for Web3 trading?',
    answer: 'Yes, Coiner offers a fully responsive and optimized experience for mobile devices. You can access all Web3 trading features directly from your mobile browser or through our dedicated mobile app (available soon).',
  },
];

// Reusable Accordion Item component for the FAQ section
interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  animationDelay?: string; // For staggered fade-in animation
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick, animationDelay }) => {
  return (
    <div className={`rounded-[23px] bg-coiner-faq-bg shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.01] cursor-pointer
                    animate-fadeInUp ${animationDelay || ''}`}> {/* Apply fadeInUp and delay */}
      <button
        className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h5 className="text-white text-lg sm:text-xl font-medium pr-4 leading-relaxed">
          {question}
        </h5>
        {/* Accordion icon: Plus/Minus gradient circle */}
        <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
                        bg-gradient-to-r from-coiner-yellow-green to-coiner-cyan
                        relative overflow-hidden">
          {/* Vertical bar (for plus and minus) */}
          <div className={`absolute w-5 h-0.5 bg-black rounded-full transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-0' : 'rotate-90'}`}></div>
          {/* Horizontal bar (only for plus, hidden for minus) */}
          <div className={`absolute w-5 h-0.5 bg-black rounded-full transform ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'} transition-all duration-300 ease-in-out`}></div>
        </div>
      </button>
      {/* Answer content with height and opacity transition */}
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-white/70 text-base sm:text-lg px-6 pb-6 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * Main component combining the "Integrated with most popular cryptocurrencies"
 * and "Frequently Asked Questions" sections.
 */
const IntegrationFAQ: React.FC = () => {
  // State to manage which FAQ item is currently open
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  // Function to toggle the open/close state of an FAQ item
  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-8 md:px-12 bg-coiner-super-dark-bg font-sans overflow-hidden">
      {/* Background Grid Pattern */}
      

      <div className="relative z-10 container max-w-7xl mx-auto flex flex-col items-center">
        {/* Integrated with most popular cryptocurrencies Section */}
        {/* This div acts as the relative container for the absolutely positioned social icons */}
        <div className="relative w-full max-w-4xl mx-auto text-center mb-20 md:mb-32 lg:mb-40 h-[350px] sm:h-[450px] lg:h-[550px] flex flex-col items-center justify-center">
          {/* Title */}
          <h2 className="font-lexend text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-4 animate-fadeInUp">
            Integrated with most popular crypto currencies
          </h2>
          {/* Description */}
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 animate-fadeInUp animation-delay-[200ms]">
            Experience seamless trading with Coiner's integration of the most popular cryptocurrencies. Unlock possibilities when navigate the market.
          </p>

          {/* View All Button */}
          <a
            href="#" // Replace with actual link
            className="inline-flex items-center justify-center px-8 py-3 rounded-full text-coiner-darkest-gray text-base font-medium
                       bg-gradient-to-r from-coiner-yellow-green via-coiner-green to-coiner-cyan
                       transition-transform duration-300 ease-in-out hover:scale-105
                       animate-fadeInUp animation-delay-[400ms]"
          >
            View All
          </a>

          {/* Social Icons - Absolutely positioned */}
          {socialIconsData.map((icon, index) => (
            <SocialIcon
              key={index}
              src={icon.src}
              alt={icon.alt}
              className={`${icon.position} ${icon.size}`}
              animationDelay={icon.delay}
            />
          ))}
        </div>

        {/* Frequently Asked Questions Section */}
        <div className="w-full">
          <div className="text-center mb-12 px-4">
            <h2 className="font-lexend text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-4 animate-fadeInUp">
              Frequently Asked Questions
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-[200ms]">
              Find answers to common questions in our comprehensive FAQ section, providing clarity and support for your crypto journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-12">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openFaqId === item.id}
                onClick={() => toggleFaq(item.id)}
                animationDelay={`animation-delay-[${index * 100 + 400}ms]`} // Stagger FAQ item animations
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationFAQ;