import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ match }) => {

  const collection = useSelector(state => selectCollection(match.params.collectionId)(state)); //investigate this

  console.log(collection);
  return (
    <div className="collection-page">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

export default CollectionPage;
