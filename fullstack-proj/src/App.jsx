import './App.css';
import About from './Components/FunctionalComponents/About';
import Home from './Components/FunctionalComponents/Home';
import Contact from './Components/FunctionalComponents/Contact';
import Gallery from './Components/FunctionalComponents/Gallery';
import NavBar from './Components/FunctionalComponents/Navbar';
import Footer from './Components/FunctionalComponents/Footer';
import UseEffect from './Components/FunctionalComponents/useEffect';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


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
          <Route path="/useeffect" element={<UseEffect />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
