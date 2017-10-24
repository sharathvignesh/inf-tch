import React, { Component } from 'react'
import { Link } from 'react-router'
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
              <ul className='navigation'>
                <li className=''><Link to='/'>HOME</Link></li>
                <li className=''><Link to='/discover'>DISCOVER</Link></li>
                <li className=''><Link to='/'>INDUSTRIES</Link></li><br/>
                <li className=''><Link to='/'>SERVICES</Link></li>
                <li className=''><Link to='/contact'>CONTACT US</Link></li>
              </ul><br />
              <i class="fa fa-facebook-square" aria-hidden="true"></i><i class="fa fa-linkedin-square" aria-hidden="true"></i><br /><br />
              <h5>Infotech Consultancy © 2017, ABN: 89164333322</h5>
            </div>
          </div>
        </footer>
    )
  }
}

export default Footer
