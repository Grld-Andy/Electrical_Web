import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, HardHat, ShieldCheck, Sun, Cpu } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import Sidebar from '@/components/Services/Sidebar';

const serviceData = {
  'Electrical Engineering & Power Systems': {
    icon: <Zap className="w-6 h-6" />,
    services: [
      {
        title: 'Electrical Infrastructure: Feasibility Studies, Engineering, Procurement, Construction & Consultancy',
        description:
          'Comprehensive EPC and consultancy services covering feasibility studies, design, procurement, and construction of electrical infrastructure.',
          imgSrc: '/images/my/home/hero10.jpg'
      },
      {
        title: 'High, Medium Voltage Transmission and LV (Low Voltage) Distribution Network Substation Design & Installation',
        description:
          'Design and installation of transmission, distribution networks, and substations across HV, MV, and LV levels.',
          imgSrc: '/images/my/home/hero4.jpg'
      },
      {
        title: 'Power System Modelling & Studies',
        description:
          'Advanced modeling, simulations, and studies to optimize the reliability, efficiency, and stability of power systems.',
          imgSrc: '/images/my/home/hero5.jpg '
      },
      {
        title: 'Power System Protection Services',
        description:
          'Specialized design and implementation of protection schemes to safeguard electrical networks and equipment.',
          imgSrc: '/images/my/home/whyChooseUs.jpg'
      },
      {
        title: 'Electrical Instrumentation, SCADA & Automation',
        description:
          'Integration of instrumentation systems, SCADA solutions, and automation for smart and efficient operations.',
          imgSrc: '/images/my/home/hero11.jpg'
      },
    ],
  },
  'Mechanical, Electrical & Plumbing (MEP)': {
    icon: <HardHat className="w-6 h-6" />,
    services: [
      {
        title: 'Air Conditioning',
        description: 'Installation and servicing of cooling systems for all applications.',
        imgSrc: '/images/my/home/heromep.jpg'
      },
      {
        title: 'Electrical commercial and domestic wiring installations',
        description: 'Safe and reliable wiring solutions for homes and businesses.',
        imgSrc: '/images/my/wiring.jpg'
      },
    ],
  },
  'Renewable & Sustainable Solutions': {
    icon: <Sun className="w-6 h-6" />,
    services: [
      {
        title: 'Solar Power Systems',
        description: 'Supply and installation of solar systems including pumping and grid integration.',
        imgSrc: '/images/my/energy_efficiency.jpg'
      },
      {
        title: 'Energy Efficiency Solutions (Energy Auditing)',
        description: 'Customized energy-saving solutions for reduced costs and sustainability.',
        imgSrc: '/images/my/energy_efficiency.jpg'
      },
    ],
  },
  'Networking & Security Systems': {
    icon: <Cpu className="w-6 h-6" />,
    services: [
      {
        title: 'Fiber optics, data and telecommunication networks',
        description: 'Installation of fiber optic infrastructure, structured cabling, and networks.',
        imgSrc: '/images/my/fiber.jpg'
      },
      {
        title: 'Electric Fencing & Security Systems',
        description: 'Design and deployment of security solutions including fencing and access control.',
        imgSrc: '/images/my/home/heroo8.jpg'
      },
    ],
  },
  'Electrical Products and Equipment Supplies': {
    icon: <ShieldCheck className="w-6 h-6" />,
    services: [
      { title: 'Cables & Accessories', folder: 'cables' },
      { title: 'Power Protection & Distribution Equipment', folder: 'protection' },
      { title: 'Lighting & Electrical Fittings', folder: 'lighting' },
      { title: 'Solar Systems', folder: 'solar' },
    ],
  },
};

// --- Combined Grouped Data ---
type Item = { title: string; imgSrc?: string; description?: string };
type Group = { name: string; items: Item[] };
export type Category = { icon: React.ReactNode; groups: Group[] };

const combinedData: { [category: string]: Category } = {
  'Services and Solutions': {
    icon: <Zap className="w-6 h-6" />,
    groups: Object.entries(serviceData)
      .slice(0, 4)
      .map(([groupName, group]) => ({
        name: groupName,
        items: group.services.map(s => ({
          title: s.title,
          description: 'description' in s ? s.description : undefined,
          imgSrc: 'imgSrc' in s ? s.imgSrc : undefined,
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
          { title: 'Cable 4', imgSrc: '/images/my/products/cables/4.jpg' },
          { title: 'Cable 5', imgSrc: '/images/my/products/cables/5.jpg' },
          { title: 'Cable 6', imgSrc: '/images/my/products/cables/6.jpg' },
          { title: 'Cable 7', imgSrc: '/images/my/products/cables/7.jpg' },
          { title: 'Cable 8', imgSrc: '/images/my/products/cables/8.jpg' },
          { title: 'Cable 9', imgSrc: '/images/my/products/cables/9.jpg' },
          { title: 'Cable 10', imgSrc: '/images/my/products/protection/5.jpg' },
          { title: 'Cable 11', imgSrc: '/images/my/products/protection/6.jpg' },
          { title: 'Cable 12', imgSrc: '/images/my/products/protection/7.jpg' },
          { title: 'Cable 13', imgSrc: '/images/my/products/protection/9.jpg' },
          { title: 'Cable 14', imgSrc: '/images/my/products/protection/11.jpg' },
          { title: 'Cable 15', imgSrc: '/images/my/products/protection/12.jpg' },
        ],
      },
      {
        name: 'Power Protection & Distribution Equipment',
        items: [
          { title: 'Protection 1', imgSrc: '/images/my/products/protection/1.jpg' },
          { title: 'Protection 2', imgSrc: '/images/my/products/protection/16.jpg' },
          { title: 'Protection 3', imgSrc: '/images/my/products/protection/3.jpg' },
          { title: 'Protection 4', imgSrc: '/images/my/products/protection/4.jpg' },
          { title: 'Protection 5', imgSrc: '/images/my/products/protection/10.jpg' },
          { title: 'Protection 6', imgSrc: '/images/my/products/protection/8.jpg' },
          { title: 'Protection 7', imgSrc: '/images/my/products/protection/13.jpg' },
          { title: 'Protection 8', imgSrc: '/images/my/products/protection/14.jpg' },
          { title: 'Protection 9', imgSrc: '/images/my/products/protection/15.jpg' },
          { title: 'Protection 10', imgSrc: '/images/my/products/protection/17.jpg' },
        ],
      },
      {
        name: 'Lighting & Electrical Fittings',
        items: [
          { title: 'Lighting 1', imgSrc: '/images/my/products/lighting/1.jpg' },
          { title: 'Lighting 2', imgSrc: '/images/my/products/lighting/2.jpg' },
          { title: 'Lighting 3', imgSrc: '/images/my/products/lighting/3.jpg' },
          { title: 'Lighting 4', imgSrc: '/images/my/products/lighting/4.jpg' },
          { title: 'Lighting 5', imgSrc: '/images/my/products/lighting/5.jpg' },
          { title: 'Lighting 7', imgSrc: '/images/my/products/lighting/7.jpg' },
          { title: 'Lighting 6', imgSrc: '/images/my/products/lighting/6.jpg' },
          { title: 'Lighting 8', imgSrc: '/images/my/products/lighting/8.jpg' },
          { title: 'Lighting 9', imgSrc: '/images/my/products/lighting/9.jpg' },
          { title: 'Lighting 10', imgSrc: '/images/my/products/lighting/10.jpg' },
          { title: 'Lighting 11', imgSrc: '/images/my/products/lighting/11.jpg' },
          { title: 'Lighting 12', imgSrc: '/images/my/products/lighting/12.jpg' },
          { title: 'Lighting 13', imgSrc: '/images/my/products/lighting/13.jpg' },
        ],
      },
      {
        name: 'Solar Systems',
        items: [
          { title: 'Solar 1', imgSrc: '/images/my/products/solar/1.webp' },
          { title: 'Solar 2', imgSrc: '/images/my/products/solar/2.jpg' },
          { title: 'Solar 3', imgSrc: '/images/my/products/solar/3.jpg' },
          { title: 'Solar 4', imgSrc: '/images/my/products/solar/4.jpg' },
          { title: 'Solar 5', imgSrc: '/images/my/products/solar/5.jpg' },
          { title: 'Solar 6', imgSrc: '/images/my/products/solar/6.jpg' },
          { title: 'Solar 7', imgSrc: '/images/my/products/solar/7.jpg' },
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

  const findGroupIndex = (category: string, groupName: string) => {
    const groups = combinedData[category]?.groups || [];
    return groups.findIndex(g => g.name === groupName);
  };

  useEffect(() => {
    if (location.state?.group) {
      const groupName = location.state.group;
      if (groupName === 'Electrical Products and Equipment Supplies') {
        setActiveCategory('Products');
        setActiveProductIndex(0);
        return;
      }
      const prodIdx = findGroupIndex('Products', groupName);
      if (prodIdx !== -1) {
        setActiveCategory('Products');
        setActiveProductIndex(prodIdx);
      } else {
        const svcIdx = findGroupIndex('Services and Solutions', groupName);
        if (svcIdx !== -1) {
          setActiveCategory('Services and Solutions');
          setActiveGroupIndex(svcIdx);
        }
      }
    }
  }, [location.state]);

  useEffect(() => {
    const handler = (e: CustomEvent) => {
      const group = e.detail?.group;
      if (!group) return;
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
    window.addEventListener('services-switch-group', handler as EventListener);
    return () => window.removeEventListener('services-switch-group', handler as EventListener);
  }, []);

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const activeGroups = combinedData[activeCategory].groups;
  const activeItems = activeGroups[activeCategory === 'Products' ? activeProductIndex : activeGroupIndex].items;

  return (
    <div className="bg-gray-50 min-h-screen">
      <main>
        <PageHeader text="PRODUCTS, SERVICES AND SOLUTIONS" image="/images/my/navbar/products.jpg" />
        <div className="py-10 flex flex-col md:flex-row md:space-x-10 px-4 sm:px-8 md:px-16">
          <Sidebar
            combinedData={combinedData}
            setActiveCategory={setActiveCategory}
            setActiveGroupIndex={setActiveGroupIndex}
            setActiveProductIndex={setActiveProductIndex}
            activeCategory={activeCategory}
            activeGroupIndex={activeGroupIndex}
            activeProductIndex={activeProductIndex}
          />

          <div className="md:w-3/4">
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8`}>
              <AnimatePresence mode="wait">
                {activeItems.map((item, index) => (
                  <motion.div
                    key={item.title + index}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ delay: index * 0.05, duration: 0.4, ease: 'easeInOut' }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-200 flex flex-col group"
                  >
                    {item.imgSrc && (
                      <div className="overflow-hidden h-[240px]">
                        <img
                          src={item.imgSrc}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    {item.description && (
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                        <p className="text-gray-600 flex-grow">{item.description}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductsAndServicesPage;