// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Profile from './components/Profile';
import Login from './Auth/Login';
import Create from './components/Create';


function App() {
    return (
        <Router>
        <div>
            <nav>
                <Link to="/">Home</Link> | 
                <Link to="/login">Login</Link> | 
                <Link to="/create">create</Link> |
                <Link to="/profile">profile</Link>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create" element={<Create/>}/>
              <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </div>
    </Router>
    );
}

export default App;
