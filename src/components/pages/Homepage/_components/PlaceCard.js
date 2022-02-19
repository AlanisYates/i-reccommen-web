import {
  Box,
  Card,
  Typography,
  CardContent,
  Stack,
  Button,
  Link,
  CardHeader,
  TextField,
} from "@mui/material";
import { useState } from "react";
export const PlaceCard = ({ placeData, handleNotes }) => {
  const [testPhotos, setTestPhotos] = useState([]);
  const [notes, setNotes] = useState("");

  const logData = () => {
    let photos = [];

    // Get the first three photos from google
    const photoList = placeData.photos.slice(0, 3);
    photoList.forEach((photo) => photos.push(photo.getUrl()));
    console.log(photoList);
    console.log(notes);
  };
  return (
    <Card sx={{ width: "100%" }}>
      <Box sx={{ display: "flex" }}>
        <CardContent sx={{ flex: "3 0" }}>
          <Box
            sx={{
              textAlign: "start",
              pb: 3,
            }}
          >
            <Typography variant="h3">{placeData?.name}</Typography>
            <Typography variant="subtitle">{placeData?.address}</Typography>
          </Box>
          <Stack direction="column" spacing={3}>
            <Box>
              <TextField
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
                multiline
                fullWidth
                label="notes"
                rows={3}
              />
            </Box>
            <Button
              href={placeData.website}
              variant="contained"
              color="success"
              target="blank"
            >
              View On maps
            </Button>
            {/* <Button
              onClick={logData}
              variant="contained"
              color="success"
              target="blank"
            >
              Add Notes
            </Button> */}
          </Stack>
        </CardContent>
      </Box>
    </Card>
    // {/* <Stack direction="row">
    //   {testPhotos.map((image, index) => (
    //     <img src={image} style={{ width: "150px" }} key={index} />
    //   ))}
    // </Stack> */}
  );
};
