import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const Base = ({ children }) => (
  <div>
    {children}
  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
