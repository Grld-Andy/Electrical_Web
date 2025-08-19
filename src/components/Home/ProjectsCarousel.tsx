import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';

const projects = [
    { image: "https://hertzengineering.com/wp-content/uploads/short2025.png", alt: "Project 1" },
    { image: "https://hertzengineering.com/wp-content/uploads/161.png", alt: "Project 2" },
    { image: "https://hertzengineering.com/wp-content/uploads/400v.png", alt: "Project 3" },
    { image: "https://hertzengineering.com/wp-content/uploads/34.5kv.png", alt: "Project 4" },
    { image: "https://hertzengineering.com/wp-content/uploads/design.png", alt: "Project 5" },
    { image: "https://hertzengineering.com/wp-content/uploads/PROVISION.png", alt: "Project 6" },
];

const ProjectsCarousel = () => {
    return (
        <motion.section 
            className="py-16 md:py-24 bg-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
        >
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold font-heading text-left mb-8 text-gray-800">Our Projects</h2>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="!pb-10"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <div className="overflow-hidden shadow-lg">
                                <img src={project.image} alt={project.alt} className="w-full h-auto object-cover" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </motion.section>
    );
};

export default ProjectsCarousel;