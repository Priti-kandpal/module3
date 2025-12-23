import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({ id }) => {
  const { todos, deleteTodo } = useContext(TodoContext);

  const todo = todos.find((t) => t.id === id);

  if (!todo) return null;

  return (
    <div className="todo-item">
      <span>{todo.title}</span>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
