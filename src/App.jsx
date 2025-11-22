import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/sidebar";
import StructuredData from "./components/StructuredData";
import Home from "./pages/Home";
import Options from "./pages/Options";
import Demonstration from "./pages/Demonstration";
import Company from "./pages/Company";
import ContactPage from "./pages/ContactPage";
import VisitorPopup from "./components/VisitorPopup";
import Dashboard from "./pages/Dashboard";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ import
import Smiles from "./pages/Smiles";
import Gallery from "./pages/Gallery";
import OurClients from "./pages/OurClients";
import Ceremonial from "./pages/Ceremonial";
import DemoUpload from "./pages/DemoUpload";
import Showcase from "./pages/Showcase";

function App() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-white">
      <StructuredData />
      <div className="w-64 bg-gray-100">
        <Sidebar />
      </div>

      <div className="flex-1 overflow-y-auto relative">
        {/* ✅ Popup only on home page */}
        {location.pathname === "/" && <VisitorPopup />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/options" element={<Options />} />
          <Route path="/demonstration" element={<Demonstration />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/smiles" element={<Smiles />} />
          <Route path="/gallery/clients" element={<OurClients />} />
          <Route path="/gallery/ceremonial" element={<Ceremonial />} />
           <Route path="/showcase" element={<Showcase />} />
           <Route path="/gallery/demoupload" element={<DemoUpload />} />

          {/* ✅ Only admin can open dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
