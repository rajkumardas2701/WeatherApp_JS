/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/appLogic.js":
/*!*************************!*\
  !*** ./src/appLogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherData */ \"./src/weatherData.js\");\n\n\nconst controller = () => {\n  document.getElementById('form-submit').addEventListener('click', (event) => {\n    event.preventDefault();\n    const cityName = document.getElementById('form-text').value;\n    (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.default)(cityName);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controller);\n\n//# sourceURL=webpack://weatherapp_js/./src/appLogic.js?");

/***/ }),

/***/ "./src/displayControl.js":
/*!*******************************!*\
  !*** ./src/displayControl.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _imageGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageGenerator */ \"./src/imageGenerator.js\");\n\n\nconst displayController = () => {\n  const content = document.getElementById('content');\n  content.setAttribute('class', 'container');\n\n  const navbar = () => {\n    const nav = document.createElement('NAV');\n    nav.setAttribute('class', 'navbar');\n    content.appendChild(nav);\n\n    const navText = document.createElement('h1');\n    navText.setAttribute('id', 'nav-text');\n    navText.innerText = 'Weather App';\n    nav.appendChild(navText);\n  };\n\n  const displaySearch = () => {\n    const formInput = document.createElement('form');\n    formInput.setAttribute('class', 'form-input');\n    content.appendChild(formInput);\n\n    const formLabel = document.createElement('span');\n    formLabel.setAttribute('id', 'form-label');\n    formLabel.innerHTML = 'City:';\n    formInput.appendChild(formLabel);\n\n    const formText = document.createElement('input');\n    formText.setAttribute('id', 'form-text');\n    formText.placeholder = ' Enter City Name';\n    formInput.appendChild(formText);\n\n    const submit = document.createElement('input');\n    submit.setAttribute('type', 'submit');\n    submit.setAttribute('id', 'form-submit');\n    submit.innerHTML = 'Submit';\n    formInput.appendChild(submit);\n  };\n\n  const clearResult = () => {\n    const main = document.getElementById('result-section');\n    if (main) {\n      main.remove();\n    }\n  };\n\n  const displayResults = (data, error) => {\n    document.getElementById('form-text').value = '';\n    const resultSection = document.createElement('div');\n    resultSection.setAttribute('id', 'result-section');\n    content.appendChild(resultSection);\n\n    if (error) {\n      const header = document.createElement('h2');\n      header.setAttribute('id', 'result-header');\n      header.setAttribute('class', 'error-msg');\n      header.textContent = `${data}!!!`;\n      resultSection.appendChild(header);\n    } else {\n      const header = document.createElement('h2');\n      header.setAttribute('id', 'result-header');\n      header.textContent = `>> ${data.name} <<`;\n      resultSection.appendChild(header);\n\n      const country = document.createElement('P');\n      country.setAttribute('class', 'country_value');\n      country.innerText = `Country: ${data.sys.country}`;\n      resultSection.appendChild(country);\n\n      const results = document.createElement('div');\n      results.setAttribute('class', 'results');\n      resultSection.appendChild(results);\n\n      const left = document.createElement('div');\n      left.setAttribute('class', 'left-side');\n      results.appendChild(left);\n\n      const imgSec = document.createElement('div');\n      imgSec.setAttribute('class', 'image-section');\n      left.appendChild(imgSec);\n\n      const imgText = document.createElement('p');\n      imgText.setAttribute('class', 'weather_value');\n      imgText.innerText = `${data.weather[0].main}`;\n      imgSec.appendChild(imgText);\n\n      const img = document.createElement('img');\n      img.setAttribute('class', 'image');\n      img.setAttribute('src', (0,_imageGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(data.weather[0].main));\n      imgSec.appendChild(img);\n\n      const latLon = document.createElement('span');\n      latLon.setAttribute('class', 'lat_value');\n      latLon.innerText = `Latitude: ${data.coord.lat}°\n      Longitude: ${data.coord.lon}°`;\n      left.appendChild(latLon);\n\n      const right = document.createElement('div');\n      right.setAttribute('class', 'right-side');\n      results.appendChild(right);\n\n      const temp = document.createElement('span');\n      temp.setAttribute('class', 'res_value');\n      temp.innerText = `Temperature: ${(data.main.temp - 273.15).toFixed(2)}℃ (Min: ${(data.main.temp_min - 273.15).toFixed(2)}℃ - Max: ${(data.main.temp_max - 273.15).toFixed(2)}℃)`;\n      right.appendChild(temp);\n\n      const feels = document.createElement('span');\n      feels.setAttribute('class', 'res_value');\n      feels.innerText = `Feels Like: ${(data.main.feels_like - 273.15).toFixed(2)}℃`;\n      right.appendChild(feels);\n\n      const humidity = document.createElement('span');\n      humidity.setAttribute('class', 'res_value');\n      humidity.innerText = `Humidity: ${data.main.humidity}%`;\n      right.appendChild(humidity);\n\n      const pressure = document.createElement('span');\n      pressure.setAttribute('class', 'res_value');\n      pressure.innerText = `Pressure: ${data.main.pressure} hPa`;\n      right.appendChild(pressure);\n    }\n  };\n\n  return {\n    displaySearch,\n    displayResults,\n    navbar,\n    clearResult,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);\n\n//# sourceURL=webpack://weatherapp_js/./src/displayControl.js?");

/***/ }),

/***/ "./src/imageGenerator.js":
/*!*******************************!*\
  !*** ./src/imageGenerator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst getImage = (value) => {\n  let url = '';\n  if (value === 'Smoke') {\n    url = 'images/smoke.gif';\n  } else if (value === 'Mist') {\n    url = 'images/mist.gif';\n  } else if (value === 'Rain') {\n    url = 'images/rain.gif';\n  } else if (value === 'Clear') {\n    url = 'images/clear.gif';\n  } else if (value === 'Clouds') {\n    url = 'images/clouds.gif';\n  } else if (value === 'Snow') {\n    url = 'images/snow.gif';\n  } else if (value === 'Extreme') {\n    url = 'images/extreme.gif';\n  } else if (value === 'Thunderstorm') {\n    url = 'images/thunderstorm.gif';\n  } else if (value === 'Drizzle') {\n    url = 'images/drizzle.gif';\n  } else if (value === 'Haze') {\n    url = 'images/haze.gif';\n  } else if (value === 'Fog') {\n    url = 'images/fog.gif';\n  }\n  return url;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getImage);\n\n//# sourceURL=webpack://weatherapp_js/./src/imageGenerator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayControl */ \"./src/displayControl.js\");\n/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appLogic */ \"./src/appLogic.js\");\n// import report from './weatherData';\n\n\n\n// report();\n(0,_displayControl__WEBPACK_IMPORTED_MODULE_0__.default)().navbar();\n(0,_displayControl__WEBPACK_IMPORTED_MODULE_0__.default)().displaySearch();\n(0,_appLogic__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n//# sourceURL=webpack://weatherapp_js/./src/index.js?");

/***/ }),

/***/ "./src/weatherData.js":
/*!****************************!*\
  !*** ./src/weatherData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _displayControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayControl */ \"./src/displayControl.js\");\n\n\nconst report = async (city) => {\n  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0667f5da1705bdf0d4b3c047cf3ab568`;\n  try {\n    const regEx = /^[4-5][0-9][0-9]$/;\n    let error = false;\n    const response = await fetch(url, { mode: 'cors' });\n    const data = await response.json();\n    if (regEx.test(data.cod)) {\n      error = true;\n      (0,_displayControl__WEBPACK_IMPORTED_MODULE_0__.default)().clearResult();\n      (0,_displayControl__WEBPACK_IMPORTED_MODULE_0__.default)().displayResults(data.message, error);\n    } else {\n      (0,_displayControl__WEBPACK_IMPORTED_MODULE_0__.default)().clearResult();\n      (0,_displayControl__WEBPACK_IMPORTED_MODULE_0__.default)().displayResults(data, error);\n    }\n    return data;\n  } catch (error) {\n    return error;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (report);\n\n//# sourceURL=webpack://weatherapp_js/./src/weatherData.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;