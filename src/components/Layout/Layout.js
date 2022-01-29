import { Box } from "@mui/material";
import { Homepage } from "../pages/Homepage/Homepage";

export const Layout = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      height: "100%",
    }}
  >
    <Homepage />
  </Box>
);
