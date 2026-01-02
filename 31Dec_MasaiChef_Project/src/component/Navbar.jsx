import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
   <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">MasaiChef</h1>
          <ul className="flex space-x-4">
            <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
            <li><Link to="/signup" className="hover:text-gray-300">Signup</Link></li>
            <li><Link to="/chef" className="hover:text-gray-300">Chef Dashboard</Link></li>
            <li><Link to="/customer" className="hover:text-gray-300">Customer Dashboard</Link></li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
