import React, { useState,useMemo } from 'react'


export default function Counter_23Dec() {
    const [count,setCount]=useState(0);
        const [count1,setCount1]=useState(0);

    function incre(){
        setCount(count=>count+1)
    }
    function incre2(){
        setCount1(count=>count+1)
    }
    const isEven= useMemo(()=>{
        let i=0;
        while(i<1000000){
i++;
        }
        return count%2==0;
    },[count])

  return (
    <div>
    <div><button onClick={incre}>Count is : {count}</button><span>{isEven?"even":"odd"}</span></div>
    <div><button onClick={incre2}>Count is : {count1}</button></div>
    <div></div>  
    </div>
  )
}



/*
initaliiy we do like that 
import React, { useState } from 'react'

export default function Counter_23Dec() {
    const [count,setCount]=useState(0);
        const [count1,setCount1]=useState(0);

    function incre(){
        setCount(count=>count+1)
    }
    function incre2(){
        setCount1(count=>count+1)
    }
    function iseven(num){
        return num%2==0;
    }

  return (
    <div>
    <div><button onClick={incre}>Count is : {count}</button><span>{iseven(count)?"even":"odd"}</span></div>
    <div><button onClick={incre2}>Count is : {count1}</button><span>{iseven(count1)?"even":"odd"}</span></div>
    <div></div>  
    </div>
  )
}

*/