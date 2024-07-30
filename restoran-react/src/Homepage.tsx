import React from "react";
import Navbar from "./components/navbar/navbar";
import BackgroundDiv from "./components/backgroundDiv/bgDiv";
import "./index.css";
import CardInfo from "./components/cards/CardInfo";
import { Stack } from "@mui/material";
import img1 from "./assets/man.svg";
import img2 from "./assets/fork.svg";
import img3 from "./assets/health.svg";
import img4 from "./assets/service.svg";
import GridDiv from "./components/gridDiv/gridDiv";
import MenuDiv from "./components/menu/menuDiv";

const para =
  "Diam elitr kasd sed at elitr sed ipsum justo dolor sedclita amet diam";
const Homepage = () => {
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <BackgroundDiv></BackgroundDiv>
      </div>
      <div className="card-div" style={{}}>
        <Stack
          direction="row"
          spacing={5}
          justifyContent={"space-between"}
          sx={{ width: "100%" }}
        >
          <CardInfo
            imageUrl={img1}
            heading="Master Chefs"
            paragraph={para}
            className="orange-filter"
            variant="orange"
          ></CardInfo>
          <CardInfo
            imageUrl={img2}
            heading="Quality Food"
            paragraph={para}
          ></CardInfo>
          <CardInfo
            imageUrl={img3}
            heading="Online Order"
            paragraph={para}
          ></CardInfo>
          <CardInfo
            imageUrl={img4}
            heading="24/7 Service"
            paragraph={para}
          ></CardInfo>
        </Stack>
      </div>
      <div className="grid-div">
        <GridDiv></GridDiv>
      </div>
      <div className="menu-div">
        <MenuDiv>
        </MenuDiv>
      </div>
    </>
  );
};

export default Homepage;
