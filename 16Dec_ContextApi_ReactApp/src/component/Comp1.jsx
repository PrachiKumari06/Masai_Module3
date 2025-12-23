import React from 'react'
import Comp2 from './Comp2'
import { AppContext } from '../context/AppContext';


export default function Comp1() {
   const data = {
    a: "Apple",
    b: "Ball",
    c: "Cat",
    d: "Dog",
    e: "Elephant",
    f: "Fish",
  };
  return (
    <AppContext.Provider value={data}>
      <Comp2 />
    </AppContext.Provider>
  )
}
