import "./Products.scss";
import ProductList from "../../components/ProductList/ProductList";

const Products = () => {
  return (
    <>
      <div className="product-items">
        <div className="product-body">
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default Products;
