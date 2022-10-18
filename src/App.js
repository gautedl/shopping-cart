import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Products from './components/Products';
import Checkout from './components/Checkout';
import Product from './components/Product';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { cartSize } from './Cart/Cart';
import { useEffect, useState } from 'react';

function App() {
  const [numberOfItems, setNumberOfItems] = useState(cartSize);

  useEffect(() => {
    setNumberOfItems(cartSize);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header cartSize={numberOfItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Checkout />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
