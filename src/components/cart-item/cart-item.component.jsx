import React from "react";
import "./cart-item.styles.scss";
import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from "./cart-item.styles";

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
