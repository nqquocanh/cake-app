import "./PaymentItem.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

const PaymentItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id, img } = props.item;
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        img,
      })
    );
  };

  return (
    <li className="payment-items">
      <div className="payment-img">
        <img alt="" src={img}></img>
      </div>
      <div className="payment-detail">
        <h3 className="payment-title">{title}</h3>
        <div className="payment-quantity">
          <span>Quantity: </span>
          <span className="payment-quantity"> {quantity}</span>
        </div>
        <div>
          <span>Price: </span>
          <span className="payment-price">{price} $</span>
        </div>
        <div></div>
        <div className="payment-total">
          ฿{total ? (+total).toFixed(2) : 0}{" "}
          <span>(฿{price ? (+price).toFixed(2) : 0}/item)</span>
        </div>
      </div>
      <div className="payment-actions">
        <button onClick={removeItemHandler}>-</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  );
};

export default PaymentItem;
