import React from "react";
import { FaListAlt, FaClock, FaWallet } from "react-icons/fa"; // Icons for features

const AboutUs: React.FC = () => {
  // Local public image paths
  const aboutImage = "/about-image.webp"; // in public folder
  const teamImages = [
    "/team1.webp", // in public folder
    "/team2.webp",
    "/team3.jpg",
    "/team4.webp",
  ];

  return (
    <div className="bg-gray-100 w-full">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-48 flex items-center justify-center"
        style={{
          backgroundImage: "url('/aboutbanner.jpg')", // from public
        }}
      >
        <h1 className="text-white text-4xl font-bold">ABOUT US</h1>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto py-4 text-gray-600 text-sm">
        Home <span className="mx-2">/</span> About
      </div>

      {/* Intro Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Image */}
        <img
          src={aboutImage}
          alt="About Electro"
          className="w-full rounded-lg shadow-lg"
        />

        {/* Right Text */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Welcome to Lymfz</h2>
          <p className="mb-4 text-gray-700">
            With over 8 years of experience in the industry, adipiscing elit.
            Tortor vel posuere viverra, metus malesuada. Dolor consequat eget
            orci, ac mattis est. Sed ipsum lorem fugiat iaculis molestie.
          </p>
          <p className="mb-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel
            posuere viverra, metus malesuada. Dolor consequat eget orci, ac
            mattis est. Sed ipsum lorem fugiat iaculis molestie.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Lorem ipsum dolor sit amet consectetur adipiscing elit.</li>
            <li>8 years experience in the electrical installation industry.</li>
            <li>Providing top-notch services to our valued customers.</li>
          </ul>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <FaListAlt className="mx-auto text-4xl text-blue-600 mb-2" />
            <h3 className="font-semibold text-lg">Free Estimation</h3>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <FaClock className="mx-auto text-4xl text-blue-600 mb-2" />
            <h3 className="font-semibold text-lg">24/7 Available</h3>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <FaWallet className="mx-auto text-4xl text-blue-600 mb-2" />
            <h3 className="font-semibold text-lg">Affordable Prices</h3>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
        <h2 className="text-2xl font-bold text-center mb-2">Our Team</h2>
        <p className="text-center text-gray-600 mb-8">
          Meet our professional team members who are ever ready and up to the
          task of assisting you
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamImages.map((member, idx) => (
            <div
              key={idx}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              <img
                src={member}
                alt={`Team member ${idx + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="font-semibold">Bra. Fii</h4>
                <p className="text-sm text-gray-500">
                  {[
                    "Electrician",
                    "Wiring Technician",
                    "Service Manager",
                    "Accountant",
                  ][idx]}
                </p>
                <p className="text-sm text-gray-500">fii@lymfz.com</p>
                <p className="text-sm text-gray-500">+233456789978</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


 