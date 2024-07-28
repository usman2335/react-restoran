import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Stack,
} from "@mui/material";
import img1 from "../../assets/man.svg";

const CardInfo = () => {
  return (
    <Card
      sx={{
        color: "black",
        width: "263px",
        height: "256px",
        backgroundColor: "black",
        borderRadius: "2px",
      }}
    >
      <CardContent sx={{ marginTop: "10px" }}>
        <Stack spacing={2.9}>
          <Box sx={{ width: "40px", height: "40px" }}>
            <CardMedia component="img" image={img1}></CardMedia>
          </Box>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontSize: "20px", fontWeight: "700" }}
          >
            Master Chefs
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontSize: "16px", fontWeight: "400" }}
            gutterBottom
          >
            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
            diam
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardInfo;
