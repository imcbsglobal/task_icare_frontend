import React from "react";

const Demonstration = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start px-6 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-orange-600">Product Demonstration</h2>
        <p className="text-gray-600 mt-2 text-lg">
          A quick look at how our solutions work in action
        </p>
      </div>

      {/* Videos */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* Video 1 */}
        <div className="flex-1 aspect-video rounded-lg overflow-hidden shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/RuTB36WBWdU"
            title="Demonstration Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 2 */}
        <div className="flex-1 aspect-video rounded-lg overflow-hidden shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/h0O8XkEZHyk"
            title="Demonstration Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Demonstration;
