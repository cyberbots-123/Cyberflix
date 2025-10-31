import React, { useRef, useEffect } from 'react';
import './Home5.css';
import { assets } from '../../assets/assets';

const Home5 = () => {
  const clientImages = [
    assets.Client1,
    assets.Client2,
    assets.Client3,
    assets.Client4,
    assets.Client5,
    assets.Client6,
    assets.Client7,
    assets.Client8,
    assets.Client9,
    assets.Client10,
    assets.Client11,
    assets.Client12,
    assets.Client13,
    assets.Client14,
    assets.Client15,
    assets.Client16,
  ];

  const trackRef = useRef();

  useEffect(() => {
    const track = trackRef.current;
    const totalWidth = clientImages.length * 130 * 2;
    track.style.width = `${totalWidth}px`;
  }, [clientImages]);

  return (
    <div className="home5-container">
      <div className="home5-text">
        <p className="home5-title">Our Trusted Partners</p>
        <p className="home5-description">
          Trusted Around the World By Organizations.
        </p>
      </div>
      <div className="home5-carousels">
        <div className="home5-carousel">
          <div ref={trackRef} className="carousel-track">
            {[...clientImages, ...clientImages].map((image, index) => (
              <img key={index} src={image} alt={`Client_${index + 1}`} className="carousel-image" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home5;
