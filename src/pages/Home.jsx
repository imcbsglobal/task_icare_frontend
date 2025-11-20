import React from "react";
import taskLogo from "../assets/TASK11.png";
import heroImage from "../assets/Homeimg.webp";

// img logos
import shadeLogo from "../assets/shade.png";
import magnetLogo from "../assets/magnet.png";
import vtaskLogo from "../assets/vtask.png";
import dineLogo from "../assets/dine.png";
import starstayLogo from "../assets/starstay.png";
import auricLogo from "../assets/auric.png";
import flamesLogo from "../assets/flames.png";
import rentalLogo from "../assets/rental.png";
import circleLogo from "../assets/I-care.png";

const Home = () => {
  // Apps data
  const apps = [
    { name: "TASK", logo: taskLogo, desc: "Powerful inventory management.", size: "w-36 h-22" },
    { name: "SHADE", logo: shadeLogo, desc: "Advanced hospital management.", size: "w-36 h-28" },
    { name: "MAGNET", logo: magnetLogo, desc: "Smart institution management.", size: "w-20 h-12" },
    { name: "VTASK", logo: vtaskLogo, desc: "Simplify pharmacy operations.", size: "w-36 h-22" },
    { name: "FLAMES", logo: flamesLogo, desc: "Gas cylinder tracking made simple.", size: "w-36 h-22" },
    { name: "RENTAL", logo: rentalLogo, desc: "Wedding dress & jewelry rental.", size: "w-36 h-22" },
    { name: "AURIC", logo: auricLogo, desc: "Jewelry management system.", size: "w-36 h-28" },
    { name: "DINE", logo: dineLogo, desc: "Restaurant billing system.", size: "w-12 h-14" },
    { name: "STARSTAY", logo: starstayLogo, desc: "Hotel management software.", size: "w-26 h-18" },
  ];

  // Services data
  const services = [
    { title: "Website & Web Application", desc: "Custom websites and scalable web apps for every business need.", icon: "💻" },
    { title: "Mobile App Development", desc: "User-friendly, high-performance apps for Android and iOS.", icon: "📱" },
    { title: "Digital Marketing", desc: "Boost your online presence and grow your brand visibility.", icon: "🚀" },
  ];

  // Websites data
  const websites = [
    { name: "Neuvive", url: "https://neuvive.in/" },
    { name: "K B Steels", url: "https://kbsteels.com/" },
    { name: "Lakkidi Mist Resort", url: "https://lakkidimist.com/" },
    { name: "ABSY IT Solutions", url: "https://absyitsolutions.com/" },
    { name: "HyperCity Hypermarket", url: "https://hypercityhypermarket.com/" },
    { name: "IMC Portfolio", url: "https://portfolio.imcbs.com/websites" },
    { name: "Ayy Radiamonds", url: "https://ayyradiamonds.com/" },
    { name: "Abhaya Ayur", url: "https://abhayaayur.com/" },
    { name: "Alo Physio", url: "https://www.alophysio.com/" },
    { name: "Panuk Online", url: "https://panukonline.com/" },
    { name: "Bilton Hotel", url: "https://biltonhotel.com/" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-[Outfit] text-gray-800 bg-white">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 bg-white">
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img src={heroImage} alt="Business Woman" className="w-[420px] md:w-[500px] rounded-xl shadow-lg object-cover" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
            <img src={taskLogo} alt="TASK Logo" className="w-[120px] md:w-[140px] h-auto drop-shadow-md" />
            <img src={circleLogo} alt="TASK Logo" className="w-[100px] md:w-[110px] h-auto drop-shadow-md" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-orange-600">TASK : iCare Software</h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-6 max-w-3xl text-center md:text-left mx-auto">
            Transform your business operations with <b>TASK : iCare</b> — an all-in-one inventory and task management system. Gain complete control over sales, purchases, and stock with real-time accuracy. Boost efficiency and growth through intelligent automation and streamlined workflows.
          </p>
        </div>
      </section>

      {/* 1. Simplify Business with TASK : iCare */}
      <section className="py-16 px-6 text-center bg-orange-50">
        <h2 className="text-3xl font-semibold text-orange-600 mb-10">Simplify Business with TASK : iCare</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {["Inventory Control", "Business Reports", "GST & Barcode"].map((title, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-md font-semibold text-orange-600">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Key Features of TASK : iCare */}
      <section className="relative py-16 px-6 md:px-16 bg-gradient-to-br from-orange-50 via-white to-orange-100 text-center overflow-hidden font-[Outfit]">
        <div className="absolute top-10 left-10 w-24 h-24 bg-orange-200 blur-3xl opacity-30 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-orange-300 blur-3xl opacity-30 rounded-full"></div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-orange-600 mb-8 drop-shadow-sm tracking-wide">
          Key Features of <span className="text-gray-800">TASK : iCare</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
          {[
            { icon: "🧾", title: "Sales & Billing", desc: "Manage invoices, receipts, and quotations with real-time accuracy." },
            { icon: "📦", title: "Purchase Management", desc: "Track supplier bills, payments, and purchase returns efficiently." },
            { icon: "📊", title: "Stock & Inventory", desc: "Get live stock updates, re-order alerts, and warehouse tracking." },
            { icon: "🏷️", title: "GST & Barcode Support", desc: "Auto GST calculation and barcode-enabled product management." },
            { icon: "🔐", title: "User Roles & Permissions", desc: "Define user access levels and secure your operations." },
            { icon: "📈", title: "Reports & Analytics", desc: "Generate sales, purchase, and profit reports instantly." },
            { icon: "🏢", title: "Multi-Branch Access", desc: "Monitor performance across different locations in one dashboard." },
            { icon: "💰", title: "Payment & Collection", desc: "Track expenses, collections, and outstanding dues effortlessly." },
            { icon: "📱", title: "Mobile Access (TASK Pro)", desc: "Work on the go with mobile app integration for faster decisions." },
          ].map((item, index) => (
            <div key={index} className="group bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-md border border-orange-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-400 text-center">
              <div className="text-3xl mb-2 transform group-hover:scale-125 transition-transform duration-400">{item.icon}</div>
              <h3 className="text-base font-semibold text-orange-600 mb-1 group-hover:text-orange-700">{item.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed group-hover:text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Innovative Software by IMC Business Solutions */}
      <section className="text-center py-10">
        <h2 className="text-4xl font-bold text-orange-600 mb-4 drop-shadow-sm">
          Innovative Software by IMC Business Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10 px-6">
          {apps.map((app, index) => (
            <div key={index} className="flex flex-col items-center justify-between bg-white shadow-md rounded-xl p-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-[120px]">
              <img src={app.logo} alt={app.name} className={`${app.size} object-contain mb-1`} />
              <h3 className="font-bold text-sm text-orange-600 uppercase tracking-wide text-center">{app.name}</h3>
              <p className="text-xs text-gray-600 mt-1 max-w-[150px] text-center">{app.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Our Digital Solutions */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100 text-center relative overflow-hidden">
        <h2 className="text-4xl font-bold text-orange-600 mb-4 drop-shadow-sm">Our Digital Solutions</h2>
        <p className="text-base text-gray-700 max-w-3xl mx-auto mb-10">
          We deliver end-to-end digital solutions — from custom web apps to brand marketing — helping businesses grow faster and smarter.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 hover:-translate-y-1 flex flex-col items-center text-center min-h-[160px]">
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-lg font-semibold text-orange-600 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Footer including Developed Websites */}
      <footer className="bg-gray-100 text-gray-800 text-center py-12 mt-auto border-t border-orange-200">
        <div className="py-10 border-t border-orange-200">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Developed Websites</h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto mb-10">
            Explore some of the premium websites designed and developed by <b>IMC Business Solutions</b>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
            {websites.map((site, index) => (
              <a
                key={index}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col justify-center items-center text-center"
              >
                <h3 className="text-lg font-semibold text-orange-600 mb-2">{site.name}</h3>
                <p className="text-gray-600 text-sm">Visit Website ↗</p>
              </a>
            ))}
          </div>
        </div>

        <a
          href="https://imcbs.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block bg-gradient-to-r from-orange-600 to-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-md text-sm"
        >
          Visit → www.imcbs.com
        </a>
        <br /><br />
        <p className="text-sm font-medium text-gray-600">
          © 2025 TASK : iCare | Developed by IMC Business Solutions LLP
        </p>
      </footer>
    </div>
  );
};

export default Home;
