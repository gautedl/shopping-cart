import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Products from './components/Products';
import Checkout from './components/Checkout';
import Product from './components/Product';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Cart } from './Cart/Cart';
import { useEffect, useState, useRef } from 'react';

function App() {
  const cartSize = Cart.reduce((acc, obj) => {
    console.log(acc);
    return acc + obj.quantity;
  }, 0);

  const [numberOfItems, setNumberOfItems] = useState(cartSize);
  const [addedItem, setAddedItem] = useState(false)

  

  useEffect(() => {
    setNumberOfItems(cartSize)
    setAddedItem(false)
  }, [addedItem])


  return (
    <Router>
      <div className="App">
        <Header cartSize={numberOfItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Checkout />} />
          <Route path="/products/:id" element={<Product setAddedItem={setAddedItem}/>} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
