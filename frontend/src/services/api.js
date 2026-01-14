import axios from 'axios';

// Eclipse default port 8080 hota hai, agar aapka alag hai toh change karein
const API_URL = "http://localhost:8080/api"; 

export const getRides = () => axios.get(`${API_URL}/rides`);
// Baad mein login/signup ke liye yahan aur functions add karenge