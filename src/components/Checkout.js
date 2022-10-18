import { Cart } from '../Cart/Cart';
import CheckoutProduct from './CheckoutProduct';
import { useEffect, useState } from 'react';
import '../style/Checkout.css';

const Checkout = () => {
  const [item, setItem] = useState();

  useEffect(() => {
    console.log(Cart);
    setItem(Cart.map((x) => <CheckoutProduct key={x.title} item={x} />));
  }, []);

  return (
    <div className="checkout">
      <div className="checkout-header">
        <div></div>
        <span>PRODUCT</span>
        <span>PRICE</span>
        <span>QUANTITY</span>
        <span>SUBTOTAL</span>
      </div>
      <div>{item}</div>
    </div>
  );
};

export default Checkout;
