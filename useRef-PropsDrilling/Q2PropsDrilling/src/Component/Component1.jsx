import Component2 from "./Component2";

function Component1() {
  const a = "Apple";
  const b = "Ball";
  const c = "Cat";
  const d = "Dog";
  const e = "Elephant";
  const f = "Fish";

  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <h3>Component 1</h3>

      <Component2
        a={a}
        b={b}
        c={c}
        d={d}
        e={e}
        f={f}
      />
    </div>
  );
}

export default Component1;
