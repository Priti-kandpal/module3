import Component6 from "./Component6";

function Component5({ e, f }) {
  return (
    <div style={{ border: "2px solid orange", padding: "10px", marginTop: "10px" }}>
      <h3>Component 5</h3>

      <h4>This is prop f: {f}</h4>

      {/* e is NOT used here */}
      <Component6 e={e} />
    </div>
  );
}

export default Component5;
