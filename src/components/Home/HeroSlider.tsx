import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: 'https://hertzengineering.com/wp-content/uploads/high-voltage-power-lines-fiery-sunrise-scaled.jpg',
    title: ['Electrical Infrastructure: Feasibility', 'Studies, Engineering, Procurement,'],
    buttonText: 'Our Story',
  },
  {
    image: 'https://hertzengineering.com/wp-content/uploads/IMG-20241227-WA0012.jpg',
    title: ['High & Medium Voltage Transmission', '& Distribution (T&D) Network and', 'Substation Design'],
    buttonText: 'Our Services',
  },
  {
    image: 'https://hertzengineering.com/wp-content/uploads/IMG-20250626-WA0012.jpg',
    title: ['LV (Low Voltage) Design', '& Electrical Installation'],
    buttonText: 'Our Services',
  },
  {
    image: 'https://hertzengineering.com/wp-content/uploads/IMG-20241227-WA0059.jpg',
    title: ['Power System', 'Modelling & Studies'],
    buttonText: 'Our Services',
  },
];

const sliderVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const textItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const HeroSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (newDirection) => {
    setPage([(page + newDirection + slides.length) % slides.length, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 9000); // Change slide every 9 seconds
    return () => clearInterval(interval);
  }, [page]);

  const slideIndex = page;

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          className="absolute h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[slideIndex].image})` }}
          custom={direction}
          variants={sliderVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>
      
      <div className="relative z-10 w-full container mx-auto px-6 text-white text-left">
          <motion.div
            key={slideIndex} // Re-trigger animation on slide change
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {slides[slideIndex].title.map((line, i) => (
                <motion.h1
                  key={i}
                  variants={textItemVariants}
                  className="text-4xl md:text-6xl font-extrabold font-heading leading-tight tracking-wide"
                >
                  {line}
                </motion.h1>
              ))}
            <motion.button 
              variants={textItemVariants}
              className="mt-8 bg-hertz-dark-blue text-white font-semibold py-4 px-8 hover:bg-white hover:text-hertz-dark-blue transition-all duration-300 transform hover:scale-105"
            >
              {slides[slideIndex].buttonText}
            </motion.button>
          </motion.div>
      </div>

      <div className="absolute bottom-5 right-5 z-20 flex">
        <button
          onClick={() => paginate(-1)}
          className="w-20 h-20 bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
        >
          <svg className="w-6 h-6 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
        <button
          onClick={() => paginate(1)}
          className="w-20 h-20 bg-hertz-dark-blue hover:bg-hertz-blue text-white flex items-center justify-center transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;