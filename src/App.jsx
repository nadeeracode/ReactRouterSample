import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import NavBar from './components/navbar'
import Footer from './components/footer'

import Home from './Pages/Home'
import About from './Pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
