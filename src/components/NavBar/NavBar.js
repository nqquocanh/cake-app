import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import Cart from "../Cart/Cart";
import Search from "../Search/Search";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="banner-1">
        <img alt="" src={require("../../assets/banner-1.jpg")}></img>
        <div className="banner-1-title">
          <h1>Poeme Bakery</h1>
          <h2>Art of natural cake</h2>
        </div>
        <div className="nav-bar">
          <div>
            <Link className="nav-items" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className="nav-items" to="/about-us">
              About Us
            </Link>
          </div>
          <div>
            <Link className="nav-items" to="/products">
              Products
            </Link>
          </div>
          <div className="nav-icons">
            <Search />
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
