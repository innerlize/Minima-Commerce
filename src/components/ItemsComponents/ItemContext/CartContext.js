import React, { createContext, useContext, useState } from 'react';

const CartContext = React.createContext();
const useCartContext = () => useContext(CartContext);

export function CartContextProvider({ children }) {
	const [cart, setCart] = useState([]);

	const addToCart = (item, stock) => {
		if (isInCart()) {
			const newCart = cart.map(cartItem => {
				if (cartItem.id === item.id) {
					const copyProduct = {... cartItem};
					copyProduct.stock += stock;
					return copyProduct;
				}

				else return cartItem;
			})

			setCart(newCart);
		}

		else {
			const newItem = {... item, stock};
			setCart([... cart, newItem]);
		}
	}

	const removeFromCart = (id) => {
		const newCart = [... cart]
		const cartFilter = newCart.filter( item => {
			return item.id == id;
		})
	}

	const isInCart = () => {
		return true;
	}

	const contextFunction = () => console.log('Este contexto me está haciendo enojar, pero al menos ahora funciona :)')

	return(
		<CartContext.Provider value={{ contextFunction, cart, addToCart }}>
			{children}
		</CartContext.Provider>
	)
}

export default useCartContext;