import { React } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./NavBar.scss";
import CartButton from "../CartButton/CartButton";

const NavBar = () => {
  const cart = useSelector((state) => state.cart);
  fetch(
    "https://cake-app-8ff1d-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
    { method: "PUT", body: JSON.stringify(cart) }
  );
  return (
    <div className="nav">
      <div className="banner-1">
        <div className="banner-1-title">
          <Link style={{ textDecoration: "none" }} to="/">
            <h1>Poeme Bakery</h1>
            <h2>Art of natural cake</h2>
          </Link>
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
            <CartButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
