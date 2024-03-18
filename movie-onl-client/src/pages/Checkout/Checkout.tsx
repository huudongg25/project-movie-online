import { PayPalButtons } from "@paypal/react-paypal-js";
import React from "react";
import "./Checkout.css";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout-container">
        <div className="checkout-wrapper">
          <div className="credit-card credit-card-1">
            <div className="credit-content">
              <h2>VIP $25</h2>
              <p>Watch exclusive FixCode&Chill movies for 30 days</p>
            </div>
            <PayPalButtons
              style={{
                layout: "horizontal",
                height: 48,
              }}
            />
          </div>
          <div className="credit-card credit-card-2">
            <div className="credit-content">
              <h2>VIP $50</h2>
              <p>Watch all exclusive FixCode&Chill movies</p>
            </div>
            <PayPalButtons
              style={{
                layout: "horizontal",
                height: 48,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
