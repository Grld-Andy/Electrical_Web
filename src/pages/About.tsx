import MemberCard from "@/components/ui/MemberCard";
import PageHeader from "@/components/ui/PageHeader";
import teamMembers from "@/constants/teamMembers";
import React from "react";
import { motion, type Variants } from "framer-motion"; // Import motion from framer-motion

const About: React.FC = () => {
  // Animation variants for sections to fade in as they appear
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  // Staggering animation for list/grid items
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time delay between each child animating in
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section - No animation needed here as it's the first thing seen */}
      <PageHeader text={"ABOUT US"} />

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image - Animate from the left */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="./images/about.jpg"
              alt="About Lymfz Engineering Limited"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Text - Animate from the right */}
          <motion.div
            className="prose lg:prose-lg max-w-none"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Building Reliable Energy Solutions
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lymfz Engineering Limited specializes in delivering safe, efficient
              and innovative electrical solutions. Our team of skilled engineers
              and technicians combines technical expertise with modern tools to
              execute projects on time and to the highest standards.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From residential and commercial installations to complex
              industrial works, we provide tailored services that keep systems
              reliable, sustainable, and future-ready.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <motion.div
        className="bg-gray-50 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Our Services
          </h2>
          <motion.ul
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-disc list-inside text-gray-700"
            variants={containerVariants}
          >
            {[
              "High, Medium & Low Voltage Transmission Works",
              "Mechanical, Electrical & Plumbing (MEP)",
              "Electrical Engineering Design & Consultancy",
              "Supply of Electrical Materials & Equipment",
              "Instrumentation & Automation",
              "Solar Power Systems",
              "Fiber Optic Installations",
              "Electric Fencing",
              "Data & Telecommunication Networks",
              "Air Conditioning & Refrigeration",
            ].map((service, index) => (
              <motion.li key={index} variants={itemVariants}>
                {service}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

      {/* Projects Section */}
      {/* This section remains commented out as in the original file */}

      {/* Products Section */}
      <motion.div
        className="bg-gray-50 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            What We Supply
          </h2>
          <motion.ul
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-disc list-inside text-gray-700"
            variants={containerVariants}
          >
             {[
              "Lighting & Electrical Fittings",
              "High & Low Voltage Cables (up to 33kv)",
              "Instrumentation & Control Cables",
              "Power Protection & Surge Control Devices",
              "Distribution & Automation Equipment",
              "Transformers up to 10MVA, 33KV",
              "RMUs (11kv & 33KV up to 1000A)",
            ].map((product, index) => (
              <motion.li key={index} variants={itemVariants}>
                {product}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

      {/* Safety Section */}
      <motion.div
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Safety First
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed px-10">
            Safety is at the heart of everything we do. Every project is
            executed under strict health, safety, and environmental protocols.
            Our engineers and technicians are trained to minimize risks and
            maintain compliance with international best practices.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Because a successful project always begins and ends with safety.
          </p>
        </div>
      </motion.div>

      {/* Team Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Professional Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Skilled engineers, technicians and managers dedicated to
              delivering excellence in every project.
            </p>
          </motion.div>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <MemberCard member={member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Remarks Section */}
      <motion.div
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Our Commitment
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed px-10">
            We are committed to quality, reliability, and long-term partnership.
            By combining expertise with innovation, Lymfz Engineering Limited
            delivers solutions that clients can depend on for years to come.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;