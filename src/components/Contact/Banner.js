import React, { Component } from 'react'

class Banner extends Component {

  render () {
    return (
        <div className='hero-contact'>
          <img id='desk-map' src={require('./map.png')} alt='logo' />
        </div>
    )
  }
}

export default Banner
