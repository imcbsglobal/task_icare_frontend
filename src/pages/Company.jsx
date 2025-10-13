import React from "react";

const Company = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden h-screen">
      {/* Decorative orange shapes */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-orange-500 rounded-full opacity-20 mix-blend-screen"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full opacity-20 mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Column */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-orange-300 font-semibold tracking-wider uppercase mb-2">
            IMC Business Solutions
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400 mb-4">
            Welcome to IMC Business Solutions
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-200 font-semibold mb-6">
            Crafting Intelligent Platforms for Tomorrow
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
            IMC Business Solutions, established in 2009, delivers
            enterprise-grade IT services and custom software solutions. We
            specialize in scalable web, mobile, and integrated technology
            platforms designed to support business growth and empower
            tomorrow’s enterprise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl flex items-center gap-2">
              Contact Us <span className="text-xl">→</span>
            </button>
            <a
              href="#services"
              className="text-gray-200 font-medium border-b-2 border-transparent hover:border-gray-400 transition"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Visual Column */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="w-72 h-44 bg-gray-800 border border-gray-700 rounded-xl shadow-xl p-4 flex flex-col justify-center items-start">
            <div className="text-gray-300 font-semibold mb-2">
              Enterprise-grade Platforms
            </div>
            <div className="flex gap-2">
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                Web
              </span>
              <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded-full">
                Mobile
              </span>
              <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded-full">
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
