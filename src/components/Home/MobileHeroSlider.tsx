import React, { useEffect, useRef } from "react";
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

// duplicate slides for infinite effect
const infiniteSlides = [...slides, ...slides];

const MobileHeroSlider = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let offset = 0;
    const slideWidth = track.clientWidth / infiniteSlides.length;

    const step = () => {
      offset -= 1; // speed: 1px per frame
      if (Math.abs(offset) >= slideWidth * slides.length) {
        offset = 0; // reset when first batch finishes
      }
      track.style.transform = `translateX(${offset}px)`;
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        ref={trackRef}
        className="flex h-full transition-transform duration-100 ease-linear"
        style={{ width: `${infiniteSlides.length * 100}%` }}
      >
        {infiniteSlides.map((slide, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 h-full relative bg-cover bg-center"
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
    </div>
  );
};

export default MobileHeroSlider;
