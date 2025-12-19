import { useState } from "react";
import TodosList from "./TodosList";

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Todo App</h1>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button onClick={() => setShowTodos(false)}>Unmount Todos</button>
      </div>
      {showTodos && <TodosList />}
    </div>
  );
}

export default App;

