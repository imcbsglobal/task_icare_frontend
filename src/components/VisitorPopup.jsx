import React, { useState, useEffect } from "react";
import axios from "axios";

const VisitorPopup = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [adminData, setAdminData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isAdminLogin, setIsAdminLogin] = useState(false);

  useEffect(() => {
    // ✅ Check if admin is already logged in
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin === "true") {
      setShowPopup(false);
      return; // stop popup from showing
    }

    // ✅ Check if visitor logged in recently
    const lastLoginTime = sessionStorage.getItem("visitorLoginTime");

    if (!lastLoginTime) {
      setShowPopup(true);
    } else {
      const oneHour = 60 * 60 * 1000; // 1 hour
      const timePassed = Date.now() - parseInt(lastLoginTime, 10);
      if (timePassed > oneHour) {
        setShowPopup(true);
      }
    }
  }, []);

  // ✅ Visitor form submit
  const handleVisitorSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.phone) {
      setError("Name and phone are required");
      return;
    }

    setLoading(true);
    try {
      await axios.post("https://icare.imcbs.com/api/register/", formData);

      sessionStorage.setItem("visitorLoginTime", Date.now().toString());
      setShowPopup(false);
    } catch (err) {
      console.error(err);
      setError("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Admin login submit
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!adminData.username || !adminData.password) {
      setError("Please enter both username and password");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("https://icare.imcbs.com/api/admin-login/", adminData);
      if (res.data.message) {
        localStorage.setItem("isAdmin", "true");
        window.dispatchEvent(new Event("storage"));
        setShowPopup(false);
        window.location.href = "/dashboard";
      }
    } catch (err) {
      console.error(err);
      setError("Invalid username or password ❌");
    } finally {
      setLoading(false);
    }
  };

  // ✅ If popup should not be shown, stop rendering
  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 text-center border border-orange-100">
        {!isAdminLogin ? (
          <>
            <div className="flex flex-col items-center justify-center mb-3">
              <img
                src="/src/assets/logo.png"
                alt="IMC Logo"
                className="w-16 h-16 object-contain mb-2 drop-shadow-md"
              />
              <h2 className="text-2xl font-extrabold text-orange-600">
                Welcome 
              </h2>
              <p className="text-gray-600 text-sm italic mt-1">
                Enter your details to continue
              </p>
            </div>

            <form onSubmit={handleVisitorSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="email"
                placeholder="Email (optional)"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2 border rounded-md"
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="bg-orange-500 text-white w-full py-2 rounded-md hover:bg-orange-600"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-3">
              Admin?{" "}
              <button
                onClick={() => setIsAdminLogin(true)}
                className="text-orange-500 font-semibold hover:underline"
              >
                Login here
              </button>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-extrabold text-orange-600 mb-4">
              Admin Login 🔒
            </h2>

            <form onSubmit={handleAdminLogin} className="space-y-3">
              <input
                type="text"
                placeholder="Username"
                value={adminData.username}
                onChange={(e) =>
                  setAdminData({ ...adminData, username: e.target.value })
                }
                className="w-full p-2 border rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                value={adminData.password}
                onChange={(e) =>
                  setAdminData({ ...adminData, password: e.target.value })
                }
                className="w-full p-2 border rounded-md"
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="bg-orange-500 text-white w-full py-2 rounded-md hover:bg-orange-600"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-3">
              Back to{" "}
              <button
                onClick={() => {
                  setIsAdminLogin(false);
                  setError("");
                }}
                className="text-orange-500 font-semibold hover:underline"
              >
                Visitor Form
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default VisitorPopup;