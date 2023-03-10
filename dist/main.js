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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction CreateContact() {\n\n\n    const contactContainer = document.createElement(\"div\");\n    contactContainer.classList.add(\"contact-container\");\n\n    const contactInfoContainer = document.createElement(\"div\");\n    contactInfoContainer.classList.add(\"contact-info-container\");\n\n    const phoneInfo = document.createElement(\"p\");\n    phoneInfo.classList.add(\"contact-info\");\n    phoneInfo.textContent = \"📞 123-456-7890\";\n\n    const addressInfo = document.createElement(\"p\");\n    addressInfo.classList.add(\"contact-info\")\n    addressInfo.textContent = \"📍 474 Forest Ave, Plymouth Township, Mi\"\n\n    const googleMapContainer = document.createElement(\"div\");\n    googleMapContainer.classList.add(\"google-map-container\");\n\n    const googleMap = document.createElement(\"div\");\n    googleMap.classList.add(\"google-map\");\n\n    contactInfoContainer.appendChild(phoneInfo);\n    contactInfoContainer.appendChild(addressInfo);\n\n    contactContainer.appendChild(contactInfoContainer);\n    googleMapContainer.appendChild(googleMap);\n    contactContainer.appendChild(googleMapContainer);\n\n\n\n\n\n    return contactContainer;\n};\n\nfunction loadContact() {\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\"\n    main.appendChild(CreateContact());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction createHome() {\n\n    const mainContainer = document.createElement(\"div\");\n    mainContainer.classList.add(\"main-container\");\n\n    const chefContainer = document.createElement(\"div\");\n    chefContainer.classList.add(\"chef-container\");\n\n    const chefPicture = document.createElement(\"div\");\n    chefPicture.classList = \"chef-picture\";\n\n    const homeText = document.createElement(\"p\")\n    homeText.classList = \"home-text\";\n    homeText.textContent = \"Bringing you authentic pizza since 1897\"\n\n    chefContainer.appendChild(chefPicture);\n    mainContainer.appendChild(chefContainer);\n    mainContainer.appendChild(homeText);\n\n    return mainContainer\n\n}\n\nfunction loadHome() {\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createHome());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skeleton */ \"./src/skeleton.js\");\n\n\n(0,_skeleton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction createMenu() {\n\n    const menuContainer = document.createElement(\"div\");\n    menuContainer.classList.add(\"menu-container\");\n\n    const menuItem1 = document.createElement(\"div\");\n    menuItem1.classList.add(\"menu-item-container\");\n\n    const pictureItem1Container = document.createElement(\"div\");\n    pictureItem1Container.classList.add(\"picture-container\");\n\n    const pictureItem1 = document.createElement(\"div\");\n    pictureItem1.classList.add(\"picture-items\");\n    pictureItem1.classList.add(\"item-1\")\n\n    const nameContainer1 = document.createElement(\"div\");\n    nameContainer1.classList.add(\"name-container\");\n\n    const itemName1 = document.createElement(\"h2\");\n    itemName1.classList.add(\"item-names-and-prices\");\n    itemName1.textContent = \"Margherita\" + '....' + \"19\";\n\n    const itemDescription1 = document.createElement(\"p\");\n    itemDescription1.classList.add(\"item-descriptions\");\n    itemDescription1.textContent = \"Mozzarella, garlic, basil, olive oil\";\n\n\n    pictureItem1Container.appendChild(pictureItem1)\n    nameContainer1.appendChild(itemName1);\n    nameContainer1.appendChild(itemDescription1);\n    menuItem1.appendChild(pictureItem1Container);\n    menuItem1.appendChild(nameContainer1);\n\n\n    const menuItem2 = document.createElement(\"div\");\n    menuItem2.classList.add(\"menu-item-container\");\n\n    const pictureItem2Container = document.createElement(\"div\");\n    pictureItem2Container.classList.add(\"picture-container\");\n\n    const pictureItem2 = document.createElement(\"div\");\n    pictureItem2.classList.add(\"picture-items\");\n    pictureItem2.classList.add(\"item-2\")\n\n    const nameContainer2 = document.createElement(\"div\");\n    nameContainer2.classList.add(\"name-container\");\n\n    const itemName2 = document.createElement(\"h2\");\n    itemName2.classList.add(\"item-names-and-prices\");\n    itemName2.textContent = \"Capricciosa\" + '....' + \"23\";\n\n    const itemDescription2 = document.createElement(\"p\");\n    itemDescription2.classList.add(\"item-descriptions\");\n    itemDescription2.textContent = \"Mozzarella, ham, mushroom, aritchoke, tomato\";\n\n    pictureItem2Container.appendChild(pictureItem2)\n    nameContainer2.appendChild(itemName2);\n    nameContainer2.appendChild(itemDescription2);\n    menuItem2.appendChild(pictureItem2Container);\n    menuItem2.appendChild(nameContainer2);\n\n    const menuItem3 = document.createElement(\"div\");\n    menuItem3.classList.add(\"menu-item-container\");\n\n    const pictureItem3Container = document.createElement(\"div\");\n    pictureItem3Container.classList.add(\"picture-container\");\n\n    const pictureItem3 = document.createElement(\"div\");\n    pictureItem3.classList.add(\"picture-items\");\n    pictureItem3.classList.add(\"item-3\")\n\n    const nameContainer3 = document.createElement(\"div\");\n    nameContainer3.classList.add(\"name-container\");\n\n    const itemName3 = document.createElement(\"h2\");\n    itemName3.classList.add(\"item-names-and-prices\");\n    itemName3.textContent = \"Marinara\" + '....' + \"17\";\n\n    const itemDescription3 = document.createElement(\"p\");\n    itemDescription3.classList.add(\"item-descriptions\");\n    itemDescription3.textContent = \"Marinara, garlic, oregano\";\n\n    pictureItem3Container.appendChild(pictureItem3)\n    nameContainer3.appendChild(itemName3);\n    nameContainer3.appendChild(itemDescription3);\n    menuItem3.appendChild(pictureItem3Container);\n    menuItem3.appendChild(nameContainer3);\n\n\n\n    const menuItem4 = document.createElement(\"div\");\n    menuItem4.classList.add(\"menu-item-container\");\n\n    const pictureItem4Container = document.createElement(\"div\");\n    pictureItem4Container.classList.add(\"picture-container\");\n\n    const pictureItem4 = document.createElement(\"div\");\n    pictureItem4.classList.add(\"picture-items\");\n    pictureItem4.classList.add(\"item-4\")\n\n    const nameContainer4 = document.createElement(\"div\");\n    nameContainer4.classList.add(\"name-container\");\n\n    const itemName4 = document.createElement(\"h2\");\n    itemName4.classList.add(\"item-names-and-prices\");\n    itemName4.textContent = \"Diavola\" + '....' + \"28\";\n\n    const itemDescription4 = document.createElement(\"p\");\n    itemDescription4.classList.add(\"item-descriptions\");\n    itemDescription4.textContent = \"Pepperoni, mozzarella, marinara\";\n\n    pictureItem4Container.appendChild(pictureItem4)\n    nameContainer4.appendChild(itemName4);\n    nameContainer4.appendChild(itemDescription4);\n    menuItem4.appendChild(pictureItem4Container);\n    menuItem4.appendChild(nameContainer4);\n\n\n    menuContainer.appendChild(menuItem1);\n    menuContainer.appendChild(menuItem2);\n    menuContainer.appendChild(menuItem3);\n    menuContainer.appendChild(menuItem4);\n\n\n    return menuContainer;\n\n}\n\nfunction loadMenu() {\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createMenu());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/skeleton.js":
/*!*************************!*\
  !*** ./src/skeleton.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction createNav() {\n\n    const nav = document.createElement(\"nav\");\n    nav.classList.add(\"nav\");\n\n    const titleContainer = document.createElement(\"div\");\n    titleContainer.classList.add(\"title-container\")\n\n    const navbarContainer = document.createElement(\"div\");\n    navbarContainer.classList.add(\"navbar-container\");\n\n\n\n    const title = document.createElement(\"h1\");\n    title.classList.add(\"title\");\n    title.textContent = \"Eustorgio Marino\";\n    titleContainer.appendChild(title);\n\n\n\n    const homeBtn = document.createElement(\"button\")\n    homeBtn.classList.add(\"nav-button\");\n    homeBtn.classList.add(\"home-button\");\n    homeBtn.textContent = \"Home\";\n\n    const menuBtn = document.createElement(\"button\");\n    menuBtn.classList.add(\"nav-button\");\n    menuBtn.textContent = \"Menu\";\n\n    const contactBtn = document.createElement(\"button\");\n    contactBtn.classList.add(\"nav-button\");\n    contactBtn.textContent = \"Contact\";\n\n\n    navbarContainer.appendChild(homeBtn);\n    navbarContainer.appendChild(menuBtn);\n    navbarContainer.appendChild(contactBtn);\n\n    nav.appendChild(titleContainer);\n    nav.appendChild(navbarContainer);\n\n    homeBtn.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) {\n            return\n        }\n        setButtonActive(e);\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    })\n\n    menuBtn.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) {\n            return\n        }\n        setButtonActive(e);\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    })\n\n    contactBtn.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) {\n            return\n        }\n        setButtonActive(e);\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    })\n\n    return nav\n}\n\nfunction createMain() {\n\n    const main = document.createElement(\"main\");\n    main.id = \"main\";\n\n    return main\n}\n\nfunction setButtonActive(e) {\n\n    const navButtons = document.querySelectorAll(\".nav-button\");\n\n    navButtons.forEach(button => {\n        if (button.classList.contains(\"active\")) {\n            button.classList.remove(\"active\");\n        }\n\n        e.target.classList.add(\"active\");\n    });\n\n}\n\nfunction createFooter() {\n\n    const footer = document.createElement(\"footer\");\n\n    const footerContainer = document.createElement(\"div\");\n    footerContainer.classList.add(\"footer-container\");\n    footer.appendChild(footerContainer);\n\n    const footerText = document.createElement(\"p\");\n    footerText.classList.add(\"footer-text\");\n    footerText.textContent = \"© Copyright 2023\"\n    footerContainer.appendChild(footerText);\n\n    return footer\n\n}\n\nfunction createPage() {\n    const content = document.getElementById(\"content\");\n\n    content.appendChild(createNav());\n    content.appendChild(createMain());\n    content.appendChild(createFooter());\n\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/skeleton.js?");

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