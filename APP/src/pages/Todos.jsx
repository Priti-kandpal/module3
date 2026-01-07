import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { fetchTodos, createTodo, updateTodo, deleteTodo } from "../services/todo.service";
import TodoModal from "../components/TodoModel";

export default function Todos() {
  const { user, logout } = useAuth();
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    if (!user) return;
    const loadTodos = async () => {
      const data = await fetchTodos(user.uid);
      setTodos(data);
      if (data.length) setSelectedTodo(data[0]);
    };
    loadTodos();
  }, [user]);

  const handleAdd = async () => {
    if (!newTodo) return;
    await createTodo({ title: newTodo, completed: false, userId: user.uid });
    const data = await fetchTodos(user.uid);
    setTodos(data);
    setNewTodo("");
  };

  const handleToggle = async (todo) => {
    await updateTodo(todo.id, { completed: !todo.completed });
    const data = await fetchTodos(user.uid);
    setTodos(data);
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    const data = await fetchTodos(user.uid);
    setTodos(data);
    setSelectedTodo(null);
  };

  const handleSaveEdit = async (title) => {
    await updateTodo(selectedTodo.id, { title });
    const data = await fetchTodos(user.uid);
    setTodos(data);
    setSelectedTodo({ ...selectedTodo, title });
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <div className="flex justify-between items-center p-4 bg-gray-100 border-b">
        <h2 className="text-xl font-bold">Todos App</h2>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Main */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/4 p-4 border-r overflow-y-auto">
          <div className="flex mb-4 gap-2">
            <input
              type="text"
              className="border p-2 rounded w-full"
              placeholder="New Todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button
              onClick={handleAdd}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>

          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                onClick={() => setSelectedTodo(todo)}
                className={`p-2 cursor-pointer rounded mb-1 ${
                  selectedTodo?.id === todo.id ? "bg-gray-200" : "hover:bg-gray-100"
                }`}
              >
                {todo.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {selectedTodo ? (
            <div>
              <h3 className="text-2xl font-bold mb-2">{selectedTodo.title}</h3>
              <p className="mb-4">
                Status:{" "}
                <span className={selectedTodo.completed ? "text-green-600" : "text-yellow-600"}>
                  {selectedTodo.completed ? "Completed" : "Pending"}
                </span>
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => handleToggle(selectedTodo)}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Toggle Status
                </button>
                <TodoModal todo={selectedTodo} onSave={handleSaveEdit}>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Edit
                  </button>
                </TodoModal>
                <button
                  onClick={() => handleDelete(selectedTodo.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ) : (
            <p>Select a todo from the sidebar</p>
          )}
        </div>
      </div>
    </div>
  );
}
