import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <div>Topbar</div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
