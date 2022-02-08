import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { getPlace } from "../../../_services/PlaceService/PlaceApi";

export const Submit = () => {
    const [apiData, setApiData] = useState({})
  useEffect(async () => {
     await axios.get('http://localhost:3000/recs').then((response) => {
        setApiData(response.data)
      });
    
  }, []);

  const logData = () => {
      console.log(apiData);
  }
  return (
    <Box>
      <Typography variant="h1">Submit Page</Typography>
      <Button color="success" variant="contained" onClick={logData}>
          Log Data from ApI
      </Button>
    </Box>
  );
};
