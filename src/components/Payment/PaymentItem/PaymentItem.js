import "./PaymentItem.scss";

const PaymentItem = (props) => {
  const { name, quantity, total, price } = props.item;
  console.log(name, quantity, total, price);
  return (
    <div className="payment-items">
      <h3>{name}</h3>
      <span>{quantity}</span>
      <div>
        <button className="payment-btn">PAYMENT</button>
      </div>
    </div>
  );
};

export default PaymentItem;
