import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Comp4 from "./Comp4";

const Comp3 = () => {
  const { a, b } = useContext(AppContext);

  return (
    <>
      <h4>This is prop a: {a}</h4>
      <h4>This is prop b: {b}</h4>
      <Comp4 />
    </>
  );
};

export default Comp3;
