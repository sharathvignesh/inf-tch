import React, { Component } from 'react'
import { Link } from 'react-router'

class Tech extends Component {

  render () {
    return (
        <div id='tech-wrapper'>
          <h1>TECHNOLOGIES WE LOVE</h1>
          <p>From smartphones to smart homes and cars, we build apps beyond screen sizes and device types.
           With our unparalleled experience, creative thinking, and comprehensive processes,
           we help our clients become more competitive and high-performance businesses.</p>
           <br />
           <br />
           <div className='tech-logo-row'>
              <div className='tech-logo-col'>
                <img src={require('./salesforce.png')} alt='logo' />
                <h3>Salesforce</h3>
                <h5>Certified Administrators and Developers.</h5>
                <Link to='/technologies/salesforce'>Learn more</Link>
              </div>
              <div className='tech-logo-col'>
                <img src={require('./iot.png')} alt='logo' />
                <h3>Internet of things</h3>
                <h5>IoT Hardware and Software design and development.</h5>
                <Link to='/technologies/iot'>Learn more</Link>
              </div>
              <div className='tech-logo-col'>
                <img src={require('./analytics.png')} alt='logo' />
                <h3>Data solutions</h3>
                <h5>Big data analytics specialists.</h5>
                <Link to='/technologies/datasolutions'>Learn more</Link>
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
