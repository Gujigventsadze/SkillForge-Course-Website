import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import loadingAn from "../../assets/loading (1).gif";

const SignUpPage = () => {
  const API_URL = "http://localhost:3001";
  const navigate = useNavigate();

  const [resMessage, setResMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (password !== password2) {
      setError(true);
    } else {
      setError(false);
    }
  }, [password2]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (error) return;
    else {
      const newUser = {
        email: email,
        password: password,
      };
      try {
        setLoading(true);
        const res = await axios.post(API_URL + "/register", newUser);
        const resData = res.data;
        if (resData === "User Already Exists") {
          setResMessage(res.data);
          setLoading(false);
          setTimeout(() => {
            setResMessage("");
          }, 3000);
        } else {
          setResMessage(res.data);
          setTimeout(() => {
            navigate("/login");
          }, 1000);
          setLoading(false);
        }
      } catch (e: unknown) {
        if (e instanceof Error) {
          setResMessage(e.message);
        } else {
          setResMessage("Unknown Error");
        }
        setTimeout(() => {
          setResMessage("");
        }, 2000);
      }
    }
  };

  return (
    <div className="login">
      <form className="login-container" onSubmit={handleSubmit}>
        <div className="login-title">Sign Up</div>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <input
          type="password"
          placeholder="Repeat Password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          required
        />
        {error && (
          <div style={{ fontSize: "1.3rem", textAlign: "center" }}>
            Passwords Should Match
          </div>
        )}
        <div style={{ textAlign: "center" }}>{resMessage}</div>
        {loading && (
          <div className="loading-animation">
            <img src={loadingAn} />
          </div>
        )}
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
