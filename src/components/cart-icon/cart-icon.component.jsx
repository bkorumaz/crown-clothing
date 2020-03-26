import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setCartVisibility } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'; 




function CartIcon () {

    const dispatch = useDispatch();
    const cartItemsCount = useSelector( state => selectCartItemsCount(state) );

    return (
    <div className='cart-icon' onClick={() => dispatch(setCartVisibility())}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{ cartItemsCount }</span>
    </div>
    );
};


export default CartIcon;