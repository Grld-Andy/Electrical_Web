import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h1 className="text-3xl font-bold text-blue-800">Lymfz</h1>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Electrical Company</h2>
            <p className="text-gray-600">
              Professional electrical services that illuminate your world with safety, efficiency, and innovation. Your trusted partner for all electrical needs.
            </p>
          </div>

          <div></div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-800">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Projects', 'Services', 'About Us'].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Articles & News */}
          {/* <div>
            <h3 className="text-lg font-bold mb-4 text-blue-800">Articles & News</h3>
            <div className="space-y-4">
              <article>
                <h4 className="font-semibold text-gray-700">Current Conversations: Insights on Electrical System</h4>
                <p className="text-sm text-gray-500">March 13, 2023 - No Comments</p>
              </article>
              <article>
                <h4 className="font-semibold text-gray-700">SparkWire: Your Source for Electrical News</h4>
                <p className="text-sm text-gray-500">March 13, 2023 - No Comments</p>
              </article>
            </div>
          </div> */}
        </div>

        {/* Newsletter */}
        <div className="mb-12">
          <h3 className="text-lg font-bold mb-4 text-blue-800">Subscribe for Newsletter</h3>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="flex-grow px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-4 justify-center mb-4 md:mb-0">
            {['Privacy Policy', 'Terms & Conditions', 'Disclaimer', 'Support', 'FAQ'].map((item) => (
              <Link key={item} to="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                {item}
              </Link>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <Link to="#" className="text-gray-600 hover:text-blue-600">
              <FaFacebook size={18} />
            </Link>
            <Link to="#" className="text-gray-600 hover:text-blue-600">
              <FaTwitter size={18} />
            </Link>
            <Link to="#" className="text-gray-600 hover:text-blue-600">
              <FaLinkedin size={18} />
            </Link>
            <Link to="#" className="text-gray-600 hover:text-blue-600">
              <FaInstagram size={18} />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Copyright {new Date().getFullYear()} © All Right Reserved Design by Lymfz Engineering Ltd
        </div>
      </div>
    </footer>
  );
};

export default Footer;