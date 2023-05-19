const Minombre = ({ usuario }) => (
  <>{usuario ? <h2>Hola soy {usuario}</h2> : <h2>No hay usuario</h2>}</>
);
export default Minombre;
