import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Comp6 = () => {
  const { e } = useContext(AppContext);

  return <h4>This is prop e: {e}</h4>;
};

export default Comp6;
