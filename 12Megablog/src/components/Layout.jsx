import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from ".";

function Layout(props) {
  return (
    <>
      
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
