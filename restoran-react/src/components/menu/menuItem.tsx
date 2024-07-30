import React from "react";
import "./menuItem.css"
interface props{
    imageUrl : string,
    name: string,
    description: string,
    price: string
}
const MenuItem = ({ imageUrl, name, description, price }: props) => {
  return (
    <div className = "menuitems menuitemfont">
      <div className="itemcontainer">
        <img src={imageUrl}></img>
        <div className="itemname">
          <h2>{name}</h2>
          <hr></hr>
          <p>{description}</p>
        </div>
        <h2 style={{ color: "#FEA116" }}>{price}</h2>
      </div>
    </div>
  );
};

export default MenuItem;
