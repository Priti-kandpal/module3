
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./pages/todoList";
import TodoDetails from "./pages/tododetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todo/:id" element={<TodoDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
