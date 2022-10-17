import gallery from '../gallery/index';
import ProductCard from './ProductCard';
import '../style/Products.css';
import { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(
      gallery.map((x) => (
        <ProductCard
          key={x.title}
          imgSrc={x.src}
          title={x.title}
          price={x.price}
        />
      ))
    );
  }, []);

  return <div className="products-container">{products}</div>;
};

export default Products;
