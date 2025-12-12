import React from 'react'
import Counter from './component/Counter'
import Calculator from './component/Calculator'
import MessageCard from './component/MessageCard'
import UserProfile from './component/UserProfile'

export default function App() {
  return (
    <div>
      <Counter/>
      <hr/>
      <Calculator/>
      <hr/>
      <MessageCard title="Hello Prachi" message="Welcome to the app!"/>
      <MessageCard title="Hello Sakshi" message="Welcome to the Masai EmpowerHer!"/>
      <MessageCard title="Hello Priya" message="Welcome to the Full Stack Development course!"/>
      <hr/>
      <UserProfile username="Priya" userage={25}/>
    </div>
  )
}
