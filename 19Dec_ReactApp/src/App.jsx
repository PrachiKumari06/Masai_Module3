import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './component/Login'
import Home from './component/Home'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}
