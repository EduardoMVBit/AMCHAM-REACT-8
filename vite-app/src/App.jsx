import { useState } from "react";

const App = () => {
  const [contador, actualizarContador] = useState(0);
  const [menu, mostarMenu] = useState(true);
  const incrementar = () => actualizarContador(contador + 1);
  const decrementar = () => actualizarContador(contador - 1);
  return (
    <>
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

      <nav>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            mostarMenu(!menu);
          }}
        ></a>
      </nav>
      {!menu ? null : (
        <nav className={`${AppStyle.menu}`}>
          <a href=""></a>
        </nav>
      )}
    </>
  );
};
export default App;
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
