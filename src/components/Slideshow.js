import gallery from '../gallery/index';
import React from 'react';
import '../style/Slideshow.css';

const delay = 3500;

const Slideshow = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {gallery.map((image, index) => (
            <img className="slide" alt="" key={index} src={image.src}></img>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
