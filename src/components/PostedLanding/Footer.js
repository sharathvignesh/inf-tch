import React, { Component } from 'react'
// import './../Styles/postedLanding.css';

class Footer extends Component {

  render () {
    return (
        <footer>
          <div>
            <div className='footer-left'>
              <h3>Infotech Consultancy</h3>
              <span>Suite 1D, Level 23, <br />Governor Phillip Tower,<br /> 1 Farrer Place, Sydney <br />NSW, 2000, Australia</span>
                <br />
              <h4>+61 421995678</h4>
              <h4>admin@infotechconsultancy.com.au</h4>
              <br /><br />
            </div>
            <div className='footer-right'>
              <h5>Infotech Consultancy © 2017, ABN: 89164333322</h5>
            </div>
          </div>
        </footer>
    )
  }
}

export default Footer
