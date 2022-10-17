import '../style/Card.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ imgSrc, title, price }) => {
  return (
    <div className="card">
      <Link to={title}>
        <img className="product-img" src={imgSrc} alt="product" />
        <span className="product-title">{title}</span>
      </Link>
      <span className="price">kr {price},-</span>
    </div>
  );
};

export default ProductCard;
