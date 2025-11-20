import React from "react";
import { Link } from "react-router-dom";

const Company = () => {
  return (
    <div
      className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100"
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-orange-400 rounded-full opacity-20 blur-3xl mix-blend-screen"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-20 blur-3xl mix-blend-screen"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Section - Text */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-orange-600 font-semibold tracking-wider uppercase mb-2">
            IMC Business Solutions
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-600 mb-4">
            {/* Welcome to{" "} */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
            Crafting Intelligent Platforms for Tomorrow</span>
          </h1>

          <h2 className="text-xl sm:text-2xl text-gray-700 font-semibold mb-6">
            {/* Crafting Intelligent Platforms for Tomorrow */}
          </h2>

          <p className="text-gray-800 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Crafting intelligent IT systems and web platforms for Tomorrow's Enterprise.
           IMC Business Solutions, established in 2009, and the best software company in Wayanad delivers enterprise-grade IT services and custom software solutions.
<br /><br />We support business growth through scalable web, mobile, and integrated technology platforms.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us
            </Link>

           <a
          href="https://imcbs.com/"
          target="_blank"
          rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">          Visit → www.imcbs.com
        </a>
          </div>
        </div>

        {/* Box Section */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="w-80 h-48 bg-white border border-orange-100 rounded-2xl shadow-xl p-6 flex flex-col justify-center items-start hover:shadow-2xl transition-all duration-300">
            <div className="text-orange-600 font-semibold mb-3 text-lg">
              Enterprise-grade Platforms
            </div>
            <div className="flex gap-3">
              <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-sm">
                Web
              </span>
              <span className="bg-yellow-400 text-white text-xs px-3 py-1 rounded-full shadow-sm">
                Mobile
              </span>
              <span className="bg-orange-600 text-white text-xs px-3 py-1 rounded-full shadow-sm">
                Integrated
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
