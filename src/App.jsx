import { Routes, Route } from "react-router-dom";

import Features from "./pages/Features";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Company from "./pages/Company";
import Demonstration from "./pages/Demonstration";

function App() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/demonstration" element={<Demonstration />} />
          <Route path="/company" element={<Company />} />
        </Routes>
      </div>
    </div>
  );
}


export default App;
