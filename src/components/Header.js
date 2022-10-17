import '../style/Header.css';
import { Link } from 'react-router-dom';
import logo from '../gallery/logo.png';

const Header = () => {
  return (
    <nav className="header">
      <Link to="/home">
        <div>
          <img className="logo" src={logo} alt="logo"></img>
        </div>
      </Link>
      <div className="route-container">
        <Link to="/home">
          <div className="route">Home</div>
        </Link>
        <Link to="/products">
          <div className="route">Products</div>
        </Link>
        <Link to="/cart">
          <div className="route">cart</div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
