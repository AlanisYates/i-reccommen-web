import { Button, Box, Stack } from "@mui/material";
import { useState } from "react";
import { GoogleSearch } from "./GoogleSearch";
import { PlaceCard } from "./_components/PlaceCard";

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
      address: data.formatted_address,
      name: data.name,
      url: data.url,
      photos: data.photo,
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
      <Box width="100%">
        <GoogleSearch onClick={(data) => setValue(filterData(data))} />
      </Box>
      <Stack spacing={4} direction="row" p={4}>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            addRecommendation(value);
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

<<<<<<< HEAD
      <Stack spacing={2}>
        {recommendationList.map(place => (
          <PlaceCard placeData={place} />

        )

        )}
=======
      <Stack>
        {recommendationList.map((place) => (
          <PlaceCard placeData={place} key={place.name} />
        ))}
>>>>>>> e06bb31ce45b0ad54896fc66bd62a943e933f8db
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
