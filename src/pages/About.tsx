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

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

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
    <div className="bg-gray-50 text-gray-800">
      <PageHeader text="ABOUT US" />

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
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
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
          <FeatureCard icon={<FaRocket size={24} />} title="Our Vision">
            Our vision is to achieve sustainable growth by empowering employees, fostering strong partnerships, delivering long-term value, and being the leading choice in electrical contracting with quality materials and skilled engineers.
          </FeatureCard>
          <FeatureCard icon={<FaBullseye size={24} />} title="Our Mission">
            Delivering reliable, safe, and cost-effective engineering services that empower businesses and communities.
          </FeatureCard>
          <FeatureCard icon={<FaHandshake size={24} />} title="Our Values">
            Safety, Integrity, Innovation, Excellence, and Partnership.
          </FeatureCard>
        </div>
      </motion.div>

      {/* Market Segment Section */}
      <motion.div
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
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

      {/* Career Section */}
      <motion.div
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-6">
            We believe in nurturing talent and creating opportunities for growth. At Lymfz Engineering Limited, careers are built on continuous learning, collaboration, and innovation.
          </p>
          <motion.a
            href="mailto:careers@lymfz.com"
            className={buttonClasses}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Your CV
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
