import PaymentItem from "./PaymentItem/PaymentItem";
import "./Payment.scss";

const Payment = () => {
  return (
    <>
      <div className="payment">
        <h1>Your Shopping Cart</h1>
      </div>
      <div>
        <PaymentItem />
      </div>
    </>
  );
};

export default Payment;
