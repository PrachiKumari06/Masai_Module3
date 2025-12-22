import Comp5 from "./Comp5";

export default function Comp4({ c, d, e, f }) {
  return (
    <div>
      <h3>Comp 4</h3>
      <h4>This is prop c: {c}</h4>
      <h4>This is prop d: {d}</h4>

      <Comp5 e={e} f={f} />
    </div>
  );
}
