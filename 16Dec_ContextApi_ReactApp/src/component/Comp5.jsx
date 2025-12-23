import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Comp6 from "./Comp6";

const Comp5 = () => {
  const { f } = useContext(AppContext);

  return (
    <>
      <h4>This is prop f: {f}</h4>
      <Comp6 />
    </>
  );
};

export default Comp5;
