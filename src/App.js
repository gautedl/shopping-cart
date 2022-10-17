import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';
import Product from './components/Product';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
