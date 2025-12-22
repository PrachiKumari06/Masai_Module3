import Comp3 from "./Comp3";

export default function Comp2(props) {
  return (
    <div>
      <h3>Component 2</h3>
      <Comp3
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
