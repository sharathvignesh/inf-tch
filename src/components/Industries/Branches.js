import React, { Component } from 'react'
import { Link } from 'react-router'

class Branches extends Component {

  render () {
    return (
        <div id='tech-wrapper'>
          <p>Infotech has established long-term partnerships with clients and customers, who have benefitted from dozens of successfully delivered solutions across diverse industries.</p>
           <div className='tech-logo-row'>
             <div className='branches-card' id='banking'>
                <div>
                  <h2>BANKING & FINANCIAL SERVICES</h2>
                   <p style={{'color': 'white'}}>
                     With Banking sector on distruption, machine learning playing a key
                     role in wealth management and cryptocurrency like bitcoin threatening the traditional banking
                     establishments,
                    </p>
                    <Link to='industries/banking'><span>Learn more</span></Link>
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
                    <Link to='industries/technology'><span>Learn more</span></Link>
                </div>
             </div>
             <div className='branches-card' id='insurance'>
                <div>
                  <h2>INSURANCE</h2>
                  <p style={{'color': 'white'}}>
                      We help customers rethink Insurance for a Digital World, helping them innovate, gain agility and compete in a customer-driven digital world
                    </p>
                    <Link to='industries/insurance'><span>Learn more</span></Link>
                </div>
             </div>
             <div className='branches-card' id='retail'>
                <div>
                  <h2>RETAIL</h2>
                  <p style={{'color': 'white'}}>
                      We help retailers deliver great buying experiences to digital-savvy customers.
                    </p>
                    <Link to='industries/retail'><span>Learn more</span></Link>
                </div>
             </div>
             <div className='branches-card' id='airport'>
                <div>
                  <h2>SMART AIRPORTS / TRAVEL</h2>
                  <p style={{'color': 'white'}}>
                      To remain competitive in Travel industry, you need to ensure that your IT systems and business processes were more efficient, flexible, and reliable.
                    </p>
                    <Link to='industries/travel'><span>Learn more</span></Link>
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
                    <Link to='industries/public'><span>Learn more</span></Link>
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
