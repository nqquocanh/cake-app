import React from "react";
import ItemCard from "./ItemCard/ItemCard";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();

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
  let listItems;
  if (products && products.length) {
    const [itemInfo] = products.filter((item) => item.id === id);
    listItems = (
      <ItemCard
        key={itemInfo.id}
        id={itemInfo.id}
        title={itemInfo.title}
        price={itemInfo.price}
        description={itemInfo.description}
        img={itemInfo.img}
      />
    );
  }

  return (
    <>
      <div className="products">
        {products && <div className="box-container">{listItems}</div>}
        {!products && <p>No Items</p>}
      </div>
    </>
  );
};

export default ProductDetail;
