import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp({ setIsAuthenticated }) {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/signup', {
                email,
                Password,
            });

            setMessage(response.data);
            if (response.data === 'user created') {
                localStorage.setItem('isAuthenticated', 'true');
                setIsAuthenticated(true); // Update state to reflect authentication
                setTimeout(() => {
                    navigate('/home'); // Redirect to the home page
                }, 1000);
            }
        } catch (error) {
            setMessage(error.response && error.response.data ? error.response.data : 'Error signing up');
        }
    };

    return (
        <div>
            <h1>Signup</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSignup}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
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
                <button type="submit">Signup</button>
            </form>
            <p>
                Already have an account?{' '}
                <Link to="/login">Login here</Link>
            </p>
        </div>
    );
}

export default SignUp;
