import React, { Component } from 'react';
import Style from '../Styles/landing.css';
import Header from '../components/Header/Header';
import Banner from '../components/Services/Banner';
import Salesforce from '../components/Services/Salesforce';
import Iot from '../components/Services/Iot';
import Data from '../components/Services/Data';
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
          <Salesforce />
          <Iot />
          <Data />
        </div>
        <br />
        <Footer />
      </div>
    )
  }
}

export default Landing;
