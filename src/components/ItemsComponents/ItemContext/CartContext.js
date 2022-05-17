import React, { createContext, useContext, useState } from 'react';

const CartContext = React.createContext();
const useCartContext = () => useContext(CartContext);

export function CartContextProvider({ children }) {
	const [cart, setCart] = useState([]);

	const addToCart = (item, stock) => {
		if (isInCart(item.id)) {
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
			return item.id !== id;
		});

		setCart(cartFilter);
	}

	const clearCart = () => {
		setCart([]);
	}

	const isInCart = (id) => {
		return cart.some( itemCart => itemCart.id === id);
	}

	const getItemFromCart = (id) => {
		return cart.find( itemCart => itemCart.id === id);
	}

	const totalProductsInCart = () => {

		let total = cart.reduce((total, currentItem) => (total + parseInt(currentItem.stock)), 0)

		return total;
	}

	const calcTotalPrice = () => {
		const total = 0;
		return total;
	}

	const contextFunction = () => console.log('Este contexto me está haciendo enojar, pero al menos ahora funciona :)')

	return(
		<CartContext.Provider value={{
										contextFunction,
										cart,
										addToCart,
										removeFromCart,
										clearCart,
										totalProductsInCart,
										calcTotalPrice
									}}>
			{children}
		</CartContext.Provider>
	)
}

export default useCartContext;