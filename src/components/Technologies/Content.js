import React, { Component } from 'react';
import Branches from './Branches'

class Content extends Component {

  render () {
    return (
        <div id='tech-wrapper'>
          <p>
Infotech delivers full-cycle Salesforce consulting services to help you embrace the world’s leading CRM platform in the entirety of its benefits for your business.
We have worked with a variety of industries, delivering precise solutions to grow sales and customer engagement in Banking, Retail, Manufacturing, Media, Public Sector and more.</p>
          <br />
            <Branches />
        </div>
    )
  }
}

export default Content
