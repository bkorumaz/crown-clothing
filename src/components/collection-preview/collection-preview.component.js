import React, { lazy, Suspense } from 'react';
import './collection-preview.styles.scss'
const CollectionItem = lazy( () => import('../collection-item/collection-item.component'));

function CollectionPreview ({title, items}) {

    return(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'> { 
        items
        .filter( ( item, index )=> index < 4)
        .map( (item) => (<Suspense key={item.id} fallback={<h2>Loading</h2>}><CollectionItem key={item.id} item={item}/></Suspense>) ) }
        </div>
    </div>
    
    )
}

export default CollectionPreview;