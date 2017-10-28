import React, { Component } from 'react';
import Style from '../Styles/landing.css';
import Header from '../components/Header/Header';
import Banner from '../components/Contact/Banner';
import Form from '../components/Contact/Form';
import Info from '../components/Contact/Info';
import Footer from '../components/Footer/Footer';
import $ from 'jquery';

class Contact extends Component {
componentDidMount(){
  $(function () {
  var isMobile = /Android|iPhone|iPad|iPod|IEMobile|Blackberry|Opera Mini/i.test(navigator.userAgent);
  window.isMobile = isMobile;
  var isShowingMobileMenu = false;
  var hasScrolledDown = false;

  var scroll = function () {
                if ($(window).scrollTop() > 450) {
                    if (!hasScrolledDown) {
                        hasScrolledDown = true;
                        $('fr-header').addClass('shadow');
                    }
                } else {
                    if (hasScrolledDown) {
                        hasScrolledDown = false;
                        $('fr-header').removeClass('shadow');
                    }
                }
                var opacity = Math.max(0, (100 - $(window).scrollTop()) / 100);
                $('.promo').css('opacity', opacity);

            }

            var resize = function () {
                scroll();
            }

            if (!isMobile) {
                $(window).resize(resize);
                $(window).scroll(scroll);
                resize();
            }


});
}
  render() {
    return (
      <div className='frontpage' id='fr-wrapper'>
        <Header />
        <Banner />
        <br />
        <div id='content-wrapper'>
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
