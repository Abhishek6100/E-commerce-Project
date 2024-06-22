import React from "react";
import "./hedaer.css";
import logo_ecom from "./logo_ecom.png";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => {
  return (
    <div className="header_container">
      <div className="header">
        <Link to="/">
          {" "}
          <img src={logo_ecom} alt="logo" className="logo" />
        </Link>
        <div className="homepage_heading">E-commerce product</div>
        <h1>{cartCount}</h1>
      </div>
    </div>
  );
};

export default Header;
