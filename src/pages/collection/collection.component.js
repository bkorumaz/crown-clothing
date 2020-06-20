import React from "react";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import './collection.styles.scss';
import { 
  CollectionPageContainer,
  CollectionPageTitleContainer,
  CollectionPageItemsContainer
 } from './collection.styles';

const CollectionPage = ({ match }) => {
  const collection = useSelector((state) =>
    selectCollection(match.params.collectionId)(state)
  ); //todo: investigate this

  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionPageTitleContainer>{title}</CollectionPageTitleContainer>
      <CollectionPageItemsContainer>
        { items.map( item => <CollectionItem key={item.id} item={item}/> )}
      </CollectionPageItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
