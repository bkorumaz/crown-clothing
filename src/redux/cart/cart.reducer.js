import { CartActionTypes } from './cart.action-types';

const INITIAL_STATE = {
    visibility : false
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_VISIBILITY:
            return {
                ...state,
                visibility: !state.visibility
            };
        default:
            return state;
    }
};

export default userReducer;