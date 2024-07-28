import React from "react";
import Navbar from "./components/navbar/navbar";
import BackgroundDiv from "./components/backgroundDiv/bgDiv";
import "./index.css";
import CardInfo from "./components/cards/CardInfo";
import { Stack } from "@mui/material";

const Homepage = () => {
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <BackgroundDiv></BackgroundDiv>
      </div>
      <div className="card-div" style={{}}>
        <Stack direction="row" spacing={3} justifyContent={"center"}>
          <CardInfo></CardInfo>
          <CardInfo></CardInfo>
          <CardInfo></CardInfo>
          <CardInfo></CardInfo>
        </Stack>
      </div>
    </>
  );
};

export default Homepage;
