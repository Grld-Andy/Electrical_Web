import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/ui/PageHeader';

// --- Data for the Solution Cards ---
const solutions = [
  {
    imgSrc: "https://hertzengineering.com/wp-content/uploads/pole.jpg",
    title: "Electrical Infrastructure: Feasibility Studies, Engineering, Procurement, Construction & Consultancy",
    href: "https://hertzengineering.com/feasibilitystudiesengineeringprocurement/",
  },
  {
    imgSrc: "https://hertzengineering.com/wp-content/uploads/pole.jpg",
    title: "High & Medium Voltage Transmission & Distribution (T&D) Network and Substation Design",
    href: "https://hertzengineering.com/highmediumvoltagetdnetworksubstationdesign/",
  },
  {
    imgSrc: "https://hertzengineering.com/wp-content/uploads/LV.jpg",
    title: "LV (Low Voltage) Design & Electrical Installation",
    href: "https://hertzengineering.com/lvlowvoltagedesignelectricalinstallation/",
  },
  {
    imgSrc: "https://hertzengineering.com/wp-content/uploads/pole.jpg",
    title: "Power System Modelling & Studies",
    href: "https://hertzengineering.com/powersystemmodellingstudies/",
  },
  {
    imgSrc: "https://hertzengineering.com/wp-content/uploads/pole.jpg",
    title: "Power System Protection Services",
    href: "https://hertzengineering.com/powersystemprotectionservices/",
  },
  {
    imgSrc: "https://hertzengineering.com/wp-content/uploads/pole.jpg",
    title: "Electrical Instrumentation, SCADA & Automation",
    href: "https://hertzengineering.com/electricalinstrumentationscadaautomation/",
  },
  {
    imgSrc: "https://hertzengineering.com/wp-content/uploads/elec-infras.jpg",
    title: "Electrical Infrastructure Commissioning Services",
    href: "https://hertzengineering.com/solution-electricalinfrastructurecommissioningservices/",
  },
  {
    imgSrc: "https://hertzengineering.com/wp-content/uploads/pole.jpg",
    title: "Critical Electrical Products, Parts & Consultancy Services",
    href: "https://hertzengineering.com/critical-electrical-products/",
  },
  {
    imgSrc: "https://hertzengineering.com/wp-content/uploads/panelbusilding.jpg",
    title: "ECI&C and MCC Panel Manufacturing & Integration",
    href: "https://hertzengineering.com/ecic-and-mcc-panel-manufacturing/",
  },
];

// Motion Variants
const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const Solutions = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <PageHeader text="OUR SOLUTIONS" />

      {/* Introduction Section */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700 text-lg leading-relaxed">
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <span className="absolute -left-12 top-0 text-6xl font-extrabold bg-gradient-to-r from-black to-gray-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                O
              </span>
              ur portfolio encompasses a diverse range of projects, including those in the Power transmission and distribution, mining, renewable energy, manufacturing, petrochemical, and oil and gas industries.
            </motion.p>

            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <span className="absolute -left-12 top-0 text-6xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                W
              </span>
              e are actively involved in connecting the latest renewable energy projects to the national grid in Ghana and West Africa, and our team combines both traditional and cutting-edge techniques to tackle the unique challenges of the energy sector.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Solutions Grid Section */}
      <div className="bg-gray-900 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {solutions.map((solution, index) => (
              <motion.a
                key={index}
                href={solution.href}
                className="group rounded-2xl overflow-hidden bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
                variants={cardVariants}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={solution.imgSrc}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition"></div>
                </div>
                <div className="p-6 flex-1 flex items-center">
                  <p className="text-white font-semibold text-base leading-snug">
                    {solution.title}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
