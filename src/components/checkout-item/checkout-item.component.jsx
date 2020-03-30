import React from 'react';
import './checkout-item.styles.scss';
import { useDispatch } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart.actions';

const CheckoutItem = ( { cartItem } ) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const dispatch = useDispatch();

    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => dispatch(clearItemFromCart(cartItem))} >&#10005;</div>
        </div>
    );
}

export default CheckoutItem;