import { useState } from "react";
import Life from "./Life";
import Api from "./Api";

const App = () => {
  //const [show, update] = useState(true);
  return (
    <>
      <Api />
    </>
  );
};
export default App;

/*

{show ? <Life visible={show} /> : null}{" "}
      <button type="button" onClick={() => update(!show)}>
        {show ? "Hide" : "Show"}
      </button>

*/
