import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';


const CartDropdown = () => {
    const cartItems = useSelector( state => selectCartItems(state) );
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
                    <span className='empty-message'>Your Cart is Empty</span> }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
        );
};

export default CartDropdown;