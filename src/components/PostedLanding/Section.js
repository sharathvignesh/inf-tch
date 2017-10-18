import React, { Component } from 'react'
// import './../Styles/postedLanding.css';

class Section extends Component {
  componentDidMount () {
    (function (window) {
      var windowHeight = window.innerHeight
      var scrollTop = window.scrollTop
      var background = document.getElementById('background-screenshot')
      var background_top = background.getBoundingClientRect().top - document.body.getBoundingClientRect().top
      var background_height = background.getBoundingClientRect().bottom - background.getBoundingClientRect().top
      var parameters = {
        hundred: {
          x: 530,
          y: 4,
          delay: 0.00,
          scale: 1
        },
        wrench: {
          x: 361,
          y: 41,
          delay: 0.6,
          scale: 1
        },
        news: {
          x: 319,
          y: -89,
          delay: 0.2,
          scale: 1
        },
        new: {
          x: 444,
          y: 103,
          delay: 0.1,
          scale: 1
        },
        speaker: {
          x: 214,
          y: 150,
          delay: 0.3,
          scale: 1
        },
        bell: {
          x: 414,
          y: 350,
          delay: 0.3,
          scale: 0.8
        },
        tick: {
          x: 2,
          y: -61,
          delay: 0.2,
          scale: 1
        },
        rocket: {
          x: 47,
          y: 231,
          delay: 0.2,
          scale: 1
        },
        pencil: {
          x: 20,
          y: 45,
          delay: 0.2,
          scale: 1
        }
      }
      var icons = document.querySelectorAll('.icon')
      function transform (translation, rotation, scale) {
        return 'translate(' + translation[0].toFixed(2) + 'px,' + translation[1].toFixed(2) + 'px) ' + 'rotate(' + rotation.toFixed(2) + ') ' + 'scale(' + scale.toFixed(2) + ',' + scale.toFixed(2) + ')'
      };
      var width = 370
      var height = 500
      icons.forEach(function (icon) {
        icon.style.transform = transform([Math.random() * width, Math.random() * height], 0, 1)
        icon.firstElementChild.style.animationDelay = parameters[icon.id].delay + 's'
      })

      function render () {
        var t = (scrollTop + windowHeight - background_top) / (background_height + windowHeight) - 0.5
        icons.forEach(function (icon, i) {
          var params = parameters[icon.id]
          var x = params.x
          var y = params.y + (t * 160)
          var enter_at = y / background_height
          if (t > -0.3 && icon.className != 'icon entering') {
            icon.className = 'icon entering'
          }
          icon.style.transform = transform([x, y], 0, params.scale)
        })
      }

      function onScroll () {
        scrollTop = window.scrollY
        window.requestAnimationFrame(render)
      }

      window.addEventListener('scroll', onScroll)

      window.addEventListener('resize', function () {
        windowHeight = window.innerHeight
      })
    })(window)
  }

  render () {
    return (
      <div className='section details'>
        <div className='details-inner'>
          <div className='details-copy-and-graphics'>
            <div className='graphics'>
              <img id='background-screenshot' src={require('./img/Group4.png')} style={{opacity: 0.5}} alt='group4' />
              <div className='icon' id='speaker' >
                <img src={require('./img/speaker.png')} alt='speaker' />
              </div>
              <div className='icon' id='news' >
                <img src={require('./img/news.png')} alt='news' />
              </div>
              <div className='icon' id='new' >
                <img src={require('./img/New.png')} alt='new' />
              </div>
              <div className='icon' id='tick' >
                <img src={require('./img/tick.png')} alt='tick' />
              </div>
              <div className='icon' id='rocket' >
                <img src={require('./img/rocket.png')} alt='rocket' />
              </div>
              <div className='icon' id='hundred' >
                <img src={require('./img/100.png')} alt='100' />
              </div>
              <div className='icon' id='wrench' >
                <img src={require('./img/wrench.png')} alt='wrench' />
              </div>
              <div className='icon' id='pencil' >
                <img src={require('./img/pencil.png')} alt='pencil' />
              </div>
              <div className='icon' id='bell' >
                <img src={require('./img/bell.png')} alt='bell' />
              </div>
            </div>

            <div className='details-copy'>
              <p><strong>Let's get to the point.</strong></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <p><strong>Keep your customers updated and aware.</strong></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p><strong>Custom landing page & embeddable widget.</strong></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p><strong>Changelogs, Blogs & more.</strong>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p><strong>API support.</strong>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Section
