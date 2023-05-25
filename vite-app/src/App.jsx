import { useState } from "react";
import Life from "./Life";
import Api from "./Api";
import ListaTareas from "./ListaTareas";
import ListaUsuarios from "./ListaUsuarios";
import AppTareas from "./Tareas/AppTareas";

const App = () => {
  const [show, update] = useState("home");
  return (
    <>
      <nav>
        <a
          href="home"
          onClick={(e) => {
            e.preventDefault();
            update(e.target.href);
          }}
        >
          Home
        </a>
      </nav>
      {show && show == "/" ? <AppTareas /> : null}
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
