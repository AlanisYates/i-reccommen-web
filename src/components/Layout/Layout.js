import { Box, Button, Divider, Typography } from "@mui/material";

export const Layout = () => (
  <Box
    sx={{
      display: "flex",
      width: "100%",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "background.main",
      color: "text.primary",
      borderRadius: 1,
      p: 3,
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
