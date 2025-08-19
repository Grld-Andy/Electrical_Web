import React from 'react';
import { motion } from 'framer-motion';

const partnerLogos = [
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

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}

const Partners = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold font-heading text-left mb-8 text-gray-800">Our Partners</h2>
                <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 border"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {partnerLogos.map((logo, index) => (
                        <motion.div 
                            key={index} 
                            className="flex items-center justify-center p-6 border bg-white h-32 grayscale hover:grayscale-0 transition-all duration-300"
                            variants={logoVariants}
                        >
                            <img src={logo.src} alt={logo.alt} className="max-h-16 w-auto object-contain" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Partners;