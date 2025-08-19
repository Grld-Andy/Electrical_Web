import MemberCard from "@/components/ui/MemberCard";
import teamMembers from "@/constants/teamMembers";
import React from "react";
import { FaListAlt, FaClock, FaWallet } from "react-icons/fa"; // Icons for features

const AboutUs: React.FC = () => {
  // Local public image paths
  const aboutImage = "/about-image.webp";

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/aboutbanner.jpg')",
        }}
      >
        <div className="bg-black/50 bg-opacity-0 w-full h-full flex items-center justify-center">
          <h1 className="text-5xl font-extrabold tracking-wide text-shadow-lg">
            ABOUT US
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={aboutImage}
              alt="About Electro"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="prose lg:prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to Lymfz
            </h2>
            <p className="text-gray-600 leading-relaxed">
              With over 8 years of dedicated experience in the electrical
              engineering industry, Lymfz has established itself as a trusted
              leader in providing innovative and reliable solutions. Our
              commitment to excellence and safety is at the core of everything
              we do.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of certified professionals is equipped with the latest
              technology and expertise to handle projects of any scale. We
              pride ourselves on delivering top-notch services that meet the
              highest industry standards, ensuring the satisfaction and safety
              of our valued clients.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                Unwavering commitment to safety and quality standards.
              </li>
              <li>
                Over 8 years of proven experience in the electrical industry.
              </li>
              <li>
                Providing cutting-edge and reliable services to all our customers.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Choose Us
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We are committed to providing the best services in the industry.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 text-white mx-auto mb-4">
                <FaListAlt size={30} />
              </div>
              <h3 className="text-xl font-bold mb-2">Free Estimation</h3>
              <p className="text-gray-600">
                We provide a comprehensive and transparent estimation for your
                projects at no cost.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 text-white mx-auto mb-4">
                <FaClock size={30} />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">
                Our dedicated team is available around the clock to address
                your electrical emergencies.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 text-white mx-auto mb-4">
                <FaWallet size={30} />
              </div>
              <h3 className="text-xl font-bold mb-2">Affordable Prices</h3>
              <p className="text-gray-600">
                We offer competitive and fair pricing without compromising on
                the quality of our work.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Professional Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Meet the experts who are dedicated to delivering excellence in
              every project.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {teamMembers.map((member, index) => (
              <MemberCard member={member} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


 