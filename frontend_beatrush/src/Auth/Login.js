import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onAuthSuccess }) => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      // Log in and get the token
      const response = await axios.post('http://localhost:8000/api/auth/login', loginData);
      const token = response.data.token;

      // Fetch the user’s name
      const userResponse = await axios.get('http://localhost:8000/api/auth/user', {
        headers: { Authorization: `Bearer ${token}` },
      });

      const userName = userResponse.data.name;

      if (onAuthSuccess && typeof onAuthSuccess === 'function') {
        onAuthSuccess(token, userName); // Pass token and userName to App
      }

      alert('Login successful!');
    } catch (err) {
      console.error('Login failed:', err);
      alert('Invalid login credentials');
    }
  };

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleLoginChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleLoginChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
