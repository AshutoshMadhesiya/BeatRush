// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.js';
import Profile from './components/Profile.js';
import Login from './Auth/Login.js';
import Create from './components/Create.js';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link> | 
                    <Link to="/create"> create</Link> | 
                    <Link to="/profile"> profile</Link> |  
                    <Link to="/login"> Login</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<Create/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
