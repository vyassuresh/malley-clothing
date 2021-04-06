import React from 'react';
import CustomButton from '../custom-button/custom-button';

import './ft-category-item.scss';

const FtCategoryItem = ({ title, imageUrl, desc }) => (
  <div className="FtCategoryItem">
    <div className="FtCategoryItem__img">
      <img src={imageUrl} alt="" />
    </div>
    <div className="FtCategoryItem__content">
      <div className="FtCategoryItem__text">
        <div className="FtCategoryItem__heading">
          <h2 className="HeadingTwo HeadingTwo--dots">{title}</h2>
        </div>
        <p className="u-small-text u-margin-bottom-md">{desc}</p>
        <CustomButton extraClass="btn--outline">Shop now</CustomButton>
      </div>
    </div>
  </div>
);

export default FtCategoryItem;
