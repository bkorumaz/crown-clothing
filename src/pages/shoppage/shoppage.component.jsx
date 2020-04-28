import React, { useEffect } from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import { useDispatch } from "react-redux";
import {
  firestore,
  convertCollectionsSnopshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";

function ShopPage({ match }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const collectionsRef = firestore.collection("collections");
    const unsubscribeFromSnapshot = collectionsRef.onSnapshot(
      async (snapshot) => {
        const transformedData = convertCollectionsSnopshotToMap(snapshot)
        dispatch(updateCollections(transformedData));
        return unsubscribeFromSnapshot;
      }
    );
  }, []);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}

export default ShopPage;
