import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({ setIsAuthenticated }) {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/login', {
                email,
                Password,
            });

            setMessage(response.data);
            if (response.data === 'user logined') {
                localStorage.setItem('isAuthenticated', 'true');
                setIsAuthenticated(true); // Update state to reflect authentication
                setTimeout(() => {
                    navigate('/home'); // Redirect to the home page
                }, 1000);
            }
        } catch (error) {
            setMessage(error.response && error.response.data ? error.response.data : 'Error logging in');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account?{' '}
                <button
                    onClick={() => navigate('/signup')}
                    style={{
                        color: 'blue',
                        textDecoration: 'underline',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    Signup here
                </button>
            </p>
        </div>
    );
}

export default Login;