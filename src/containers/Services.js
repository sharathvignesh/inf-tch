import React, { Component } from 'react';
import Style from '../Styles/landing.css';
import Header from '../components/Header/Header';
import Banner from '../components/Services/Banner';
import Content from '../components/Services/Content';
import Footer from '../components/Footer/Footer';

class Services extends Component {
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
          <Content/>
        </div>
        <br />
        <Footer />
      </div>
    )
  }
}

export default Services;
