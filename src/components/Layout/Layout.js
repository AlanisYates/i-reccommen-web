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
    <Box>
      <Typography variant="h1" fontWeight="bold">
        i-recommend.io
      </Typography>
      {/* <Typography variant="h5" gutterBottom>
        Recommendations.....
        <Typography variant="h5" display="inline" fontWeight={500}>
        simplified
        </Typography>
    </Typography> */}
      <Typography variant="h4" fontWeight="regular" color="primary">
        Comming Soon!
      </Typography>
    </Box>
  </Box>
);
