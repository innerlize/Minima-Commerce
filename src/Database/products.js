const products = [
	{
		imagen: 'https://images.pexels.com/photos/6623763/pexels-photo-6623763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		name: 'RedStyle Keyboard',
		desc: 'Keyboard with red keycaps.',
		price: 1100,
		stock: 5,
		category: 'keyboard'
	},
	
	{
		imagen: 'https://images.pexels.com/photos/8219211/pexels-photo-8219211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		name: 'BlackStyle Keyboard',
		desc: 'Keyboard with full black keycaps.',
		price: 1000,
		stock: 2,
		category: 'keyboard'
	},

	{
		imagen: 'https://images.pexels.com/photos/9058886/pexels-photo-9058886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		name: 'BlackStyle Mouse',
		desc: 'Mouse with full black style.',
		price: 500,
		stock: 6,
		category: 'mouse'
	},

	{
		imagen: 'https://images.pexels.com/photos/7371999/pexels-photo-7371999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		name: 'WhiteStyle Mouse',
		desc: 'Mouse with full white style.',
		price: 300,
		stock: 7,
		category: 'mouse'
	},

	{
		imagen: 'https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		name: 'ChromeStyle Monitor',
		desc: 'Monitor with black/chrome style.',
		price: 2300,
		stock: 4,
		category: 'monitor'
	},

	{
		imagen: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		name: 'BlackWhiteStyle Monitor',
		desc: 'Monitor with black/white style.',
		price: 1800,
		stock: 11,
		category: 'monitor'
	},

	{
		imagen: 'https://http2.mlstatic.com/D_NQ_NP_675916-MLA40762447172_022020-O.webp',
		name: 'HyperX Cloud Flight',
		desc: 'Designed for the most demanding gamers, the HyperX Cloud Flight has everything a gamer is looking for. Its wireless connectivity allows you to move from one place to another without cables. In turn, its long-lasting battery will give you endless hours of immersive sounds in your games.',
		price: 17499,
		stock: 9,
		category: 'headset'
	},

	{
		imagen: 'https://http2.mlstatic.com/D_NQ_NP_760857-MLA44771394445_022021-O.webp',
		name: 'Logitech G733',
		desc: "Experience the adrenaline of immersing yourself in the scene in another way! Having specific headphones to play completely changes your experience in each game. With the Logitech G733 you don't miss any detail and you hear the audio as it was designed by the creators.",
		price: 21570,
		stock: 2,
		category: 'headset'
	},

	{
		imagen: 'https://http2.mlstatic.com/D_NQ_NP_777481-MLA42140820983_062020-O.webp',
		name: 'Nisuta NSKBGZ61',
		desc: 'Ideal keyboard for professional gamers! This Nisuta model stands out for its economic value in the keyboard market. In addition, its lightness and compact size make it a unique playmate, easy to carry anywhere. In turn, it includes a double micro USB input that allows connectivity with compatible devices.',
		price: 6399,
		stock: 5,
		category: 'keyboard'
	},

	{
		imagen: 'https://http2.mlstatic.com/D_NQ_NP_885364-MLA46543887149_062021-O.webp',
		name: 'HyperX Cloud Flight',
		desc: 'Corsair is a global manufacturer of high-performance equipment and technology. Its products are aimed at gamers, content creators and designers. In turn, with its keyboards you can achieve optimal performance by giving it intensive use.',
		price: 21090,
		stock: 2,
		category: 'keyboard'
	},

	{
		imagen: 'https://http2.mlstatic.com/D_NQ_NP_796587-MLA46165231779_052021-O.webp',
		name: 'Samsung F22T35',
		desc: 'Samsung is faithfully committed to providing quality products that help create a better future for people. As a leading company in the technology industry, one of its main objectives is to develop advanced and innovative solutions. That is why with this monitor you will have and enjoy a great visual experience at all times.',
		price: 36999,
		stock: 6,
		category: 'monitor'
	},

	{
		imagen: 'https://http2.mlstatic.com/D_NQ_NP_612783-MLA48690516782_122021-O.webp',
		name: 'Gadnic G4D41N-F',
		desc: 'Enjoy all the qualities that the Gadnic G4D41N-F monitor has to offer you. I perceived the images in a completely different way and complement any space in your home or office.',
		price: 33999,
		stock: 3,
		category: 'monitor'
	},

	{
		imagen: 'https://http2.mlstatic.com/D_NQ_NP_867932-MLA44283118630_122020-O.webp',
		name: 'Razer DeathAdder V2',
		desc: 'The Razer DeathAdder V2 will offer you the chance to make a difference and take advantage of your games. Its connectivity and smooth sensor will help you scroll quickly on the screen.',
		price: 3699,
		stock: 13,
		category: 'mouse'
	},

	{
		imagen: 'https://http2.mlstatic.com/D_NQ_NP_781312-MLA45385798113_032021-O.webp',
		name: 'Logitech G203 Lightsync',
		desc: "Logitech designs products and experiences that have an everyday place in people's lives, with a focus on innovation and quality. Its goal is to create truly unique and meaningful moments for its users. Logitech mice conform to the shape of your hand for hours of comfort. Without the need to move your arm to slide the cursor, your hand will be less fatigued. They are ideal for any work space and those who have a table full of various objects.",
		price: 3096,
		stock: 9,
		category: 'mouse'
	},

	{
		imagen: 'https://http2.mlstatic.com/D_NQ_NP_781312-MLA45385798113_032021-O.webp',
		name: 'Logitech G203 Lightsync',
		desc: 'With more than 20 years of experience in product manufacturing, Redragon innovates day by day in design and quality. Its objective is to produce high-end equipment for players, with excellent features and at an affordable price. Redragon mice are suitable for all occasions, whether you are entertaining at home or using them at work. Experience the comfortable and elegant design of this device.',
		price: 3779,
		stock: 4,
		category: 'mouse'
	},

	{
		imagen: 'https://http2.mlstatic.com/D_NQ_NP_751457-MLA46624117879_072021-O.webp',
		name: 'Redragon Centrophorus',
		desc: "The Centrophorus breaks through the market proving that it's not just a pretty face and solid construction, its Omron switches and Pixart 3317 optical sensor ensure fluid movement and precise clicks. All connected to the PC via a gold-plated USB plug that makes it stainless and provides the best possible conductivity.",
		price: 1931,
		stock: 7,
		category: 'mouse'
	},

	{
		imagen: 'https://http2.mlstatic.com/D_NQ_NP_757451-MLA44050272060_112020-O.webp',
		name: 'Corsair Harpoon',
		desc: 'To work from home on your computer or take advantage of leisure time, you need comfort and ease of movement. With your Corsair Harpoon RGB PRO find what you are looking for in a single device with the best technology.',
		price: 3749,
		stock: 2,
		category: 'mouse'
	},

	{
		imagen: 'https://http2.mlstatic.com/D_NQ_NP_861149-MLA41107813935_032020-O.webp',
		name: 'Logitech G432',
		desc: 'The over-ear design provides unsurpassed comfort thanks to its soft cushions. At the same time, its surround sound of the highest level becomes the protagonist of the scene.',
		price: 10999,
		stock: 8,
		category: 'headset'
	}

];

export default products;