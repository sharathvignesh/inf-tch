import React, { Component } from 'react'
import { Link } from 'react-router'
// import '../../Styles/PostedLanding.css';
import { browserHistory } from 'react-router'

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
       mobileNavFlag: false,
     }
    this.mobileNav = this.mobileNav.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu=()=>{
    this.setState({mobileNavFlag: !this.state.mobileNavFlag})
  }
  mobileNav () {
    console.log("nav bar");
    return (<div><ul id='mobilenav'>
      <li><Link to='/'>HOME</Link></li>
      <li><Link to='/discover'>DISCOVER</Link></li>
      <li><Link to='/'>INDUSTRIES</Link></li>
      <li><Link to='/'>SERVICES</Link></li>
      <li><Link to='/contact'>CONTACT US</Link></li>
    </ul></div>);
  }

  render () {
    var contents
      contents = <div>
      <ul className='navigation'>
        <li className=''><Link to='/'>HOME</Link></li>
        <li className=''><Link to='/discover'>DISCOVER</Link></li>
        <li className=''><Link to='/'>INDUSTRIES</Link></li>
        <li className=''><Link to='/'>SERVICES</Link></li>
        <li className=''><Link to='/contact' id='contact_us_header'>CONTACT US</Link></li>
      </ul>
      <div className='navigation-mobile'>
        <span className='' onClick={this.toggleMobileMenu} style={{'paddingRight': '2em'}}><Link>&#9776;</Link></span>
      </div>

    </div>
    return (
      <div>
      <div id='fr-header'>
        <h1><a href='/'><img src={require('./infotech_logo.png')} alt='logo' /></a></h1>
        {contents}
      </div>
      {this.state.mobileNavFlag ? this.mobileNav() : null}
      </div>
    )
  }
}

export default Header
