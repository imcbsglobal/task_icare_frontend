import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Star,
  Building2,
  Menu,
  X,
  PlayCircle,
  Users,
} from "lucide-react";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/", icon: <Home className="w-5 h-5" /> },
    { name: "Features", path: "/features", icon: <Star className="w-5 h-5" /> },
    {
      name: "Demonstration",
      path: "/demonstration",
      icon: <PlayCircle className="w-5 h-5" />,
    },
    {
      name: "Testimonials",
      path: "/testimonials",
      icon: <Users className="w-5 h-5" />,
    },
    {
      name: "Company",
      path: "/company",
      icon: <Building2 className="w-5 h-5" />,
    },
  ];

  return (
    <>
      {/* Hamburger for Mobile */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-orange-500 text-white rounded-md lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-white border-r border-gray-200 w-64 h-screen p-6 flex flex-col gap-8 shadow-md
          fixed top-0 left-0 transform transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0`}
      >
        {/* Brand */}
        <div className="flex flex-col items-center gap-3">
          <img src={logo} alt="IMC Logo" className="w-16 h-16 object-contain" />
          <h1 className="text-2xl font-bold text-orange-600 text-center">
            IMC Business Solutions
          </h1>
        </div>

        {/* Gap between brand and menu */}
        <div className="mt-6"></div>

        {/* Menu */}
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                pathname === item.path
                  ? "bg-orange-500 text-white shadow"
                  : "text-gray-700 hover:bg-orange-100 hover:text-orange-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
