import React from "react";
import type { ReactNode } from "react";
import PageHeader from "@/components/ui/PageHeader";
import { motion, type Variants } from "framer-motion";
import {
  FaBullseye,
  FaRocket,
  FaHandshake,
  FaBriefcase,
  FaBroadcastTower,
  FaHardHat,
  FaLightbulb,
  FaTools,
} from "react-icons/fa";
import MarketSegment from "@/components/About/MarketSegment";
import TechnicalExpertise from "@/components/About/TechnicalExpertise";
import Careers from "@/components/About/Careers";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

// TODO: change our story picture, 
// add pictures to market segment
// technology and expertise
// job ads, graduate trainee, nss

// FeatureCard component
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, children }) => (
  <motion.div
    className="bg-white p-6 rounded-md flex flex-col items-center text-center"
    variants={{
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 text-white mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </motion.div>
);

const About: React.FC = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2, ease: "easeInOut" },
    },
  };

  const buttonClasses =
    "bg-blue-600 text-white font-bold py-3 px-6 rounded-md shadow hover:bg-blue-700 transition-all duration-300";

  return (
    <div className="bg-gray-50 text-gray-800">
      <PageHeader text="ABOUT US" />

      {/* Our Story Section */}
      <div id="our-story" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Lymfz Engineering Limited specializes in delivering safe, efficient, and innovative electrical solutions.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of engineers and technicians combines technical expertise with modern tools to execute projects on time and to the highest standards. From residential and commercial installations to complex industrial works, we provide tailored services that keep systems reliable, sustainable, and future-ready.
            </p>
          </motion.div>

          <motion.div
            className="rounded-md overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/images/about.jpg"
              alt="About Lymfz Engineering Limited team at work"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Vision, Mission & Values */}
      <motion.div
        className="bg-white py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        id="mission"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
          <FeatureCard icon={<FaRocket size={24} />} title="Our Vision">
            Driving sustainable growth through people, partnerships, quality, and innovation.
          </FeatureCard>
          <FeatureCard icon={<FaBullseye size={24} />} title="Our Mission">
            Striving to be the top choice by delivering safe, timely projects and lasting relationships.
          </FeatureCard>
          <FeatureCard icon={<FaHandshake size={24} />} title="Our Values">
            Safety, Integrity, Innovation, Excellence, and Partnership.
          </FeatureCard>
        </div>
      </motion.div>

      {/* Market Segment Section */}
      <MarketSegment/>

      {/* Technical Expertise */}
      <TechnicalExpertise/>

      {/* Career Section */}
      <Careers/>
      
    </div>
  );
};

export default About;
