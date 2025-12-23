import React, { useMemo, useState } from 'react'

export default function PerformanceCompo() {
     const [bgcolor,setBgColor]=useState("green");
    const [num,setNum]=useState(0);
    function toggleColor(){ //for button
        setBgColor(bgcolor==="green"?"Lightgreen":"green")
    }
    function handleChange(e){
      setNum(e.target.value)
    }
    const p=useMemo(()=>{
    let s=0;
    for (let i = num; i < 600; i++) {
       s+=i;
       console.log(i);
    }
    },[num])
    
  return (
    <div style={{padding:"20px"}}>
      <div style={{backgroundColor:bgcolor,padding:"20px",width:"200px",borderRadius:"10px"}}>
       <input type='number' placeholder='enter number' value={num} onChange={handleChange}/> 
      </div>
      <button onClick={toggleColor}>ToggleButton</button>
      <p>Enetred Number : {num}</p>
      <p>Loop Result: {p}</p>
    </div>
  )
}
