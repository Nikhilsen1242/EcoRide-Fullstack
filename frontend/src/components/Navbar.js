import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav style={styles.nav}>
            <h2 style={{ color: '#00CEC9' }}>EcoRide</h2>
            <div style={styles.links}>
                <Link to="/" style={styles.link}>Home</Link>
                {token ? (
                    <>
                        <Link to="/post-ride" style={styles.link}>Post Ride</Link>
                        <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
                    </>
                ) : (
                    <Link to="/login" style={styles.loginBtn}>Login</Link>
                )}
            </div>
        </nav>
    );
};

const styles = {
    nav: { display: 'flex', justifyContent: 'space-between', padding: '1rem 5%', background: '#2D3436', color: '#fff', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 },
    links: { display: 'flex', alignItems: 'center', gap: '20px' },
    link: { color: '#fff', textDecoration: 'none', fontWeight: '500' },
    loginBtn: { background: '#00CEC9', color: '#fff', padding: '8px 20px', borderRadius: '5px', textDecoration: 'none' },
    logoutBtn: { background: '#ff7675', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }
};

export default Navbar;