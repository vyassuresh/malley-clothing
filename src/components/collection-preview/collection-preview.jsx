import React from 'react';
import CollectionItem from '../collection-item/collection-item';

import './collection-preview.scss';

const CollectionPreview = ({ title, items }) => (
  <div className="CollectionPreview row">
    <h2 className="HeadingTwo HeadingTwo--dots">{title}</h2>
    <div className="CollectionPreview_gallery">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherItemProps }) => {
          return <CollectionItem key={id} {...otherItemProps} />;
        })}
    </div>
  </div>
);

export default CollectionPreview;
