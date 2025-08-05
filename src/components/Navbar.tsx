import { useState, useRef, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  // Refs for closing dropdowns/menus when clicking outside
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pagesDropdownRef = useRef<HTMLDivElement>(null);

  // Effect to close mobile menu when clicking outside
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Effect to close pages dropdown when clicking outside (desktop and mobile)
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (pagesDropdownRef.current && !pagesDropdownRef.current.contains(event.target as Node)) {
        setIsPagesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Handler to close mobile menu after clicking a link
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative bg-black bg-opacity-40 py-4 font-poppins z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-white text-3xl font-semibold 
                            bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
          Connect wallet
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">Home</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">About</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">Pricing</a>

          {/* Pages Dropdown (Desktop) */}
          <div className="relative" ref={pagesDropdownRef}>
            <button
              onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
              className="flex items-center text-white/80 hover:text-white transition-colors duration-300 focus:outline-none"
              aria-expanded={isPagesDropdownOpen}
              aria-haspopup="true"
            >
              Pages
              <svg className={`ml-2 w-4 h-4 transition-transform duration-300 ${isPagesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isPagesDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-2 ring-1 ring-black ring-opacity-5 origin-top scale-y-100 transition-all duration-300 ease-out animate-fade-in-up">
                <a href="#" className="block px-4 py-2 text-white/80 hover:bg-gray-700 hover:text-white transition-colors duration-300" onClick={() => setIsPagesDropdownOpen(false)}>Page 1</a>
                <a href="#" className="block px-4 py-2 text-white/80 hover:bg-gray-700 hover:text-white transition-colors duration-300" onClick={() => setIsPagesDropdownOpen(false)}>Page 2</a>
                <a href="#" className="block px-4 py-2 text-white/80 hover:bg-gray-700 hover:text-white transition-colors duration-300" onClick={() => setIsPagesDropdownOpen(false)}>Page 3</a>
              </div>
            )}
          </div>

          <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">Blog</a>
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300">
            Buy Template
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none relative w-8 h-6"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {/* Hamburger lines with animation */}
            <span className={`block absolute h-0.5 w-full bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : 'top-0'}`}></span>
            <span className={`block absolute h-0.5 w-full bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'top-1/2 -translate-y-1/2'}`}></span>
            <span className={`block absolute h-0.5 w-full bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : 'bottom-0'}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`lg:hidden absolute top-full left-0 w-full bg-gray-900 py-4 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li><a href="#" className="block text-white text-lg py-2 hover:text-emerald-400" onClick={handleNavLinkClick}>Home</a></li>
          <li><a href="#" className="block text-white text-lg py-2 hover:text-emerald-400" onClick={handleNavLinkClick}>About</a></li>
          <li><a href="#" className="block text-white text-lg py-2 hover:text-emerald-400" onClick={handleNavLinkClick}>Pricing</a></li>
          
          {/* Pages Dropdown (Mobile) */}
          <li>
            <div className="relative w-full text-center" ref={pagesDropdownRef}>
              <button
                onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
                className="flex items-center justify-center mx-auto text-white text-lg py-2 hover:text-emerald-400 focus:outline-none"
                aria-expanded={isPagesDropdownOpen}
                aria-haspopup="true"
              >
                Pages
                <svg className={`ml-2 w-4 h-4 transition-transform duration-300 ${isPagesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isPagesDropdownOpen && (
                <ul className="mt-2 space-y-2 bg-gray-800 rounded-md py-2 w-48 mx-auto animate-fade-in-up">
                  <li><a href="#" className="block px-4 py-2 text-white/80 hover:bg-gray-700 hover:text-white" onClick={handleNavLinkClick}>Page 1</a></li>
                  <li><a href="#" className="block px-4 py-2 text-white/80 hover:bg-gray-700 hover:text-white" onClick={handleNavLinkClick}>Page 2</a></li>
                  <li><a href="#" className="block px-4 py-2 text-white/80 hover:bg-gray-700 hover:text-white" onClick={handleNavLinkClick}>Page 3</a></li>
                </ul>
              )}
            </div>
          </li>

          <li><a href="#" className="block text-white text-lg py-2 hover:text-emerald-400" onClick={handleNavLinkClick}>Blog</a></li>
          <li>
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300 w-full mt-4" onClick={handleNavLinkClick}>
              Buy Template
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;