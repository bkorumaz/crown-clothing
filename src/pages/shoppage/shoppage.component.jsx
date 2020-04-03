import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { useSelector } from 'react-redux'
import { selectShopItems } from '../../redux/shop/shop.selectors'

function ShopPage (props) {

    const collections = useSelector(state => selectShopItems(state))
return(
<div className='shop-page'>
{collections.map( ({id, ...otherCollectionProps}) => ( <CollectionPreview key={id} {...otherCollectionProps} /> ))}
</div>
)
}

export default ShopPage
