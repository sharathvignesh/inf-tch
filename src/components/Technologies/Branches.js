import React, { Component } from 'react'
import { Link } from 'react-router'

class Branches extends Component {

  render () {
    return (
        <div id='tech-wrapper'>
           <div className='tech-logo-row'>
             <div className='branches-card' id='sales'>
                <div>
                  <h2>SALESFORCE CONSULTANCY</h2>
                   <p style={{'color': 'white'}}>
                      Build trust with clients faster than ever before. Customers expect financial
                      services to provide guidance to help achieve their personal
                      and professional goals.
                    </p>
                    <Link to='industries/banking'><span>Learn more</span></Link>
                </div>
             </div>
             <div className='branches-card' id='iot-con'>
                <div>
                  <h2>IOT CONSULTANCY</h2>
                  <p style={{'color': 'white'}}>
                      The expectation for consistent experiences means having a strategy to
                      implement and optimize digital engagement with data insights at
                      every customer touchpoint.
                    </p>
                    <Link to='industries/technology'><span>Learn more</span></Link>
                </div>
             </div>
             <div className='branches-card' id='data-sol'>
                <div>
                  <h2>DATA SOLUTIONS</h2>
                  <p style={{'color': 'white'}}>
                      Build trust with clients faster than ever before.
                      Customers expect financial services to provide guidance to help achieve
                      their personal and professional goals.
                    </p>
                    <Link to='industries/insurance'><span>Learn more</span></Link>
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
