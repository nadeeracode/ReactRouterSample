import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'


import Home from './Pages/Home'
import About from './Pages/About'
import Vans from './Pages/Vans'
import VanDetail from './Pages/VanDetail'
import HostLayout from './components/HostLayout'
import Dashboard from './Pages/Host/Dashboard'
import Income from './Pages/Host/Income'
import HostVans from './Pages/Host/HostVans'
import HostVansDetail from './Pages/Host/HostVansDetail'
import HostVanDetailHome from './Pages/Host/HostVanDetail/HostVanDetailHome'
import HostVanDetailPricing from './Pages/Host/HostVanDetail/HostVanDetailPricing'
import HostVanDetailPhotos from './Pages/Host/HostVanDetail/HostVanDetailPhotos'
import Reviews from './Pages/Host/Reviews'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />} >
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetail />}>
              <Route index element={<HostVanDetailHome />} />
              <Route path="pricing" element={<HostVanDetailPricing />} />
              <Route path="photos" element={<HostVanDetailPhotos />} />
            </Route>

            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
