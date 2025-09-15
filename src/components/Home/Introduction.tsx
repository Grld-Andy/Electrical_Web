import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 }
  },
};

const Introduction = () => {
  return (
    <motion.section
      className="py-16 md:py-24 bg-gray-50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-black font-heading">
          <span className="text-blue-600">Lymfz </span>
          <span className="text-gray-900">Engineering Limited</span>
        </h2>
        <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
          Founded in 2020, Lymfz Engineering Limited is a Ghanaian electrical engineering company 
          delivering solutions across domestic, commercial, and industrial sectors.
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
          With integrity, reliability, and a safety-first culture, we ensure every project is 
          delivered on time and to the highest standards.
        </p>
      </div>
    </motion.section>
  );
};

export default Introduction;
