import { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import loadingAn from "../../assets/loading (1).gif";

const LoginPage = () => {
  const API_URL = "http://localhost:3001";

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = {
        email: email,
        password: password,
      };
      setLoading(true);
      const res = await axios.post(API_URL + "/login", user);
      const message = res.data.message;
      setLoading(false);
      setMessage(message);
      setTimeout(() => {
        setMessage("");
      }, 2000);
      if (message === "Successfull Log In") {
        console.log("Success");
      } else {
        console.log("Not Success");
      }
    } catch (e) {
      if (e instanceof Error) {
        setMessage(e.message);
      } else {
        setMessage("Unknown Error");
      }
      setLoading(false);
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  };

  return (
    <div className="login">
      <form className="login-container" onSubmit={handleSubmit}>
        <div className="login-title">Log In</div>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {loading && (
          <div className="loading-animation">
            <img src={loadingAn} />
          </div>
        )}
        <div style={{ marginTop: "10px", textAlign: "center" }}>{message}</div>
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
