import React from "react";
import { FaInstagram, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="flex  justify-between  items-end ">
        <div>
          <span className="text-xs font-normal">© 2024 Omotola elatuyi</span>
        </div>
        <ul className="flex ">
          <li>
            <a href="#" className="block px-3 text-[#1AABAC]  ">
              Send me an email
            </a>
          </li>
          <li className="border-s-2 border-[#4A4A4A]">
            <a href="#" className="block px-3 text-[#1AABAC] ">
              <FaTwitterSquare size={24} color="#1AABAC" />
            </a>
          </li>
          <li>
            <a href="#" className="block px-3 text-[#1AABAC] font-bold text-s">
              <FaLinkedin size={24} color="#1AABAC" />
            </a>
          </li>
          <li>
            <a href="#" className="block px-3 text-[#1AABAC] font-bold text-s">
              <FaInstagram size={24} color="#1AABAC" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
