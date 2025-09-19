import { motion } from 'framer-motion';
import Clients from './Clients';

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
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full"
                            />

                            <div className="absolute inset-0 bg-black/70"></div>

                            <div className="relative p-6 text-white">
                                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-200 text-md leading-relaxed opacity-100">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <Clients/>
            </div>
        </div>
    );
};

export default WhyChooseUs;
