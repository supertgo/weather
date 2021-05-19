/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_search_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/search-icon.png */ "./src/assets/search-icon.png");
/* harmony import */ var _assets_search_icon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_search_icon_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _screen_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../screen-2.jpg */ "./screen-2.jpg");
/* harmony import */ var _screen_2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_screen_2_jpg__WEBPACK_IMPORTED_MODULE_4__);
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()((_assets_search_icon_png__WEBPACK_IMPORTED_MODULE_3___default()));
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()((_screen_2_jpg__WEBPACK_IMPORTED_MODULE_4___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".search-box {\n  margin-top: 2rem;\n  display: flex;\n  justify-content: center;\n}\n.search-box #search {\n  width: 18.75rem;\n  outline: none;\n  border: none;\n  padding: 0.5rem 0 0 2rem;\n  background: transparent;\n  border-bottom: 2px solid #ffffff;\n  color: white;\n  font-size: 1rem;\n}\n.search-box #search::-webkit-input-placeholder {\n  font-weight: 700;\n  color: white;\n  font-size: 1rem;\n}\n.search-box .search-glass {\n  width: 1rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  border-bottom: 2px solid #ffffff;\n}\n\n@media (max-width: 768px) {\n  .search-box #search {\n    width: initial;\n  }\n}\n.pac-icon {\n  display: none;\n}\n\n.pac-container::after {\n  content: none !important;\n}\n\nmain {\n  margin-top: 1rem;\n  display: flex;\n  justify-content: space-around;\n  color: white;\n}\nmain .weather-info {\n  max-width: 55%;\n}\nmain .weather-info > * {\n  margin-bottom: 1rem;\n}\nmain .weather-info .weather-info-description {\n  font-size: 3rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\nmain .weather-info .weather-info-temp {\n  font-size: 3rem;\n  font-weight: 800;\n}\nmain .weather-info .weather-info-icon {\n  width: 4rem;\n}\nmain .weather-details-container .weather-details {\n  display: flex;\n  margin-bottom: 1.5rem;\n}\nmain .weather-details-container .weather-details .weather-details-icon {\n  width: 2rem;\n  padding-right: 1rem;\n}\nmain .weather-details-container .weather-details .weather-details-info {\n  align-items: center;\n}\nmain .weather-details-container .weather-details .weather-details-info .weather-details-label {\n  text-align: center;\n  font-weight: 600;\n  font-size: 1.4rem;\n}\nmain .weather-details-container .weather-details .weather-details-info .weather-details-data {\n  font-size: 2.3rem;\n}\n\n@media (max-width: 768px) {\n  .weather-info-description {\n    font-size: 1.5rem !important;\n  }\n  .weather-info-description > * {\n    font-size: 0.8rem;\n  }\n\n  .weather-details-container .weather-details {\n    margin-bottom: 0.5rem !important;\n  }\n  .weather-details-container .weather-details-icon {\n    width: 1.5rem !important;\n  }\n  .weather-details-container .weather-details-info .weather-details-label {\n    font-size: 0.8rem !important;\n  }\n  .weather-details-container .weather-details-info .weather-details-data {\n    font-size: 1.2rem !important;\n  }\n}\nfooter {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  padding: 0.3rem;\n  background-color: rgba(0, 0, 0, 0);\n}\nfooter a {\n  text-decoration: none;\n  color: white;\n  font-size: 1.5rem;\n  align-items: center;\n}\nfooter a span {\n  padding-left: 1rem;\n}\nfooter a span .fa {\n  color: white;\n  font-size: 2rem;\n}\n\n@media (max-width: 768px) {\n  footer {\n    position: initial;\n  }\n  footer a {\n    font-size: 1.2rem;\n  }\n}\n.forecast {\n  margin-top: 2rem;\n  color: white;\n  display: flex;\n  justify-content: space-around;\n  flex-direction: row;\n  /*height: 30rem;*/\n}\n.forecast .forecast-week {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n.forecast .forecast-week .forecast-week-day {\n  font-size: 2rem;\n  text-align: center;\n}\n.forecast .forecast-week .forecast-week-temperature {\n  font-weight: 700;\n  word-spacing: 2rem;\n}\n\n@media (max-width: 768px) {\n  .forecast {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nbody {\n  width: 100%;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center fixed;\n  background-size: cover;\n  height: 100%;\n  font-family: \"IBM Plex Sans\", sans-serif;\n}\n\n#error {\n  display: none;\n  padding: 0.3rem;\n  text-align: center;\n  color: red;\n}", "",{"version":3,"sources":["webpack://./src/style/modules/_search-box.scss","webpack://./src/style/style.scss","webpack://./src/style/modules/_places-api.scss","webpack://./src/style/modules/_main.scss","webpack://./src/style/modules/_footer.scss","webpack://./src/style/modules/_forecast.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,aAAA;EACA,uBAAA;ACEJ;ADAI;EACI,eAAA;EACA,aAAA;EACA,YAAA;EACA,wBAAA;EACA,uBAAA;EACA,gCAAA;EACA,YAAA;EACA,eAAA;ACER;ADAQ;EACI,gBAAA;EACA,YAAA;EACA,eAAA;ACEZ;ADEI;EACI,WAAA;EACA,yDAAA;EACA,wBAAA;EACA,4BAAA;EACA,eAAA;EACA,gCAAA;ACAR;;ADIA;EAEQ;IACI,cAAA;ECFV;AACF;AClCA;EACI,aAAA;ADoCJ;;AChCI;EACI,wBAAA;ADmCR;;AEzCA;EACI,gBAAA;EACA,aAAA;EACA,6BAAA;EACA,YAAA;AF4CJ;AE1CI;EACI,cAAA;AF4CR;AE1CQ;EACI,mBAAA;AF4CZ;AEzCQ;EACI,eAAA;EACA,gBAAA;EACA,0BAAA;AF2CZ;AExCQ;EACI,eAAA;EACA,gBAAA;AF0CZ;AEvCQ;EACI,WAAA;AFyCZ;AEpCQ;EACI,aAAA;EACA,qBAAA;AFsCZ;AEpCY;EACI,WAAA;EACA,mBAAA;AFsChB;AEnCY;EACI,mBAAA;AFqChB;AEnCe;EACI,kBAAA;EACA,gBAAA;EACC,iBAAA;AFqCpB;AElCe;EACC,iBAAA;AFoChB;;AE5BA;EACI;IACI,4BAAA;EF+BN;EE7BM;IACI,iBAAA;EF+BV;;EE1BM;IACI,gCAAA;EF6BV;EE1BM;IACI,wBAAA;EF4BV;EExBS;IACK,4BAAA;EF0Bd;EEvBS;IACC,4BAAA;EFyBV;AACF;AG3GA;EACI,WAAA;EACA,aAAA;EACA,uBAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,SAAA;EACA,OAAA;EACA,eAAA;EACA,kCAAA;AH6GJ;AG3GI;EACI,qBAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;AH6GR;AG3GQ;EACI,kBAAA;AH6GZ;AG5GY;EACI,YAAA;EACA,eAAA;AH8GhB;;AGvGA;EACI;IACI,iBAAA;EH0GN;EGxGM;IACI,iBAAA;EH0GV;AACF;AI7IA;EACI,gBAAA;EACA,YAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,iBAAA;AJ+IJ;AI7II;EACI,aAAA;EACA,sBAAA;EACA,6BAAA;AJ+IR;AI7IQ;EACI,eAAA;EACA,kBAAA;AJ+IZ;AI5IQ;EACI,gBAAA;EACA,kBAAA;AJ8IZ;;AIxIA;EACI;IACI,aAAA;IACA,sBAAA;IACA,mBAAA;IACA,8BAAA;EJ2IN;AACF;AApKA;EACI,SAAA;EACA,UAAA;EACA,mBAAA;AAsKJ;;AAlKA;EACI,WAAA;EACA,0EAAA;EACA,sBAAA;EACA,YAAA;EACA,wCAAA;AAqKJ;;AAlKA;EACI,aAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;AAqKJ","sourcesContent":[".search-box {\n    margin-top: 2rem;\n    display: flex;\n    justify-content: center;\n    \n    #search {\n        width: 18.75rem;\n        outline: none;\n        border: none;\n        padding: 0.5rem 0 0 2rem;\n        background: transparent;\n        border-bottom: 2px solid #ffffff;\n        color: white;\n        font-size: 1rem;\n        \n        &::-webkit-input-placeholder{\n            font-weight: 700;\n            color: white;\n            font-size: 1rem;\n        }\n    }\n\n    .search-glass {\n        width: 1rem;\n        background-image: url(/src/assets/search-icon.png);\n        background-size: contain;\n        background-repeat: no-repeat;\n        cursor: pointer;\n        border-bottom: 2px solid #ffffff;\n    }\n}\n\n@media (max-width: 768px) {\n    .search-box {\n        #search {\n            width: initial;\n        }\n    }\n}","@import \"modules/search-box\";\n@import \"modules/places-api\";\n@import \"modules/main\";\n@import \"modules/footer\";\n@import \"modules/forecast\";\n@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700&display=swap');\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n}\n\n\nbody {\n    width: 100%;\n    background: url(/screen-2.jpg) no-repeat center fixed;\n    background-size: cover;\n    height: 100%;\n    font-family: 'IBM Plex Sans', sans-serif;\n}\n\n#error {\n    display: none;\n    padding: 0.3rem;\n    text-align: center;\n    color:red;\n}",".pac-icon {\n    display: none;\n}\n\n.pac-container {\n    &::after{\n        content: none !important;\n    }\n}","main {\n    margin-top: 1rem;\n    display: flex;\n    justify-content: space-around;\n    color: white;\n\n    .weather-info {\n        max-width: 55%;\n\n        & > * {\n            margin-bottom: 1rem;\n        }\n\n        .weather-info-description {\n            font-size: 3rem;\n            font-weight: 600;\n            text-transform: capitalize;\n        }\n\n        .weather-info-temp {\n            font-size: 3rem;\n            font-weight: 800;\n        }\n\n        .weather-info-icon {\n            width: 4rem;\n        }\n    }\n\n    .weather-details-container {\n        .weather-details {\n            display: flex;\n            margin-bottom: 1.5rem;\n\n            .weather-details-icon {\n                width: 2rem;\n                padding-right: 1rem;\n            }\n\n            .weather-details-info {\n                align-items: center;\n\n               .weather-details-label {\n                   text-align: center;\n                   font-weight: 600;\n                    font-size: 1.4rem;\n               }\n\n               .weather-details-data {\n                font-size: 2.3rem;\n               }\n            }\n        }\n    \n    }\n}\n\n@media (max-width: 768px) {\n    .weather-info-description {\n        font-size: 1.5rem !important;\n\n        & > * {\n            font-size: 0.8rem;\n        }\n    }\n\n    .weather-details-container {\n        .weather-details {\n            margin-bottom: 0.5rem !important;\n        }\n\n        .weather-details-icon {\n            width: 1.5rem !important;\n        }\n\n        .weather-details-info {\n           .weather-details-label {\n                font-size: 0.8rem !important;\n           }\n\n           .weather-details-data {\n            font-size: 1.2rem !important;\n           }\n        }\n    }\n}","footer {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    align-items: center;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    padding: 0.3rem;\n    background-color: rgba(0, 0, 0, 0);\n\n    a {\n        text-decoration: none;\n        color: white;\n        font-size: 1.5rem;\n        align-items: center;\n\n        span {\n            padding-left: 1rem;\n            .fa {\n                color: white;\n                font-size: 2rem;\n            }\n        }\n    }\n\n}\n\n@media (max-width: 768px ){\n    footer {\n        position: initial;\n\n        a {\n            font-size: 1.2rem;\n        }\n    }\n}",".forecast {\n    margin-top: 2rem;\n    color: white;\n    display: flex;\n    justify-content: space-around;\n    flex-direction: row;\n    /*height: 30rem;*/\n\n    .forecast-week {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n\n        .forecast-week-day {\n            font-size: 2rem;\n            text-align: center;\n        }\n\n        .forecast-week-temperature {\n            font-weight: 700;\n            word-spacing: 2rem;\n        }\n    }\n}\n\n\n@media (max-width: 768px) {\n    .forecast {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-between;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/fromUnixTime/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/fromUnixTime/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fromUnixTime)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name fromUnixTime
 * @category Timestamp Helpers
 * @summary Create a date from a Unix timestamp.
 *
 * @description
 * Create a date from a Unix timestamp.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Number} unixTime - the given Unix timestamp
 * @returns {Date} the date
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Create the date 29 February 2012 11:45:05:
 * var result = fromUnixTime(1330515905)
 * //=> Wed Feb 29 2012 11:45:05
 */

function fromUnixTime(dirtyUnixTime) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var unixTime = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyUnixTime);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(unixTime * 1000);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./screen-2.jpg":
/*!**********************!*\
  !*** ./screen-2.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/screen-276a4ac1f2e19d4638f1e4dfe7738c17c.jpg";

/***/ }),

/***/ "./src/assets/search-icon.png":
/*!************************************!*\
  !*** ./src/assets/search-icon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/search-iconafa8a864e76e9c624eaedad03c287834.png";

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/js/modules/domFunctions.js":
/*!****************************************!*\
  !*** ./src/js/modules/domFunctions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderWeather": () => (/* binding */ renderWeather)
/* harmony export */ });
/* harmony import */ var date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/fromUnixTime */ "./node_modules/date-fns/esm/fromUnixTime/index.js");


function renderWeather(data) {
    _renderWeatherInfo(data);
    _renderWeatherDetailsContainer(data);
    _renderForecast(data);
}

function _renderWeatherInfo(data) {
    const content = {
        description: data.current.weather[0].description,
        name: data.name,
        day: `${_returnCorretDate(data.daily[0].dt, data.timezone_offset)}`,
        temp: `${Math.round(data.current.temp)} °C`,
        icon: `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`,
    }
    const keys = Object.keys(content);
    const values = Object.values(content);

    for (let i = 0; i < keys.length; i++) {
        if (keys[i] !== 'icon') {
            document.querySelector(`.weather-info-${keys[i]} `).textContent = values[i];
        } else {
            document.getElementById('weather-info-icon-image').src = values[i];
        }
    }
}

function _renderWeatherDetailsContainer(data) {
    const content = {
        feels_like: `${Math.round(data.current.feels_like)} °C`,
        humidity: `${data.current.humidity} % `,
        chance_of_rain: `${data.daily[0].pop} % `,
        wind_speed: `${data.current.wind_speed} m/s`,
    }

    const keys = Object.keys(content);
    const values = Object.values(content);

    for (let i = 0; i < keys.length; i++) {
        document.querySelector(`#${keys[i]} `).textContent = values[i];
    }

}

function _renderForecast(data) {

    for (let i = 1; i < document.querySelector('.forecast').childElementCount + 1; i++) {
        document.querySelector(`#forecast-week-day-${i}`).textContent = _returnCorretDate(data.daily[i].dt, data.timezone_offset).slice(0, 7);
        document.querySelector(`#forecast-week-icon-${i}`).src = `http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png`;
        document.querySelector(`#forecast-week-temperature-${i}`).textContent = `${Math.round(data.daily[i].temp.min)}°C ${Math.round(data.daily[i].temp.max)}°C`;
    }
}

function _returnCorretDate(dt, timezone) {
    return (0,date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_0__.default)(dt + timezone).toUTCString().slice(0, 16);
}

/***/ }),

/***/ "./src/js/modules/weather-api-functions.js":
/*!*************************************************!*\
  !*** ./src/js/modules/weather-api-functions.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getForecastUrl": () => (/* binding */ getForecastUrl),
/* harmony export */   "getForecast": () => (/* binding */ getForecast),
/* harmony export */   "hideMensageError": () => (/* binding */ hideMensageError),
/* harmony export */   "sendDataFromInput": () => (/* binding */ sendDataFromInput),
/* harmony export */   "getDataFromRequest": () => (/* binding */ getDataFromRequest)
/* harmony export */ });
const searchInput = document.querySelector('#search');
const options = {
    types: ['(cities)'],
}

new google.maps.places.Autocomplete(searchInput, options);

function getUrlWithCityName(name) {
    console.log(name);
    return `http://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=fed5252a83d1efbe48a54ce479af6041`
}

function getForecastUrl(coords, units = 'metric') {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,alerts&units=${units}&appid=fed5252a83d1efbe48a54ce479af6041`;
}

async function getWeatherCoords(url) {
    const response = await fetch(url,
        { mode: 'cors' });

    if (response.status === 404) {
        throwMensageError()
    } else {
        const data = await response.json();
        const { coord } = data;
        return coord;
    }

}

async function getForecast(url) {
    const response = await fetch(url, { mode: 'cors' });
    console.log(response);
    if (response.status === 404) {
        throwMensageError()
    } else {
        const data = await response.json();
        return data;
    }
}

function throwMensageError() {
    document.querySelector('#error').style.display = 'block';
}

function hideMensageError() {
    document.querySelector('#error').style.display = 'none';
}

async function sendDataFromInput(value) {
    const coords = await getWeatherCoords(getUrlWithCityName(value));
    const data = await getForecast(getForecastUrl(coords));
    data.name = value;

    return data;
}

async function getDataFromRequest(position) {
    position.coords.lat = position.coords.latitude;
    position.coords.lon = position.coords.longitude;

    const coords = await getForecastUrl(position.coords);
    const data = await getForecast(coords);

    data.name = 'Your Location';

    return data;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.scss */ "./src/style/style.scss");
/* harmony import */ var _modules_weather_api_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/weather-api-functions */ "./src/js/modules/weather-api-functions.js");
/* harmony import */ var _modules_domFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/domFunctions */ "./src/js/modules/domFunctions.js");




const searchInput = document.querySelector('#search');
const divSearch = document.querySelector('.search-glass');

searchInput.addEventListener('focus', () => {
    _modules_weather_api_functions__WEBPACK_IMPORTED_MODULE_1__.hideMensageError();
})

divSearch.addEventListener('click', async () => {
    const data = await _modules_weather_api_functions__WEBPACK_IMPORTED_MODULE_1__.sendDataFromInput(searchInput.value);
    (0,_modules_domFunctions__WEBPACK_IMPORTED_MODULE_2__.renderWeather)(data);
});

async function sucessRequest(position) {
    const data = await _modules_weather_api_functions__WEBPACK_IMPORTED_MODULE_1__.getDataFromRequest(position);
    (0,_modules_domFunctions__WEBPACK_IMPORTED_MODULE_2__.renderWeather)(data);
}

async function deniedRequest() {
    const data = await _modules_weather_api_functions__WEBPACK_IMPORTED_MODULE_1__.sendDataFromInput('Belo Horizonte, MG, Brasil');
    (0,_modules_domFunctions__WEBPACK_IMPORTED_MODULE_2__.renderWeather)(data);
}

if (window.navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sucessRequest, deniedRequest);
}








})();

/******/ })()
;
//# sourceMappingURL=main.js.map