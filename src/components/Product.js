import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import gallery from '../gallery/index';
import '../style/Product.css';

const Product = ({ match }) => {
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    for (let i = 0; i < gallery.length; i++) {
      if (id === gallery[i].title) {
        setItem(gallery[i]);
        return;
      }
    }
  }, [id]);

  const decrementQuantity = () => {
    if (quantity === 0) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="item">
      <img className="item-img" src={item.src} alt="item" />
      <div className="item-info">
        <span className="item-title">{item.title}</span>
        <div className="horisontal-line"></div>
        <span className="title-price">kr {item.price},-</span>
        <div className="horisontal-line"></div>
        <span className="size">Size: {item.size}cm</span>
        <div className="cart-container">
          <span className="item-price-small">kr {item.price},-</span>
          <div className="buttons">
            <button
              className="quantity minus"
              type="button"
              onClick={decrementQuantity}
            >
              -
            </button>

            <input className="quantity val" value={quantity} />

            <button
              className="quantity pluss"
              type="button"
              onClick={incrementQuantity}
            >
              +
            </button>
            <button className="basket-btn" type="button">
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
