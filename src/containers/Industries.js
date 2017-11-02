import React, { Component } from 'react';
import Style from '../Styles/landing.css';
import Header from '../components/Header/Header';
import Banner from '../components/Industries/Banner';
import Branches from '../components/Industries/Branches';
import Footer from '../components/Footer/Footer';

class Industries extends Component {
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
          <Branches />
        </div>
        <br />
        <Footer />
      </div>
    )
  }
}

export default Industries;
