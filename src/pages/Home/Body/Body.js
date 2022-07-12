import React from "react";
import "./Body.scss";
import { Link } from "react-router-dom";

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
          <img alt="" src={require("../../../assets/do-you-know-image.jpg")} />
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
      <div className="our-products">
        <h1 className="our-products-title">Our Products</h1>
        <div className="our-products-content">
          <div className="our-products-item">
            <div className="our-products-img">
              <img
                alt=""
                src={require("../../../assets/our-products-img-01.png")}
              />
            </div>
            <h1>Cake</h1>
            <div className="our-products-description">
              <p>
                If you are planning to enjoy a cake party filled with natural
                flavors. Come to POEME Bakery, enjoy a gentle, relaxing moment
                in a cozy and dear space.
              </p>
            </div>
          </div>
          <div className="our-products-item">
            <div className="our-products-img">
              <img
                alt=""
                src={require("../../../assets/our-products-img-02.png")}
              />
            </div>
            <h1>Bread, cookies</h1>
            <div className="our-products-description">
              <p>
                Thanks to the fresh ingredients and skillful processing of the
                chefs, the bakery products are delicious and quality. Not only
                delicious, beautiful, rich in nutrients but also bring
                excitement to people to enjoy.
              </p>
            </div>
          </div>
          <div className="our-products-item">
            <div className="our-products-img">
              <img
                alt=""
                src={require("../../../assets/our-products-img-03.png")}
              />
            </div>
            <h1>Gato Cake</h1>
            <div className="our-products-description">
              <p>
                Is a type of cake that carries many important meanings in the
                anniversary of each of us. Give your loved one a beautiful Gato
                cake with meaningful wishes! POEME Bakery is very happy to do
                that for you.
              </p>
            </div>
          </div>
          <div className="our-products-item">
            <div className="our-products-img">
              <img
                alt=""
                src={require("../../../assets/our-products-img-04.png")}
              />
            </div>
            <h1>Ingredients</h1>
            <div className="our-products-description">
              <p>
                Using quality, fresh, international-standard ingredients,
                carefully selected from trusted suppliers. We guarantee to bring
                our customers delicious cakes, the best quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
