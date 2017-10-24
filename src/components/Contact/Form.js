import React, { Component } from 'react'
// import './../Styles/postedLanding.css';

class Form extends Component {

  render () {
    return (
      <div>
        <form>
          <input type='email' name='email' placeholder='Name' /><br />
          <input type='email' name='email' placeholder='Mail' /><br />
          <input type='email' name='email' placeholder='Phone Number' /><br />
          <textarea rows="4" cols="50" placeholder='message'>
          </textarea>
          <input id='submit' type='submit' value='Send' />
        </form>
      </div>
    )
  }
}

export default Form
