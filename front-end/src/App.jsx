import { Box } from "@mui/material";
import "./App.css";
import Background from "./components/Background";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Background />
      <Box>
        <Navbar />
        <Banner />
        <Skills />
      </Box>
    </>
  );
}

export default App;
