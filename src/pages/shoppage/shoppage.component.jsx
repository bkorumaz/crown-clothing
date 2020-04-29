import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import {
  firestore,
  convertCollectionsSnopshotToMap,
} from "../../firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

function ShopPage({ match }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const collectionsRef = firestore.collection("collections");
    const unsubscribeFromSnapshot = collectionsRef.onSnapshot((snapshot) => {
      const transformedData = convertCollectionsSnopshotToMap(snapshot);
      dispatch(updateCollections(transformedData));
      setLoading(false);
    });
    return unsubscribeFromSnapshot; // todo: works in three different ways or does it work?. without unsubscribe or calling this return function in onSnapshot method. or should this be an async func?
  }, []); //todo: ask this in stackoverflow

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
      <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
    </div>
  );
}

export default ShopPage;
