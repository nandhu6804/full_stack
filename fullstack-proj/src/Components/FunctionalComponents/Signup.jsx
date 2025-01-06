import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SignUp({ setIsAuthenticated }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/signup', {
                name,
                email,
                Password,
            });

            // If response is an object, extract the message
            if (typeof response.data === 'object' && response.data.message) {
                setMessage(response.data.message); // Set message property from response
            } else {
                setMessage(response.data); // Set the response data if it's already a string
            }

            if (response.data === 'user created' || response.data.message === 'user created') {
                localStorage.setItem('isAuthenticated', 'true');
                setIsAuthenticated(true); // Update state to reflect authentication
                setTimeout(() => {
                    navigate('/login'); // Redirect to the login page after successful signup
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
