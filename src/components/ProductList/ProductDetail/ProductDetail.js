import React from "react";
import product_card from "../../../assets/product-data/product-data";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const params = useParams();
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

  const detailItem = product_card.find((item) => item.id === params.id);
  const data = (
    <div className="product-details-info">
      <div className="product-details-img">
        <img
          alt=""
          src={require(`../../../assets/product-img/${detailItem.img}`)}
        />
      </div>
      <div className="product-details-box">
        <div className="product-detail-title">
          <h1>{detailItem.title}</h1>
        </div>
        <div className="product-detail-description">
          {detailItem.description}
        </div>
        <div className="product-detail-storage">
          <p> Storage: Store 3-5 degrees Celsius for 2 days</p>
        </div>
        <div className="product-detail-price">
          {detailItem.price} {detailItem.currency}
        </div>
        <div className="product-detail-btn">
          <button onClick={addToCartHandler}>Add to cart</button>
        </div>
      </div>
    </div>
  );
  return (
    <div className="products-detail">
      <div className="box-container">{data}</div>
    </div>
  );
};

export default ProductDetail;
