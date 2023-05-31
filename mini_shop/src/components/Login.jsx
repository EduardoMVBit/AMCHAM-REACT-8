import React from "react";
import useValidate from "../hooks/useValidate";

const Login = () => {
  const { userError, userErrorMsg, setCondition } =
    useValidate("Usuario incorrecto");
  return (
    <form
      onSubmit={() => {
        if (!errors) {
          fetch();
        }
      }}
    >
      <input type="text" placeholder="usuario" id="usuario" name="usuario" />
      <input type="password" placeholder="contraseña" name="clave" id="clave" />
    </form>
  );
};

export default Login;
