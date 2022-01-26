import { createTheme } from "@mui/material";
import {red} from "@mui/material/colors";

export const MyTheme = createTheme({
  palette: {
    background: {
      main: "#99D6EA",
    },
    primary: {
      // Purple and green play nicely together.
      main: '#00000',
    },
    secondary: {
      // This is green.A700 as hex.
      main: red[200],
    },
  },
});
