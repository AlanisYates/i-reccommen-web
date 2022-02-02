import { Button, Box, Typography, Link, Stack } from "@mui/material";
import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

export const Homepage = () => {
  const [value, setValue] = useState(null);
  const [recommendationList, setRecommendationList] = useState([]);

  const addRecommendation = (newRecommendation) => {
    setRecommendationList((recommendationList) => [
      ...recommendationList,
      newRecommendation,
    ]);
  };

  const filterData = (data) => {
    return {
      place_id: data.place_id,
      name: data.structured_formatting.main_text,
    };
  };
  const logRecommendations = () => {
    console.log(recommendationList);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Typography variant="h1" fontWeight="bold">
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
    </Box> */}
      <Typography>Test</Typography>
      <Box width="100%">
        <GooglePlacesAutocomplete
          apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
          selectProps={{
            value,
            onChange: setValue,
          }}
          on
        />
      </Box>
      <Stack spacing={4} direction="row" p={4}>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            const place = filterData(value);
            addRecommendation(place);
          }}
        >
          Add to Recommendations
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={logRecommendations}
        >
          Log Recommendations
        </Button>
      </Stack>
      {/* <Link
        // component="button"
        target="blank"
        href={`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${value?.value.place_id}`}
      >
        Link to Search
      </Link> */}
    </Box>
  );
};
