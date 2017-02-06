(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["SnackBar"] = factory(require("react"));
	else
		root["SnackBar"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      showSnackBar: _this.props.show,
      timer: 4000
    };
    _this.hideSnackbar = _this.hideSnackbar.bind(_this);
    return _this;
  }

  _createClass(SnackBar, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var _state = this.state,
          showSnackBar = _state.showSnackBar,
          timer = _state.timer;

      if (showSnackBar !== nextProps.show) {
        this.setState({
          showSnackBar: nextProps.show,
          timer: nextProps.timer
        });

        setTimeout(function () {
          _this2.hideSnackbar();
        }, timer);
      }
    }
  }, {
    key: "hideSnackbar",
    value: function hideSnackbar() {
      var onCloseCallback = this.props.onCloseCallback;

      this.setState({
        showSnackBar: false
      });
      if (onCloseCallback) onCloseCallback();
    }
  }, {
    key: "render",
    value: function render() {
      var _snackbarStyle;

      var _props = this.props,
          actionText = _props.actionText,
          show = _props.show,
          snackBarText = _props.snackBarText;
      var showSnackBar = this.state.showSnackBar;


      var snackbarStyle = (_snackbarStyle = {
        position: "fixed",
        left: 0,
        right: 0,
        bottom: "-50px",
        width: "100%",
        minHeight: "50px",
        background: "#323232",
        color: "#fff",
        margin: "auto",
        display: "-webkit-box"
      }, _defineProperty(_snackbarStyle, "display", "-ms-flexbox"), _defineProperty(_snackbarStyle, "display", "flex"), _defineProperty(_snackbarStyle, "WebkitBoxAlign", "center"), _defineProperty(_snackbarStyle, "msFlexAlign", "center"), _defineProperty(_snackbarStyle, "alignItems", "center"), _defineProperty(_snackbarStyle, "WebkitBoxPack", "justify"), _defineProperty(_snackbarStyle, "msFlexPack", "justify"), _defineProperty(_snackbarStyle, "justifyContent", "space-between"), _defineProperty(_snackbarStyle, "WebkitTransition", "bottom 0.3s cubic-bezier(0, 0, 0.30, 1)"), _defineProperty(_snackbarStyle, "transition", "bottom 0.3s cubic-bezier(0, 0, 0.30, 1)"), _defineProperty(_snackbarStyle, "fontWeight", "500"), _defineProperty(_snackbarStyle, "textTransform", "initial"), _defineProperty(_snackbarStyle, "fontSize", "14px"), _snackbarStyle);

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

      return _react2.default.createElement(
        "div",
        { style: snackbarStyle },
        _react2.default.createElement(
          "p",
          { style: snackbarTextStyle },
          snackBarText
        ),
        _react2.default.createElement(
          "button",
          { style: snackbarActionStyle, onClick: this.hideSnackbar },
          actionText
        )
      );
    }
  }]);

  return SnackBar;
}(_react.Component);

exports.default = SnackBar;
;

SnackBar.defaultProps = {
  actionText: "close",
  show: "false"
};

SnackBar.propTypes = {
  actionText: _react2.default.PropTypes.string,
  show: _react2.default.PropTypes.bool.isRequired,
  snackBarText: _react2.default.PropTypes.string.isRequired,
  onCloseCallback: _react2.default.PropTypes.func,
  timer: _react2.default.PropTypes.number
};

/***/ })
/******/ ]);
});