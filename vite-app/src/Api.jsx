import { useState, useEffect } from "react";

const Api = () => {
  let [data, set] = useState([]);
  useEffect(() => {
    const obtener = () => {
      return fetch(
        "https://bobsburgers-api.herokuapp.com/characters?sortBy=id&OrderBy=desc&limit=4&skip=0"
      )
        .then((respuesta) => respuesta.json())
        .then((datos) => set(datos))
        .catch((error) => console.error(error));
    };
    obtener();
    return () => set([]);
  }, []);
  return (
    <ul>
      {data.map((personaje) => (
        <li key={personaje.id}>
          <h2>{personaje.name}</h2>
          <picture>
            <img
              src={personaje.image}
              alt={`Image from character ${personaje.name}`}
            />
          </picture>
        </li>
      ))}
    </ul>
  );
};

export default Api;
