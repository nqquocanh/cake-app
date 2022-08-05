import "./ItemCard.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store/cart-slice";

const ItemDetail = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        title: props.title,
        price: props.price,
        img: props.img,
      })
    );
  };

  return (
    <div className="item-card" key={props.id}>
      <div className="item-card-img">
        <img alt="" src={`${props.img}`} />
      </div>

      <div className="item-card-info">
        <div className="item-card-title">
          <h2>{props.title}</h2>
        </div>
        <div className="item-card-price">
          <p>{props.price} $</p>
        </div>
        <div className="item-card-description">
          <p>{props.description}</p>
        </div>
        <div className="item-card-btn">
          <button onClick={addToCartHandler}> Add to cart </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
