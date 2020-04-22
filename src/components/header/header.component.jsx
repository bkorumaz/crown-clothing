import React from 'react';
import { auth } from '../../firebase/firebase.utils'
import {ReactComponent as Logo} from '../../assets/crown.svg'  //special syntax for importing svg in react 
import './header.styles.scss';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';
import { useSelector } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.components';
import { selectCartVisibility } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

function Header () {

    const currentUser = useSelector( state => selectCurrentUser(state)  );
    const cartVisibility = useSelector( state => selectCartVisibility(state) );


    return(
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>OPTION</OptionLink>

                {
                    currentUser ?
                    <OptionDiv onClick={ () => auth.signOut() }>SIGN-OUT</OptionDiv>
                    :
                    <OptionLink to='/signin'>SIGN-IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            { cartVisibility ? <CartDropdown/> : null }
        </HeaderContainer>
    )
}

export default Header;