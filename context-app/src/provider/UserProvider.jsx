import React, { useState } from "react";
import UserContext from "../context/UserContext";

const UserProvider = ({ children }) => {
  const usuarios = [
    { name: "Eduardo", correo: "correo@gmail.com", password: "password" },
  ];
  const [user, setUser] = useState(null);
  const [userError, setUserError] = useState(null);
  const [userSuccess, setUserSuccess] = useState(null);
  const login = (email, password) => {
    fetch("https://646d4e359c677e232189e67c.mockapi.io/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "Eduardo", email: "" }, null, 2),
    })
      .then((respuesta) => respuesta.json())
      .then((usuarios) => {
        let encontrado = usuarios.find((usuario) => usuario.email == email);
        if (!encontrado) {
          setUser(null);
          setUserError("usuario no encontrado");
          setUserSuccess(null);
          return false;
        }

        if (encontrado.password != password) {
          setUser(null);
          setUserError("clave no coincide");
          setUserSuccess(null);
          return false;
        }

        setUser(encontrado);
        setUserError(null);
        setUserSuccess("Bienvenido");
        return true;
      })
      .catch((error) => {
        setUser(null);
        setUserError(error.msg);
        setUserSuccess(null);
        return error;
      });
  };

  const loginAsync = async (email, password) => {
    try {
      const consulta = await fetch(
        "https://646d4e359c677e232189e67c.mockapi.io/users"
      );
      const usuarios = await consulta.json();
      let encontrado = usuarios.find((usuario) => usuario.email == email);
      if (!encontrado) {
        setUser(null);
        setUserError("usuario no encontrado");
        setUserSuccess(null);
        return false;
      }

      if (encontrado.password != password) {
        setUser(null);
        setUserError("clave no coincide");
        setUserSuccess(null);
        return false;
      }

      setUser(encontrado);
      setUserError(null);
      setUserSuccess("Bienvenido");
      return true;
    } catch (error) {
      setUser(null);
      setUserError(error);
      setUserSuccess(null);
      return error;
    }
  };
  return (
    <UserContext.Provider
      value={{ user, userError, login, usuarios, userSuccess }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
