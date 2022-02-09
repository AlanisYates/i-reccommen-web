import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { getAllPlaces } from "../../../_services/PlaceService/PlaceApi";

export const Submit = () => {
  const [apiData, setApiData] = useState({});
  useEffect(async () => {
    const allPlaces = await getAllPlaces();
    setApiData(allPlaces.recommendations);
  }, []);

  const logData = () => {
    console.log(apiData);
  };
  return (
    <Box>
      <Typography variant="h1">Submit Page</Typography>
      <Button color="success" variant="contained" onClick={logData}>
        Log Data from ApI
      </Button>
    </Box>
  );
};
