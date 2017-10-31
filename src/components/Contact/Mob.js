import React, { Component } from 'react'

class Mob extends Component {

  render () {
    return (
        <div id='tech-wrapper'>
          <div className='mobile-contact'>
            <div className='mobile-contact-card'>
              <div><img src={require('./au.png')} alt='logo'/></div>
              <div>
                <h2>Sydney Office</h2>
                <p>
                  Level 1, Octagon Building, <br />
                  110, George Street,<br />
                  Parramatta, NSW - 2150,<br />
                  Australia.
                </p>
              </div>
            </div>
            <div className='mobile-contact-card'>
              <div><img src={require('./ny.png')} alt='logo'/></div>
              <div>
                <h2>New York Office</h2>
                <p>
                  1745, Broadway, 17th floor, <br />
                  New Yokr city, <br />
                  New York, 10019.<br />
                  USA.
                </p>
              </div>
            </div>
            <div className='mobile-contact-card'>
              <div><img src={require('./in.png')} alt='logo'/></div>
              <div>
                <h2>Hyderabad Office</h2>
                <p>
                  Level 7, Maximus Tower, <br />
                  Building 2A, Mindspace complex,<br />
                  Hi-Tech city, Hyderabad.<br />
                  Telangana 500 081, India.
                </p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Mob
