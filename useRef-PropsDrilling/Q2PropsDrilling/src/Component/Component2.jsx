import Component3 from "./Component3";

function Component2(props) {
  return (
    <div style={{ border: "2px solid blue", padding: "10px", marginTop: "10px" }}>
      <h3>Component 2</h3>

      {/* Props are NOT used here */}
      <Component3
        a={props.a}
        b={props.b}
        c={props.c}
        d={props.d}
        e={props.e}
        f={props.f}
      />
    </div>
  );
}

export default Component2;
