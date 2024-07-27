import React from "react";
import "./navbar.css";
import { Button, Stack } from "@mui/material";
import BookButton from "../book-btn/BookButton";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} className="logo"></img>
      <Stack direction={"row"} spacing={2} className="navbar-right">
        <Button variant="text" className="button">
          HOME
        </Button>
        <Button variant="text" className="button">
          CONTACT
        </Button>
        <Button variant="contained" style={{ width: "130px" }}>
          Book A Table
        </Button>
      </Stack>
    </div>
  );
};

export default Navbar;
