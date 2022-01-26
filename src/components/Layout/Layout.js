import { Box, Typography } from "@mui/material";

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" fontWeight="bold">
        i-recommend.io
      </Typography>
      <Typography variant="h6" fontWeight="light" pb={6}>
        A{" "}
        <Typography variant="h6" fontWeight="bold" display="inline">
          simple
        </Typography>{" "}
        way to recommend places to your friends!
      </Typography>
      <Box
        sx={{
          py: 2,
          bgcolor: "white",
          borderRadius: "2rem",
          width: "70%",
        }}
      >
        <Typography variant="h4" fontWeight="medium">
          Coming Soon!
        </Typography>
      </Box>
    </Box>
  </Box>
);
