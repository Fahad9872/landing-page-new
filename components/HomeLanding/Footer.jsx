import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="py-10 bg-[#111111] text-[#525252] text-sm px-4 border-t border-[#525252]/30">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="mb-4 md:mb-0">
          <span className="text-2xl text-[#E1E1E1] font-bold">
            Your Brand Logo
          </span>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-[#BB86FC] transition duration-200">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="hover:text-[#BB86FC] transition duration-200">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-[#BB86FC] transition duration-200">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center border-t border-[#525252]/30 pt-4">
        <p className="text-center mb-2 sm:mb-0">
          &copy; {new Date().getFullYear()} Your Brand Name. All rights
          reserved.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-[#BB86FC]">
            Privacy Policy
          </a>
          <span className="text-[#525252]">|</span>
          <a href="#" className="hover:text-[#BB86FC]">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
