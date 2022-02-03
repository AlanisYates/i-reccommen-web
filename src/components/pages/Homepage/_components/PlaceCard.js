import {
  Box,
  Card,
  Typography,
  CardContent,
  Stack,
  Button,
  Link,
} from "@mui/material";

export const PlaceCard = ({ placeData }) => {
  return (
    <>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex" }}>
          <CardContent sx={{ flex: "3 0" }}>
            <Box
              sx={{
                textAlign: "left",
                pb: 2,
              }}
            >
              <Typography variant="h3">{placeData?.name}</Typography>
              <Typography variant="subtitle">{placeData?.address}</Typography>
            </Box>
            <Box>
              <Button
                href={placeData.url}
                variant="contained"
                color="success"
                target="blank"
              >
                View On maps
              </Button>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};
