import React from 'react';
import { Link } from 'react-router-dom';
import useCartContext from '../ItemContext/CartContext.js';
import { createBuyOrder } from '../../../Database/firebase.js';
import CartViewStyle from './CartView.css';

function CartView() {
	const { cart, removeFromCart, clearCart, totalProductsInCart, calcTotalPrice } = useCartContext();

	function handleBuyOrder() {
		const buyOrder = {
			buyer: {
				name: 'Alan',
				phone: '11223344',
				email: 'xamp@mincom.com'
			},
			items: [... cart],
			total: calcTotalPrice()
		}

		clearCart();

		createBuyOrder(buyOrder);
	}

	if (cart.length === 0) {
		return <div className='NothingOnCart'>
			<h4 className='NothingOnCart__title'>There's no items on your cart.</h4>
			<Link to={`/Minima-Commerce`} className='NothingOnCart__button'>Return to product catalog.</Link>
		</div>
	}

	else {
		return <section className='cartProducts'>
			<table>
				<thead>
					<tr>
						<th colspan='2'>PRODUCT</th>
						<th>QUANTITY</th>
						<th>PRICE</th>
						<th>DELETE</th>
					</tr>
				</thead>
				<tbody>
					{
						cart.map( itemCart => {
							return <tr key={itemCart.id}>
									<td>
										<img src={itemCart.imagen} />
									</td>
									<td>
										<h2>{itemCart.name}</h2>
									</td>
									<td>
										<h2>{itemCart.stock}</h2>
									</td>
									<td>
										<h2>${itemCart.stock * itemCart.price}</h2>
									</td>
									<td>
										<button onClick={() => removeFromCart(itemCart.id)}>X</button>
									</td>
							</tr>
						})
					}
				</tbody>
			</table>

			<button className='emptyButton' onClick={clearCart}>Empty Cart</button>
			<p className='totalPrice'>Total price: ${calcTotalPrice()}</p>
			<button className='buyButton' onClick={handleBuyOrder}>Buy!</button>
		</section>
	}
}

export default CartView;