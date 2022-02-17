import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarProducts.css';

function NavBarProducts() {
	return(
		<nav className='productsNav'>
			<ul>
				<li><Link to='/'>ALL</Link></li>
				<li><Link to='category/keyboard'>KEYBOARDS</Link></li>
				<li><Link to='category/mouse'>MOUSES</Link></li>
				<li><Link to='category/monitor'>MONITORS</Link></li>
				<li><Link to='category/mousepad'>MOUSEPADS</Link></li>
			</ul>
		</nav>
	)
}

export default NavBarProducts;