import React from "react";
import "./Body.scss";
import { Link } from "react-router-dom";
import ProductList from "../../../components/ProductList/ProductList";

const Body = () => {
  return (
    <div className="body">
      <div className="do-you-know">
        <div className="see-more-btn">
          <Link to="/products">
            <button>See More</button>
          </Link>
        </div>
        <div className="do-you-know-image">
          <img
            alt=""
            src={require("../../../assets/do-you-know-image.jpg")}
          ></img>
        </div>
        <div className="do-you-know-content">
          <h1 className="do-you-know-title"> Do you know?</h1>
          <div className="do-you-know-description">
            <p>
              With 100% natural ingredients carefully selected, safe and always
              fresh, the creams do not add any additives or preservatives in the
              production process, POEME is trusted by customers in recent years.
            </p>
            <p>
              All of that, you will feel when enjoying the excellent cakes made
              from the dedicated heart of POEME bakers.
            </p>
          </div>
        </div>
      </div>
      <ProductList />
    </div>
  );
};

export default Body;
