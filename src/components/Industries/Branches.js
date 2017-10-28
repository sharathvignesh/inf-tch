import React, { Component } from 'react'
import { Link } from 'react-router'

class Branches extends Component {

  render () {
    return (
        <div id='tech-wrapper'>
          <p>With more than a decade of providing expertise and service, Infotech has established long-term partnerships with clients and customers, who have benefitted from dozens of successfully delivered solutions across diverse industries.</p>
           <div className='tech-logo-row'>
             <div className='branches-card' id='banking'>
                <div>
                  <h2>BANKING & FINANCIAL SERVICES</h2>
                   <p style={{'color': 'white'}}>
                      Build trust with clients faster than ever before. Customers expect financial
                      services to provide guidance to help achieve their personal
                      and professional goals.
                    </p>
                    <Link><span>Learn more</span></Link>
                </div>
             </div>
             <div className='branches-card' id='tech'>
                <div>
                  <h2>TELECOMMUNICATION & TECHNOLOGY</h2>
                  <p style={{'color': 'white'}}>
                      The expectation for consistent experiences means having a strategy to
                      implement and optimize digital engagement with data insights at
                      every customer touchpoint.
                    </p>
                    <Link><span>Learn more</span></Link>
                </div>
             </div>
             <div className='branches-card' id='insurance'>
                <div>
                  <h2>INSURANCE</h2>
                  <p style={{'color': 'white'}}>
                      Build trust with clients faster than ever before.
                      Customers expect financial services to provide guidance to help achieve
                      their personal and professional goals.
                    </p>
                    <Link><span>Learn more</span></Link>
                </div>
             </div>
             <div className='branches-card' id='retail'>
                <div>
                  <h2>RETAIL</h2>
                  <p style={{'color': 'white'}}>
                      Customers expect your service & sales to service their needs anytime,
                      from anywhere – beyond the point of sale. Our expertise streamlines
                      processes and systems, so you can provide a seamless customer experience.
                    </p>
                    <Link><span>Learn more</span></Link>
                </div>
             </div>
             <div className='branches-card' id='airport'>
                <div>
                  <h2>SMART AIRPORTS / TRAVEL</h2>
                  <p style={{'color': 'white'}}>
                      With AI-driven business models radically disrupting every market,
                      it’s critical that companies of all sizes integrate, innovate,
                      and bring new integrated systems to capture and retain market share.
                    </p>
                    <Link><span>Learn more</span></Link>
                </div>
             </div>
             <div className='branches-card' id='public-service'>
                <div>
                  <h2>PUBLIC SERVICES</h2>
                  <p style={{'color': 'white'}}>
                      You need a partner who understands that secure,
                      reliable data access and compliance are critical. Our clients include universities,
                       government offices, utilities, and other public entities.
                    </p>
                    <Link><span>Learn more</span></Link>
                </div>
             </div>
           </div>
           <br />
           <br />
           <hr />
        </div>
    )
  }
}

export default Branches
