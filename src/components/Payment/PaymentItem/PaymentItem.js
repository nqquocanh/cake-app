import "./PaymentItem.scss";

const CartItem = () => {
  return (
    <>
      <div className="payment-items">
        <div>
          <h1>Product Name</h1>
        </div>
        <div>
          <h2>Quantity</h2>
          <h2>Amount</h2>
        </div>
        <div>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
      <div>
        <button>PAYMENT</button>
      </div>
    </>
  );
};

export default CartItem;
