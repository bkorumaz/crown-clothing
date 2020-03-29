import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { setCartVisibility } from '../../redux/cart/cart.actions';


const CartDropdown = ({ history, ...otherProps }) => {
    const cartItems = useSelector( state => selectCartItems(state) );
    const dispatch = useDispatch();

    const handleCheckoutButton = () => {
        history.push('/checkout');
        dispatch(setCartVisibility());
        console.log(otherProps);
    }

    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
                    <span className='empty-message'>Your Cart is Empty</span> }
            </div>
            <CustomButton onClick={handleCheckoutButton}>GO TO CHECKOUT</CustomButton>
        </div>
        );
};

export default withRouter(CartDropdown);