import React from 'react';
import { motion } from 'framer-motion';

const SafetySection = () => {
    return (
        <section className="flex flex-col lg:flex-row-reverse items-center bg-gray-800 text-white">
            <motion.div 
                className="w-full lg:w-1/2 h-80 lg:h-[600px] bg-cover bg-center"
                style={{ backgroundImage: "url('https://hertzengineering.com/wp-content/uploads/powerline.jpg')" }} // Placeholder image
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
            </motion.div>
            <motion.div 
                className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-4xl font-black font-heading mb-6">
                    Safety Is Of The Utmost Importance.
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>At Lymfz Engineering Limited, safety is not just a requirement — it is a core value. We are committed to ensuring the highest standards of health, safety, and environmental protection across all our operations.</p>
                    <p>Our team is trained to prioritize safety at all levels, proactively identifying risks and implementing effective control measures.</p>
                    <p>Because at Lymfz Engineering, we believe that every successful project begins and ends with safety.</p>
                </div>
            </motion.div>
        </section>
    );
};

export default SafetySection;