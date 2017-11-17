import React, { Component } from 'react';
import Style from '../Styles/landing.css';
import Header from '../components/Header/Header';
import Banner from '../components/Services/Techop/Banner';
import SalesforceContent from '../components/Services/Techop/Insurance';
import Footer from '../components/Footer/Footer';
import $ from 'jquery';

class Businessop extends Component {
  componentDidMount(){
      window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className='frontpage' id='fr-wrapper'>
        <Header />
        <Banner />
        <br />
        <div id='content-wrapper'>
          <SalesforceContent />
        </div>
        <br />
        <Footer />
      </div>
    )
  }
}

export default Businessop;
