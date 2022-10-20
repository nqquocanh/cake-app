import React from "react";
import "./Body.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../../../components/ProductList/ProductCard/ProductCard";
import SliderStore from "../../../components/Slider/Slider-store";

const Body = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://cake-app-8ff1d-default-rtdb.asia-southeast1.firebasedatabase.app/Products.json"
      );
      const responseData = await response.json();
      const loadedProducts = [];
      for (const key in responseData) {
        if (responseData[key]) {
          loadedProducts.push({
            id: key,
            title: responseData[key]?.title,
            description: responseData[key]?.description,
            price: responseData[key]?.price,
            img: responseData[key]?.img,
          });
        }
      }
      setProducts(loadedProducts);
    };
    fetchProducts();
  }, []);

  const listItems = products
    .slice(0, 4)
    .map((item) => (
      <ProductCard
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
        img={item.img}
      />
    ));

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
            src={require("../../../assets/do-you-know-image-1.jpg")}
          />
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
              Poeme is a Japanese bakery that inherits the most favorite recipes
              of Mr. Tetsuya Suzuki. In 2005, from the beginning as a small
              bakery on Lang Ha street, up to now, POEME has nearly 20 stores in
              Hanoi. Hidden in any small cake here, is still the original
              delicious taste with full love and passion!
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
            <h1>Soymilk (นมถั่วเหลือง)</h1>
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
          <div className="our-products-item">
            <div className="our-products-img">
              <img
                alt=""
                src={require("../../../assets/our-products-img-03.png")}
              />
            </div>
            <h1>Salad Dressing (น้ำสลัด)</h1>
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
                src={require("../../../assets/our-products-img-02.png")}
              />
            </div>
            <h1>Bread (ขนมปัง)</h1>
            <div className="our-products-description">
              <p>
                Thanks to the fresh ingredients and skillful processing of the
                chefs, the bakery products are delicious and quality. Not only
                delicious, beautiful, rich in nutrients but also bring
                excitement to people to enjoy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-product">
        <div className="main-product-title">New products</div>
        <div className="d-flex">{listItems}</div>
      </div>
      <div className="our-store">
        <div className="our-store-title">Our Stores</div>
        <div className="our-store-content">
          <div className="our-store-address-system">
            <div className="our-store-address">
              <p>
                <i className="fa-solid fa-shop"></i> Address 1: 198 Thai Ha
                Street, Dong Da District, Ha Noi
              </p>
            </div>
            <div className="our-store-address">
              <p>
                <i className="fa-solid fa-shop"></i> Address 2: 28 To Ngoc Van
                Street, Tay Ho District, Ha Noi
              </p>
            </div>
            <div className="our-store-address">
              <p>
                <i className="fa-solid fa-shop"></i> Address 3: 86 Tay Son
                Street, Thanh Xuan District, Ha Noi
              </p>
            </div>
            <div className="our-store-address">
              <p>
                <i className="fa-solid fa-shop"></i> Address 4: 295 Nguyen Tuan
                Street, Thanh Xuan District, Ha Noi
              </p>
            </div>
            <div className="our-store-address">
              <p>
                <i className="fa-solid fa-shop"></i> Address 5: 365 Dich Vong
                Hau Street, Cau Giay District, Ha Noi
              </p>
            </div>
            <div className="our-store-social">
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
          <div className="our-store-img">
            <SliderStore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
