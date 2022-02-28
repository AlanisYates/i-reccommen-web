import { Layout } from "./components/Layout/Layout";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import { Homepage } from "./components/pages/Homepage/Homepage";
// import { Submit } from "./components/pages/SubmitPage/Submit";
import { NotFound } from "./components/pages/NotFound/NotFound";
// import { GoogleSearch } from "./components/pages/Homepage/GoogleSearch";
// import { PlaceCard } from "./components/pages/Homepage/_components/PlaceCard";
import { ComingSoon } from "./components/pages/ComingSoon/ComingSoon";

function App() {
  // const testData = {
  //   address: "3515 49th St N, St. Petersburg, FL 33710, USA",
  //   name: "Hello gorgeous nails",
  //   url: "https://maps.google.com/?cid=3115361687462807830",
  // };
  return (
    <div className="App">
      <Box sx={{ bgcolor: "background.main", height: "100vh" }}>
        <Layout>
          <Routes>
            <Route path="/" element={<ComingSoon />} />
            {/* <Route path="/review" element={<Submit />} />
            <Route path="/test" element={<PlaceCard placeData={testData} />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Box>
    </div>
  );
}

export default App;
