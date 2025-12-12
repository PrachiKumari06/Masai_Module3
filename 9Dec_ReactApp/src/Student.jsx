import React, { useState } from 'react'

export default function Student(props) {
  const [name,setName]=useState("Sakshi");
    const [age,setAge]=useState(0);
    const [isStudent,setIsStudent]=useState(true);
    function changeName(){
      setName("Masai School");
    }
    function incrementnumber(){
    setAge(age+1);
   }
   function toggleStudent(){
    setIsStudent(!isStudent);
   }


  return (
    <div className="student-name">
            <p>Name: {name}</p>
            <button onClick={changeName}>Change Name</button>
             <p>Age: {age}</p>
            <button onClick={incrementnumber}>Increment Age</button>
<p>Is Student: {isStudent ? "Yes" : "No"}</p>
<button onClick={toggleStudent}>Toggle Student</button>


    </div>
  )
}
