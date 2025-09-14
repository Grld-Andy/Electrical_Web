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
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-10 md:p-14 shadow-lg border border-blue-200">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">
                        Established Excellence Since 2020
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        With a dedicated team of engineers, technicians, and project managers, we
                        have successfully delivered projects for top-tier clients across Ghana and
                        beyond.
                        </p>
                        <div className="grid grid-cols-3 justify-center gap-x-6 gap-y-3 text-blue-600 font-semibold text-lg">
                            <span>GIZ Technologies</span>
                            <span>AngloGold Ashanti</span>
                            <span>First Atlantic Bank</span>
                            <span>Ghana Manganese Company</span>
                            <span>Tullow Oil</span>
                            <span>Solarshop Ghana</span>
                        </div>
                        <p className="text-gray-800 font-medium mt-8 text-lg">
                        Committed to <span className="underline text-black">quality</span>,{" "}
                        <span className="underline text-black">reliability</span>, and{" "}
                        <span className="underline text-black">timely execution</span>.
                        </p>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
