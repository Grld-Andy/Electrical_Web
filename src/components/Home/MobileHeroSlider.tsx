import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/images/my/home/hero1.jpg",
    title: ["Lymfz Engineering Limited(EPCM)", "Reliable Electrical Solutions"],
    buttonText: "About Us",
    buttonLink: "/about",
  },
  {
    image: "/images/my/home/hero10.jpg",
    title: [
      "Electrical Infrastructure",
      "Feasibility Studies, Engineering, Procurement, Construction & Consultancy",
    ],
    buttonText: "Our Services",
    buttonLink: "/services",
  },
  {
    image: "/images/my/home/hero4.jpg",
    title: [
      "High, Medium Voltage Transmission and",
      "LV (Low Voltage) Distribution Network Substation Design & Installation",
    ],
    buttonText: "Our Services",
    buttonLink: "/services",
  },
  {
    image: "/images/my/home/hero5.jpg",
    title: ["Power System ", "Modelling & Studies"],
    buttonText: "Our Services",
    buttonLink: "/services",
  },
  {
    image: "/images/my/home/whyChooseUs.jpg",
    title: ["Power System ", "Protection Services"],
    buttonText: "Our Services",
    buttonLink: "/services",
  },
  {
    image: "/images/my/home/scada.jpg",
    title: ["Electrical Instrumentation", "SCADA & Automation"],
    buttonText: "Our Services",
    buttonLink: "/services",
  },
  {
    image: "/images/my/home/heromep.jpg",
    title: ["Mechanical, Electrical", " & Plumbing (MEP)"],
    buttonText: "Our Services",
    buttonLink: "/services",
  },
  {
    image: "/images/my/home/homeSolar.jpg",
    title: ["Renewable &", "Sustainable Solutions"],
    buttonText: "Our Services",
    buttonLink: "/services",
  },
  {
    image: "/images/my/home/hero8a.jpg",
    title: ["Networking &", "Security Systems", "including Electric Fencing"],
    buttonText: "Our Services",
    buttonLink: "/services",
  },
  {
    image: "/images/my/home/heroo9.jpg",
    title: ["Electrical Products", "and Equipment Supplies"],
    buttonText: "Our Services",
    buttonLink: "/services",
  },
  {
    image: "/images/my/home/heroC.jpg",
    title: ["Get in Touch with Us", "Consultation, Support & Enquiries"],
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

const MobileHeroSlider = () => {
  const swiperRef = useRef<any>(null);

  // Custom effect: manually advance every 5s
  useEffect(() => {
    if (!swiperRef.current) return;

    const interval = setInterval(() => {
      swiperRef.current.slideNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full">
      {/* ✅ Custom styles for pagination bullets */}
      <style>{`
        .swiper-pagination {
          bottom: 20px !important; /* move dots up from the bottom */
        }
        .swiper-pagination-bullet {
          width: 14px;
          height: 14px;
          background: rgba(255,255,255,0.6);
          opacity: 1;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #2563eb; /* Tailwind blue-600 */
          width: 20px;
          height: 20px;
        }
      `}</style>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{
          clickable: true,
        }}
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 flex flex-col justify-center h-full container mx-auto px-6 text-white">
                <div className="max-w-lg md:max-w-3xl">
                  {slide.title.map((line, j) => (
                    <h1
                      key={j}
                      className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans w-[70%] md:w-full leading-tight tracking-tight"
                    >
                      {line}
                    </h1>
                  ))}
                  {slide.buttonText && (
                    <Link
                      to={slide.buttonLink}
                      className="inline-block mt-8 bg-blue-600 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      {slide.buttonText}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileHeroSlider;
