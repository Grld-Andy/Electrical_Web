import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        image: 'https://hertzengineering.com/wp-content/uploads/high-voltage-power-lines-fiery-sunrise-scaled.jpg',
        title: [
            'Lymfz Engineering Limited',
            'Reliable Electrical Engineering Solutions',
        ],
        buttonText: 'About Us',
        buttonLink: '/about'
    },
    {
        image: 'https://hertzengineering.com/wp-content/uploads/IMG-20241227-WA0012.jpg',
        title: [
            'High, Medium & Low Voltage',
            'Transmission, Distribution & Wiring',
        ],
        buttonText: 'Our Services',
        buttonLink: '/services'
    },
    {
        image: 'https://hertzengineering.com/wp-content/uploads/IMG-20250626-WA0012.jpg',
        title: [
            'Electrical Engineering Design &',
            'Consultancy Services',
        ],
        buttonText: 'Our Projects',
        buttonLink: '/projects'
    },
    {
        image: 'https://hertzengineering.com/wp-content/uploads/IMG-20241227-WA0059.jpg',
        title: [
            'Solar, Automation & Fiber Optics',
            'Smart Energy & Modern Infrastructure',
        ],
        buttonText: 'Our Solutions',
        buttonLink: '/solutions'
    },
    {
        image: 'https://hertzengineering.com/wp-content/uploads/IMG-20241227-WA0059.jpg',
        title: [
            'Trusted by Leading Companies',
            'AngloGold, GIZ, First Atlantic Bank & More',
        ],
        buttonText: 'Projects',
        buttonLink: '/projects'
    },
    {
        image: 'https://hertzengineering.com/wp-content/uploads/IMG-20241227-WA0059.jpg',
        title: [
            'Safety Is Our Core Value',
            'Delivering Quality with Zero Compromise',
        ],
        buttonText: '',
        buttonLink: ''
    },
];


// Smoother slide and fade variants
const sliderVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    // The exiting slide will now just fade out
    exit: {
        zIndex: 0,
        opacity: 0,
    },
};

const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.5, // Increased delay to sync with smoother transition
        },
    },
};

const textItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};


const SmootherHeroSlider = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection: number) => {
        setPage([(page + newDirection + slides.length) % slides.length, newDirection]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            paginate(1);
        }, 9000);
        return () => clearInterval(interval);
    }, [page]);

    const slideIndex = page;

    return (
        <div className="relative h-screen min-h-[700px] w-full overflow-hidden bg-gray-800">
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
                    // 👇 This is the updated transition property for a smoother effect
                    transition={{
                        x: { type: 'tween', ease: 'easeInOut', duration: 1 },
                        opacity: { duration: 0.5 }
                    }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-10 flex flex-col justify-center h-full container mx-auto px-6 text-white">
                <motion.div
                    key={slideIndex}
                    variants={textContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl relative left-10"
                >
                    {slides[slideIndex].title.map((line, i) => (
                        <motion.h1
                            key={i}
                            variants={textItemVariants}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans leading-tight tracking-tight"
                        >
                            {line}
                        </motion.h1>
                    ))}
                    {
                        slides[slideIndex].buttonText && (
                            <motion.a
                                href={slides[slideIndex].buttonLink}
                                variants={textItemVariants}
                                className="inline-block mt-8 bg-blue-600 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                            >
                                {slides[slideIndex].buttonText}
                            </motion.a>
                        )
                    }
                </motion.div>
            </div>
            
            {/* Navigation Arrows */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
                <button
                    onClick={() => paginate(-1)}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                    aria-label="Previous Slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
                 <button
                    onClick={() => paginate(1)}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                    aria-label="Next Slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setPage([i, i > slideIndex ? 1 : -1])}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            i === slideIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default SmootherHeroSlider;