import { Box } from "@mui/material";

export const Layout = ({ children }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      height: "100%",
    }}
  >
    {children}
  </Box>
);
