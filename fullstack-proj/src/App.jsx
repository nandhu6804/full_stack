import './App.css'
import Home from './Components/FunctionalComponents/Home'
import About from './Components/FunctionalComponents/About'
import Gallery from './Components/FunctionalComponents/Gallery'
import Contact from './Components/FunctionalComponents/Contact'
import NavBar from './Components/FunctionalComponents/Navbar'


function App() {

  return (
    <div>
      <NavBar/>
      <Home />
      <About clg1="KVITT"/>
      <Gallery />
      <Contact />
    </div>
  );
}

export default App
