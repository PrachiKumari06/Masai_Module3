import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import ChefDashboard from './chef/ChefDashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chef" element={<ChefDashboard />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  )
}
