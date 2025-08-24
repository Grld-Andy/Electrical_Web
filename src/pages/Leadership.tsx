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
              At <span className="font-semibold text-gray-800">Lymfz</span>, our greatest asset is our people. 
              Our leadership brings together diverse expertise, innovation, and dedication to deliver reliable 
              and forward-thinking solutions. We foster a culture that values integrity, collaboration, and growth, 
              empowering our team to drive sustainable success across every project.
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
              Guided by a visionary leadership team, <span className="font-semibold text-gray-800">Lymfz</span> 
              continues to evolve and grow in a competitive industry. Our leaders bring extensive experience 
              across engineering, technology, and business management, providing strategic direction and 
              ensuring operational excellence at every level. Their forward-thinking approach positions us 
              at the forefront of innovation and sustainability.
            </p>
          </motion.div>
        </div>
      </div>

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
