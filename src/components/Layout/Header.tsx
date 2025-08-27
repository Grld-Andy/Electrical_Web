import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaLinkedinIn, FaFacebookF, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about' },
  { name: 'Solutions', to: '/solutions' },
  { name: 'Products & Services', to: '/services' },
  { name: 'Our Projects', to: '/projects' },
  { name: 'Leadership', to: '/leadership' },
  { name: 'Contact Us', to: '/contact' },
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
          <Link to="/" title="Lymfz Engineering Limited">
            <img src="./logo.png" alt="Lymfz Engineering Limited" className="h-16" />
          </Link>
          <div className="flex items-center space-x-4">
            {/* Location */}
            <a
              href="https://www.google.com/maps?q=5+Good+Street,+Amasaman,+Accra,+Ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-hertz-blue transition-colors"
            >
              <FaMapMarkerAlt />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/lymfz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-hertz-blue transition-colors"
            >
              <FaLinkedinIn />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/lymfz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-hertz-blue transition-colors"
            >
              <FaFacebookF />
            </a>

            {/* Email */}
            <a
              href="mailto:info@lymfz.com"
              className="hover:text-hertz-blue transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="border-t border-white/20"></div>
        </div>
        <nav className="container mx-auto px-4 py-4 flex justify-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="font-semibold tracking-wide hover:text-hertz-blue transition-colors relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-hertz-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden p-4 flex justify-between items-center bg-gray-900/50">
        <Link to="/" title="Lymfz Engineering Limited">
          <img src="/logo.png" alt="Lymfz Engineering Limited" className="h-12" />
        </Link>
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
                      <Link
                        to={link.to}
                        className="font-semibold text-lg hover:text-hertz-blue transition-colors block py-2"
                      >
                        {link.name}
                      </Link>
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
