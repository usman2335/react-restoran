import React from "react";
import Navbar from "./components/navbar/navbar";
import BackgroundDiv from "./components/backgroundDiv/bgDiv";
import "./index.css";

const Homepage = () => {
  return (
    <div className="container">
      <Navbar></Navbar>
      <BackgroundDiv></BackgroundDiv>
    </div>
  );
};

export default Homepage;
