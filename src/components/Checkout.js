import { Cart } from '../Cart/Cart';
import CheckoutProduct from './CheckoutProduct';
import { useEffect, useState } from 'react';
import '../style/Checkout.css';
import { Link } from 'react-router-dom';

const Checkout = (props) => {
  const [item, setItem] = useState();
  const [sum, setSum] = useState(0)
  const [shipping, setShipping] = useState(0)

  useEffect(() => {
    const value = Cart.reduce((acc, obj) => {
      return acc + (obj.quantity * obj.price)
    }, 0)
    setSum(value)
    setShipping(79)
  }, [])


  useEffect(() => {
    setItem(Cart.map((x) => <CheckoutProduct key={x.title} item={x} setAddedItem={props.setAddedItem}/>));
  }, [props.setAddedItem]);

  const updateBasket = () => {
    const value = Cart.reduce((acc, obj) => {
      return acc + (obj.quantity * obj.price)
    }, 0)
    setSum(value)
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
      <div>{item}</div>
      
      { sum > 0 ?
      <>
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
        <div className='basket-header'>
          Basket Totals
        </div>
          <tbody>
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
          </tbody>
          <tr>
            <th className='button-row'></th>
            <td className='button-row'>
              <Link to='/checkout'>
                <button className='btn' type='button'>Proceed</button>
              </Link>
              </td>
          </tr>
        </table>
      </div>
      </> : <></>}
      
    </div>
  );
};

export default Checkout;
