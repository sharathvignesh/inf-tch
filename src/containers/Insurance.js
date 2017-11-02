import React, { Component } from 'react';
import Style from '../Styles/landing.css';
import Header from '../components/Header/Header';
import Banner from '../components/Industries/Insurance/Banner';
import InsuranceContent from '../components/Industries/Insurance/Insurance';
import Footer from '../components/Footer/Footer';

class Insurance extends Component {
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
          <InsuranceContent />
        </div>
        <br />
        <Footer />
      </div>
    )
  }
}

export default Insurance;
