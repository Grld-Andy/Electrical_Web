import React, { useState, useEffect } from 'react';
import { FaBolt, FaHome, FaIndustry, FaLightbulb, FaProjectDiagram, FaCarBattery, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaTools, FaShieldAlt } from 'react-icons/fa';

// Mock data since we don't have the actual constants files
const tinyCard = [
  {
    icon: <FaHome className="text-2xl" />,
    title: "Residential Wiring",
    description: "Complete home electrical solutions for modern living."
  },
  {
    icon: <FaIndustry className="text-2xl" />,
    title: "Commercial Services",
    description: "Professional electrical work for businesses and offices."
  },
  {
    icon: <FaLightbulb className="text-2xl" />,
    title: "Smart Home Solutions",
    description: "Upgrade to intelligent lighting and automation systems."
  }
];

const services = [
  {
    icon: <FaBolt className="text-2xl" />,
    title: "Electrical Installation",
    description: "Professional installation of electrical systems and components."
  },
  {
    icon: <FaTools className="text-2xl" />,
    title: "Electrical Repair",
    description: "Quick and reliable repair services for all electrical issues."
  },
  {
    icon: <FaShieldAlt className="text-2xl" />,
    title: "Safety Inspections",
    description: "Comprehensive electrical safety inspections and certifications."
  },
  {
    icon: <FaCarBattery className="text-2xl" />,
    title: "Panel Upgrades",
    description: "Modern electrical panel installations and upgrades."
  },
  {
    icon: <FaLightbulb className="text-2xl" />,
    title: "LED Solutions",
    description: "Energy-efficient LED lighting installations and retrofits."
  },
  {
    icon: <FaProjectDiagram className="text-2xl" />,
    title: "Project Planning",
    description: "Complete electrical project design and management services."
  }
];

const teamMembers = [
  {
    name: "Mike Johnson",
    role: "Senior Electrician",
    bio: "20+ years of electrical expertise",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Sarah Wilson",
    role: "Project Manager",
    bio: "Coordinating excellence in every project",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "David Chen",
    role: "Master Electrician",
    bio: "Specialized in commercial installations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Lisa Rodriguez",
    role: "Safety Inspector",
    bio: "Ensuring compliance and safety standards",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
  }
];

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    window.addEventListener('scroll', handleScroll);
    setIsVisible(true); // Initial animation trigger

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      <style>{`
        @keyframes electric-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slideInUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInScale {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-electric-pulse { animation: electric-pulse 2s ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-slide-in-up { animation: slideInUp 0.6s ease-out forwards; }
        .animate-fade-in-scale { animation: fadeInScale 0.6s ease-out forwards; }
        .shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 2s infinite;
        }
        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.1);
        }
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #1e40af);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Hero Section with Enhanced Animations */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-white animate-electric-pulse"></div>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white animate-electric-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-white animate-electric-pulse" style={{animationDelay: '1s'}}></div>
            
            {/* Circuit nodes */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
            <div className="absolute top-3/4 left-2/3 w-4 h-4 bg-blue-200 rounded-full animate-pulse" style={{animationDelay: '1.3s'}}></div>
          </div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-20 right-20 w-20 h-20 border-2 border-blue-300 rotate-45 animate-float opacity-20"></div>
          <div className="absolute bottom-20 left-20 w-16 h-16 border-2 border-blue-400 animate-float opacity-30" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl">
            <div className="animate-slide-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Welcome to <span className="gradient-text">Lymfz Engineering Ltd</span>
                <div className="inline-block ml-4">
                  <FaBolt className="text-yellow-400" />
                </div>
              </h1>
            </div>
            
            <div className="animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-blue-200">
                Power Up Your Life With Our 
                <span className="block text-blue-300">Electrical Expertise</span>
              </h2>
            </div>
            
            <div className="animate-slide-in-up" style={{animationDelay: '0.4s'}}>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
                Professional electrical services that illuminate your world with safety, efficiency, and innovation. Your trusted partner for all electrical needs.
              </p>
            </div>
            
            <div className="animate-slide-in-up" style={{animationDelay: '0.6s'}}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl overflow-hidden">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="group border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center justify-center">
                    <FaProjectDiagram className="mr-2" />
                    View Projects
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced corner elements */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-blue-300 opacity-60"></div>
        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-blue-400 opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-blue-300 opacity-60"></div>
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-blue-400 opacity-40"></div>
      </section>

      {/* Enhanced Quick Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-fade-in-scale">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Solutions</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">Fast, reliable electrical services when you need them most</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tinyCard.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative z-10">
                  <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <div className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <button className="group/btn flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-all duration-300">
                    Learn more
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-2 transition-transform group-hover/btn:translate-x-1 group-hover:translate-x-2" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 overflow-hidden">
              <span className="relative z-10">View All Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="flex flex-col lg:flex-row items-center px-6 lg:px-20 py-20 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-blue-600 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-blue-500 rotate-45"></div>
        </div>

        <div className="flex-1 lg:pr-12 relative z-10">
          <div className="animate-slide-in-up">
            <span className="inline-block bg-blue-600 text-white text-sm font-bold uppercase px-4 py-2 rounded-full mb-4">
              About Us
            </span>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
              Bringing light to your home, 
              <span className="gradient-text block">one wire at a time</span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              With decades of experience illuminating homes and businesses, we pride ourselves on delivering electrical solutions that combine safety, efficiency, and innovation.
            </p>
          </div>

          <div className="space-y-4 mb-10">
            {[
              "Licensed and certified electrical professionals",
              "24/7 emergency service availability", 
              "Latest technology and safety standards"
            ].map((item, index) => (
              <div key={index} className="flex items-center group animate-slide-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FaBolt className="text-white text-sm" />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: FaProjectDiagram, title: "Professional Team", desc: "Certified experts with years of experience" },
              { icon: FaBolt, title: "Quick Response", desc: "Fast, reliable service when you need it most" }
            ].map((item, index) => (
              <div key={index} className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors duration-300">
                    <item.icon className="text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 mt-12 lg:mt-0 relative">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop"
              alt="Professional electrician at work"
              className="rounded-2xl w-full object-cover shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-200 rounded-2xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Main Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="animate-fade-in-scale">
              <h1 className="text-5xl font-bold text-blue-900 mb-6">Our Services</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
              <p className="text-2xl font-medium text-gray-800 mb-6">
                Power up your life with our electrical services!
              </p>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                From simple repairs to complex installations, we provide comprehensive electrical solutions for all your needs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-3 relative overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <div className="absolute inset-0 bg-white group-hover:bg-opacity-95 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-md">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <button className="group/btn flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-all duration-300">
                    Learn more
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-2 transition-transform group-hover/btn:translate-x-2" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Ready to power your project?</h3>
            <button className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 overflow-hidden">
              <span className="relative z-10">Contact Us Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Banner */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-20 px-6 sm:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent animate-electric-pulse"></div>
          <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent animate-electric-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-transparent via-white to-transparent animate-electric-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-scale">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Power up your life with our
              <span className="block gradient-text">electrical services!</span>
            </h1>
            
            <p className="text-xl sm:text-2xl font-medium mb-10 text-blue-100">
              Powering progress together - Electrifying your world
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white text-blue-800 hover:bg-blue-50 font-bold py-4 px-10 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center justify-center">
                  <FaBolt className="mr-2 group-hover:text-yellow-500 transition-colors duration-300" />
                  Get Started Today
                </span>
              </button>
              
              <button className="group border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105">
                Call Now: (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="animate-fade-in-scale">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Team</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
              <p className="text-2xl font-medium text-blue-600 mb-6">
                Circuit by circuit, we keep your world moving
              </p>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Meet the professionals who bring expertise, dedication, and innovation to every project.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-6 text-sm">{member.bio}</p>
                  
                  <div className="flex justify-center space-x-3">
                    {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, iconIndex) => (
                      <a 
                        key={iconIndex}
                        href="#" 
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105">
              Meet The Full Team
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="flex flex-col lg:flex-row bg-white overflow-hidden">
        <div className="flex-1 bg-gradient-to-br from-blue-900 to-blue-800 px-6 lg:px-16 py-16 text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-10 w-40 h-40 border-2 border-white rounded-full animate-float"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-white rotate-45 animate-float" style={{animationDelay: '1s'}}></div>
          </div>

          <div className="relative z-10">
            <div className="animate-slide-in-up">
              <h2 className="text-3xl font-bold mb-10 leading-tight">
                Trust in our Expertise, Experience, and Dedication
              </h2>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {[
                {
                  quote: "Outstanding service! They upgraded our entire electrical system efficiently and professionally. Highly recommended!",
                  name: "John Doe",
                  role: "Homeowner",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                },
                {
                  quote: "Reliable, knowledgeable, and always on time. Lymfz Engineering Ltd has been our go-to for all commercial projects.",
                  name: "Sarah Johnson",
                  role: "Business Owner",
                  image: "https://images.unsplash.com/photo-1494790108755-2616b612b070?w=60&h=60&fit=crop&crop=face"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className="group bg-blue-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-700/30 hover:bg-blue-700/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start mb-4">
                    <div className="text-blue-300 text-3xl mr-2">"</div>
                    <p className="italic font-medium text-blue-100 leading-relaxed">
                      {testimonial.quote}
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-blue-300 group-hover:border-white transition-colors duration-300"
                    />
                    <div>
                      <p className="text-blue-200 font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-blue-300">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 bg-gradient-to-br from-blue-700 to-blue-900 px-6 lg:px-12 py-16 text-white flex flex-col justify-center relative overflow-hidden">
          {/* Animated elements */}
          <div className="absolute top-20 right-10 w-2 h-20 bg-blue-300 animate-electric-pulse opacity-30"></div>
          <div className="absolute bottom-20 left-10 w-2 h-16 bg-blue-400 animate-electric-pulse opacity-40" style={{animationDelay: '0.5s'}}></div>

          <div className="relative z-10">
            <div className="animate-slide-in-up">
              <span className="inline-block bg-blue-600 text-white text-sm font-bold uppercase px-4 py-2 rounded-full mb-4">
                Testimonials
              </span>
              <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
              <p className="text-blue-100 mb-10 text-lg leading-relaxed">
                Don't just take our word for it. Hear from satisfied customers who trust us with their electrical needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group flex items-center space-x-3 border-2 border-white rounded-full px-6 py-3 hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105 w-fit">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
                    </svg>
                  </div>
                  <span className="font-semibold">Watch Video</span>
                </button>
                
                <button className="group text-white hover:text-blue-200 font-semibold transition-colors duration-300 flex items-center w-fit">
                  Read More Reviews
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Footer Preview Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-white animate-electric-pulse"></div>
          <div className="absolute top-2/3 left-0 right-0 h-0.5 bg-white animate-electric-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-up">
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Contact us today for a free consultation and discover how we can illuminate your world with professional electrical services.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                    <FaBolt className="text-white" />
                  </div>
                  <span className="text-lg">24/7 Emergency Service</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                    <FaShieldAlt className="text-white" />
                  </div>
                  <span className="text-lg">Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                    <FaProjectDiagram className="text-white" />
                  </div>
                  <span className="text-lg">Free Estimates</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Get Your Free Quote</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:border-blue-400 focus:outline-none transition-colors duration-300"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:border-blue-400 focus:outline-none transition-colors duration-300"
                />
                <textarea 
                  placeholder="Describe your project..." 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:border-blue-400 focus:outline-none transition-colors duration-300 resize-none"
                ></textarea>
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;