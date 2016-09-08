import React, {PropTypes} from "react"

export default class SnackBar extends React.Component {
  static propTypes: {
    actionText: PropTypes.string,
    show: PropTypes.bool.isRequired,
    snackBarText: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      showSnackBar: false
    };

    this.hideSnackbar = this.hideSnackbar.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {showSnackBar} = this.state;
    if (showSnackBar !== nextProps.show) {
      this.setState({
        showSnackBar: nextProps.show
      });

      setTimeout(() => {
	 			this.hideSnackbar();
 			}, 3000);
    }
  }

  hideSnackbar() {
    this.setState({
      showSnackBar: false
    });
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
      WebkitTransition: "bottom 200ms cubic-bezier(0, 0, 0.30, 1)",
      transition: "bottom 200ms cubic-bezier(0, 0, 0.30, 1)",
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

    if (showSnackBar) {
      snackbarStyle.bottom = 0;
    }
    else {
      snackbarStyle.bottom = "-50px"
    }

    return(
      <div style={snackbarStyle}>
        <p style={snackbarTextStyle}>{snackBarText}</p>
        <button style={snackbarActionStyle} onClick={this.hideSnackbar}>{actionText}</button>
      </div>
    );
  }
};

SnackBar.defaultProps = {
  actionText: "close"
};

SnackBar.propTypes: {
  actionText: PropTypes.string,
  show: PropTypes.bool.isRequired,
  snackBarText: PropTypes.string.isRequired
};
