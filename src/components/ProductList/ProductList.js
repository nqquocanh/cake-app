import "./ProductList.scss";
import React from "react";
import product_card from "../../assets/product-data/product-data";
import { cartActions } from "../../store/cart-slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const ProductList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addToCartHandler = (item) => {
    dispatch(
      cartActions.addItemToCart({
        id: item.id,
        title: item.title,
        price: item.price,
      })
    );
  };
  const listItems = product_card.map((item) => (
    <>
      <div className="card" key={item.id}>
        <div
          className="card_img"
          onClick={() => navigate(`/products/${item.id}`)}
        >
          <img alt="" src={require(`../../assets/product-img/${item.img}`)} />
        </div>
        <div className="card_info">
          <h2
            className="card_title"
            onClick={() => navigate(`/products/${item.id}`)}
          >
            {item.title}
          </h2>
          <p className="=price">
            {item.price} <span>{item.currency}</span>
          </p>
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half" />
          </div>
          <div className="btn">
            <button onClick={addToCartHandler}>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  ));
  return (
    <>
      <div className="products">
        <h1 className="products-title">Products</h1>
        <div className="box-container">{listItems}</div>
      </div>
    </>
  );
};

export default ProductList;
