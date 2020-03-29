import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';


const CartItems = () => {
    const cartItems = useSelector( state => selectCartItems(state) );
    return(
        <div>
        { cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) }
        </div>
    );
}

const CartDropdown = () => {
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                <CartItems/>
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
        );
};

export default CartDropdown;