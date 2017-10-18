import React, { Component } from 'react';
// import './../Styles/postedLanding.css';
import { Link } from 'react-router';

class Promo extends Component {

  render() {
    return (
      <div className="promo">
          <h1 className="logo">Posted</h1>
          <h2>Beautiful product update pages.</h2>
          <p className="service-description">A better way to keep your customers well informed, <br/> and updated on your product.</p>
          <Link to='/signup' className="submit create">Create</Link>
      </div>
    )
  }
}

export default Promo;
