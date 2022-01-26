import { Layout } from "./components/Layout/Layout";
import { Box } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Box sx={{ bgcolor: "background.main", height: "100vh" }}>
        <Layout />
      </Box>
    </div>
  );
}

export default App;
