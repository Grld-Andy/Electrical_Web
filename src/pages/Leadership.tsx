import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

// Data for the leadership team
// This makes it easy to update the leadership section without changing the code.
const leadershipTeam = [
  {
    name: 'Collins Kofi Kofitse Badu',
    title: 'Executive Vice President, Managing Director',
    imageUrl: 'https://hertzengineering.com/wp-content/uploads/boss-collins.png',
    email: 'collins@hertzengineering.com',
  },
  {
    name: 'Hendrik Petrus Jacobus Venter',
    title: 'Executive President, Project Director',
    imageUrl: 'https://hertzengineering.com/wp-content/uploads/hendrik.png',
    email: 'info.sa@hertzengineering.com',
  },
  {
    name: 'Graeme Ramsay',
    title: 'Executive Vice President, Business Development Manager',
    imageUrl: 'https://hertzengineering.com/wp-content/uploads/raamsey.png',
    email: 'info.sl@hertzengineering.com',
  },
  {
    name: 'Gabriel Sarfo',
    title: 'Executive Vice President, Safety and Sustainability Manager',
    imageUrl: 'https://hertzengineering.com/wp-content/uploads/sarfo.png',
    email: 'info.us@hertzengineering.com',
  },
  {
    name: 'Bismark Acheampong',
    title: 'Executive Vice President, Project Manager',
    imageUrl: 'https://hertzengineering.com/wp-content/uploads/bismark.jpg',
    email: 'info.uk@hertzengineering.com',
  },
  {
    name: 'Raymond Kofi Quaicoe',
    title: 'Executive Vice President, Chief Financial Officer',
    imageUrl: 'https://hertzengineering.com/wp-content/uploads/ray.png',
    email: 'info@hertzengineering.com',
  },
];

// Animation variants for the team grid
const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const profileCardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Main Leadership Page Component
const Leadership = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-40" style={{ backgroundImage: 'url(https://hertzengineering.com/wp-content/uploads/2018/12/page-title-2.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <motion.div
          className="container mx-auto px-6 relative text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">Hertz Leadership</h1>
        </motion.div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black mb-4">
              <span className="text-blue-600">Our People,</span>
              <span className="text-gray-800"> Our Power</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              At <span className="font-semibold text-gray-800">Hertz Engineering Ltd</span>, our greatest asset is our people. Our team of dedicated professionals and contractors brings together a rich blend of expertise, culture, and experience to deliver innovative and dependable electrical engineering solutions across industries. We believe in fostering a workplace culture that champions leadership, integrity, and growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-black text-gray-800 mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Guided by a visionary leadership team, Hertz Engineering Limited continues to evolve and grow in a dynamic industry. Our leaders bring extensive experience from electrical engineering and related sectors, providing strategic direction and ensuring operational excellence at every level. Their diverse backgrounds and forward-thinking approach keep us at the forefront of innovation and sustainability.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Leadership Team Grid Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md overflow-hidden text-center group"
                variants={profileCardVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 font-medium mt-1 mb-4">{member.title}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-block text-gray-500 hover:text-blue-600 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;