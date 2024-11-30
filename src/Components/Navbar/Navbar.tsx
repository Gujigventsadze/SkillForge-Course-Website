import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./Navbar.css";
import shopCart from "../../assets/Icons/shoppingCart.png";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav>
        <div className="navbar-logo">SkillForge</div>
        <div className="navbar-links">
          <a href="">Home</a>
          <a href="">Courses</a>
          <a href="">About</a>
        </div>
        <div className="navbar-login">
          <div className="shopping-div">
            <img src={shopCart} />
            <div className="cart-count">0</div>
          </div>
          <PrimaryButton>Log In</PrimaryButton>
        </div>
        <div className="hamburger-menu" onClick={handleMenuClick}>
          <div className={`line1 ${isMenuOpen ? "active" : ""}`}></div>
          <div className={`line2 ${isMenuOpen ? "active" : ""}`}></div>
          <div className={`line3 ${isMenuOpen ? "active" : ""}`}></div>
        </div>
      </nav>
      <div className={`responsive-menu ${isMenuOpen ? "active" : ""}`}>
        <a href="">Home</a>
        <a href="">Courses</a>
        <a href="">About</a>
        <a href="">Cart</a>
        <a href="">Log In</a>
      </div>
    </>
  );
};

export default Navbar;
