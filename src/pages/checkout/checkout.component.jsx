import React from 'react';
import './checkout.styles.scss';
import { useSelector } from 'react-redux';
import { selectCartTotalPrice, selectCartItems } from '../../redux/cart/cart.selectors';

function CheckoutPage(){
    
    const totalPrice = useSelector( state => selectCartTotalPrice(state) );
    const cartItems = useSelector( state => selectCartItems(state) );

    return(
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-item'>
                    <span>Product</span>
                </div>
                <div className='header-item'>
                    <span>Description</span>
                </div>
                <div className='header-item'>
                    <span>Quantity</span>
                </div>
                <div className='header-item'>
                    <span>Price</span>
                </div>
                <div className='header-item'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map( item =>item.name )}
            <div className='total'>
                <span>TOTAL: ${totalPrice}</span>
            </div>
        </div>
    );

}

export default CheckoutPage;