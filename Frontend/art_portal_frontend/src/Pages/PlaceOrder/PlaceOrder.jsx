import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
      </div>
      <div className="multi-fields">
        <input type="text" placeholder="City" />
        <input type="text" placeholder="State" />
      </div>

      <div className="multi-fields">
        <input type="text" placeholder="Zip Code" />
        <input type="text" placeholder="Country" />
      </div>
      <input type="text" placeholder="Phone" />

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs. {getTotalCartAmount}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>Rs. {2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs. {getTotalCartAmount() + 2}</b>
            </div>
            <button onClick={() => navigate("/order")}>PROCEED TO PAY</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
