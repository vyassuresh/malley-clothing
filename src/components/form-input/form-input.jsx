import React from 'react';

import './form-input.scss';

const FormInput = ({ handleChange, ...otherProps }) => (
  <div className="form-group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
  </div>
);

export default FormInput;
