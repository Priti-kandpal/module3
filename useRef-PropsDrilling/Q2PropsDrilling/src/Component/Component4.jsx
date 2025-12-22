import Component5 from "./Component5";

function Component4({ c, d, e, f }) {
  return (
    <div style={{ border: "2px solid purple", padding: "10px", marginTop: "10px" }}>
      <h3>Component 4</h3>

      <h4>This is prop c: {c}</h4>
      <h4>This is prop d: {d}</h4>

      <Component5 e={e} f={f} />
    </div>
  );
}

export default Component4;
