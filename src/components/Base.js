import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';


class Base extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}


Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
