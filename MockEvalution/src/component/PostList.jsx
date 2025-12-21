import React, {useContext } from 'react'
import PostCard from './PostCard';
import { PostContext } from '../context/Postcontext';
export default function PostList({theme}) {
    const {posts}=useContext(PostContext);
  return (
    <div className='posts'>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} theme={theme} />
      ))}
    </div>
  )
}
