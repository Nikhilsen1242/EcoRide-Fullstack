import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <h2 style={styles.logo}>EcoRide</h2>
            <div style={styles.links}>
                <Link to="/" style={styles.link}>Home</Link>
                <Link to="/login" style={styles.link}>Login</Link>
                <Link to="/register" style={styles.link}>Register</Link>
            </div>
        </nav>
    );
};

const styles = {
    nav: { display: 'flex', justifyContent: 'space-between', padding: '15px 50px', backgroundColor: '#2ecc71', color: 'white' },
    logo: { margin: 0 },
    links: { display: 'flex', gap: '20px', alignItems: 'center' },
    link: { color: 'white', textDecoration: 'none', fontWeight: 'bold' }
};

export default Navbar;