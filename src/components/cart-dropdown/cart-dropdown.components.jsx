import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';


const CartDropdown = ({ history }) => {
    const cartItems = useSelector( state => selectCartItems(state) );
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
                    <span className='empty-message'>Your Cart is Empty</span> }
            </div>
            <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
        </div>
        );
};

export default withRouter(CartDropdown);