import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("https://icare.imcbs.com/api/admin-login/", {
        username,
        password,
      });

      if (res.data.message) {
        localStorage.setItem("isAdmin", "true");
        window.dispatchEvent(new Event("storage")); // 🔁 update sidebar instantly
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Invalid username or password ❌");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center"
      >
        <h2 className="text-2xl font-bold text-orange-600 mb-4">
          Admin Login 🔒
        </h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-3"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-3"
          required
        />
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <button
          type="submit"
          className="bg-orange-500 text-white w-full py-2 rounded hover:bg-orange-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
