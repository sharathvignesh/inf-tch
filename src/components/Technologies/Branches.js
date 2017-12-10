import React, { Component } from 'react'
import { Link } from 'react-router'

class Branches extends Component {

  render () {
    return (
        <div id='tech-wrapper'>
           <div className='tech-logo-row'>
             <div className='branches-card' id='sales'>
                <div>
                  <h2>SALESFORCE</h2>
                   <p style={{'color': 'white'}}>
                      Infotech delivers full-cycle Salesforce consulting services to help you embrace the world’s leading CRM platform in the entirety of its benefits for your business.
                    </p>
                    <Link to='technologies/salesforce'><span>Learn more</span></Link>
                </div>
             </div>
             <div className='branches-card' id='iot-con'>
                <div>
                  <h2>INTERNET OF THINGS</h2>
                  <p style={{'color': 'white'}}>
                      A common first step toward the Internet of Things is recognizing all objects uniquely through sensors. Unlike other app development projects, IoT is a little different.
                    </p>
                    <Link to='technologies/iot'><span>Learn more</span></Link>
                </div>
             </div>
             <div className='branches-card' id='data-sol'>
                <div>
                  <h2>DATA SOLUTIONS</h2>
                  <p style={{'color': 'white'}}>
                      Infotech has been rendering data analytics services that help companies flourish. Aiming to convert historical and real-time data into insights, as well as design accurate forecasting tools.
                    </p>
                    <Link to='technologies/datasolutions'><span>Learn more</span></Link>
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
