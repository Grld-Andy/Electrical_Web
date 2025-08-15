import React, { useState, useEffect } from 'react';
import { FaBolt, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { text: "Home", link: '/' },
    { text: "About", link: '/about' },
    { text: "Projects", link: '/projects' },
    { text: "Services", link: '/services' },
    { text: "Contact Us", link: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mock NavLink component since we don't have react-router-dom
  const NavLink: React.FC<{ to: string; className?: string; children: React.ReactNode; style?: React.CSSProperties }> = ({ 
    to, className, children, style 
  }) => (
    <Link to={to} className={className} style={style}>
      {children}
    </Link>
  );

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
        }
        .animate-slide-down { animation: slideDown 0.6s ease-out; }
        .animate-fade-in { animation: fadeIn 0.3s ease-out; }
        .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .glass-nav {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
          border-bottom: 1px solid rgba(59, 130, 246, 0.1);
        }
        .nav-link-hover {
          position: relative;
          transition: all 0.3s ease;
        }
        .nav-link-hover::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #1e40af);
          transition: width 0.3s ease;
        }
        .nav-link-hover:hover::after {
          width: 100%;
        }
        .nav-link-hover:hover {
          color: #1e40af;
          transform: translateY(-1px);
        }
      `}</style>

      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-xs" />
              <span>24/7 Emergency: +233272952311</span>
            </div>
            <div className="hidden md:block">
              <span>Licensed & Insured • Free Estimates</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-xs">
            <span>Follow us:</span>
            <div className="flex space-x-2">
              {['facebook', 'twitter', 'linkedin'].map((social) => (
                <Link
                  key={social}
                  to="#" 
                  className="w-5 h-5 rounded-full bg-blue-700 hover:bg-white hover:text-blue-900 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <span className="text-xs">f</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav shadow-xl' 
          : 'bg-white shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Section */}
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <FaBolt className="text-white text-xl group-hover:text-yellow-300 transition-colors duration-300" />
                </div>
                <div className="absolute inset-0 bg-blue-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Lymfz Engineering Ltd
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Professional Services</p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.text}
                  to={link.link}
                  className="nav-link-hover font-semibold text-gray-700 hover:text-blue-600 px-3 py-2 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.text}
                </NavLink>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              
              {/* CTA Button */}
              <button className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden">
                <span className="relative z-10 flex items-center space-x-2">
                  <FaBolt className="text-sm group-hover:text-yellow-300 transition-colors duration-300" />
                  <span className="hidden sm:inline">Request A Service</span>
                  <span className="sm:hidden">Service</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>

              {/* Emergency Call Button */}
              <Link
                to="tel:+233272952311"
                className="hidden md:flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg pulse-glow"
              >
                <FaPhone className="text-sm animate-pulse" />
                <span className="text-sm">Emergency</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-lg bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-colors duration-300"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="text-blue-600" />
                ) : (
                  <FaBars className="text-blue-600" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-full opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gradient-to-b from-white to-blue-50 border-t border-blue-100 px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.text}
                to={link.link}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-all duration-300 transform hover:translate-x-2"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: isMobileMenuOpen ? 'slideDown 0.3s ease-out forwards' : 'none'
                }}
              >
                {link.text}
              </NavLink>
            ))}
            
            {/* Mobile Emergency Button */}
            <div className="pt-4 border-t border-blue-200">
              <Link
                to="tel:+233272952311"
                className="flex items-center justify-center space-x-2 w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <FaPhone className="text-sm animate-pulse" />
                <span>Emergency Call: +233272952311</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;