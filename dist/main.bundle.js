/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: Roboto, 'Courier New', Courier, monospace;\\r\\n}\\r\\n\\r\\n.homePage {\\r\\n  padding: 10% 5% 5% 5%;\\r\\n}\\r\\n\\r\\n.cardDiv {\\r\\n  border: solid rgb(212, 206, 206);\\r\\n  border-radius: 0 15% 0 10%;\\r\\n  margin: 5%;\\r\\n}\\r\\n\\r\\n.movieImg img {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  border-radius: 0 15% 0 0;\\r\\n}\\r\\n\\r\\n.movieImg {\\r\\n  width: auto;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  padding: 2% 7%;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.fa-heart {\\r\\n  font-size: 130%;\\r\\n  margin-left: 12px;\\r\\n}\\r\\n\\r\\n.fa-solid {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  font-weight: bold;\\r\\n  font-size: 150%;\\r\\n}\\r\\n\\r\\n.like-btn {\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n  float: right;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  margin: 0 0 2% 10%;\\r\\n  padding: 2%;\\r\\n  font-weight: bold;\\r\\n  border: rgb(212, 206, 206);\\r\\n}\\r\\n\\r\\n.reserve {\\r\\n  margin: 0 48px 15px 0;\\r\\n  display: block;\\r\\n  width: 100%;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  padding: 2% 0 2% 2%;\\r\\n  border-top: solid 3px;\\r\\n}\\r\\n\\r\\nfooter a {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  padding: 2% 0 2% 2%;\\r\\n  border-bottom: solid 3px rgb(212, 206, 206);\\r\\n  position: fixed;\\r\\n  width: 100%;\\r\\n  background: #fff;\\r\\n}\\r\\n\\r\\n.header nav,\\r\\n.contact-header nav {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.comment ul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.header nav ul,\\r\\n.contact-header nav ul {\\r\\n  display: flex;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.header nav a,\\r\\n.contact-header nav a {\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.header nav ul li a,\\r\\n.contact-header nav ul li a {\\r\\n  padding: 0 20px;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.view-movie {\\r\\n  position: fixed;\\r\\n  width: 100%;\\r\\n  background-color: rgba(0, 0, 0, 0.708);\\r\\n  top: 0;\\r\\n  height: 100vh;\\r\\n  justify-content: center;\\r\\n  padding: 20px 0;\\r\\n}\\r\\n\\r\\n.view-movie .card-movie {\\r\\n  background: white;\\r\\n  width: 40%;\\r\\n  padding: 40px;\\r\\n  padding-top: 70px;\\r\\n  position: relative;\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\n#view {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.view-movie .card-movie .details {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.comment ul li p {\\r\\n  margin-bottom: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.view-movie .card-movie .details p {\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.view-movie .card-movie .description {\\r\\n  padding: 30px 0;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.view-movie .card-movie h2 {\\r\\n  text-align: center;\\r\\n  padding: 20px 0;\\r\\n}\\r\\n\\r\\n.view-movie .card-movie img {\\r\\n  height: 600px;\\r\\n  width: 100%;\\r\\n  object-fit: fill;\\r\\n}\\r\\n\\r\\n.card-movie form {\\r\\n  width: 50%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin: 10px auto;\\r\\n}\\r\\n\\r\\n.card-movie form input,\\r\\n.card-movie form textarea {\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.card-movie form button {\\r\\n  border: none;\\r\\n  background: rgb(10, 138, 250);\\r\\n  padding: 10px 0;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.loading {\\r\\n  text-align: center;\\r\\n  color: rgb(107, 107, 107);\\r\\n  margin: 200px 0;\\r\\n}\\r\\n\\r\\n#comment-form {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.comment-title {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  background: none;\\r\\n  border: none;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  right: 0;\\r\\n  margin: 15px;\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\n.close:hover {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.comment h5 {\\r\\n  text-align: center;\\r\\n  margin: 20px 0;\\r\\n}\\r\\n\\r\\n.comment ul li {\\r\\n  padding: 10px 0;\\r\\n  border-bottom: 1px dashed #cccc;\\r\\n}\\r\\n\\r\\n#loading-form {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.comment-title,\\r\\n.title,\\r\\n.bold {\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.contact {\\r\\n  border: solid rgb(212, 206, 206);\\r\\n  border-radius: 0 15% 0 10%;\\r\\n  padding: 2%;\\r\\n}\\r\\n\\r\\n.contact-head {\\r\\n  text-align: center;\\r\\n  padding: 20px 0;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.contact form button {\\r\\n  background-color: red;\\r\\n  border: none;\\r\\n  margin-bottom: 24px;\\r\\n}\\r\\n\\r\\n.contact-header {\\r\\n  padding: 2% 0 2% 2%;\\r\\n  border-bottom: solid 3px rgb(212, 206, 206);\\r\\n  width: 100%;\\r\\n  margin-bottom: 5%;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://pimovies/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://pimovies/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://pimovies/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n  <meta charset=\\\"UTF-8\\\">\\r\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n  <script src=\\\"https://kit.fontawesome.com/7967e81f77.js\\\" crossorigin=\\\"anonymous\\\"></script>\\r\\n  <link href=\\\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap\\\" rel=\\\"stylesheet\\\">\\r\\n  <!-- CSS only -->\\r\\n  <link href=\\\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css\\\" rel=\\\"stylesheet\\\"\\r\\n    integrity=\\\"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor\\\" crossorigin=\\\"anonymous\\\">\\r\\n  <title>PImovies</title>\\r\\n</head>\\r\\n\\r\\n<body>\\r\\n  <header class=\\\"header\\\">\\r\\n    <nav>\\r\\n      <h3><a href=\\\"/\\\">PI Movies</a></h3>\\r\\n      <ul>\\r\\n        <li><a href=\\\"#\\\">Home</a></li>\\r\\n        <li><a href=\\\"#\\\">About</a></li>\\r\\n        <li><a href=\\\"./contact.html\\\">Contact</a></li>\\r\\n      </ul>\\r\\n    </nav>\\r\\n  </header>\\r\\n  <section class=\\\"homePage\\\">\\r\\n    <div class=\\\"row\\\" id=\\\"row\\\">\\r\\n    </div>\\r\\n  </section>\\r\\n  <footer>\\r\\n    <p>Created By: <a href=\\\"www.github.com/kamzzy\\\">Kamzzy</a> & <a\\r\\n        href=\\\"www.github.com/IshmaelKargbo\\\">IshmaelKargbo</a> under CC licence</p>\\r\\n  </footer>\\r\\n  <!-- Comment Movie -->\\r\\n  <section class=\\\"view-movie\\\" id=\\\"view\\\">\\r\\n    <div class=\\\"card-movie\\\">\\r\\n      <button class=\\\"close\\\" id=\\\"closeModal\\\">X</button>\\r\\n      <div id=\\\"card-body\\\">\\r\\n        <h4 class=\\\"loading\\\">Loading . . .</h4>\\r\\n      </div>\\r\\n      <div id=\\\"comment-form\\\">\\r\\n        <h5 class=\\\"comment-title\\\">Add a comment</h5>\\r\\n        <form id=\\\"form\\\">\\r\\n          <input type=\\\"hidden\\\" id=\\\"hidden\\\" name=\\\"item_id\\\">\\r\\n          <input required type=\\\"text\\\" placeholder=\\\"Your name\\\" name=\\\"username\\\">\\r\\n          <textarea required name=\\\"comment\\\" cols=\\\"30\\\" rows=\\\"10\\\" placeholder=\\\"Your insights\\\"></textarea>\\r\\n          <p id='loading-form'>Loading . . .</p>\\r\\n          <button type=\\\"submit\\\">Comment</button>\\r\\n        </form>\\r\\n      </div>\\r\\n    </div>\\r\\n  </section>\\r\\n  <!-- JavaScript Bundle with Popper -->\\r\\n  <script src=\\\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js\\\"\\r\\n    integrity=\\\"sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2\\\"\\r\\n    crossorigin=\\\"anonymous\\\"></script>\\r\\n</body>\\r\\n\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://pimovies/./src/index.html?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://pimovies/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://pimovies/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://pimovies/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://pimovies/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://pimovies/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://pimovies/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://pimovies/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _modules_homepage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/homepage.js */ \"./src/modules/homepage.js\");\n\n\n\n\n(async () => {\n  await (0,_modules_homepage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n})();\n\n//# sourceURL=webpack://pimovies/./src/index.js?");

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.js */ \"./src/modules/view.js\");\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n\n\n\nconst row = document.getElementById('row');\n\nconst renderMovie = (movies) => {\n  movies.forEach((movie) => {\n    const div = document.createElement('div');\n\n    div.classList.add('col');\n    div.classList.add('col-sm-6');\n    div.classList.add('col-md-4');\n    div.classList.add('col-lg-3');\n\n    div.id = movie.show.id;\n\n    div.innerHTML = `\n    <div class=\"cardDiv\">\n        <div class=\"movieImg\">\n          <img src=${movie.show.image.medium} alt=\"\">\n        </div>\n        <p class=\"title\">${movie.show.name}</p>\n        <div class=\"spanDiv\">\n          \n          <button class=\"like-btn\"><span class=\"likes\">0</span><i class=\"fa-solid fa-heart\"></i></button>\n        </div>\n        <button class=\"comments\" id='comment-${movie.show.id}'>Comments</button>\n      </div>\n    `;\n\n    row.appendChild(div);\n\n    const commentBtn = document.getElementById(`comment-${movie.show.id}`);\n    commentBtn.addEventListener('click', () => {\n      (0,_view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(movie);\n    });\n  });\n\n  (0,_likes_js__WEBPACK_IMPORTED_MODULE_1__.getLikeFunction)();\n  (0,_likes_js__WEBPACK_IMPORTED_MODULE_1__.postLikeFunction)();\n};\n\nconst getMovies = async () => {\n  try {\n    const url = 'https://api.tvmaze.com/search/shows?q=n';\n    const response = await fetch(url);\n    const data = await response.json();\n    renderMovie(data);\n  } catch (error) {\n    return error;\n  }\n\n  return null;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovies);\n\n\n//# sourceURL=webpack://pimovies/./src/modules/homepage.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikeFunction\": () => (/* binding */ getLikeFunction),\n/* harmony export */   \"postLikeFunction\": () => (/* binding */ postLikeFunction)\n/* harmony export */ });\nconst likeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mFR5yoTrX10GbCKMVH4O/likes';\n\nconst getLikeFunction = async () => {\n  const cards = document.querySelectorAll('.col');\n  const likeCount = document.querySelectorAll('.likes');\n  await fetch(likeUrl)\n    .then((response) => response.json())\n    .then((json) => {\n      cards.forEach((card, index) => {\n        json.forEach((item) => {\n          if (item.item_id === card.id) {\n            likeCount[index].innerHTML = item.likes;\n          }\n        });\n      });\n    });\n};\nconst postLikeFunction = async () => {\n  const likeBtn = document.querySelectorAll('.like-btn');\n  const likeBtnCount = document.querySelectorAll('.likes');\n  const card = document.querySelectorAll('.col');\n  likeBtn.forEach((btn, index) => {\n    btn.addEventListener('click', () => {\n      likeBtnCount[index].innerHTML = Number(likeBtnCount[index].innerHTML) + 1;\n      fetch(likeUrl, {\n        method: 'POST',\n        body: JSON.stringify({\n          item_id: card[index].id,\n        }),\n        headers: {\n          'Content-type': 'application/json; charset=UTF-8',\n        },\n      });\n    });\n  });\n};\n\n\n\n\n//# sourceURL=webpack://pimovies/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = document.getElementById('view');\nconst closeBtn = document.getElementById('closeModal');\nconst cardBody = document.getElementById('card-body');\nconst itemId = document.getElementById('hidden');\nconst form = document.getElementById('form');\nconst loadingForm = document.getElementById('loading-form');\nconst commentForm = document.getElementById('comment-form');\n\nlet movieCache = null;\n\nconst fetchComment = async (id) => {\n  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mFR5yoTrX10GbCKMVH4O/comments?item_id=${id}`);\n\n  if (res.status === 400) return null;\n\n  const data = await res.json();\n  return data;\n};\n\nconst renderViewModal = (movie) => {\n  movieCache = movie;\n\n  modal.style.display = 'flex';\n\n  itemId.value = movie.show.id;\n\n  fetchComment(movie.show.id)\n    .then((data) => {\n      cardBody.innerHTML = `\n        <div>\n            <img src=\"${movie.show.image.original}\" alt=\"\">\n            <h2 id=\"title\">${movie.show.name}</h2>\n            <div class=\"details\">\n              <p><span class=\"bold\">Language: </span><span>${movie.show.language}</span></p>\n              <p><span class=\"bold\">Type: </span><span>${movie.show.type}</span></p>\n              <p><span class=\"bold\">Premiered: </span><span>${movie.show.type}</span></p>\n              <p><span class=\"bold\">Status: </span><span>${movie.show.status}</span></p>\n              <p><span class=\"bold\">Genres: </span><span>${movie.show.genres.toString()}</span></p>\n            </div>\n            <div class=\"comment\">\n              <h5>Comments (${data ? data.length : 0})</h5>\n                <ul id=\"comment-list\">\n                  \n                </ul>\n            </div>\n            <div class=\"description\">\n                ${movie.show.summary}\n            </div>\n        </div>\n    `;\n      const commentList = document.getElementById('comment-list');\n\n      if (data) {\n        data.forEach((comment) => {\n          const item = document.createElement('li');\n          item.innerHTML = `<p><span class=\"bold\">${comment.creation_date} ${comment.username}:</span> ${comment.comment}</p>`;\n          commentList.appendChild(item);\n        });\n      }\n\n      commentForm.style.display = 'block';\n    });\n};\n\nconst addComment = async (form) => {\n  loadingForm.style.display = 'block';\n  form.preventDefault();\n\n  const data = Object.fromEntries(new FormData(form.target).entries());\n\n  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mFR5yoTrX10GbCKMVH4O/comments', {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json',\n    },\n    body: JSON.stringify({ item_id: data.item_id, comment: data.comment, username: data.username }),\n  });\n\n  loadingForm.style.display = 'none';\n  commentForm.style.display = 'none';\n  cardBody.innerHTML = \"<h4 class='loading'>Loading . . .</h4>\";\n  renderViewModal(movieCache);\n\n  form.target.reset();\n};\n\nform.addEventListener('submit', addComment);\n\nconst close = () => {\n  commentForm.style.display = 'none';\n  cardBody.innerHTML = \"<h4 class='loading'>Loading . . .</h4>\";\n  modal.style.display = 'none';\n};\n\ncloseBtn.addEventListener('click', close);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderViewModal);\n\n//# sourceURL=webpack://pimovies/./src/modules/view.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;