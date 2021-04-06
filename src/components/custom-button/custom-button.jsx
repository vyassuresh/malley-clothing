import React from 'react';

import './custom-button.scss';

const CustomButton = ({ children, extraClass, ...otherProps }) => (
  <button className={`btn ${extraClass}`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
