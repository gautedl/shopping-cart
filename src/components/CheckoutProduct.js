import '../style/CheckoutProduct.css';
import { useState } from 'react';

const CheckoutProduct = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

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

  const inputChangeHandler = (e) => {
    console.log(e);
  };

  return (
    <div className="product-line">
      <div className="content">
        <img className="checkout-img" src={item.src} alt="item" />
        <span className="item-text">
          {item.title} - {item.size}cm
        </span>
        <span className="price-title">kr{item.price}</span>
        <div className="buttons">
          <button
            className="quantity minus"
            type="button"
            onClick={decrementQuantity}
          >
            -
          </button>

          <input
            className="quantity val"
            value={quantity}
            onChange={inputChangeHandler}
          />

          <button
            className="quantity pluss"
            type="button"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>
        <span className="subtotal">kr{item.price * quantity}</span>
      </div>
      <div className="horisontal-line-2"></div>
    </div>
  );
};

export default CheckoutProduct;
