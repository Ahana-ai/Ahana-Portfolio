import { Box } from "@mui/material";
import "./App.css";
import Background from "./components/Background";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Box>
        <Banner />
        <About />
        <Skills />
        <Projects />
      </Box>
    </>
  );
}

export default App;
