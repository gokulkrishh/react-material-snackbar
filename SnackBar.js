import { Component, PropTypes } from "react"

export default class SnackBar extends Component {
  static propTypes: {
    actionText: PropTypes.string,
    actionHandler: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    snackBarText: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    const {actionText, actionHandler, show, snackBarText} = this.props;

    var snackbarStyle = {
      position: "fixed",
      bottom: "0px",
      left: "0",
      right: "0",
      width: "290px",
      maxWidth: "568px",
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
      WebkitTransition: "bottom 0.30s cubic-bezier(0, 0, 0.30, 1)",
      transition: "bottom 0.30s cubic-bezier(0, 0, 0.30, 1)",
      fontWeight: "500",
      textTransform: "capitalize",
      borderRadius: "2px",
      fontSize: "14px",
      pointerEvents: "none"
    };

    var snackbarShowStyle = {
      bottom: "0"
    };

    var snackbarTextStyle = {
      margin: "8px 10px",
      wordWreak: "break-all"
    };

    var snackbarActionStyle = {
      textTransform: "uppercase",
      color: "#ff4081",
      cursor: "pointer",
      marginRight: "20px"
    };

    return (
      <div className={show ? snackbarStyle + snackbarShowStyle : snackbarStyle}>
        <p className={snackbarTextStyle}>{snackBarText}</p>
        <button className={snackbarActionStyle} onClick={actionHandler}>{actionText}</button>
      </div>
    );
  }
};

SnackBar.defaultProps = {
  actionText: "close"
};
