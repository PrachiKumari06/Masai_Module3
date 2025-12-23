import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './component/About'
import Home from './component/Home'
import TodoCard from './component/TodoCard'
import NotFound from './component/NotFound'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/todo" element={<TodoCard/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}
