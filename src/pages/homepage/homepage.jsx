import React from 'react';
import ArrivalsContainer from '../../components/arrivals-container/arrivals-container';
import FtCategoryContainer from '../../components/ft-category-container/ft-category-container';
import './homepage.scss';

const HomePage = () => (
  <div className="HomePage">
    <FtCategoryContainer />
    <ArrivalsContainer />
  </div>
);

export default HomePage;
