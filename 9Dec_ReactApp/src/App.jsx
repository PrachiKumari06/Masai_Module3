import React from 'react'
import Navbar from './component/Navbar.jsx'
import FirstComponent from './component/FirstComponent.jsx'
import Content from './component/Content.jsx'
import Footer from './component/Footer.jsx'
import './App.css'
import Student from './Student.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <FirstComponent />
      <Content />
      <Student name="John Doe" lastname="Smith" age={20} isStudent={true} />
      <Footer />
    </>
  )
}
