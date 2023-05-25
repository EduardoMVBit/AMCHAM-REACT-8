import { createBrowserRouter } from "react-router-dom";
import AppTareas from "./Tareas/AppTareas";
import Api from "./Api";
import ListaUsuarios from "./ListaUsuarios";
import Layout from "./Layout";
import Login from "./Login";

const Router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/tareas",
        element: <AppTareas />,
      },
      {
        path: "/api",
        element: <Api />,
      },
      {
        path: "/usuarios",
        element: <ListaUsuarios />,
      },
    ],
  },
]);

export default Router;
