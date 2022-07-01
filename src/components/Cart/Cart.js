import React from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className="nav-icons-cart">
      <Link to="/payment">
        <i className="fa-solid fa-cart-plus"></i>
        <span>{cartQuantity}</span>
      </Link>
    </div>
  );
};
export default Cart;
