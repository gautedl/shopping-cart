import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import gallery from '../gallery/index';
import '../style/Product.css';
import { Cart } from '../Cart/Cart';


const Product = (props) => {
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    for (const element of gallery) {
      if (id === element.title) {
        setItem(element);
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

  const inputChangeHandler = (e) => {
    console.log(e);
  };

  const addToCart = () => {
    const index = Cart.findIndex((i) => i.title === item.title);

    if (quantity === 0) {
      return;
    }

    if (index > -1) {
      Cart[index].quantity += quantity;
    } else {
      item.quantity = quantity;
      Cart.push(item);
    }

    props.setAddedItem(true)
    
  };

  return (
    <>
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
            <button className="basket-btn" type="button" onClick={addToCart}>
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Product;
