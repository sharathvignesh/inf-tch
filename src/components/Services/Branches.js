import React, { Component } from 'react'
import { Link } from 'react-router'

class Branches extends Component {

  render () {
    return (
        <div id='tech-wrapper'>
           <div className='tech-logo-row'>
             <div className='branches-card' id='business'>
                <div>
                  <h2>BUSNIESS OPERATIONS</h2>
                   <p style={{'color': 'white'}}>
                      Build trust with clients faster than ever before. Customers expect financial
                      services to provide guidance to help achieve their personal
                      and professional goals.
                    </p>
                    <Link to='industries/banking'><span>Learn more</span></Link>
                </div>
             </div>
             <div className='branches-card' id='techno'>
                <div>
                  <h2>TECHNOLOGY OPERATIONS</h2>
                  <p style={{'color': 'white'}}>
                      The expectation for consistent experiences means having a strategy to
                      implement and optimize digital engagement with data insights at
                      every customer touchpoint.
                    </p>
                    <Link to='industries/technology'><span>Learn more</span></Link>
                </div>
             </div>
             <div className='branches-card' id='consult'>
                <div>
                  <h2>CONSULTING</h2>
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
