import React, { Component } from 'react';
import Style from '../Styles/landing.css';
import Header from '../components/Header/Header';
import Tech from '../components/Landing/Technologies';
import Customers from '../components/Landing/Customers';
import Testimony from '../components/Landing/Testimony';
import Banner from '../components/Landing/Banner';
import Footer from '../components/Footer/Footer';

class Landing extends Component {
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
          <Tech />
          <br /><br />
          <Customers />
          <br /><br />
          <Testimony />
        </div>
        <br />
        <Footer />
      </div>
    )
  }
}

export default Landing;
