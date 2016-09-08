import React from 'react';
import ReactDOM from 'react-dom';
import Snackbar from '../index.js';
const target = document.getElementById('content');

export default class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      snackbar: true
    };

    this.showSnackBar = this.showSnackBar.bind(this);
  }

  showSnackBar() {
    const {snackbar} = this.state;
    this.setState({
      snackbar: true
    });
  }

  render() {
    const {snackbar} = this.state;
    return(<div>
      <button className="showBtn" onClick={this.showSnackBar}>Show Snackbar</button>
      <Snackbar show={snackbar} snackBarText="Application is offline!"/>
    </div>);
  }

}

ReactDOM.render(<Demo />,target);
