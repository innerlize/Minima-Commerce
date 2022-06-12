import { Link } from 'react-router-dom';
import './Cart.css';
import useCartContext from '../../../ItemsComponents/ItemContext/CartContext.js';

function Cart() {
  const { cart, totalProductsInCart, calcTotalPrice } = useCartContext();

	return (
        <li className='cart'>
          <Link to={`/Minima-Commerce/cart`}>
            <span>{totalProductsInCart()}</span>
            <div><i className="fas fa-shopping-cart"></i></div>
          </Link>
        </li>
	);
}

export default Cart;