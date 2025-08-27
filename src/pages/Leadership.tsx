import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';

const leadershipTeam = [
  {
    name: 'Bra. Fii',
    title: 'Lead Electrician',
    imageUrl: '/images/team1.webp',
    email: 'Bra.Fii@lymfz.com',
  },
];

// Animation variants
const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const profileCardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Leadership = () => {
  return (
    <div className="bg-gray-50">
      <PageHeader text="Leadership" />

      {/* Combined Summary Section */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-12 shadow-lg"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-blue-600">Led by Expertise and Integrity</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At <span className="font-semibold text-gray-800">Lymfz Engineering Limited</span>, our strength lies in the people who power our vision. 
            With a culture rooted in integrity, collaboration, and innovation, our leadership team blends deep expertise 
            across engineering, technology, and business. Together, they provide the strategic direction that fuels 
            sustainable growth, operational excellence, and forward-thinking solutions, keeping us at the forefront 
            of progress and impact.
          </p>
        </motion.div>
      </div>

      {/* Leadership Team Profiles */}
      <div className="bg-white py-24 relative overflow-hidden">
        {/* Decorative background accents */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center group relative overflow-hidden"
                variants={profileCardVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 250 }}
              >
                {/* Portrait */}
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-200 shadow-md mb-6">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <h3 className="text-2xl font-bold text-gray-800 relative">
                  {member.name}
                  <span className="block h-1 w-12 bg-blue-600 mx-auto mt-1 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </h3>
                <p className="text-blue-600 font-medium mt-2">{member.title}</p>

                {/* Email Button */}
                <a
                  href={`mailto:${member.email}`}
                  className="mt-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-500 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail size={22} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
