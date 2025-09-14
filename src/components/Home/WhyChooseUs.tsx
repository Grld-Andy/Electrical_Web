import { motion } from 'framer-motion';

const whyChooseUsData = [
    {
        image: "./images/my/endToEnd.jpg",
        title: "Complete, End-to-End Solutions",
        desc: "We handle everything from power systems to automation and networks, giving you a single trusted partner instead of juggling multiple contractors.",
    },
    {
        image: "./images/my/provenIndustry.jpg",
        title: "Proven Industry Trust",
        desc: "Leading companies choose us because we consistently deliver results that meet global standards.",
    },
    {
        image: "./images/my/teamDelivers.jpg",
        title: "A Team That Delivers",
        desc: "Our engineers and project managers are committed to reliability and precision, ensuring every project is completed on time and to the highest quality.",
    }
];

const WhyChooseUs = () => {
    return (
        <div className="py-20 px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {whyChooseUsData.map((item, i) => (
                        <motion.div
                            key={i}
                            className="group relative overflow-hidden shadow-md border border-gray-200 rounded-md min-h-[330px] flex flex-col justify-end"
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                        >
                            {/* Background Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Overlay for readability */}
                            <div className="absolute inset-0 bg-black/70"></div>

                            {/* Text Content */}
                            <div className="relative p-6 text-white">
                                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-200 text-md leading-relaxed opacity-100">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info Section */}
                <div className="bg-white rounded-md p-8 md:p-12 border border-gray-200">
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
    );
};

export default WhyChooseUs;
