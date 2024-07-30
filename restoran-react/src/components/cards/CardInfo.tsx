import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Stack,
} from "@mui/material";
import "./CardInfo.css"


interface Props {
  imageUrl: string; // Type for imageUrl
  heading: string;  // Type for heading
  paragraph: string; // Type for paragraph
  className? : string;
  variant?: string
}
const CardInfo = ({imageUrl, heading, paragraph, className, variant} : Props) => {
  const cardClass = variant ==='orange' ? 'card card-orange' : 'card card-white'
  return (
    <Card
    className={cardClass}
      sx={{
        width: "263px",
        height: "256px",
        borderRadius: "2px",
        transition: "0.1s ease",
      }}
    >
      <CardContent sx={{ marginTop: "10px" }}>
        <Stack spacing={2.9}>
          <Box sx={{ width: "40px", height: "40px" }}>
            <CardMedia component="img" image={imageUrl} className = {`${className} card-media`}></CardMedia>
          </Box>
          <Typography
            variant="h5"
            gutterBottom
            className="card-text" 
            sx={{ fontSize: "20px", fontWeight: "700" ,color: "#0F172B" }}
          >
           {heading}
          </Typography>
          <Typography
            variant="subtitle2"
            className="card-text" 
            sx={{ fontSize: "16px", fontWeight: "400" , color: "#666565"}}
            gutterBottom
          >
            {paragraph}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardInfo;
