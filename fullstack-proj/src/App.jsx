import './App.css';
import About from './Components/FunctionalComponents/About';
import Home from './Components/FunctionalComponents/Home';
import Contact from './Components/FunctionalComponents/Contact';
import Gallery from './Components/FunctionalComponents/Gallery';
import NavBar from './Components/FunctionalComponents/NavBar';
import Footer from './Components/FunctionalComponents/Footer';
import UseEffect from './Components/FunctionalComponents/UseEffect';
import UseRef from './Components/FunctionalComponents/UseRef';
import UseContext from './Components/FunctionalComponents/UseContext';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UseMemo from './Components/FunctionalComponents/UseMemo';
import Login from './Components/FunctionalComponents/Login';
import { useState, useEffect } from 'react';
import SignUp from './Components/FunctionalComponents/SignUp';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on page load
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Redirect to login if not authenticated */}
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/signup" element={<SignUp setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/login" />} />
          <Route path="/gallery" element={isAuthenticated ? <Gallery /> : <Navigate to="/login" />} />
          <Route path="/useeffect" element={isAuthenticated ? <UseEffect /> : <Navigate to="/login" />} />
          <Route path="/useref" element={isAuthenticated ? <UseRef /> : <Navigate to="/login" />} />
          <Route path="/usecontext" element={isAuthenticated ? <UseContext /> : <Navigate to="/login" />} />
          <Route path="/usememo" element={isAuthenticated ? <UseMemo /> : <Navigate to="/login" />} />
          <Route path="/contact" element={isAuthenticated ? <Contact /> : <Navigate to="/login" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;