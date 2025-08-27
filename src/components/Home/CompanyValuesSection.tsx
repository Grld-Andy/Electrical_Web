import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Award, Users } from 'lucide-react';

const CountUp = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setCount(end), 300);
        return () => clearTimeout(timer);
    }, [end]);

    return <span>{count}{suffix}</span>;
};

const CompanyValues = () => {
    return (
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50">
            
            {/* Hero Section with Overlay */}
            <div className="relative overflow-hidden">
                <div className="relative max-h-[70vh]">
                    
                    {/* Right Side with Overlay */}
                    <div>
                        <img
                            src="/images/team1.webp"
                            alt="Engineering Team"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center p-8">
                            <div className="max-w-xl text-white space-y-6">
                                <h2 className="text-4xl md:text-5xl font-bold">
                                    Why Choose <span className="text-blue-400">Lymfz Engineering</span>?
                                </h2>
                                <p className="text-lg md:text-xl text-white">
                                    Complete solutions, proven trust, and a team that delivers with precision and reliability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us - Card Style */}
            <div className="py-20 px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {[
                            {
                                icon: Zap,
                                title: "Complete, End-to-End Solutions",
                                desc: "We handle everything from power systems to automation and networks, giving you a single trusted partner instead of juggling multiple contractors.",
                                gradient: "from-gray-300 to-gray-500"
                            },
                            {
                                icon: Award,
                                title: "Proven Industry Trust",
                                desc: "Leading companies choose us because we consistently deliver results that meet global standards.",
                                gradient: "from-gray-400 to-gray-600"
                            },
                            {
                                icon: Users,
                                title: "A Team That Delivers",
                                desc: "Our engineers and project managers are committed to reliability and precision, ensuring every project is completed on time and to the highest quality.",
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

            {/* Safety Section */}
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
                                        At Lymfz Engineering Limited, safety is not just a requirement, it is a core value.
                                        We are committed to maintaining the highest standards of health, safety, and
                                        environmental protection across all our operations.
                                    </p>
                                    <p>
                                        From project planning to execution, every step is guided by strict protocols
                                        and international best practices. Our team proactively identifies risks, applies
                                        effective control measures, and ensures full compliance with regulatory standards.
                                    </p>
                                    <p className="text-white font-medium">
                                        Because at Lymfz Engineering Ltd, we believe that every successful project begins
                                        and ends with safety.
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

export default CompanyValues;
