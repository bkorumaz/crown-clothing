import { CartActionTypes } from './cart.action-types';

export const setCartVisibility = cart => ({
    type : CartActionTypes.TOGGLE_VISIBILITY,
});