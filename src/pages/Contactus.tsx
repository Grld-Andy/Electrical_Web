import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

// Reusable component for contact information cards
interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}
const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ icon, title, children }) => {
  return (
    <motion.div 
      className="flex items-start gap-4"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      <div className="bg-gray-200 p-3 rounded-full text-gray-700">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg text-gray-800">{title}</h3>
        <div className="text-gray-600 mt-1">{children}</div>
      </div>
    </motion.div>
  );
};

const ContactPage = () => {
  // Stagger animation for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };
  
  // Animation for form fields
  const formItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <main>
      {/* --- Hero Section --- */}
      <PageHeader text={'CONTACT US'} image='/images/my/navbar/contact.jpg' />

      {/* --- Main Content Section --- */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Left Column: Contact Details */}
            <motion.div 
              className="lg:col-span-2 space-y-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <ContactInfoCard icon={<MapPin />} title="Our Office">
                <p>5 Good Street, Amasaman</p>
                <p>Accra, Ghana</p>
              </ContactInfoCard>
              
              <ContactInfoCard icon={<Phone />} title="Phone Number">
                <p>(+233) 249 811 204</p>
              </ContactInfoCard>
                <ContactInfoCard icon={<Mail className="text-gray-600" />} title="Email Addresses">
                  <p>info@lymfzengineeringltd.com</p>
                  <p>info.sa@lymfzengineeringltd.com</p>
                </ContactInfoCard>
                <ContactInfoCard icon={<Globe className="text-gray-600" />} title="Social Media">
                  <div className="flex items-center gap-4">
                      <a href="https://www.linkedin.com/in/lymfz-engineering-ltd-4a6853384?trk=contact-info" className="text-gray-600 hover:text-blue-600"><FaLinkedinIn /></a>
                      <a href="#" className="text-gray-600 hover:text-blue-600"><FaFacebookF /></a>
                  </div>
                </ContactInfoCard>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div 
              className="lg:col-span-3 bg-gray-50 p-8 rounded-xl shadow-lg"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Have a question or a project in mind? We'd love to hear from you.</p>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <motion.input 
                    variants={formItemVariants} 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500" 
                  />
                  <motion.input 
                    variants={formItemVariants} 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500" 
                  />
                </div>
                <motion.input 
                  variants={formItemVariants} 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500" 
                />
                <motion.textarea 
                  variants={formItemVariants} 
                  placeholder="Your Message" 
                  rows={6} 
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                ></motion.textarea>
                <motion.button 
                  variants={formItemVariants}
                  type="submit" 
                  className="w-full bg-gray-800 text-white font-bold py-3 px-6 rounded-md hover:bg-black transition-colors duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

            {/* --- Map Section --- */}
            <section>
                <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7059767!2d-0.3019511!3d5.7061869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfa10a9e1dd191%3A0x18e638ad3d22cd41!2s5+Good+Street,+Amasaman!5e0!3m2!1sen!2sgh!4v1694772800000!5m2!1sen!2sgh"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Jireem Catering and Services Location"
/>


            </section>
        </main>
    );
};

export default ContactPage;
