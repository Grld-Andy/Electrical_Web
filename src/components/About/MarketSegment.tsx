import { motion, type Variants } from 'framer-motion'
import React from 'react'
import { FaHardHat, FaTools, FaLightbulb, FaBriefcase, FaRocket, FaBullseye, FaBroadcastTower, FaHandshake } from 'react-icons/fa';

const MarketSegment = () => {
    const sectionVariants: Variants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, staggerChildren: 0.2, ease: "easeInOut" },
      },
    };
    const marketSegments = [
        { icon: <FaHardHat size={28} />, name: "Petrochemical Industry" },
        { icon: <FaTools size={28} />, name: "Commercial & Industrial Energy Solutions" },
        { icon: <FaLightbulb size={28} />, name: "Power Generation" },
        { icon: <FaBriefcase size={28} />, name: "Industrial Sector" },
        { icon: <FaRocket size={28} />, name: "Renewable Energy Solutions" },
        { icon: <FaBullseye size={28} />, name: "Mining Industry" },
        { icon: <FaBroadcastTower size={28} />, name: "Agricultural Sector" },
        { icon: <FaHandshake size={28} />, name: "Marine Industry" },
    ];
      
    return (
        <motion.div
            className="py-20 bg-gray-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            id="market-segment"
        >
            <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Market Segment</h2>
            <p className="text-gray-600 mb-10">
                Empowering Industries Through Expertise and Innovation. Lymfz Engineering Limited provides innovative and reliable electrical engineering solutions to various industries. Our expertise ensures efficiency, safety, and sustainability in every project we undertake. While we specialize in the following key market segments, our services are not limited to these areas. We are always ready to adapt to evolving industry needs.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {marketSegments.map((segment) => (
                <motion.div
                    key={segment.name}
                    className="bg-white p-6 rounded-md shadow flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-lg"
                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                >
                    <div className="text-blue-600 mb-3">{segment.icon}</div>
                    <span className="text-lg font-semibold text-gray-800">{segment.name}</span>
                </motion.div>
                ))}
            </div>
            </div>
        </motion.div>
    )
}

export default MarketSegment