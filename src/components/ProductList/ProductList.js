import "./ProductList.scss";
import React from "react";
import PRODUCT_DATA from "../../assets/product-data/product-data";

import ProductItem from "./ProductItem";

const ProductList = () => {
  const listItems = PRODUCT_DATA.map((item) => (
    <ProductItem
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      description={item.description}
      img={item.img}
    />
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
