import React from 'react'
import { motion, type Variants } from 'framer-motion'
import {
  FaHardHat,
  FaTools,
  FaLightbulb,
  FaBriefcase,
  FaShip,
} from 'react-icons/fa'
import { MdEnergySavingsLeaf, MdAgriculture } from "react-icons/md";
import { GiMineWagon } from "react-icons/gi";

const MarketSegment: React.FC = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2, ease: 'easeInOut' },
    },
  }

  const marketSegments = [
    {
      icon: <FaHardHat size={28} />,
      name: 'Petrochemical Industry',
      image: './images/market/petrochem.jpg',
    },
    {
      icon: <FaTools size={28} />,
      name: 'Commercial & Industrial Energy Solutions',
      image: './images/market/commercial.jpg',
    },
    {
      icon: <FaLightbulb size={28} />,
      name: 'Power Generation',
      image: './images/market/power.webp',
    },
    {
      icon: <FaBriefcase size={28} />,
      name: 'Industrial Sector',
      image: './images/market/industrial.jpeg',
    },
    {
      icon: <MdEnergySavingsLeaf size={28} />,
      name: 'Renewable Energy Solutions',
      image: './images/market/renewable.jpg',
    },
    {
      icon: <GiMineWagon size={28} />,
      name: 'Mining Industry',
      image: './images/market/mining.jpg',
    },
    {
      icon: <MdAgriculture size={28} />,
      name: 'Agricultural Sector',
      image: './images/market/agric.jpeg',
    },
    {
      icon: <FaShip size={28} />,
      name: 'Marine Industry',
      image: './images/market/marine.jpg',
    },
  ]

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
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Our Market Segment
        </h2>
        <p className="text-gray-600 mb-10">
          Empowering Industries Through Expertise and Innovation. Lymfz
          Engineering Limited provides innovative and reliable electrical
          engineering solutions to various industries. Our expertise ensures
          efficiency, safety, and sustainability in every project we undertake.
          While we specialize in the following key market segments, our services
          are not limited to these areas. We are always ready to adapt to
          evolving industry needs.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketSegments.map((segment) => (
            <motion.div
              key={segment.name}
              className="bg-white rounded-md shadow flex flex-col items-center text-center overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* Image from web */}
              <img
                src={segment.image}
                alt={segment.name}
                className="w-full h-40 object-cover"
              />

              {/* Icon + Name */}
              <div className="p-6 flex flex-col items-center">
                <div className="text-blue-600 mb-3">{segment.icon}</div>
                <span className="text-lg font-semibold text-gray-800">
                  {segment.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default MarketSegment
