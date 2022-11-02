import { Link } from 'react-router-dom';

import '../style/Home.css';
import Slideshow from './Slideshow';

const Home = () => {
  return (
    <div className="home-container">
      <div className="main-home-img" />
      <div className="carousel-container">
        <div className="decline-line" />
        <Slideshow />
        <div className="call-to-action">
          <Link to="products">
            <span className="cta-title">Shop Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
