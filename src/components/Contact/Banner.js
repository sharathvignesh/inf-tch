import React, { Component } from 'react'
// import './../Styles/postedLanding.css';

class Banner extends Component {

  render () {
    return (
        <div className='hero-contact'>
          <img src={require('./map.png')} alt='logo' />
        </div>
    )
  }
}

export default Banner
