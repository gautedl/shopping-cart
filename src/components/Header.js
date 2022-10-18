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
          <div className="route">Home</div>
        </Link>
        <Link to="/products">
          <div className="route">Products</div>
        </Link>

        <div className="cart-div">
          <Link to="/cart">
            <img className="header-icon" src={cart} alt="cart" />
          </Link>
          {cartSize === 0 ? (
            <div />
          ) : (
            <div className="cart-quantity">{cartSize}</div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
