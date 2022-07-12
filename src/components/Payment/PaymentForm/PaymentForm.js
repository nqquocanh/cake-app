import { Link } from "react-router-dom";

import { useRef, useState } from "react";
import "./PaymentForm.scss";

const isEmpty = (value) => value.trim() === "";
const validPhoneNumber = (phone) =>
  /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/gm.test(
    phone
  );

const PaymentForm = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    phone: true,
    address: true,
  });
  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const addressInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredPhoneIsValid = validPhoneNumber(enteredPhone);
    const enteredAddressIsValid = !isEmpty(enteredAddress);

    setFormInputValidity({
      name: enteredNameIsValid,
      phone: enteredPhoneIsValid,
      address: enteredAddressIsValid,
    });

    const formIsValid =
      enteredNameIsValid && enteredPhoneIsValid && enteredAddressIsValid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      phone: enteredPhone,
      address: enteredAddress,
    });
  };

  return (
    <form className="control" onSubmit={confirmHandler}>
      <div className="user-info">
        <div>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" ref={nameInputRef} />
          {!formInputValidity.name && (
            <p className="invalid">Please enter name!</p>
          )}
        </div>
        <div>
          <label htmlFor="phone">Your Phone Number</label>
          <input type="text" id="phone" ref={phoneInputRef} />
          {!formInputValidity.phone && (
            <p className="invalid">Please enter valid phone number!</p>
          )}
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" ref={addressInputRef} />
          {!formInputValidity.address && (
            <p className="invalid">Please enter address!</p>
          )}
        </div>
        <div>
          <button>Confirm</button>
          {/* <Link to="/payment-success">
          </Link> */}
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;
