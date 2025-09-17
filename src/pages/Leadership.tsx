import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';

interface LeadershipTeamInterface {
  name: string
  title: string
  imageUrl: string
  email: string
}

const leadershipTeam : Array<LeadershipTeamInterface> = [
  {
    name: 'Joseph Blankson',
    title: 'Director',
    imageUrl: 'data:image/jpeg;base64,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',
    email: '',
  },
  {
    name: 'Edwin Moses',
    title: 'Electrical (Solar Systems) Engineer',
    imageUrl: 'data:image/jpeg;base64,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',
    email: '',
  },
  {
    name: 'Eng. Augustus Moses PMP',
    title: 'Operations Manager',
    imageUrl: '/images/my/brafii.jpg',
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
      <PageHeader text="Leadership" image='/images/my/navbar/leadership.jpg' />

      {/* Combined Summary Section */}
      <div className="container mx-auto px-10 md:px-30 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-12 shadow-lg"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-black">Led by Expertise and Integrity</span>
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
        
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          The Minds Powering Progress
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          With expertise and vision, our leadership drives quality and innovation.
        </p>
      </div>
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
