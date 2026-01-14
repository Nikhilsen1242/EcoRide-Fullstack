import React, { useEffect, useState } from 'react';
import { getRides } from '../services/api';

const Home = () => {
    const [rides, setRides] = useState([]);

    useEffect(() => {
        getRides()
            .then(res => setRides(res.data))
            .catch(err => console.error("Error fetching rides", err));
    }, []);

    return (
        <div style={{ padding: '40px 5%' }}>
            <h1 style={{ textAlign: 'center', color: '#2D3436', marginBottom: '30px' }}>Available EcoRides</h1>
            <div style={styles.grid}>
                {rides.length > 0 ? rides.map(ride => (
                    <div key={ride.id} style={styles.card}>
                        <div style={styles.cardHeader}>{ride.source} ➔ {ride.destination}</div>
                        <p>👤 Driver: {ride.driverName || 'Verified Member'}</p>
                        <p>💰 Price: <b>₹{ride.price}</b></p>
                        <p>💺 Seats: {ride.seats || 4}</p>
                        <button style={styles.bookBtn}>Book Now</button>
                    </div>
                )) : <p style={{ textAlign: 'center', width: '100%' }}>No rides found. Be the first to post!</p>}
            </div>
        </div>
    );
};

const styles = {
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' },
    card: { background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', border: '1px solid #eee' },
    cardHeader: { fontSize: '1.2rem', fontWeight: 'bold', color: '#0984E3', marginBottom: '10px' },
    bookBtn: { width: '100%', padding: '10px', marginTop: '10px', background: '#00CEC9', border: 'none', color: '#fff', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }
};

export default Home;