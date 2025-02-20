import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#4A4238] text-white py-8 px-20 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row justify-between">
          {/* Social Links */}
          <div className="flex gap-6 mb-6 md:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-400"
            >
              <i className="fab fa-facebook"></i> {/* Facebook Icon */}
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-400"
            >
              <i className="fab fa-twitter"></i> {/* Twitter Icon */}
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-400"
            >
              <i className="fab fa-instagram"></i> {/* Instagram Icon */}
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-400"
            >
              <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm">
            <p>&copy; 2025 HotelJet Solutions. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
