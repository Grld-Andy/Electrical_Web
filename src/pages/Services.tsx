import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, HardHat, ShieldCheck, Sun, Cpu } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';

const serviceData = {
  'Electrical Engineering & Power Systems': {
    icon: <Zap className="w-6 h-6" />,
    services: [
      {
        title: 'Electrical Infrastructure: Feasibility Studies, Engineering, Procurement, Construction & Consultancy',
        description:
          'Comprehensive EPC and consultancy services covering feasibility studies, design, procurement, and construction of electrical infrastructure.',
      },
      {
        title: 'High, Medium Voltage Transmission and LV (Low Voltage) Distribution Network Substation Design & Installation',
        description:
          'Design and installation of transmission, distribution networks, and substations across HV, MV, and LV levels.',
      },
      {
        title: 'Power System Modelling & Studies',
        description:
          'Advanced modeling, simulations, and studies to optimize the reliability, efficiency, and stability of power systems.',
      },
      {
        title: 'Power System Protection Services',
        description:
          'Specialized design and implementation of protection schemes to safeguard electrical networks and equipment.',
      },
      {
        title: 'Electrical Instrumentation, SCADA & Automation',
        description:
          'Integration of instrumentation systems, SCADA solutions, and automation for smart and efficient operations.',
      },
    ],
  },
  'Mechanical, Electrical & Plumbing (MEP)': {
    icon: <HardHat className="w-6 h-6" />,
    services: [
      { title: 'Air Conditioning', description: 'Installation and servicing of cooling systems for all applications.' },
    ],
  },
  'Renewable & Sustainable Solutions': {
    icon: <Sun className="w-6 h-6" />,
    services: [
      { title: 'Solar Power Systems', description: 'Supply and installation of solar systems including pumping and grid integration.' },
      { title: 'Energy Efficiency Solutions (Energy Auditing)', description: 'Customized energy-saving solutions for reduced costs and sustainability.' },
    ],
  },
  'Networking & Security Systems': {
    icon: <Cpu className="w-6 h-6" />,
    services: [
      { title: 'Fiber optics, data and telecommunication networks', description: 'Installation of fiber optic infrastructure, structured cabling, and networks.' },
      { title: 'Electric Fencing & Security Systems', description: 'Design and deployment of security solutions including fencing and access control.' },
    ],
  },
  'Electrical Products and Equipment Supplies': {
    icon: <ShieldCheck className="w-6 h-6" />,
    services: [
      { title: 'Cables & Accessories', folder: 'cables' },
      { title: 'Power Protection & Distribution Equipment', folder: 'protection' },
      { title: 'Lighting & Electrical Fittings', folder: 'lighting' },
    ],
  },
};

// --- Combined Grouped Data ---
type Item = { title: string; imgSrc?: string; description?: string };
type Group = { name: string; items: Item[] };
type Category = { icon: React.ReactNode; groups: Group[] };

const combinedData: { [category: string]: Category } = {
  "Services and Solutions": {
    icon: <Zap className="w-6 h-6" />,
    groups: Object.entries(serviceData)
      .slice(0, 4)
      .map(([groupName, group]) => ({
        name: groupName,
        items: group.services.map(s => ({
          title: s.title,
          description: 'description' in s ? s.description : undefined,
        })),
      })),
  },
  Products: {
    icon: <ShieldCheck className="w-6 h-6" />,
    groups: [
      {
        name: 'Cables & Accessories',
        items: [
          { title: 'Cable 1', imgSrc: '/images/my/products/cables/1.jpg' },
          { title: 'Cable 2', imgSrc: '/images/my/products/cables/2.jpg' },
          { title: 'Cable 3', imgSrc: '/images/my/products/cables/3.jpg' },
        ],
      },
      {
        name: 'Power Protection & Distribution Equipment',
        items: [
          { title: 'Protection 1', imgSrc: '/images/my/products/protection/1.jpg' },
          { title: 'Protection 2', imgSrc: '/images/my/products/protection/2.jpg' },
          { title: 'Protection 3', imgSrc: '/images/my/products/protection/3.jpg' },
        ],
      },
      {
        name: 'Lighting & Electrical Fittings',
        items: [
          { title: 'Lighting 1', imgSrc: '/images/my/products/lighting/1.jpg' },
          { title: 'Lighting 2', imgSrc: '/images/my/products/lighting/2.jpg' },
          { title: 'Lighting 3', imgSrc: '/images/my/products/lighting/3.jpg' },
          { title: 'Lighting 3', imgSrc: '/images/my/products/lighting/4.jpg' },
          { title: 'Lighting 3', imgSrc: '/images/my/products/lighting/5.jpg' },
          { title: 'Lighting 3', imgSrc: '/images/my/products/lighting/6.jpg' },
          { title: 'Lighting 3', imgSrc: '/images/my/products/lighting/7.jpg' },
        ],
      },
    ],
  },
};


const ProductsAndServicesPage = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('Services and Solutions');
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [activeProductIndex, setActiveProductIndex] = useState(0);

  // Helper to find group index by name
  const findGroupIndex = (category: string, groupName: string) => {
    const groups = combinedData[category]?.groups || [];
    return groups.findIndex(g => g.name === groupName);
  };

  // On mount or location change, check for navigation state
  useEffect(() => {
    if (location.state && location.state.group) {
      let groupName = location.state.group;
      // Special case: 'Electrical Products and Equipment Supplies' should open Products sidebar, first tab
      if (groupName === 'Electrical Products and Equipment Supplies') {
        setActiveCategory('Products');
        setActiveProductIndex(0); // Cables & Accessories
        return;
      }
      // If Products, switch to Products tab
      const prodIdx = findGroupIndex('Products', groupName);
      if (prodIdx !== -1) {
        setActiveCategory('Products');
        setActiveProductIndex(prodIdx);
      } else {
        // Otherwise, switch to Services and Solutions group
        const svcIdx = findGroupIndex('Services and Solutions', groupName);
        if (svcIdx !== -1) {
          setActiveCategory('Services and Solutions');
          setActiveGroupIndex(svcIdx);
        }
      }
    }
  }, [location.state]);

  // Listen for custom event to switch group/tab
  useEffect(() => {
    const handler = (e: any) => {
      const group = e.detail?.group;
      if (!group) return;
      // Special case: 'Electrical Products and Equipment Supplies' should open Products sidebar, first tab
      if (group === 'Electrical Products and Equipment Supplies') {
        setActiveCategory('Products');
        setActiveProductIndex(0);
        return;
      }
      const prodIdx = findGroupIndex('Products', group);
      if (prodIdx !== -1) {
        setActiveCategory('Products');
        setActiveProductIndex(prodIdx);
      } else {
        const svcIdx = findGroupIndex('Services and Solutions', group);
        if (svcIdx !== -1) {
          setActiveCategory('Services and Solutions');
          setActiveGroupIndex(svcIdx);
        }
      }
    };
    window.addEventListener('services-switch-group', handler);
    return () => window.removeEventListener('services-switch-group', handler);
  }, []);

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
  };

  const activeGroups = combinedData[activeCategory].groups;
  const activeItems = activeGroups[activeCategory === "Products" ? activeProductIndex : activeGroupIndex].items;
  const isProducts = activeCategory === "Products";

  return (
    <div className="bg-gray-50 min-h-screen">
      <main>
        <PageHeader text="PRODUCTS, SERVICES AND SOLUTIONS" />
        <div className="py-10 flex flex-col md:flex-row md:space-x-10 px-16">
          {/* Sidebar */}
          <aside className="md:w-1/4 mb-10 md:mb-0">
            <div className="bg-white shadow-md rounded-md border-slate-200 sticky top-20">
              {/* Category selection */}
              <ul>
                {Object.keys(combinedData).map((category, catIdx) => (
                  <li
                    key={category}
                    className={`${catIdx !== 0 ? 'border-t border-gray-200' : ''}`}
                  >
                    <button
                      onClick={() => {
                        setActiveCategory(category);
                        setActiveGroupIndex(0);
                        if (category === "Products") setActiveProductIndex(0);
                      }}
                      className={`w-full cursor-pointer flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-100 font-semibold ${
                        activeCategory === category ? "bg-slate-100 text-blue-600" : ""
                      }`}
                    >
                      {combinedData[category].icon}
                      <span>{category}</span>
                    </button>
                    {/* Show group list for active category directly underneath */}
                    {activeCategory === category && (
                      <ul className="mt-2 mb-2 px-2">
                        {combinedData[category].groups.map((group, idx) => (
                          <li key={group.name}>
                            <button
                              onClick={() => {
                                if (category === "Products") {
                                  setActiveProductIndex(idx);
                                } else {
                                  setActiveGroupIndex(idx);
                                }
                              }}
                              className={`w-full cursor-pointer text-left px-3 py-2 rounded-md mb-1 hover:bg-slate-100 text-sm ${
                                (category === "Products" ? activeProductIndex : activeGroupIndex) === idx
                                  ? "text-blue-500 font-semibold"
                                  : "text-gray-700"
                              }`}
                            >
                              {group.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Content Area */}
          <div className="md:w-3/4">
            {/* ...no dropdown, group selection is now in sidebar... */}

            {/* Show content */}
            <div className={isProducts ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" : "grid grid-cols-1 sm:grid-cols-2 gap-6"}>
              <AnimatePresence mode="wait">
                {isProducts ? (
                  activeItems.map((item, index) => (
                    <motion.div
                      key={item.imgSrc}
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ delay: index * 0.05 }}
                      className="overflow-hidden rounded-xl shadow-sm border border-slate-300"
                    >
                      <img
                        src={item.imgSrc}
                        alt={item.title}
                        className="h-48 w-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>
                  ))
                ) : (
                  activeItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ delay: index * 0.1 }}
                      className="bg-white h-min rounded-xl p-6 shadow-sm border border-slate-300 flex flex-col"
                    >
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                      {item.description && (
                        <p className="text-gray-600 flex-grow">{item.description}</p>
                      )}
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductsAndServicesPage;
