import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../../store/cart-slice";
import "./ProductCard.scss";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        title: props.title,
        price: props.price,
        img: props?.img,
        category: props?.category,
      })
    );
  };

  return (
    <div className="card" key={props.id}>
      <div
        className="card-img"
        onClick={() => navigate(`/products/${props.id}`)}
      >
        <img alt="" src={`${props.img}`} />
      </div>
      <div className="card-info">
        <h2
          className="card-title"
          onClick={() => navigate(`/products/${props.id}`)}
        >
          {props.title}
        </h2>
        <p className="=price">{props.price} $</p>
        <div className="add-to-cart-btn">
          <button onClick={addToCartHandler}> Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
