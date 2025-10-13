import React from "react";
import task from "../assets/TASK11.png";

const Home = () => {
  return (
    <div className="flex-1 bg-orange min-h-screen p-6 lg:p-12 flex flex-col gap-16">
      
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left - Text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-orange-600 mb-4 leading-tight">
            Experience Task : Icare Software
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Transform your business with{" "}
            <span className="text-orange-500 font-semibold">TASK : Icare</span> – 
            the smart inventory and task management solution.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition-all shadow-md">
            Get Started
          </button>
        </div>

        {/* Right - Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img 
            src={task} 
            alt="Task Icare Illustration" 
            className="h-64 w-auto object-contain" 
          />
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-6">
          Why TASK Icare Software?
        </h2>
        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          TASK empowers <span className="text-orange-500 font-semibold">small and medium businesses </span> 
          with efficient task and inventory management. Streamline daily operations, 
          track stock in real-time, and optimize resources with ease.
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-medium">
            Inventory at your fingertips
          </span>
          <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-medium">
            Simplify tasks, maximize growth
          </span>
          <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-medium">
            Business made smarter
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
