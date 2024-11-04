import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Create from "./components/Create";
import PasswordReset from "./Auth/PasswordReset";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [token, setToken] = useState(null);
  const [userName, setUserName] = useState(null);

  const handleAuthSuccess = (authToken, name) => {
    setToken(authToken);
    setUserName(name);
    console.log(name);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 relative">
        {/* Top navigation */}
        <nav className="flex justify-between items-center p-4 bg-white shadow-md">
          {/* Menu button */}
          <button
            onClick={toggleSidebar}
            className="text-2xl px-2 py-1 rounded hover:bg-gray-200"
          >
            ☰
          </button>
          {/* Right section with login link */}
          <div className="flex items-center space-x-4">
            {!token ? (
              <Link to="/login" className="text-lg font-medium text-gray-800 hover:text-blue-500">
                Login
              </Link>
            ) : (
              <button
                onClick={() => {
                  setToken(null);
                  setUserName(null);
                }}
                className="text-lg font-medium text-red-500 hover:text-red-700"
              >
                Logout
              </button>
            )}
          </div>
        </nav>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="p-4">
            <button
              onClick={toggleSidebar}
              className="text-2xl mb-4 hover:text-blue-500"
            >
              ✕
            </button>
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-lg font-medium text-gray-800 hover:text-blue-500"
                onClick={toggleSidebar}
              >
                Home
              </Link>
              <Link
                to="/profile"
                className="text-lg font-medium text-gray-800 hover:text-blue-500"
                onClick={toggleSidebar}
              >
                Profile
              </Link>
              {!token && (
                <Link
                  to="/login"
                  className="text-lg font-medium text-gray-800 hover:text-blue-500"
                  onClick={toggleSidebar}
                >
                  Login
                </Link>
              )}
            </nav>
          </div>
        </div>

        {/* Main content with routes */}
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
          <Route path="/password-reset" element={<PasswordReset />} />
        </Routes>

        {/* Create button at bottom right */}
        <Link
          to="/create"
          className="fixed bottom-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-medium shadow-lg hover:bg-blue-600"
        >
          Create
        </Link>
      </div>
    </Router>
  );
};

export default App;
