import React, { Component } from 'react'
// import './../Styles/postedLanding.css';

class Info extends Component {

  render () {
    return (
        <div>
          <i class="fa fa-map-marker" aria-hidden="true"></i><span>Suite 1D, Level 23, Governor Phillip<br />
            Tower, 1 Farrer Place, Sydney NSW,<br />
            2000, Australia</span><br /><br />
          <div><i class="fa fa-phone" aria-hidden="true"></i><h3>+61 421995678</h3></div><br /><br />
          <i class="fa fa-envelope-o" aria-hidden="true"></i><h3>admin@infotechconsultancy.com.au</h3><br /><br />
          <i class="fa fa-facebook-square" aria-hidden="true"></i><h3>fb.com/infotechconsultancy.com.au</h3><br /><br />
          <i class="fa fa-linkedin-square" aria-hidden="true"></i><h3>linkedin.com/company/infotech</h3>
        </div>
    )
  }
}

export default Info
