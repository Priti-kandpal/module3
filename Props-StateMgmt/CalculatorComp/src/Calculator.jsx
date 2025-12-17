import { useState } from "react";
function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("Add");
  const [results, setResults] = useState([]);

  const handleCalculate = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);
    let result;

    if (operation === "Add") {
      result = n1 + n2;
    } else if (operation === "Subtract") {
      result = n1 - n2;
    } else if (operation === "Multiply") {
      result = n1 * n2;
    }

    setResults([...results, result]);
  };

  return (
    <div className="calculator">
      <h2>Basic Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option>Add</option>
        <option>Subtract</option>
        <option>Multiply</option>
      </select>

      <br /><br />

      <button onClick={handleCalculate}>
        Perform Action
      </button>

      <h3>Results:</h3>
      <ul>
        {results.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
    </div>
  );
}

export default Calculator;

