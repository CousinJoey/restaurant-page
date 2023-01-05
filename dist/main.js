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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skeleton */ \"./src/skeleton.js\");\n\n\n\n(0,_skeleton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/skeleton.js":
/*!*************************!*\
  !*** ./src/skeleton.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n\nfunction createNav() {\n\n    const nav = document.createElement(\"nav\");\n    nav.classList.add(\"nav\");\n\n    const titleContainer = document.createElement(\"div\");\n    titleContainer.classList.add(\"title-container\")\n\n    const navbarContainer = document.createElement(\"div\");\n    navbarContainer.classList.add(\"navbar-container\");\n\n\n\n    const title = document.createElement(\"h1\");\n    title.classList.add(\"title\");\n    title.textContent = \"Pizza Shop\";\n    titleContainer.appendChild(title);\n\n\n\n    const homeBtn = document.createElement(\"button\")\n    homeBtn.classList.add(\"nav-button\");\n    homeBtn.textContent = \"Home\";\n\n    const menuBtn = document.createElement(\"button\");\n    menuBtn.classList.add(\"nav-button\");\n    menuBtn.textContent = \"Menu\";\n\n    const contactBtn = document.createElement(\"button\");\n    contactBtn.classList.add(\"nav-button\");\n    contactBtn.textContent = \"Contact\";\n\n\n    navbarContainer.appendChild(homeBtn);\n    navbarContainer.appendChild(menuBtn);\n    navbarContainer.appendChild(contactBtn);\n\n    nav.appendChild(titleContainer);\n    nav.appendChild(navbarContainer);\n\n    return nav\n}\n\nfunction createMain() {\n\n    const main = document.createElement(\"main\");\n\n    const mainContainer = document.createElement(\"div\");\n    mainContainer.classList.add(\"main-container\");\n    main.appendChild(mainContainer);\n\n    return main\n}\n\nfunction createFooter() {\n\n    const footer = document.createElement(\"footer\");\n\n    const footerContainer = document.createElement(\"div\");\n    footerContainer.classList.add(\"footer-container\");\n    footer.appendChild(footerContainer);\n\n    return footer\n\n}\n\nfunction createPage() {\n    const content = document.getElementById(\"content\");\n\n    content.appendChild(createNav());\n    content.appendChild(createMain());\n    content.appendChild(createFooter());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/skeleton.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;