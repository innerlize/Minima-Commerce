import './NavBar.css'

function NavBar() {
  return (
    <nav>
      <a href="" className='logo'>
        <div></div>
        <p>MINIMA COMMERCE</p>
      </a>
      <ul>
        <li className='cart'>
          <span>1</span>
          <div></div>
        </li>
        <li><a href="#">PRODUCTS</a></li>
        <li><a href="#">ABOUT US</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;