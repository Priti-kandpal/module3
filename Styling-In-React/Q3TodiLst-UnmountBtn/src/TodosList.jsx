import { useState, useEffect } from "react";
import TodoCard from "./TodoCard";

function TodosList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch first 15 todos
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 15)));

 
    return () => {
      alert("cleanup worked");
    };
  }, []); 

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "20px" }}>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default TodosList;
