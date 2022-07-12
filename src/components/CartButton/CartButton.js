import React from "react";
import "./CartButton.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartButton = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className="nav-icons-cart">
      <Link to="/payment" style={{ textDecoration: "none" }}>
        <i className="fa-solid fa-cart-plus"></i>
        <span>{cartQuantity}</span>
      </Link>
    </div>
  );
};
export default CartButton;
