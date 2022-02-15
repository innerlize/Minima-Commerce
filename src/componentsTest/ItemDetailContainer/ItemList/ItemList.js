import React from 'react';
import ItemDetail from './ItemDetail/ItemDetail.js';
import './ItemList.css';

const ItemList = ({ item }) => {
	return (
		<div className='item-container'>

			{
				item?.map((item) => <ItemDetail key={item.id} item={item} />)
			}

		</div>
	)
}

export default ItemList;