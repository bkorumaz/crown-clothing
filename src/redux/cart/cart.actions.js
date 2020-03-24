import { CartActionTypes } from './cart.action-types';

export const setCartVisibility = () => ({
    type: CartActionTypes.TOGGLE_VISIBILITY,
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});