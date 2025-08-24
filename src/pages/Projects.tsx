import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";

// --- Types ---
type Project = {
  title: string;
  imgSrc: string;
};

type ProjectData = {
  [year in "2025" | "2024" | "2023" | "2022"]: Project[];
};

const projectData: ProjectData = {
  "2025": [
    {
      title: "Short Circuit & Coordination Study",
      imgSrc: "https://source.unsplash.com/600x400/?electric,grid",
    },
  ],
  "2024": [
    {
      title: "400V Distribution Panel Manufacturing",
      imgSrc: "https://source.unsplash.com/600x400/?electric,panel",
    },
    {
      title: "161KV Transmission Line Design",
      imgSrc: "https://source.unsplash.com/600x400/?power,line",
    },
  ],
  "2023": [
    {
      title: "Power System Protection Analysis",
      imgSrc: "https://source.unsplash.com/600x400/?protection,relay",
    },
    {
      title: "Substation Electrical Design",
      imgSrc: "https://source.unsplash.com/600x400/?substation,electrical",
    },
    {
      title: "34.5KV Power Line Construction",
      imgSrc: "https://source.unsplash.com/600x400/?construction,power",
    },
  ],
  "2022": [
    {
      title: "Integrated Waste Management Facility",
      imgSrc: "https://source.unsplash.com/600x400/?waste,management",
    },
    {
      title: "Satellite Earth Station Power Systems",
      imgSrc: "https://source.unsplash.com/600x400/?satellite,power",
    },
    {
      title: "Kumasi Medical Services Infrastructure",
      imgSrc: "https://source.unsplash.com/600x400/?hospital,engineering",
    },
    {
      title: "Asante Gold Corporation Electricals",
      imgSrc: "https://source.unsplash.com/600x400/?mining,electric",
    },
    {
      title: "Adamus Resources Power Audit",
      imgSrc: "https://source.unsplash.com/600x400/?audit,power",
    },
    {
      title: "Chirano Gold Mines Substation",
      imgSrc: "https://source.unsplash.com/600x400/?goldmine,substation",
    },
  ],
};

const years = Object.keys(projectData) as Array<keyof ProjectData>; // Get years for tabs

// --- Animation Variants ---
const gridVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }, // easeOut cubic
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.95,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }, // easeIn cubic
  },
};

// --- The Main Projects Page Component ---
const Projects: React.FC = () => {
  const [activeYear, setActiveYear] = useState<keyof ProjectData>(years[0]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <PageHeader text='Our Projects'/>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-20">
        {/* Year Selection Tabs */}
        <div className="flex justify-center border-b border-gray-200 mb-12">
          <div className="relative flex space-x-2 md:space-x-4">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`relative px-4 py-3 text-sm md:text-base font-semibold transition-colors duration-300 focus:outline-none ${
                  activeYear === year
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {year}
                {activeYear === year && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    layoutId="active-year-indicator"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={gridVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {projectData[activeYear].map((project: Project) => (
              <motion.div
                key={project.title}
                className="group relative rounded-lg overflow-hidden shadow-lg"
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-72 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-xl font-bold leading-tight">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
