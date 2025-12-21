import React, { useState,useContext } from 'react'
import { PostContext } from '../context/Postcontext';

export default function PostCard({post,theme}) {
const {deletePost,updatePost}=useContext(PostContext);
const [edit,setEdit]=useState(false);
const [title,setTitle]=useState(post.title);
const [body,setBody]=useState(post.body);

function savePost(){
    updatePost(post.id,{title,body});
    setEdit(false);
}

  return (
    <div className={`card ${theme}`}>
      {edit ? (
        <div>
          <input value={title} onChange={(e)=>setTitle(e.target.value)} />
          <textarea value={body} onChange={(e)=>setBody(e.target.value)} />
          <button onClick={savePost}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={()=>setEdit(true)}>Edit</button>
          <button onClick={()=>deletePost(post.id)}>Delete</button>
        </div>
      )}
    </div>
  )
}
