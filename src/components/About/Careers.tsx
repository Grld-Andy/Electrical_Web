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

const careers: Career[] = []

// const careers: Career[] = [
//   {
//     title: "Electrical Project Engineer",
//     location: "Accra, Ghana",
//     type: "Full-Time",
//     desc: "Manage and execute industrial and commercial electrical projects. Strong knowledge in LV/MV systems, site supervision, and safety compliance required.",
//   },
//   {
//     title: "Site Technician",
//     location: "Takoradi, Ghana",
//     type: "Contract",
//     desc: "Assist engineers with onsite installations, cabling, and maintenance. Great opportunity for hands-on learners with electrical skills and field readiness.",
//   },
//   {
//     title: "Graduate Intern - Electrical Engineering",
//     location: "Accra (Onsite)",
//     type: "Internship",
//     desc: "Fresh graduates in Electrical or Electronics Engineering are welcome. Gain practical experience in project design, panel building, and testing.",
//   },
// ];

const buttonClasses =
  "bg-blue-600 text-white font-bold py-3 px-6 rounded-md shadow hover:bg-blue-700 transition-all duration-300";

const Careers: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className="bg-gray-50 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      id="career"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Careers at Lymfz
        </h2>
        <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
          At Lymfz Engineering Limited, we believe in nurturing talent and
          building lasting careers. Explore our current opportunities and find
          your place in a team driven by innovation, safety, and collaboration.
        </p>

        {/* Accordion List */}
        <div className="space-y-4">
          {careers && careers.length > 0 ? careers.map((career, index) => (
            <div
              key={career.title}
              className="bg-white border rounded-md shadow-sm"
            >
              {/* Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {career.title}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="text-blue-600" />
                ) : (
                  <FaChevronDown className="text-blue-600" />
                )}
              </button>

              {/* Content */}
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
                <div className="px-6 pb-4 text-gray-600 text-md">
                  <p>
                    <strong className="text-gray-800 text-md">Location:</strong>{" "}
                    {career.location}
                  </p>
                  <p>
                    <strong className="text-gray-800 text-md">Type:</strong>{" "}
                    {career.type}
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
          )) : 
          <div>
            <h1>No vacancies available.</h1>
          </div>
          }
        </div>

        {/* General Apply Button */}
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

export default Careers;
