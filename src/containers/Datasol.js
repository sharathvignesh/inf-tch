import React, { Component } from 'react';
import Style from '../Styles/landing.css';
import Header from '../components/Header/Header';
import Banner from '../components/Technologies/Datasolutions/Banner';
import SalesforceContent from '../components/Technologies/Datasolutions/Insurance';
import Footer from '../components/Footer/Footer';
import $ from 'jquery';

class Banking extends Component {
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

export default Banking;
