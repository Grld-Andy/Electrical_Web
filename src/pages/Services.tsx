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
  'Electrical Engineering & Power Systems': {
    icon: <Zap className="w-6 h-6" />,
    services: [
      {
        title: 'High, Medium & Low Voltage Works',
        description:
          'Design, installation, and maintenance of HV/MV/LV transmission and distribution systems including industrial, commercial, and domestic wiring.',
      },
      {
        title: 'Electrical Engineering Design & Consultancy',
        description:
          'Professional engineering studies, system designs, and technical consultancy services tailored to client requirements.',
      },
      {
        title: 'Instrumentation & Automation',
        description:
          'Integration of instrumentation, control systems, and process automation for improved efficiency and safety.',
      },
    ],
  },
  'Mechanical, Electrical & Plumbing (MEP)': {
    icon: <HardHat className="w-6 h-6" />,
    services: [
      {
        title: 'MEP Engineering',
        description:
          'Complete MEP works covering electrical, plumbing, and mechanical installations for industrial and commercial facilities.',
      },
      {
        title: 'Air Conditioning & Refrigeration',
        description:
          'Installation and servicing of cooling systems for residential, commercial, and industrial applications.',
      },
    ],
  },
  'Renewable & Sustainable Solutions': {
    icon: <Sun className="w-6 h-6" />,
    services: [
      {
        title: 'Solar Power Systems',
        description:
          'Supply and installation of solar systems including solar pumping, hybrid systems, and grid integration solutions.',
      },
      {
        title: 'Energy Efficiency Solutions',
        description:
          'Customized energy-saving solutions to reduce costs while promoting sustainability.',
      },
    ],
  },
  'Networking & Security Systems': {
    icon: <Cpu className="w-6 h-6" />,
    services: [
      {
        title: 'Fiber Optic & Data Networks',
        description:
          'Installation of fiber optic infrastructure, structured cabling, and telecommunication networks.',
      },
      {
        title: 'Electric Fencing & Security Systems',
        description:
          'Design and deployment of security solutions including electric fencing and access control.',
      },
    ],
  },
  'Products & Electrical Supplies': {
    icon: <ShieldCheck className="w-6 h-6" />,
    services: [
      {
        title: 'Cables & Accessories',
        description:
          'Supply of high and low voltage electrical cables, instrumentation cables, and control wiring solutions.',
      },
      {
        title: 'Power Protection & Distribution Equipment',
        description:
          'Transformers, RMUs, surge protection devices, and switchgear for reliable energy distribution.',
      },
      {
        title: 'Lighting & Electrical Fittings',
        description:
          'Wide range of quality lighting fixtures and general electrical fittings for industrial and commercial projects.',
      },
    ],
  },
  'Health, Safety & Quality Assurance': {
    icon: <ShieldCheck className="w-6 h-6" />,
    services: [
      {
        title: 'Safety First Approach',
        description:
          'Strict adherence to health, safety, and environmental standards to protect our people, clients, and communities.',
      },
      {
        title: 'Quality & Timely Delivery',
        description:
          'Efficient project execution with guaranteed quality materials and on-time completion.',
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
