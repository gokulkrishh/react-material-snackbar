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
    this.onCloseCallback = this.onCloseCallback.bind(this);
  }

  showSnackBar() {
    const {snackbar} = this.state;
    this.setState({
      snackbar: true
    });
  }

  onCloseCallback() {
    console.log("SnackBar is closed");
  }

  render() {
    const {snackbar} = this.state;
    return(<div>
      <button className="showBtn" onClick={this.showSnackBar}>Show Snackbar</button>
      <SnackBar 
        onCloseCallback={this.onCloseCallback}
        show={snackbar} 
        snackBarText="Offline" 
        timer={5000}
      />
    </div>);
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
