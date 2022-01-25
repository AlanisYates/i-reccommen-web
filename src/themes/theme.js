import { createTheme } from "@mui/material";
import { purple, red } from "@mui/material/colors";

export const MyTheme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: red[200],
    },
  },
});
