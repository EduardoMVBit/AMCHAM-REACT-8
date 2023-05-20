import React, { useState } from "react";

const Estado = () => {
  const [mostrar, cambiar] = useState(false);
  const saludar = () => cambiar(!mostrar);
  return (
    <>
      {mostrar ? <p>Mensaje</p> : null}
      <a
        onClick={(ev) => {
          ev.preventDefault();
          saludar();
        }}
      >
        MOSTRAR
      </a>
    </>
  );
};

export default Estado;

// Hooks atajos de utilidades 16.8
/*

Componente State Full
Componente State Less

class App extend Component(){
  constructor(){
    this.state = {
      contador:0
    }
  }
  function incrementar(){
    setState({contador: contador + 1})
  }
    function decrementar(){
    setState({contador: contador - 1})
  }
  render(){
    return <Fragment><button onClick={incrementar}>+<button><button onClick={decrementar}>-<button><span>{this.state.contador}</span></Fragment>
  }
}

*/
