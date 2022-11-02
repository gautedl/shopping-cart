import '../style/CheckoutProduct.css';
import { useState } from 'react';
import { Cart, deleteFromCart } from '../Cart/Cart';

const CheckoutProduct = (props) => {
  const [quantity, setQuantity] = useState(props.item.quantity);
  const [visible, setVisible] = useState(true);

  const decrementQuantity = () => {
    if (quantity === 0) {
      return;
    } else {
      setQuantity(quantity - 1);
      props.item.quantity = quantity - 1;
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    props.item.quantity = quantity + 1;
  };

  const inputChangeHandler = (e) => {
    console.log(e);
  };

  const deleteProduct = () => {
    deleteFromCart(props.item);
    setVisible(false);
    props.setAddedItem(true);
    if (Cart.length === 0) {
      props.setItemsInCart(false);
    }
  };

  return (
    <div>
      {visible && (
        <div className="product-line">
          <div className="content">
            <div className="img-div">
              <div className="del-btn-container">
                <button
                  className="delete-btn"
                  type="button"
                  onClick={deleteProduct}
                >
                  X
                </button>
              </div>
              <img className="checkout-img" src={props.item.src} alt="item" />
            </div>
            <div className="product-info">
              <span className="item-text">
                {props.item.title} - {props.item.size}cm
              </span>
              <span className="price-title">kr{props.item.price}</span>
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
              <span className="subtotal">kr{props.item.price * quantity}</span>
            </div>
          </div>
          <div className="horisontal-line-2"></div>
        </div>
      )}
    </div>
  );
};

export default CheckoutProduct;
