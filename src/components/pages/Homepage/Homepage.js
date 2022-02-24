import {
  Button,
  Box,
  Stack,
  List,
  ListItem,
  TextField,
  Text,
  Typography,
  Modal,
} from "@mui/material";
import { useState } from "react";
import { addPlace } from "../../../_services/PlaceService/PlaceApi";
import { GoogleSearch } from "./GoogleSearch";
import { PlaceCard } from "./_components/PlaceCard";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";
import InputField from "./_components/InputField";



export const Homepage = () => {
  const [recommendationList, setRecommendationList] = useState([]);
  const [value, setValue] = useState(null);

  // Modal--------------->
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    recipiants: [],
  };

  const validationSchema = yup.object({
    firstName: yup.string("First Name"),
    lastName: yup.string("Last Name"),
    email: yup
      .string("Enter You email")
      .email("Enter a valid Email")
      .required("Email is required"),
  });

  // const formik = useFormik({
  //   initialValues: {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     recipiants: [],
  //   },
  //   validationSchema: validationSchema,
  //   onSubmit: async (values) => {
  //     const valuesToSend = {
  //       ...values,
  //       recomemmendations: recommendationList,
  //     };
  //     await new Promise((r) => setTimeout(r, 500));
  //     await console.log(JSON.stringify(valuesToSend, null, 2));
  //   },
  // });

  // const saveItenerary = async () => {
  //   console.log(recommendationList)
  //   // const thingsToAdd = {};
  //   // const res = await addPlace(thingsToAdd);
  //   // console.log(res);
  // };

  const addRecommendation = (newRecommendation) => {
    setRecommendationList((recommendationList) => [
      ...recommendationList,
      newRecommendation,
    ]);
  };

  const filterData = (data) => {
    return {
      name: data.name,
      address: data.formatted_address,
      website: data.url,
      photos: data.photos.slice(0, 3),
    };
  };

  return (
    <Box width="80%">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          const dataToSend = {
            ...values,
            recomendations: recommendationList
          }
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(dataToSend, null, 2));
        }}
      >
        {({ values }) => (
          <Form>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack spacing={2} width="100%">
                <Box width="100%">
                  <GoogleSearch
                    onClick={(data) => {
                      setValue(filterData(data));
                      addRecommendation(filterData(data));
                    }}
                  />
                </Box>
                {/* <Stack spacing={4} direction="row" p={4}>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            addRecommendation(value);
          }}
        >
          Add to Recommendations
        </Button>
      </Stack> */}

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
                <Button type="submit" variant="contained" color="success">
                  Submit
                </Button>
                <Button onClick={handleOpen}>Open Modal</Button>
              </Stack>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    This is where the Sending and creater info wil go
                  </Typography>
                  <InputField name="email" label="Email" />
                  <InputField name="firstName" label="First Name" />
                  <InputField name="lastName" label="Last Name" />
                  <Box
                    pt={4}
                    width="100%"
                    justifyContent="center"
                    display="flex"
                  >
                    <Button
                      variant="contained"
                      color="success"
                      onClick={handleClose}
                    >
                      Done
                    </Button>
                  </Box>
                </Box>
              </Modal>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
