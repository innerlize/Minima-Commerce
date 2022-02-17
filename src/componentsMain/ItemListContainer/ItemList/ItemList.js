import React from 'react';
import Item from './Item/Item.js';
import './ItemList.css';

const ItemList = ({ products }) => {
	return (
		<div className='item-container'>

			{
				products.map((product) => <Item key={product.id} product={product} />)
			}

		</div>
	)
}

export default ItemList;