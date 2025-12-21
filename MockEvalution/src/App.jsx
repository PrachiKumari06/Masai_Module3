import React, { use } from 'react'
import PostProvider from './context/Postcontext';
import { useState } from 'react';
import Theme from './component/Theme';
import PostList from './component/PostList';
import './App.css';

export default function App() {
  const [theme,setTheme]=useState("light");
  function toggletheme(){
    if(theme==="light"){
      setTheme("dark");
    }else{
      setTheme("light");
    }
  }
  return (
    <PostProvider>
      <div className={`app ${theme}`}>
        <Theme toggletheme={toggletheme}/>
        <PostList theme={theme}/>
      </div>
    </PostProvider>
  )
}
