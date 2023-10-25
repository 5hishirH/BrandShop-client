import React, { useEffect, useState } from "react";
import Navbar from "../Components/Header/Navbar";
import { Outlet } from "react-router-dom";
import { useAuthContext } from "../AuthProvider";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
