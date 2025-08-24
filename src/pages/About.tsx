import MemberCard from "@/components/ui/MemberCard";
import PageHeader from "@/components/ui/PageHeader";
import teamMembers from "@/constants/teamMembers";
import React from "react";

const AboutUs: React.FC = () => {
  const aboutImage = "/about-image.webp";

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PageHeader text={"ABOUT US"} />

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src="./images/about.jpg"
              alt="About Lymfz Engineering"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="prose lg:prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Building Reliable Energy Solutions
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lymfz Engineering Ltd specializes in delivering safe, efficient
              and innovative electrical solutions. Our team of skilled engineers
              and technicians combines technical expertise with modern tools to
              execute projects on time and to the highest standards.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From residential and commercial installations to complex
              industrial works, we provide tailored services that keep systems
              reliable, sustainable, and future-ready.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Our Services
          </h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-disc list-inside text-gray-700">
            <li>High, Medium & Low Voltage Transmission Works</li>
            <li>Mechanical, Electrical & Plumbing (MEP)</li>
            <li>Electrical Engineering Design & Consultancy</li>
            <li>Supply of Electrical Materials & Equipment</li>
            <li>Instrumentation & Automation</li>
            <li>Solar Power Systems</li>
            <li>Fiber Optic Installations</li>
            <li>Electric Fencing</li>
            <li>Data & Telecommunication Networks</li>
            <li>Air Conditioning & Refrigeration</li>
          </ul>
        </div>
      </div>

      {/* Projects Section */}
      {/* <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Recent Projects
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              Supply & installation of solar submersible pump
            </li>
            <li>
              Delivery of 11Kv Schneider RMU (3 sets)
            </li>
            <li>
              Supply of 33kv 630A Auto recloser (2 sets)
            </li>
            <li>
              500m of 33kv 3-core x 35mm armoured copper cable
            </li>
            <li>
              600m of 33kv 3-core x 35mm armoured copper cable & materials
            </li>
          </ul>
        </div>
      </div> */}

      {/* Products Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            What We Supply
          </h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-disc list-inside text-gray-700">
            <li>Lighting & Electrical Fittings</li>
            <li>High & Low Voltage Cables (up to 33kv)</li>
            <li>Instrumentation & Control Cables</li>
            <li>Power Protection & Surge Control Devices</li>
            <li>Distribution & Automation Equipment</li>
            <li>Transformers up to 10MVA, 33KV</li>
            <li>RMUs (11kv & 33KV up to 1000A)</li>
          </ul>
        </div>
      </div>

      {/* Safety Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Safety First
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Safety is at the heart of everything we do. Every project is
            executed under strict health, safety, and environmental protocols.
            Our engineers and technicians are trained to minimize risks and
            maintain compliance with international best practices.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Because a successful project always begins and ends with safety.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Professional Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Skilled engineers, technicians and managers dedicated to
              delivering excellence in every project.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <MemberCard member={member} key={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Remarks Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Our Commitment
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are committed to quality, reliability, and long-term partnership.
            By combining expertise with innovation, Lymfz Engineering Ltd
            delivers solutions that clients can depend on for years to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
