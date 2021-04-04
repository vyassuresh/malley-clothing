import React from 'react';
import CategoryItem from '../category-item/category-item';
import './category-container.scss';

class CategoryContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/qkxVcjy/jackets.jpg',
          id: 1,
        },
        {
          title: 't-shirts',
          imageUrl: 'https://i.ibb.co/9vRXXbw/tshirts.jpg',
          id: 2,
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/C0Q8pZH/shoes.jpg',
          id: 3,
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/Qm6C1t7/women.jpg',
          size: 'large',
          id: 4,
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/NCSD2v0/men.jpg',
          size: 'large',
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="CategoryContainer row">
        {this.state.categories.map(({ title, imageUrl, size, id }) => (
          <CategoryItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default CategoryContainer;
