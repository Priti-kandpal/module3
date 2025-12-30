import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";
import "./App.css";

const productsData = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 },
];

function App() {
  const [counter, setCounter] = useState(0);
  const [products] = useState(productsData);
  
  //useMemo
 const totalPrice = useMemo(() => {
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);
    
  //useCallback
  const handleProductSelect = useCallback((product) => {
    console.log("Selected:", product.name);
  }, []);

  return (
    <div className="app-container">
      <h1>Product Store</h1>

      <h2>Total Price: ₹{totalPrice}</h2>

      <button className="counter-btn" onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <ProductList
        products={products}
        onSelect={handleProductSelect}
      />
    </div>
  );
}

export default App;
