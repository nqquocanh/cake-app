import React from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className="nav-icons-cart">
      <i className="fa-solid fa-cart-plus"></i>
      <span>{cartQuantity}</span>
    </div>
  );
};
export default Cart;
