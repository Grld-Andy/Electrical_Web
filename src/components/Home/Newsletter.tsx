import React from 'react';
import { motion } from 'framer-motion';
import { MailCheck } from 'lucide-react'; // Using a more modern icon from lucide-react

const Newsletter = () => {
    // Inline style for the background image with an overlay
    const sectionStyle = {
        backgroundImage: `linear-gradient(rgba(10, 37, 64, 0.85), rgba(10, 37, 64, 0.85)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2940&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <motion.section 
            style={sectionStyle}
            className="text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
        >
            <div className="container mx-auto px-6 py-16 md:py-24">
                <div className="max-w-3xl mx-auto text-center">
                    
                    <motion.div 
                        className="flex justify-center mb-6"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ type: 'spring', stiffness: 120, damping: 15, delay: 0.2 }}
                    >
                        <div className="bg-blue-500/10 p-4 rounded-full border border-blue-400/30">
                           <MailCheck className="text-blue-400 h-8 w-8" />
                        </div>
                    </motion.div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Stay Ahead with Hertz Engineering
                    </h2>
                    <p className="text-gray-300 md:text-lg mb-8">
                        Subscribe to our newsletter for the latest industry insights, project updates, and company news.
                    </p>
                    
                    <form className="w-full max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
                        <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className="w-full px-5 py-3 text-gray-800 bg-white/90 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow shadow-sm"
                            aria-label="Email Address"
                        />
                        <button 
                            type="submit" 
                            className="bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </motion.section>
    );
};

export default Newsletter;