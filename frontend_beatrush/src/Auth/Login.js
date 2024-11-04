import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ onAuthSuccess }) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        loginData
      );
      const token = response.data.token;

      const userResponse = await axios.get(
        "http://localhost:8000/api/auth/user",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const userName = userResponse.data.name;

      if (onAuthSuccess && typeof onAuthSuccess === "function") {
        onAuthSuccess(token, userName);
      }

      alert("Login successful!");
    } catch (err) {
      console.error("Login failed:", err);
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-red-500">
      <div className="bg-white rounded-2xl shadow-2xl p-12 w-full max-w-md transform transition duration-500 hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-purple-800 mb-6">
          🎶 Welcome Back to BeatRush!
        </h2>
        <form className="space-y-6" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleLoginChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleLoginChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <div className="text-right">
            <button
              type="button"
              onClick={() => navigate("/password-reset")}
              className="text-sm text-purple-600 hover:text-purple-800 hover:underline focus:outline-none"
            >
              Forgot password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold py-3 rounded-lg shadow-lg hover:from-purple-700 hover:to-purple-900 focus:outline-none focus:ring-4 focus:ring-purple-500 transition"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-6">
          <span className="text-gray-600">Don't have an account?</span>
          <button
            onClick={() => navigate("/register")}
            className="text-pink-600 hover:text-pink-800 font-medium ml-2"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
