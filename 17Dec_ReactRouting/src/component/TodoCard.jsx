import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

export default function TodoCard() {
    const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => {
        setTodos(data.slice(0, 20)); 
      });
  }, []);

  return (
    <div>
      <Navbar />
<div style={container}>
      {todos.map(todo => (
        <div key={todo.id} style={cardStyle}>
          <h3 style={titleStyle}>Title: {todo.title}</h3>
          <h3 style={statusStyle}>
            Status: {todo.completed ? "Completed" : "Not Completed"}
          </h3>
        </div>
      ))}
</div>
    </div>
  )
}
const container={
    display:"grid",
    gridTemplateColumns:"repeat(4,1fr)",
    gap: "20px",
  justifyItems: "center"
}
const cardStyle={
border:"1px solid black",
    width:"300px",  
    margin:"10px",
    padding:"10px",
    boxShadow:"2px 2px 5px grey",
    borderRadius:"10px" ,
    display:"grid",
    gridTemplateC:"auto auto",
    justifyItems:"center",
    alignItems:"center",
    backgroundColor:"lightgrey"
}
const titleStyle={
    fontSize:"20px",
    fontWeight:"bold"
}
const statusStyle={
    fontSize:"16px",
    color:"green"
}