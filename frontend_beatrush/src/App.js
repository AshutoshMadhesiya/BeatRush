import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Create from "./components/Create";

const App = () => {
  const [token, setToken] = useState(null); // Initialize token state
  const [userName, setUserName] = useState(null); // State for storing user name

  const handleAuthSuccess = (authToken, name) => {
    setToken(authToken);
    setUserName(name); // Set the user’s name on successful login
    console.log(name);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {!token ? (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/create">Create</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <button onClick={() => { setToken(null); setUserName(null); }}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home userName={userName} />} />
          {!token && (
            <>
              <Route path="/login" element={<Login onAuthSuccess={handleAuthSuccess} />} />
              <Route path="/register" element={<Register onAuthSuccess={handleAuthSuccess} />} />
            </>
          )}
          <Route path="/create" element={token ? <Create /> : <Navigate to="/login" />} />
          <Route path="/profile" element={token ? <Profile userName={userName} /> : <Navigate to="/login" />} />
          <Route
            path="/welcome"
            element={
              token ? (
                <div>
                  <h1>Welcome, {userName}!</h1>
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
