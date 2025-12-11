import React, { useState } from 'react'

export default function Student(props) {
            const [count,setcount]=useState(0);

    function incrementnumber(){
      
            setcount(count+1);
        
    }
  return (
    <div className="student-name">
            <p>Name: {props.name}</p>
             <p>Name: {props.lastname}</p> 
             <p>Name: {props.age}</p>
             <p>IsStudent: {props.isStudent?"Yes":"No"}</p>
<button onClick={incrementnumber}>Increment</button>
<p>Count:{count}</p>


    </div>
  )
}
