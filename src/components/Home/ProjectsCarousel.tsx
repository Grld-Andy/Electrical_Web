import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Expanded and structured project data for 6 items
const projects = [
    {
        status: "2023",
        category: "Supply",
        title: "Supply of 3 Sets of 11kV Schneider RMUs",
        client: "AngloGold Ashanti Obuasi (via Maalotech Engineering)",
        image: "./images/my/projects/SchneiderRMU.png",
    },
    {
        status: "2023",
        category: "Supply",
        title: "Supply of 2 Sets of 33kV 630A Auto Reclosers",
        client: "AngloGold Ashanti Iduapriem (via Maalotech Engineering)",
        image: "./images/my/projects/autoRecloser.png",
    },
    {
        status: "2024",
        category: "Supply",
        title: "Supply of 33kV 3-Core x 35mm Armoured Copper Cable (500m)",
        client: "AngloGold Ashanti Iduapriem (via Maalotech Engineering)",
        image: "./images/my/projects/copper.png",
    },
    {
        status: "2024",
        category: "Supply",
        title:
        "Supply of 33kV 3-Core x 35mm Armoured Copper Cable (600m) + Electrical Materials",
        client: "AngloGold Ashanti Iduapriem (via Maalotech Engineering)",
        image: "./images/my/projects/copperCable.png",
    },
    {
        status: "2025",
        category: "Installation",
        title: "Supply & Installation of Solar Submersible Pump",
        client: "GIZ",
        image:
        "./images/my/projects/solar.png",
    },
];


const ModernProjectsCarousel = () => {
    return (
        <motion.section 
            className="py-20 md:py-28 bg-white" // Clean white background
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
                        Projects Showcase
                    </h2>
                    <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600">
                        Explore a selection of our projects that showcase our dedication to quality, safety, and innovation.
                    </p>
                </div>
                
                <div className="relative">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="group relative block h-96 w-full overflow-hidden rounded-xl shadow-lg">
                                    {/* Background Image with Hover Zoom Effect */}
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    />
                                    
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                    {/* Text Content */}
                                    <div className="relative h-full flex flex-col justify-end p-6 text-white">
                                        <div className="flex items-center justify-between">
                                           <span className="text-xs font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                                {project.category}
                                           </span>
                                           {project.status && (
                                                <span className="text-xs font-semibold uppercase tracking-wider bg-amber-400 text-white px-3 py-1 rounded-full">
                                                    {project.status}
                                                </span>
                                           )}
                                        </div>
                                        <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
                                        <p className="mt-1 text-sm text-gray-300">{project.client}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                    {/* Custom Navigation Arrows (Positioned outside the swiper container) */}
                    <button className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 -left-4 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-md hover:bg-gray-100 transition-colors">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 -right-4 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-md hover:bg-gray-100 transition-colors">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </motion.section>
    );
};

export default ModernProjectsCarousel;