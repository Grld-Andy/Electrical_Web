import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center">
            <motion.div 
                className="w-full lg:w-1/2 h-80 lg:h-[600px] bg-cover bg-center"
                style={{ backgroundImage: "url('https://hertzengineering.com/wp-content/uploads/yokogawa2_optimizedA.png')" }} // Placeholder image
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
            </motion.div>
            <motion.div 
                className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 bg-white"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-4xl font-black font-heading text-hertz-blue mb-6">
                    Why Choose Lymfz Engineering Limited
                </h2>
                <p className="text-gray-600 leading-relaxed">
                    Lymfz Engineering Limited is a team of highly skilled and experienced professional Chartered Electrical Engineers, Designers, Project Managers, Power System Consultants, Control Systems Engineers, Instrumentation Engineers, Electrical Project Coordinators, and Automation Engineers, all with a passion for providing exceptional Electrical Engineering solutions to our clients.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                    We are dedicated to helping businesses and organizations achieve their goals by delivering expert technical and strategic advice, along with trusted, cost-effective, reliable, and resilient electrical power engineering solutions.
                </p>
            </motion.div>
        </section>
    );
};

export default WhyChooseUs;