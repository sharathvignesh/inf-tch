import React, { Component } from 'react'
// import './../Styles/postedLanding.css';

class Tech extends Component {

  render () {
    return (
        <div id='tech-wrapper'>
          <h1>OUR CUSTOMERS</h1>
          <p>As a strategic partner to our customers across industries, we help them deliver their
          business goals and drive technology led transformations. Our clients have achieved significant business
           results using our world-class solutions and have recognized us for their efforts.</p>
           <div className='tech-logo-row'>
              <div className='customer-logo-col'>
                <img src={require('./logos/Microsoft-Logo-PNG-Transparent-Image.png')} alt='logo' />
              </div>
              <div className='customer-logo-col'>
                <img src={require('./logos/tafe-nsw-logo.png')} alt='logo' style={{'width': '200px'}}/>
              </div>
              <div className='customer-logo-col'>
                <img src={require('./logos/Optus-Logo-PNG-04905.png')} alt='logo' />
              </div>
              <div className='customer-logo-col'>
                <img src={require('./logos/BT_Financial_logo.png')} alt='logo' style={{'height': '70px'}}/>
              </div>
              <div className='customer-logo-col'>
                <img src={require('./logos/Wesley-Mission-logo-200-px.png')} alt='logo' />
              </div>
              <div className='customer-logo-col'>
                <img src={require('./logos/Woolworths_logo_2012.svg.png')} alt='logo' />
              </div>
              <div className='customer-logo-col'>
                <img src={require('./logos/SITA_logo.svg.png')} alt='logo' style={{'width': '200px'}}/>
              </div>
              <div className='customer-logo-col'>
                <img src={require('./logos/logo-suncorp-bank.png')} alt='logo' />
              </div>
           </div>
           <br />
           <br />
           <hr />
        </div>
    )
  }
}

export default Tech
