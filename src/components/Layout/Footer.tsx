import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const hideNewsletter = location.pathname === "/" || location.pathname === "/home";

  return (
    <footer className="bg-gray-100 text-gray-700 w-full py-12 px-10 sm:px-16 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* ISO Certification Info */}
          {/* <div className="col-span-1 md:col-span-2">
            <h6 className="text-lg font-semibold mb-4 text-gray-700">ISO Certified</h6>
            <div className="flex items-start gap-4 flex-col">
              <div className="w-full">
                <img
                  src="https://hertzengineering.com/wp-content/uploads/iso.png"
                  alt="ISO Certification"
                  className="w-full object-contain"
                />
              </div>
              <div className="text-gray-600 text-sm leading-relaxed">
                <p>ISO 9001:2015 - Quality Management System</p>
                <p>ISO 14001:2015 - Environmental Management System</p>
                <p>ISO 45001:2018 - Occupational Health & Safety Management System</p>
              </div>
            </div>
          </div> */}

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-gray-700">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Projects", "Services", "About Us"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(/us/g, "")}`}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter (hidden on "/" and "/home") */}
        {!hideNewsletter && (
          <div className="mb-12">
            <h3 className="text-lg font-bold mb-4 text-gray-700">Subscribe for Newsletter</h3>
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
        )}

        {/* Divider */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-4 justify-center mb-4 md:mb-0">
            {["Privacy Policy", "Terms & Conditions", "Disclaimer", "Support", "FAQ"].map(
              (item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                >
                  {item}
                </Link>
              )
            )}
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
          Copyright {new Date().getFullYear()} © All Right Reserved Design by Lymfz
          Engineering Limited
        </div>
      </div>
    </footer>
  );
};

export default Footer;
