import { useState, lazy, Suspense } from "react";
import "./App.css";

// Lazy load Box component
const Box = lazy(() => import("./Box"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Performance Optimization using React.memo and lazy loading.</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>

      <Suspense fallback={<p>Loading Box...</p>}>
        <Box />
      </Suspense>
    </div>
  );
}

export default App;
