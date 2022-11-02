import '../style/Header.css';
import { Link } from 'react-router-dom';
import logo from '../gallery/icons/logo.png';
import cart from '../gallery/icons/shopping-cart.svg';

const Header = ({ cartSize }) => {
  return (
    <nav className="header">
      <Link to="/">
        <div>
          <img className="logo" src={logo} alt="logo"></img>
        </div>
      </Link>
      <div className="route-container">
        <Link to="/">
          <h1 className="route">Home</h1>
        </Link>
        <Link to="/products">
          <h1 className="route">Products</h1>
        </Link>
        {cartSize === 0 ? (
          <div />
        ) : (
          <div className="cart-div">
            <Link to="/cart">
              <img className="header-icon" src={cart} alt="cart" />
            </Link>

            <div className="cart-quantity">{cartSize}</div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
