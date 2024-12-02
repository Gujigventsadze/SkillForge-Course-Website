import "./LoginPage.css";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="login">
      <form className="login-container">
        <div className="login-title">Sign Up</div>
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <input type="password" placeholder="Repeat Password" />
        <button type="submit" className="log-in-btn">
          Sign Up
        </button>
        <div className="no-account">
          Already Have an Account? <Link to="/login">Log In Here!</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
