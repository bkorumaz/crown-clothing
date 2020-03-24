import { CartActionTypes } from './cart.action-types';

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
                cartItems: [...state.cartItems, action.payload]
            }
        default:
            return state;
    }
};

export default userReducer;