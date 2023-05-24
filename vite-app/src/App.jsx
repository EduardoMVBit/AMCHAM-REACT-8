import { useState } from "react";
import Life from "./Life";
import Api from "./Api";
import ListaTareas from "./ListaTareas";
import ListaUsuarios from "./ListaUsuarios";
import AppTareas from "./Tareas/AppTareas";

const App = () => {
  //const [show, update] = useState(true);
  return (
    <>
      <AppTareas />
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
