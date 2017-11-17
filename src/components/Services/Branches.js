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
                      Our expertise in technologies combined with in-depth understanding of the industry helps us to develop solutions for improving operational efficiency.
                    </p>
                    <Link to='services/business'><span>Learn more</span></Link>
                </div>
             </div>
             <div className='branches-card' id='techno'>
                <div>
                  <h2>TECHNOLOGY OPERATIONS</h2>
                  <p style={{'color': 'white'}}>
                      To scale up or scale out, we know exactly how to scale right as our technology knowledge runs deep so your business can reach great heights. 
                    </p>
                    <Link to='services/technology'><span>Learn more</span></Link>
                </div>
             </div>
             <div className='branches-card' id='consult'>
                <div>
                  <h2>CONSULTING</h2>
                  <p style={{'color': 'white'}}>
                      We help to improve your Business model and make profit from emerging opportunities and market dynamics with our domain expertise and proven methodology.
                    </p>
                    <Link to='services/consulting'><span>Learn more</span></Link>
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
