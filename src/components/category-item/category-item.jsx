import React from 'react';
import './category-item.scss';

const CategoryItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`Category`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="Category_content">
          <h3 className="HeadingThree HeadingThree___white">{title}</h3>
          <span className="Category_subtitle">Shop now</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
