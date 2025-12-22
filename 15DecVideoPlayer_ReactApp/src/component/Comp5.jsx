import Comp6 from "./Comp6";

export default function Comp5({ e, f }) {
  return (
    <div>
      <h3>Component 5</h3>
      <h4>This is prop f: {f}</h4>

      <Comp6 e={e} />
    </div>
  );
}
