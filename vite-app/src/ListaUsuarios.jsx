import { useState, useEffect } from "react";

const ListaUsuarios = () => {
  let [usuarios, actualizar] = useState([]);
  useEffect(() => {
    const obtener = () => {
      fetch("https://646d4e359c677e232189e67c.mockapi.io/users")
        .then((respuesta) => respuesta.json())
        .then((data) => actualizar(data))
        .catch((error) => console.error("Error", error));
    };
    obtener();
    return () => {
      actualizar([]);
    };
  }, []);
  const agregar = (evento) => {
    evento.preventDefault();
    const { name, email } = evento.target.elements;
    fetch("https://646d4e359c677e232189e67c.mockapi.io/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", //multipart/form-data
      },
      body: JSON.stringify({ name: name.value, email: email.value }), // FormData()
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        actualizar([...usuarios, data]);
        evento.target.reset();
      })
      .catch((error) => console.error("Error", error));
  };
  const eleminar = (evento) => {
    evento.preventDefault();
    const { id } = evento.target.elements;
    fetch(`https://646d4e359c677e232189e67c.mockapi.io/users/${id.value}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json", //multipart/form-data
      },
      body: JSON.stringify({ id: id.value }), // FormData()
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        actualizar([...usuarios].filter((usuario) => usuario.id != id.value));
        evento.target.reset();
      })
      .catch((error) => console.error("Error", error));
  };
  return (
    <>
      <form action="#" onSubmit={agregar}>
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="email" name="email" id="email" placeholder="Email" />
        <button type="submit">Agregar</button>
      </form>
      {usuarios.length == 0 ? (
        <h2>No hay usuarios</h2>
      ) : (
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>
              {usuario.name}: <span>{String(usuario.email).toLowerCase()}</span>
              <form action="#" onSubmit={eleminar}>
                <input type="hidden" name="id" value={usuario.id} />
                <button type="submit">borrar</button>
              </form>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListaUsuarios;
