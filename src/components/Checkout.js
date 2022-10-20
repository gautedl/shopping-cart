import { Cart, deleteEmptyProduct, emptyCart } from '../Cart/Cart';
import CheckoutProduct from './CheckoutProduct';
import { useEffect, useState } from 'react';
import '../style/Checkout.css';
import { Link } from 'react-router-dom';

const Checkout = (props) => {
  const [item, setItem] = useState();
  const [sum, setSum] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [itemsInCart, setItemsInCart] = useState(false);


  useEffect(() => {
    const value = Cart.reduce((acc, obj) => {
      return acc + (obj.quantity * obj.price)
    }, 0)
    setSum(value)
    setShipping(79)
    setItemsInCart((Cart.length > 0 && value > 0) ? true : false)
  }, [])


  useEffect(() => {
    setItem(Cart.map((x) => <CheckoutProduct key={x.title} item={x} setAddedItem={props.setAddedItem} setItemsInCart={setItemsInCart}/>));
  }, [props.setAddedItem]);

  const updateBasket = () => {
    const value = Cart.reduce((acc, obj) => {
      return acc + (obj.quantity * obj.price)
    }, 0)
    deleteEmptyProduct()
    setSum(value)
    props.setAddedItem(true)
    setItemsInCart((Cart.length > 0 && value > 0) ? true : false)
  }

  const handleProceed = () => {
    emptyCart();
    props.setAddedItem(true)
  }

  return (
    <div className="checkout">
      <div className="checkout-header">
        <div></div>
        <div></div>
        <span>PRODUCT</span>
        <span>PRICE</span>
        <span>QUANTITY</span>
        <span>SUBTOTAL</span>
      </div>
      
      { itemsInCart &&
      <>
      <div>{item}</div>
      <div className='checkout-footer'>
        <div className='coupon'>
          <input className='coupon-input' placeholder='Coupon Code' />
          <button className='btn' >Apply Coupon</button>
        </div>
        <button className='btn' onClick={updateBasket}>Update Basket</button>
      </div>
      <div className="horisontal-line-2"></div>
      <div className='basket'>
        <table className='basket-container'>
          <tbody>
            <tr >
              <th className='basket-header'>Basket Totals</th>
            </tr>
            <tr className='sum table-row'>
              <th className='table-title'>Sum</th>
              <td>kr{sum}</td>
            </tr>
            <tr className='shipping table-row'>
              <th className="table-title">Shipping</th>
              <td>kr{shipping}</td>
            </tr>
            <tr className='total'>
              <th>Total Sum</th>
              <td>kr{sum + shipping}</td>
            </tr>
            <tr>
              <th className='button-row'></th>
              <td className='button-row'>
                <Link to='/checkout'>
                  <button className='btn' type='button' onClick={handleProceed}>Proceed</button>
                </Link>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
      </> }  
    </div>
  );
};

export default Checkout;
