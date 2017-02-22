import React, { Component } from 'react';

export default class SnackBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSnackBar: this.props.show,
      timer: 4000
    };
    this.hideSnackbar = this.hideSnackbar.bind(this);
    this.timeout = null;
  }

  componentWillReceiveProps(nextProps) {
    var {showSnackBar, timer} = this.state;
    if (showSnackBar !== nextProps.show) {
      this.setState({
        showSnackBar: nextProps.show,
        timer: nextProps.timer
      });

      this.timeout = setTimeout(() => {
        this.setState({ showSnackBar:false });
      }, timer);
    }
  }

  hideSnackbar() {
    const {onCloseCallback} = this.props;
    this.setState({
      showSnackBar: false
    });
    clearTimeout(this.timeout);
    if (onCloseCallback) onCloseCallback();
  }

  render() {
    const {actionText, show, snackBarText} = this.props;
    const {showSnackBar} = this.state;

    var snackbarStyle = {
      position: "fixed",
      left: 0,
      right: 0,
      bottom: "-50px",
      width: "100%",
      minHeight: "50px",
      background: "#323232",
      color: "#fff",
      margin: "auto",
      display: "-webkit-box",
      display: "-ms-flexbox",
      display: "flex",
      WebkitBoxAlign: "center",
      msFlexAlign: "center",
      alignItems: "center",
      WebkitBoxPack: "justify",
      msFlexPack: "justify",
      justifyContent: "space-between",
      WebkitTransition: "bottom 0.3s cubic-bezier(0, 0, 0.30, 1)",
      transition: "bottom 0.3s cubic-bezier(0, 0, 0.30, 1)",
      fontWeight: "500",
      textTransform: "initial",
      fontSize: "14px"
    };

    var snackbarTextStyle = {
      marginLeft: "15px",
      wordBreak: "break-all",
      flexGrow: 1
    };

    var snackbarActionStyle = {
      textTransform: "uppercase",
      color: "#ff4081",
      cursor: "pointer",
      marginRight: "15px",
      border: 0,
      background: "transparent",
      fontSize: "13px",
      outline: 0
    };

    if (showSnackBar) snackbarStyle.bottom = 0;

    return(
      <div style={snackbarStyle}>
        <p style={snackbarTextStyle}>{snackBarText}</p>
        <button style={snackbarActionStyle} onClick={this.hideSnackbar}>{actionText}</button>
      </div>
    );
  }
};

SnackBar.defaultProps = {
  actionText: "close",
  show: "false"
};

SnackBar.propTypes = {
  actionText: React.PropTypes.string,
  show: React.PropTypes.bool.isRequired,
  snackBarText: React.PropTypes.string.isRequired,
  onCloseCallback: React.PropTypes.func,
  timer: React.PropTypes.number
};
