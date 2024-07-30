import React from "react";
import "../gridDiv/gridDiv.css";
import "./menuDiv.css"
import { Box, Tab, Tabs, Typography } from "@mui/material";
import img2 from "../../assets/burger.svg"
import img1 from "../../assets/cup.svg"
import img3 from "../../assets/forksmall.svg"
import MenuItem from "./menuItem";
import { menuData } from "./menuData";


  
const MenuDiv = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };
      const currentMenu = value === 0 ? menuData.breakfast : value === 1 ? menuData.lunch : menuData.dinner;
    
  return (
    <div className="menu-container">
      <div className = "heading-div">
      <h5 className="pacificoheading">
      <div className="hline"></div> Food Menu <div className="hline"></div>
      </h5>
      
      <Typography variant="h3" sx = {{color: "black",  fontWeight: "700", fontSize:"40px"}}>Most Popular Items</Typography>
      </div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value}
          onChange={handleChange}>
        <Tab label = {<div className = "tab-container"><img src = {img1}></img><div className = "tab-textcontainer">Popular <strong>Breakfast</strong></div></div>}></Tab>
        <Tab label = {<div className = "tab-container"><img src = {img2}></img><div className = "tab-textcontainer">Special <strong>Lunch</strong></div></div>}></Tab>
        <Tab label = {<div className = "tab-container"><img src = {img3}></img><div className = "tab-textcontainer">Lovely <strong>Dinner</strong></div></div>}></Tab>
      </Tabs>
      </Box>
      <Box className = "menu-itemscontainer">
      {currentMenu.map(item => (
          <MenuItem
            key={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </Box>
      
    </div>
  );
};

export default MenuDiv;
