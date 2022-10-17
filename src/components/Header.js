import '../style/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="header">
      <Link to="/home">
        <div>LOGO</div>
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
