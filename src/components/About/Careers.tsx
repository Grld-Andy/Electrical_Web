import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2, ease: "easeInOut" },
  },
};

type Career = {
  title: string;
  location: string;
  type: string;
  desc: string;
};

const careers: Career[] = [
  {
    title: "Electrical Project Engineer",
    location: "Accra, Ghana",
    type: "Full-Time",
    desc: "We’re looking for an experienced Electrical Engineer to manage and execute industrial and commercial electrical projects. The ideal candidate has strong knowledge in LV/MV systems, site supervision, and safety compliance.",
  },
  {
    title: "Site Technician",
    location: "Takoradi, Ghana",
    type: "Contract",
    desc: "Assist engineers with onsite installations, cabling, and maintenance. A great opportunity for hands-on learners with basic electrical skills and field readiness.",
  },
  {
    title: "Graduate Intern – Electrical Engineering",
    location: "Accra (Onsite)",
    type: "Internship",
    desc: "Fresh graduates with an Electrical or Electronics Engineering degree are welcome to apply. You’ll gain practical experience across project design, panel building, and testing.",
  },
];

const buttonClasses =
  "inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition";

const CareerSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className="py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="career"
      variants={sectionVariants}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Join Our Team
        </h2>
        <p className="text-gray-600 mb-10 text-center">
          At Lymfz Engineering Limited, we build careers, not just solutions. We
          foster growth, collaboration, and technical excellence through
          impactful projects in power, automation, and infrastructure.
        </p>

        {/* Accordion */}
        <div className="space-y-4">
          {careers.map((career, index) => (
            <div
              key={career.title}
              className="border rounded-md bg-white shadow-sm"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-gray-800 hover:bg-gray-100"
              >
                {career.title}
                {openIndex === index ? (
                  <FaChevronUp className="text-blue-600" />
                ) : (
                  <FaChevronDown className="text-blue-600" />
                )}
              </button>

              {/* Accordion Content */}
              <motion.div
                initial={false}
                animate={
                  openIndex === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-4 py-3 text-gray-700 text-sm">
                  <p>
                    <strong>Location:</strong> {career.location}
                  </p>
                  <p>
                    <strong>Type:</strong> {career.type}
                  </p>
                  <p className="mt-2">{career.desc}</p>
                  <a
                    href="mailto:careers@lymfz.com"
                    className="inline-block mt-3 text-blue-600 font-semibold hover:underline"
                  >
                    Apply Now
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* General CV Email Button */}
        <div className="text-center mt-10">
          <motion.a
            href="mailto:careers@lymfz.com"
            className={buttonClasses}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Your CV
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default CareerSection;
