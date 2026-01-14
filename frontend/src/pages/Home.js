import React, { useEffect, useState } from 'react';
import { getRides } from '../services/api';

const Home = () => {
    const [rides, setRides] = useState([]);

    useEffect(() => {
        // Page load hote hi backend ko call karega
        getRides()
            .then(response => {
                setRides(response.data);
            })
            .catch(error => {
                console.error("Backend connection failed:", error);
            });
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Available Rides</h2>
            <div style={{ display: 'grid', gap: '15px' }}>
                {rides.length > 0 ? rides.map(ride => (
                    <div key={ride.id} style={{ border: '1px solid #ddd', padding: '10px' }}>
                        <h4>{ride.source} to {ride.destination}</h4>
                        <p>Price: ₹{ride.price}</p>
                    </div>
                )) : <p>Loading rides or no rides found...</p>}
            </div>
        </div>
    );
};

export default Home;