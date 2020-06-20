import React from "react";
import { useSelector } from "react-redux";
import {
  selectCartTotalPrice,
  selectCartItems,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  CheckoutHeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from "./checkout.styles";

function CheckoutPage() {
  const totalPrice = useSelector((state) => selectCartTotalPrice(state));
  const cartItems = useSelector((state) => selectCartItems(state));

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <CheckoutHeaderBlockContainer>
          <span>Product</span>
        </CheckoutHeaderBlockContainer>
        <CheckoutHeaderBlockContainer>
          <span>Description</span>
        </CheckoutHeaderBlockContainer>
        <CheckoutHeaderBlockContainer>
          <span>Quantity</span>
        </CheckoutHeaderBlockContainer>
        <CheckoutHeaderBlockContainer>
          <span>Price</span>
        </CheckoutHeaderBlockContainer>
        <CheckoutHeaderBlockContainer>
          <span>Remove</span>
        </CheckoutHeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>TOTAL: ${totalPrice}</TotalContainer>
      <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
      </WarningContainer>
      <StripeCheckoutButton price={totalPrice} />
    </CheckoutPageContainer>
  );
}

export default CheckoutPage;
