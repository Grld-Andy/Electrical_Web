import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const newIndex = Math.round(slider.scrollLeft / slider.clientWidth);
      setActiveIndex(newIndex);
    };

    slider.addEventListener("scroll", handleScroll, { passive: true });
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollTo({
      left: index * slider.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative h-screen w-full">
      <div
        ref={sliderRef}
        className="h-full w-full overflow-x-scroll flex snap-x snap-mandatory scroll-smooth"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full h-full snap-center relative bg-cover bg-center"
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
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSlide(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === activeIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileHeroSlider;
