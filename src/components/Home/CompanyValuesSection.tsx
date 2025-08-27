import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Award, Users, ArrowRight } from 'lucide-react';

const CountUp = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        const timer = setTimeout(() => setCount(end), 300);
        return () => clearTimeout(timer);
    }, [end]);
    
    return <span>{count}{suffix}</span>;
};

const CreativeCompanyValues = () => {
    return (
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50">
            {/* Hero Split */}
            <div className="relative overflow-hidden">
                <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 grid md:grid-cols-2 min-h-[70vh]">
                    {/* Left Side */}
                    <div className="flex items-center p-8 md:p-16 text-white relative z-10">
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-2 bg-white/20 rounded-full border border-white/30 backdrop-blur">
                                <span className="text-white text-sm font-medium">Since 2020</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                Lymfz
                                <span className="block text-blue-200">
                                    Engineering
                                </span>
                            </h1>
                            <p className="text-xl text-blue-100 leading-relaxed">
                                Ghanaian-owned company delivering cutting-edge electrical solutions across High, Medium, and Low Voltage systems
                            </p>
                        </div>
                    </div>
                    
                    {/* Right Side */}
                    <div className="relative">
                        <img
                            src="/images/team1.webp" 
                            alt="Engineering Team"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Why Choose Us - Card Style */}
            <div className="py-20 px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-gray-900">
                            Why Choose <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text">Lymfz Engineering</span>?
                        </h2>
                        <p className="text-gray-700 text-lg">Delivering excellence across multiple engineering disciplines</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {[
                            {
                                icon: Zap,
                                title: "Complete Solutions",
                                desc: "High, Medium & Low Voltage Transmission, MEP, Instrumentation, Automation, Solar Power Systems, Fiber Optics, and Data Networks",
                                gradient: "from-gray-300 to-gray-500"
                            },
                            {
                                icon: Award,
                                title: "Proven Track Record",
                                desc: "Successfully delivered projects for GIZ Technologies, AngloGold Ashanti, First Atlantic Bank, Ghana Manganese Company, and Solarshop Ghana",
                                gradient: "from-gray-400 to-gray-600"
                            },
                            {
                                icon: Users,
                                title: "Dedicated Team",
                                desc: "Engineers, technicians, and project managers committed to quality, reliability, and timely execution",
                                gradient: "from-gray-500 to-gray-700"
                            }
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-blue-200"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Info Section */}
                    <div className="bg-gradient-to-r from-blue-50 to-white rounded-3xl p-8 md:p-12 border border-blue-100">
                        <div className="max-w-4xl mx-auto text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Established Excellence Since 2020
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                With a dedicated team of engineers, technicians, and project managers, we have 
                                successfully delivered projects for clients including GIZ Technologies, AngloGold Ashanti, 
                                First Atlantic Bank, Ghana Manganese Company, and Solarshop Ghana. 
                                We are committed to quality, reliability, and timely execution.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Safety Section - Light Mode Split */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white overflow-hidden">
                <div className="grid md:grid-cols-2">
                    <div className="relative">
                        <img 
                            src="/images/team2.webp"
                            alt="Safety First"
                            className="w-full h-full object-cover opacity-90"
                        />
                    </div>
                    
                    <div className="p-12 flex items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Safety Is Our
                                    <span className="block text-blue-200">Utmost Priority</span>
                                </h2>
                                <div className="text-blue-100 text-lg leading-relaxed space-y-4">
                                    <p>
                                        At Lymfz Engineering Limited, safety is embedded in our culture. We strictly adhere 
                                        to international health, safety, and environmental (HSE) standards across all projects.
                                    </p>
                                    <p>
                                        From design to implementation, our team identifies risks early, applies proven 
                                        control measures, and ensures compliance with both client and regulatory requirements.
                                    </p>
                                    <p className="text-white font-medium">
                                        Because we believe every successful project begins and ends with safety.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeCompanyValues;