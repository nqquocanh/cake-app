import PaymentItem from "./PaymentItem/PaymentItem";
import "./Payment.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PaymentForm from "./PaymentForm/PaymentForm";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const Payment = () => {
  const [isForm, setIsForm] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const formHandler = () => {
    setIsForm(true);
  };

  useEffect(() => {
    const fetchCart = async () => {
      const response = await fetch(
        "https://cake-app-8ff1d-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );
      const responseData = await response.json();
      dispatch(cartActions.setCart(responseData));
    };
    fetchCart();
  }, [dispatch]);

  const formActions = (
    <div className="payment-btn">
      <button onClick={formHandler}>Order</button>
    </div>
  );

  const submitOrderHandler = (userData) => {
    const submitOrder = async () => {
      const response = await fetch(
        "https://cake-app-8ff1d-default-rtdb.asia-southeast1.firebasedatabase.app/Orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            user: userData,
            orderedItem: cartItems,
          }),
        }
      );
      if (response.ok) {
        setIsCheckout(true);
        dispatch(cartActions.clearCart());
        console.log(await response.json());
      }
    };
    submitOrder();
  };
  const renderCartItems = () => {
    return (
      <>
        <div className="payment">
          <h1>Your Shopping Cart</h1>
        </div>
        <ul>
          {cartItems.map((item, index) => (
            <PaymentItem
              key={index}
              item={{
                id: item.id,
                img: item.img,
                title: item.title,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          ))}
        </ul>
        <div className="total-amount">
          <h1>
            Total Amount:{" "}
            <span className="total-number">
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </span>{" "}
            ฿
          </h1>
        </div>
      </>
    );
  };
  return (
    <>
      <div>
        {cartItems.length === 0 && !isCheckout && (
          <>
            <div className="payment">
              <h1>Your Shopping Cart</h1>
            </div>
            <div className="empty-cart-notification">
              <h1 className="empty-notification">Your cart is empty!</h1>
              <Link to="/">
                <button>Back to Home page</button>
              </Link>
            </div>
          </>
        )}

        {cartItems && cartItems.length ? renderCartItems() : null}

        {isForm && cartItems && cartItems.length ? (
          <PaymentForm onConfirm={submitOrderHandler} />
        ) : null}
        {!isForm && cartItems && cartItems.length ? formActions : null}
        {isCheckout ? (
          <div className="payment-success">
            <h1>Payment Success!</h1>
            <Link to="/">
              <button>Back to Home page</button>
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Payment;
