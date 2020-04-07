import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { useSelector } from "react-redux";
import { selectCollectionsForOverview } from "../../redux/shop/shop.selectors";
import './collections-overview.styles.scss';

const CollectionsOverview = () => {
  const collections = useSelector(state => selectCollectionsForOverview(state));

  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
