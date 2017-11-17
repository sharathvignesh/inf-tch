import React, { Component } from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
       mobileNavFlag: false,
       indusNavFlag: false,
       servNavFlag: false,
       techNavFlag: false,
       indsubMenuFlag: false,
       servsubMenuFlag: false,
       techsubMenuFlag: false
     }
    this.mobileNav = this.mobileNav.bind(this);
    this.toggleFalse = this.toggleFalse.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.toggleIndusMenu = this.toggleIndusMenu.bind(this);
    this.toggleServMenu = this.toggleServMenu.bind(this);
    this.toggleTechMenu = this.toggleTechMenu.bind(this);
    this.toggleindSubMenu = this.toggleindSubMenu.bind(this);
    this.toggleservSubMenu = this.toggleservSubMenu.bind(this);
    this.toggletechSubMenu = this.toggletechSubMenu.bind(this);
  }
  toggleFalse=()=>{
    this.setState({indusNavFlag: false, servNavFlag: false, techNavFlag: false})
  }
  toggleIndusMenu=()=>{
    this.setState({indusNavFlag: !this.state.indusNavFlag, servNavFlag: false, techNavFlag: false})
  }
  toggleServMenu=()=>{
    this.setState({servNavFlag: !this.state.servNavFlag, indusNavFlag: false, techNavFlag: false})
  }
  toggleTechMenu=()=>{
    this.setState({techNavFlag: !this.state.techNavFlag, indusNavFlag: false, servNavFlag: false})
  }
  toggleMobileMenu=()=>{
    this.setState({mobileNavFlag: !this.state.mobileNavFlag})
  }
  toggleindSubMenu=()=>{
      this.setState({indsubMenuFlag: !this.state.indsubMenuFlag});
  }
  toggleservSubMenu=()=>{
      this.setState({servsubMenuFlag: !this.state.servsubMenuFlag});
  }
  toggletechSubMenu=()=>{
      this.setState({techsubMenuFlag: !this.state.techsubMenuFlag});
  }
  mobileNav () {
    console.log("nav bar");
    return (<div><ul id='mobilenav'>
      <li><Link to='/'>HOME</Link></li>
      <li><Link to='/discover'>DISCOVER US</Link></li>
      <li><Link to='/industries'>INDUSTRIES</Link><i onClick={this.toggleindSubMenu} style={{'paddingLeft': '30px'}} className="fa fa-chevron-down" aria-hidden="true"></i></li>
        {this.state.indsubMenuFlag ? this.showSubMenuMob('ind') : null}
      <li><Link to='/services'>SERVICES</Link><i onClick={this.toggleservSubMenu} style={{'paddingLeft': '30px'}} className="fa fa-chevron-down" aria-hidden="true"></i></li>
        {this.state.servsubMenuFlag ? this.showSubMenuMob('serv') : null}
      <li><Link to='/technologies'>TECHNOLOGIES</Link><i onClick={this.toggletechSubMenu} style={{'paddingLeft': '30px'}} className="fa fa-chevron-down" aria-hidden="true"></i></li>
        {this.state.techsubMenuFlag ? this.showSubMenuMob('tech') : null}
      <li><Link to='/contact'>CONTACT US</Link></li>
    </ul></div>);
  }

  showSubMenuMob = (menu) => {
    if(menu === 'ind') {
      return (
        <ul id='indus-nav-mob'>
          <li><Link to='/industries/banking'>BANKING</Link></li>
          <li><Link to='/industries/technology'>TELECOMMUNICATION & TECHNOLOGY</Link></li>
          <li><Link to='/industries/insurance'>INSURANCE</Link></li>
          <li><Link to='/industries/retail'>RETAIL</Link></li>
          <li><Link to='/industries/travel'>TRAVEL</Link></li>
          <li><Link to='/industries/public'>PUBLIC SERVICES</Link></li>
        </ul>
      );
    }
    else if (menu === 'serv') {
      return (
        <ul id='indus-nav-serv'>
          <li><Link to='/services/business'>BUSINESS OPERATIONS</Link></li>
          <li><Link to='/services/technology'>TECHNOLOGY OPERATIONS</Link></li>
          <li><Link to='/services/consulting'>CONSULTING</Link></li>
        </ul>
      );
    }
    else if (menu === 'tech') {
      return (
        <ul id='indus-nav-tech'>
          <li><Link to='/technologies/salesforce'>SALESFORCE</Link></li>
          <li><Link to='/technologies/iot'>IOT</Link></li>
          <li><Link to='/technologies/datasolutions'>DATASOLUTIONS</Link></li>
        </ul>
      );
    }
  }
  indusNav () {
    console.log("indus nav bar");
    return (<div onMouseLeave={this.toggleIndusMenu}><ul id='indus-nav'>
      <ul className='navigation' style={{'display': '-webkit-box'}}>
      <li><Link to='/industries/banking'>BANKING</Link></li>
      <li><Link to='/industries/technology'>TELECOMMUNICATION & TECHNOLOGY</Link></li>
      <li><Link to='/industries/insurance'>INSURANCE</Link></li>
      <li><Link to='/industries/retail'>RETAIL</Link></li>
      <li><Link to='/industries/travel'>TRAVEL</Link></li>
      <li><Link to='/industries/public'>PUBLIC SERVICES</Link></li>
      </ul>
    </ul></div>);
  }
  servNav () {
    console.log("indus nav bar");
    return (<div onMouseLeave={this.toggleServMenu}><ul id='indus-nav'>
      <ul className='navigation' style={{'display': '-webkit-box', 'paddingLeft': '40%'}}>
      <li><Link to='/services/business'>BUSINESS OPERATIONS</Link></li>
      <li><Link to='/services/technology'>TECHNOLOGY OPERATIONS</Link></li>
      <li><Link to='/services/consulting'>CONSULTING</Link></li>
      </ul>
    </ul></div>);
  }
  techNav () {
    console.log("indus nav bar");
    return (<div onMouseLeave={this.toggleTechMenu}><ul id='indus-nav'>
      <ul className='navigation' style={{'display': '-webkit-box', 'paddingLeft': '50%'}}>
      <li><Link to='/technologies/salesforce'>SALESFORCE</Link></li>
      <li><Link to='/technologies/iot'>IOT</Link></li>
      <li><Link to='/technologies/datasolutions'>DATASOLUTIONS</Link></li>
      </ul>
    </ul></div>);
  }

  render () {
    var contents
      contents = <div>
      <ul className='navigation'>
        <li className='' onMouseEnter={this.toggleFalse}><Link to='/'>HOME</Link></li>
        <li className='' onMouseEnter={this.toggleFalse}><Link to='/discover'>DISCOVER US</Link></li>
        <li className='' onMouseEnter={this.toggleIndusMenu}><Link to='/industries'>INDUSTRIES</Link></li>
        <li className='' onMouseEnter={this.toggleServMenu}><Link to='/services'>SERVICES</Link></li>
        <li className='' onMouseEnter={this.toggleTechMenu}><Link to='/technologies'>TECHNOLOGIES</Link></li>
        <li className='' onMouseEnter={this.toggleFalse}><Link to='/contact' id='contact_us_header'>CONTACT US</Link></li>
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
      {this.state.indusNavFlag ? this.indusNav() : null}
      {this.state.servNavFlag ? this.servNav() : null}
      {this.state.techNavFlag ? this.techNav() : null}
      </div>
    )
  }
}

export default Header
