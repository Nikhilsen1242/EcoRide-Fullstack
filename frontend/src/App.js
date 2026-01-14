import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PostRide from './pages/PostRide';
import Login from './pages/Login'; // Make sure you have a basic Login.js

function App() {
    return (
        <Router>
            <Navbar />
            <div style={{ minHeight: '90vh' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/post-ride" element={<PostRide />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;