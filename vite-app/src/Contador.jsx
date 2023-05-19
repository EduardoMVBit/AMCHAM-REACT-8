import React, { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  return (
    <form action="#">
      <button
        type="button"
        onClick={(evento) => {
          incrementar();
        }}
      >
        +
      </button>
      <span>{contador}</span>
      <button
        type="button"
        onClick={(ev) => {
          decrementar();
        }}
      >
        -
      </button>
    </form>
  );
};

export default Contador;

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
