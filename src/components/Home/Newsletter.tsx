import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelopeOpenText } from 'react-icons/fa';

const Newsletter = () => {
    return (
        <motion.section 
            className="bg-gray-800 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
        >
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <FaEnvelopeOpenText className="text-5xl text-hertz-blue" />
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold font-heading">Sign Up For Newsletters</h3>
                        <p className="text-gray-400">Don’t miss Hertz latest news and events.</p>
                    </div>
                    <form className="w-full max-w-md flex flex-col sm:flex-row gap-2 mt-4 md:mt-0">
                        <input type="email" placeholder="Email" className="w-full px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-hertz-blue" />
                        <button type="submit" className="bg-hertz-dark-blue text-white font-bold py-3 px-6 hover:bg-hertz-blue transition-colors">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </motion.section>
    );
};

export default Newsletter;