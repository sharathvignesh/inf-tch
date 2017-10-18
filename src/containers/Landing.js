import React, { Component } from 'react';
import postedStyle from '../Styles/PostedLanding.css';
import Header from '../components/PostedLanding/Header';
import Promo from '../components/PostedLanding/Promo';
import Section from '../components/PostedLanding/Section';
import Pricing from '../components/PostedLanding/Pricing';
import Footer from '../components/PostedLanding/Footer';
import $ from 'jquery';

class Landing extends Component {
componentDidMount(){
  $(function () {
  var isMobile = /Android|iPhone|iPad|iPod|IEMobile|Blackberry|Opera Mini/i.test(navigator.userAgent);
  window.isMobile = isMobile;
  var isShowingMobileMenu = false;
  var hasScrolledDown = false;

  function timeAgo (dateString) {
      var rightNow = new Date();
      var then = new Date(dateString);
      var diff = rightNow - then;
      var second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24,
      week = day * 7;
      if (isNaN(diff) || diff < 0) {
          return '';
      }
      if (diff < second * 2) {
          return 'now';
      }
      if (diff < minute) {
          return Math.floor(diff / second) + 's';
      }
      if (diff < minute * 2) {
          return '1m';
      }
      if (diff < hour) {
          return Math.floor(diff / minute) + 'm';
      }
      if (diff < hour * 2) {
          return '1h';
      }
      if (diff < day) {
          return  Math.floor(diff / hour) + 'h';
      }
      if (diff > day && diff < day * 2) {
          return '1d';
      } else {
          return Math.floor(diff / day) + 'd';
      }
  }

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
                $('#fr-header').css('opacity', opacity);
            }

            var resize = function () {
                scroll();
            }

            if (!isMobile) {
                $(window).resize(resize);
                $(window).scroll(scroll);
                resize();
            }

  $('.timestamp').each(function (index, el) {
      var timestamp = $(el).data('timestamp');
      $(el).text(timeAgo(timestamp));
  });

});
}
  render() {
    return (
      <div className='frontpage' id='fr-wrapper'>
        <Header />
          <div className='container'>
              <Promo />
              <div className='promo-clear'>
              </div>
          <Section />
          <Pricing />
          <Footer />
        </div>
      </div>
    )
  }
}

export default Landing;
