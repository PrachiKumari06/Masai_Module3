import React, { createContext, useEffect, useState } from 'react'

export const PostContext=createContext();
export default function PostProvider({children}){
const [posts,setPosts]=useState([]);
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>setPosts(data.slice(0,20)))
},[])
function deletePost(id){
    setPosts(posts.filter((p)=>p.id!==id));
}
function updatePost(id,updatedPost){
    setPosts(posts.map((p)=>p.id===id ? {...p,...updatedPost} : p));
}
return(
    <PostContext.Provider value={{posts,deletePost,updatePost}}>
        {children}
    </PostContext.Provider>
)
}
