import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Zap, HardHat, ShieldCheck, Sun, Cpu } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';

type Service = {
  title: string;
  description: string;
};

const serviceData: {
  [category: string]: {
    icon: React.ReactNode;
    services: Service[];
  };
} = {
  'Power Systems & Electrical Engineering': {
    icon: <Zap className="w-6 h-6" />,
    services: [
      {
        title: 'Power System Studies',
        description: 'In-depth analysis of power flow, short circuits, and system stability to ensure reliability and efficiency.',
      },
      {
        title: 'High Voltage Electrical Design',
        description: 'Complete design services for substations, transmission lines, and high voltage industrial applications.',
      },
    ],
  },
  'Construction & Installation Services': {
    icon: <HardHat className="w-6 h-6" />,
    services: [
      {
        title: 'High Voltage Construction',
        description: 'Expert construction and commissioning of high voltage infrastructure, adhering to the strictest safety standards.',
      },
      {
        title: 'Medium & Low Voltage Installation',
        description: 'Professional installation and maintenance services for a wide range of electrical systems.',
      },
    ],
  },
  'Testing, Compliance & Safety': {
    icon: <ShieldCheck className="w-6 h-6" />,
    services: [
      {
        title: 'Compliance Audits',
        description: 'Thorough audits to ensure your systems meet all local, national, and international regulatory standards.',
      },
      {
        title: 'Safety System Verification',
        description: 'Comprehensive testing and verification of safety protocols and emergency systems to protect personnel and assets.',
      },
    ],
  },
  'Specialized Solutions & Renewable': {
    icon: <Sun className="w-6 h-6" />,
    services: [
      {
        title: 'Renewable Energy Integration',
        description: 'Designing and implementing solutions to integrate solar, wind, and other renewable sources into the grid.',
      },
      {
        title: 'Innovative Energy Solutions',
        description: 'Developing custom, cutting-edge solutions to meet unique and complex energy challenges.',
      },
    ],
  },
  'Process & Control Systems': {
    icon: <Cpu className="w-6 h-6" />,
    services: [
      {
        title: 'Process Automation Design',
        description: 'Implementing advanced process and control systems to automate and optimize your industrial operations.',
      },
      {
        title: 'System Integration',
        description: 'Seamlessly integrating new control systems with existing infrastructure to enhance performance.',
      },
    ],
  },
};

const serviceCategories = Object.keys(serviceData);

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0]);

  const activeServices = serviceData[activeCategory]?.services || [];

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.3,
        ease: [0.42, 0, 1, 1] as [number, number, number, number],
      },
    },
  };



  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="">
        {/* Hero Section */}
        <PageHeader text={'PRODUCTS AND SERVICES'} />

        {/* Layout */}
        <div className="mt-10 flex flex-col md:flex-row md:space-x-10 px-16">
          {/* Sidebar */}
          <aside className="md:w-1/4 mb-10 md:mb-0">
            <div className="bg-white border-slate-200 sticky top-20">
              <ul className="">
                {serviceCategories.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <li key={category}>
                      <button
                        onClick={() => setActiveCategory(category)}
                        className={`w-full rounded-sm cursor-pointer flex items-center gap-3 px-4 py-3 transition-colors duration-300 text-left ${
                          isActive
                            ? 'bg-[#155DFC]/30 text-black font-semibold shadow-inner'
                            : 'hover:bg-slate-100 text-gray-700'
                        }`}
                      >
                        <span>{serviceData[category].icon}</span>
                        <span className="text-sm">{category}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Services Grid */}
          <div className="md:w-3/4 grid grid-cols-1 h-min sm:grid-cols-2 gap-6">
            <AnimatePresence mode="wait">
              {activeServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: '0px 10px 30px rgba(0,0,0,0.08)',
                  }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-300 flex flex-col"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 flex-grow">{service.description}</p>
                  <a
                    href="#"
                    className="text-blue-600 font-semibold mt-4 inline-flex items-center group"
                  >
                    Learn More
                    <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
