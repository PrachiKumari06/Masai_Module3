import React,{useReducer} from 'react'
const initialState=0;
function counetrReducer(state,action){
    if(action==="Increment"){
        return state+1;
    }
    if(action==="Decrement"){
        return state-1;
    }
    if(action==="Reset"){
        return 0;
    }
    return state;
}
export default function CounteruseReduce() {
    const [count,dispatch]=useReducer(counetrReducer,initialState);
  return (
    <div style={{textAlign:"center",marginTop:"30px"}}>
      <h2>Count : {count}</h2>
      <button onClick={()=>{dispatch("Increment")}}>Increase</button>
      <button onClick={()=>{dispatch("Decrement")}}>Decrement</button>
      <button onClick={()=>{dispatch("Reset")}}>Reset</button>
    </div>
  )
}
