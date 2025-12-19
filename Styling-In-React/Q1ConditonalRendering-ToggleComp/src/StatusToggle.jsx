import { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import "./StatusToggle.css"; 

function StatusToggle() {
  const [status, setStatus] = useState(false); 

  return (
    <div className="container">
      <div className="status-box">
        <button className="toggle-btn" onClick={() => setStatus(!status)}>
          Toggle Status
        </button>

        {/* Conditional Rendering */}
        {status ? <ComponentA /> : <ComponentB />}
      </div>
    </div>
  );
}

export default StatusToggle;
