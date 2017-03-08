import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SnackBar from '../dist/index';

class App extends Component { 
  constructor() {
    super();
    this.state = {
      snackbar: false
    };

    this.showSnackBar = this.showSnackBar.bind(this);
    this.close = this.close.bind(this);
  }

  showSnackBar() {
    const {snackbar} = this.state;
    this.setState({
      snackbar: true
    });
  }

  close() {
    this.setState({
      snackbar: false
    });
  }

  render() {
    const {snackbar} = this.state;
    return(<div>
      <button className="showBtn" onClick={this.showSnackBar}>Show Snackbar</button>
      <SnackBar show={snackbar} timer={4000}>
        <p>Loading...</p>
        <span style={{"float": "right", marginLeft: "20px", cursor: "pointer", color: "red"}} onClick={this.close}>Close</span>
      </SnackBar>
    </div>);
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
