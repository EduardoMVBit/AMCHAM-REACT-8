import EstiloListado from "./styles/Listado.module.css";
const Listado = ({ children, inverted }) => (
  <ul
    className={`${EstiloListado["lista"]} ${
      inverted ? EstiloListado["invertida"] : ""
    }`}
  >
    {children}
  </ul>
);
export default Listado;
