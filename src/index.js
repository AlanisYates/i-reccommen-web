import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { MyTheme } from "./themes/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={MyTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
