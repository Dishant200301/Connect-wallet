import { motion } from 'framer-motion';

// --- SVG Icon Components ---
// These SVGs are embedded directly from the Framer CDN links you provided,
// making them white by default with `fill="#fff"`.
const InstagramIcon: React.FC = () => (
  <svg fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07c3.252.148 4.656 1.488 4.782 4.74.056 1.268.067 1.649.067 4.854 0 3.204-.012 3.584-.067 4.85-.146 3.26-1.538 4.652-4.782 4.79-.1.034-.203.064-.31.096a8.88 8.88 0 01-.81.258c-1.218.286-1.57.34-4.57.34s-3.352-.054-4.57-.34a8.88 8.88 0 01-.81-.258c-.107-.032-.21-.062-.31-.096-3.244-.138-4.636-1.53-4.782-4.79C2.163 15.65 2.15 15.27 2.15 12.065c0-3.204.012-3.584.067-4.85.146-3.26 1.538-4.652 4.782-4.79.1-.034.203-.064.31-.096a8.88 8.88 0 01.81-.258c1.218-.286 1.57-.34 4.57-.34zM12 4.412c-2.906 0-3.26.01-4.47.065-2.738.125-3.655 1.002-3.774 3.774-.055 1.21-.065 1.564-.065 4.47 0 2.906.01 3.26.065 4.47.119 2.772 1.036 3.649 3.774 3.774 1.21.055 1.564.065 4.47.065 2.906 0 3.26-.01 4.47-.065 2.738-.125 3.655-1.002 3.774-3.774.055-1.21.065-1.564.065-4.47 0-2.906-.01-3.26-.065-4.47-.119-2.772-1.036-3.649-3.774-3.774-1.21-.055-1.564-.065-4.47-.065zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm5.725-8.667a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"/>
  </svg>
);

const FacebookIcon: React.FC = () => (
  <svg fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <path d="M14 10H17L16 15H14V22H9V15H7V10H9V8C9 6.22 10.15 5 12.1 5H16V2H13.5C10.75 2 9 3.83 9 7V10H14Z"/>
  </svg>
);

const TwitterIcon: React.FC = () => (
  <svg fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.79 20.13 5.16 19.16 5.36C18.33 4.45 17.15 3.84 15.82 3.84C13.56 3.84 11.66 5.74 11.66 8C11.66 8.35 11.7 8.68 11.78 9C8.28 8.81 5.25 7.12 3.25 4.5C2.88 5.11 2.68 5.8 2.68 6.5C2.68 8.07 3.45 9.49 4.67 10.34C3.96 10.32 3.32 10.13 2.76 9.8L2.76 9.84C2.76 11.83 4.16 13.5 6.05 13.88C5.72 13.97 5.37 14.02 5 14.02C4.71 14.02 4.42 13.99 4.15 13.93C4.67 15.5 6.25 16.63 8.19 16.66C6.73 17.89 4.88 18.66 2.88 18.66C2.53 18.66 2.19 18.63 1.85 18.59C3.76 19.89 6.09 20.66 8.59 20.66C15.82 20.66 19.78 14.77 19.78 9.77C19.78 9.61 19.78 9.45 19.76 9.29C20.55 8.73 21.24 8.01 21.83 7.11C21.32 7.33 20.76 7.47 20.2 7.55C20.82 7.16 21.34 6.62 21.68 6Z"/>
  </svg>
);

const LinkedInIcon: React.FC = () => (
  <svg fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.564c0-1.303-.024-2.984-1.815-2.984-1.816 0-2.094 1.417-2.094 2.887v5.661H9.351V9.45H12.9v1.657h.046c.48-.91 1.656-1.868 3.402-1.868 3.636 0 4.318 2.391 4.318 5.503v6.71H20.447zM5.009 7.728a2.715 2.715 0 01-2.721-2.711 2.715 2.715 0 012.721-2.711 2.715 2.715 0 012.721 2.711c0 1.503-1.218 2.711-2.721 2.711zm-1.724 12.724H6.734V9.45H3.285v12.992z"/>
  </svg>
);

const Footer: React.FC = () => {
  // Framer Motion variants for section entrance animation
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1 // Stagger children for a nice cascading effect
      }
    }
  };

  // Framer Motion variants for list items and social icons
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer
      className="bg-black text-white py-12 px-4 sm:px-8 lg:px-16 font-inter"
      initial="hidden"
      whileInView="visible" // Animate when the component enters the viewport
      viewport={{ once: true, amount: 0.2 }} // Only animate once, when 20% of element is visible
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-gray-700">
          {/* Coiner section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-semibold mb-4">Coiner</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Welcome to Coiner, your gateway to the world of Web3 trading! Our user-friendly platform empowers you to explore a wide range of popular cryptocurrencies
            </p>
            <div className="flex space-x-4">
              {/* Social icons with hover/tap animations */}
              <motion.a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2e2e2e]
                           transition-all duration-200 ease-in-out"
                whileHover={{ scale: 1.1, backgroundColor: '#5adf89' }}
                whileTap={{ scale: 0.9 }}
                aria-label="Instagram"
              >
                <InstagramIcon />
              </motion.a>
              <motion.a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2e2e2e]
                           transition-all duration-200 ease-in-out"
                whileHover={{ scale: 1.1, backgroundColor: '#5adf89' }}
                whileTap={{ scale: 0.9 }}
                aria-label="Facebook"
              >
                <FacebookIcon />
              </motion.a>
              <motion.a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2e2e2e]
                           transition-all duration-200 ease-in-out"
                whileHover={{ scale: 1.1, backgroundColor: '#5adf89' }}
                whileTap={{ scale: 0.9 }}
                aria-label="Twitter"
              >
                <TwitterIcon />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2e2e2e]
                           transition-all duration-200 ease-in-out"
                whileHover={{ scale: 1.1, backgroundColor: '#5adf89' }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </motion.a>
            </div>
          </motion.div>

          {/* Company links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <motion.li variants={itemVariants}><a href="#" className="hover:text-green-400 transition-colors duration-200">Home</a></motion.li>
              <motion.li variants={itemVariants}><a href="#" className="hover:text-green-400 transition-colors duration-200">About</a></motion.li>
              <motion.li variants={itemVariants}><a href="#" className="hover:text-green-400 transition-colors duration-200">Careers</a></motion.li>
              <motion.li variants={itemVariants}><a href="#" className="hover:text-green-400 transition-colors duration-200">Blog</a></motion.li>
              <motion.li variants={itemVariants}><a href="https://www.framer.com/templates" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-200">More Templates</a></motion.li>
            </ul>
          </motion.div>

          {/* Learn More links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Learn More</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <motion.li variants={itemVariants}><a href="#" className="hover:text-green-400 transition-colors duration-200">Pricing</a></motion.li>
              <motion.li variants={itemVariants}><a href="#" className="hover:text-green-400 transition-colors duration-200">License</a></motion.li>
              <motion.li variants={itemVariants}><a href="#" className="hover:text-green-400 transition-colors duration-200">Style Guide</a></motion.li>
              <motion.li variants={itemVariants}><a href="#" className="hover:text-green-400 transition-colors duration-200">Terms</a></motion.li>
              <motion.li variants={itemVariants}><a href="#" className="hover:text-green-400 transition-colors duration-200">404 Page</a></motion.li>
            </ul>
          </motion.div>

          {/* Newsletter signup */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Signup for Email</h4>
            <div className="bg-gray-800 p-3 rounded-2xl border border-gray-700">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full bg-gray-900 text-white placeholder-gray-500 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5adf89] mb-3 text-sm transition-all duration-200"
              />
              <motion.button
                type="submit"
                className="w-full bg-[#5adf89] text-gray-900 font-semibold py-3 rounded-xl
                           transition-all duration-200 ease-in-out text-sm"
                whileHover={{ scale: 1.02, backgroundColor: '#4ed47a' }} // Slightly scale and change green on hover
                whileTap={{ scale: 0.98 }} // Shrink on tap for feedback
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Copyright section */}
        <motion.div variants={itemVariants} className="pt-8 mt-8 text-center text-gray-500 text-xs">
          Copyright ©2024 Coiner. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;