import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, 
  FaTimes,
  FaCheck,
} from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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

const dropdownData: DropdownData = {
  'About Us': {
    type: 'simple',
    items: [
      { name: 'Our Story', to: '/about#our-story' },
      { name: 'Vision, Mission & Values', to: '/about#mission' },
      { name: 'Market Segment', to: '/about#market-segment' },
      { name: 'Technology & Expertise', to: '/about#technical-expertise' },
      { name: 'Career', to: '/about#career' }
    ],
  },
  'Products, Services & Solutions': {
    type: 'detailed',
    categories: [
      {
        name: 'Electrical Engineering & Power Systems',
        subItems: [
          'Electrical Infrastructure: Feasibility Studies, Engineering, Procurement, Construction & Consultancy',
          'High, Medium Voltage Transmission and LV (Low Voltage) Distribution Network Substation Design & Installation',
          'Power System Modelling & Studies',
          'Power System Protection Services',
          'Electrical Instrumentation, SCADA & Automation',
        ],
      },
      {
        name: 'Mechanical, Electrical & Plumbing (MEP)',
        subItems: [
          'MEP Engineering',
          'Air Conditioning',
        ],
      },
      {
        name: 'Renewable & Sustainable Solutions',
        subItems: [
          'Solar Power Systems',
          'Energy Efficiency Solutions (Energy Auditing)',
        ],
      },
      {
        name: 'Networking & Security Systems',
        subItems: [
          'Fiber optics, data and telecommunication networks',
          'Electric Fencing & Security Systems',
        ],
      },
      {
        name: 'Electrical Products and Equipment Supplies',
        subItems: [
          'Cables & Accessories',
          'Power Protection & Distribution Equipment',
          'Lighting & Electrical Fittings',
        ],
      }
    ],
  },
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const scrollOrNavigate = (link: string) => {
    const [pathname, hash] = link.split("#")
    console.log('clicked here: ', pathname, hash)
    if(location.pathname.includes(pathname)){
      if(hash){
        const el = document.getElementById(hash)
        if(el){
          el.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
      }
    }else{
      navigate(pathname + (hash ? `#${hash}` : ""))
      if(hash){
        setTimeout(() => {
          const el = document.getElementById(hash)
          if(el){
            el.scrollIntoView({behavior: 'smooth', block: 'start'})
          }
        })
      }
    }
  }

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
                            <div onClick={() => scrollOrNavigate(item.to)} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                              {item.name}
                            </div>
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
                            <Link
                              to="services"
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
                            </Link>
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
                                    <Link to="services">{item}</Link>
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
                  {navLinks.map((link) => {
                    const dropdown =
                      (dropdownData as Record<string, SimpleDropdown | DetailedDropdown>)[
                        link.name
                      ];

                    const isOpen = openDropdown === link.name;

                    return (
                      <li key={link.name}>
                        <div className="flex items-center justify-between py-2">
                          {/* Main Link Text (always navigates, even if dropdown exists) */}
                          <Link
                            to={link.to}
                            onClick={() => {
                              scrollOrNavigate(link.to);
                              setMobileMenuOpen(false); // close sidebar on navigation
                            }}
                            className="font-semibold text-lg hover:text-blue-400 transition-colors"
                          >
                            {link.name}
                          </Link>

                          {dropdown && (
                            <button
                              onClick={() => setOpenDropdown(isOpen ? null : link.name)}
                              className="ml-2 flex cursor-pointer text-white focus:outline-none border w-[30px] h-[30px] flex items-center justify-center text-lg"
                            >
                              {isOpen ? "-" : "+"}
                            </button>
                          )}
                        </div>

                        {/* Dropdown Content */}
                        {dropdown && isOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {/* Simple Dropdown */}
                            {dropdown.type === "simple" &&
                              dropdown.items.map((item) => (
                                <div
                                  key={item.name}
                                  onClick={() => {
                                    scrollOrNavigate(item.to);
                                    setMobileMenuOpen(false); // close sidebar after navigation
                                  }}
                                  className="block cursor-pointer px-2 py-1 text-gray-300 text-sm hover:text-blue-400"
                                >
                                  {item.name}
                                </div>
                              ))}

                            {/* Detailed Dropdown */}
                            {dropdown.type === "detailed" &&
                              dropdown.categories.map((cat) => (
                                <div key={cat.name} className="mb-3">
                                  <Link
                                    to="services"
                                    onClick={() => {
                                      scrollOrNavigate("services");
                                      setMobileMenuOpen(false); // close sidebar after navigation
                                    }}
                                    className="text-gray-300 text-sm hover:text-blue-400"
                                  >
                                    {cat.name}
                                  </Link>
                                  {/* If you want sub-items uncomment & handle */}
                                  {/* <ul className="ml-3 mt-1 space-y-1">
                                    {cat.subItems.map((sub) => (
                                      <li
                                        key={sub}
                                        onClick={() => {
                                          scrollOrNavigate(link.to);
                                          setMobileMenuOpen(false);
                                        }}
                                        className="text-gray-300 hover:text-blue-400 text-sm cursor-pointer"
                                      >
                                        {sub}
                                      </li>
                                    ))}
                                  </ul> */}
                                </div>
                              ))}
                          </div>
                        )}
                      </li>
                    );
                  })}
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
