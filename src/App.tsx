import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Footer from "./Components/Footer/Footer";
import Coursepage from "./Pages/Coursepage";
import Cart from "./Pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/course-page/:courseName" element={<Coursepage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
