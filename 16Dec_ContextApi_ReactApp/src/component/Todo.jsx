import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoProvider from "../context/TodoContext";

const Todos = () => {
  return (
    <TodoProvider>
      <h2>Todo App</h2>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
};

export default Todos;
