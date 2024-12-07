import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-[#862949] px-4 py-8 md:px-16 lg:px-28"
      style={{ backgroundColor: "#862949" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Us */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg text-white font-bold mb-4">About Us</h2>
          <p className="text-white text-sm">
            We are a team dedicated to providing help to PCOS patients.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg text-white font-bold mb-4">Quick Links</h2>
          <ul className="text-sm">
            <li>
              <a href="#" className="hover:underline text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/AboutPCOS" className="hover:underline text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg text-white font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 flex items-center space-x-1">
              <FaFacebook size={25} />
              <span className="text-sm text-white">Facebook</span>
            </a>
            <a href="#" className="text-pink-500 flex items-center space-x-1">
              <FaInstagram size={25} />
              <span className="text-sm text-white">Instagram</span>
            </a>
            <a href="#" className="text-blue-400 flex items-center space-x-1">
              <FaTwitter size={25} />
              <span className="text-sm text-white">Twitter</span>
            </a>
            <a href="#" className="text-gray-300 flex items-center space-x-1">
              <FaTiktok size={25} />
              <span className="text-sm text-white">TikTok</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 text-white mt-6 pt-4 text-center">
        <p className="text-sm">
          &copy; 2024 Arogya PCOS Detection. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
