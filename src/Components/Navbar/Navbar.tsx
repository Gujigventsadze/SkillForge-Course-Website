import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./Navbar.css";
import shopCart from "../../assets/Icons/shoppingCart.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav>
        <Link to="/" className="navbar-logo">
          SkillForge
        </Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="navbar-login">
          <Link to="/cart" className="shopping-div">
            <img src={shopCart} />
            <div className="cart-count">{cart.length}</div>
          </Link>
          <Link to="/login">
            <PrimaryButton>Log In</PrimaryButton>
          </Link>
        </div>
        <div className="hamburger-menu" onClick={handleMenuClick}>
          <div className={`line1 ${isMenuOpen ? "active" : ""}`}></div>
          <div className={`line2 ${isMenuOpen ? "active" : ""}`}></div>
          <div className={`line3 ${isMenuOpen ? "active" : ""}`}></div>
        </div>
      </nav>
      <div className={`responsive-menu ${isMenuOpen ? "active" : ""}`}>
        <Link to="/" onClick={handleMenuClick}>
          Home
        </Link>
        <Link to="/courses" onClick={handleMenuClick}>
          Courses
        </Link>
        <Link to="/about" onClick={handleMenuClick}>
          About
        </Link>
        <Link to="/cart" onClick={handleMenuClick}>
          Cart
        </Link>
        <Link to="/login" onClick={handleMenuClick}>
          Log In
        </Link>
      </div>
    </>
  );
};

export default Navbar;
