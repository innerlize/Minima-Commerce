const products = [
	{ id: '1', imagen: 'https://images.pexels.com/photos/6623763/pexels-photo-6623763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', name: 'RedStyle Keyboard', desc: 'Keyboard with red keycaps.', price: 1100, stock: 5, category: 'keyboard' },
	{ id: '2', imagen: 'https://images.pexels.com/photos/8219211/pexels-photo-8219211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', name: 'BlackStyle Keyboard', desc: 'Keyboard with full black keycaps.', price: 1000, stock: 2, category: 'keyboard' },
	{ id: '3', imagen: 'https://images.pexels.com/photos/9058886/pexels-photo-9058886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', name: 'BlackStyle Mouse', desc: 'Mouse with full black style.', price: 500, stock: 6, category: 'mouse' },
	{ id: '4', imagen: 'https://images.pexels.com/photos/7371999/pexels-photo-7371999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', name: 'WhiteStyle Mouse', desc: 'Mouse with full white style.', price: 300, stock: 7, category: 'mouse' },
	{ id: '5', imagen: 'https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', name: 'ChromeStyle Monitor', desc: 'Monitor with black/chrome style.', price: 2300, stock: 4, category: 'monitor' },
	{ id: '6', imagen: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', name: 'BlackWhiteStyle Monitor', desc: 'Monitor with black/white style.', price: 1800, stock: 3, category: 'monitor' }
]

export const getMock = new Promise((resolve) => {
	setTimeout(() => {
		resolve(products)
	}, 2000)
})

export const getProducts = () => {
	return products
}