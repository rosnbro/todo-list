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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --std-spacing: 16px;\\n    --std-spacing-double: 32px;\\n    --std-spacing-half: 8px;\\n    --font-family: 'Times New Roman', Times, serif;\\n    --bg-color-sidebar: aquamarine;\\n    --bg-color-menu: white;\\n    --bg-color-project: cornflowerblue;\\n    --bg-color-main: darkkhaki;\\n    --bg-color-task: white;\\n    --bg-color-form: grey;\\n    --font-color-project: black;\\n}\\n\\nbody {\\n    margin: 0;\\n    height: 100vh;\\n    width: 100vw;\\n    display: grid;\\n    grid-template-columns: 300px 1fr;\\n    grid-template-areas:\\n    \\\"sidebar main\\\";\\n    font-family: var(--font-family);\\n}\\n\\n#sidebar {\\n    grid-area: sidebar;\\n    display: flex;\\n    flex-direction: column;\\n    height: 100%;\\n    width: 100%;\\n    background-color: var(--bg-color-sidebar);\\n}\\n\\n#title {\\n    padding: 25px 0;\\n    height: 50px;\\n    margin: var(--std-spacing) 0 0 var(--std-spacing-double);\\n    font-size: 3rem;\\n}\\n\\n#projectContainer {\\n    margin: var(--std-spacing);\\n    padding: var(--std-spacing);\\n    background-color: var(--bg-color-menu);\\n}\\n\\n#projectTitle {\\n    margin: 0;\\n    font-size: 2rem;\\n}\\n\\n.projectSelector,\\n#newProject {\\n    height: 30px;\\n    margin: var(--std-spacing) 0;\\n    padding: var(--std-spacing-half);\\n    font-size: 1.5rem;\\n    background-color: var(--bg-color-project);\\n    cursor: pointer;\\n}\\n\\n#projectInput {\\n    height: 100%;\\n    width: 100%;\\n    border: none;\\n    font-size: 1.5rem;\\n    font-family: var(--font-family);\\n    background-color: var(--bg-color-project);\\n}\\n\\n#projectInput::placeholder {\\n    font-size: 1.5rem;\\n    font-family: var(--font-family);\\n    color: var(--font-color-project);\\n}\\n\\nmain {\\n    grid-area: main;\\n    height: auto;\\n    width: 100%;\\n    overflow: scroll;\\n    background-color: var(--bg-color-main);\\n}\\n\\n#newTask {\\n    background-color: var(--bg-color-task);\\n    margin: var(--std-spacing) 0 0 var(--std-spacing);\\n    min-height: calc(100px - 2 * var(--std-spacing));\\n    width: calc(95% - 2 * var(--std-spacing));\\n}\\n\\n#newTaskTitle {\\n    height: 30px;\\n    padding: 35px var(--std-spacing);\\n    font-size: 1.5rem;\\n}\\n\\n#newTaskForm {\\n    display: flex;\\n    padding: var(--std-spacing);\\n    background-color: var(--bg-color-form);\\n}\\n\\n.inputField {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n#taskContainer {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    \\n    padding: var(--std-spacing);\\n}\\n\\n#containerTitle {\\n    font-size: 2rem;\\n    margin-top: var(--std-spacing);\\n}\\n\\n.task {\\n    background-color: var(--bg-color-task);\\n    margin-top: var(--std-spacing);\\n    padding: var(--std-spacing);\\n    min-height: 100px;\\n    width: calc(95% - 2 * var(--std-spacing));\\n    font-size: 1.5rem;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _renderNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderNav */ \"./src/renderNav.js\");\n/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTasks */ \"./src/renderTasks.js\");\n/* harmony import */ var _taskForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskForm */ \"./src/taskForm.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\nlet projects = [];\nlet tasks = [];\n\nlet allProjects = {\n    name: 'all',\n    selected: true,\n};\nprojects.push(allProjects);\n\nclass project {\n    constructor(name, selected) {\n        this.name = name;\n        this.selected = selected;\n    }\n}\n\n// ADD DELETE BUTTON TO PROJECTS THAT ALSO DELETE ASSOCIATED TASKS\n\nclass task {\n    constructor(progress, priority, title, project, description, dueDate) {\n        this.progress = progress;\n        this.priority = priority;\n        this.title = title;\n        this.project = project;\n        this.description = description;\n        this.dueDate = dueDate;\n    }\n}\n\nfunction newProjects() {\n    const newProject = document.getElementById('newProject');\n    const projectInput = document.createElement('input');\n\n    projectInput.type = 'text';\n    projectInput.placeholder = '+ new project';\n    projectInput.id = 'projectInput';\n    projectInput.addEventListener('keydown', (e) => {\n        if (e.code === 'Enter') {\n            let proj = new project(projectInput.value, true);\n            projects.push(proj);\n            projects.forEach(p => {\n                if (p.name != proj.name) {\n                    p.selected = false;\n                }\n            });\n            newTasks();\n            (0,_renderNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projects, tasks);\n            (0,_renderTasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(projects, tasks, proj.name);\n            projectInput.value = '';\n        }\n    });\n\n    newProject.appendChild(projectInput);\n}\n\nfunction newTasks() {\n    const newTask = document.getElementById('newTask');\n    const newTaskTitle = document.createElement('div');\n    const newTaskForm = document.createElement('div');\n    \n    newTaskTitle.id = 'newTaskTitle';\n    newTaskTitle.textContent = '+ new task';\n    newTaskForm.id = 'newTaskForm';\n\n    newTaskTitle.addEventListener('click', () => {\n        if (newTaskTitle.nextSibling) {\n            newTaskForm.innerHTML = '';\n            newTask.removeChild(newTask.lastChild);\n        } else {\n            newTask.appendChild((0,_taskForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newTaskForm, projects));\n            taskAdder();\n        }\n    });\n    \n    newTask.innerHTML = '';\n    newTask.appendChild(newTaskTitle);\n}\n\nfunction taskAdder() {\n    const newTaskForm = document.getElementById('newTaskForm');\n    const addNewTask = document.createElement('button');\n    \n    addNewTask.textContent = 'add';\n    addNewTask.addEventListener('click', add);\n    \n    function add() {\n        let formData = new Object();\n        let formDividers = newTaskForm.childNodes;\n        formDividers.forEach((divider) => {\n            let formItems = divider.childNodes;\n            formItems.forEach((item) => {\n                formData[item.name] = item.value;\n            });\n        });\n        \n        let tsk = new task(formData.progress, formData.priority, formData.title, formData.project, formData.description, formData.dueDate);\n        tasks.push(tsk);\n        \n        newTaskForm.innerHTML = '';\n        newTask.removeChild(newTask.lastChild);\n        (0,_renderNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projects, tasks);\n        (0,_renderTasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(projects, tasks, 'all');\n    }\n    \n    newTaskForm.id = 'newTaskForm';\n    newTaskForm.appendChild(addNewTask);\n\n    return newTaskForm;\n}\n\nfunction defaults() {\n    let proj1 = {\n        name: 'proj1',\n        selected: true,\n    };\n    let proj2 = {\n        name: 'proj2',\n        selected: true,\n    };\n    let proj3 = {\n        name: 'proj3',\n        selected: true,\n    };\n    projects.push(proj1);\n    projects.push(proj2);\n    projects.push(proj3);\n\n    let task1 = {\n        title: 'task1',\n        project: 'proj1',\n    };\n    let task2 = {\n        title: 'task2',\n        project: 'proj2',\n    };\n    let task3 = {\n        title: 'task3',\n        project: 'proj3',\n    };\n    let task4 = {\n        title: 'task4',\n        project: 'all',\n    }\n    tasks.push(task1);\n    tasks.push(task2);\n    tasks.push(task3);\n    tasks.push(task4);\n}\n\ndefaults();\n(0,_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\ndocument.addEventListener('DOMContentLoaded', () => {\n    newProjects();\n    newTasks();\n});\n(0,_renderNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projects, tasks);\n(0,_renderTasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(projects, tasks, 'all');\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction render() {\n    renderSidebar();\n    renderMain();\n}\n\nfunction renderSidebar() {\n    const sidebar = document.getElementById('sidebar');\n    const title = document.createElement('div');\n    const projectContainer = document.createElement('div');\n    const projectTitle = document.createElement('div');\n    const projectMenu = document.createElement('div');\n    const newProject = document.createElement('div');\n    \n    title.id = 'title';\n    projectContainer.id = 'projectContainer';\n    projectTitle.id = 'projectTitle';\n    projectMenu.id = 'projectMenu';\n    newProject.id = 'newProject';\n\n    title.textContent = 'task board';\n    projectTitle.textContent = 'projects:';\n\n    projectContainer.appendChild(projectTitle);\n    projectContainer.appendChild(projectMenu);\n    projectContainer.appendChild(newProject);\n    sidebar.appendChild(title);\n    sidebar.appendChild(projectContainer);\n    return sidebar;\n}\n\nfunction renderMain() {\n    const main = document.getElementById('main');\n    const newTask = document.createElement('div');\n    const taskContainer = document.createElement('div');\n\n    newTask.id = 'newTask';\n    taskContainer.id = 'taskContainer';\n\n    main.appendChild(newTask);\n    main.appendChild(taskContainer);\n    return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://todo-list/./src/render.js?");

/***/ }),

/***/ "./src/renderNav.js":
/*!**************************!*\
  !*** ./src/renderNav.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTasks */ \"./src/renderTasks.js\");\n\n\nfunction renderNav(projects, tasks) {\n    const projectMenu = document.getElementById('projectMenu');\n    projectMenu.innerHTML = '';\n\n    projects.forEach(project => {\n        let projectSelector = document.createElement('div');\n        projectSelector.classList.add('projectSelector');\n\n        projectSelector.textContent = project.name;\n        projectSelector.addEventListener('click', () => {\n            if (project.name == 'all') {\n                projects.forEach(proj => {\n                    proj.selected = true;\n                });\n            } else {\n                //project.selected = !project.selected; //toggle for multiple project selection\n                projects.forEach(proj => {\n                    proj.selected = false;\n                });\n                project.selected = true;\n            }\n            (0,_renderTasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(projects, tasks, project.name);\n        });\n\n        projectMenu.appendChild(projectSelector);\n    });\n    return projectMenu;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderNav);\n\n//# sourceURL=webpack://todo-list/./src/renderNav.js?");

/***/ }),

/***/ "./src/renderTasks.js":
/*!****************************!*\
  !*** ./src/renderTasks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction renderProjects(projects, tasks, selection) {\n    const projectContainer = document.getElementById('taskContainer');\n    const containerTitle = document.createElement('div');\n\n    containerTitle.id = 'containerTitle';\n    containerTitle.textContent = selection;\n\n    projectContainer.innerHTML = '';\n    projectContainer.appendChild(containerTitle);\n    renderTasks(projectContainer, filterTasks(projects, tasks));\n    return projectContainer;\n}\n\nfunction filterTasks(projects, tasks) {\n    return tasks.filter(task => {\n        return projects.find(project => {\n            if (project.selected == true) {\n                return project.name === task.project;\n            }\n        });\n    });\n}\n\nfunction renderTasks(wrapper, tasks) {\n    tasks.forEach(task => {\n        let taskItem = document.createElement('div');\n        taskItem.classList.add('task');\n        for (const prop in task) {\n            if (Object.hasOwnProperty.call(task, prop)) {\n                const property = document.createElement('div');\n                property.textContent = task[prop];\n                taskItem.appendChild(property)\n                \n            }\n        }\n        wrapper.appendChild(taskItem);\n    });\n    return wrapper;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderProjects);\n\n//# sourceURL=webpack://todo-list/./src/renderTasks.js?");

/***/ }),

/***/ "./src/taskForm.js":
/*!*************************!*\
  !*** ./src/taskForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction taskForm(parent, projects) {\n    const inputLeft = document.createElement('div');\n    const inputRight = document.createElement('div');\n\n    const addToProjectLabel = document.createElement('label');\n    const addToProject = document.createElement('select');\n\n    const priorityLabel = document.createElement('label');\n    const priorityInput = document.createElement('select');\n    const lowPriority = document.createElement('option');\n    const medPriority = document.createElement('option');\n    const highPriority = document.createElement('option');\n\n    const progressLabel = document.createElement('label');\n    const progressInput = document.createElement('input');\n\n    const titleLabel = document.createElement('label');\n    const titleInput = document.createElement('input');\n\n    const descriptionLabel = document.createElement('label');\n    const descriptionInput = document.createElement('textarea');\n\n    const dueDateLabel = document.createElement('label');\n    const dueDateInput = document.createElement('input');\n\n    titleInput.required = true;\n    titleInput.type = 'text';\n    titleInput.name = 'title';\n    titleLabel.for = 'title';\n    titleLabel.textContent = 'title*';\n\n    progressInput.type = 'number';\n    progressInput.name = 'progress';\n    progressInput.value = 0;\n    progressLabel.for = 'progress';\n    progressLabel.textContent = 'progress';\n\n    descriptionInput.name = 'description';\n    descriptionLabel.for = descriptionLabel.textContent = 'description';\n\n    addToProject.required = true;\n    addToProject.name = 'project';\n    addToProjectLabel.for = 'project';\n    addToProjectLabel.textContent = 'project*';\n    \n    projects.forEach(project => {\n        let option = document.createElement('option');\n        option.value = option.textContent = project.name;\n        if (project.name == 'all') option.selected = true;\n        addToProject.appendChild(option);\n    });\n    \n    priorityInput.required = true;\n    priorityInput.name = 'priority';\n    priorityLabel.for = 'priority';\n    priorityLabel.textContent = 'priority*';\n    lowPriority.selected = true;\n    lowPriority.value = lowPriority.textContent = 'low';\n    medPriority.value = medPriority.textContent = 'med';\n    highPriority.value = highPriority.textContent = 'high';\n    priorityInput.appendChild(lowPriority);\n    priorityInput.appendChild(medPriority);\n    priorityInput.appendChild(highPriority);\n\n    dueDateInput.required = true;\n    dueDateInput.type = 'date';\n    dueDateInput.name = 'dueDate';\n    dueDateLabel.for = 'dueDate';\n    dueDateLabel.textContent = 'due date*';\n    //make current date the default due date\n    //alert if selected date is in the past\n\n    function clearForm() {\n        descriptionInput.value = '';\n        dueDateInput.value = '';\n        titleInput.value = '';\n        lowPriority.selected = true;\n        addToProject.value = 'all';\n    }\n\n    inputLeft.classList.add('inputField');\n    inputRight.classList.add('inputField');\n\n    inputLeft.appendChild(titleLabel);\n    inputLeft.appendChild(titleInput);\n    inputLeft.appendChild(descriptionLabel);\n    inputLeft.appendChild(descriptionInput);\n    \n    inputRight.appendChild(addToProjectLabel);\n    inputRight.appendChild(addToProject);\n    inputRight.appendChild(progressLabel);\n    inputRight.appendChild(progressInput);\n    inputRight.appendChild(priorityLabel);\n    inputRight.appendChild(priorityInput);\n    inputRight.appendChild(dueDateLabel)\n    inputRight.appendChild(dueDateInput);\n    \n    parent.appendChild(inputLeft);\n    parent.appendChild(inputRight);\n\n    let taskData = {\n        progress: progressInput.value,\n        priority: priorityInput.value,\n        name: titleInput.value,\n        project: addToProject.value,\n        description: descriptionInput.value,\n        dueDate: dueDateInput.value,\n    }\n\n    return parent;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskForm);\n\n//# sourceURL=webpack://todo-list/./src/taskForm.js?");

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