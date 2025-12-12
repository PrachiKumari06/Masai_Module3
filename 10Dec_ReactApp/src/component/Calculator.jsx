import React, { useEffect } from 'react'
import { useState } from 'react'


export default function Calculator() {
    const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  function calculate(){
    let num1 = parseFloat(one);
    let num2 = parseFloat(two);
    if(operation === "add"){
      setResult(num1 + num2);
    }   
    else if(operation === "multiply"){
      setResult(num1 * num2);
    }   
    else if(operation === "subtract"){
      setResult(num1 - num2);
    }
  }

     
    
  return (
    <div className='calculator'>
      <input type="number" placeholder='enter first number' value={one} onChange={(e) => setOne(e.target.value)} />
      <input type="number" placeholder='enter second number' value={two} onChange={(e) => setTwo(e.target.value)} />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="add">Add</option>
        <option value="multiply">Multiply</option>
        <option value="subtract">Subtract</option>
      </select>
      <h3>Result : {result}</h3>
      <button onClick={calculate}>Perform Action</button>

    </div>
  )
}
