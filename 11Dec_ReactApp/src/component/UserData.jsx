import React from 'react'
import { useState,useEffect } from 'react'

export default function UserData() {
    const [data,setData]=useState();
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/users/1")
.then((res)=>res.json())
.then((data)=>{
    setData(data);
    setLoading(false)
})
    },[])
    if(loading){
        return <h3>Loading...</h3>
    }

  return (
    <div>
     <p>UserName: {data.name}</p> 
        <p>UserEmail: {data.email}</p>
        <p>UserPhone: {data.phone}</p>
    </div>
  )
}
