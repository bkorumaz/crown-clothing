import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setCartVisibility } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';




function CartIcon () {

    const dispatch = useDispatch();
    const cartItems = useSelector( state => state.cart.cartItems );

    console.log('I am being called');
    return (
    <div className='cart-icon' onClick={() => dispatch(setCartVisibility())}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{ cartItems.reduce((accumulator, {quantity}) => accumulator + quantity, 0) }</span>
    </div>
    );
};


export default CartIcon;