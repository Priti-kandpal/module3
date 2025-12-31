import React from "react";
const Box = () => {
  console.log("Box rendered");

  return (
    <div className="box">
      <h3>Box Component</h3>
      <p>This is a heavy UI section.</p>
    </div>
  );
};

export default React.memo(Box);

