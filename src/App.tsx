import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Footer from "./Components/Footer/Footer";
import Coursepage from "./Pages/Coursepage";
import Cart from "./Pages/Cart";
import Courses from "./Pages/Courses";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignUpPage from "./Pages/LoginPage/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/course-page/:courseName" element={<Coursepage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
