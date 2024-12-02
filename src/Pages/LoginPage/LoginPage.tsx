import "./LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login">
      <form className="login-container">
        <div className="login-title">Log In</div>
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button type="submit" className="log-in-btn">
          Log In
        </button>
        <div className="no-account">
          Don`t Have an Account? <Link to="/signup">Register Here!</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
