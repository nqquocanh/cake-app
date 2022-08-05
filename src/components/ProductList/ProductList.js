import { React, useEffect, useState } from "react";
import ProductCard from "../ProductList/ProductCard/ProductCard";
import "./ProductList.scss";

const ProductList = () => {
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

  const listItems = products.map((item) => (
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
    <>
      <div className="products">
        <h1 className="products-title">Products</h1>
        <div className="box-container">{listItems}</div>
      </div>
    </>
  );
};

export default ProductList;
