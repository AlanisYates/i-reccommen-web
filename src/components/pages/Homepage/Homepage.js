import {
  Button,
  Box,
  Stack,
  List,
  ListItem,
  TextField,
  Text,
} from "@mui/material";
import { useState } from "react";
import { addPlace } from "../../../_services/PlaceService/PlaceApi";
import { GoogleSearch } from "./GoogleSearch";
import { PlaceCard } from "./_components/PlaceCard";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  firstName: yup.string("First Name"),
  lastName: yup.string("Last Name"),
  email: yup
    .string("Enter You email")
    .email("Enter a valid Email")
    .required("Email is required"),
});

export const Homepage = () => {
  const [recommendationList, setRecommendationList] = useState([]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const valuesToSend = {
        ...values,
        recomemmendations: recommendationList
      }
      await new Promise((r) => setTimeout(r, 500));
      await console.log(JSON.stringify(valuesToSend, null, 2));
    },
  });

  // const [value, setValue] = useState(null);

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

  // const filterData = (data) => {
  //   return {
  //     name: data.name,
  //     address: data.formatted_address,
  //     website: data.url,
  //     photos: data.photos.slice(0, 3),
  //   };
  // };
  // const logRecommendations = () => {
  //   console.log(recommendationList);
  // };

  return (
    <Box width="80%">
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack spacing={2} width="100%">
            <TextField
              fullWidth
              variant="standard"
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              variant="standard"
              fullWidth
              id="lastName"
              name="lastName"
              label="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
              fullWidth
              variant="standard"
              id="firstName"
              name="firstName"
              label="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
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
            <Button type="submit" variant="contained" color="success">
              Submit
            </Button>
          </Stack>
        </Box>
      </form>
    </Box>
  );
};
