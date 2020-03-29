import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils'
import {ReactComponent as Logo} from '../../assets/crown.svg'  //special syntax for importing svg in react 
import './header.styles.scss';
import { useSelector } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.components';
import { selectCartVisibility } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

function Header () {

    const currentUser = useSelector( state => selectCurrentUser(state)  );
    const cartVisibility = useSelector( state => selectCartVisibility(state) );


    return(
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>SHOP</Link>
                <Link to='/contact' className='option'>OPTION</Link>

                {
                    currentUser ?
                    <div className='option' onClick={ () => auth.signOut() }>SIGN-OUT</div>
                    :
                    <Link to='/signin' className='option'>SIGN-IN</Link>
                }
                <CartIcon />
            </div>
            { cartVisibility ? <CartDropdown/> : null }
        </div>
    )
}

export default Header;