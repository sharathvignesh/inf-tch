import React, { Component } from 'react';
import Style from '../Styles/landing.css';
import Header from '../components/Header/Header';
import Banner from '../components/Technologies/Banner';
import Content from '../components/Technologies/Content';
import Footer from '../components/Footer/Footer';

class Technologies extends Component {
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

export default Technologies;
