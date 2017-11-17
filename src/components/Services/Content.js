import React, { Component } from 'react';
import Branches from './Branches'

class Content extends Component {

  render () {
    return (
        <div id='tech-wrapper'>
          <p>
            Infotech thrives hard to offer best service to its customers on a wide specturm of areas like Business operations, Technology operations, Consulting etc.
            Our team of experts leave no stone unturned in providing best services for our cutomers. 
          </p>
          <br />
            <Branches />
        </div>
    )
  }
}

export default Content
