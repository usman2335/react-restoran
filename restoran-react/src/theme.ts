import { createTheme } from "@mui/material/styles";
import { orange, green, yellow } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FEA116",
    },
    secondary: {
      main: green[500],
    },
    text: {
      primary: green[50], // Custom primary text color
      secondary: "#555555", // Custom secondary text color
      // disabled: grey[500], // Custom disabled text color
    },
  },

  typography: {
    fontFamily: "poppins, sans-serif",
    
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          color: "white",
          borderRadius: "2px",
          fontWeight: "400",
          fontSize: "15px",
        },
      },
    },
  },
});

export default theme;
