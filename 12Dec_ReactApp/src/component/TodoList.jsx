import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";
export default function TodosList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 15)));

    return () => {
      alert("cleanup worked");
    };
  }, []);

  return (
    <div>
      {todos.map((item) => (
        <TodoCard
          key={item.id}
          userId={item.userId}
          title={item.title}
          completed={item.completed}
        />
      ))}
    </div>
  );
}
