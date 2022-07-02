import "./PaymentItem.scss";

const PaymentItem = (props) => {
  const { title, quantity, total, price } = props.item;
  console.log(title, quantity, total, price);
  return (
    <div className="payment-items">
      <h3>{title}</h3>
      <span>{quantity}</span>
      <div>
        <button className="payment-btn">PAYMENT</button>
      </div>
    </div>
  );
};

export default PaymentItem;
