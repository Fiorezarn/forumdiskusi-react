import React, { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Logo from "../../Assets/Icon/forum.svg";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios for making API calls

// style
import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("https://forum-api.dicoding.dev/v1/login", {
        email: email,
        password: password,
      });

      const responseData = response.data;
      if (responseData.status === "success") {
        setToken(responseData.data.token);
        // Handle successful login, maybe redirect the user to another page
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setError("An error occurred while logging in.");
    }
  };

  return (
    <div className="App">
      <Header />

      <div className="form-login col-4 column mx-auto">
        <img className="mx-auto" src={Logo} alt="Logo" />
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="register mb-3">
            <Link to="/register">Don't have an account? Register Now</Link>
          </div>
          <button type="submit" className="btn-submit">
            Login
          </button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Login;
