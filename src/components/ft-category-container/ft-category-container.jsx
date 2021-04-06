import React from 'react';
import FtCategoryItem from '../ft-category-item/ft-category-item';

import './ft-category-container.scss';

class FtCategoryContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [
        {
          title: 'womens collection',
          imageUrl:
            'https://hn.arrowpress.net/lusion/wp-content/uploads/2020/10/cate-df-3.jpg.webp',
          id: 1,
        },
        {
          title: 'mens collection',
          imageUrl:
            'https://hn.arrowpress.net/lusion/wp-content/uploads/2020/10/cate-df-2.jpg.webp',
          id: 2,
        },
      ],
    };
  }

  render() {
    return (
      <div className="FtCategoryContainer">
        <div className="row">
          {this.state.categories.map(({ id, ...otherCategoryProps }) => {
            return <FtCategoryItem key={id} {...otherCategoryProps} />;
          })}
        </div>
      </div>
    );
  }
}

export default FtCategoryContainer;
