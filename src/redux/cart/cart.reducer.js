import { CartActionTypes } from './cart.action-types';
import { addItemToCart } from './cart.utils';

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
        default:
            return state;
    }
};

export default userReducer;