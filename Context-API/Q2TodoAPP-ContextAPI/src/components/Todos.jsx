import { useState } from "react";
import { TodoContext } from "../context/TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import "../App.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos([...todos, { id: Date.now(), title }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      <div className="todo-container">
        <h2>Todo App using Context API</h2>
        <AddTodo />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
};

export default Todos;

