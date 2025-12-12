import React from 'react'
import { useState,useEffect } from 'react'

export default function Dec_SideEffect() {
    const [count,setCount]=useState(1);
    const [seconds,setSeconds]=useState(0);
/*   WAY 1 TO WRITE USEEFFECT
useEffect(()=>{
     if(count%6===0){
       document.getElementById("countnum").innerHTML=`Number Is Prime "${count}`
       document.body.style.background=document.body.style.background==="yellow"?"red":"yellow";
    }
     document.title=`${count}`
   })*/
//WAY 2 TO WRITE USEEFFECT
useEffect(()=>{
 document.title=`${count}`   
},[count]);

useEffect(()=>{
console.log("Timer Started");
const timer=setInterval(()=>{setSeconds(s=>s+1)},1000)
return ()=>{
    console.log("timer stopped ");
    clearInterval(timer);
}
},[])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      {/* <p id='countnum'></p> */}

      <h3>Seconds : {seconds}</h3>
    </div>
  )
}
