import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const [user, access] = useState({ user: "lucas" });
  const nav = useNavigate();
  useEffect(() => {
    if (!user) {
      return nav("/login");
    }
  }, [user]);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
