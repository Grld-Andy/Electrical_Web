import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// A reusable component to create the parallax image effect
const ParallaxImage = ({ imageUrl, className }: { imageUrl: string; className?: string }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    });

    // Apply a vertical parallax transformation
    const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

    return (
        <div ref={ref} className={`w-full h-80 lg:h-full overflow-hidden ${className}`}>
            <motion.div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${imageUrl})`, y }}
            />
        </div>
    );
};

// Reusable animation variants for text content
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};


const CompanyValuesSection = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2">

            {/* Section 1: Why Choose Us (Image | Text) */}
            <ParallaxImage 
                imageUrl="https://hertzengineering.com/wp-content/uploads/IMG-20241221-WA0035.jpg"
                className="lg:h-[650px]"
            />
            <motion.div
                className="flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                <div>
                    <motion.h2 
                        className="text-3xl md:text-4xl font-bold text-[#003366] mb-6 border-l-4 border-[#0052a5] pl-4"
                        variants={itemVariants}
                    >
                        Why Choose Hertz Engineering
                    </motion.h2>

                    <motion.p 
                        className="text-base text-gray-700 leading-relaxed"
                        variants={itemVariants}
                    >
                        Hertz Engineering Limited is a team of highly skilled and experienced professional Chartered Electrical Engineers, Designers, Project Managers, and Power System Consultants. Our passion is providing exceptional Electrical Engineering solutions to our clients.
                    </motion.p>

                    <motion.p 
                        className="mt-4 text-base text-gray-700 leading-relaxed"
                        variants={itemVariants}
                    >
                        We are dedicated to helping businesses achieve their goals by delivering expert technical advice and trusted, cost-effective, reliable, and resilient electrical power engineering solutions.
                    </motion.p>
                </div>
            </motion.div>

            {/* Section 2: Safety (Text | Image) */}
            <motion.div
                className="flex items-center justify-center p-8 md:p-16 lg:p-24 bg-[#003366] text-white lg:order-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                <div>
                    <motion.h2 
                        className="text-3xl md:text-4xl font-bold mb-6 border-l-4 border-white pl-4"
                        variants={itemVariants}
                    >
                        Safety Is Of The Utmost Importance.
                    </motion.h2>

                    <motion.div 
                        className="text-gray-200 leading-relaxed space-y-4"
                        variants={itemVariants}
                    >
                        <p>At Hertz Engineering Limited, safety is not just a requirement—it is a core value. We are committed to ensuring the highest standards of health, safety, and environmental protection across all our operations.</p>
                        <p>Our team is trained to prioritize safety at all levels, proactively identifying risks and implementing effective control measures, because we believe that every successful project begins and ends with safety.</p>
                    </motion.div>
                </div>
            </motion.div>
            <ParallaxImage 
                imageUrl="https://hertzengineering.com/wp-content/uploads/powerline.jpg"
                className="lg:h-[650px] lg:order-4"
            />
        </section>
    );
};

export default CompanyValuesSection;