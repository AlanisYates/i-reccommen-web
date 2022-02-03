import { useState, useRef } from "react";
import { InputBase, Typography, Input, TextField } from "@mui/material";
import Script from "react-load-script";

export const GoogleSearch = ({ onClick }) => {
  const [query, setQuery] = useState("");

  // Store autocomplete object in a ref.
  // This is done because refs do not trigger a re-render when changed.
  const autocompleteRef = useRef(null);

  const handleScriptLoad = () => {
    // Declare Options For Autocomplete
    const options = {
      // types: ["(cities)"],
      // fields: ["address_components", "geometry", "icon", "name"],
    };

    // Initialize Google Autocomplete
    /*global google*/ // To disable any eslint 'google not defined' errors
    autocompleteRef.current = new google.maps.places.Autocomplete(
      document.getElementById("search-input"),
      options
    );

    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components and formatted
    // address.
    autocompleteRef.current.setFields([
      // "address_components",
      "formatted_address",
      "name",
      // "geometry",
      "url",
      // "photos"
    ]);

    // Fire Event when a suggested name is selected
    autocompleteRef.current.addListener("place_changed", handlePlaceSelect);
  };

  const handlePlaceSelect = () => {
    // Extract City From Address Object
    const addressObject = autocompleteRef.current.getPlace();
    // const address = addressObject.address_components;

    // Check if address is valid
    // if (address) {
    //   //   setCity(address[0].long_name);
    //   setQuery(addressObject.name);
    //   console.log(addressObject);
    // }
    onClick(addressObject);
  };

  return (
    <div>
      {/* <Typography>Search Bar</Typography> */}
      <Script
        url={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`}
        onLoad={handleScriptLoad}
      />
      <TextField
        id="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{
          width: "500px",
        }}
      />
    </div>
  );
};
