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
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-black font-heading">
          <span className="text-hertz-blue">Lymfz </span>
          <span className="text-gray-900">Engineering Ltd</span>
        </h2>
        <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
          Lymfz Engineering Ltd is committed to providing the highest quality products and services exceeding our client’s expectations. We shall continue to expand in equipment and facilities and engage in training and certification programs to further serve customers with utmost excellence and professionalism. As we carry out our mission, we shall be guided by values of integrity, reliability, commitment, and collaboration. Our commitment to service is to: Delivering Results, Exceeding Expectations
        </p>
      </div>
    </motion.section>
  );
};

export default Introduction;