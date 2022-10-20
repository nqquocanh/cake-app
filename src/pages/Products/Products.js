import "./Products.scss";
import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductList/ProductCard/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filterItems, setFilterItems] = useState([]);

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
            category: responseData[key]?.category,
          });
        }
      }
      setProducts(loadedProducts);
      setFilterItems(loadedProducts);
    };
    fetchProducts();
  }, []);

  const filterResult = ({ name, cat }) => {
    let result = products;
    if (name && name.length > 0) {
      result = result.filter((curData) =>
        curData.title.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (cat && cat !== "all") {
      result = result.filter((curData) => curData.category === cat);
    }
    setFilterItems(result);
  };

  return (
    <div className="products-page">
      <h1 className="products-title">Products</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => filterResult({ name: e.target.value })}
        />
      </div>
      <div className="products-item">
        <div className="products-category">
          <button onClick={() => filterResult({ cat: "all" })}>All</button>
          <button onClick={() => filterResult({ cat: "gato" })}>
            Salad Dressing (น้ำสลัด)
          </button>
          <button onClick={() => filterResult({ cat: "cake" })}>
            Soymilk (นมถั่วเหลือง)
          </button>
          <button onClick={() => filterResult({ cat: "bread" })}>
            Bread (ขนมปัง)<div></div>
          </button>
        </div>
        <div className="products-list">
          {filterItems &&
            filterItems.length > 0 &&
            filterItems.map((item, idx) => (
              <ProductCard
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                category={item.category}
                description={item.description}
                img={item.img}
              />
            ))}
          {(!filterItems || filterItems.length === 0) && <p>No items founds</p>}
        </div>
      </div>
    </div>
  );
};

export default Products;
