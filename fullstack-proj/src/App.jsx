import './App.css'
import Home from './Components/FunctionalComponents/Home'
import About from './Components/FunctionalComponents/About'
import Gallery from './Components/FunctionalComponents/Gallery'
import Contact from './Components/FunctionalComponents/Contact'
import NavBar from './Components/FunctionalComponents/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App


/*import './App.css';
import Home from './Components/FunctionalComponents/Home';
import About from './Components/FunctionalComponents/About';
import Gallery from './Components/FunctionalComponents/Gallery';
import Contact from './Components/FunctionalComponents/Contact';
import NavBar from './Components/FunctionalComponents/Navbar';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // To track if the user is logged in
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // To navigate after login

  // Handle login logic
  const handleLogin = (e) => {
    e.preventDefault();

    // Simple login check (you can replace this with real authentication logic)
    if (email === 'user@example.com' && password === 'password') {
      setIsLoggedIn(true);
      alert('Login Successful! Redirecting to Home page...');
      navigate('/home'); // Redirect to home page after successful login
    } else {
      alert('Invalid credentials, please try again.');
    }
  };

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={!isLoggedIn ? (
            <div>
              <h2>Login</h2>
              <form onSubmit={handleLogin}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Login</button>
              </form>
            </div>
          ) : (
            navigate('C:\Users\Nandhitha\Videos\fullstack\fullstack-proj\src\Components\FunctionalComponents\Home.jsx') // If logged in, redirect to home automatically
          )
          }
          />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
*/
