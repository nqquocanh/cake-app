import "./Search.scss";
import React from "react";
import { useState } from "react";
import ProductCard from "../../components/ProductList/ProductCard/ProductCard";

const Search = () => {
  const [query, setQuery] = useState("");

  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
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

  const searchItem = products
    .filter((prod) => prod.title.toLowerCase().includes(query.toLowerCase()))
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
    <div className="search-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder=" Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="search-item">
        <div className="search-list">{searchItem}</div>
      </div>
    </div>
  );
};

export default Search;
