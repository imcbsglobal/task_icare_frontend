import React from "react";
import { features, otherFeatures } from "../data/featuresData.js";

const Features = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-orange-50 to-orange-300 flex flex-col justify-start items-center py-8">
      
      {/* Header */}
      <div className="text-center mb-4 mt-2 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Key Features</h1>
        {/* <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-indigo-500 mx-auto mb-4 rounded-full" /> */}
      </div>

      <p className="mb-6 text-3xl font-bold text-orange-600  tracking-wide">CORE FEATURES</p>

      {/* Core Functions Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-12 px-4 max-w-6xl">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div 
              key={idx} 
              className="group p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 text-center transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-orange-100 hover:to-white cursor-pointer"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 text-base mb-2 group-hover:text-orange-700 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {feature.desc}
              </p>
            </div>
          );
        })}
      </div>

      <p className="mb-8 mt-8 text-3xl font-bold text-orange-600 tracking-wide">ADVANCED FEATURES</p>

      {/* Other Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-5xl px-4">
        {otherFeatures.map((item, idx) => (
          <div 
            key={idx} 
            className="group p-6 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl shadow-lg text-white transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:from-orange-500 hover:to-orange-600 cursor-pointer"
          >
            <h4 className="font-bold text-xl mb-3 group-hover:scale-105 transition-transform duration-300">
              {item.title}
            </h4>
            <p className="text-orange-100 text-base leading-relaxed group-hover:text-white transition-colors duration-300">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;