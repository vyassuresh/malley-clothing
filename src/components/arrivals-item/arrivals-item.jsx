import React from 'react';
import './arrivals-item.scss';

const ArrivalsItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`Category`}>
      <div
        className="Category__bg"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="Category__content">
        <div className="Category__heading">
          <h3 className="HeadingThree HeadingThree--button">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ArrivalsItem;
