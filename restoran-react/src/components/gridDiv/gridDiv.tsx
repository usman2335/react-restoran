import "./gridDiv.css";
import img1 from "../../assets/about-1.png";
import img2 from "../../assets/about-2.png";
import img3 from "../../assets/about-3.png";
import img4 from "../../assets/about-4.png";
import fork from "../../assets/fork.svg";
import { Button } from "@mui/material";

const GridDiv = () => {
  return (
    <div className="grid-container">
      <div className="grid-left">
        <div className="upperimgs">
          <img src={img1} className="boximgs"></img>
          <img src={img2} className="smallimgs"></img>
        </div>
        <div className="lowerimgs">
          <img src={img3} className="smallimgs"></img>
          <img src={img4} className="boximgs"></img>
        </div>
      </div>
      <div className="grid-right">
        <h5 className="pacificoheading">
          About Us <div className="hline"></div>
        </h5>
        <h1>
          Welcome to <img src={fork}></img> Restoran
        </h1>
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          <br></br>
          diam ametdiam et eos erat ipsum et lorem et sit, sed stet lorem sit.
        </p>
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          <br></br>
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          <br></br>
          lorem sit clita duo justo magna dolore erat amet.
        </p>
        <div className="thirteenfifty">
          <h1 style={{ color: "#FEA116" }}>13</h1>
          <p>
            {" "}
            Years of <br></br>
            <strong style={{ color: "#0F172B" }}>EXPERIENCE</strong>
          </p>
          <h1 style={{ color: "#FEA116" }}>50</h1>
          <p>
            Popular<br></br>{" "}
            <strong style={{ color: "#0F172B" }}>MASTER CHEFS</strong>
          </p>
        </div>
        <Button variant="contained" style={{ width: "160px", height: "100px" }}>
          Read More
        </Button>
      </div>
    </div>
  );
};

export default GridDiv;
