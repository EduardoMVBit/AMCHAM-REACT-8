import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/tareas">Tareas</Link>
      <Link to="/api">API</Link>
      <Link to="/usuarios">Usuarios</Link>
    </nav>
  );
};

export default Navbar;
