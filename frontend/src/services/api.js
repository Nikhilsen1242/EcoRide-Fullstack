import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080/api' });

// Sabhi requests ke saath JWT Token bhejne ke liye interceptor
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export const getRides = () => API.get('/rides/all');
export const postRide = (data) => API.post('/rides/post', data);
export const loginUser = (data) => API.post('/auth/signin', data);
export const signupUser = (data) => API.post('/auth/signup', data);

export default API;