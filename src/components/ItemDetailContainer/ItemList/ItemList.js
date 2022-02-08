import React from 'react';
import ItemDetail from './ItemDetail/ItemDetail.js';
import './ItemList.css';

const ItemList = ({ products }) => {
	return (
		<div className='item-container'>

			{
				products?.map((product) => <ItemDetail key={product.id} product={product} />)
			}

		</div>
	)
}

export default ItemList;