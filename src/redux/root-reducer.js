import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //or we could import sessionStorage

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']  // we don't store user because we use firebase in there
}

const rootReducer = combineReducers ({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer
});

export default persistReducer(persistConfig, rootReducer); //this will return modified version of root reducer expect now with persistence capabilities thanks to this persistReducer function

