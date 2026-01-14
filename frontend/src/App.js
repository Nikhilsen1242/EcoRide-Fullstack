import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Abhi ke liye simple function based pages
const Home = () => <div style={{padding: '20px'}}><h1>Welcome to EcoRide</h1><p>Find your eco-friendly ride here!</p></div>;
const Login = () => <div style={{padding: '20px'}}><h1>Login Page</h1></div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;