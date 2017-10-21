import React, { Component } from 'react';
import postedStyle from '../Styles/landing.css';
import Header from '../components/PostedLanding/Header';
import Tech from '../components/PostedLanding/Technologies';
import Customers from '../components/PostedLanding/Customers';
import Testimony from '../components/PostedLanding/Testimony';
import Banner from '../components/PostedLanding/Banner';
import Footer from '../components/PostedLanding/Footer';
import $ from 'jquery';

class Landing extends Component {
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