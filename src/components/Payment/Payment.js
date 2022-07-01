import PaymentItem from "./PaymentItem/PaymentItem";
import "./Payment.scss";
import { useSelector } from "react-redux";

const Payment = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <>
      <div className="payment">
        <h1>Your Shopping Cart</h1>
      </div>
      <div>
        <ul>
          {cartItems.map((item) => (
            <PaymentItem
              key={item.id}
              item={{
                title: item.title,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Payment;
