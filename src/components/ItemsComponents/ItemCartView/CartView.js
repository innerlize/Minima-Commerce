import React from 'react';
import { Link } from 'react-router-dom';
import useCartContext from '../ItemContext/CartContext.js';

function CartView() {
	const { cart, removeFromCart, clearCart, totalProductsInCart, calcTotalPrice } = useCartContext();
	console.log('Cart', cart)

	if (cart.length === 0) {
		return <div style={{ textAlign: 'center' }}>
			<h4>There's no items on your cart.</h4>
			<Link to={`/Minima-Commerce`}>Return to product catalog.</Link>
		</div>
	}

	else {
		return <div>
			{
				cart.map( itemCart => {
					return <div key={itemCart.id}>
						<h2>{itemCart.name}</h2>
						<h2>{itemCart.stock}</h2>
						<h2>${itemCart.stock * itemCart.price}</h2>
						<button onClick={() => removeFromCart(itemCart.id)}>X</button>
					</div>
				})
			}

			<p>Total price: ${cart.reduce((Total, item) => Total + (+item.price * +item.stock), 0)}</p>
			<button onClick={clearCart}>Empty Cart</button>
		</div>
	}
}

export default CartView;