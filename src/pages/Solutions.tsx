import { motion } from 'framer-motion';
import PageHeader from '@/components/ui/PageHeader';


const solutions = [
    {
    imgSrc: "https://hertzengineering.com/wp-content/uploads/pole.jpg",
    title: "Electrical Infrastructure: Feasibility Studies, Engineering, Procurement, Construction & Consultancy",
    href: "https://hertzengineering.com/feasibilitystudiesengineeringprocurement/",
  },
  {
    imgSrc: "https://hertzengineering.com/wp-content/uploads/pole.jpg",
    title: "High & Medium Voltage Transmission & Distribution (T&D) Network and Substation Design",
    href: "https://hertzengineering.com/highmediumvoltagetdnetworksubstationdesign/",
  },
  {
    imgSrc: "https://hertzengineering.com/wp-content/uploads/LV.jpg",
    title: "LV (Low Voltage) Design & Electrical Installation",
    href: "https://hertzengineering.com/lvlowvoltagedesignelectricalinstallation/",
  },
  {
    imgSrc: "https://hertzengineering.com/wp-content/uploads/pole.jpg",
    title: "Power System Modelling & Studies",
    href: "https://hertzengineering.com/powersystemmodellingstudies/",
  },
  {
    imgSrc: "https://hertzengineering.com/wp-content/uploads/pole.jpg",
    title: "Power System Protection Services",
    href: "https://hertzengineering.com/powersystemprotectionservices/",
  },
  {
    imgSrc: "https://hertzengineering.com/wp-content/uploads/pole.jpg",
    title: "Electrical Instrumentation, SCADA & Automation",
    href: "https://hertzengineering.com/electricalinstrumentationscadaautomation/",
  },
  {
    imgSrc: "https://hertzengineering.com/wp-content/uploads/elec-infras.jpg",
    title: "Electrical Infrastructure Commissioning Services",
    href: "https://hertzengineering.com/solution-electricalinfrastructurecommissioningservices/",
  },
  {
    imgSrc: "https://hertzengineering.com/wp-content/uploads/pole.jpg",
    title: "Critical Electrical Products, Parts & Consultancy Services",
    href: "https://hertzengineering.com/critical-electrical-products/",
  },
  {
    imgSrc: "https://hertzengineering.com/wp-content/uploads/panelbusilding.jpg",
    title: "ECI&C and MCC Panel Manufacturing & Integration",
    href: "https://hertzengineering.com/ecic-and-mcc-panel-manufacturing/",
  },
];

// --- Framer Motion Variants ---
const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    },
  },
};



const Solutions = () => {
  return (
    <div className="bg-white">
      <PageHeader text="OUR SOLUTIONS" />

      {/* Introduction Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 text-gray-600 text-lg leading-relaxed">
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="float-left text-7xl font-bold font-serif mr-3 mt-1 px-4 py-1 bg-gray-800 text-white">O</span>
              ur portfolio encompasses a diverse range of projects, including those in the Power transmission and distribution, mining, renewable energy, manufacturing, petrochemical, and oil and gas industries.
            </motion.p>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <span className="float-left text-7xl font-bold font-serif mr-3 mt-1 px-4 py-1 bg-blue-600 text-white">W</span>
              e are actively involved in connecting the latest renewable energy projects to the national grid in Ghana and West Africa, and our team combines both traditional and cutting-edge techniques to tackle the unique challenges of the energy sector.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Redesigned Solutions Grid Section */}
      <section className="relative bg-gray-50 py-24 overflow-hidden">
        {/* --- Background Design Layer --- */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Fading Grid Lines */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
              backgroundSize: '4rem 4rem', // 64px grid
              maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 75%)',
            }}
          ></div>
          {/* Abstract Shapes (Glows) */}
          <div className="absolute -top-1/4 -left-1/4 lg:w-1/2 lg:h-1/2 w-full h-full bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
          <div className="absolute -bottom-1/4 -right-1/4 lg:w-1/2 lg:h-1/2 w-full h-full bg-gray-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        </div>

        {/* --- Content Layer --- */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {solutions.map((solution) => (
              <motion.a
                key={solution.title}
                href={solution.href}
                className="group bg-white/70 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-200/80"
                variants={cardVariants}
                whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300 } }}
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={solution.imgSrc}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-gray-900 font-bold text-lg leading-tight flex-1">
                    {solution.title}
                  </h3>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;