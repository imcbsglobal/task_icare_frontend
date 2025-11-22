import React from "react";
import SEO from "../components/SEO";
import { Options as optionsData, otherOptions } from "../data/OptionsData.js";

const Options = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-orange-50 to-orange-300 flex flex-col justify-start items-center py-8">
      <SEO
        title="Features & Core Highlights - TASK iCare"
        description="Explore TASK iCare's comprehensive business management features: Sales & Billing, Purchase Management, Stock & Inventory, GST Support, User Roles, Reports & Analytics, Multi-Branch Access, Payment Tracking, and Mobile Access."
        keywords="inventory features, sales billing, purchase management, stock tracking, GST support, business reports, multi-branch software, payment tracking, user permissions, TASK iCare features"
        url="https://icare.imcbs.com/options"
      />
      {/* Header */}
      <div className="text-center mb-6 mt-2 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Our Core Highlights</h1>
        <div className="w-24 h-[3px] bg-gradient-to-r from-orange-500 to-pink-500 mx-auto mb-2 rounded-full"></div>
        <p className="text-gray-600 text-sm max-w-md mx-auto">
          Comprehensive business management tools for modern enterprises.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-12">
        {optionsData.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="group p-4 bg-white/80 backdrop-blur-md rounded-xl shadow-md border border-white/30 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-orange-100 hover:to-white cursor-pointer"
            >
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1 group-hover:text-orange-700 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Divider */}
      <div className="w-20 h-[3px] bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mb-6"></div>

      {/* Advanced Features */}
      <p className="mb-6 mt-2 text-2xl font-bold text-orange-600 tracking-wide">
        ADVANCED FEATURES
      </p>

      <div className="flex flex-wrap justify-center items-center gap-6 text-center max-w-5xl px-4">
        {otherOptions.map((item, idx) => (
          <div
            key={idx}
            className="group w-44 p-4 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl shadow-lg text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:from-orange-500 hover:to-orange-600 cursor-pointer"
          >
            <h4 className="font-bold text-base mb-2 group-hover:scale-105 transition-transform duration-300">
              {item.title}
            </h4>
            <p className="text-orange-100 text-xs leading-relaxed group-hover:text-white transition-colors duration-300">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
