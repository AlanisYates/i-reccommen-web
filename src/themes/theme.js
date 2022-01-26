import { createTheme } from "@mui/material";
import { purple, red, b } from "@mui/material/colors";

export const MyTheme = createTheme({
  palette: {
    background: {
      main: "#99D6EA",
    },
    primary: {
      // Purple and green play nicely together.
      main: '#000000',
    },
    secondary: {
      // This is green.A700 as hex.
      main: red[200],
    },
  },
});
