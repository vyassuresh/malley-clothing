import React from 'react';
import './collection-item.scss';

const CollectionItem = ({ name, price, imageUrl }) => (
  <div className="CollectionItem">
    <div className="CollectionItem_img" style={{ backgroundImage: `url(${imageUrl})` }}></div>

    <div className="CollectionItem_footer">
      <span className="CollectionItem_name">{name}</span>
      <span className="CollectionItem_price">${price.toFixed(2)}</span>
    </div>
  </div>
);

export default CollectionItem;
