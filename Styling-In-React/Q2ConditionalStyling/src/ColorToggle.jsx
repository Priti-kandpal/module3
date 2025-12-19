import { useState } from "react";
import "./ColorToggle.css"; 

function ColorToggle() {

  const [isRed, setIsRed] = useState(true);
  const toggleColor = () => setIsRed(!isRed);

  return (
    <div className="container">
      <div
        className="color-box"
        style={{ backgroundColor: isRed ? "red" : "blue", color: "white" }}
      >
        This div changes color!
      
      <button className="toggle-btn" onClick={toggleColor}>
        Toggle Color
      </button></div>
    </div>
  );
}

export default ColorToggle;
