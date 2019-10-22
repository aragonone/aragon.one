(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://aragon.one/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@aragon/ui");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA0NSA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMi40MzMzIDUwLjg3ODJMNDMuODA4NCAzOC4yMzMxVjYuOTQyNTVMMjIuNDMzMyAxLjExOTE0TDEuMDU4MjMgNi45NDI1NVYzOC4yMzMxTDIyLjQzMzMgNTAuODc4MloiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2U9IiMyNzI3MjciIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMzLjU2MyAzNy4wNTEzTDI0LjM4NTIgMTAuMTc1OEgyMC43NDY1TDExLjU2ODcgMzcuMDUxM0gxNS40OTExTDE5LjgxMzYgMjMuOTIxN0wyMi41NjU5IDE1LjMwMDRMMjYuMzExIDI3LjAyOThMMjYuNDEzNyAyNy4zNDJIMjAuNjM5MkwyNy44NzQ5IDMxLjc3NTFMMjkuNjgxNSAzNy4wNTEzSDMzLjU2M1oiIGZpbGw9InVybCgjcGFpbnQwX3JhZGlhbCkiLz4KPGRlZnM+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQwX3JhZGlhbCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgyMi41NjU5IDM3LjA1MTMpIHJvdGF0ZSgtOTApIHNjYWxlKDI4LjMyMTggMjMuMTc3OSkiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRUY2OThDIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0Y5ODg2RCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 100vw;\n  h6 {\n    font-family: \'FontRegular\';\n    font-size: 1rem;\n    letter-spacing: 2.6px;\n    line-height: 1.5;\n    ', ';\n    margin: 0 0 70px 0;\n    .grey {\n      color: #525252;\n    }\n  }\n'], ['\n  width: 100vw;\n  h6 {\n    font-family: \'FontRegular\';\n    font-size: 1rem;\n    letter-spacing: 2.6px;\n    line-height: 1.5;\n    ', ';\n    margin: 0 0 70px 0;\n    .grey {\n      color: #525252;\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Hero = __webpack_require__(27);

var _Hero2 = _interopRequireDefault(_Hero);

var _About = __webpack_require__(36);

var _About2 = _interopRequireDefault(_About);

var _Quotes = __webpack_require__(38);

var _Quotes2 = _interopRequireDefault(_Quotes);

var _Team = __webpack_require__(39);

var _Team2 = _interopRequireDefault(_Team);

var _JobOpenings = __webpack_require__(63);

var _JobOpenings2 = _interopRequireDefault(_JobOpenings);

var _Remote = __webpack_require__(71);

var _Remote2 = _interopRequireDefault(_Remote);

var _HiringProcess = __webpack_require__(73);

var _HiringProcess2 = _interopRequireDefault(_HiringProcess);

var _Company = __webpack_require__(76);

var _Company2 = _interopRequireDefault(_Company);

var _WorkConditions = __webpack_require__(95);

var _WorkConditions2 = _interopRequireDefault(_WorkConditions);

var _GhostPosts = __webpack_require__(102);

var _GhostPosts2 = _interopRequireDefault(_GhostPosts);

var _Footer = __webpack_require__(105);

var _Footer2 = _interopRequireDefault(_Footer);

var _Events = __webpack_require__(107);

var _Events2 = _interopRequireDefault(_Events);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        HomeContainer,
        null,
        _react2.default.createElement(_Hero2.default, null),
        _react2.default.createElement(_About2.default, null),
        _react2.default.createElement(_Quotes2.default, null),
        _react2.default.createElement(_Team2.default, null),
        _react2.default.createElement(_Events2.default, null),
        _react2.default.createElement(_Remote2.default, null),
        _react2.default.createElement(_WorkConditions2.default, null),
        _react2.default.createElement(_JobOpenings2.default, null),
        _react2.default.createElement(_HiringProcess2.default, null),
        _react2.default.createElement(_Company2.default, null),
        _react2.default.createElement(_GhostPosts2.default, null),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

var HomeContainer = _styledComponents2.default.div(_templateObject, medium('line-height: 1;'));
exports.default = Home;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4NCIgaGVpZ2h0PSI5NTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTA4MyA5NTBMNjMxLjUwMy0zNzhINDUyLjQ5N0wxIDk1MGgxOTIuOTYybDIxMi42NDMtNjQ4Ljc3NiAxMzUuMzk1LTQyNiAxODQuMjQgNTc5LjU4NCA1LjA1NCAxNS40MjZINDQ3LjIxOWwzNTUuOTU1IDIxOS4wNTRMODkyLjA1MSA5NTBIMTA4M3oiIHN0cm9rZT0iIzVFNUU1RSIgc3Ryb2tlLXdpZHRoPSIuNyIvPjwvc3ZnPg=="

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Carousel");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyOCAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjMxODUgMTIuMDI3N0gxLjM5Mzk0QzEuMTc2NDggMTIuMDI3NyAxIDExLjg0NTIgMSAxMS42MjAzQzEgMTEuMzk1NCAxLjE3NjQ4IDExLjIxMjkgMS4zOTM5NCAxMS4yMTI5SDI2LjMxODVDMjYuNTM1OSAxMS4yMTI5IDI2LjcxMjQgMTEuMzk1NCAyNi43MTI0IDExLjYyMDNDMjYuNzEyNCAxMS44NDUyIDI2LjUzNTkgMTIuMDI3NyAyNi4zMTg1IDEyLjAyNzdaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYuNDQwOCAyMi4yNDI0QzE2LjM0IDIyLjI0MjQgMTYuMjM5MSAyMi4yMDI1IDE2LjE2MTkgMjIuMTIzNUMxNi4wMDgzIDIxLjk2NDYgMTYuMDA4MyAyMS43MDYzIDE2LjE2MTkgMjEuNTQ3NEwyNS43NjE0IDExLjYxOTdMMTYuMTYxOSAxLjY5NTI0QzE2LjAwODMgMS41MzYzNSAxNi4wMDgzIDEuMjc4MDYgMTYuMTYxOSAxLjExOTE3QzE2LjMxNTYgMC45NjAyNzggMTYuNTY1MyAwLjk2MDI3OCAxNi43MTg5IDEuMTE5MTdMMjYuNTk2NiAxMS4zMzEyQzI2LjY3MDYgMTEuNDA3OCAyNi43MTE2IDExLjUxMTMgMjYuNzExNiAxMS42MTk3QzI2LjcxMTYgMTEuNzI4MSAyNi42Njk5IDExLjgzMTUgMjYuNTk2NiAxMS45MDgxTDE2LjcxODkgMjIuMTIyNkMxNi42NDI1IDIyLjIwMjUgMTYuNTQxNyAyMi4yNDI0IDE2LjQ0MDggMjIuMjQyNFoiIGZpbGw9IndoaXRlIiBzdHJva2U9IndoaXRlIi8+Cjwvc3ZnPgo="

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/#jobs' });
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(17);

var _App = __webpack_require__(18);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var render = function render(Comp) {
    _reactDom2.default.hydrate(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);

  // Hot Module Replacement
  if (false) {
    module.hot.accept('./App', function () {
      render(require('./App').default);
    });
  }
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _reactStaticRoutes = __webpack_require__(19);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _app = __webpack_require__(109);

var _app2 = _interopRequireDefault(_app);

var _globals = __webpack_require__(110);

var _globals2 = _interopRequireDefault(_globals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _globals2.default)({ ssrFadeout: true });

exports.default = function () {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(_reactStaticRoutes2.default, null)
  );
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(20);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(21);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(22);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _reactUniversalComponent = __webpack_require__(23);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Home',
  file: '/Library/WebServer/Documents/aragon-one-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10)), (0, _importCss3.default)('src/pages/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(10);
  },
  chunkName: function chunkName() {
    return 'src/pages/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Jobs',
  file: '/Library/WebServer/Documents/aragon-one-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 14)), (0, _importCss3.default)('src/pages/Jobs', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Jobs');
  },
  resolve: function resolve() {
    return /*require.resolve*/(14);
  },
  chunkName: function chunkName() {
    return 'src/pages/Jobs';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': undefined

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(24);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(25);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(26);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(8);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  min-height: 600px;\n  height: 70vh;\n  background: url(', ') bottom no-repeat;\n  background-size: cover;\n  ', ';\n'], ['\n  min-height: 600px;\n  height: 70vh;\n  background: url(', ') bottom no-repeat;\n  background-size: cover;\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 80%;\n  margin: auto;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  .fist-title,\n  .fist-title::after {\n    animation-delay: var(--animation-delay, 1s);\n    animation-iteration-count: var(--iterations, 1);\n    animation-duration: var(--duration, 600ms);\n    animation-fill-mode: both;\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  .second-title,\n  .second-title::after {\n    animation-delay: var(--animation-delay, 1.5s);\n    animation-iteration-count: var(--iterations, 1);\n    animation-duration: var(--duration, 600ms);\n    animation-fill-mode: both;\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n\n  .fist-title {\n    position: relative;\n    animation-name: clip-text;\n    max-width: 90vw;\n\n    &::after {\n      content: \'\';\n      position: absolute;\n      z-index: 999;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: #ff7c56;\n      transform: scaleX(0);\n      transform-origin: 0 50%;\n      pointer-events: none;\n      animation-name: text-revealer;\n    }\n  }\n  .second-title {\n    position: relative;\n    animation-name: clip-text2;\n    max-width: 90vw;\n\n    &::after {\n      content: \'\';\n      position: absolute;\n      z-index: 999;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: #ff5d5d;\n      transform: scaleX(0);\n      transform-origin: 0 50%;\n      pointer-events: none;\n      animation-name: text-revealer2;\n    }\n  }\n\n  @keyframes clip-text {\n    from {\n      clip-path: inset(0 100% 0 0);\n    }\n    to {\n      clip-path: inset(0 0 0 0);\n    }\n  }\n\n  @keyframes text-revealer {\n    0%,\n    50% {\n      transform-origin: 0 50%;\n    }\n\n    60%,\n    100% {\n      transform-origin: 100% 50%;\n    }\n\n    60% {\n      transform: scaleX(1);\n    }\n\n    100% {\n      transform: scaleX(0);\n    }\n  }\n\n  @keyframes clip-text2 {\n    from {\n      clip-path: inset(0 100% 0 0);\n    }\n    to {\n      clip-path: inset(0 0 0 0);\n    }\n  }\n\n  @keyframes text-revealer2 {\n    0%,\n    50% {\n      transform-origin: 0 50%;\n    }\n\n    60%,\n    100% {\n      transform-origin: 100% 50%;\n    }\n\n    60% {\n      transform: scaleX(1);\n    }\n\n    100% {\n      transform: scaleX(0);\n    }\n  }\n\n  h1 {\n    font-family: \'FontBold\';\n    margin: 0;\n    text-align: left;\n    color: white;\n    font-size: 4.28rem;\n    ', ';\n    ', ';\n    @media only screen and (min-width: 1170px) and (max-width: 1330px) {\n      font-size: 9rem;\n    }\n    @media only screen and (min-width: 962px) and (max-width: 1170px) {\n      font-size: 8rem;\n    }\n    @media only screen and (min-width: 770px) and (max-width: 962px) {\n      font-size: 7rem;\n    }\n  }\n  span.pink {\n    word-break: break-all;\n    color: #ff5d5d;\n    background: -webkit-linear-gradient(left, #ff3333, #ff7c56);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n  .mobile-pink {\n    color: #ff5d5d;\n  }\n'], ['\n  width: 80%;\n  margin: auto;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  .fist-title,\n  .fist-title::after {\n    animation-delay: var(--animation-delay, 1s);\n    animation-iteration-count: var(--iterations, 1);\n    animation-duration: var(--duration, 600ms);\n    animation-fill-mode: both;\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  .second-title,\n  .second-title::after {\n    animation-delay: var(--animation-delay, 1.5s);\n    animation-iteration-count: var(--iterations, 1);\n    animation-duration: var(--duration, 600ms);\n    animation-fill-mode: both;\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n\n  .fist-title {\n    position: relative;\n    animation-name: clip-text;\n    max-width: 90vw;\n\n    &::after {\n      content: \'\';\n      position: absolute;\n      z-index: 999;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: #ff7c56;\n      transform: scaleX(0);\n      transform-origin: 0 50%;\n      pointer-events: none;\n      animation-name: text-revealer;\n    }\n  }\n  .second-title {\n    position: relative;\n    animation-name: clip-text2;\n    max-width: 90vw;\n\n    &::after {\n      content: \'\';\n      position: absolute;\n      z-index: 999;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: #ff5d5d;\n      transform: scaleX(0);\n      transform-origin: 0 50%;\n      pointer-events: none;\n      animation-name: text-revealer2;\n    }\n  }\n\n  @keyframes clip-text {\n    from {\n      clip-path: inset(0 100% 0 0);\n    }\n    to {\n      clip-path: inset(0 0 0 0);\n    }\n  }\n\n  @keyframes text-revealer {\n    0%,\n    50% {\n      transform-origin: 0 50%;\n    }\n\n    60%,\n    100% {\n      transform-origin: 100% 50%;\n    }\n\n    60% {\n      transform: scaleX(1);\n    }\n\n    100% {\n      transform: scaleX(0);\n    }\n  }\n\n  @keyframes clip-text2 {\n    from {\n      clip-path: inset(0 100% 0 0);\n    }\n    to {\n      clip-path: inset(0 0 0 0);\n    }\n  }\n\n  @keyframes text-revealer2 {\n    0%,\n    50% {\n      transform-origin: 0 50%;\n    }\n\n    60%,\n    100% {\n      transform-origin: 100% 50%;\n    }\n\n    60% {\n      transform: scaleX(1);\n    }\n\n    100% {\n      transform: scaleX(0);\n    }\n  }\n\n  h1 {\n    font-family: \'FontBold\';\n    margin: 0;\n    text-align: left;\n    color: white;\n    font-size: 4.28rem;\n    ', ';\n    ', ';\n    @media only screen and (min-width: 1170px) and (max-width: 1330px) {\n      font-size: 9rem;\n    }\n    @media only screen and (min-width: 962px) and (max-width: 1170px) {\n      font-size: 8rem;\n    }\n    @media only screen and (min-width: 770px) and (max-width: 962px) {\n      font-size: 7rem;\n    }\n  }\n  span.pink {\n    word-break: break-all;\n    color: #ff5d5d;\n    background: -webkit-linear-gradient(left, #ff3333, #ff7c56);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n  .mobile-pink {\n    color: #ff5d5d;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Navbar = __webpack_require__(28);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _heroBackground = __webpack_require__(11);

var _heroBackground2 = _interopRequireDefault(_heroBackground);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Hero = function (_React$Component) {
  _inherits(Hero, _React$Component);

  function Hero() {
    _classCallCheck(this, Hero);

    return _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).apply(this, arguments));
  }

  _createClass(Hero, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        HeroSection,
        null,
        _react2.default.createElement(_Navbar2.default, null),
        _react2.default.createElement(
          Container,
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _ui.BreakPoint,
              { to: 'medium' },
              _react2.default.createElement(
                'h1',
                { className: '' },
                'We believe in and'
              ),
              _react2.default.createElement(
                'h1',
                { className: 'mobile-pink' },
                'fight for freedom'
              )
            ),
            _react2.default.createElement(
              _ui.BreakPoint,
              { from: 'medium' },
              _react2.default.createElement(
                'h1',
                { className: 'fist-title' },
                'We believe in and'
              ),
              _react2.default.createElement(
                'h1',
                { className: 'second-title' },
                _react2.default.createElement(
                  'span',
                  { className: 'pink' },
                  'fight for freedom'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Hero;
}(_react2.default.Component);

var HeroSection = _styledComponents2.default.section(_templateObject, _heroBackground2.default, medium('height: 100vh; background-size: contain;'));

var Container = _styledComponents2.default.div(_templateObject2, medium('font-size: 8rem;'), large('font-size: 10.43rem;'));
exports.default = Hero;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 80%;\n  height: 80px;\n  background: transparent;\n  position:absolute;\n  top:0;\n  left: 10%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 3000;\n'], ['\n  width: 80%;\n  height: 80px;\n  background: transparent;\n  position:absolute;\n  top:0;\n  left: 10%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 3000;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: auto;\n  height: 100%;\n  img {\n    height: 50px;\n  }\n'], ['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: auto;\n  height: 100%;\n  img {\n    height: 50px;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

var _logoFooter = __webpack_require__(5);

var _logoFooter2 = _interopRequireDefault(_logoFooter);

var _MenuModal = __webpack_require__(29);

var _MenuModal2 = _interopRequireDefault(_MenuModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        AragonNavbar,
        null,
        _react2.default.createElement(
          LogoLink,
          { to: '/' },
          _react2.default.createElement('img', { src: _logoFooter2.default })
        ),
        _react2.default.createElement(_MenuModal2.default, null)
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

var AragonNavbar = _styledComponents2.default.div(_templateObject);

var LogoLink = _styledComponents2.default.a(_templateObject2);
exports.default = Navbar;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 70px;\n  border-bottom: solid 1px #3a3a3a;\n  display: flex;\n  justify-content: flex-end;\n  div {\n    width: 70px;\n    height: 70px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-left: solid 1px #3a3a3a;\n  }\n'], ['\n  width: 100%;\n  height: 70px;\n  border-bottom: solid 1px #3a3a3a;\n  display: flex;\n  justify-content: flex-end;\n  div {\n    width: 70px;\n    height: 70px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-left: solid 1px #3a3a3a;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', ';\n  width: 100%;\n  .links {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 30px 0;\n    background: url(', ') top no-repeat;\n    background-size: 126% 124%;\n    position: relative;\n  }\n  a {\n    color: white!important;\n    text-decoration: none!important;\n  }\n  h6 {\n    position: absolute;\n    right: 0;\n    transform-origin: 0 50%;\n    text-transform: uppercase;\n    font-size: 1rem;\n    line-height: 1;\n    letter-spacing: 6px;\n    transform: rotate(-90deg) translate(-50%,calc(100% + 278px));\n  }\n'], ['\n  ', ';\n  width: 100%;\n  .links {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 30px 0;\n    background: url(', ') top no-repeat;\n    background-size: 126% 124%;\n    position: relative;\n  }\n  a {\n    color: white!important;\n    text-decoration: none!important;\n  }\n  h6 {\n    position: absolute;\n    right: 0;\n    transform-origin: 0 50%;\n    text-transform: uppercase;\n    font-size: 1rem;\n    line-height: 1;\n    letter-spacing: 6px;\n    transform: rotate(-90deg) translate(-50%,calc(100% + 278px));\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 400px;\n  border-right: solid 1px #3a3a3a;\n  display: none;\n  ', ';\n  .image-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: calc(100% - 70px);\n  }\n'], ['\n  width: 400px;\n  border-right: solid 1px #3a3a3a;\n  display: none;\n  ', ';\n  .image-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: calc(100% - 70px);\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  background: black;\n  transition: all .25s linear;\n  .modal-dialog {\n    max-width: 80%;\n    width: 1000px;\n    min-width: 50%;\n    margin: 100px auto;\n  }\n  .modal-content {\n    background: black;\n    border: solid 1px #3a3a3a;\n    border-radius: 0;\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n\n    img {\n      max-width: 350px;\n    }\n    ul {\n      list-style-type: none;\n      padding: 60px 0;\n      ', ';\n    }\n    li {\n      font-family: \'FontBold\';\n      font-size: 2.92rem;\n      line-height: 4.42rem;\n      ', ';\n    }\n  }\n'], ['\n  background: black;\n  transition: all .25s linear;\n  .modal-dialog {\n    max-width: 80%;\n    width: 1000px;\n    min-width: 50%;\n    margin: 100px auto;\n  }\n  .modal-content {\n    background: black;\n    border: solid 1px #3a3a3a;\n    border-radius: 0;\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n\n    img {\n      max-width: 350px;\n    }\n    ul {\n      list-style-type: none;\n      padding: 60px 0;\n      ', ';\n    }\n    li {\n      font-family: \'FontBold\';\n      font-size: 2.92rem;\n      line-height: 4.42rem;\n      ', ';\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _logoMenu = __webpack_require__(30);

var _logoMenu2 = _interopRequireDefault(_logoMenu);

var _Modal = __webpack_require__(31);

var _Modal2 = _interopRequireDefault(_Modal);

var _ButtonToolbar = __webpack_require__(32);

var _ButtonToolbar2 = _interopRequireDefault(_ButtonToolbar);

var _Button = __webpack_require__(33);

var _Button2 = _interopRequireDefault(_Button);

var _twitter = __webpack_require__(34);

var _twitter2 = _interopRequireDefault(_twitter);

var _ghost = __webpack_require__(35);

var _ghost2 = _interopRequireDefault(_ghost);

var _heroBackground = __webpack_require__(11);

var _heroBackground2 = _interopRequireDefault(_heroBackground);

var _reactStatic = __webpack_require__(4);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var AragonOneModal = function (_React$Component) {
  _inherits(AragonOneModal, _React$Component);

  function AragonOneModal() {
    _classCallCheck(this, AragonOneModal);

    return _possibleConstructorReturn(this, (AragonOneModal.__proto__ || Object.getPrototypeOf(AragonOneModal)).apply(this, arguments));
  }

  _createClass(AragonOneModal, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        StyledModal,
        _extends({}, this.props, {
          size: 'lg',
          'aria-labelledby': 'title'
        }),
        _react2.default.createElement(
          ImageBox,
          null,
          _react2.default.createElement(MenuHeader, null),
          _react2.default.createElement(
            'div',
            { className: 'image-container' },
            _react2.default.createElement('img', { src: _logoMenu2.default })
          )
        ),
        _react2.default.createElement(
          LinksBox,
          null,
          _react2.default.createElement(
            MenuHeader,
            null,
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'a',
                { target: '_blank', href: 'https://blog.aragon.one' },
                _react2.default.createElement('img', { src: _ghost2.default })
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'a',
                { target: '_blank', href: 'https://twitter.com/AragonOneTeam' },
                _react2.default.createElement('img', { src: _twitter2.default })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'links' },
            _react2.default.createElement(
              _ui.BreakPoint,
              { from: 'medium' },
              _react2.default.createElement(
                'h6',
                null,
                'WELCOME TO ARAGON ONE'
              )
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/#about', onClick: this.props.onHide },
                  'About'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/#team', onClick: this.props.onHide },
                  'Team'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/#jobs', onClick: this.props.onHide },
                  'Jobs'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/#philosophy', onClick: this.props.onHide },
                  'Philosophy'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/#blog', onClick: this.props.onHide },
                  'Blog'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return AragonOneModal;
}(_react2.default.Component);

var MenuModal = function (_React$Component2) {
  _inherits(MenuModal, _React$Component2);

  function MenuModal() {
    var _ref;

    _classCallCheck(this, MenuModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this2 = _possibleConstructorReturn(this, (_ref = MenuModal.__proto__ || Object.getPrototypeOf(MenuModal)).call.apply(_ref, [this].concat(args)));

    _this2.state = { modalShow: false };
    _this2.handleClick = _this2.handleClick.bind(_this2);
    return _this2;
  }

  _createClass(MenuModal, [{
    key: 'handleClick',
    value: function handleClick() {
      var show = this.state.modalShow;
      this.setState({ modalShow: !show });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var modalClose = function modalClose() {
        return _this3.setState({ modalShow: false });
      };

      return _react2.default.createElement(
        _ButtonToolbar2.default,
        null,
        _react2.default.createElement(
          _Button2.default,
          {
            className: this.state.modalShow == true ? "hamburger hamburger-spin is-active" : "hamburger hamburger-spin",
            type: 'button',
            onClick: this.handleClick
          },
          _react2.default.createElement(
            'span',
            { className: 'hamburger-box' },
            _react2.default.createElement('span', { className: 'hamburger-inner' })
          )
        ),
        _react2.default.createElement(AragonOneModal, {
          show: this.state.modalShow,
          onHide: modalClose
        })
      );
    }
  }]);

  return MenuModal;
}(_react2.default.Component);

var MenuHeader = _styledComponents2.default.div(_templateObject);

var LinksBox = _styledComponents2.default.div(_templateObject2, large('width: calc(100% - 400px);'), _heroBackground2.default);
var ImageBox = _styledComponents2.default.div(_templateObject3, large('display: flex; text-align: center; flex-direction: column;'));
var StyledModal = (0, _styledComponents2.default)(_Modal2.default)(_templateObject4, large('padding: 0;'), large('font-size: 4.35rem; line-height: 6.57rem;'));
exports.default = MenuModal;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/4f938d0e-logo-menu.gif";

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Modal");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/ButtonToolbar");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzOCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM1LjQwNzUgNS44MDQ2N0wzNi40MTIyIDQuMzgzMDFMMzQuODA2MiA1LjA1NDg1QzM0LjE5MTUgNS4zMTIwMyAzMy41NTQgNS41Mjc0NyAzMi44OTY1IDUuNjk3NjJDMzMuNjI0OCA0Ljk0ODMgMzQuMTg3MyA0LjA0OTcxIDM0LjUyNjQgMy4wNTQxM0wzNC45NDYgMS44MjE5MkwzMy44MDk0IDIuNDU2MzRDMzIuNTY2NSAzLjE1MDA0IDMxLjIwMTMgMy42NjQzNyAyOS43NDgzIDMuOTYyN0MyOC4zODYyIDIuNjg4MzYgMjYuNTE2IDEuOTA3OTMgMjQuNDU5IDEuOTA3OTNDMjAuMzI5NiAxLjkwNzkzIDE2LjkzMTYgNS4wNzU3OCAxNi45MzE2IDkuMDQwNjdDMTYuOTMxNiA5LjM2OTUzIDE2Ljk1NDcgOS42OTQzNyAxNy4wMDAxIDEwLjAxMjlDMTEuNTU5NCA5LjU4NzcyIDYuNzU4NzkgNy4wNTc0IDMuNTA5MDMgMy4yOTM2OUwzLjA2NDAyIDIuNzc4M0wyLjcwNTUgMy4zNTcyQzIuMDUyMzggNC40MTE3NyAxLjY4MDE2IDUuNjQyMjggMS42ODAxNiA2Ljk1NTAzQzEuNjgwMTYgOC43Nzk1MiAyLjQwMTkgMTAuNDQwMiAzLjU4MTM2IDExLjY5NzdDMy4xNTE1OCAxMS41NzA3IDIuNzQwOTQgMTEuNDAzMyAyLjM1NDU3IDExLjIwMDhMMS42MjI0IDEwLjgxNjlWMTEuNjQzNlYxMS43MjY1QzEuNjIyNCAxNC40MTAyIDMuMTgxNzcgMTYuNzMxMSA1LjQ2NzM5IDE3Ljk0OTlDNS4xOTkzMyAxNy45MzIyIDQuOTM2MjcgMTcuODk4NSA0LjY3NjM3IDE3Ljg0OTZMMy44MzU3MyAxNy42OTE3TDQuMTEwNTMgMTguNTAxN0M0LjkzMzI5IDIwLjkyNjkgNy4wNzg3IDIyLjc3MDYgOS43MjIxOCAyMy4yOTczQzcuNjEyMjIgMjQuNTU2IDUuMTA3NzQgMjUuMjg0MiAyLjQxOTk1IDI1LjI4NDJDMS44NzE3NSAyNS4yODQyIDEuMzMwNzUgMjUuMjUyOSAwLjc5Njg2NCAyNS4xOTYxTDAuNDg0Njg5IDI2LjEyMDhDMy42NzE0NyAyOC4wNTI4IDcuNDUzMzQgMjkuMTc4MiAxMS41MTUyIDI5LjE3ODJDMjQuNzUgMjkuMTc4MiAzMi4wMDggMTguODEyNiAzMi4wMDggOS44MDI1OUgzMi4wMDgyTDMyLjAwNzggOS43ODg4N0wzMS45OTE3IDkuMjAxNjdDMzMuMzI1OSA4LjI2NTEzIDM0LjQ4NDYgNy4xMTA2NyAzNS40MDc1IDUuODA0NjdaIiBzdHJva2U9IndoaXRlIi8+Cjwvc3ZnPgo="

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUzLjIgKDcyNjQzKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5Hcm91cCAzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkExX01lbnUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTY0LjAwMDAwMCwgLTE3MS4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIGlkPSJnb3NoIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTY1LjAwMDAwMCwgMTcyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjAiIHk9IjAiIHdpZHRoPSIxOCIgaGVpZ2h0PSI2IiByeD0iMSI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjAiIHk9IjEyIiB3aWR0aD0iMzAiIGhlaWdodD0iNiIgcng9IjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIwIiB5PSIyNCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjYiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMTgiIHk9IjI0IiB3aWR0aD0iMTIiIGhlaWdodD0iNiIgcng9IjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIyMyIgeT0iMCIgd2lkdGg9IjciIGhlaWdodD0iNiIgcng9IjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: auto;\n  max-width: 100%;\n  ', ';\n'], ['\n  width: 100%;\n  height: auto;\n  max-width: 100%;\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color: #000000;\n  min-height: 600px;\n  min-height: 100vh;\n  height: auto;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  ', ';\n  padding: 100px 0;\n  a {\n    color: #ff7671;\n    text-decoration: none;\n  }\n'], ['\n  background-color: #000000;\n  min-height: 600px;\n  min-height: 100vh;\n  height: auto;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  ', ';\n  padding: 100px 0;\n  a {\n    color: #ff7671;\n    text-decoration: none;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: 100px 10% 0 10%;\n  ', ';\n  p {\n    line-height: 1.7;\n    font-size: 1.57rem;\n    ', ';\n    color: #ffffff;\n  }\n'], ['\n  padding: 100px 10% 0 10%;\n  ', ';\n  p {\n    line-height: 1.7;\n    font-size: 1.57rem;\n    ', ';\n    color: #ffffff;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _about = __webpack_require__(37);

var _about2 = _interopRequireDefault(_about);

var _Fade = __webpack_require__(3);

var _Fade2 = _interopRequireDefault(_Fade);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var About = function About() {
  return _react2.default.createElement(
    AboutSection,
    { id: 'about' },
    _react2.default.createElement(AboutImg, { src: _about2.default }),
    _react2.default.createElement(
      TextBox,
      null,
      _react2.default.createElement(
        _ui.BreakPoint,
        { to: 'medium' },
        title
      ),
      _react2.default.createElement(
        _ui.BreakPoint,
        { from: 'medium' },
        _react2.default.createElement(
          _Fade2.default,
          { bottom: true, duration: 1200, delay: 200 },
          title
        )
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _ui.BreakPoint,
          { to: 'medium' },
          text1
        ),
        _react2.default.createElement(
          _ui.BreakPoint,
          { from: 'medium' },
          _react2.default.createElement(
            _Fade2.default,
            { bottom: true, duration: 1200, delay: 400 },
            text1
          )
        ),
        _react2.default.createElement(
          _ui.BreakPoint,
          { to: 'medium' },
          text2
        ),
        _react2.default.createElement(
          _ui.BreakPoint,
          { from: 'medium' },
          _react2.default.createElement(
            _Fade2.default,
            { bottom: true, duration: 1200, delay: 400 },
            text2
          )
        )
      )
    )
  );
};

var title = _react2.default.createElement(
  'h6',
  null,
  _react2.default.createElement(
    'span',
    { className: 'grey' },
    '\u2014'
  ),
  ' ABOUT ARAGON ONE'
);

var text1 = _react2.default.createElement(
  'p',
  null,
  'Aragon One is a Swiss company formed by the founders of the',
  ' ',
  _react2.default.createElement(
    'a',
    { href: 'https://aragon.org', target: '_blank' },
    'Aragon project'
  ),
  ', building the tools and community necessary for the project to succeed.'
);
var text2 = _react2.default.createElement(
  'p',
  null,
  'The company is funded primarily through grants given by the Aragon Association, the non-profit steward of the Aragon project.'
);
var AboutImg = _styledComponents2.default.img(_templateObject, medium('height: 34vw; width: auto;'));
var AboutSection = _styledComponents2.default.section(_templateObject2, medium('flex-direction: row;'));

var TextBox = _styledComponents2.default.div(_templateObject3, medium('padding: 0; padding-left: 60px; padding-right: 10%;'), medium('line-height: 1.5; font-size: 2.28rem;'));

exports.default = About;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/59340262-about.gif";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: auto;\n  padding: 0 0 50px 0;\n  ', ';\n'], ['\n  height: auto;\n  padding: 0 0 50px 0;\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 80%;\n  margin: auto;\n  h6 {\n    margin-bottom: 0 !important;\n  }\n  h3 {\n    font-family: \'FontBold\';\n    word-break: break-word;\n    text-align: left;\n    margin: 0;\n    line-height: 1.2;\n    font-size: 3.28rem;\n    ', ';\n    letter-spacing: -0.5px;\n    color: #ffffff;\n    .pink {\n      color: #ff5d5d;\n      background: -webkit-linear-gradient(left, #ff3333, #ff7c56);\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n    }\n    .mobile-pink {\n      color: #ff5d5d;\n    }\n  }\n'], ['\n  width: 80%;\n  margin: auto;\n  h6 {\n    margin-bottom: 0 !important;\n  }\n  h3 {\n    font-family: \'FontBold\';\n    word-break: break-word;\n    text-align: left;\n    margin: 0;\n    line-height: 1.2;\n    font-size: 3.28rem;\n    ', ';\n    letter-spacing: -0.5px;\n    color: #ffffff;\n    .pink {\n      color: #ff5d5d;\n      background: -webkit-linear-gradient(left, #ff3333, #ff7c56);\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n    }\n    .mobile-pink {\n      color: #ff5d5d;\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Fade = __webpack_require__(3);

var _Fade2 = _interopRequireDefault(_Fade);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Quotes = function Quotes() {
  return _react2.default.createElement(
    QuotesSection,
    null,
    _react2.default.createElement(
      Container,
      null,
      _react2.default.createElement(
        _ui.BreakPoint,
        { to: 'medium' },
        _react2.default.createElement(
          'h3',
          null,
          'Decentralized organizations can ',
          _react2.default.createElement('br', null),
          'solve the world\u2019s worst problems. ',
          _react2.default.createElement('br', null),
          'That\u2019s',
          ' ',
          _react2.default.createElement(
            'span',
            { className: 'mobile-pink' },
            'why we are building Aragon.'
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'h6',
          null,
          _react2.default.createElement(
            'span',
            { className: 'grey' },
            '\u2014'
          ),
          ' LUIS CUENDE, CEO'
        )
      ),
      _react2.default.createElement(
        _ui.BreakPoint,
        { from: 'medium' },
        _react2.default.createElement(
          _Fade2.default,
          { bottom: true, duration: 1200, delay: 200 },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h3',
              null,
              'Decentralized organizations can ',
              _react2.default.createElement('br', null),
              'solve the world\u2019s worst problems. ',
              _react2.default.createElement('br', null),
              'That\u2019s ',
              _react2.default.createElement(
                'span',
                { className: 'pink' },
                'why we are building Aragon.'
              )
            )
          )
        )
      )
    )
  );
};

var QuotesSection = _styledComponents2.default.section(_templateObject, medium('padding: 100px 0;'));

var Container = _styledComponents2.default.div(_templateObject2, medium('font-size: 5.71rem; line-height: 7rem;'));
exports.default = Quotes;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  min-height: 100vh;\n  height: auto;\n  padding: 100px 0 100px 0;\n  margin-bottom: 100px;\n'], ['\n  min-height: 100vh;\n  height: auto;\n  padding: 100px 0 100px 0;\n  margin-bottom: 100px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: stretch;\n  justify-content: space-between;\n  margin: 0 -15px;\n'], ['\n  display: flex;\n  align-items: stretch;\n  justify-content: space-between;\n  margin: 0 -15px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 80%;\n  margin: auto;\n  height: 100%;\n'], ['\n  width: 80%;\n  margin: auto;\n  height: 100%;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Carousel = __webpack_require__(12);

var _Carousel2 = _interopRequireDefault(_Carousel);

var _TeamCard = __webpack_require__(40);

var _TeamCard2 = _interopRequireDefault(_TeamCard);

var _arrow = __webpack_require__(13);

var _arrow2 = _interopRequireDefault(_arrow);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Team = function (_React$Component) {
  _inherits(Team, _React$Component);

  function Team(props, context) {
    _classCallCheck(this, Team);

    var _this = _possibleConstructorReturn(this, (Team.__proto__ || Object.getPrototypeOf(Team)).call(this, props, context));

    _this.handleSelect = _this.handleSelect.bind(_this);

    _this.state = {
      index: 0,
      direction: null
    };
    return _this;
  }

  _createClass(Team, [{
    key: 'handleSelect',
    value: function handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          index = _state.index,
          direction = _state.direction;

      return _react2.default.createElement(
        TeamSection,
        { id: 'team' },
        _react2.default.createElement(
          Container,
          null,
          _react2.default.createElement(
            'h6',
            null,
            _react2.default.createElement(
              'span',
              { className: 'grey' },
              '\u2014'
            ),
            ' MEET THE TEAM'
          ),
          _react2.default.createElement(
            _ui.BreakPoint,
            { to: 'medium' },
            _react2.default.createElement(
              _Carousel2.default,
              {
                interval: null,
                nextIcon: _react2.default.createElement('img', { src: _arrow2.default }),
                activeIndex: index,
                direction: direction,
                onSelect: this.handleSelect },
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(_TeamCard2.default, {
                  name: 'Luis Cuende',
                  twitter: 'licuende',
                  position: 'CEO',
                  imageUrl: 'Luis',
                  bio: 'Luis is our CEO. He loves helping people solve unfair situations in the world through technology and he\'s currently leading our product efforts.'
                })
              ),
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(_TeamCard2.default, {
                  name: 'Jorge Izquierdo',
                  twitter: 'izqui9',
                  position: 'CTO',
                  imageUrl: 'Jorge',
                  bio: 'Jorge is our CTO. He\'s a curious hacker and researcher pushing to make the decentralized web happen.'
                })
              ),
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(_TeamCard2.default, {
                  name: 'Brett Sun',
                  twitter: 'sohkai',
                  position: 'Dev lead',
                  imageUrl: 'Brett',
                  bio: 'Brett is our Tech Lead. He\'s a highly curious full-stack engineer, a wizard both in frontend and Solidity.'
                })
              ),
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(_TeamCard2.default, {
                  name: 'John Light',
                  twitter: 'lightcoin',
                  position: 'Communications lead',
                  imageUrl: 'John',
                  bio: 'John is our Communications Lead. He\'s a crypto OG, co-founder of Bitseed, and advisor to cryptocurrency startups and investors.'
                })
              ),
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(_TeamCard2.default, {
                  name: 'Monica Zeng',
                  twitter: 'monicazng',
                  position: 'HR',
                  imageUrl: 'Monica',
                  bio: 'Monica is our HR. She has an international background specialized in strategy, management and executive coaching for startups and founders.'
                })
              ),
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(_TeamCard2.default, {
                  name: 'Mar\xEDa G\xF3mez',
                  twitter: 'MyPaoG',
                  position: 'Ecosystem',
                  imageUrl: 'Maria',
                  bio: 'Mar\xEDa is our Ecosystem Developer. She is a reinvented lawyer who loves traveling, networking and technology.'
                })
              ),
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(_TeamCard2.default, {
                  name: 'Pierre Bertet',
                  twitter: 'bpierre',
                  position: 'Frontend dev',
                  imageUrl: 'Pierre',
                  bio: 'Pierre is our Frontend Engineer. He is passionate about crafting high quality products, and loves Free Software and the World Wide Web.'
                })
              ),
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(_TeamCard2.default, {
                  name: 'Luke Duncan',
                  twitter: 'lkngtn',
                  position: 'Research',
                  imageUrl: 'Luke',
                  bio: 'Luke is our Research Lead. He loves to explore how blockchains enable novel forms of governance and how existing forms may perform in new contexts.'
                })
              ),
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(_TeamCard2.default, {
                  name: 'Bingen Eguzkitza',
                  twitter: 'bingentxu',
                  position: 'Solidity dev',
                  imageUrl: 'Bingen',
                  bio: 'Bingen is our Solidity Engineer. He is a long time open source software, hardware and data enthusiast.'
                })
              ),
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(_TeamCard2.default, {
                  name: 'Lorena Gonz\xE1lez',
                  twitter: 'curritta',
                  position: 'Operations',
                  imageUrl: 'Lorena',
                  bio: 'Lorena is our Operations Assistant. She has worked as a secretary, assistant, and office manager in a very different range of industries.'
                })
              ),
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(_TeamCard2.default, {
                  name: 'Delfina Polito',
                  twitter: 'PolitoDelfina',
                  position: 'Frontend dev',
                  imageUrl: 'Delfi',
                  bio: 'Delfi is our Frontend Engineer. She loves bringing designs to life, being careful about details to make things shine is definitely part of her core.'
                })
              ),
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(_TeamCard2.default, {
                  name: 'Gorka Ludlow',
                  twitter: 'AquiGorka',
                  position: 'Frontend dev',
                  imageUrl: 'Gorka',
                  bio: 'Gorka is our Frontend Engineer. He is enthusiast about life and a tinkerer, always ready to demo you his new side project.'
                })
              ),
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(_TeamCard2.default, {
                  name: 'Patricia Davila',
                  twitter: 'dizzypaty',
                  position: 'UX design',
                  imageUrl: 'Paty',
                  bio: 'Paty is our UX Designer. She orchestrates the collaboration between design, technology, and business making sure products are built around people. '
                })
              ),
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(_TeamCard2.default, {
                  name: 'Adrian Garc\xEDa',
                  twitter: 'owisixseven',
                  position: 'Brand design',
                  imageUrl: 'Adri',
                  bio: 'Adri\xE1n is our Brand Designer. He is a multidisciplinary designer focused on branding, art direction and the audiovisual world.'
                })
              ),
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(_TeamCard2.default, {
                  name: 'Daniel Norman',
                  twitter: 'daniel2color',
                  position: 'Web3 dev',
                  imageUrl: 'Daniel',
                  bio: 'Daniel is our Web3 Engineer. He is a globetrotter at heart with an interest in culture and how people live their lives.'
                })
              ),
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(_TeamCard2.default, {
                  name: 'Facundo Spagnuolo',
                  twitter: 'facuspagnuolo',
                  position: 'Solidity dev',
                  imageUrl: 'Facu',
                  bio: 'Facu is our Solidity Engineer. He is a researcher and security auditor, and the best asados chef you\'ll ever find.'
                })
              )
            )
          ),
          _react2.default.createElement(
            _ui.BreakPoint,
            { from: 'medium' },
            _react2.default.createElement(
              _Carousel2.default,
              {
                interval: null,
                nextIcon: _react2.default.createElement('img', { src: _arrow2.default }),
                activeIndex: index,
                direction: direction,
                onSelect: this.handleSelect },
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(
                  TeamContainer,
                  null,
                  _react2.default.createElement(_TeamCard2.default, {
                    name: 'Luis Cuende',
                    twitter: 'licuende',
                    position: 'CEO',
                    imageUrl: 'Luis',
                    bio: 'Luis is our CEO. He loves helping people solve unfair situations in the world through technology and he\'s currently leading our product efforts.'
                  }),
                  _react2.default.createElement(_TeamCard2.default, {
                    name: 'Jorge Izquierdo',
                    twitter: 'izqui9',
                    position: 'CTO',
                    imageUrl: 'Jorge',
                    bio: 'Jorge is our CTO. He\'s a curious hacker and researcher pushing to make the decentralized web happen.'
                  })
                )
              ),
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(
                  TeamContainer,
                  null,
                  _react2.default.createElement(_TeamCard2.default, {
                    name: 'Brett Sun',
                    twitter: 'sohkai',
                    position: 'Dev lead',
                    imageUrl: 'Brett',
                    bio: 'Brett is our Dev Lead. He\'s a highly curious full-stack engineer, a wizard both in frontend and Solidity.'
                  }),
                  _react2.default.createElement(_TeamCard2.default, {
                    name: 'John Light',
                    twitter: 'lightcoin',
                    position: 'Communications lead',
                    imageUrl: 'John',
                    bio: 'John is our Communications Lead. He\'s a crypto OG, co-founder of Bitseed, and advisor to cryptocurrency startups and investors.'
                  })
                )
              ),
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(
                  TeamContainer,
                  null,
                  _react2.default.createElement(_TeamCard2.default, {
                    name: 'Monica Zeng',
                    twitter: 'monicazng',
                    position: 'HR',
                    imageUrl: 'Monica',
                    bio: 'Monica is our HR. She has an international background specialized in strategy, management and executive coaching for startups and founders.'
                  }),
                  _react2.default.createElement(_TeamCard2.default, {
                    name: 'Mar\xEDa G\xF3mez',
                    twitter: 'MyPaoG',
                    position: 'Ecosystem',
                    imageUrl: 'Maria',
                    bio: 'Mar\xEDa is our Ecosystem Developer. She is a reinvented lawyer who loves traveling, networking and technology.'
                  })
                )
              ),
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(
                  TeamContainer,
                  null,
                  _react2.default.createElement(_TeamCard2.default, {
                    name: 'Pierre Bertet',
                    twitter: 'bpierre',
                    position: 'Frontend dev',
                    imageUrl: 'Pierre',
                    bio: 'Pierre is our Frontend Engineer. He is passionate about crafting high quality products, and loves Free Software and the World Wide Web.'
                  }),
                  _react2.default.createElement(_TeamCard2.default, {
                    name: 'Luke Duncan',
                    twitter: 'lkngtn',
                    position: 'Research',
                    imageUrl: 'Luke',
                    bio: 'Luke is our Research Lead. He loves to explore how blockchains enable novel forms of governance and how existing forms may perform in new contexts.'
                  })
                )
              ),
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(
                  TeamContainer,
                  null,
                  _react2.default.createElement(_TeamCard2.default, {
                    name: 'Bingen Eguzkitza',
                    twitter: 'bingentxu',
                    position: 'Solidity dev',
                    imageUrl: 'Bingen',
                    bio: 'Bingen is our Solidity Engineer. He is a long time open source software, hardware and data passionate.'
                  }),
                  _react2.default.createElement(_TeamCard2.default, {
                    name: 'Facundo Spagnuolo',
                    twitter: 'facuspagnuolo',
                    position: 'Solidity dev',
                    imageUrl: 'Facu',
                    bio: 'Facu is our Solidity Engineer. He is a researcher and security auditor, and the best asados chef you\'ll ever find.'
                  })
                )
              ),
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(
                  TeamContainer,
                  null,
                  _react2.default.createElement(_TeamCard2.default, {
                    name: 'Lorena Gonz\xE1lez',
                    twitter: 'curritta',
                    position: 'Operations',
                    imageUrl: 'Lorena',
                    bio: 'Lorena is our Operations Assistant. She has worked as a secretary, assistant, and office manager in a very different range of industries.'
                  }),
                  _react2.default.createElement(_TeamCard2.default, {
                    name: 'Delfina Polito',
                    twitter: 'PolitoDelfina',
                    position: 'Frontend dev',
                    imageUrl: 'Delfi',
                    bio: 'Delfi is our Frontend Engineer. She loves bringing designs to life, being careful about details to make things shine is definitely part of her core.'
                  })
                )
              ),
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(
                  TeamContainer,
                  null,
                  _react2.default.createElement(_TeamCard2.default, {
                    name: 'Patricia Davila',
                    twitter: 'dizzypaty',
                    position: 'UX design',
                    imageUrl: 'Paty',
                    bio: 'Paty is our UX Designer. She orchestrates the collaboration between design, technology, and business making sure products are built around people. '
                  }),
                  _react2.default.createElement(_TeamCard2.default, {
                    name: 'Adrian Garc\xEDa',
                    twitter: 'owisixseven',
                    position: 'Brand design',
                    imageUrl: 'Adri',
                    bio: 'Adri\xE1n is our Brand Designer. He is a multidisciplinary designer focused on branding, art direction and the audiovisual world.'
                  })
                )
              ),
              _react2.default.createElement(
                _Carousel2.default.Item,
                null,
                _react2.default.createElement(
                  TeamContainer,
                  null,
                  _react2.default.createElement(_TeamCard2.default, {
                    name: 'Ale Santander',
                    twitter: '_ajsantander',
                    position: 'Solidity dev',
                    imageUrl: 'Ale',
                    bio: 'Ale is a creative coder, versed in Solidity, JS, and other lingos.'
                  })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Team;
}(_react2.default.Component);

var TeamSection = _styledComponents2.default.section(_templateObject);

var TeamContainer = _styledComponents2.default.section(_templateObject2);

var Container = _styledComponents2.default.div(_templateObject3);
exports.default = Team;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border: solid 1px #3a3a3a;\n  max-width: 100%;\n  margin: 0;\n  width: 100%;\n  ', ';\n'], ['\n  border: solid 1px #3a3a3a;\n  max-width: 100%;\n  margin: 0;\n  width: 100%;\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  border-bottom: solid 1px #3a3a3a;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 70px;\n  div {\n    padding: 0 15px;\n  }\n  p {\n    margin: 0;\n    font-family: \'FontRegular\';\n    text-transform: uppercase;\n    font-size: 1rem;\n    letter-spacing: 2.6px;\n  }\n'], ['\n  border-bottom: solid 1px #3a3a3a;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 70px;\n  div {\n    padding: 0 15px;\n  }\n  p {\n    margin: 0;\n    font-family: \'FontRegular\';\n    text-transform: uppercase;\n    font-size: 1rem;\n    letter-spacing: 2.6px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-family: \'FontRegular\';\n  text-transform: uppercase;\n  font-size: 1.64rem;\n  letter-spacing: 3px;\n  height: 70px;\n  display: flex;\n  padding: 0 15px;\n  align-items: center;\n'], ['\n  font-family: \'FontRegular\';\n  text-transform: uppercase;\n  font-size: 1.64rem;\n  letter-spacing: 3px;\n  height: 70px;\n  display: flex;\n  padding: 0 15px;\n  align-items: center;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: 100%;\n'], ['\n  width: 100%;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  padding: 20px;\n  p {\n    font-family: \'FontRegular\';\n    line-height: 2.57rem;\n    font-size: 1.28rem;\n    margin: 0;\n    min-height: 115px;\n  }\n  a:hover {\n    opacity: 0.8;\n  }\n'], ['\n  padding: 20px;\n  p {\n    font-family: \'FontRegular\';\n    line-height: 2.57rem;\n    font-size: 1.28rem;\n    margin: 0;\n    min-height: 115px;\n  }\n  a:hover {\n    opacity: 0.8;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _A = __webpack_require__(41);

var _A2 = _interopRequireDefault(_A);

var _twitterTeam = __webpack_require__(42);

var _twitterTeam2 = _interopRequireDefault(_twitterTeam);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var TeamCard = function TeamCard(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement(
    TeamCardContainer,
    null,
    _react2.default.createElement(
      Position,
      null,
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          props.position
        )
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('img', { src: _A2.default })
      )
    ),
    _react2.default.createElement(
      Name,
      null,
      props.name
    ),
    _react2.default.createElement(Photo, { src: __webpack_require__(43)("./" + props.imageUrl + '.gif') }),
    _react2.default.createElement(
      Description,
      null,
      _react2.default.createElement(
        'p',
        null,
        props.bio
      ),
      _react2.default.createElement(
        'a',
        { href: "https://twitter.com/" + props.twitter, target: '_blank' },
        _react2.default.createElement('img', { src: _twitterTeam2.default })
      )
    )
  );
};

var TeamCardContainer = _styledComponents2.default.div(_templateObject, medium('max-width: 50%; margin: 0 15px; width: 39vw;'));

var Position = _styledComponents2.default.div(_templateObject2);

var Name = _styledComponents2.default.div(_templateObject3);

var Photo = _styledComponents2.default.img(_templateObject4);

var Description = _styledComponents2.default.div(_templateObject5);
exports.default = TeamCard;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMi40MzMgNTAuODc4bDIxLjM3NS0xMi42NDVWNi45NDNMMjIuNDMzIDEuMTE5IDEuMDU4IDYuOTQzdjMxLjI5bDIxLjM3NSAxMi42NDV6IiBmaWxsPSIjMDAwIiBzdHJva2U9IiMyODI4MjgiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzMuNTYzIDM3LjA1MWwtOS4xNzgtMjYuODc2aC0zLjYzOUwxMS41NyAzNy4wNTJoMy45MjJsNC4zMjMtMTMuMTMgMi43NTItOC42MkwyNi4zMSAyNy4wM2wuMTAzLjMxMmgtNS43NzVsNy4yMzYgNC40MzMgMS44MDYgNS4yNzZoMy44ODJ6IiBmaWxsPSJ1cmwoI3BhaW50MF9yYWRpYWwpIi8+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDBfcmFkaWFsIiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAgLTI4LjMyMTggMjMuMTc3OSAwIDIyLjU2NiAzNy4wNTEpIj48c3RvcCBzdG9wLWNvbG9yPSIjRUY2OThDIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjk4ODZEIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PC9zdmc+"

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyNSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI1IDIuMzY2MzFDMjQuMDc5OSAyLjc2Nzg3IDIzLjA5MjYgMy4wNDAyIDIyLjA1NTIgMy4xNjE3OEMyMy4xMTQ0IDIuNTM3MSAyMy45MjUyIDEuNTQ2MjcgMjQuMzA5NSAwLjM2OTI0OEMyMy4zMTU5IDAuOTQ3NzQxIDIyLjIxOTIgMS4zNjc4IDIxLjA1MDcgMS41OTU1MUMyMC4xMTQ5IDAuNjEyMzY4IDE4Ljc4MzkgMCAxNy4zMDc2IDBDMTQuNDc1NCAwIDEyLjE3ODkgMi4yNjE3MSAxMi4xNzg5IDUuMDQ5NjJDMTIuMTc4OSA1LjQ0NTAxIDEyLjIyNDIgNS44MzEyIDEyLjMxMTcgNi4yMDA0OUM4LjA1MDAxIDUuOTg5NjcgNC4yNzEwNCAzLjk3ODc3IDEuNzQxODMgMC45MjMxMTlDMS4yOTk3MiAxLjY2NzgxIDEuMDQ4MiAyLjUzNTUzIDEuMDQ4MiAzLjQ2MTc5QzEuMDQ4MiA1LjIxNDI0IDEuOTU0MjkgNi43NjA1MSAzLjMyOTA1IDcuNjY1MTdDMi40ODg1NyA3LjYzNzQ5IDEuNjk4MDggNy40MDk3OCAxLjAwNjA1IDcuMDMxMjdWNy4wOTQzNkMxLjAwNjA1IDkuNTQwNjkgMi43NzQ0NyAxMS41ODI0IDUuMTE5MzMgMTIuMDQ3MUM0LjY4OTcxIDEyLjE2MDkgNC4yMzY2OSAxMi4yMjQgMy43NjgwMiAxMi4yMjRDMy40MzY4NSAxMi4yMjQgMy4xMTY1OSAxMi4xOTE3IDIuODAyNTggMTIuMTMwMUMzLjQ1NTU2IDE0LjEzOCA1LjM0ODk5IDE1LjU5ODEgNy41OTIzMyAxNS42MzgxQzUuODM3OTYgMTYuOTkyMSAzLjYyNTg2IDE3Ljc5NjcgMS4yMjMyIDE3Ljc5NjdDMC44MDkyMzMgMTcuNzk2NyAwLjQwMTQ3MSAxNy43NzIxIDAgMTcuNzI3NUMyLjI2OTkgMTkuMTYzIDQuOTY0NzEgMjAgNy44NjEwNCAyMEMxNy4yOTUyIDIwIDIyLjQ1MjEgMTIuMzA0IDIyLjQ1MjEgNS42Mjk2OEwyMi40MzQ5IDQuOTc1NzlDMjMuNDQyNSA0LjI2Nzk5IDI0LjMxNDIgMy4zNzg3MSAyNSAyLjM2NjMxWiIgZmlsbD0iIzg2ODY4NiIvPgo8L3N2Zz4K"

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Adri.gif": 44,
	"./Ale.gif": 45,
	"./Bingen.gif": 46,
	"./Brett.gif": 47,
	"./Daniel.gif": 48,
	"./Delfi.gif": 49,
	"./Facu.gif": 50,
	"./Gorka.gif": 51,
	"./John.gif": 52,
	"./Jorge.gif": 53,
	"./Jouni.gif": 54,
	"./Lorena.gif": 55,
	"./Luis.gif": 56,
	"./Luke.gif": 57,
	"./Maria.gif": 58,
	"./Monica.gif": 59,
	"./Paty.gif": 60,
	"./Pierre.gif": 61,
	"./Tatu.gif": 62
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 43;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/f5232975-Adri.gif";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/d2d733a5-Ale.gif";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/daea8637-Bingen.gif";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/022ea507-Brett.gif";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/7ca4bfed-Daniel.gif";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/7501cd9b-Delfi.gif";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/d76b8f8b-Facu.gif";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ad04e244-Gorka.gif";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ac8acd84-John.gif";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/dbde128f-Jorge.gif";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ef0f63b3-Jouni.gif";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/a3fbf855-Lorena.gif";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/da3f5194-Luis.gif";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/4e609cd6-Luke.gif";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/02cd5244-Maria.gif";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/1e18e771-Monica.gif";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/194b6f04-Paty.gif";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/20c0f112-Pierre.gif";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/3f122fdd-Tatu.gif";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: auto;\n  width: 80%;\n  margin: 100px auto;\n  a {\n    color: #ff7671;\n  }\n  .label {\n    background: #793937;\n    padding: 0 5px;\n    margin-left: 5px;\n  }\n  .highlight {\n    background: #1b1b1b;\n    margin-top: 10px;\n    padding: 30px 5px;\n    ', ';\n    ul {\n      padding-left: 15px;\n      ', ';\n    }\n    ol {\n      padding-left: 23px;\n      ', ';\n    }\n  }\n'], ['\n  height: auto;\n  width: 80%;\n  margin: 100px auto;\n  a {\n    color: #ff7671;\n  }\n  .label {\n    background: #793937;\n    padding: 0 5px;\n    margin-left: 5px;\n  }\n  .highlight {\n    background: #1b1b1b;\n    margin-top: 10px;\n    padding: 30px 5px;\n    ', ';\n    ul {\n      padding-left: 15px;\n      ', ';\n    }\n    ol {\n      padding-left: 23px;\n      ', ';\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _JobOpening = __webpack_require__(64);

var _JobOpening2 = _interopRequireDefault(_JobOpening);

var _Slide = __webpack_require__(70);

var _Slide2 = _interopRequireDefault(_Slide);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var JobOpenings = function JobOpenings() {
  return _react2.default.createElement(
    JobOpeningsSection,
    { id: 'jobs' },
    _react2.default.createElement(
      'h6',
      { id: 'javascript-engineer' },
      _react2.default.createElement(
        'span',
        { className: 'grey' },
        '\u2014'
      ),
      ' OPEN JOBS POSITIONS'
    ),
    _react2.default.createElement(
      _Slide2.default,
      { bottom: true, duration: 1200 },
      _react2.default.createElement(
        _JobOpening2.default,
        {
          role: 'Javascript Engineer',
          category: 'ENGINEERING',
          title: 'Javascript Engineer',
          open: 'javascript-engineer',
          idprop: 'head-of-support',
          description: 'We\u2019re looking for a Javascript Engineer to help us interface smart contracts with the frontend using Web3 technologies. Our Javascript Engineer must be someone excited about Web3 and experimenting and researching in new dev tools and libraries. You\'ll work directly with our Dev Lead and other Aragon teams and community contributors.' },
        _react2.default.createElement(
          'h5',
          null,
          'Responsibilities'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Take ownership of the development and maintenance of aragon.js, the interface between smart contracts and the native web experience.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Research and experiment with new Web3 technologies, including but not limited to Web3.js and Parity systems.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Assist with smart contracts and frontend development when needed.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Help to create developer tools and technical documentation.'
          )
        ),
        _react2.default.createElement(
          'h5',
          null,
          'Requirements'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Track record working with Javascript environments.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Experience working with Modern JavaScript (ES6+) and Web APIs, CSS, React (Web and Native), resource optimization, development tools, and service APIs.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Proven ability to ship quality, well-crafted code within tight deadlines.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Being passionate about open source and decentralization.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Being an autonomous individual with a proactive attitude and a love for time self-management. We work focus-driven, not hours-driven.'
          )
        ),
        _react2.default.createElement(
          'h5',
          null,
          'Nice to have'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Previous experience contributing to or managing open source projects.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Previous experience working remotely.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Very good written communication skills.'
          )
        ),
        _react2.default.createElement(
          'h5',
          null,
          'How to apply'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Write an email with your Linkedin and/or CV, Github profile and any information you consider important to',
            ' ',
            _react2.default.createElement(
              'a',
              { href: 'mailto:hiring@aragon.one' },
              'hiring@aragon.one'
            ),
            ', with the subject',
            _react2.default.createElement(
              'span',
              { className: 'label' },
              'Javascript Engineer application'
            ),
            '.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Bonus: Why did Aragon catch your attention?'
          )
        )
      )
    ),
    _react2.default.createElement(
      _Slide2.default,
      { bottom: true, duration: 1200 },
      _react2.default.createElement(
        _JobOpening2.default,
        {
          role: 'Head of Support',
          category: 'COMMS',
          title: 'Head of Support',
          open: 'head-of-support',
          idprop: 'ui-engineer',
          description: 'We are looking for a Head of Support who is dedicated to helping users solve their problems with clarity, efficiency, and professionalism. You will own the creation of user-facing product documentation and be responsible for the timely resolution of help desk inquiries. Our Head of Support will play an important part in ensuring success for Aragon users as they build and run their organizations.' },
        _react2.default.createElement(
          'h5',
          null,
          'Responsibilities'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Document all user-facing features in the frontend client, as well as bugs and feature requests surfaced by product usage and help desk tickets.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Create educational tutorials and walkthrough videos and articles to demonstrate different ways to safely and successfully use the Aragon client.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Resolve help desk tickets in a timely manner with consistently high satisfaction ratings.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Establish and maintain policies and workflows that enable the support system to scale across multiple channels.'
          )
        ),
        _react2.default.createElement(
          'h5',
          null,
          'Requirements'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Previous experience in a technical support or customer success type of role.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Strategic mindset and ability to execute quickly.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Very good written and spoken communication skills in English.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Being highly organized, analytical, and detail-oriented.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Being passionate about open source and decentralization.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Being an autonomous individual with a proactive attitude and a love for time self-management. We work focus-driven, not hours-driven.'
          )
        ),
        _react2.default.createElement(
          'h5',
          null,
          'Nice to have'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Previous experience contributing to or managing open source projects.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Previous experience working remotely.'
          )
        ),
        _react2.default.createElement(
          'h5',
          null,
          'How to apply'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Write an email with your LinkedIn, CV, Twitter and/or Medium profiles, plus any information you consider important to',
            ' ',
            _react2.default.createElement(
              'a',
              { href: 'mailto:hiring@aragon.one' },
              'hiring@aragon.one'
            ),
            ', with the subject',
            _react2.default.createElement(
              'span',
              { className: 'label' },
              'Head of Support application'
            ),
            '.'
          )
        )
      )
    ),
    _react2.default.createElement(
      _Slide2.default,
      { bottom: true, duration: 1200 },
      _react2.default.createElement(
        _JobOpening2.default,
        {
          role: 'UI Engineer',
          category: 'ENGINEERING',
          title: 'UI Engineer',
          open: 'ui-engineer',
          idprop: 'systems-engineer',
          description: 'We\'re looking for a UI Engineer with a love for beautiful, well-crafted interfaces. You\'ll work with our frontend team building Aragon Court, Aragon Client, and Aragon UI.' },
        _react2.default.createElement(
          'h5',
          null,
          'Responsibilities'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Develop, ship, and maintain the',
            ' ',
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/aragon/aragon-ui', target: '_blank' },
              'Aragon UI'
            ),
            ', an Aragon-native toolkit of React UI components for decentralized apps, based on the',
            ' ',
            _react2.default.createElement(
              'a',
              { href: 'https://hack.aragon.org/docs/layout.html', target: '_blank' },
              'Aragon Design System'
            ),
            '.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Develop, ship, and maintain quality interfaces for the',
            ' ',
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/aragon/aragon', target: '_blank' },
              'Aragon client'
            ),
            '.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Develop, ship, and maintain the frontend for the first version of the',
            ' ',
            _react2.default.createElement(
              'a',
              {
                href: 'https://github.com/aragon/aragon-court',
                target: '_blank' },
              'Aragon Court'
            ),
            '.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Work with our Design team to transform ideas and designs into modern, clean, and readable code.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Research, develop, test and implement features on web applications built with modern technologies.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Collaborate with the product team to define new product features.'
          )
        ),
        _react2.default.createElement(
          'h5',
          null,
          'Requirements'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Experience working with Modern JavaScript (ES6+) and Web APIs, CSS, React (Web and Native), resource optimization, development tools.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Proven ability to ship quality, well-crafted code within tight deadlines.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Being passionate about open source and decentralization.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Being an autonomous individual with a proactive attitude and a love for time self-management. We work focus-driven, not hours-driven.'
          )
        ),
        _react2.default.createElement(
          'h5',
          null,
          'Nice to have'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Experience working with Web3 technologies.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Previous experience contributing or managing open source projects.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Previous experience working remotely.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Very good written communication skills.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Attention to UX/UI design.'
          )
        ),
        _react2.default.createElement(
          'h5',
          null,
          'How to apply'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Write an email with your LinkedIn and/or CV, your Github profile, and any information you consider important to',
            ' ',
            _react2.default.createElement(
              'a',
              { href: 'mailto:hiring@aragon.one' },
              'hiring@aragon.one'
            ),
            ', with the subject',
            _react2.default.createElement(
              'span',
              { className: 'label' },
              'UI engineer application'
            ),
            '.'
          )
        )
      )
    ),
    _react2.default.createElement(
      _Slide2.default,
      { bottom: true, duration: 1200 },
      _react2.default.createElement(
        _JobOpening2.default,
        {
          role: 'Systems Engineer',
          category: 'ENGINEERING',
          title: 'Systems Engineer',
          open: 'systems-engineer',
          idprop: 'developer-relations',
          description: _react2.default.createElement(
            'span',
            null,
            'We\u2019re looking for a Systems Engineer to help us architect and maintain our server infrastructure and automate internal processes. Our ideal Systems Engineer is someone who wants to create tools that will ultimately automate DAOs, and loves to build tools to benefit the open source community.',
            _react2.default.createElement('br', null),
            'We try to keep our centralized infrastructure at a minimum, balancing usability and decentralization (censorship-resistance). We strive to make as much as the infrastructure that supports using',
            _react2.default.createElement(
              'a',
              {
                target: '_blank',
                href: 'https://blog.aragon.one/deploying-and-distributing-aragon-core-11e70cbc9b50' },
              ' ',
              'Aragon client reproducible by users'
            ),
            ' ',
            'so they don\u2019t have to rely on our servers.'
          ) },
        _react2.default.createElement(
          'h5',
          null,
          'Responsibilities'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Take ownership of Aragon\'s hosted services, including (but not limited to) Ethereum nodes, IPFS nodes, Rocket Chat, and NextCloud.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Architect, build, and maintain rock solid infrastructure.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Create open source tools to automate internal workflows and systems engineering needs, with the goal of enhancing the entire open source community\'s toolset and knowledge.'
          )
        ),
        _react2.default.createElement(
          'h5',
          null,
          'Requirements'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Proven ability to launch, secure, monitor, and maintain automated cloud services.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Experience working with Kubernetes.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Pragmatic approach to infrastructure; never fail the same way twice.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Experience building, securing, maintaining, and open sourcing infrastructure tooling.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Experience working with Docker and containerizing applications.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'You\u2019re comfortable working autonomously and experienced enough to figure out what you need to do, given a broad set of end goals.'
          )
        ),
        _react2.default.createElement(
          'h5',
          null,
          'Nice to have'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Experience building deterministic environments and continuous delivery pipelines.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Previous experience contributing or managing open source projects and setting up nodes.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Previous experience working remotely.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Very good written communication skills.'
          )
        ),
        _react2.default.createElement(
          'h5',
          null,
          'How to apply'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Write an email with your LinkedIn, CV, Twitter, and/or Medium profiles, plus any information you consider important to',
            ' ',
            _react2.default.createElement(
              'a',
              { href: 'mailto:hiring@aragon.one' },
              'hiring@aragon.one'
            ),
            ', with the subject',
            _react2.default.createElement(
              'span',
              { className: 'label' },
              'Systems Engineer application'
            ),
            '.'
          )
        )
      )
    ),
    _react2.default.createElement(
      _Slide2.default,
      { bottom: true, duration: 1200 },
      _react2.default.createElement(
        _JobOpening2.default,
        {
          role: 'Developer Relations',
          category: 'COMMUNITY',
          title: 'Developer Relations',
          idprop: 'solidity-engineer',
          open: 'developer-relations',
          description: 'We\'re looking for a Developer Relations to help third party developers create apps on top of the Aragon client and aragonOS. Our Dev Rels must be someone passionate in helping others understand technical subjects through technical writing, networking and educating people. That means that our ideal Dev Rels is not only a legit developer but also an Aragon Technical Evangelist.' },
        _react2.default.createElement(
          'h5',
          null,
          'Responsibilities'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Write technical documentation and tutorials for developers, help Tatu create developer focused content.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Nurture and support the Aragon dev ecosystem.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Attend and organize hackathons, helping devs get excited and started developing on Aragon.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Support external contributors.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Source, screen and select interesting projects that might be eligible for',
            ' ',
            _react2.default.createElement(
              'a',
              {
                target: '_blank',
                href: 'https://blog.aragon.org/introducing-aragon-nest-1aa8c91c0566/' },
              'Nest grants'
            ),
            '.'
          )
        ),
        _react2.default.createElement(
          'h5',
          null,
          'Requirements'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Deep understanding of the crypto ecosystem and what\'s going on under the hood.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Technical expertise and experience working professionally as a developer.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Good social skills.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Very good written communication skills.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Experience writing technical documentation for developers.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Interest in working with developers to help them use and build on top of Aragon.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Being passionate about open source and decentralization.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Being an autonomous individual with a proactive attitude and a love for time self-management.'
          )
        ),
        _react2.default.createElement(
          'h5',
          null,
          'Nice to have'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Experience contributing or managing open source projects.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Experience creating documentation for developers, or documentation in general.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Experience networking in blockchain events.'
          )
        ),
        _react2.default.createElement(
          'h5',
          null,
          'How to apply'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Write an email with your GitHub, LinkedIn/CV, Twitter/Reddit profiles, plus any information you consider important to',
            ' ',
            _react2.default.createElement(
              'a',
              { href: 'mailto:hiring@aragon.one' },
              'hiring@aragon.one'
            ),
            ', with the subject',
            _react2.default.createElement(
              'span',
              { className: 'label' },
              'Developer Relations application.'
            ),
            '.'
          )
        )
      )
    ),
    _react2.default.createElement(
      _Slide2.default,
      { bottom: true, duration: 1200 },
      _react2.default.createElement(
        _JobOpening2.default,
        {
          role: 'Solidity Engineer',
          category: 'ENGINEERING',
          title: 'Solidity Engineer',
          open: 'solidity-engineer',
          description: 'We\'re looking for a Solidity Engineer to help us build the smart contract framework for decentralized organizations and court systems. You\'ll work with our product and research teams to architect and implement the Aragon client, Aragon Court, and aragonOS. ' },
        _react2.default.createElement(
          'h5',
          null,
          'Responsibilities'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Develop, ship, and maintain quality smart contracts for the Aragon client, the Aragon Network, and aragonOS.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Develop high-quality code that is maintainable, performant, accessible, precise and compatible with modern platforms.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Perform internal code audits and code reviews, and produce product and best practices documentation.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Collaborate with other product contributors to define new product features, roadmap, and workflow.'
          )
        ),
        _react2.default.createElement(
          'h5',
          null,
          'Requirements'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Expert understanding of Ethereum and the inner workings of the EVM.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Provable ability to ship high quality, well crafted code running on Ethereum.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Strong unit testing culture.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Being passionate about decentralization and open source.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Being an autonomous individual with a proactive attitude and a love for time self-management.'
          )
        ),
        _react2.default.createElement(
          'h5',
          null,
          'Nice to have'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Experience contributing or managing open source projects.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Very good written communication skills. '
          )
        ),
        _react2.default.createElement(
          'h5',
          null,
          'How to apply'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Write an email with your GitHub, LinkedIn/CV, Twitter/Reddit profiles, plus any information you consider important to',
            ' ',
            _react2.default.createElement(
              'a',
              { href: 'mailto:hiring@aragon.one' },
              'hiring@aragon.one'
            ),
            ', with the subject',
            _react2.default.createElement(
              'span',
              { className: 'label' },
              'Solidity Engineer opening application'
            ),
            '.'
          )
        )
      )
    )
  );
};

var JobOpeningsSection = _styledComponents2.default.section(_templateObject, medium('padding: 45px;'), medium('padding-left: 40px;'), medium('padding-left: 40px;'));

exports.default = JobOpenings;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  height: auto;\n  background: #191919;\n  mix-blend-mode: normal;\n  opacity: 0.71;\n  border-bottom: solid 1px black;\n  margin-bottom: 20px;\n  ', ';\n'], ['\n  height: auto;\n  background: #191919;\n  mix-blend-mode: normal;\n  opacity: 0.71;\n  border-bottom: solid 1px black;\n  margin-bottom: 20px;\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: auto;\n  background: #0f0f0f;\n  padding: 30px 15px;\n  ', ';\n  display: flex;\n  align-items: flex-start;\n  .job-container {\n    ', ';\n    max-width: 100%;\n  }\n'], ['\n  height: auto;\n  background: #0f0f0f;\n  padding: 30px 15px;\n  ', ';\n  display: flex;\n  align-items: flex-start;\n  .job-container {\n    ', ';\n    max-width: 100%;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  ', ';\n  .info-title {\n    padding: 45px 40px 20px 40px;\n    width: 100%;\n    ', ';\n  }\n  .icon-title {\n    width: 100%;\n    text-align: center;\n    padding: 10px;\n    background: #2D2D2D;\n    ', ';\n    img {\n      width: 25px;\n      ', ';\n    }\n  }\n\n  h2 {\n    font-family: \'FontRegular\';\n    line-height: 1.5;\n    font-size: 2.28rem;\n    margin: 0;\n    word-break: break-word;\n  }\n  h4 {\n    font-family: \'FontRegular\';\n    margin: 0;\n    font-size: 1rem;\n    letter-spacing: 2.6px;\n    word-break: break-word;\n    color: #ff7671;\n  }\n'], ['\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  ', ';\n  .info-title {\n    padding: 45px 40px 20px 40px;\n    width: 100%;\n    ', ';\n  }\n  .icon-title {\n    width: 100%;\n    text-align: center;\n    padding: 10px;\n    background: #2D2D2D;\n    ', ';\n    img {\n      width: 25px;\n      ', ';\n    }\n  }\n\n  h2 {\n    font-family: \'FontRegular\';\n    line-height: 1.5;\n    font-size: 2.28rem;\n    margin: 0;\n    word-break: break-word;\n  }\n  h4 {\n    font-family: \'FontRegular\';\n    margin: 0;\n    font-size: 1rem;\n    letter-spacing: 2.6px;\n    word-break: break-word;\n    color: #ff7671;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-family: \'FontRegular\';\n  h5 {\n    line-height: 2;\n    font-size: 1.71rem;\n    letter-spacing: 0.275px;\n    word-break: break-word;\n  }\n  li {\n    line-height: 1.5;\n    font-size: 1.28rem;\n    letter-spacing: 0.275px;\n    margin-bottom: 10px;\n  }\n  a {\n    color: #FF7671;\n  }\n  ul {\n    list-style: none;\n    margin-bottom: 40px;\n    padding-left: 15px;\n    ', ';\n  }\n\n  ul li::before {\n    content: "\u2022";\n    color: #FF7671;\n    font-weight: bold;\n    font-size: 2.14rem;\n    display: inline-block;\n    width: 15px;\n    margin-left: -15px;\n    ', ';\n    position: relative;\n    top: 1px;\n  }\n  ol li::before {\n    content: "";\n  }\n'], ['\n  font-family: \'FontRegular\';\n  h5 {\n    line-height: 2;\n    font-size: 1.71rem;\n    letter-spacing: 0.275px;\n    word-break: break-word;\n  }\n  li {\n    line-height: 1.5;\n    font-size: 1.28rem;\n    letter-spacing: 0.275px;\n    margin-bottom: 10px;\n  }\n  a {\n    color: #FF7671;\n  }\n  ul {\n    list-style: none;\n    margin-bottom: 40px;\n    padding-left: 15px;\n    ', ';\n  }\n\n  ul li::before {\n    content: "\u2022";\n    color: #FF7671;\n    font-weight: bold;\n    font-size: 2.14rem;\n    display: inline-block;\n    width: 15px;\n    margin-left: -15px;\n    ', ';\n    position: relative;\n    top: 1px;\n  }\n  ol li::before {\n    content: "";\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-family: \'FontRegular\';\n  line-height: 1.2;\n  font-size: 1.42rem;\n  border-bottom: solid 1px #3a3a3a;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  ', ';\n'], ['\n  font-family: \'FontRegular\';\n  line-height: 1.2;\n  font-size: 1.42rem;\n  border-bottom: solid 1px #3a3a3a;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Collapse = __webpack_require__(65);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _JobSnapshot = __webpack_require__(66);

var _JobSnapshot2 = _interopRequireDefault(_JobSnapshot);

var _plus = __webpack_require__(68);

var _plus2 = _interopRequireDefault(_plus);

var _minus = __webpack_require__(69);

var _minus2 = _interopRequireDefault(_minus);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var JobOpening = function (_React$Component) {
  _inherits(JobOpening, _React$Component);

  function JobOpening(props, context) {
    _classCallCheck(this, JobOpening);

    var _this = _possibleConstructorReturn(this, (JobOpening.__proto__ || Object.getPrototypeOf(JobOpening)).call(this, props, context));

    var open = false;
    if (window.location.href.indexOf(_this.props.open) > 0) {
      open = true;
    }
    _this.state = {
      open: open
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(JobOpening, [{
    key: 'handleClick',
    value: function handleClick() {
      var open = this.state.open;
      if (!open) {
        window.location.hash = this.props.open;
      }
      this.setState({ open: !open });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var open = false;
      if (window.location.href.indexOf(this.props.open) > 0) {
        open = true;
      }
      this.state = {
        open: open
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var open = this.state.open;

      return _react2.default.createElement(
        JobOpeningSection,
        null,
        _react2.default.createElement(
          JobTitle,
          {
            onClick: this.handleClick,
            'aria-controls': 'collapse-text',
            'aria-expanded': open
          },
          _react2.default.createElement(
            'div',
            { className: 'info-title', id: this.props.idprop || '' },
            _react2.default.createElement(
              'h4',
              null,
              this.props.category
            ),
            _react2.default.createElement(
              'h2',
              null,
              this.props.title
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'icon-title' },
            _react2.default.createElement('img', { src: open ? _minus2.default : _plus2.default })
          )
        ),
        _react2.default.createElement(
          _Collapse2.default,
          { 'in': this.state.open },
          _react2.default.createElement(
            JobInformation,
            { id: 'collapse-text' },
            _react2.default.createElement(
              'div',
              { className: 'job-container' },
              _react2.default.createElement(
                Description,
                null,
                this.props.description
              ),
              _react2.default.createElement(
                JobBody,
                null,
                _react2.default.createElement(
                  _ui.BreakPoint,
                  { to: 'medium' },
                  _react2.default.createElement(_JobSnapshot2.default, null)
                ),
                this.props.children
              )
            ),
            _react2.default.createElement(
              _ui.BreakPoint,
              { from: 'medium' },
              _react2.default.createElement(_JobSnapshot2.default, { role: this.props.role })
            )
          )
        )
      );
    }
  }]);

  return JobOpening;
}(_react2.default.Component);

exports.default = JobOpening;


var JobOpeningSection = _styledComponents2.default.div(_templateObject, medium('margin-bottom: 0;'));
var JobInformation = _styledComponents2.default.div(_templateObject2, medium('padding: 40px 30px 40px 40px;'), medium('margin-right: 25px;'));

var JobTitle = _styledComponents2.default.div(_templateObject3, medium('flex-direction: row; padding: 45px 40px 40px 40px;'), medium('padding 0; width: auto;'), medium('padding 0; width: auto; background: transparent;'), medium('width: auto;'));
var JobBody = _styledComponents2.default.div(_templateObject4, medium('padding-left: 40px;'), medium('width: 30px; margin-left: -30px;'));

var Description = _styledComponents2.default.h3(_templateObject5, medium('line-height: 1.7; font-size: 2rem;'));

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Collapse");

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border: solid 1px #3a3a3a;\n  max-width: 50%;\n  margin: 0;\n  width: 350px;\n  min-width: auto;\n  max-width: 100%;\n\n  ', ';\n'], ['\n  border: solid 1px #3a3a3a;\n  max-width: 50%;\n  margin: 0;\n  width: 350px;\n  min-width: auto;\n  max-width: 100%;\n\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    position: inherit;\n    top: 0;\n    transition: all 2s ease-in-out;\n    right: 0;\n    ', ';\n  '], ['\n    position: inherit;\n    top: 0;\n    transition: all 2s ease-in-out;\n    right: 0;\n    ', ';\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  border-bottom: solid 1px #3a3a3a;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 70px;\n  div {\n    padding: 0 30px;\n  }\n  p {\n    margin: 0;\n    font-family: \'FontRegular\';\n    line-height: 3.42rem;\n    font-size: 1.71rem;\n  }\n'], ['\n  border-bottom: solid 1px #3a3a3a;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 70px;\n  div {\n    padding: 0 30px;\n  }\n  p {\n    margin: 0;\n    font-family: \'FontRegular\';\n    line-height: 3.42rem;\n    font-size: 1.71rem;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  padding: 30px;\n  font-family: \'FontRegular\';\n  p {\n    line-height: 2.64rem;\n    font-size: 1.57rem;\n    margin-bottom: 30px;\n  }\n  h4 {\n    line-height: 1;\n    font-size: 1rem;\n    letter-spacing: 2.6px;\n    color: #FFFFFF;\n    mix-blend-mode: normal;\n    opacity: 0.5;\n    text-transform: uppercase\n  }\n  a {\n    border: solid 1px #FF7671;\n    font-size: 1rem;\n    text-align: center;\n    letter-spacing: 2.6px;\n    text-transform: uppercase;\n    width: 100%;\n    display: inherit;\n    padding: 15px;\n    cursor: pointer;\n    color: white!important;\n    text-decoration: none!important;\n  }\n  a:hover {\n    background: #FF7671;\n  }\n'], ['\n  padding: 30px;\n  font-family: \'FontRegular\';\n  p {\n    line-height: 2.64rem;\n    font-size: 1.57rem;\n    margin-bottom: 30px;\n  }\n  h4 {\n    line-height: 1;\n    font-size: 1rem;\n    letter-spacing: 2.6px;\n    color: #FFFFFF;\n    mix-blend-mode: normal;\n    opacity: 0.5;\n    text-transform: uppercase\n  }\n  a {\n    border: solid 1px #FF7671;\n    font-size: 1rem;\n    text-align: center;\n    letter-spacing: 2.6px;\n    text-transform: uppercase;\n    width: 100%;\n    display: inherit;\n    padding: 15px;\n    cursor: pointer;\n    color: white!important;\n    text-decoration: none!important;\n  }\n  a:hover {\n    background: #FF7671;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _jobLogo = __webpack_require__(67);

var _jobLogo2 = _interopRequireDefault(_jobLogo);

var _Fade = __webpack_require__(3);

var _Fade2 = _interopRequireDefault(_Fade);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var SnapshotCard = function SnapshotCard(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement(
    Snapshot,
    null,
    _react2.default.createElement(
      _Fade2.default,
      { duration: 1200 },
      _react2.default.createElement(
        SnapshotCardContainer,
        null,
        _react2.default.createElement(
          Title,
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'p',
              null,
              'Info'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('img', { src: _jobLogo2.default })
          )
        ),
        _react2.default.createElement(
          Description,
          null,
          _react2.default.createElement(
            'h4',
            null,
            'Type'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Full-time'
          ),
          _react2.default.createElement(
            'h4',
            null,
            'Location'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Remote'
          ),
          _react2.default.createElement(
            'h4',
            null,
            'Role'
          ),
          _react2.default.createElement(
            'p',
            null,
            props.role
          ),
          _react2.default.createElement(
            'a',
            { href: 'mailto:hiring@aragon.one' },
            'Apply now'
          )
        )
      )
    )
  );
};

var SnapshotCardContainer = _styledComponents2.default.div(_templateObject, medium('min-width: 24%; margin: 0 15px;'));
var Snapshot = _styledComponents2.default.div(_templateObject2, medium('position: sticky; top: 50px;'));

var Title = _styledComponents2.default.div(_templateObject3);

var Description = _styledComponents2.default.div(_templateObject4);
exports.default = SnapshotCard;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggb3BhY2l0eT0iLjMyNyIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjIuNDMzIDUwLjg3OEw0My44MSAzOC4yMzNWNi45NDNMMjIuNDM0IDEuMTE5IDEuMDU3IDYuOTQzdjMxLjI5bDIxLjM3NSAxMi42NDV6IiBzdHJva2U9IiMyNzI3MjciIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMzLjU2MyAzNy4wNTFsLTkuMTc4LTI2Ljg3NWgtMy42MzhMMTEuNTY5IDM3LjA1aDMuOTIybDQuMzIzLTEzLjEzIDIuNzUyLTguNjIgMy43NDUgMTEuNzI5LjEwMy4zMTJoLTUuNzc1bDcuMjM2IDQuNDMzIDEuODA3IDUuMjc2aDMuODgxeiIgc3Ryb2tlPSIjNUE1QTVBIiBzdHJva2Utd2lkdGg9Ii42MyIvPjwvc3ZnPg=="

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgMjIuNTYyNUgyMi41NjMyVjFIMjUuNDM1NFYyMi41NjI1SDQ3VjI1LjQzNzVIMjUuNDM1NFY0N0gyMi41NjMyVjI1LjQzNzVIMVYyMi41NjI1WiIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzEyMTIxMiIvPgo8L3N2Zz4K"

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNCIgdmlld0JveD0iMCAwIDQ4IDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDAuNTYyNDY5SDIyLjU2MzJIMjUuNDM1NEg0N1YzLjQzNzU0SDI1LjQzNTRIMjIuNTYzMkgxVjAuNTYyNDY5WiIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzEyMTIxMiIvPgo8L3N2Zz4K"

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Slide");

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 300px;\n  overflow: hidden;\n  object-fit: cover;\n  object-position: -54px 100%;\n'], ['\n  width: 100%;\n  height: 300px;\n  overflow: hidden;\n  object-fit: cover;\n  object-position: -54px 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  min-height: 600px;\n  height: auto;\n  background: none;\n  ', '\n  display: flex;\n  align-items: center;\n'], ['\n  min-height: 600px;\n  height: auto;\n  background: none;\n  ', '\n  display: flex;\n  align-items: center;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 80%;\n  margin: auto;\n  height: 100%;\n  h6 {\n    margin: 0 0 30px 0 !important;\n  }\n  p {\n    font-family: \'FontRegular\';\n    line-height: 1.5;\n    font-size: 1.78rem;\n    max-width: 100%;\n    ', ';\n  }\n'], ['\n  width: 80%;\n  margin: auto;\n  height: 100%;\n  h6 {\n    margin: 0 0 30px 0 !important;\n  }\n  p {\n    font-family: \'FontRegular\';\n    line-height: 1.5;\n    font-size: 1.78rem;\n    max-width: 100%;\n    ', ';\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _map = __webpack_require__(72);

var _map2 = _interopRequireDefault(_map);

var _Fade = __webpack_require__(3);

var _Fade2 = _interopRequireDefault(_Fade);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Remote = function Remote() {
  return _react2.default.createElement(
    RemoteSection,
    null,
    _react2.default.createElement(
      Container,
      null,
      _react2.default.createElement(
        _ui.BreakPoint,
        { to: 'medium' },
        _react2.default.createElement(
          'h6',
          null,
          _react2.default.createElement(
            'span',
            { className: 'grey' },
            '\u2014'
          ),
          ' A COMPLETELY REMOTE TEAM'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Talent shouldn\'t be constrained by geography. We work remotely. Distance feels shorter when the vision of a fair world unites us all.'
        ),
        _react2.default.createElement(MobileImg, { src: _map2.default })
      ),
      _react2.default.createElement(
        _ui.BreakPoint,
        { from: 'medium' },
        _react2.default.createElement(
          _Fade2.default,
          { bottom: true, duration: 1200, delay: 200 },
          _react2.default.createElement(
            'h6',
            null,
            _react2.default.createElement(
              'span',
              { className: 'grey' },
              '\u2014'
            ),
            ' A COMPLETELY REMOTE TEAM'
          )
        ),
        _react2.default.createElement(
          _Fade2.default,
          { bottom: true, duration: 1200, delay: 400 },
          _react2.default.createElement(
            'p',
            null,
            'Talent shouldn\'t be constrained by geography. We work remotely. Distance feels shorter when the vision of a fair world unites us all.'
          )
        )
      )
    )
  );
};

var MobileImg = _styledComponents2.default.img(_templateObject);
var RemoteSection = _styledComponents2.default.section(_templateObject2, (0, _ui.breakpoint)('medium', '\n      background: url(' + _map2.default + ') no-repeat;\n      background-size: 68%;\n      background-position: 135% 50%;\n    '));

var Container = _styledComponents2.default.div(_templateObject3, medium('font-size: 2.28rem; max-width: 40%;'));
exports.default = Remote;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/a9fd696c-map.gif";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: auto;\n  padding: 100px 0;\n  img {\n    width: 100%;\n  }\n'], ['\n  height: auto;\n  padding: 100px 0;\n  img {\n    width: 100%;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 80%;\n  margin: auto;\n'], ['\n  width: 80%;\n  margin: auto;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _hiring = __webpack_require__(74);

var _hiring2 = _interopRequireDefault(_hiring);

var _hiringMobile = __webpack_require__(75);

var _hiringMobile2 = _interopRequireDefault(_hiringMobile);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var HiringProcess = function HiringProcess() {
  return _react2.default.createElement(
    HiringProcessSection,
    null,
    _react2.default.createElement(
      Container,
      null,
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h6',
          null,
          _react2.default.createElement(
            'span',
            { className: 'grey' },
            '\u2014'
          ),
          ' OUR HIRING PROCESS'
        )
      ),
      _react2.default.createElement(
        _ui.BreakPoint,
        { from: 'medium' },
        _react2.default.createElement('img', { src: _hiring2.default })
      ),
      _react2.default.createElement(
        _ui.BreakPoint,
        { to: 'medium' },
        _react2.default.createElement('img', { src: _hiringMobile2.default })
      )
    )
  );
};

var HiringProcessSection = _styledComponents2.default.section(_templateObject);

var Container = _styledComponents2.default.div(_templateObject2);
exports.default = HiringProcess;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/8bb31a66-hiring.svg";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/f664a616-hiring-mobile.svg";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  min-height: 600px;\n  height: auto;\n  background: url(', ') top no-repeat;\n  background-size: cover;\n'], ['\n  min-height: 600px;\n  height: auto;\n  background: url(', ') top no-repeat;\n  background-size: cover;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 80%;\n  margin: auto;\n  height: 100%;\n  padding-top: 50px;\n  h1 {\n    font-family: \'FontBold\';\n    word-break: break-word;\n    margin: 0;\n    text-align: left;\n    color: white;\n    line-height: 1.2;\n    font-size: 3.85rem;\n    ', ';\n    color: #ffffff;\n  }\n  .pink {\n    color: #ff5d5d;\n  }\n  ', ';\n'], ['\n  width: 80%;\n  margin: auto;\n  height: 100%;\n  padding-top: 50px;\n  h1 {\n    font-family: \'FontBold\';\n    word-break: break-word;\n    margin: 0;\n    text-align: left;\n    color: white;\n    line-height: 1.2;\n    font-size: 3.85rem;\n    ', ';\n    color: #ffffff;\n  }\n  .pink {\n    color: #ff5d5d;\n  }\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _swiss = __webpack_require__(77);

var _swiss2 = _interopRequireDefault(_swiss);

var _Photos = __webpack_require__(78);

var _Photos2 = _interopRequireDefault(_Photos);

var _Fade = __webpack_require__(3);

var _Fade2 = _interopRequireDefault(_Fade);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Company = function Company() {
  return _react2.default.createElement(
    CompanySection,
    null,
    _react2.default.createElement(
      Container,
      null,
      _react2.default.createElement(
        _ui.BreakPoint,
        { from: 'medium' },
        _react2.default.createElement(
          _Fade2.default,
          { bottom: true, duration: 1200, delay: 200 },
          _react2.default.createElement(
            'h1',
            null,
            'Based in the'
          ),
          _react2.default.createElement(
            'h1',
            null,
            'Crypto Valley,'
          ),
          _react2.default.createElement(
            'h1',
            { className: 'pink' },
            'Switzerland'
          )
        )
      ),
      _react2.default.createElement(
        _ui.BreakPoint,
        { to: 'medium' },
        _react2.default.createElement(
          _Fade2.default,
          { bottom: true, duration: 1200, delay: 200 },
          _react2.default.createElement(
            'h1',
            null,
            'Based in the Crypto Valley,'
          ),
          _react2.default.createElement(
            'h1',
            { className: 'pink' },
            ' Switzerland'
          )
        )
      ),
      _react2.default.createElement(_Photos2.default, null)
    )
  );
};

var CompanySection = _styledComponents2.default.section(_templateObject, _swiss2.default);

var Container = _styledComponents2.default.div(_templateObject2, medium('font-size: 8.92rem; line-height: 1.1;'), medium('padding-top: 200px;'));
exports.default = Company;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/0b6dff8c-swiss.jpg";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  padding: 100px 0 200px 0;\n  overflow: hidden;\n  .carousel-indicators {\n    display: none;\n  }\n'], ['\n  padding: 100px 0 200px 0;\n  overflow: hidden;\n  .carousel-indicators {\n    display: none;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  ', ';\n  img {\n    width: 100%;\n    margin: 20px 0;\n    ', ';\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  ', ';\n  img {\n    width: 100%;\n    margin: 20px 0;\n    ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: auto;\n  height: 100%;\n'], ['\n  width: 100%;\n  margin: auto;\n  height: 100%;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _photo = __webpack_require__(79);

var _photo2 = _interopRequireDefault(_photo);

var _photo3 = __webpack_require__(80);

var _photo4 = _interopRequireDefault(_photo3);

var _photo5 = __webpack_require__(81);

var _photo6 = _interopRequireDefault(_photo5);

var _photo7 = __webpack_require__(82);

var _photo8 = _interopRequireDefault(_photo7);

var _photo9 = __webpack_require__(83);

var _photo10 = _interopRequireDefault(_photo9);

var _photo11 = __webpack_require__(84);

var _photo12 = _interopRequireDefault(_photo11);

var _photo13 = __webpack_require__(85);

var _photo14 = _interopRequireDefault(_photo13);

var _photo15 = __webpack_require__(86);

var _photo16 = _interopRequireDefault(_photo15);

var _photo17 = __webpack_require__(87);

var _photo18 = _interopRequireDefault(_photo17);

var _photo19 = __webpack_require__(88);

var _photo20 = _interopRequireDefault(_photo19);

var _photo21 = __webpack_require__(89);

var _photo22 = _interopRequireDefault(_photo21);

var _photo23 = __webpack_require__(90);

var _photo24 = _interopRequireDefault(_photo23);

var _photo25 = __webpack_require__(91);

var _photo26 = _interopRequireDefault(_photo25);

var _photo27 = __webpack_require__(92);

var _photo28 = _interopRequireDefault(_photo27);

var _photo29 = __webpack_require__(93);

var _photo30 = _interopRequireDefault(_photo29);

var _photo31 = __webpack_require__(94);

var _photo32 = _interopRequireDefault(_photo31);

var _Carousel = __webpack_require__(12);

var _Carousel2 = _interopRequireDefault(_Carousel);

var _arrow = __webpack_require__(13);

var _arrow2 = _interopRequireDefault(_arrow);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Photos = function (_React$Component) {
  _inherits(Photos, _React$Component);

  function Photos(props, context) {
    _classCallCheck(this, Photos);

    var _this = _possibleConstructorReturn(this, (Photos.__proto__ || Object.getPrototypeOf(Photos)).call(this, props, context));

    _this.handleSelect = _this.handleSelect.bind(_this);

    _this.state = {
      index: 0,
      direction: null
    };
    return _this;
  }

  _createClass(Photos, [{
    key: 'handleSelect',
    value: function handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          index = _state.index,
          direction = _state.direction;

      return _react2.default.createElement(
        PhotosSection,
        null,
        _react2.default.createElement(
          Container,
          null,
          _react2.default.createElement(
            _Carousel2.default,
            { interval: null, pauseOnHover: 'true', nextIcon: _react2.default.createElement('img', { src: _arrow2.default }) },
            _react2.default.createElement(
              _Carousel2.default.Item,
              null,
              _react2.default.createElement(
                PhotosContainer,
                null,
                _react2.default.createElement('img', { src: _photo2.default }),
                _react2.default.createElement('img', { src: _photo4.default })
              )
            ),
            _react2.default.createElement(
              _Carousel2.default.Item,
              null,
              _react2.default.createElement(
                PhotosContainer,
                null,
                _react2.default.createElement('img', { src: _photo6.default }),
                _react2.default.createElement('img', { src: _photo8.default })
              )
            ),
            _react2.default.createElement(
              _Carousel2.default.Item,
              null,
              _react2.default.createElement(
                PhotosContainer,
                null,
                _react2.default.createElement('img', { src: _photo10.default }),
                _react2.default.createElement('img', { src: _photo12.default })
              )
            ),
            _react2.default.createElement(
              _Carousel2.default.Item,
              null,
              _react2.default.createElement(
                PhotosContainer,
                null,
                _react2.default.createElement('img', { src: _photo14.default }),
                _react2.default.createElement('img', { src: _photo16.default })
              )
            ),
            _react2.default.createElement(
              _Carousel2.default.Item,
              null,
              _react2.default.createElement(
                PhotosContainer,
                null,
                _react2.default.createElement('img', { src: _photo18.default }),
                _react2.default.createElement('img', { src: _photo20.default })
              )
            ),
            _react2.default.createElement(
              _Carousel2.default.Item,
              null,
              _react2.default.createElement(
                PhotosContainer,
                null,
                _react2.default.createElement('img', { src: _photo22.default }),
                _react2.default.createElement('img', { src: _photo24.default })
              )
            ),
            _react2.default.createElement(
              _Carousel2.default.Item,
              null,
              _react2.default.createElement(
                PhotosContainer,
                null,
                _react2.default.createElement('img', { src: _photo26.default }),
                _react2.default.createElement('img', { src: _photo28.default })
              )
            ),
            _react2.default.createElement(
              _Carousel2.default.Item,
              null,
              _react2.default.createElement(
                PhotosContainer,
                null,
                _react2.default.createElement('img', { src: _photo30.default }),
                _react2.default.createElement('img', { src: _photo32.default })
              )
            )
          )
        )
      );
    }
  }]);

  return Photos;
}(_react2.default.Component);

var PhotosSection = _styledComponents2.default.section(_templateObject);

var PhotosContainer = _styledComponents2.default.section(_templateObject2, large('flex-direction: row;'), large('width: calc(50% - 20px); margin: 0;'));

var Container = _styledComponents2.default.div(_templateObject3);
exports.default = Photos;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/a61285c5-photo1.png";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bdc9626a-photo2.png";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/cc6c1d9f-photo3.png";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/1ca0de31-photo4.png";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/9cbc6292-photo5.png";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/9a41e848-photo6.png";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ce263257-photo7.png";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/1ee297be-photo8.png";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/817e5bc3-photo9.png";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/5d32ec16-photo10.png";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/539e336c-photo11.png";

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/4c04ee4e-photo12.png";

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/fa49ff16-photo13.png";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/0a38ddda-photo14.png";

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/7e3b66cd-photo15.png";

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/b34c37fe-photo16.png";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-color: #0f0f0f;\n  height: auto;\n  padding: 100px 0;\n  text-align: center;\n  margin-top: 70px;\n'], ['\n  background-color: #0f0f0f;\n  height: auto;\n  padding: 100px 0;\n  text-align: center;\n  margin-top: 70px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 80%;\n  margin: auto;\n  height: 100%;\n  h2 {\n    font-family: \'FontRegular\';\n    line-height: 1.5;\n    ', ';\n    font-size: 2.28rem;\n    text-align: center;\n    color: #ffffff;\n    margin-top: 0;\n  }\n  h5 {\n    font-family: \'FontRegular\';\n    margin: 0;\n    font-size: 1rem;\n    text-align: center;\n    letter-spacing: 2.6px;\n    color: #ff7671;\n  }\n'], ['\n  width: 80%;\n  margin: auto;\n  height: 100%;\n  h2 {\n    font-family: \'FontRegular\';\n    line-height: 1.5;\n    ', ';\n    font-size: 2.28rem;\n    text-align: center;\n    color: #ffffff;\n    margin-top: 0;\n  }\n  h5 {\n    font-family: \'FontRegular\';\n    margin: 0;\n    font-size: 1rem;\n    text-align: center;\n    letter-spacing: 2.6px;\n    color: #ff7671;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: grid;\n  margin-top: 70px;\n  ', ';\n  grid-template-columns: 100%;\n  grid-template-rows: auto;\n  grid-column-gap: 30px;\n  grid-row-gap: 30px;\n'], ['\n  display: grid;\n  margin-top: 70px;\n  ', ';\n  grid-template-columns: 100%;\n  grid-template-rows: auto;\n  grid-column-gap: 30px;\n  grid-row-gap: 30px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', ';\n  &.small {\n  ', ';\n  }\n  &.medium {\n  ', ';\n  }\n  &.x-small {\n  ', ';\n  }\n  p {\n    font-family: \'FontRegular\';\n    line-height: 2.28rem;\n    padding: 20px 0;\n    font-size: 1.42rem;\n    text-align: center;\n    color: #ffffff;\n  }\n'], ['\n  ', ';\n  &.small {\n  ', ';\n  }\n  &.medium {\n  ', ';\n  }\n  &.x-small {\n  ', ';\n  }\n  p {\n    font-family: \'FontRegular\';\n    line-height: 2.28rem;\n    padding: 20px 0;\n    font-size: 1.42rem;\n    text-align: center;\n    color: #ffffff;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ = __webpack_require__(96);

var _2 = _interopRequireDefault(_);

var _3 = __webpack_require__(97);

var _4 = _interopRequireDefault(_3);

var _5 = __webpack_require__(98);

var _6 = _interopRequireDefault(_5);

var _7 = __webpack_require__(99);

var _8 = _interopRequireDefault(_7);

var _9 = __webpack_require__(100);

var _10 = _interopRequireDefault(_9);

var _11 = __webpack_require__(101);

var _12 = _interopRequireDefault(_11);

var _Fade = __webpack_require__(3);

var _Fade2 = _interopRequireDefault(_Fade);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var WorkConditions = function WorkConditions() {
  return _react2.default.createElement(
    WorkConditionsSection,
    { id: 'philosophy' },
    _react2.default.createElement(
      Container,
      null,
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h5',
          null,
          'WORK WITH US'
        ),
        _react2.default.createElement(
          'h2',
          null,
          'Our work conditions'
        )
      ),
      _react2.default.createElement(
        Box,
        null,
        _react2.default.createElement(
          Item,
          { className: 'medium' },
          _react2.default.createElement(
            _Fade2.default,
            { bottom: true, duration: 1200, delay: 200 },
            _react2.default.createElement('img', { src: _2.default })
          ),
          _react2.default.createElement(
            _Fade2.default,
            { bottom: true, duration: 1200, delay: 200 },
            _react2.default.createElement(
              'p',
              null,
              '100% remote team - talent has no borders, our team works from all around the world'
            )
          )
        ),
        _react2.default.createElement(
          Item,
          { className: 'small' },
          _react2.default.createElement(
            _Fade2.default,
            { bottom: true, duration: 1200, delay: 300 },
            _react2.default.createElement('img', { src: _4.default })
          ),
          _react2.default.createElement(
            _Fade2.default,
            { bottom: true, duration: 1200, delay: 300 },
            _react2.default.createElement(
              'p',
              null,
              'Focus driven - we don\u2019t track hours, we encourage the maker\u2019s schedule'
            )
          )
        ),
        _react2.default.createElement(
          Item,
          null,
          _react2.default.createElement(
            _Fade2.default,
            { bottom: true, duration: 1200, delay: 400 },
            _react2.default.createElement('img', { src: _8.default })
          ),
          _react2.default.createElement(
            _Fade2.default,
            { bottom: true, duration: 1200, delay: 400 },
            _react2.default.createElement(
              'p',
              null,
              'Dynamic team - we\u2019re a small team and we want to keep it this way to increase individual leverage'
            )
          )
        ),
        _react2.default.createElement(
          Item,
          null,
          _react2.default.createElement(
            _Fade2.default,
            { bottom: true, duration: 1200, delay: 500 },
            _react2.default.createElement('img', { src: _10.default })
          ),
          _react2.default.createElement(
            _Fade2.default,
            { bottom: true, duration: 1200, delay: 500 },
            _react2.default.createElement(
              'p',
              null,
              'Quarterly offsites - we get together in inspiring locations to build, meet and have fun'
            )
          )
        ),
        _react2.default.createElement(
          Item,
          null,
          _react2.default.createElement(
            _Fade2.default,
            { bottom: true, duration: 1200, delay: 600 },
            _react2.default.createElement('img', { src: _12.default })
          ),
          _react2.default.createElement(
            _Fade2.default,
            { bottom: true, duration: 1200, delay: 600 },
            _react2.default.createElement(
              'p',
              null,
              'Side projects - we encourage you to spend some time contributing to the broader ecosystem'
            )
          )
        ),
        _react2.default.createElement(
          Item,
          { className: 'x-small' },
          _react2.default.createElement(
            _Fade2.default,
            { bottom: true, duration: 1200, delay: 700 },
            _react2.default.createElement('img', { src: _6.default })
          ),
          _react2.default.createElement(
            _Fade2.default,
            { bottom: true, duration: 1200, delay: 700 },
            _react2.default.createElement(
              'p',
              null,
              'Crypto-first - you decide how to allocate your salary in ANT/DAI/ETH'
            )
          )
        )
      )
    )
  );
};

var WorkConditionsSection = _styledComponents2.default.section(_templateObject);

var Container = _styledComponents2.default.div(_templateObject2, medium('line-height: 3.42;'));
var Box = _styledComponents2.default.div(_templateObject3, medium('grid-template-columns: calc(33% - 15px) calc(33% - 15px) calc(33% - 15px); grid-template-rows: auto auto'));
var Item = _styledComponents2.default.div(_templateObject4, medium('padding: 0 30px'), medium('padding: 0 55px'), medium('padding: 0 40px'), medium('padding: 0 73px'));
exports.default = WorkConditions;

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTExcHgiIGhlaWdodD0iMTEycHgiIHZpZXdCb3g9IjAgMCAxMTEgMTEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1My4yICg3MjY0MykgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+d29ybGQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9Ijc1JSIgeTE9Ii00OC4yMTEyNSUiIHgyPSItMjEuNDIyMDgzMyUiIHkyPSIxLjc4ODc1JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkY3QzU2IiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRjVENUQiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0id29ybGQiPgogICAgICAgICAgICA8cGF0aCBkPSJNOTUuNTk0NywxNy4zOTUgTDg5Ljg1ODQsMjEuMjU3MyBMODAuMjk4MiwxOS4zMjYxIEw3NC41NjIsMTcuMzk1IEw2Ni45MTM3LDE5LjMyNjEgTDYxLjE3NzUsMTcuMzk1IEw2NS4wMDE1LDkuNjcwMyBMNzIuNjQ5Nyw5LjY3MDMgTDgwLjE0NTEsNS44ODUzIEM4NS45MjU1LDguNzcyMyA5MS4xNTQ5LDEyLjY2OTMgOTUuNTk0NywxNy4zOTUgWiIgaWQ9IlBhdGgiIGZpbGw9IiM0MTQxNDEiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMC43Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01MS42MTc0LDkuNjcwMyBMNDkuNzA1NCwxNS40NjM5IEw0My45NjkyLDE3LjM5NSBMMzguMjMyOSwyNy4wNTA4IEwyOC42NzI3LDMyLjg0NDQgTDE1LjI4ODQsMzQuNzc1NSBMMTUuMjg4NCw0MC41NjkxIEwxOS4xMTI1LDQ0LjQzMTQgTDE5LjExMjUsNTIuMTU2MSBMMTMuMzc2Nyw0OC4yOTM2IEw3LjY0MDQzLDQ0LjQzMTQgTDQuMzEzNDgsMzQuMzMxNSBDMTAuMDQsMjAuNTQ4NSAyMC45ODY2LDkuNjUyOCAzNC43MTUsNC4wNjk4IEw0MC4xNDUyLDcuNzM5MSBMNTEuNjE3NCw5LjY3MDMgWiIgaWQ9IlBhdGgiIGZpbGw9IiM0MTQxNDEiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMC43Ij48L3BhdGg+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBmaWxsPSIjNDE0MTQxIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjAuNyIgcG9pbnRzPSI1NS40NDE3IDYzLjc0MjkgNTMuNTI5NyA3My4zOTg3IDQ1Ljg4MTQgODEuMTIzNCA0NS44ODE0IDg2LjkxNyAzOC4yMzMyIDkyLjcxIDM4LjIzMzIgMTAyLjM2NiAzMi40OTcyIDEwMC40MzUgMjguNjcyOSA5MC43NzkgMjguNjcyOSA3MS40Njc2IDE5LjExMjcgNjkuNTM2NSAxNS4yODg3IDYxLjgxMTcgMTUuMjg4NyA1Ni4wMTgxIDE5LjExMjcgNTIuMTU1OSAyNC44NDg5IDQ2LjM2MjMgMjguNjcyOSA1NC4wODcgNDIuMDU3MiA1NC4wODcgNDcuNzkzNCA2My43NDI5Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMDMuODE2LDI4LjY1MzUgQzExNC4yNTQsNDcuNDYxMiAxMTMuMDY1LDcwLjY1MjYgMTAwLjc1Nyw4OC4yNjg1IEw5NS41OTQ2LDgzLjA1NDQgTDk1LjU5NDYsNzUuMzI5NyBMOTEuNzcwNiw2Ny42MDUgTDg3Ljk0NjYsNTkuODgwMyBMODcuOTQ2Niw1Mi4xNTU1IEw4Mi4yMTA0LDQ4LjI5MzMgTDc0LjU2MjEsNTAuMjI0NCBMNjEuMTc3OSw0NC40MzA4IEw1OS4yNjU5LDMwLjkxMjcgTDY1LjAwMjEsMjUuMTE5MSBMNzYuNDc0MywyNS4xMTkxIEw4MC4yOTg0LDMwLjkxMjcgTDkxLjc3MDYsMzIuODQzOSBMMTAzLjI0MywyOC45ODE2IEwxMDMuODE2LDI4LjY1MzUgWiIgaWQ9IlBhdGgiIGZpbGw9IiM0MTQxNDEiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMC43Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02Ni45MTM5LDE5LjMyNiBMNzQuNTYyMSwxNy4zOTQ5IEw4MC4yOTg0LDE5LjMyNiBMODkuODU4NiwyMS4yNTcxIEw5NS41OTQ4LDE3LjM5NDkgQzk4Ljc5NzUsMjAuNzgwMiAxMDEuNTYsMjQuNTYzMyAxMDMuODE3LDI4LjY1MzUgTDEwMy4yNDMsMjguOTgxOCBMOTEuNzcwOCwzMi44NDQxIEw4MC4yOTg2LDMwLjkxMyBMNzYuNDc0NiwyNS4xMTk0IEw2NS4wMDIzLDI1LjExOTQgTDU5LjI2NjEsMzAuOTEzIEw2MS4xNzgxLDQ0LjQzMTEgTDc0LjU2MjMsNTAuMjI0NyBMODIuMjEwNiw0OC4yOTM1IEw4Ny45NDY4LDUyLjE1NTggTDg3Ljk0NjgsNTkuODgwNSBMOTEuNzcwOCw2Ny42MDUyIEw5NS41OTQ4LDc1LjMyOTkgTDk1LjU5NDgsODMuMDU0NiBMMTAwLjc1Nyw4OC4yNjg4IEM4My4wOTk3LDExMy41NCA0OC41MDEsMTE5LjU2NyAyMy40ODE4LDEwMS43MzMgQzIuMjMzMTksODYuNTg0NiAtNS43MzgxOSw1OC41NTc1IDQuMzEzNDgsMzQuMzMxMiBMNy42NDA0Myw0NC40MzExIEwxMy4zNzY3LDQ4LjI5MzMgTDE5LjExMjksNTIuMTU1NiBMMTUuMjg4Nyw1Ni4wMTggTDE1LjI4ODcsNjEuODExNiBMMTkuMTEyNyw2OS41MzYzIEwyOC42NzI5LDcxLjQ2NzUgTDI4LjY3MjksOTAuNzc5IEwzMi40OTY5LDEwMC40MzUgTDM4LjIzMzIsMTAyLjM2NiBMMzguMjMzMiw5Mi43MSBMNDUuODgxNCw4Ni45MTY3IEw0NS44ODE0LDgxLjEyMzEgTDUzLjUyOTYsNzMuMzk4NCBMNTUuNDQxNiw2My43NDI1IEw0Ny43OTM0LDYzLjc0MjUgTDQyLjA1NzIsNTQuMDg2NyBMMjguNjcyOSw1NC4wODY3IEwyNC44NDg5LDQ2LjM2MiBMMTkuMTEyNyw1Mi4xNTU2IEwxOS4xMTI3LDQ0LjQzMDggTDE1LjI4ODcsNDAuNTY4OCBMMTUuMjg4NywzNC43NzUyIEwyOC42NzI5LDMyLjg0NDEgTDM4LjIzMzIsMjcuMDUwNSBMNDMuOTY5NCwxNy4zOTQ3IEw0OS43MDU2LDE1LjQ2MzUgTDUxLjYxNzYsOS42Njk5IEw0MC4xNDU0LDcuNzM4OCBMMzQuNzE1Miw0LjA2OTUgQzQ5LjQxODksLTEuOTExMzUgNjUuOTU0MiwtMS4yNTA5NCA4MC4xNDU0LDUuODg0OSBMNzIuNjUwMSw5LjY2OTkgTDY1LjAwMTksOS42Njk5IEw2MS4xNzc5LDE3LjM5NDcgTDY2LjkxMzksMTkuMzI2IFoiIGlkPSJQYXRoIiBmaWxsPSIjMkUyRTJFIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjAuNyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNzEuNSwzMiBDNzMuMTU2OSwzMiA3NC41LDMwLjY1NjkgNzQuNSwyOSBDNzQuNSwyNy4zNDMxIDczLjE1NjksMjYgNzEuNSwyNiBDNjkuODQzMSwyNiA2OC41LDI3LjM0MzEgNjguNSwyOSBDNjguNSwzMC42NTY5IDY5Ljg0MzEsMzIgNzEuNSwzMiBaIiBpZD0iUGF0aCIgZmlsbD0iI0ZGNzY3MSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNzEuNSwzMiBDNzMuMTU2OSwzMiA3NC41LDMwLjY1NjkgNzQuNSwyOSBDNzQuNSwyNy4zNDMxIDczLjE1NjksMjYgNzEuNSwyNiBDNjkuODQzMSwyNiA2OC41LDI3LjM0MzEgNjguNSwyOSBDNjguNSwzMC42NTY5IDY5Ljg0MzEsMzIgNzEuNSwzMiBaIiBpZD0iUGF0aCIgZmlsbD0iI0ZGNzY3MSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNzEuNSw0MSBDNzguMTI3NCw0MSA4My41LDM1LjYyNzQgODMuNSwyOSBDODMuNSwyMi4zNzI2IDc4LjEyNzQsMTcgNzEuNSwxNyBDNjQuODcyNiwxNyA1OS41LDIyLjM3MjYgNTkuNSwyOSBDNTkuNSwzNS42Mjc0IDY0Ljg3MjYsNDEgNzEuNSw0MSBaIiBpZD0iUGF0aCIgZmlsbD0iI0ZGNzY3MSIgb3BhY2l0eT0iMC4xNzM0NzkiPjwvcGF0aD4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiBvcGFjaXR5PSIwLjE3MzQ3OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTkuMDAwMDAwLCAxNy4wMDAwMDApIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMi41LDI0IEMxOS4xMjc0LDI0IDI0LjUsMTguNjI3NCAyNC41LDEyIEMyNC41LDUuMzcyNiAxOS4xMjc0LDAgMTIuNSwwIEM1Ljg3MjYsMCAwLjUsNS4zNzI2IDAuNSwxMiBDMC41LDE4LjYyNzQgNS44NzI2LDI0IDEyLjUsMjQgWiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8cGF0aCBkPSJNMjQuNSw4OSBDMjkuNDcwNiw4OSAzMy41LDg0Ljk3MDYgMzMuNSw4MCBDMzMuNSw3NS4wMjk0IDI5LjQ3MDYsNzEgMjQuNSw3MSBDMTkuNTI5NCw3MSAxNS41LDc1LjAyOTQgMTUuNSw4MCBDMTUuNSw4NC45NzA2IDE5LjUyOTQsODkgMjQuNSw4OSBaIiBpZD0iUGF0aCIgZmlsbD0iI0ZGNzY3MSIgb3BhY2l0eT0iMC4xNzM0NzkiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTI0LjUsODMgQzI2LjE1NjksODMgMjcuNSw4MS42NTY5IDI3LjUsODAgQzI3LjUsNzguMzQzMSAyNi4xNTY5LDc3IDI0LjUsNzcgQzIyLjg0MzEsNzcgMjEuNSw3OC4zNDMxIDIxLjUsODAgQzIxLjUsODEuNjU2OSAyMi44NDMxLDgzIDI0LjUsODMgWiIgaWQ9IlBhdGgiIGZpbGw9IiNGRjc2NzEiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTI0LjUsODMgQzI2LjE1NjksODMgMjcuNSw4MS42NTY5IDI3LjUsODAgQzI3LjUsNzguMzQzMSAyNi4xNTY5LDc3IDI0LjUsNzcgQzIyLjg0MzEsNzcgMjEuNSw3OC4zNDMxIDIxLjUsODAgQzIxLjUsODEuNjU2OSAyMi44NDMxLDgzIDI0LjUsODMgWiIgaWQ9IlBhdGgiIGZpbGw9IiNGRjc2NzEiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTIxLjUsNDMgQzI2LjQ3MDYsNDMgMzAuNSwzOC45NzA2IDMwLjUsMzQgQzMwLjUsMjkuMDI5NCAyNi40NzA2LDI1IDIxLjUsMjUgQzE2LjUyOTQsMjUgMTIuNSwyOS4wMjk0IDEyLjUsMzQgQzEyLjUsMzguOTcwNiAxNi41Mjk0LDQzIDIxLjUsNDMgWiIgaWQ9IlBhdGgiIGZpbGw9IiNGRjc2NzEiIG9wYWNpdHk9IjAuMTczNDc5Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01NC41LDc3IEM2MS42Nzk3LDc3IDY3LjUsNzEuMTc5NyA2Ny41LDY0IEM2Ny41LDU2LjgyMDMgNjEuNjc5Nyw1MSA1NC41LDUxIEM0Ny4zMjAzLDUxIDQxLjUsNTYuODIwMyA0MS41LDY0IEM0MS41LDcxLjE3OTcgNDcuMzIwMyw3NyA1NC41LDc3IFoiIGlkPSJQYXRoIiBmaWxsPSIjRkY3NjcxIiBvcGFjaXR5PSIwLjE3MzQ3OSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNODkuNSw3NCBDOTIuODEzNyw3NCA5NS41LDcxLjMxMzcgOTUuNSw2OCBDOTUuNSw2NC42ODYzIDkyLjgxMzcsNjIgODkuNSw2MiBDODYuMTg2Myw2MiA4My41LDY0LjY4NjMgODMuNSw2OCBDODMuNSw3MS4zMTM3IDg2LjE4NjMsNzQgODkuNSw3NCBaIiBpZD0iUGF0aCIgZmlsbD0iI0ZGNzY3MSIgb3BhY2l0eT0iMC4xNzM0NzkiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTU0LjUsNjcgQzU2LjE1NjksNjcgNTcuNSw2NS42NTY5IDU3LjUsNjQgQzU3LjUsNjIuMzQzMSA1Ni4xNTY5LDYxIDU0LjUsNjEgQzUyLjg0MzEsNjEgNTEuNSw2Mi4zNDMxIDUxLjUsNjQgQzUxLjUsNjUuNjU2OSA1Mi44NDMxLDY3IDU0LjUsNjcgWiIgaWQ9IlBhdGgiIGZpbGw9IiNGRjc2NzEiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTIwLjUsMzcgQzIyLjE1NjksMzcgMjMuNSwzNS42NTY5IDIzLjUsMzQgQzIzLjUsMzIuMzQzMSAyMi4xNTY5LDMxIDIwLjUsMzEgQzE4Ljg0MzEsMzEgMTcuNSwzMi4zNDMxIDE3LjUsMzQgQzE3LjUsMzUuNjU2OSAxOC44NDMxLDM3IDIwLjUsMzcgWiIgaWQ9IlBhdGgiIGZpbGw9IiNGRjc2NzEiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTIxLjUsMzcgQzIzLjE1NjksMzcgMjQuNSwzNS42NTY5IDI0LjUsMzQgQzI0LjUsMzIuMzQzMSAyMy4xNTY5LDMxIDIxLjUsMzEgQzE5Ljg0MzEsMzEgMTguNSwzMi4zNDMxIDE4LjUsMzQgQzE4LjUsMzUuNjU2OSAxOS44NDMxLDM3IDIxLjUsMzcgWiIgaWQ9IlBhdGgiIGZpbGw9IiNGRjc2NzEiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTU0LjUsNjcgQzU2LjE1NjksNjcgNTcuNSw2NS42NTY5IDU3LjUsNjQgQzU3LjUsNjIuMzQzMSA1Ni4xNTY5LDYxIDU0LjUsNjEgQzUyLjg0MzEsNjEgNTEuNSw2Mi4zNDMxIDUxLjUsNjQgQzUxLjUsNjUuNjU2OSA1Mi44NDMxLDY3IDU0LjUsNjcgWiIgaWQ9IlBhdGgiIGZpbGw9IiNGRjc2NzEiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTg5LjUsNzEgQzkxLjE1NjksNzEgOTIuNSw2OS42NTY5IDkyLjUsNjggQzkyLjUsNjYuMzQzMSA5MS4xNTY5LDY1IDg5LjUsNjUgQzg3Ljg0MzEsNjUgODYuNSw2Ni4zNDMxIDg2LjUsNjggQzg2LjUsNjkuNjU2OSA4Ny44NDMxLDcxIDg5LjUsNzEgWiIgaWQ9IlBhdGgiIGZpbGw9IiNGRjc2NzEiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTg5LjUsNzEgQzkxLjE1NjksNzEgOTIuNSw2OS42NTY5IDkyLjUsNjggQzkyLjUsNjYuMzQzMSA5MS4xNTY5LDY1IDg5LjUsNjUgQzg3Ljg0MzEsNjUgODYuNSw2Ni4zNDMxIDg2LjUsNjggQzg2LjUsNjkuNjU2OSA4Ny44NDMxLDcxIDg5LjUsNzEgWiIgaWQ9IlBhdGgiIGZpbGw9IiNGRjc2NzEiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEzIiBoZWlnaHQ9IjExMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBvcGFjaXR5PSIuNyIgZD0iTTU2LjUgMTExLjkxNWMzMS4wNTYgMCA1Ni4yMzItMjQuOTMgNTYuMjMyLTU1LjY4MkMxMTIuNzMyIDI1LjQ4MSA4Ny41NTYuNTUyIDU2LjUuNTUyUy4yNjggMjUuNDgyLjI2OCA1Ni4yMzNjMCAzMC43NTMgMjUuMTc2IDU1LjY4MiA1Ni4yMzIgNTUuNjgyeiIgZmlsbD0iIzJFMkUyRSIvPjxwYXRoIG9wYWNpdHk9Ii43IiBkPSJNNTYuNSAxMDIuMjMxYzI1LjY1NSAwIDQ2LjQ1My0yMC41OTQgNDYuNDUzLTQ1Ljk5OCAwLTI1LjQwNC0yMC43OTgtNDUuOTk4LTQ2LjQ1My00NS45OTgtMjUuNjU1IDAtNDYuNDUzIDIwLjU5NC00Ni40NTMgNDUuOTk4IDAgMjUuNDA0IDIwLjc5OCA0NS45OTggNDYuNDUzIDQ1Ljk5OHoiIGZpbGw9IiMyRTJFMkUiLz48cGF0aCBvcGFjaXR5PSIuMiIgZD0iTTgyLjQzMiA4MS45MTFjNi42MzYtNi41NzEgMTAuNzQyLTE1LjY1IDEwLjc0Mi0yNS42NzggMC0yMC4wNTUtMTYuNDItMzYuMzE0LTM2LjY3NC0zNi4zMTR2MzYuMzE0bDI1LjkzMiAyNS42Nzh6IiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+PHBhdGggZD0iTTU2LjUgMTUuMDc3Yy0xLjM1IDAtMi40NDUgMS4wODQtMi40NDUgMi40MjF2NC44NDJjMCAxLjMzNyAxLjA5NSAyLjQyMSAyLjQ0NSAyLjQyMSAxLjM1IDAgMi40NDUtMS4wODQgMi40NDUtMi40MnYtNC44NDNjMC0xLjMzNy0xLjA5NS0yLjQyLTIuNDQ1LTIuNDJ6TTU2LjUgODcuNzA2Yy0xLjM1IDAtMi40NDUgMS4wODQtMi40NDUgMi40MnY0Ljg0M2MwIDEuMzM2IDEuMDk1IDIuNDIgMi40NDUgMi40MiAxLjM1IDAgMi40NDUtMS4wODQgMi40NDUtMi40MnYtNC44NDJjMC0xLjMzNy0xLjA5NS0yLjQyMS0yLjQ0NS0yLjQyMXpNOTguMDYzIDU2LjIzM2MwLTEuMzM3LTEuMDk1LTIuNDIxLTIuNDQ1LTIuNDIxaC00Ljg5Yy0xLjM1IDAtMi40NDQgMS4wODQtMi40NDQgMi40MjEgMCAxLjMzNyAxLjA5NCAyLjQyMSAyLjQ0NCAyLjQyMWg0Ljg5YzEuMzUgMCAyLjQ0NS0xLjA4NCAyLjQ0NS0yLjQyek0yNC43MTYgNTYuMjMzYzAtMS4zMzctMS4wOTUtMi40MjEtMi40NDUtMi40MjFoLTQuODljLTEuMzUgMC0yLjQ0NCAxLjA4NC0yLjQ0NCAyLjQyMSAwIDEuMzM3IDEuMDk0IDIuNDIxIDIuNDQ0IDIuNDIxaDQuODljMS4zNSAwIDIuNDQ1LTEuMDg0IDIuNDQ1LTIuNDJ6TTM1LjcxOCA5MS44NzZhMi40NTggMi40NTggMCAwIDAgMy4zNC0uODg2bDIuNDQ1LTQuMTk0YTIuNDA4IDIuNDA4IDAgMCAwLS44OTUtMy4zMDcgMi40NTggMi40NTggMCAwIDAtMy4zNC44ODZsLTIuNDQ0IDQuMTkzYTIuNDA4IDIuNDA4IDAgMCAwIC44OTUgMy4zMDh6TTcyLjM5MiAyOC45NzdhMi40NTggMi40NTggMCAwIDAgMy4zNC0uODg2bDIuNDQ1LTQuMTkzYTIuNDA4IDIuNDA4IDAgMCAwLS44OTUtMy4zMDcgMi40NTggMi40NTggMCAwIDAtMy4zNC44ODZsLTIuNDQ1IDQuMTk0YTIuNDA4IDIuNDA4IDAgMCAwIC44OTUgMy4zMDZ6TTIwLjUwNSAzNS42NTVhMi40MDggMi40MDggMCAwIDAgLjg5NSAzLjMwN2w0LjIzNSAyLjQyMWEyLjQ1OCAyLjQ1OCAwIDAgMCAzLjM0LS44ODYgMi40MDggMi40MDggMCAwIDAtLjg5Ni0zLjMwN2wtNC4yMzQtMi40MjFhMi40NTggMi40NTggMCAwIDAtMy4zNC44ODZ6TTg0LjAyNSA3MS45N2EyLjQwOCAyLjQwOCAwIDAgMCAuODk1IDMuMzA3bDQuMjM1IDIuNDJhMi40NTggMi40NTggMCAwIDAgMy4zNC0uODg1IDIuNDA4IDIuNDA4IDAgMCAwLS44OTUtMy4zMDdsLTQuMjM1LTIuNDIxYTIuNDU4IDIuNDU4IDAgMCAwLTMuMzQuODg2ek03Ny4yODEgOTEuODc2YTIuNDU4IDIuNDU4IDAgMCAxLTMuMzQtLjg4NmwtMi40NDQtNC4xOTRhMi40MDggMi40MDggMCAwIDEgLjg5NC0zLjMwNyAyLjQ1OCAyLjQ1OCAwIDAgMSAzLjM0Ljg4NmwyLjQ0NSA0LjE5M2EyLjQwOCAyLjQwOCAwIDAgMS0uODk1IDMuMzA4ek00MC42MDggMjguOTc3YTIuNDU4IDIuNDU4IDAgMCAxLTMuMzQtLjg4NmwtMi40NDQtNC4xOTNhMi40MDggMi40MDggMCAwIDEgLjg5NS0zLjMwNyAyLjQ1OCAyLjQ1OCAwIDAgMSAzLjM0Ljg4NmwyLjQ0NCA0LjE5NGEyLjQwOCAyLjQwOCAwIDAgMS0uODk1IDMuMzA2ek05Mi40OTUgMzUuNjU1YTIuNDA4IDIuNDA4IDAgMCAxLS44OTUgMy4zMDdsLTQuMjM1IDIuNDIxYTIuNDU4IDIuNDU4IDAgMCAxLTMuMzQtLjg4NiAyLjQwOCAyLjQwOCAwIDAgMSAuODk1LTMuMzA3bDQuMjM1LTIuNDIxYTIuNDU4IDIuNDU4IDAgMCAxIDMuMzQuODg2ek0yOC45NzQgNzEuOTdhMi40MDggMi40MDggMCAwIDEtLjg5NCAzLjMwN2wtNC4yMzUgMi40MmEyLjQ1OCAyLjQ1OCAwIDAgMS0zLjM0LS44ODUgMi40MDggMi40MDggMCAwIDEgLjg5Ni0zLjMwN2w0LjIzNC0yLjQyMWEyLjQ1OCAyLjQ1OCAwIDAgMSAzLjM0Ljg4NnoiIGZpbGw9IiM0MTQxNDEiLz48cGF0aCBkPSJNODMuMzk0IDg1LjI4NWEyLjQ0OSAyLjQ0OSAwIDAgMS0xLjcyOS0uNzFMNDkuODgyIDUzLjEwNGEyLjQwNCAyLjQwNCAwIDAgMSAwLTMuNDI0IDIuNDYxIDIuNDYxIDAgMCAxIDMuNDU3IDBsMzEuNzg0IDMxLjQ3M2EyLjQwMyAyLjQwMyAwIDAgMSAwIDMuNDIzIDIuNDUgMi40NSAwIDAgMS0xLjczLjcxeiIgZmlsbD0iI0ZGNzY3MSIvPjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2YpIj48cGF0aCBkPSJNODMuMzk0IDg1LjI4NWEyLjQ0OSAyLjQ0OSAwIDAgMS0xLjcyOS0uNzFMNDkuODgyIDUzLjEwNGEyLjQwNCAyLjQwNCAwIDAgMSAwLTMuNDI0IDIuNDYxIDIuNDYxIDAgMCAxIDMuNDU3IDBsMzEuNzg0IDMxLjQ3M2EyLjQwMyAyLjQwMyAwIDAgMSAwIDMuNDIzIDIuNDUgMi40NSAwIDAgMS0xLjczLjcxeiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyKSIvPjwvZz48cGF0aCBkPSJNNTYuNSA2MS4wNzVjMi43IDAgNC44OS0yLjE2OCA0Ljg5LTQuODQyIDAtMi42NzQtMi4xOS00Ljg0MS00Ljg5LTQuODQxLTIuNyAwLTQuODkgMi4xNjctNC44OSA0Ljg0MSAwIDIuNjc1IDIuMTkgNC44NDIgNC44OSA0Ljg0MnoiIGZpbGw9IiM0MTQxNDEiLz48ZGVmcz48ZmlsdGVyIGlkPSJmaWx0ZXIwX2YiIHg9IjMwLjEzOCIgeT0iMjkuOTQyIiB3aWR0aD0iNzQuNzI5IiBoZWlnaHQ9Ijc0LjM3MSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOS41MTQiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1ciIvPjwvZmlsdGVyPjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9Ijg0LjAwNSIgeTE9Ii05Ljk2OCIgeDI9IjQyLjk5NSIgeTI9IjIuNjEzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGN0M1NiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNUQ1RCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyIiB4MT0iMzAuODI5IiB5MT0iNjcuMTI3IiB4Mj0iNjcuMTQyIiB5Mj0iMTAzLjc5OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNGRjdDNTYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjVENUQiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4="

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA1IiBoZWlnaHQ9IjExMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTY2IDg4LjgxNmMxNy42NzMgMCAzMi0xNC4zMjcgMzItMzIgMC0xNy42NzMtMTQuMzI3LTMyLTMyLTMyLTE3LjY3MyAwLTMyIDE0LjMyNy0zMiAzMiAwIDE3LjY3MyAxNC4zMjcgMzIgMzIgMzJ6IiBmaWxsPSIjMjMyMzIzIi8+PHBhdGggZD0iTTE2Ni4yNzEgMzYuODE2bC0uMjcxLjkwMnYyNi4xNjZsLjI3MS4yNjUgMTIuMzk2LTcuMTgtMTIuMzk2LTIwLjE1M3oiIGZpbGw9IiMzNDM0MzQiLz48cGF0aCBkPSJNMTY2IDM2LjgxNmwtMTIuNjY3IDIwLjE1M0wxNjYgNjQuMTVWMzYuODE2eiIgZmlsbD0iIzUwNTA1MCIvPjxwYXRoIGQ9Ik0xNjYuMTU0IDY2Ljc1bC0uMTU0LjE4NHY5LjQ0bC4xNTQuNDQyIDEyLjUxMy0xNy4zMzQtMTIuNTEzIDcuMjY3eiIgZmlsbD0iIzNDM0MzQiIvPjxwYXRoIGQ9Ik0xNjYgNzYuODE2VjY2Ljc0OWwtMTIuNjY3LTcuMjY3TDE2NiA3Ni44MTZ6IiBmaWxsPSIjNTA1MDUwIi8+PHBhdGggZD0iTTE2NiA2NC4xNWwxMi42NjctNy4xNjFMMTY2IDUxLjQ4MlY2NC4xNXoiIGZpbGw9IiMyRTJFMkUiLz48cGF0aCBkPSJNMTUzLjMzMyA1Ni45ODlMMTY2IDY0LjE0OVY1MS40ODJsLTEyLjY2NyA1LjUwN3oiIGZpbGw9IiMzOTM5MzkiLz48ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9mKSI+PHBhdGggZD0iTTE2NiA4Ni4xNWMxNi4yIDAgMjkuMzMzLTEzLjEzNCAyOS4zMzMtMjkuMzM0UzE4Mi4yIDI3LjQ4MiAxNjYgMjcuNDgycy0yOS4zMzMgMTMuMTMzLTI5LjMzMyAyOS4zMzRjMCAxNi4yIDEzLjEzMyAyOS4zMzMgMjkuMzMzIDI5LjMzM3oiIHN0cm9rZT0iI0ZGNzY3MSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48L2c+PHBhdGggZD0iTTE2NiA4Ni4zNTRjMTYuMzE0IDAgMjkuNTM4LTEzLjIyNSAyOS41MzgtMjkuNTM4IDAtMTYuMzE0LTEzLjIyNC0yOS41MzktMjkuNTM4LTI5LjUzOXMtMjkuNTM4IDEzLjIyNS0yOS41MzggMjkuNTM5YzAgMTYuMzEzIDEzLjIyNCAyOS41MzggMjkuNTM4IDI5LjUzOHoiIHN0cm9rZT0iI0ZGNzY3MSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48ZyBmaWx0ZXI9InVybCgjZmlsdGVyMV9kKSI+PHBhdGggZD0iTTExNiA5NS44MTZjMjIuMDkxIDAgNDAtMTcuOTA5IDQwLTQwIDAtMjIuMDkyLTE3LjkwOS00MC00MC00MHMtNDAgMTcuOTA4LTQwIDQwYzAgMjIuMDkxIDE3LjkwOSA0MCA0MCA0MHoiIGZpbGw9IiMyMzIzMjMiLz48L2c+PHBhdGggZD0iTTExNS41IDkyLjgxNmMyMC4xNTggMCAzNi41LTE2LjM0MiAzNi41LTM2LjUgMC0yMC4xNTktMTYuMzQyLTM2LjUtMzYuNS0zNi41Uzc5IDM2LjE1NyA3OSA1Ni4zMTZjMCAyMC4xNTggMTYuMzQyIDM2LjUgMzYuNSAzNi41eiIgc3Ryb2tlPSIjRkY3NjcxIiBzdHJva2Utd2lkdGg9IjEuNSIvPjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIyX2YpIj48cGF0aCBkPSJNMTE1LjUgOTIuODE2YzIwLjE1OCAwIDM2LjUtMTYuMzQyIDM2LjUtMzYuNSAwLTIwLjE1OS0xNi4zNDItMzYuNS0zNi41LTM2LjVTNzkgMzYuMTU3IDc5IDU2LjMxNmMwIDIwLjE1OCAxNi4zNDIgMzYuNSAzNi41IDM2LjV6IiBzdHJva2U9IiNGRjc2NzEiIHN0cm9rZS13aWR0aD0iMS41Ii8+PC9nPjxwYXRoIGQ9Ik0xMTUuNDY0IDMxLjgyN2wyNC43NzcgMjQuNDM4LTI0Ljc3NyAyNC40MzgtMjQuNzc4LTI0LjQzOCAyNC43NzgtMjQuNDM4eiIgZmlsbD0iIzUwNTA1MCIvPjxwYXRoIGQ9Ik0xMTUuNDYzIDY0LjIzOWwtMjQuNzk4LTcuOTc2IDI0Ljc5OC0yNC40MzcgMjQuNzk4IDI0LjQzNy0yNC43OTggNy45NzZ6IiBmaWxsPSIjMkUyRTJFIi8+PHBhdGggZD0iTTk5LjI5IDU0LjY2OWgxMS4zMjJsNC44NTEtNS4zMTcgNS4zOTEgNS4zMTdoMTEuMzIxbC0xNi43MTItMTcuODEyLTE2LjE3MiAxNy44MTJ6IiBmaWxsPSIjNjQ2NDY0Ii8+PHBhdGggb3BhY2l0eT0iLjQyIiBkPSJNMTE1LjQ2MyA4MC43MDFWMzEuODI2bDI0Ljc3NyAyNC40MzctMjQuNzc3IDI0LjQzOHoiIGZpbGw9IiMzNzM3MzciLz48ZyBmaWx0ZXI9InVybCgjZmlsdGVyM19kKSI+PHBhdGggZD0iTTU2LjUgMTA2LjgxNmMyNy44OSAwIDUwLjUtMjIuNjEgNTAuNS01MC41cy0yMi42MS01MC41LTUwLjUtNTAuNVM2IDI4LjQyNiA2IDU2LjMxNnMyMi42MSA1MC41IDUwLjUgNTAuNXoiIGZpbGw9IiMyMzIzMjMiLz48L2c+PHBhdGggZD0iTTU2LjUgMTAyLjYwOGMyNS41NjYgMCA0Ni4yOTItMjAuNzI2IDQ2LjI5Mi00Ni4yOTIgMC0yNS41NjYtMjAuNzI2LTQ2LjI5Mi00Ni4yOTItNDYuMjkyLTI1LjU2NiAwLTQ2LjI5MiAyMC43MjYtNDYuMjkyIDQ2LjI5MiAwIDI1LjU2NiAyMC43MjYgNDYuMjkyIDQ2LjI5MiA0Ni4yOTJ6IiBzdHJva2U9IiNGRjc2NzEiIHN0cm9rZS13aWR0aD0iMS41NjciLz48ZyBmaWx0ZXI9InVybCgjZmlsdGVyNF9mKSI+PHBhdGggZD0iTTU2LjUgMTAyLjYwOGMyNS41NjYgMCA0Ni4yOTItMjAuNzI2IDQ2LjI5Mi00Ni4yOTIgMC0yNS41NjYtMjAuNzI2LTQ2LjI5Mi00Ni4yOTItNDYuMjkyLTI1LjU2NiAwLTQ2LjI5MiAyMC43MjYtNDYuMjkyIDQ2LjI5MiAwIDI1LjU2NiAyMC43MjYgNDYuMjkyIDQ2LjI5MiA0Ni4yOTJ6IiBzdHJva2U9IiNGRjc2NzEiIHN0cm9rZS13aWR0aD0iMS41NjciLz48L2c+PHBhdGggZD0iTTU2LjUgODEuNTY2YzEzLjk0NSAwIDI1LjI1LTExLjMwNSAyNS4yNS0yNS4yNXMtMTEuMzA1LTI1LjI1LTI1LjI1LTI1LjI1LTI1LjI1IDExLjMwNS0yNS4yNSAyNS4yNSAxMS4zMDUgMjUuMjUgMjUuMjUgMjUuMjV6IiBmaWxsPSIjMjMyMzIzIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04MC4zMjMgNDguOTExYzAgMTEuODk2LTkuNTI3IDIxLjU0LTIxLjI3OSAyMS41NHMtMjEuMjc5LTkuNjQ0LTIxLjI3OS0yMS41NGMwLTExLjg5NiA5LjUyNy0yMS41NCAyMS4yNzktMjEuNTRzMjEuMjc5IDkuNjQ0IDIxLjI3OSAyMS41NHptLTEwLjYyOC01Ljg5Yy0uNzA0LjczNi0xLjMxNCAxLjA0NS0xLjUwMSAxLjE0bC0uMDQ3LjA0OGMtNC4xMDYtLjg4LTUuNTg0LTMuMDE3LTUuNTg0LTMuMDE3IDMuODcxLS4wMjMgNy4zNjcuOTAzIDkuOTI0IDIuNDcgMCAwLTEuMzg0LS40NS0yLjc5Mi0uNjR6IiBmaWxsPSIjNTk1ODU4Ii8+PHBhdGggZD0iTTczLjk4OCA0Mi40NTFhMTIuMDIgMTIuMDIgMCAwIDEgMi4zMjMgNy4xMjVjMCAzLjExMS0xLjI2NyA1Ljk4NS0zLjQyNSA4LjMxMmwxLjMxNCA0Ljk2NGgzLjk4OGw0LjItNC44MjEgMS4xMjUtNy4wNTQuMjM1LTQuMjAzLTQuMTUzLTQuNzUtNS42MDcuNDI3eiIgZmlsbD0iIzUwNTA1MCIvPjxwYXRoIGQ9Ik03Mi40ODUgNTkuMzk1YzIuNDcyLTIuNDcxIDMuOTk5LTUuODY3IDMuOTk5LTkuNjE0IDAtMi4yMTktLjUzNS00LjMxNC0xLjQ4NC02LjE2NyIgc3Ryb2tlPSIjMjMyMzIzIiBzdHJva2Utd2lkdGg9IjEuMjU0Ii8+PHBhdGggZD0iTTI3Ljc3MSA2My40MjJsLjcyNyAyLjkyMXM4LjU4NyAxNy44MzUgMjcuOTE4IDI0LjQ2MmMwIDAgMTcuNTg4LTcuNiAyNS40LTIwLjQ5NmwtMTAuNzg0LTkuNTIzcy01LjE2MSA0LjE1Ni0xMi44MzMgNC4xNTZjLTcuNjcxIDAtMTguMDg4LTQuNjMxLTE4LjA4OC0xNC4xNzhzMTAuNzkyLTEzLjAzOSAxMC43OTItMTMuMDM5bC00LjU5OC0xLjE0SDM0LjU1bC03LjQ2IDE4LjE5Mi42OCA4LjY0NXoiIGZpbGw9IiM1MDUwNTAiLz48cGF0aCBkPSJNOTIuNzMzIDQzLjM3MmMtLjMyOC0uMzMyLTguNjk5LTEwLjYxNS0zNC44MS0xOS43MTEtLjgyNi0uNTcyLTEuMjczLS43NDgtMS4zNDItLjUzLTI0LjI1NCA2LjI2MS0zNi4xNTMgMTkuNDE5LTM2LjE1MyAyMC4yNDEgMCAuODIzIDMuNDcyIDEzLjE4NiA1LjcyNCAxOC4yMi4xODguNDI4IDMuMTkgNS43OTYgNS40MiA4LjcxNy0xLjMxNC0yLjkyMS0yLjc0NS01LjQ2Mi0yLjc0NS05LjgzMiAwLTEyLjMyNiA5LjQzLTIyLjM0OCAyMS4yMzItMjIuNzc2LjI4MSAwIC41ODYgMCAuODY4LjAyNGwtMi44MTYtMi44NXMxMS4zMzItMS45MjMgMjUuODc3IDYuOTgyYzAgMCAuMjEyLjQ1MiAwIDEuNzgyIDAgMCA2Ljg1IDIuOTkyIDcuNDM3IDguODEuNTg3IDUuODE5LTMuMDUgOS4xNDQtNS45ODIgOS42MTkgMCAwIDEuNTI1LTIuMzk5LS44MjEtMy42ODEtLjQ5My0uMjg1LTEuMDgtLjQwNC0xLjY2Ni0uMzgtNC40OCAwLTQuOTk3IDUuMTc3LTQuOTk3IDUuMTc3LS4wNDcuMjYxLS4wNDcuNTIzLS4wNDcuNzg0IDAgMC0uNzUgNy41NzYgMTIuNTc1IDcuNDMzIDAgMCA2Ljc1Ny03Ljc0MiA4LjU0LTE0LjcuNjU2LTIuNTY1IDEuMTI2LTQuNDg5IDEuNDMtNS45MTQuNzUyLTIuMDE5IDEuNDc5LTQuOTkyIDIuMTgzLTcuMTU0bC4wOTMtLjI2eiIgZmlsbD0iIzIzMjMyMyIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTcuMzA4IDIyLjE5OGMzLjcwNyAxLjIzNiAyMS41NiA3LjY1MyAzNS42ODQgMjAuMDA1bC4zMjguMjQyLS4wNy40MTFjMCAuMDk3LTEuNTQ5IDkuNDk0LTYuNzU3IDIwLjA1My0zLjA3MyA2LjIyNC02LjgwNCAxMS42NDktMTEuMDczIDE2LjEwNS01LjI1NiA1LjQ3My0xMS4zMzIgOS41MTctMTguMTEyIDEyLjAzNmwtLjM5OS4xNDUtLjQyMi4xNy0uNC0uMTQ1LS4zOTgtLjE0NmMtNi43OC0yLjUxOC0xMi44OC02LjU2My0xOC4xMTEtMTIuMDM2LTQuMjctNC40OC04LTkuODgtMTEuMDc0LTE2LjEwNS00Ljk5Mi0xMC4xNDUtNi42LTE5LjE3Ny02Ljc0Ni0xOS45OTNhMi4yOTQgMi4yOTQgMCAwIDAtLjAxLS4wNmwtLjA3LS40MTEuMzA0LS4yNjdDMzQuMTA1IDI5Ljg1MiA1MS45NiAyMy40MzQgNTUuNjY2IDIyLjJsLjgyLS4yNjcuNDcuMTQ1LjM1Mi4xMjF6bTE3LjA4IDU1Ljc5OWM0LjE3NS00LjM2IDcuODEyLTkuNjYzIDEwLjgxNS0xNS43NDIgNC41MDQtOS4xMyA2LjIxNy0xNy4zNCA2LjU2OS0xOS4yMDUtMTQuNDc2LTEyLjUyLTMyLjc5OC0xOC43NjktMzUuMjg1LTE5LjU5Mi0yLjUxLjgyMy0yMC44MSA3LjA3Mi0zNS4yODUgMTkuNTkyLjM1MiAxLjg5IDIuMDQxIDEwLjA5OSA2LjU2OSAxOS4yNTMgMy4wMDMgNi4wOCA2LjY0IDExLjM1OSAxMC44MTUgMTUuNzE4IDUuMTg1IDUuNCAxMS4xOTEgOS4zNDggMTcuOSAxMS43OTQgNi43MS0yLjQ0NiAxMi43MTYtNi40MTggMTcuOTAxLTExLjgxOHoiIGZpbGw9IiM1MDUwNTAiLz48ZGVmcz48ZmlsdGVyIGlkPSJmaWx0ZXIwX2YiIHg9IjEyNy43NjIiIHk9IjE4LjU3OCIgd2lkdGg9Ijc2LjQ3NiIgaGVpZ2h0PSI3Ni40NzYiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQuMDc3IiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXIiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJmaWx0ZXIxX2QiIHg9IjcyIiB5PSIxMS44MTYiIHdpZHRoPSI4OCIgaGVpZ2h0PSI4OCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+PGZlT2Zmc2V0Lz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAuMDcwNTg4MiAwIDAgMCAwIDAuMDcwNTg4MiAwIDAgMCAwIDAuMDcwNTg4MiAwIDAgMCAxIDAiLz48ZmVCbGVuZCBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJmaWx0ZXIyX2YiIHg9IjcwLjA5NSIgeT0iMTAuOTExIiB3aWR0aD0iOTAuODEiIGhlaWdodD0iOTAuODEiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQuMDc3IiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXIiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJmaWx0ZXIzX2QiIHg9IjIiIHk9IjEuODE2IiB3aWR0aD0iMTA5IiBoZWlnaHQ9IjEwOSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+PGZlT2Zmc2V0Lz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAuMDcwNTg4MiAwIDAgMCAwIDAuMDcwNTg4MiAwIDAgMCAwIDAuMDcwNTg4MiAwIDAgMCAxIDAiLz48ZmVCbGVuZCBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJmaWx0ZXI0X2YiIHg9Ii45MDMiIHk9Ii43MTkiIHdpZHRoPSIxMTEuMTk0IiBoZWlnaHQ9IjExMS4xOTQiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQuMjYxIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXIiLz48L2ZpbHRlcj48L2RlZnM+PC9zdmc+"

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE2IiBoZWlnaHQ9IjExNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBvcGFjaXR5PSIuNyIgZD0iTTUxLjQxMiAxNC4wMjhDMjMuNTA2IDE0LjAyOC45NiAzNi42MzUuOTYgNjQuNDRjMCAyNy44MDYgMjIuNTQ3IDUwLjQxMyA1MC40NTMgNTAuNDEzIDI3LjgyOCAwIDUwLjQ1My0yMi42MDcgNTAuNDUzLTUwLjQxMiAwLTI3LjgwNi0yMi42MjUtNTAuNDEzLTUwLjQ1My01MC40MTN6IiBmaWxsPSIjMkUyRTJFIi8+PHBhdGggb3BhY2l0eT0iLjciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTEuNDEyIDI0LjI2OWMtMjIuMjMgMC00MC4yMDQgMTcuOTU5LTQwLjIwNCA0MC4xNzIgMCAyMi4yMTMgMTcuOTc0IDQwLjE3MiA0MC4yMDQgNDAuMTcyIDIyLjIzMSAwIDQwLjIwNS0xNy45NiA0MC4yMDUtNDAuMTcyIDAtMjIuMjEzLTE3Ljk3NC00MC4xNzItNDAuMjA1LTQwLjE3MnpNMzEuNzA0IDY0LjQ0YzAtMTAuODcgOC44My0xOS42OTIgMTkuNzA4LTE5LjY5MiAxMC44NzkgMCAxOS43MDkgOC44MjIgMTkuNzA5IDE5LjY5MiAwIDEwLjg3LTguODMgMTkuNjkyLTE5LjcwOSAxOS42OTJzLTE5LjcwOC04LjgyMi0xOS43MDgtMTkuNjkyem05LjQ2IDBjMCA1LjY3MSA0LjU3MiAxMC4yNCAxMC4yNDggMTAuMjRBMTAuMjI0IDEwLjIyNCAwIDAgMCA2MS42NiA2NC40NGMwLTUuNjcyLTQuNTcyLTEwLjI0LTEwLjI0OC0xMC4yNGExMC4yMjQgMTAuMjI0IDAgMCAwLTEwLjI0OCAxMC4yNHptLTE5LjcwOCAwYzAgMTYuNTQxIDEzLjQwMSAyOS45MzIgMjkuOTU2IDI5LjkzMlM4MS4zNyA4MC45ODMgODEuMzcgNjQuNDQxYzAtMTYuNTQyLTEzLjQwMi0yOS45MzMtMjkuOTU3LTI5LjkzM1MyMS40NTYgNDcuOSAyMS40NTYgNjQuNDQxeiIgZmlsbD0iIzQxNDE0MSIvPjxwYXRoIGQ9Ik05MS45MzIgMjMuOTUzYzQuMSA0LjA5NiAxMy4wMDggMS44MTIgOC45MDggNS45MDhMODkuODA0IDQwLjg4OGMtNC4wMiA0LjA5Ni0xMC43MjEgNC4wOTYtMTQuODIgMGExMC40NTMgMTAuNDUzIDAgMCAxIDAtMTQuODA4TDg2LjAyIDE1LjA1MmM0LjAyLTQuMDk2IDEuODEzIDQuODA1IDUuOTEyIDguOTAxeiIgZmlsbD0iI0ZGNzY3MSIvPjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2YpIj48cGF0aCBkPSJNOTEuOTMyIDIzLjk1M2M0LjEgNC4wOTYgMTMuMDA4IDEuODEyIDguOTA4IDUuOTA4TDg5LjgwNCA0MC44ODhjLTQuMDIgNC4wOTYtMTAuNzIxIDQuMDk2LTE0LjgyIDBhMTAuNDUzIDEwLjQ1MyAwIDAgMSAwLTE0LjgwOEw4Ni4wMiAxNS4wNTJjNC4wMi00LjA5NiAxLjgxMyA0LjgwNSA1LjkxMiA4LjkwMXoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz48L2c+PHBhdGggZD0iTTkxLjkzMiAyNC4wMzJjLTEuMTgzLTEuMTgyLTEuODEzLTIuNjc4LTIuMjA3LTQuMjU0TDcyLjQ2IDM2Ljk1YTEwLjMzMiAxMC4zMzIgMCAwIDAgMi40NDQgMy45MzggOS43MjUgOS43MjUgMCAwIDAgNC4wMiAyLjQ0Mkw5Ni4xMSAyNi4xNmMtMS40OTgtLjM5NC0zLjA3NC0xLjAyNC00LjE3OC0yLjEyN3oiIGZpbGw9IiNGRjc2NzEiLz48cGF0aCBkPSJNOTUuNzE2IDIwLjE3MmMuNzg4Ljc4OC43ODggMi4xMjcgMCAyLjkxNUw1My4zMDQgNjUuMzg2Yy0uNzg4Ljc4OC0yLjEyOC43ODgtMi45MTYgMC0uNzg5LS43ODgtLjc4OS0yLjEyNyAwLTIuOTE0bDQyLjQxMS00Mi4zNzhjLjg2Ny0uNzg4IDIuMTI5LS43ODggMi45MTcuMDc4eiIgZmlsbD0iIzdEN0M3QyIvPjxkZWZzPjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZiIgeD0iNTguMzE3IiB5PSIuNDA5IiB3aWR0aD0iNTcuMTY3IiBoZWlnaHQ9IjU3LjE0MyIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNi43OTYiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1ciIvPjwvZmlsdGVyPjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9Ijk0LjM5NyIgeTE9Ii0uNDQ0IiB4Mj0iNjUuNDk1IiB5Mj0iMTQuNTU1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGN0M1NiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNUQ1RCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg=="

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTI1cHgiIGhlaWdodD0iMTEzcHgiIHZpZXdCb3g9IjAgMCAxMjUgMTEzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1My4yICg3MjY0MykgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+bG9jYXRpb24tb24tbWFwIDM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNNTguODY0MzA3OSw2OC4wMjc1NTEyIEM1OS42MTc3NjI5LDY4LjY3NTMyODggNjAuNTU4NDgxMyw2OSA2MS41LDY5IEM2Mi40NDE1MTg3LDY5IDYzLjM4MjYzNzIsNjguNjc1MzI4OCA2NC4xMzU2OTIxLDY4LjAyNzU1MTIgQzY1LjA5MDAxNTEsNjcuMjA1NzAyOSA4Ny41LDQ3LjY3ODQ5MzIgODcuNSwyNy40MjY4MzY2IEM4Ny41LDEzLjQwNjUxOTEgNzUuODM2ODUyNSwyIDYxLjUwMDQwMDEsMiBDNDcuMTYzNTQ3NywyIDM1LjUsMTMuNDA2NTE5MSAzNS41LDI3LjQyNjgzNjYgQzM1LjQ5OTE5OTcsNDcuNjc4NDkzMiA1Ny45MDk5ODQ5LDY3LjIwNTcwMjkgNTguODY0MzA3OSw2OC4wMjc1NTEyIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgICAgICA8ZmlsdGVyIHg9Ii0xNC40JSIgeT0iLTExLjIlIiB3aWR0aD0iMTI4LjglIiBoZWlnaHQ9IjEyMi40JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iZmlsdGVyLTIiPgogICAgICAgICAgICA8ZmVNb3JwaG9sb2d5IHJhZGl1cz0iMS41IiBvcGVyYXRvcj0iZGlsYXRlIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93U3ByZWFkT3V0ZXIxIj48L2ZlTW9ycGhvbG9neT4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iMCIgaW49InNoYWRvd1NwcmVhZE91dGVyMSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiPjwvZmVPZmZzZXQ+CiAgICAgICAgICAgIDxmZU1vcnBob2xvZ3kgcmFkaXVzPSIxLjUiIG9wZXJhdG9yPSJlcm9kZSIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd0lubmVyIj48L2ZlTW9ycGhvbG9neT4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iMCIgaW49InNoYWRvd0lubmVyIiByZXN1bHQ9InNoYWRvd0lubmVyIj48L2ZlT2Zmc2V0PgogICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49InNoYWRvd09mZnNldE91dGVyMSIgaW4yPSJzaGFkb3dJbm5lciIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiPjwvZmVDb21wb3NpdGU+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUdhdXNzaWFuQmx1cj4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDEgICAwIDAgMCAwIDAuNDYyNzQ1MDk4ICAgMCAwIDAgMCAwLjQ0MzEzNzI1NSAgMCAwIDAgMSAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQTFfTWFpbl9wYWdlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDY2LjAwMDAwMCwgLTU1NDAuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9ImxvY2F0aW9uLW9uLW1hcC0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NjYuMDAwMDAwLCA1NTQ0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImxvY2F0aW9uLW9uLW1hcC0yIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0ibG9jYXRpb24tb24tbWFwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjUwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTU5LjI1MDI4OTYsNjkuOTU5NzY0MyBDNjAuMDM2NDU3OSw3MC42NDYwOTEzIDYxLjAxODAyMDIsNzAuOTkwMDgzNyA2Mi4wMDA0MTc1LDcwLjk5MDA4MzcgQzYyLjk4MjgxNDgsNzAuOTkwMDgzNyA2My45NjQ3OTQ2LDcwLjY0NjA5MTMgNjQuNzUwNTQ1NSw2OS45NTk3NjQzIEM2NS43NDYzMDMsNjkuMDg5MDA3NiA4OS4xMjkyNzk1LDQ4LjM5OTczIDg5LjEyOTI3OTUsMjYuOTQyODkzNSBDODkuMTI5Mjc5NSwxMi4wODgyMjQzIDc2Ljk1OTc0NDEsMC4wMDI5MDExNDA2OCA2Mi4wMDA4MzUsMC4wMDI5MDExNDA2OCBDNDcuMDQxNTA4NCwwLjAwMjkwMTE0MDY4IDM0Ljg3MTU1NTYsMTIuMDg4MjI0MyAzNC44NzE1NTU2LDI2Ljk0Mjg5MzUgQzM0Ljg3MDcyMDUsNDguMzk5NzMgNTguMjU0NTMyLDY5LjA4OTAwNzYgNTkuMjUwMjg5Niw2OS45NTk3NjQzIFogTTYyLjAwMDQxNzUsMTkuOTAzODk3MyBDNjUuODg0MDgwOCwxOS45MDM4OTczIDY5LjAzMzM0NjgsMjMuMDU0NTM2MSA2OS4wMzMzNDY4LDI2Ljk0Mjg5MzUgQzY5LjAzMzM0NjgsMzAuODMwODM2NSA2NS44ODQwODA4LDMzLjk4MTg4OTcgNjIuMDAwNDE3NSwzMy45ODE4ODk3IEM1OC4xMTU1MDE3LDMzLjk4MTg4OTcgNTQuOTY2NjUzMiwzMC44MzA0MjIxIDU0Ljk2NjY1MzIsMjYuOTQyODkzNSBDNTQuOTY2NjUzMiwyMy4wNTQ1MzYxIDU4LjExNTUwMTcsMTkuOTAzODk3MyA2Mi4wMDA0MTc1LDE5LjkwMzg5NzMgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjNDE0MTQxIiBvcGFjaXR5PSIwLjciPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlNoYXBlLUNvcHktMiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjEiIGZpbHRlcj0idXJsKCNmaWx0ZXItMikiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBzdHJva2U9IiNGRjc2NzEiIHN0cm9rZS13aWR0aD0iMyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTExNC4xMjg4NDgsNjkuOTQ3NzQ1MiBMMTEwLjk4NjI2Myw1OS4wMTU4MzI3IEMxMTAuNDc2MDY3LDU3LjI0MTU3NzkgMTA4Ljg0MzE5Miw1Ni4wMTg1Mzk5IDEwNi45ODUyNzksNTYuMDE4NTM5OSBMODQuNTU3MTQ0OCw1Ni4wMTg1Mzk5IEM4My43NDYzNDM0LDU3LjIxNTA1MzIgODIuODkwODY4Nyw1OC40MTYxMjU1IDgxLjk4NjEyNzksNTkuNjIzODI4OSBDNzUuNjk5NzAzNyw2OC4wMDgxMjU1IDY5LjMwODkwMjQsNzMuNjc5NDQxMSA2OC42MDAzOTA2LDc0LjI5OTQ1NjMgQzY2Ljc3NTg3ODgsNzUuODk0MjU0OCA2NC40MzI0MDQsNzYuNzcyNDcxNSA2Mi4wMDA0MTc1LDc2Ljc3MjQ3MTUgQzU5LjU3MDEwMSw3Ni43NzI0NzE1IDU3LjIyNjYyNjMsNzUuODk1MDgzNyA1NS4zOTk2MDk0LDc0LjI5ODYyNzQgQzU0LjY5MTkzMjcsNzMuNjc5NDQxMSA0OC4zMDAyOTYzLDY4LjAwNzI5NjYgNDIuMDE0Mjg5Niw1OS42MjM4Mjg5IEM0MS4xMDk1NDg4LDU4LjQxNjEyNTUgNDAuMjU0MDc0MSw1Ny4yMTQ2Mzg4IDM5LjQ0MzI3MjcsNTYuMDE4NTM5OSBMMTcuMDE0NzIwNSw1Ni4wMTg1Mzk5IEMxNS4xNTY4MDgxLDU2LjAxODUzOTkgMTMuNTIzOTMyNyw1Ny4yNDE1Nzc5IDEzLjAxMzczNzQsNTkuMDE1ODMyNyBMOS4yNjgyNjkzNiw3Mi4wNDQ0NDExIEw5Mi45OTA4MTQ4LDg3LjI2NzE0MDcgTDExNC4xMjg4NDgsNjkuOTQ3NzQ1MiBaIiBpZD0iUGF0aCIgZmlsbD0iIzJFMkUyRSIgb3BhY2l0eT0iMC43Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMjMuODQwMDk0LDEwMy43MzI3NzIgTDExNS44MTE0MDcsNzUuODAwNTg5NCBMNzUuOTc2MDk0MywxMDguOTk3MDk5IEwxMTkuODM5NTI5LDEwOC45OTcwOTkgQzEyMS4xNDUwNzcsMTA4Ljk5NzA5OSAxMjIuMzc0NjQsMTA4LjM4OTEwMyAxMjMuMTYwODA4LDEwNy4zNTQ2MzkgQzEyMy45NDY5NzYsMTA2LjMxOTc2IDEyNC4xOTc4OTksMTA0Ljk3ODYwNSAxMjMuODQwMDk0LDEwMy43MzI3NzIgWiIgaWQ9IlBhdGgiIGZpbGw9IiM0MTQxNDEiIG9wYWNpdHk9IjAuNyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjAuMzcxNDg4Miw3OS45NDIxNzQ5IEw3LjY2MjUzMTk5LDc3LjYzMTIwOTEgTDAuMTU5OTA1NzI0LDEwMy43MzI3NzIgQy0wLjE5Nzg5ODk5LDEwNC45Nzg2MDUgMC4wNTMwMjM1NjksMTA2LjMxOTc2IDAuODM5NjA5NDI4LDEwNy4zNTQyMjQgQzEuNjI1Nzc3NzgsMTA4LjM4ODY4OCAyLjg1NTM0MDA3LDEwOC45OTY2ODQgNC4xNjA4ODg4OSwxMDguOTk2Njg0IEwyMC4zNzE0ODgyLDEwOC45OTY2ODQgTDIwLjM3MTQ4ODIsNzkuOTQyMTc0OSBaIiBpZD0iUGF0aCIgZmlsbD0iIzQxNDE0MSIgb3BhY2l0eT0iMC43Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBmaWxsPSIjNDE0MTQxIiBvcGFjaXR5PSIwLjciIHBvaW50cz0iMjYuMTk2OTgzMiA4MS4wMDE5MjAyIDI2LjE5Njk4MzIgMTA4Ljk5NjY4NCA2Ni45MTUzMjY2IDEwOC45OTY2ODQgODcuMTk5NTU1NiA5Mi4wOTMzOTU0Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEzIiBoZWlnaHQ9IjExMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBvcGFjaXR5PSIuOSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMDQuNjU5IDM1LjYzbDEuMTU3IDEuMTU3LTEzLjcyMyAxMy44ODktMi4zMTUgMi4zMTUtMi4zMTQtMi4zMTUtMTUuNzktMTUuNzktNS4yMDggNS4yMDggMi44OTMgMi44OTRMODMuOTkyIDU3LjYyYTYuNzg2IDYuNzg2IDAgMCAxIDAgOS41OUw2Ny4yMSA4My45OTJhNi43ODYgNi43ODYgMCAwIDEtOS41OSAwTDQwLjgzOCA2Ny4yMWwtLjc0NC0uNzQ0LTUuMjA4IDUuMjA4IDQuMjE2IDQuMjE2IDEuNjU0IDEuNjUzTDUxLjc1IDg4LjUzOGwxLjE1NyAxLjE1Ny0xMy44MDYgMTMuODA2LTIuMzE0IDIuMzE1LTIuMzE1LTIuMzE1TDAgNjguOTQ2bDEuMTU3LTEuMDc1IDEyLjY0OS0xMi42NDggMi4zMTQtMi4zMTVMMzIuNDA2IDY5LjExbDUuMTczLTUuMTYtMTIuMDM1LTEyLjAzNWMtNy40NC03LjQ0LTcuNjA1LTE5LjQyNy0uMzMtMjYuNzAyIDcuMjc1LTcuMjc1IDE5LjI2Mi03LjExIDI2LjcwMi4zM0w2My45OCAzNy42MDhsNS4yMTQtNS4yMDJMNTIuOTA4IDE2LjEybDEuMTU3LTEuMTU3TDY2LjcxNSAyLjMxNWwxLjE1Ny0xLjE1OEw2OS4wMjggMGwyMy43MjYgMjMuNzI2IDEuNTcgMS41N0wxMDQuNjYgMzUuNjN6bS00MC42OCAxLjk3OEwzNy41OCA2My45NWwyLjUxNSAyLjUxNiAyNi4zNzItMjYuMzcyLTIuNDg2LTIuNDg2ek0xNi4xMiA1Ny40NTZsOS4xNzcgOS4xNzYtNC42MyA0LjYzLTkuMTc2LTkuMTc3IDQuNjMtNC42M3ptMi4zMTUgMTYuMTJMOS4xNzYgNjQuNCA0LjYzIDY4Ljk0NWw5LjE3NiA5LjI2IDQuNjMtNC42M3pNMTYuMTIgODAuNTJsNC42My00LjYzIDkuMTc2IDkuMTc3LTQuNjMgNC42My05LjE3Ni05LjE3N3pNMjcuNjExIDkyLjAxbDkuMTc3IDkuMTc3IDQuNjI5LTQuNjMtOS4xNzYtOS4xNzYtNC42MyA0LjYzem0xMS40OTEtMTEuNDlsOS4xNzcgOS4xNzUtNC42MyA0LjYzLTkuMTc2LTkuMjYgNC42My00LjU0NnptLTYuODYxIDIuMjMxbDQuNTQ3LTQuNTQ3LTkuMTc3LTkuMjU4LTQuNjMgNC42MyA5LjI2IDkuMTc1em02OC45NDYtNDUuOTY0bC00LjYzIDQuNjMtOS4xNzYtOS4xNzYgNC42My00LjYzIDkuMTc2IDkuMTc3em0tMTYuMTItNi44NjFsNC42MjktNC42My05LjE3Ny05LjI1OC00LjYzIDQuNjMgOS4xNzcgOS4yNTh6TTY5LjAyOCA0LjYyOWw5LjE3NiA5LjE3Ny00LjYzIDQuNjI5TDY0LjQgOS4yNTlsNC42My00LjYzem0tNi44NjIgNi44NjJsLTQuNjMgNC42MyA5LjE3NyA5LjE3NiA0LjYyOS00LjYzLTkuMTc2LTkuMTc2em02Ljg2MSAxNi4xMmw0LjYzLTQuNjI5IDkuMTc2IDkuMjU5LTQuNjMgNC42My05LjE3NS05LjI2em0xNi4xMiA2Ljg2MmwtNC42MjkgNC42MyA5LjE3NiA5LjE3NSA0LjYzLTQuNjI5LTkuMTc2LTkuMTc2eiIgZmlsbD0iIzM3MzYzNiIvPjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj48cGF0aCBkPSJNODkuNjk1IDk1LjA2OWE1LjM2MyA1LjM2MyAwIDAgMCA1LjM3NC01LjM3NCA1LjM2MyA1LjM2MyAwIDAgMC01LjM3NC01LjM3MyA1LjM2MyA1LjM2MyAwIDAgMC01LjM3MyA1LjM3MyA1LjM2MyA1LjM2MyAwIDAgMCA1LjM3MyA1LjM3NHoiIGZpbGw9IiNGRjczNkYiLz48L2c+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfZGYpIj48cGF0aCBkPSJNODkuNjk1IDk1LjA2OWE1LjM2MyA1LjM2MyAwIDAgMCA1LjM3NC01LjM3NCA1LjM2MyA1LjM2MyAwIDAgMC01LjM3NC01LjM3MyA1LjM2MyA1LjM2MyAwIDAgMC01LjM3MyA1LjM3MyA1LjM2MyA1LjM2MyAwIDAgMCA1LjM3MyA1LjM3NHoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz48L2c+PHBhdGggZD0iTTU1LjIyMyAyOC44NTFjLTcuNDQtNy40NC0xOS40MjgtNy42MDUtMjYuNzAyLS4zMy03LjI3NSA3LjI3NC03LjExIDE5LjI2MS4zMyAyNi43MDJsLTMuMzA2LTMuMzA3Yy03LjQ0LTcuNDQtNy42MDYtMTkuNDI3LS4zMzEtMjYuNzAyIDcuMjc1LTcuMjc1IDE5LjI2Mi03LjExIDI2LjcwMi4zM2wzLjMwNyAzLjMwN3oiIGZpbGw9IiMyOTI4MjgiLz48ZyBmaWx0ZXI9InVybCgjZmlsdGVyMl9kKSI+PHBhdGggZD0iTTI4LjEwNyA1NC40NzhsLTIuNTYyLTIuNTYyYy0uMjQ4LS4yNDgtLjQxNC0uNDk2LS42NjItLjY2MmwyNi4yODktMjYuMjg4Yy4yNDguMjQ4LjQ5Ni40MTMuNjYxLjY2MWwyLjU2MyAyLjU2My0yNi4yODkgMjYuMjg4eiIgZmlsbD0iI0ZGNzM2RiIvPjwvZz48ZyBmaWx0ZXI9InVybCgjZmlsdGVyM19kZikiPjxwYXRoIGQ9Ik0yOC4xMDcgNTQuNDc4bC0yLjU2Mi0yLjU2MmMtLjI0OC0uMjQ4LS40MTQtLjQ5Ni0uNjYyLS42NjJsMjYuMjg5LTI2LjI4OGMuMjQ4LjI0OC40OTYuNDEzLjY2MS42NjFsMi41NjMgMi41NjMtMjYuMjg5IDI2LjI4OHoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcikiLz48L2c+PHBhdGggZD0iTTEwNC4xNjMgNzYuNzE2Yy02Ljg2Mi02Ljg2MS0xOC42LTYuMjgyLTI2LjIwNiAxLjI0LTcuNjA2IDcuNjA2LTguMTg1IDE5LjI2Mi0xLjI0IDI2LjEyNGwyNy40NDYtMjcuMzY0eiIgZmlsbD0iIzM3MzYzNiIvPjxkZWZzPjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZCIgeD0iODAuMzIyIiB5PSI4Mi4zMjIiIHdpZHRoPSIxOC43NDciIGhlaWdodD0iMTguNzQ3IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz48ZmVPZmZzZXQgZHk9IjIiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjUgMCIvPjxmZUJsZW5kIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImZpbHRlcjFfZGYiIHg9IjY3LjE5NyIgeT0iNjcuMTk3IiB3aWR0aD0iNDQuOTk3IiBoZWlnaHQ9IjQ0Ljk5NyIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+PGZlT2Zmc2V0IGR5PSIyIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC41IDAiLz48ZmVCbGVuZCBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI4LjU2MyIgcmVzdWx0PSJlZmZlY3QyX2ZvcmVncm91bmRCbHVyIi8+PC9maWx0ZXI+PGZpbHRlciBpZD0iZmlsdGVyMl9kIiB4PSIyMC44ODMiIHk9IjIyLjk2NiIgd2lkdGg9IjM3LjUxMyIgaGVpZ2h0PSIzNy41MTMiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPjxmZU9mZnNldCBkeT0iMiIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuNSAwIi8+PGZlQmxlbmQgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+PC9maWx0ZXI+PGZpbHRlciBpZD0iZmlsdGVyM19kZiIgeD0iNy43NTgiIHk9IjcuODQxIiB3aWR0aD0iNjMuNzYzIiBoZWlnaHQ9IjYzLjc2MyIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+PGZlT2Zmc2V0IGR5PSIyIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC41IDAiLz48ZmVCbGVuZCBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI4LjU2MyIgcmVzdWx0PSJlZmZlY3QyX2ZvcmVncm91bmRCbHVyIi8+PC9maWx0ZXI+PGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iOTIuMzgyIiB5MT0iMTAwLjI1IiB4Mj0iODIuMDIiIHkyPSI5NC44NzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkY3QzU2Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY1RDVEIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSI0Ny4wMTgiIHkxPSI2OC43MDciIHgyPSIxOC41NjEiIHkyPSI1My45NTEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkY3QzU2Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY1RDVEIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+"

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  margin: 20px auto;\n  width: 80%;\n  padding-bottom: 40px;\n'], ['\n  margin: 20px auto;\n  width: 80%;\n  padding-bottom: 40px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 0 -20px;\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 0 -20px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  border: solid 1px #FF7671;\n  font-size: 1rem;\n  text-align: center;\n  letter-spacing: 2.6px;\n  text-transform: uppercase;\n  width: 300px;\n  max-width: 100%;\n  display: inherit;\n  padding: 15px;\n  cursor: pointer;\n  margin: 20px auto 0 auto;\n  text-decoration: none!important;\n  color: white!important;\n\n  &:hover {\n  background: #FF7671;\n  }\n'], ['\n  border: solid 1px #FF7671;\n  font-size: 1rem;\n  text-align: center;\n  letter-spacing: 2.6px;\n  text-transform: uppercase;\n  width: 300px;\n  max-width: 100%;\n  display: inherit;\n  padding: 15px;\n  cursor: pointer;\n  margin: 20px auto 0 auto;\n  text-decoration: none!important;\n  color: white!important;\n\n  &:hover {\n  background: #FF7671;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  margin: 20px;\n  width: calc(100% - 40px);\n  ', ';\n\n  background: #191919;\n  text-decoration: none!important;\n  color: white!important;\n'], ['\n  margin: 20px;\n  width: calc(100% - 40px);\n  ', ';\n\n  background: #191919;\n  text-decoration: none!important;\n  color: white!important;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  padding: 30px;\n  p {\n    font-family: \'FontRegular\';\n    line-height: 1.7;\n    font-size: 2rem;\n    height: 95.56px;\n    overflow: hidden;\n    margin-bottom: 0;\n  }\n  h6 {\n    font-family: \'FontRegular\';\n    line-height: 9.28;\n    font-size: 1rem;\n    letter-spacing: 2.6px;\n    color: #FF7671;\n    text-transform: uppercase;\n    margin: 0 0 10px 0!important;\n  }\n'], ['\n  padding: 30px;\n  p {\n    font-family: \'FontRegular\';\n    line-height: 1.7;\n    font-size: 2rem;\n    height: 95.56px;\n    overflow: hidden;\n    margin-bottom: 0;\n  }\n  h6 {\n    font-family: \'FontRegular\';\n    line-height: 9.28;\n    font-size: 1rem;\n    letter-spacing: 2.6px;\n    color: #FF7671;\n    text-transform: uppercase;\n    margin: 0 0 10px 0!important;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  height: auto;\n  width: 100%;\n  ', ';\n'], ['\n  height: auto;\n  width: 100%;\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

var _contentApi = __webpack_require__(103);

var _contentApi2 = _interopRequireDefault(_contentApi);

var _moment = __webpack_require__(104);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var Posts = function (_React$Component) {
  _inherits(Posts, _React$Component);

  function Posts(props) {
    _classCallCheck(this, Posts);

    var _this = _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).call(this, props));

    _this.state = {
      items: [],
      loading: true
    };
    return _this;
  }

  _createClass(Posts, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var api = new _contentApi2.default({
        url: 'https://blog.aragon.one',
        key: 'aa970326dab17876cf54110182',
        version: 'v2'
      });
      api.posts.browse({ limit: 2, include: 'tags,authors' }).then(function (posts) {
        _this2.setState({
          items: posts,
          loading: false
        });
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Container,
        { id: 'blog' },
        _react2.default.createElement(
          'h6',
          null,
          _react2.default.createElement(
            'span',
            { className: 'grey' },
            '\u2014'
          ),
          ' OUR LATEST POSTS'
        ),
        _react2.default.createElement(
          PostContainer,
          null,
          this.state.items.map(function (item) {
            return _react2.default.createElement(
              Post,
              { key: item.id, target: '_blank', href: item.url },
              _react2.default.createElement(Image, { src: item.feature_image.replace('http://', 'https://') }),
              _react2.default.createElement(
                Info,
                null,
                _react2.default.createElement(
                  'h6',
                  null,
                  (0, _moment2.default)(item.created_at).format("MMM Do, YYYY")
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  item.title
                )
              )
            );
          })
        ),
        _react2.default.createElement(
          MoreBtn,
          { target: '_blank', href: 'https://blog.aragon.one' },
          'View more posts'
        )
      );
    }
  }]);

  return Posts;
}(_react2.default.Component);

var Container = _styledComponents2.default.div(_templateObject);
var PostContainer = _styledComponents2.default.div(_templateObject2);
var MoreBtn = _styledComponents2.default.a(_templateObject3);
var Post = _styledComponents2.default.a(_templateObject4, medium('width: calc(40vw - 20px);'));
var Info = _styledComponents2.default.div(_templateObject5);
var Image = _styledComponents2.default.img(_templateObject6, medium('height: calc(20vw - 20px); object-fit: cover;'));

exports.default = Posts;

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = require("@tryghost/content-api");

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background-color: black;\n  height: auto;\n  margin: 30px 0 30px 0;\n  text-align: center;\n  overflow: hidden;\n'], ['\n  background-color: black;\n  height: auto;\n  margin: 30px 0 30px 0;\n  text-align: center;\n  overflow: hidden;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 80%;\n  margin: auto;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 30px;\n  flex-direction: column;\n  ', ';\n  border-top: solid 1px #3A3A3A;\n  a {\n    font-family: \'FontRegular\';\n    line-height: 2;\n    font-size: 1rem;\n    letter-spacing: 1.6px;\n    text-transform: uppercase;\n    padding: 0px 15px;\n    cursor: pointer;\n    display: block;\n    margin: 10px 0;\n    color: white;\n    text-decoration: none;\n    ', ';\n\n  }\n  a:hover {\n    opacity: 0.8;\n  }\n'], ['\n  width: 80%;\n  margin: auto;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 30px;\n  flex-direction: column;\n  ', ';\n  border-top: solid 1px #3A3A3A;\n  a {\n    font-family: \'FontRegular\';\n    line-height: 2;\n    font-size: 1rem;\n    letter-spacing: 1.6px;\n    text-transform: uppercase;\n    padding: 0px 15px;\n    cursor: pointer;\n    display: block;\n    margin: 10px 0;\n    color: white;\n    text-decoration: none;\n    ', ';\n\n  }\n  a:hover {\n    opacity: 0.8;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _logoFooter = __webpack_require__(5);

var _logoFooter2 = _interopRequireDefault(_logoFooter);

var _signature = __webpack_require__(106);

var _signature2 = _interopRequireDefault(_signature);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var Footer = function Footer() {
  return _react2.default.createElement(
    FooterSection,
    null,
    _react2.default.createElement(
      Container,
      null,
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(A1Logo, { src: _logoFooter2.default }),
        _react2.default.createElement(
          'a',
          { href: 'https://blog.aragon.one', target: '_blank' },
          'Blog'
        ),
        _react2.default.createElement(
          'a',
          { href: 'https://twitter.com/AragonOneTeam', target: '_blank' },
          'Twitter'
        ),
        _react2.default.createElement(
          'a',
          { href: 'https://aragon.org', target: '_blank' },
          'Aragon Project'
        )
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('img', { src: _signature2.default })
      )
    )
  );
};

var FooterSection = _styledComponents2.default.section(_templateObject);
var A1Logo = _styledComponents2.default.img(_templateObject2, medium('padding-right: 15px;'));
var Container = _styledComponents2.default.div(_templateObject3, medium('flex-direction: row;'), medium('display: inline; margin: 0;'));

exports.default = Footer;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/566296bb-signature.svg";

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  background: linear-gradient(221.23deg, #ff815c 0%, #ff5d5d 100.4%);\n  padding: 30px;\n  width: 100%;\n  ', ';\n  iframe {\n    width: 100%;\n    height: 42vw;\n    ', ';\n  }\n  h6 {\n    margin: 60px 0 20px 0 !important;\n  }\n  h1 {\n    font-size: 10vw;\n    ', ';\n  }\n'], ['\n  background: linear-gradient(221.23deg, #ff815c 0%, #ff5d5d 100.4%);\n  padding: 30px;\n  width: 100%;\n  ', ';\n  iframe {\n    width: 100%;\n    height: 42vw;\n    ', ';\n  }\n  h6 {\n    margin: 60px 0 20px 0 !important;\n  }\n  h1 {\n    font-size: 10vw;\n    ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background: url(', ') top no-repeat;\n  background-size: cover;\n  background-color: #191919;\n  padding: 30px;\n  width: 100%;\n  ', ';\n  text-align: center;\n  h6 {\n    margin: 20px 0 20px 0!important;\n    line-height: 1.4!important;\n  }\n  h2 {\n    font-size: 22px;\n    letter-spacing: 4px;\n    color: #FFFFFF;\n  }\n'], ['\n  background: url(', ') top no-repeat;\n  background-size: cover;\n  background-color: #191919;\n  padding: 30px;\n  width: 100%;\n  ', ';\n  text-align: center;\n  h6 {\n    margin: 20px 0 20px 0!important;\n    line-height: 1.4!important;\n  }\n  h2 {\n    font-size: 22px;\n    letter-spacing: 4px;\n    color: #FFFFFF;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  min-height: 100vh;\n  height: auto;\n  padding: 0 0 100px 0;\n  margin-bottom: 100px;\n'], ['\n  min-height: 100vh;\n  height: auto;\n  padding: 0 0 100px 0;\n  margin-bottom: 100px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: 100%;\n  min-height: 300px;\n  display: flex;\n  flex-direction: column;\n  ', ';\n'], ['\n  width: 100%;\n  min-height: 300px;\n  display: flex;\n  flex-direction: column;\n  ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  width: 80%;\n  margin: auto;\n  height: 100%;\n'], ['\n  width: 80%;\n  margin: auto;\n  height: 100%;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

var _offsites = __webpack_require__(108);

var _offsites2 = _interopRequireDefault(_offsites);

var _logoFooter = __webpack_require__(5);

var _logoFooter2 = _interopRequireDefault(_logoFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Events = function (_React$Component) {
  _inherits(Events, _React$Component);

  function Events(props, context) {
    _classCallCheck(this, Events);

    return _possibleConstructorReturn(this, (Events.__proto__ || Object.getPrototypeOf(Events)).call(this, props, context));
  }

  _createClass(Events, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        EventsSection,
        { id: 'events' },
        _react2.default.createElement(
          Container,
          null,
          _react2.default.createElement(
            'h6',
            null,
            _react2.default.createElement(
              'span',
              { className: 'grey' },
              '\u2014'
            ),
            ' EVENTS'
          ),
          _react2.default.createElement(
            Box,
            null,
            _react2.default.createElement(
              Event,
              null,
              _react2.default.createElement('iframe', {
                src: 'https://www.youtube-nocookie.com/embed/yeK2H4jT5Jk?rel=0&ecver=2',
                frameBorder: '0',
                allow: 'autoplay; encrypted-media',
                allowFullScreen: true
              }),
              _react2.default.createElement(
                'h6',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  '\u2014'
                ),
                ' OUR LATEST EVENT'
              ),
              _react2.default.createElement(
                'h1',
                null,
                '#AraCon2019'
              )
            ),
            _react2.default.createElement(
              Offsite,
              null,
              _react2.default.createElement('img', { src: _logoFooter2.default }),
              _react2.default.createElement(
                'h6',
                null,
                'LATEST TEAM OFFSITE'
              ),
              _react2.default.createElement(
                'h2',
                null,
                'GRAN CANARIA'
              )
            )
          )
        )
      );
    }
  }]);

  return Events;
}(_react2.default.Component);

var Event = _styledComponents2.default.div(_templateObject, medium('width: 70%;'), medium('height: 23vw;'), medium('font-size: 7vw;'));
var Offsite = _styledComponents2.default.div(_templateObject2, _offsites2.default, medium('width: 30%;'));

var EventsSection = _styledComponents2.default.section(_templateObject3);

var Box = _styledComponents2.default.div(_templateObject4, medium('flex-direction: row;'));

var Container = _styledComponents2.default.div(_templateObject5);
exports.default = Events;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/73cd8817-offsites.svg";

/***/ }),
/* 109 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = require("react-reveal/globals");

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.df6f3ff8.js.map