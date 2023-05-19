import SeccionStyle from "./styles/Seccion.module.css";
const Seccion = ({ titulo, children }) => (
  <section className={`${SeccionStyle["container"]}`}>
    <h2>{titulo}</h2>
    {children}
  </section>
);
export default Seccion;
