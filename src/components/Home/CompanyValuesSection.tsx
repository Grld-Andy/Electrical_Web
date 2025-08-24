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
                imageUrl="https://yourdomain.com/images/lymfz-team.jpg" // replace with real photo
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
                        className="text-3xl md:text-4xl font-bold text-gray-700 mb-6 border-l-4 border-gray-700 pl-4"
                        variants={itemVariants}
                    >
                        Why Choose Lymfz Engineering
                    </motion.h2>

                    <motion.p 
                        className="text-base text-gray-700 leading-relaxed"
                        variants={itemVariants}
                    >
                        Established in 2020, Lymfz Engineering Ltd is a Ghanaian-owned company delivering 
                        cutting-edge solutions in High, Medium, and Low Voltage Transmission, MEP, 
                        Instrumentation, Automation, Solar Power Systems, Fiber Optics, and Data Networks.
                    </motion.p>

                    <motion.p 
                        className="mt-4 text-base text-gray-700 leading-relaxed"
                        variants={itemVariants}
                    >
                        With a dedicated team of engineers, technicians, and project managers, we have 
                        successfully delivered projects for clients including GIZ Technologies, AngloGold Ashanti, 
                        First Atlantic Bank, Ghana Manganese Company, and Solarshop Ghana. 
                        We are committed to quality, reliability, and timely execution.
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
                        Safety Is Our Utmost Priority
                    </motion.h2>

                    <motion.div 
                        className="text-gray-200 leading-relaxed space-y-4"
                        variants={itemVariants}
                    >
                        <p>
                            At Lymfz Engineering Ltd, safety is embedded in our culture. We strictly adhere 
                            to international health, safety, and environmental (HSE) standards across all projects.
                        </p>
                        <p>
                            From design to implementation, our team identifies risks early, applies proven 
                            control measures, and ensures compliance with both client and regulatory 
                            requirements.
                        </p>
                        <p>
                            Because we believe every successful project begins and ends with safety.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
            <ParallaxImage 
                imageUrl="https://yourdomain.com/images/powerline.jpg" // replace with real photo
                className="lg:h-[650px] lg:order-4"
            />
        </section>
    );
};


export default CompanyValuesSection;
