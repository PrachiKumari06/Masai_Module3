import React from 'react'
import Comp2 from './Comp2'

export default function Comp1() {
const a = "Apple";
  const b = "Ball";
  const c = "Cat";
  const d = "Dog";
  const e = "Elephant";
  const f = "Fish";

  return (
    <div>
      <h3>Component 1</h3>
      <Comp2 a={a} b={b} c={c} d={d} e={e} f={f} />
    </div>
  );
}
