import React, { useContext } from "react";
import TareasContext from "./TareasContext";

const TareasLista = () => {
  const { tareas, finalizar } = useContext(TareasContext);
  const completar = (e) => {
    e.preventDefault();
    let { id } = e.target.elements;
    finalizar(id.value);
    e.target.reset();
  };
  return (
    <>
      {tareas.length == 0 ? (
        <h2>No hay tareas</h2>
      ) : (
        <ul>
          {tareas.map((tarea) => (
            <li key={tarea.id}>
              <h2>{tarea.area}</h2>
              <p>{tarea.name}</p>
              <form action="#" onSubmit={completar}>
                <input type="hidden" name="id" value={tarea.id} />
                <button>{!tarea.end ? "Finalizar" : "Reanudar"}</button>
              </form>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TareasLista;
