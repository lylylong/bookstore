import React from "react";
import { Navbar } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="App-header justify-content-center"
      >
        <Navbar.Brand href="/">Book Store</Navbar.Brand>
      </Navbar>
    </>
  );
};

export default AppNavbar;
