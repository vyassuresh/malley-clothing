import React from 'react';
import ArrivalsItem from '../arrivals-item/arrivals-item';
import './arrivals-container.scss';

class ArrivalsContainer extends React.Component {
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
      ],
    };
  }

  render() {
    return (
      <div className="ArrivalsContainer">
        <div className="row">
          <h2 className="HeadingTwo HeadingTwo--dots">Newest Arrivals</h2>
          <div className="ArrivalsContainer_gallery">
            {this.state.categories.map(({ title, imageUrl, size, id }) => (
              <ArrivalsItem key={id} title={title} imageUrl={imageUrl} size={size} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ArrivalsContainer;
