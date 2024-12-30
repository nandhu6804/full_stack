import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassCompEg from './Components/ClassComponents/classCompEg'
import FunctionalCompEg from './Components/FunctionalComponents/FunctionalCompEg'
import Navbar from './Components/FunctionalComponents/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ClassCompEg />
      <FunctionalCompEg />
      <Navbar />
    </div>
  );
}

export default App
