import React, { Component } from 'react';
import Style from '../Styles/landing.css';
import Header from '../components/Header/Header';
import Banner from '../components/About/Banner';
import Aboutus from '../components/About/Aboutus';
import Whatwedo from '../components/About/Whatwedo';
import Footer from '../components/Footer/Footer';
import $ from 'jquery';

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
          <Aboutus />
          <Whatwedo />
        </div>
        <br />
        <Footer />
      </div>
    )
  }
}

export default Landing;
