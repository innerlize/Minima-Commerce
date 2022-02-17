import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMock } from '../../helpers/mock.js';
import Item from './Item/Item.js';
import './ItemList.css';

const ItemList = ({ products }) => {
	const { id } = useParams();
	const filterProducts = products.filter(({ category }) => category === id);

	return (
		<div className='item-container'>

			{
				!id && products.map((product) => <Item key={product.id} product={product} />)
			}

			{
				id && filterProducts.map((product) => {
					return(
						<Item key={product.id} product={product} />
					)
				})
			}

		</div>
	)
}

// {
// 	products.filter(({category}) => category === products.id)
// }

export default ItemList;