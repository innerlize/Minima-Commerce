import useCartContext from '../../ItemsComponents/ItemContext/CartContext.js';
import { Link } from 'react-router-dom';
import Cart from './Cart/Cart.js';
import './NavBar.css';

function NavBar() {
  const { contextFunction } = useCartContext();
  contextFunction();

  return (
    <nav className='pageNav'>
      <Link to='/Minima-Commerce' className='logo'>
        <div></div>
        <p>MINIMA COMMERCE</p>
      </Link>
      <ul>
        <Cart />
        <li><a href="#">PRODUCTS</a></li>
        <li><a href="#">ABOUT US</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;