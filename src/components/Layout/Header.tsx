import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, 
  FaTimes,
  FaCheck,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about' },
  { name: 'Products, Services & Solutions', to: '/services' },
  { name: 'Our Projects', to: '/projects' },
  { name: 'Leadership', to: '/leadership' },
  { name: 'Contact Us', to: '/contact' },
];

type SimpleDropdown = {
  type: 'simple';
  items: { name: string; to: string }[];
};

type DetailedDropdown = {
  type: 'detailed';
  categories: { name: string; subItems: string[]; image?: string }[];
};

type DropdownData = {
  'About Us': SimpleDropdown;
  'Products, Services & Solutions': DetailedDropdown;
};

const dropdownData = {
  'Products, Services & Solutions': {
    type: 'detailed',
    categories: [
      {
        name: 'Electrical Engineering & Power Systems',
        subItems: [
          'High, Medium & Low Voltage Works',
          'Electrical Engineering Design & Consultancy',
          'Instrumentation & Automation',
        ],
      },
      {
        name: 'Mechanical, Electrical & Plumbing (MEP)',
        subItems: [
          'MEP Engineering',
          'Air Conditioning & Refrigeration',
        ],
      },
      {
        name: 'Renewable & Sustainable Solutions',
        subItems: [
          'Solar Power Systems',
          'Energy Efficiency Solutions',
        ],
      },
      {
        name: 'Networking & Security Systems',
        subItems: [
          'Fiber Optic & Data Networks',
          'Electric Fencing & Security Systems',
        ],
      },
      {
        name: 'Products & Electrical Supplies',
        subItems: [
          'Cables & Accessories',
          'Power Protection & Distribution Equipment',
          'Lighting & Electrical Fittings',
        ],
      },
      {
        name: 'Our Solutions',
        subItems: [
          'Electrical Infrastructure: Feasibility Studies, Engineering, Procurement, Construction & Consultancy',
          'High & Medium Voltage Transmission & Distribution (T&D) Network and Substation Design',
          'LV (Low Voltage) Design & Electrical Installation',
          'Power System Modelling & Studies',
          'Power System Protection Services',
          'Electrical Instrumentation, SCADA & Automation',
        ],
        images: [
          'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2940&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2940&auto=format&fit=crop',
          'https://hertzengineering.com/wp-content/uploads/LV.jpg',
          'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2940&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2940&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2940&auto=format&fit=crop',
        ],
        hrefs: [
          '#',
          '#',
          '#',
          '#',
          '#',
          '#',
        ],
      },
    ],
  },
};


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active dropdown (About Us or Products, Services & Solutions)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Active category for detailed dropdowns
  const [activeCategory, setActiveCategory] = useState<{ [key: string]: string }>({});
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (name: string, dropdown: any) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(name);

    if (dropdown?.type === 'detailed') {
      setActiveCategory(prev => ({
        ...prev,
        [name]: prev[name] || dropdown.categories[0].name,
      }));
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // delay before closing
  };

  const handleCategoryHover = (navItem: string, categoryName: string) => {
    setActiveCategory(prev => ({ ...prev, [navItem]: categoryName }));
  };

  const mobileMenuVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0, transition: { duration: 0.3 } },
    exit: { x: '-100%', transition: { duration: 0.3 } },
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 text-white">
      <div className="hidden lg:block">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Link to="/" title="Lymfz Engineering Limited">
            <img src="./logo.png" alt="Lymfz Engineering Limited" className="h-16" />
          </Link>
        </div>

        <div className="container mx-auto px-4">
          <div className="border-t border-white/20"></div>
        </div>

        {/* Navbar */}
        <nav className="container mx-auto px-4 py-4 flex justify-center space-x-8 relative">
          {navLinks.map((link) => {
            const dropdown = (dropdownData as Record<string, SimpleDropdown | DetailedDropdown>)[link.name];
            return (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.name, dropdown)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={link.to}
                  className="font-semibold tracking-wide hover:text-blue-400 transition-colors relative"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-400 scale-x-0 hover:scale-x-100 transition-transform duration-200"></span>
                </Link>

                {dropdown && openDropdown === link.name && (
                  <div className="absolute mt-4 left-1/2 -translate-x-1/2 w-auto bg-white shadow-lg rounded-md transition-all duration-300 z-50 transform">
                    
                    {/* Simple Dropdown */}
                    {dropdown.type === 'simple' && (
                      <ul className="py-2 w-56">
                        {dropdown.items.map((item: { name: string; to: string }) => (
                          <li key={item.name}>
                            <Link to={item.to} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Detailed Dropdown */}
                    {dropdown.type === 'detailed' && (
                      <div className="flex rounded-md overflow-hidden" style={{ minWidth: '800px' }}>
                        {/* Left sidebar */}
                        <div className="bg-blue-600 text-white w-80 p-5 flex flex-col space-y-1">
                          {dropdown.categories.map((cat: { name: string; subItems: string[]; image?: string }) => (
                            <button
                              key={cat.name}
                              onMouseEnter={() => handleCategoryHover(link.name, cat.name)}
                              className={`relative text-left p-3 rounded-md transition-colors text-sm font-semibold ${
                                activeCategory[link.name] === cat.name ? 'bg-blue-700' : 'hover:bg-blue-500/80'
                              }`}
                            >
                              {cat.name}
                              {activeCategory[link.name] === cat.name && (
                                <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-[10px] border-l-blue-700"></div>
                              )}
                            </button>
                          ))}
                        </div>

                        {/* Right content */}
                        <div className="p-6 bg-white flex-1">
                          {dropdown.categories.find((c: { name: string; subItems: string[]; image?: string }) => c.name === activeCategory[link.name]) && (
                            <>
                              <ul className="grid grid-cols-2 gap-x-6 gap-y-4 text-gray-800 text-sm">
                                {(dropdown.categories.find(
                                  (c: { name: string; subItems: string[]; image?: string }) =>
                                     c.name === activeCategory[link.name]
                                )?.subItems ?? []).map((item: string) => (
                                  <li key={item} className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-5 h-5 mt-0.5 bg-blue-600 text-white flex items-center justify-center rounded-sm">
                                      <FaCheck size={12}/>
                                    </div>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                              {dropdown.categories.find((c: { name: string; subItems: string[]; image?: string }) => c.name === activeCategory[link.name])?.image && (
                                <div className="mt-6 h-40 w-full overflow-hidden rounded-md">
                                  <img
                                    src={dropdown.categories.find((c: { name: string; subItems: string[]; image?: string }) => c.name === activeCategory[link.name])?.image}
                                    alt={activeCategory[link.name]}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden p-4 flex justify-between items-center bg-gray-900/50">
        <Link to="/" title="Lymfz Engineering Limited">
          <img src="/logo.png" alt="Lymfz Engineering Limited" className="h-12" />
        </Link>
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="text-white text-3xl cursor-pointer"
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </div>
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
                  className="text-white text-3xl cursor-pointer"
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
                        onClick={() => setMobileMenuOpen(false)}
                        className="font-semibold text-lg hover:text-blue-400 transition-colors block py-2"
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
