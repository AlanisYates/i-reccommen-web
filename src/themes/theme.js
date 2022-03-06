import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const MyTheme = createTheme({
  palette: {
    background: {
      main: "#99D6EA",
      other: "#FFE281",
      mainDark: "#242038",
      otherDark: "#8D86C9",
    },
    primary: {
      // Purple and green play nicely together.
      main: "#00000",
    },
    secondary: {
      // This is green.A700 as hex.
      main: red[200],
    },
  },
});

MyTheme.typography.h1 = {
  fontSize: "2.1rem",
  fontFamily: "karla",
  "@media (min-width:600px)": {
    fontSize: "4rem",
  },
  [MyTheme.breakpoints.up("md")]: {
    fontSize: "5rem",
  },
};

MyTheme.typography.h6 = {
  fontFamily: "karla",
  fontWeight: 500,
  fontSize: ".9rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  [MyTheme.breakpoints.up("md")]: {
    fontSize: "1.3rem",
  },
};
