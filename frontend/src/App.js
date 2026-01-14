import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Naya Home page import karein
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* "/" path par ab purana welcome message nahi, Home.js dikhega */}
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;