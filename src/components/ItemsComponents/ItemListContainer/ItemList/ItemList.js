import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsDB from '../../ItemMocks/products/products.js';
import Item from './Item/Item.js';
import './ItemList.css';

const ItemList = ({ products }) => {

	return (

		<div className='item-container'>

			{
				products.map( thisProduct => {

					return(

						<Item product={thisProduct} key={thisProduct.id} />

					)

				} )

			}

		</div>

	)
}

export default ItemList;