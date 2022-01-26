import './NavBar.css'
import Cart from './Cart/Cart.js'

function NavBar() {
  return (
    <nav>
      <a href="" className='logo'>
        <div></div>
        <p>MINIMA COMMERCE</p>
      </a>
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