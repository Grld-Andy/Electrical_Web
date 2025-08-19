import React from 'react';
import { motion } from 'framer-motion';

type PartnerLogo = {
    src: string;
    alt: string;
};

const partnerLogos: PartnerLogo[] = [
    { src: "https://hertzengineering.com/wp-content/uploads/images-1.png", alt: "Schneider Electric" },
    { src: "https://hertzengineering.com/wp-content/uploads/Philips_logo.svg.png", alt: "Philips" },
    { src: "https://hertzengineering.com/wp-content/uploads/Siemens-Logo.png", alt: "Siemens" },
    { src: "https://hertzengineering.com/wp-content/uploads/182-1822111_9950386800-1-aucom-logo.png", alt: "Aucom" },
    { src: "https://hertzengineering.com/wp-content/uploads/cropped-ZMS-Fournisseurs-de-Cables.png", alt: "ZMS Cables" },
    { src: "https://hertzengineering.com/wp-content/uploads/ABB_logo.svg.png", alt: "ABB" },
    { src: "https://hertzengineering.com/wp-content/uploads/yokogawa2_optimized.png", alt: "Yokogawa" },
    { src: "https://hertzengineering.com/wp-content/uploads/images-3-e1723278129382.png", alt: "Aberdare" },
    { src: "https://hertzengineering.com/wp-content/uploads/agenda.png", alt: "Agenda" },
    { src: "https://hertzengineering.com/wp-content/uploads/images-5.png", alt: "Eaton" },
    { src: "https://hertzengineering.com/wp-content/uploads/1744515-scaled.jpg", alt: "Raychem" },
    { src: "https://hertzengineering.com/wp-content/uploads/TOSHIBA_Logo.png", alt: "Toshiba" },
];

// Animation variant for the grid container to orchestrate the stagger effect
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // This will make each logo appear one after the other
        }
    }
};

// Animation variant for each individual logo
const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
        opacity: 1, 
        scale: 1,
        y: 0,
        transition: {
            stiffness: 100,
            damping: 12
        }
    }
};

const Partners: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-gray-50">
            <div className="container mx-auto px-6">
                {/* Centered, professional heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600">
                        We collaborate with world-renowned partners to ensure the highest quality and reliability in every project we undertake.
                    </p>
                </div>

                {/* The animated grid of logos */}
                <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the grid is in view
                >
                    {partnerLogos.map((logo, index) => (
                        <motion.div 
                            key={index} 
                            className="group flex items-center justify-center p-6 bg-white rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-md"
                            variants={logoVariants}
                        >
                            <img 
                                src={logo.src} 
                                alt={logo.alt} 
                                className="max-h-14 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105" 
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Partners;