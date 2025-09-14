import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, HardHat, ShieldCheck, Sun, Cpu } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';

// combine services and solutions
// electical with solutions
// update navbar link
// place solutions in electical engineering subsection

const serviceData = {
  'Electrical Engineering & Power Systems': {
    icon: <Zap className="w-6 h-6" />,
    services: [
      {
        title: 'Electrical Infrastructure',
        description:
          'Feasibility studies, engineering, procurement, construction, and consultancy for electrical infrastructure.',
      },
      {
        title: 'Transmission & Distribution Networks',
        description:
          'Design and installation of high voltage, medium voltage, and low voltage substation and distribution systems.',
      },
      {
        title: 'LV (Low Voltage) Systems',
        description:
          'Low voltage electrical design, installation, and maintenance solutions.',
      },
      {
        title: 'Power System Modelling & Studies',
        description:
          'Comprehensive modeling, analysis, and studies for reliable and efficient power systems.',
      },
      {
        title: 'Power System Protection',
        description:
          'Protection system design, implementation, and maintenance to safeguard electrical networks.',
      },
      {
        title: 'Instrumentation, SCADA & Automation',
        description:
          'Electrical instrumentation, SCADA integration, and automation services for modern power systems.',
      },
    ],
  },
  'Mechanical, Electrical & Plumbing (MEP)': {
    icon: <HardHat className="w-6 h-6" />,
    services: [
      // { title: 'MEP Engineering', description: 'Complete MEP works covering electrical, plumbing, and mechanical installations.' },
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
      { title: 'Fiber Optic & Data Networks', description: 'Installation of fiber optic infrastructure, structured cabling, and networks.' },
      { title: 'Electric Fencing & Security Systems', description: 'Design and deployment of security solutions including fencing and access control.' },
    ],
  },
  'Products & Electrical Supplies': {
    icon: <ShieldCheck className="w-6 h-6" />,
    services: [
      { title: 'Cables & Accessories', description: 'High and low voltage electrical cables and control wiring solutions.' },
      { title: 'Power Protection & Distribution Equipment', description: 'Transformers, RMUs, surge protection, and switchgear.' },
      { title: 'Lighting & Electrical Fittings', description: 'Quality lighting fixtures and electrical fittings for projects.' },
    ],
  },
};


// --- Combined Grouped Data ---
type Item = { title: string; description?: string; imgSrc?: string; href?: string };
type Group = { name: string; items: Item[] };
type Category = { icon: React.ReactNode; groups: Group[] };

const combinedData: { [category: string]: Category } = {
  Services: {
    icon: <Zap className="w-6 h-6" />,
    groups: Object.entries(serviceData).slice(0,4).map(([groupName, group]) => ({
      name: groupName,
      items: group.services.map(s => ({ title: s.title, description: s.description })),
    })),
  },
  Products: {
    icon: <ShieldCheck className="w-6 h-6" />,
    groups: [
      {
        name: 'Products & Electrical Supplies',
        items: serviceData['Products & Electrical Supplies'].services.map(p => ({ title: p.title, description: p.description })),
      },
    ],
  }
};

const ProductsAndServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('Services');
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3, ease: [0.42, 0, 1, 1] as const } },
  };

  const activeGroups = combinedData[activeCategory].groups;
  const activeItems = activeGroups[activeGroupIndex].items;

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
                  <li key={category} className={`${catIdx !== 0 ? 'border-t border-gray-200' : ''}`}>
                    <button
                      onClick={() => setExpandedCategory(expandedCategory === category ? null : category)}
                      className="w-full cursor-pointer flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-100 font-semibold"
                    >
                      {combinedData[category].icon}
                      <span>{category}</span>
                    </button>

                    {expandedCategory === category && (
                      <ul className="pl-8">
                        {combinedData[category].groups.map((group, idx) => (
                          <li
                            key={group.name}
                            className={`py-2 cursor-pointer ${
                              activeCategory === category && activeGroupIndex === idx
                                ? 'text-blue-500 font-bold'
                                : 'text-gray-600 hover:text-black'
                            }`}
                            onClick={() => {
                              setActiveCategory(category);
                              setActiveGroupIndex(idx);
                            }}
                          >
                            {group.name}
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
          <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AnimatePresence mode="wait">
              {activeItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ delay: index * 0.1 }}
                  className="bg-white h-min rounded-xl p-6 shadow-sm border border-slate-300 flex flex-col"
                >
                  {item.imgSrc && <img src={item.imgSrc} alt={item.title} className="h-48 w-full object-cover rounded mb-4" />}
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  {item.description && <p className="text-gray-600 flex-grow">{item.description}</p>}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductsAndServicesPage;
