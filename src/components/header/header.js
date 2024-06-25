import React from "react";
import "./hedaer.css";
import logo_ecom from "./logo_ecom.png";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Header = ({ cartCount }) => {
  return (
    <div className="header_container">
      <div className="header">
        <Link to="/">
          {" "}
          <img src={logo_ecom} alt="logo" className="logo" />
        </Link>
        <div className="homepage_heading">E-commerce product</div>
        <Link to="/cart">
          <div className="cartcount_div">
            {cartCount > 0 && <span className="cart_length">{cartCount}</span>}
            <FiShoppingCart style={{ fontSize: "35px" }} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
