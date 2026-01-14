import React, { useState } from 'react';
import { postRide } from '../services/api';
import { useNavigate } from 'react-router-dom';

const PostRide = () => {
    const [form, setForm] = useState({ source: '', destination: '', price: '', seats: '' });
    const navigate = useNavigate();

    const handlePost = async (e) => {
        e.preventDefault();
        try {
            await postRide(form);
            alert("Ride Posted!");
            navigate('/');
        } catch (err) {
            alert("Error: Make sure you are logged in!");
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handlePost} style={styles.form}>
                <h2>Post a Ride</h2>
                <input placeholder="Source" onChange={e => setForm({...form, source: e.target.value})} style={styles.input} required />
                <input placeholder="Destination" onChange={e => setForm({...form, destination: e.target.value})} style={styles.input} required />
                <input type="number" placeholder="Price (₹)" onChange={e => setForm({...form, price: e.target.value})} style={styles.input} required />
                <input type="number" placeholder="Available Seats" onChange={e => setForm({...form, seats: e.target.value})} style={styles.input} required />
                <button type="submit" style={styles.btn}>Publish Ride</button>
            </form>
        </div>
    );
};

const styles = {
    container: { display: 'flex', justifyContent: 'center', marginTop: '50px' },
    form: { background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 0 20px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' },
    input: { width: '100%', padding: '12px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ddd' },
    btn: { width: '100%', padding: '12px', background: '#00CEC9', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem', fontWeight: '600' }
};

export default PostRide;