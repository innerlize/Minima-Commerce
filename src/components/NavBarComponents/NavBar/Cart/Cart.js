import './Cart.css';
import useCartContext from '../../../ItemsComponents/ItemContext/CartContext.js';

function Cart() {
  const { cart, totalProductsInCart, calcTotalPrice } = useCartContext();

	return (
        <li className='cart'>
          <span>{totalProductsInCart()}</span>
          <div><i className="fas fa-shopping-cart"></i></div>
        </li>
	);
}

export default Cart;