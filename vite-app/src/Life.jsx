import { useEffect, useState } from "react";

const Life = ({ visible }) => {
  /*
  useEffect(() => {
    console.log("Montaje");
    return () => {
      console.log("Desmontaje");
    };
  }, []);
  */
  useEffect(() => {
    console.log("Actualización");
    return () => {
      console.log("Desmontaje");
    };
  }, [visible]);
  return <div>Life</div>;
};

export default Life;

/*
  Life Cycle
  Stage 01 Montaje WillMount, render (cuando se muestra el componente)
  Stage 02 Actualización WillUpdate DidUpdate (cuando se actualiza, props,state)
  Stage 03 Desmontaje WillUnmount DidUnmount (cuando se deja de visualizar el componente)
*/
