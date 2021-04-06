import React from 'react';

import './ft-category-item.scss';

const FtCategoryItem = ({ title, imageUrl }) => (
  <div className="FtCategoryItem">
    <div className="FtCategoryItem__img">
      <img src={imageUrl} alt="" />
    </div>
    <div className="FtCategoryItem__content">
      <div className="FtCategoryItem__text">
        <div className="FtCategoryItem__heading">
          <h2 className="HeadingTwo">{title}</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </div>
);

export default FtCategoryItem;
