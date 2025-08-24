import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";

// --- Types ---
type Project = {
  title: string;
  client: string;
  imgSrc: string;
};

type ProjectData = {
  [year in "2025" | "2024" | "2023"]: Project[];
};

// --- Company Project Data ---
const projectData: ProjectData = {
  "2025": [
    {
      title: "Supply & Installation of Solar Submersible Pump",
      client: "Client: GIZ Technologies",
      imgSrc: "https://www.worldpumps.com/media/0tdif5ol/b41349fe-ecd0-479b-b64e-54c1fd902f9e.jpg",
    },
  ],
  "2024": [
    {
      title: "Supply of 33kV 3-Core x 35mm Armoured Copper Cable (500m)",
      client: "Client: AngloGold Ashanti Iduapriem (via Maalotech Engineering)",
      imgSrc: "./images/copper.jpg",
    },
    {
      title:
        "Supply of 33kV 3-Core x 35mm Armoured Copper Cable (600m) + Electrical Materials",
      client: "Client: AngloGold Ashanti Iduapriem (via Maalotech Engineering)",
      imgSrc: "./images/warehouse.jpg",
    },
  ],
  "2023": [
    {
      title: "Supply of 3 Sets of 11kV Schneider RMUs",
      client: "Client: AngloGold Ashanti Obuasi (via Maalotech Engineering)",
      imgSrc: "./images/unit.jpg"
      },
    {
      title:
        "Supply of 2 Sets of 33kV 630A Auto Reclosers",
      client: "Client: AngloGold Ashanti Iduapriem (via Maalotech Engineering)",
      imgSrc: "data:image/jpeg;base64,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",
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
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.95,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
};

// --- The Main Projects Page Component ---
const Projects: React.FC = () => {
  const [activeYear, setActiveYear] = useState<keyof ProjectData>(years[0]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <PageHeader text="Our Projects" />

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-20">
        {/* Year Selection Tabs */}
        <div className="flex justify-center border-b border-gray-200 mb-12">
          <div className="relative flex space-x-2 md:space-x-4">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`relative cursor-pointer px-4 py-3 text-sm md:text-base font-semibold transition-colors duration-300 focus:outline-none ${
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
                  <h3 className="text-white text-lg font-bold leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm mt-1">{project.client}</p>
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
