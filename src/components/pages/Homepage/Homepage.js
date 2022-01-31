import { Button, Box, Typography, Link } from "@mui/material";
import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

export const Homepage = () => {
  const [value, setValue] = useState(null);
  const cats = "cats";
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
      <Box width="300px">
        <GooglePlacesAutocomplete
          apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
          selectProps={{
            value,
            onChange: setValue,
          }}
        />
      </Box>
      <Button
        variant="main"
        onClick={() => {
          console.log(value);
        }}
      >
        Hello
      </Button>
      <Link
        // component="button"
        target="blank"
        href={`https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${value?.value.place_id}`}
      >
        Link to Search
      </Link>
    </Box>
  );
};
