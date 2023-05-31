import { useContext } from "react";
import UserContext from "../context/UserContext";

const List = () => {
  const { usuarios } = useContext(UserContext);
  return (
    <ul>
      {usuarios.map((usuario, index) => (
        <li key={index}>{usuario.correo}</li>
      ))}
    </ul>
  );
};

export default List;
