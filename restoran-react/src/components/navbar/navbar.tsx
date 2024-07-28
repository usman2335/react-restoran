import React from "react";
import "./navbar.css";
import { Button, Stack } from "@mui/material";
import BookButton from "../book-btn/BookButton";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img src={logo} className="logo"></img>
        <Stack direction={"row"} spacing={2} className="navbar-right">
          <Button variant="text" className="button">
            HOME
          </Button>
          <Button variant="text" className="button">
            CONTACT
          </Button>
          <Button variant="contained" style={{ width: "160px" }}>
            Book A Table
          </Button>
        </Stack>
      </div>
    </nav>
  );
};

export default Navbar;
