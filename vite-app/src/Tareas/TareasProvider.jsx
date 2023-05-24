import { useState } from "react";
import TareasContext from "./TareasContext";
const TareasProvider = ({ children }) => {
  let [tareas, actualizar] = useState([
    { id: 1, name: "Primer Contexto", area: "dev", end: false },
  ]);
  const agregar = (name, area) => {
    actualizar([
      ...tareas,
      {
        id: tareas.length >= 1 ? tareas[tareas.length - 1].id + 1 : 1,
        name: name,
        area: area,
        end: false,
      },
    ]);
  };
  const finalizar = (id) => {
    actualizar(
      [...tareas].map((tarea) =>
        tarea.id == id ? { ...tarea, end: !tarea.end } : tarea
      )
    );
  };
  return (
    <TareasContext.Provider value={{ tareas, agregar, finalizar }}>
      {children}
    </TareasContext.Provider>
  );
};

export default TareasProvider;
