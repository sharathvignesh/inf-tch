import React, { Component } from 'react';
import Style from '../Styles/landing.css';
import Header from '../components/Header/Header';
import Banner from '../components/Contact/Banner';
import Form from '../components/Contact/Form';
import Mob from '../components/Contact/Mob';
import Info from '../components/Contact/Info';
import Footer from '../components/Footer/Footer';

class Contact extends Component {
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
        <Mob />
          <div className='contact-row'>
            <div className='contact-col'>
              <h1>Send us a message</h1><br />
              <Form />
            </div>
            <div id='info-right' className='contact-col'>
              <h1>Contact Information</h1><br /><br />
              <Info />
            </div>
          </div>
        </div>
        <br />
        <Footer />
      </div>
    )
  }
}

export default Contact;
