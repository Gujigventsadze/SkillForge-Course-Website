import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
