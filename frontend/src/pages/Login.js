import React, { useState } from 'react';
import { loginUser, signupUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                const res = await loginUser({ username: formData.username, password: formData.password });
                localStorage.setItem('token', res.data.accessToken); // JWT token save karein
                alert("Login Successful!");
            } else {
                await signupUser(formData);
                alert("Signup Successful! Now please login.");
                setIsLogin(true);
                return;
            }
            navigate('/');
            window.location.reload(); // Navbar update karne ke liye
        } catch (err) {
            alert(err.response?.data?.message || "Authentication Failed!");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <div style={styles.tabBar}>
                    <button onClick={() => setIsLogin(true)} style={{...styles.tab, borderBottom: isLogin ? '3px solid #00CEC9' : 'none'}}>Login</button>
                    <button onClick={() => setIsLogin(false)} style={{...styles.tab, borderBottom: !isLogin ? '3px solid #00CEC9' : 'none'}}>Signup</button>
                </div>
                
                <form onSubmit={handleSubmit} style={styles.form}>
                    <h2 style={{textAlign:'center', color:'#2D3436'}}>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
                    
                    <input 
                        placeholder="Username" 
                        onChange={e => setFormData({...formData, username: e.target.value})} 
                        style={styles.input} required 
                    />
                    
                    {!isLogin && (
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            onChange={e => setFormData({...formData, email: e.target.value})} 
                            style={styles.input} required 
                        />
                    )}
                    
                    <input 
                        type="password" 
                        placeholder="Password" 
                        onChange={e => setFormData({...formData, password: e.target.value})} 
                        style={styles.input} required 
                    />
                    
                    <button type="submit" style={styles.btn}>
                        {isLogin ? 'Sign In' : 'Register'}
                    </button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' },
    card: { background: '#fff', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px', overflow: 'hidden' },
    tabBar: { display: 'flex', background: '#f8f9fa' },
    tab: { flex: 1, padding: '15px', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' },
    form: { padding: '30px', display: 'flex', flexDirection: 'column', gap: '15px' },
    input: { padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' },
    btn: { padding: '12px', background: '#00CEC9', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }
};

export default Login;