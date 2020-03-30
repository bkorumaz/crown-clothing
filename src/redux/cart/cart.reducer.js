import { CartActionTypes } from './cart.action-types';
import { addItemToCart, decreaseItem } from './cart.utils';

const INITIAL_STATE = {
    visibility : false,
    cartItems : []
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_VISIBILITY:
            return {
                ...state,
                visibility: !state.visibility
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.DECREASE_ITEM:
            return {
                ...state,
                cartItems: decreaseItem( state.cartItems, action.payload )
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter( cartItem => cartItem.id !== action.payload.id )
            }
        default:
            return state;
    }
};

export default userReducer;