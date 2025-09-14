import React from "react";
import { motion, type Variants } from "framer-motion";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2, ease: "easeInOut" },
  },
};

const expertiseAreas = [
  {
    name: "SCADA & Industrial Automation",
    desc: "Schneider Electric Vijeo Citect, Siemens SIMATIC WinCC for process monitoring & automation.",
  },
  {
    name: "Construction & Project Coordination",
    desc: "Autodesk Navisworks for 3D model review, clash detection, and project collaboration.",
  },
  {
    name: "Structural & Civil Engineering",
    desc: "STAAD.Pro for structural analysis & design with global code compliance.",
  },
  {
    name: "Electrical Design & Power Systems",
    desc: "EPLAN, ETAP, OpenUtilities, DIgSILENT PowerFactory for design, simulation & analysis.",
  },
  {
    name: "Transmission & Utility Networks",
    desc: "PLS-CADD for overhead power line design, analysis, and optimization.",
  },
  {
    name: "3D CAD & Mechanical Integration",
    desc: "SOLIDWORKS 3D CAD, Electrical & Flow Simulation for product development & integration.",
  },
  {
    name: "Business Process & ERP",
    desc: "SAP ERP Business One for operations, procurement, and resource planning.",
  },
];

const TechnicalExpertise: React.FC = () => {
  return (
    <motion.div
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      id="technical-expertise"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Technical Expertise
        </h2>
        <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
          We leverage world-class engineering and automation tools to deliver
          efficient, reliable, and sustainable solutions. Our expertise covers
          electrical, structural, mechanical, and digital integration across
          industries.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area) => (
            <motion.div
              key={area.name}
              className="bg-white rounded-md shadow p-6 text-center transition-transform hover:-translate-y-1 hover:shadow-lg"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <span className="text-lg font-semibold text-gray-800">
                {area.name}
              </span>
              <p className="text-sm text-gray-600 mt-3">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TechnicalExpertise;
