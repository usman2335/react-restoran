import React from "react";
import "./bgDiv.css";
import { Button, Typography } from "@mui/material";
import hero from "../../assets/hero.png";

const BackgroundDiv = () => {
  return (
    <div className="parent-div">
      <div className="content-container">
        <div className="leftdiv">
          <Typography
            variant="h2"
            sx={{ fontWeight: "800", lineHeight: "93px" }}
          >
            Enjoy Our<br></br> Delicious Meal
          </Typography>
          <Typography variant="subtitle1">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </Typography>
          <Button
            variant="contained"
            style={{ width: "180px", height: "50px" }}
          >
            Book A Table
          </Button>
        </div>
        <div className="rightdiv">
          <img src={hero} className="heroimg"></img>
        </div>
      </div>
    </div>
  );
};

export default BackgroundDiv;
