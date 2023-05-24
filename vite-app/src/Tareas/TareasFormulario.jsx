import React, { useContext } from "react";
import TareasContext from "./TareasContext";

const TareasFormulario = () => {
  const { agregar } = useContext(TareasContext);
  const nueva = (e) => {
    e.preventDefault();
    let { name, area } = e.target.elements;
    agregar(name.value, area.value);
    e.target.reset();
  };
  return (
    <form onSubmit={nueva}>
      <input type="text" name="name" id="name" placeholder="Ingresar Tarea" />
      <select name="area" id="area">
        <option value="admin">admin</option>
        <option value="tech">tech</option>
        <option value="dev">dev</option>
      </select>
      <button>agregar</button>
    </form>
  );
};

export default TareasFormulario;
