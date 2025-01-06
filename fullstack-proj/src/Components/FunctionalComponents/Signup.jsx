import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    console.log('Attempting to sign up:', { name, email, Password });

    try {
      const response = await axios.post('http://localhost:5000/signup', {
        name,
        email,
        Password,
      });

      console.log('Signup Response:', response); // For debugging

      setMessage('Signup successful! Redirecting to login...');
      setTimeout(() => {
        navigate('/login'); // Redirect to login page after successful signup
      }, 2000);
    } catch (error) {
      console.error('Signup Error:', error); // For debugging
      setMessage(
        error.response && error.response.data
          ? error.response.data
          : 'Error signing up. Please try again later.'
      );
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

export default Signup;