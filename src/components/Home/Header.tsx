import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaLinkedinIn, FaFacebookF, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Solutions', href: '#' },
  { name: 'Products & Services', href: '#' },
  { name: 'Our Projects', href: '#' },
  { name: 'Leadership', href: '#' },
  { name: 'Contact Us', href: '#' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0, transition: { duration: 0.3 } },
    exit: { x: '-100%', transition: { duration: 0.3 } },
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 text-white">
      {/* Desktop Header */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <a href="#" title="Lymfz Engineering Ltd">
            <img src="./vite.svg" alt="Lymfz Engineering Ltd" className="h-16" />
          </a>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-hertz-blue transition-colors"><FaMapMarkerAlt /></a>
            <a href="#" className="hover:text-hertz-blue transition-colors"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-hertz-blue transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-hertz-blue transition-colors"><FaEnvelope /></a>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="border-t border-white/20"></div>
        </div>
        <nav className="container mx-auto px-4 py-4 flex justify-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="font-semibold tracking-wide hover:text-hertz-blue transition-colors relative group">
              {link.name}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-hertz-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden p-4 flex justify-between items-center bg-gray-900/50">
        <a href="#" title="Lymfz Engineering Limited">
          <img src="/vite.svg" alt="Lymfz Engineering Limited" className="h-12" />
        </a>
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="text-white text-3xl"
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 left-0 h-full w-4/5 max-w-sm bg-gray-900 z-50 p-6"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-white font-bold text-xl">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-3xl"
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
              </div>
              <nav>
                <ul className="space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="font-semibold text-lg hover:text-hertz-blue transition-colors block py-2">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
