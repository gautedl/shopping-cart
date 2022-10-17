import '../style/Card.css';

const ProductCard = ({ imgSrc, title, price }) => {
  return (
    <div className="card">
      <img className="product-img" src={imgSrc} alt="product" />
      <span className="product-title">{title}</span>
      <span className="price">kr {price},-</span>
    </div>
  );
};

export default ProductCard;
