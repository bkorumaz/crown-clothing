import ShopActionTypes from "./shop.action-types";
import {
  firestore,
  convertCollectionsSnopshotToMap,
} from "../../firebase/firebase.utils";
import { useDispatch } from "react-redux";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsToUpdate) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsToUpdate,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionsRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    
    collectionsRef.get().then((snapshot) => {
      const transformedData = convertCollectionsSnopshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(transformedData));
    }).catch(error=> dispatch(fetchCollectionsFailure(error.message)));
    
  };
};
