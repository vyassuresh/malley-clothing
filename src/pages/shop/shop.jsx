import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview';

import './shop.scss';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return this.state.collections.map(({ id, ...otherCollectionProps }) => {
      return <CollectionPreview key={id} {...otherCollectionProps} />;
    });
  }
}

export default ShopPage;
