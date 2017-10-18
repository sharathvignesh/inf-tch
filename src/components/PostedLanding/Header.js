import React, { Component } from 'react'
import { Link } from 'react-router'
// import '../../Styles/PostedLanding.css';
import { browserHistory } from 'react-router'

class Header extends Component {
  constructor (props) {
    super(props)
    this.handleError = this.logout.bind(this)
  }
  logout () {
    localStorage.clear()
    browserHistory.push('/')
  }
  render () {
    var contents
      contents = <ul className='navigation'>
        <li className=''><Link to='/'>HOME</Link></li>
        <li className=''><Link to='/'>ABOUT US</Link></li>
        <li className=''><Link to='/'>INDUSTRIES</Link></li>
        <li className=''><Link to='/'>SERVICES</Link></li>
        <li className=''><Link to='/' id='contact_us_header'>CONTACT US</Link></li>
      </ul>
    return (
      <div id='fr-header'>
        <h1><a href='/'><img src={require('./infotech_logo.png')} alt='logo' /></a></h1>
        {contents}
      </div>
    )
  }
}

export default Header
