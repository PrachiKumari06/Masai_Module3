import React from 'react'
import './App.css'
import StatusToggle from './component/StatusToggle'
import TodosList from './component/TodoList' ;
import { useState } from 'react';

export default function App() {
    const [showTodos, setShowTodos] = useState(true);

  return (
    <div>
    <StatusToggle/> 
     <div>
      <button onClick={() => setShowTodos(false)}>
        Unmount Todos
      </button>

      {showTodos && <TodosList />}
    </div> 
    </div>
  )
}
