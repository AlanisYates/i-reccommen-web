import { Button, Box, Stack, List, ListItem } from "@mui/material";
import { useState } from "react";
import { addPlace } from "../../../_services/PlaceService/PlaceApi";
import { GoogleSearch } from "./GoogleSearch";
import { PlaceCard } from "./_components/PlaceCard";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  firstName: yup.string("First Name"),
  lastName: yup.string("Last Name"),
  email: yup.string("Enter You email").email("Enter a valid Email"),
});

export const Homepage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // const [value, setValue] = useState(null);
  // const [recommendationList, setRecommendationList] = useState([]);

  // const saveItenerary = async () => {
  //   console.log(recommendationList)
  //   // const thingsToAdd = {};
  //   // const res = await addPlace(thingsToAdd);
  //   // console.log(res);
  // };

  // const addRecommendation = (newRecommendation) => {
  //   setRecommendationList((recommendationList) => [
  //     ...recommendationList,
  //     newRecommendation,
  //   ]);
  // };

  const filterData = (data) => {
    return {
      name: data.name,
      address: data.formatted_address,
      website: data.url,
      photos: data.photos.slice(0, 3),
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
      {/* <Box width="100%">
        <GoogleSearch
          onClick={(data) => {
            setValue(filterData(data));
            addRecommendation(filterData(data));
          }}
        />
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
      </Stack>

      <List
        sx={{
          overflow: "auto",
          height: "500px",
          width: "100%",
        }}
      >
        {recommendationList.map((place) => (
          <ListItem key={place.name}>
            <PlaceCard placeData={place} />
          </ListItem>
        ))}
      </List>
      <Box>
        <Button color="success" variant="contained" onClick={saveItenerary}>
          Save
        </Button>
      </Box> */}
    </Box>
  );
};
