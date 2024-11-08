import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ onAuthSuccess }) => {
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/auth/signup', registerData);
      const token = response.data.token;

      const userResponse = await axios.get('http://localhost:8000/api/auth/user', {
        headers: { Authorization: `Bearer ${token}` },
      });

      const userName = userResponse.data.name;

      if (onAuthSuccess && typeof onAuthSuccess === 'function') {
        onAuthSuccess(token, userName); // Pass token and userName to App
      }
      alert('Registration successful!');
    } catch (err) {
      console.error('Registration failed:', err);
      alert('User registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <form
        onSubmit={handleRegisterSubmit}
        className="bg-white bg-opacity-80 p-8 rounded-lg shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
          Join the BeatRush Community
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={registerData.name}
          onChange={handleRegisterChange}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={registerData.email}
          onChange={handleRegisterChange}
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={registerData.password}
          onChange={handleRegisterChange}
          required
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button
          type="submit"
          className="w-full bg-pink-500 text-white font-bold py-3 rounded-full hover:bg-pink-600 transition duration-300 transform hover:scale-105"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
