import { Layout } from "./components/Layout/Layout";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./components/pages/Homepage/Homepage";
import { Submit } from "./components/pages/SubmitPage/Submit";
import { NotFound } from "./components/pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Box sx={{ bgcolor: "background.main", height: "100vh" }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/review" element={<Submit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Box>
    </div>
  );
}

export default App;
