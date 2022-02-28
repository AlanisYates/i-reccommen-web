import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const ComingSoon = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Box >
        <Typography variant="h1">
          i-recommend.io
        </Typography>
      </Box>
      <Box pb={4}>
        <Typography variant="h6">
          The <strong>simple</strong> way to recommend places to your friends!
        </Typography>
      </Box>
      <Box bgcolor="white" p={2} sx={{ borderRadius: 30, width: "50%" }}>
        <Typography variant="h4">Coming Soon!</Typography>
      </Box>
    </Box>
  );
};
