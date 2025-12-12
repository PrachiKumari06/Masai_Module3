import React from 'react'
import {useState,useEffect} from "react"

export default function Counter() {
  const [count,setCount]=useState(1);
  document.body.style.background = "lightblue";
  useEffect(()=>{
    if(count%3==0){
     document.body.style.background=document.body.style.background==="lightblue"?"pink":"lightblue"
      alert(`The current number ${count} is divisible by 3`)
    }
  },[count])
  return (
    <div>
     <p>Count : {count}</p> 
     <button onClick={()=>{setCount(count+1)}}>Increment the number</button>
    </div>
  )
}
