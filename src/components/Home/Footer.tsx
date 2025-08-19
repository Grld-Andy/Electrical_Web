import React from 'react';
import { FaMapMarkerAlt, FaLinkedinIn, FaFacebookF, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: About */}
                    <div>
                        <img src="https://hertzengineering.com/wp-content/uploads/hertz-logo-2.png" alt="Hertz Logo" className="h-12 mb-4" />
                        <p className="text-sm leading-loose">
                            The company has earned a reputation for excellence and professionalism for continuously striving to meet and even exceed standards which set the climate for a sustainable business relationship with its clients.
                        </p>
                    </div>

                    {/* Column 2: ISO Certified */}
                    <div>
                        <h4 className="font-bold text-white text-lg mb-4 font-heading">ISO Certified</h4>
                        <img src="https://hertzengineering.com/wp-content/uploads/iso.png" alt="ISO Certified" className="h-20 mb-4" />
                        <ul className="text-sm space-y-2">
                            <li>ISO 9001:2015: Quality Management System</li>
                            <li>ISO 14001:2015: Environmental Management System</li>
                            <li>ISO 45001:2018: Occupational Health & Safety</li>
                        </ul>
                    </div>

                    {/* Column 3: Contacts */}
                    <div>
                        <h4 className="font-bold text-white text-lg mb-4 font-heading">Contacts</h4>
                        <p className="mb-4 text-sm">Phc-079-0175,Essipon St.Benedict Junction. Takoradi. Ghana</p>
                        <p className="mb-6 text-sm">(+233) 0205 115 425</p>
                        <div className="flex space-x-4 text-xl">
                            <a href="#" className="hover:text-hertz-blue transition-colors"><FaMapMarkerAlt /></a>
                            <a href="#" className="hover:text-hertz-blue transition-colors"><FaLinkedinIn /></a>
                            <a href="#" className="hover:text-hertz-blue transition-colors"><FaFacebookF /></a>
                            <a href="#" className="hover:text-hertz-blue transition-colors"><FaEnvelope /></a>
                        </div>
                    </div>

                     {/* Column 4: Quick Links */}
                     <div>
                        <h4 className="font-bold text-white text-lg mb-4 font-heading">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Products & Services</a></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-black text-gray-500 py-4">
                <div className="container mx-auto px-6 text-center text-sm">
                    <p>Copyright © Lymfz Engineering Ltd 2025</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;