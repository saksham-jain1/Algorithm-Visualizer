import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import logo from "./Assets/logo.png";
import PageNotFound from "./Components/PageNotFound";
import BinarySearch from "./Components/BinarySearch/BinarySearch";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <img src={logo} alt="logo.png" id="logo" /> Algorithm Vizualizer
      </div>
      <div className="body">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/binarySearch" element={<BinarySearch/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
