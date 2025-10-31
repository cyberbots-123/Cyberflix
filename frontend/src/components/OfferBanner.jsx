import React, { useState } from 'react';
import './OfferBanner.css';
import { assets } from '../assets/assets';

const OfferBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  const handleClose = () => {
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="offer-banner-overlay">
      <div className="offer-banner-content">
        <img
          src={assets.Panel} // Replace with your offer image
          alt="Offer Banner"
          className="banner-image"
        />
        <button className="close-btn" onClick={handleClose}>×</button>
      </div>
    </div>
  );
};

export default OfferBanner;
