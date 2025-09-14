import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Award, Users } from 'lucide-react';
import WhyChooseUs from './WhyChooseUs';

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
                            src="/images/my/whyChooseUs.jpg"
                            alt="Engineering Team"
                            className="w-full h-full object-center object-cover max-h-[70vh] opacity-90"
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
            <WhyChooseUs/>

            {/* Safety Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white overflow-hidden">
                <div className="grid md:grid-cols-2">
                    <div className="relative">
                        <img
                            src="/images/my/home/hero6.jpg"
                            alt="Safety First"
                            className="w-full h-full max-h-[81vh] object-cover opacity-90"
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
