import React, { Component } from 'react'
// import './../Styles/postedLanding.css';

class Pricing extends Component {

  render () {
    return (
      <div className='pricing'>
        <h2>Simple pricing</h2>
        <div className='pricing-section'>
            <div className='pricing-container left'>
                <h4 className='space-it'>Free</h4>
                <h1 className='price space-it'><span>$</span>0</h1>
                <hr></hr>
                <ul className='list-unstyled'>
                    <li>one</li>
                    <li>one</li>
                    <li>one</li>
                </ul>
                <a href='' className='submit getstarted'>Get Started</a>
            </div>
            <div className="pricing-container right">
                <h4 className="space-it">Pro</h4>
                <h1 className="price space-it"><span>$</span>4.99</h1>
                <hr></hr>
                <ul className="list-unstyled">
                    <li>one</li>
                    <li>one</li>
                    <li>one</li>
                    <li>one</li>
                    <li>one</li>
                    <li>one</li>
                </ul>
                <a href="" className="submit pro">Get Started</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Pricing
