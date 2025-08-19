import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Linkedin, Facebook } from 'lucide-react';

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
            <div className="bg-blue-100 p-3 rounded-full">
                {icon}
            </div>
            <div>
                <h3 className="font-bold text-lg text-[#003366]">{title}</h3>
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
            <section 
                className="h-80 bg-cover bg-center text-white flex items-center justify-center"
                style={{ backgroundImage: `linear-gradient(rgba(0, 40, 85, 0.7), rgba(0, 40, 85, 0.7)), url('https://images.unsplash.com/photo-1581092916376-222c2a483a91?q=80&w=2940&auto=format&fit=crop')` }}
            >
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold">Get in Touch</h1>
                    <p className="mt-4 text-lg text-gray-200">We're here to help and answer any question you might have.</p>
                </motion.div>
            </section>

            {/* --- Main Content Section --- */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-5 gap-12">
                        
                        {/* Left Column: Contact Details */}
                        <motion.div 
                            className="lg:col-span-2 space-y-10"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <ContactInfoCard icon={<MapPin className="text-blue-600" />} title="Our Offices">
                                <p>PHC-079-0175, Essipon, Takoradi, Ghana</p>
                                <p>20 Spur Loop, Freetown, Sierra Leone</p>
                                <p>1 Eileen St, Bryanston, Johannesburg, SA</p>
                            </ContactInfoCard>
                            
                            <ContactInfoCard icon={<Phone className="text-blue-600" />} title="Phone Numbers">
                                <p>(+233) 0248 520 141</p>
                                <p>(+233) 0205 115 425</p>
                            </ContactInfoCard>

                             <ContactInfoCard icon={<Mail className="text-blue-600" />} title="Email Addresses">
                                <p>info@hertzengineering.com</p>
                                <p>info.sa@hertzengineering.com</p>
                            </ContactInfoCard>
                            
                             <ContactInfoCard icon={<Globe className="text-blue-600" />} title="Social Media">
                                <div className="flex items-center gap-4">
                                    <a href="#" className="text-gray-600 hover:text-blue-600"><Linkedin /></a>
                                    <a href="#" className="text-gray-600 hover:text-blue-600"><Facebook /></a>
                                </div>
                            </ContactInfoCard>
                        </motion.div>

                        {/* Right Column: Contact Form */}
                        <motion.div 
                            className="lg:col-span-3 bg-gray-50 p-8 rounded-xl shadow-lg"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h2 className="text-3xl font-bold text-[#003366] mb-2">Send Us a Message</h2>
                            <p className="text-gray-600 mb-8">Have a question or a project in mind? We'd love to hear from you.</p>
                            
                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <motion.input variants={formItemVariants} type="text" placeholder="Your Name" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    <motion.input variants={formItemVariants} type="email" placeholder="Your Email" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <motion.input variants={formItemVariants} type="text" placeholder="Subject" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <motion.textarea variants={formItemVariants} placeholder="Your Message" rows={6} className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></motion.textarea>
                                <motion.button 
                                    variants={formItemVariants}
                                    type="submit" 
                                    className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 shadow-lg"
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.7118337775533!2d-1.6961962887968507!3d4.887648940428863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc3e7210b377c85%3A0xe5469950a3251a2d!2sHertz%20Engineering%20Ltd!5e0!3m2!1sen!2sgh!4v1700000000000" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hertz Engineering Location"
                ></iframe>
            </section>
        </main>
    );
};

export default ContactPage;