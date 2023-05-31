import { useState } from "react";
import UserContext from "../context/UserContext";

const UserProvider = ({ children }) => {
  const [user, set] = useState(null);
  const access = function (username, pasword) {
    fetch()
      .then((respuesta) => respuesta.json())
      .then((usuarios) => {
        // verifico al usuario

        return set({ username });
      })
      .catch((error) => console.error(error));
  };
  const save = function (username, pasword) {
    fetch(url, {});
  };
  return (
    <UserContext.Provider value={{ user, set, access, save }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
