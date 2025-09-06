import PageHeader from "@/components/ui/PageHeader";
import React from "react";
import { motion, type Variants } from "framer-motion";

const About: React.FC = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <div className="bg-white text-gray-800">
      <PageHeader text={"ABOUT US"} />

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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

          <motion.div
            className="prose lg:prose-lg max-w-none"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Lymfz Engineering Limited specializes in delivering safe,
              efficient, and innovative electrical solutions. Our team of
              engineers and technicians combines technical expertise with modern
              tools to execute projects on time and to the highest standards.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From residential and commercial installations to complex
              industrial works, we provide tailored services that keep systems
              reliable, sustainable, and future-ready.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Vision, Mission & Values */}
      <motion.div
        className="bg-gray-50 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            Vision, Mission & Values
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Vision:</strong> To be a leader in innovative and sustainable
            engineering solutions across Africa.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Mission:</strong> Delivering reliable, safe, and
            cost-effective engineering services that empower businesses and
            communities.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Values:</strong> Safety, Integrity, Innovation, Excellence,
            and Partnership.
          </p>
        </div>
      </motion.div>

      {/* Market Segment */}
      <motion.div
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12">
            Market Segment
          </h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 text-lg">
            {[
              "Oil & Gas",
              "Mining & Industrial",
              "Energy & Power Distribution",
              "Telecommunications",
              "Construction & Real Estate",
              "Government & Public Infrastructure",
            ].map((segment, index) => (
              <li key={index}>{segment}</li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Technology & Expertise */}
      <motion.div
        className="bg-gray-50 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Technology & Expertise
          </h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 text-lg">
            {[
              "High, Medium & Low Voltage Transmission Works",
              "Electrical Engineering Design & Consultancy",
              "Mechanical, Electrical & Plumbing (MEP)",
              "Instrumentation & Automation",
              "Solar Power Systems",
              "Fiber Optic Installations",
              "SCADA Systems & Industrial Automation",
              "Air Conditioning & Refrigeration",
            ].map((expertise, index) => (
              <li key={index}>{expertise}</li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Career */}
      <motion.div
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Career</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe in nurturing talent and creating opportunities for growth.
            At Lymfz Engineering Limited, careers are built on continuous
            learning, collaboration, and innovation.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Interested in joining us?{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Send your CV
            </span>
            .
          </p>
        </div>
      </motion.div>

      {/* Press */}
      <motion.div
        className="bg-gray-50 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Press</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Stay updated with our latest news, media mentions, and announcements.  
            Lymfz Engineering Limited is committed to transparency and sharing our
            journey as we expand and innovate.  
          </p>
          <div className="mt-8 space-y-4">
            {[
              "Lymfz Engineering launches new solar initiative (2024)",
              "Partnership signed with leading telecom provider",
              "Awarded ISO certification for safety and quality",
            ].map((news, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow rounded-md text-gray-800 hover:shadow-md transition"
              >
                {news}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
