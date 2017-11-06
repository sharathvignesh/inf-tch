import React, { Component } from 'react'
import { Link } from 'react-router'

class Footer extends Component {

  render () {
    return (
        <footer>
          <div>
            <div className='footer-left'>
              <h3>Infotech Consultancy</h3>
              <span>Level 1, Octagon Building,  <br />110 George Street, <br /> Parramatta, NSW. 2150 <br />Australia</span>
                <br />
              <h4>+61 421995678</h4>
              <h4>admin@infotechconsultancy.com.au</h4>
              <br /><br />
            </div>
            <div className='footer-right'>
              <ul className='navigation'>
                <li className=''><Link to='/'>HOME</Link></li>
                <li className=''><Link to='/discover'>DISCOVER</Link></li>
                <li className=''><Link to='/industries'>INDUSTRIES</Link></li><br/>
                <li className=''><Link to='/services'>SERVICES</Link></li>
                <li className=''><Link to='/contact'>CONTACT US</Link></li>
              </ul>
              <br />
                  <a class="contactIcons" href="https://www.facebook.com/infotechconsultancy.com.au/">
                    <i className="fa fa-facebook-square" aria-hidden="true">
                    </i>
                  </a>
                  <a class="contactIcons" href="https://www.linkedin.com/">
                    <i className="fa fa-linkedin-square" aria-hidden="true">
                    </i>
                  </a>
              <br />
              <br />

              <h5>Infotech Consultancy © 2017, ABN: 89164333322</h5>

            </div>
          </div>
        </footer>
    )
  }
}

export default Footer
