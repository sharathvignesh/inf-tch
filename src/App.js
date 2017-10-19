import React, { Component } from 'react';
import logo from './logo.svg';
import './Styles/App.css';
// import './Styles/flexboxgrid.css';
import ReactQuill from 'react-quill';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
    this.handleChange = this.handleChange.bind(this)
    this.buttonClick = this.buttonClick.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }
  buttonClick(){
    console.log(this.state.text);
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React-text-editor</h2>
        </div>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <ReactQuill
                        value={this.state.text}
                        onChange={this.handleChange} >
                <div className="my-editing-area" style={{minHeight: '200px'}}/>
            </ReactQuill>
          </div>
        </div>
        <button onClick={this.buttonClick}>publish</button>
      </div>
    )
  }
}

export default App;
