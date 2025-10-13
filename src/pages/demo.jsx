import React from "react";
import { features, otherFeatures } from "../data/featuresData.js";
const Features = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-50 via-orange-50 to-orange-300 flex flex-col justify-start items-center ">
      {" "}
      {/* Header */}{" "}
      <div className="text-center mb-6 mt-3 ml-3 py-4">
        {" "}
        <h1 className="text-2xl font-bold text-gray-800 ">Key Features</h1>{" "}
        <div className="w-14 bg-gradient-to-r from-orange-500 to-indigo-500 mx-auto mb-1 rounded-full" />{" "}
        <p className="text-gray-600 text-sm max-w-md mx-auto px-2">
          {" "}
          Comprehensive business management tools for modern enterprises{" "}
        </p>{" "}
      </div>{" "}
      <p className="mb-2 text-2xl font-bold text-orange-500">
        ADVANCED FEATURES
      </p>{" "}
      {/* Core Functions Grid */}{" "}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 mb-6 px-1 ">
        {" "}
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className={`p-3 rounded-md shadow text-center  transition-all duration-300 hover:bg-orange-100`}
            >
              {" "}
              <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center bg-white rounded-full shadow">
                {" "}
                <Icon className={`w-5 h-5 `} />{" "}
              </div>{" "}
              <h3 className="font-semibold text-gray-800 text-sm">
                {feature.title}
              </h3>{" "}
              <p className="text-gray-600 text-xs">{feature.desc}</p>{" "}
            </div>
          );
        })}{" "}
      </div>{" "}
      <p className="mb-5 mt-5 text-2xl font-bold text-orange-500">
        OTHER FEATURES
      </p>{" "}
      {/* Other Features */}{" "}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
        {" "}
        {otherFeatures.map((item, idx) => (
          <div key={idx} className="p-3 bg-orange rounded-md shadow">
            {" "}
            <h4 className="font-semibold text-gray-800">{item.title}</h4>{" "}
            <p className="text-gray-600 text-sm">{item.value}</p>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};
export default Features;
