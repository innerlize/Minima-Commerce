import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarProducts.css';

function NavBarProducts() {
	return(
		<nav className='productsNav'>
			<ul>
				<li><Link to='/Minima-Commerce'>ALL</Link></li>
				<li><Link to='/Minima-Commerce/category/keyboard'>KEYBOARDS</Link></li>
				<li><Link to='/Minima-Commerce/category/mouse'>MOUSES</Link></li>
				<li><Link to='/Minima-Commerce/category/monitor'>MONITORS</Link></li>
				<li><Link to='/Minima-Commerce/category/headset'>HEADSETS</Link></li>
			</ul>
		</nav>
	)
}

export default NavBarProducts;