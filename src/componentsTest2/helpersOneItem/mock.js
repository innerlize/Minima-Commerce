const unicItem = { id: 1, imagen: 'https://images.pexels.com/photos/6623763/pexels-photo-6623763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', name: 'RedStyle Keyboard', desc: 'Keyboard with red keycaps.', switches: 'RED', rgb: 'YES', price: 1100, stock: 5, category: 'keyboard' }

export const getItem = new Promise((resolve) => {
	setTimeout(() => {
		resolve(unicItem)
	}, 2000)
})