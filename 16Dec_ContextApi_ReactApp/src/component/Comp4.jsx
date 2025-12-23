import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Comp5 from "./Comp5";

const Comp4 = () => {
  const { c, d } = useContext(AppContext);

  return (
    <>
      <h4>This is prop c: {c}</h4>
      <h4>This is prop d: {d}</h4>
      <Comp5 />
    </>
  );
};

export default Comp4;
