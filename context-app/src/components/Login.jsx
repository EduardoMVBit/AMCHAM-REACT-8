import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const { login, userError, user, userSuccess } = useContext(UserContext);
  const enviar = (evento) => {
    evento.preventDefault();
    const { email, password } = evento.target.elements;
    console.log(email.value, password.value);
    login(email.value, password.value);
    if (user) {
      // redireccion
    }
  };
  return (
    <>
      <form action="#" onSubmit={enviar}>
        <input type="email" name="email" id="email" placeholder="Correo" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Clave"
        />
        <button type="submit">Enviar</button>
      </form>
      {userError ? (
        <p>{userError}</p>
      ) : userSuccess ? (
        <p>{userSuccess}</p>
      ) : null}
    </>
  );
};

export default Login;
