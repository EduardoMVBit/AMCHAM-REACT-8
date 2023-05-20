import { useState } from "react";
import TareaStyle from "./styles/Tareas.module.css";
const ListaTareas = () => {
  let [tareas, actualizar] = useState([]);
  const agregar = (e) => {
    e.preventDefault();
    let { name, area } = e.target.elements;
    actualizar([
      ...tareas,
      {
        id: tareas.length >= 1 ? tareas[tareas.length - 1].id + 1 : 1,
        name: name.value,
        area: area.value,
        end: false,
      },
    ]);
    e.target.reset();
  };
  const finalizar = (e) => {
    e.preventDefault();
    let { id } = e.target.elements;
    actualizar(
      [...tareas].map((tarea) =>
        tarea.id == id.value ? { ...tarea, end: !tarea.end } : tarea
      )
    );
  };
  return (
    <>
      <form onSubmit={agregar} className={TareaStyle.add}>
        <input type="text" name="name" id="name" placeholder="Ingresar Tarea" />{" "}
        <select name="area" id="area">
          <option value="admin">admin</option>
          <option value="tech">tech</option>
          <option value="dev">dev</option>
        </select>
        <button>agregar</button>
      </form>
      <ul className={TareaStyle.list}>
        {tareas.map((tarea) => (
          <li key={tarea.id} className={tarea.end ? TareaStyle.complete : null}>
            <h2>{tarea.area}</h2>
            <p>{tarea.name}</p>
            <form action="#" onSubmit={finalizar}>
              <input type="hidden" name="id" value={tarea.id} />
              <button>{!tarea.end ? "Finalizar" : "Reanudar"}</button>
            </form>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListaTareas;
