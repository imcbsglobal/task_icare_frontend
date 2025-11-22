import { Link } from "react-router-dom";
import { Smile, Users, Award, Presentation } from "lucide-react";
import SEO from "../components/SEO";

const Gallery = () => {
  const galleryCategories = [
    {
      title: "Smiles",
      description: "Capturing moments of joy and happiness",
      icon: <Smile className="w-12 h-12" />,
      path: "/gallery/smiles",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    },
    {
      title: "Our Clients",
      description: "Our valued partners and collaborators",
      icon: <Users className="w-12 h-12" />,
      path: "/gallery/clients",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
    },
    {
      title: "Ceremonial",
      description: "Special events and celebrations",
      icon: <Award className="w-12 h-12" />,
      path: "/gallery/ceremonial",
      color: "bg-gradient-to-br from-purple-400 to-pink-500",
    },
    {
      title: "Demo Upload",
      description: "Upload demonstration videos and images",
      icon: <Presentation className="w-12 h-12" />,
      path: "/gallery/demoupload",
      color: "bg-gradient-to-br from-indigo-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white p-8">
      <SEO
        title="Gallery - Our Moments & Achievements"
        description="Explore our gallery of memorable moments, client testimonials, ceremonial events, and achievements at IMC Business Solutions and TASK iCare."
        keywords="IMC gallery, TASK iCare gallery, client testimonials, company events, achievements, ceremonial moments"
        url="https://icare.imcbs.com/gallery"
      />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Our Gallery
          </h1>
          <p className="text-lg text-gray-600">
            Explore our collection of memorable moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryCategories.map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`${category.color} p-8 h-64 flex flex-col items-center justify-center text-white`}
              >
                <div className="transform group-hover:scale-110 transition-transform duration-300 mb-4">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                <p className="text-center text-white/90 text-sm px-2">
                  {category.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;