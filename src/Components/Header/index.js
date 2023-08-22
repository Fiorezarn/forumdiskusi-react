import React from "react";
import "./header.scss";
import { Link } from "react-router-dom"; // Import Link

import Logo from "../../Assets/Icon/forum.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="img-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="nav-item">
        <ul className="nav-list">
          <li className="nav-list-item">
          <Link to="/">Thread</Link>
          </li>
          <li className="nav-list-item">
          <Link to="/leaderboard">Leaderboard</Link>
          </li>
        </ul>
      </div>  
      <div className="button">
        <Link to="/login" className="btn btn-login">Login</Link>
      </div>
    </div>
  );
};

export default Header;
