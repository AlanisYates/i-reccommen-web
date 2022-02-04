import {
  Box,
  Card,
  Typography,
  CardContent,
  Stack,
  Button,
  Link,
} from "@mui/material";
import { useState } from "react";
export const PlaceCard = ({ placeData }) => {
  const [testPhotos, setTestPhotos] = useState([]);

  // const getPhotos = (photoArray, number) => {
  //   return photoArray.slice(-number).forEach((photo) => photo.getUrl());
  // };
  const logData = () => {
    let photos = [];
    const photoList = placeData.photos.slice(0, 3);
    photoList.forEach((photo) => photos.push(photo.getUrl()));
    //  placeData.photos.forEach((photo) => {photos.push(photo.getUrl())})
    // const firstPhoto = getPhotos(placeData.photos, 3)

    // console.log(firstPhoto);
    setTestPhotos(photos);
  };
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
              <Button
                onClick={logData}
                variant="contained"
                color="success"
                target="blank"
              >
                Log Data
              </Button>
            </Box>
          </CardContent>
        </Box>
      </Card>
      <Stack direction="verticle">
        {testPhotos.map((image, index) => (
          <img src={image} style={{ width: "150px" }} key={index} />
        ))}
      </Stack>
    </>
  );
};
