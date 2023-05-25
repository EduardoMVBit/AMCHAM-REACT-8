import React from "react";
import TareasFormulario from "./TareasFormulario";
import TareasLista from "./TareasLista";
import TareasProvider from "./TareasProvider";
import Navbar from "../Navbar";

const AppTareas = () => {
  return (
    <>
      <TareasProvider>
        <TareasFormulario />
        <TareasLista />
      </TareasProvider>
    </>
  );
};

export default AppTareas;
