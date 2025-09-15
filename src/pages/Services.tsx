import React, { useState } from 'react';
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
        items: group.services.map(s => ({ title: s.title, description: s.description })),
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
  const [activeCategory, setActiveCategory] = useState('Services and Solutions');
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  // for product tabs
  const [activeProductIndex, setActiveProductIndex] = useState(0);

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
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Content Area */}
          <div className="md:w-3/4">
            {/* Product Tabs */}
            {isProducts && (
              <div className="mb-6 flex gap-4 border-b border-gray-200">
                {activeGroups.map((group, idx) => (
                  <button
                    key={group.name}
                    onClick={() => setActiveProductIndex(idx)}
                    className={`px-4 py-2 -mb-px border-b-2 ${
                      activeProductIndex === idx
                        ? "border-blue-500 text-blue-600 font-semibold"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {group.name}
                  </button>
                ))}
              </div>
            )}

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
