import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100;
  const publisableKey = "pk_test_wiQGSpQoptVMlkLPebC3ulht00kXr10qS4";

  const onToken = (token) => {
    console.log(token);
    alert('payment successfull');
  };

  return (
    <StripeCheckout
      name="E-Commerce Web"
      label="Pay Now"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      bitcoin
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publisableKey}
    />
  );
};


export default StripeCheckoutButton;
