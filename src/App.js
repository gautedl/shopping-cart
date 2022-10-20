import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Products from './components/Products';
import Checkout from './components/Checkout';
import Product from './components/Product';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Cart } from './Cart/Cart';
import { useEffect, useState } from 'react';
import CheckoutBasket from './components/CheckoutBasket';

function App() {
  const cartSize = Cart.reduce((acc, obj) => {
    return acc + obj.quantity;
  }, 0);

  const [numberOfItems, setNumberOfItems] = useState(cartSize);
  const [addedItem, setAddedItem] = useState(false)

  

  useEffect(() => {
    setNumberOfItems(cartSize)
    setAddedItem(false)
  }, [addedItem, cartSize])


  return (
    <Router>
      <div className="App">
        <Header cartSize={numberOfItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Checkout setAddedItem={setAddedItem}/>} />
          <Route path="/products/:id" element={<Product setAddedItem={setAddedItem}/>} />
          <Route path='/checkout' element={<CheckoutBasket />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
