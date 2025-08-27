import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { FaBuilding, FaAward, FaCogs, FaTools, FaShoppingBag, FaFilePdf, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// 1. UPDATED TYPE DEFINITIONS
interface CardData {
  title: string;
  highlight: string;
  description: string;
  buttonText: string;
  href: string;
  icon: React.ReactNode;
  hoverColor: string; // New property for unique hover colors
}

interface CardProps {
  card: CardData;
  isLarge: boolean;
}

// 2. ENRICHED DATA with hover colors
// 2. ENRICHED DATA with hover colors (UPDATED CONTENT FOR Lymfz)
const cardData: CardData[] = [
    { 
      title: "Company", 
      highlight: "Profile", 
      description: "Learn more about Lymfz Engineering Ltd, our mission, vision, and track record of delivering quality electrical solutions since 2020.",
      buttonText: "View Profile", 
      href: "#",
      icon: <FaBuilding />,
      hoverColor: "rgba(0, 111, 255, 0.2)"
    },
  { 
    title: "Company", 
    highlight: "Brochure", 
    description: "Download our detailed company brochure to explore our services, projects, and solutions in one comprehensive PDF.",
    buttonText: "Download Brochure", 
    href: "./files/Brochure.pdf",
    icon: <FaFilePdf />,
    hoverColor: "rgba(220, 38, 38, 0.2)"
  }
];


const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// 4. BACKGROUND PATTERN (No changes needed)
const BackgroundPattern = () => (
    <svg className="absolute inset-0 h-full w-full stroke-slate-200/80 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]" aria-hidden="true">
      <defs><pattern id="light-pattern" width="60" height="60" x="50%" y="-1" patternUnits="userSpaceOnUse"><path d="M.5 200V.5H200" fill="none" /></pattern></defs>
      <rect width="100%" height="100%" strokeWidth="0" fill="url(#light-pattern)" />
    </svg>
);

// 5. THE NEW CARD COMPONENT with dynamic shadow and unique hover colors
const Card: React.FC<CardProps> = ({ card, isLarge }) => {
    const ref = useRef<HTMLDivElement>(null);

    // Track mouse position with smoothing
    const mouseX = useMotionValue(Infinity);
    const mouseY = useMotionValue(Infinity);

    // Dynamic drop shadow transform
    const shadowX = useTransform(mouseX, (val) => val === Infinity ? 0 : (val - (ref.current?.offsetWidth ?? 0) / 2) / 20);
    const shadowY = useTransform(mouseY, (val) => val === Infinity ? 0 : (val - (ref.current?.offsetHeight ?? 0) / 2) / 20);

    const filter = useTransform(
      [shadowX, shadowY],
      (values: number[]) => `drop-shadow(${-values[0]}px ${-values[1]}px 15px rgba(0, 0, 0, 0.1))`
    );

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            className={`relative p-8 rounded-2xl bg-white border border-slate-200 
                        flex flex-col cursor-pointer justify-between group
                        ${isLarge ? 'md:col-span-2 lg:col-span-2' : ''}`}
            onMouseMove={(e) => {
                const { left, top } = e.currentTarget.getBoundingClientRect();
                mouseX.set(e.clientX - left);
                mouseY.set(e.clientY - top);
            }}
            onMouseLeave={() => {
                mouseX.set(Infinity);
                mouseY.set(Infinity);
            }}
            style={{ filter }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
            {/* Unique color "Aurora Border" effect */}
            <AnimatePresence>
                <motion.div 
                    className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(600px circle at 50% 50%, ${card.hoverColor}, transparent 80%)`
                    }}
                />
            </AnimatePresence>

            {/* Card Content */}
            <div className="relative z-10">
                <div className="text-black text-4xl mb-4">{card.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 leading-tight">
                    {card.title}{' '}
                    <span className="text-hertz-blue">{card.highlight}</span>
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{card.description}</p>
            </div>

            <div className="relative z-10 mt-6">
                <Link to={card.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-slate-800 group/link">
                    <span>{card.buttonText}</span>
                    <FaArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1 text-hertz-blue" />
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-hertz-blue scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
            </div>
        </motion.div>
    );
};

// 6. MAIN COMPONENT
const InfoCards: React.FC = () => {
    return (
        <section className="relative py-20 md:py-28 bg-slate-50 overflow-hidden">
            <BackgroundPattern />
            <div className="relative container mx-auto px-6 z-10">
                 <motion.div 
                    className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900">Engineering Excellence, Defined.</h2>
                    <p className="mt-4 text-lg text-slate-600">
                        From foundational profiles to cutting-edge solutions, explore the core pillars that define our commitment to quality and innovation.
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    {cardData.map((card, index) => (
                        <Card key={index} card={card} isLarge={index == 0 || index == 3 || index == 4} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default InfoCards;