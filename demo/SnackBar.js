"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SnackBar = function (_Component) {
  _inherits(SnackBar, _Component);

  function SnackBar(props) {
    _classCallCheck(this, SnackBar);

    var _this = _possibleConstructorReturn(this, (SnackBar.__proto__ || Object.getPrototypeOf(SnackBar)).call(this, props));

    _this.state = {
      show: false
    };
    return _this;
  }

  _createClass(SnackBar, [{
    key: "render",
    value: function render() {
      var _snackbarStyle;

      var _props = this.props;
      var actionText = _props.actionText;
      var actionHandler = _props.actionHandler;
      var showSnackBar = _props.showSnackBar;
      var snackBarText = _props.snackBarText;


      var snackbarStyle = (_snackbarStyle = {
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
        display: "-webkit-box"
      }, _defineProperty(_snackbarStyle, "display", "-ms-flexbox"), _defineProperty(_snackbarStyle, "display", "flex"), _defineProperty(_snackbarStyle, "WebkitBoxAlign", "center"), _defineProperty(_snackbarStyle, "msFlexAlign", "center"), _defineProperty(_snackbarStyle, "alignItems", "center"), _defineProperty(_snackbarStyle, "WebkitBoxPack", "justify"), _defineProperty(_snackbarStyle, "msFlexPack", "justify"), _defineProperty(_snackbarStyle, "justifyContent", "space-between"), _defineProperty(_snackbarStyle, "WebkitTransition", "bottom 0.30s cubic-bezier(0, 0, 0.30, 1)"), _defineProperty(_snackbarStyle, "transition", "bottom 0.30s cubic-bezier(0, 0, 0.30, 1)"), _defineProperty(_snackbarStyle, "fontWeight", "500"), _defineProperty(_snackbarStyle, "textTransform", "capitalize"), _defineProperty(_snackbarStyle, "borderRadius", "2px"), _defineProperty(_snackbarStyle, "fontSize", "14px"), _defineProperty(_snackbarStyle, "pointerEvents", "none"), _snackbarStyle);

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

      return React.createElement(
        "div",
        { className: showSnackBar ? snackbarStyle + snackbarShowStyle : snackbarStyle },
        React.createElement(
          "p",
          { className: snackbarTextStyle },
          snackBarText
        ),
        React.createElement(
          "button",
          { className: snackbarActionStyle, onClick: actionHandler },
          actionText
        )
      );
    }
  }]);

  return SnackBar;
}(_react.Component);

SnackBar.propTypes = {
  actionText: _react.PropTypes.string,
  actionHandler: _react.PropTypes.func.isRequired,
  showSnackBar: _react.PropTypes.bool.isRequired,
  snackBarText: _react.PropTypes.string.isRequired
};
SnackBar.defaultProps = {
  actionText: "close"
};
exports.default = SnackBar;
