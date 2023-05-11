import "./App.css";
import Background from "./components/Background";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Background />
      <div>
        <Navbar />
        <Banner />
      </div>
    </>
  );
}

export default App;
