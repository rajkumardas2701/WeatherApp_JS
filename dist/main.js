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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst togglebtn = (element = '', temp = '') => {\n  let currentUnit = '';\n  if (element) {\n    document.getElementById('toggle-btn').addEventListener('click', () => {\n      currentUnit = document.getElementById('res_temp').innerText;\n      if (currentUnit.includes('℃')) {\n        document.getElementById('res_temp').innerText = `Temperature: ${temp[2].far[0]}°F (Min: ${temp[2].far[1]}°F - Max: ${temp[2].far[2]}°F)`;\n        document.getElementById('res_feels').innerText = `Feels Like: ${temp[2].far[3]}°F`;\n        currentUnit = document.getElementById('res_temp').innerText;\n      } else {\n        document.getElementById('res_temp').innerText = `Temperature: ${temp[1].deg[0]}℃ (Min: ${temp[1].deg[1]}℃ - Max: ${temp[1].deg[2]}℃)`;\n        document.getElementById('res_feels').innerText = `Feels Like: ${temp[1].deg[3]}℃`;\n        currentUnit = document.getElementById('res_temp').innerText;\n      }\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglebtn);\n\n\n//# sourceURL=webpack://weatherapp_js/./src/appLogic.js?");

/***/ }),

/***/ "./src/displayControl.js":
/*!*******************************!*\
  !*** ./src/displayControl.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _imgTempGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgTempGenerator */ \"./src/imgTempGenerator.js\");\n/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appLogic */ \"./src/appLogic.js\");\n\n\n\nconst displayController = () => {\n  const content = document.getElementById('content');\n  content.setAttribute('class', 'container');\n\n  const navbar = () => {\n    const nav = document.createElement('NAV');\n    nav.setAttribute('class', 'navbar');\n    content.appendChild(nav);\n\n    const navText = document.createElement('h1');\n    navText.setAttribute('id', 'nav-text');\n    navText.innerText = 'Weather App';\n    nav.appendChild(navText);\n  };\n\n  const displaySearch = () => {\n    const formInput = document.createElement('form');\n    formInput.setAttribute('class', 'form-input');\n    content.appendChild(formInput);\n\n    const formLabel = document.createElement('span');\n    formLabel.setAttribute('id', 'form-label');\n    formLabel.innerHTML = 'City:';\n    formInput.appendChild(formLabel);\n\n    const formText = document.createElement('input');\n    formText.setAttribute('id', 'form-text');\n    formText.placeholder = ' Enter City Name';\n    formInput.appendChild(formText);\n\n    const submit = document.createElement('input');\n    submit.setAttribute('type', 'submit');\n    submit.setAttribute('id', 'form-submit');\n    submit.innerHTML = 'Submit';\n    formInput.appendChild(submit);\n  };\n\n  const clearResult = () => {\n    const main = document.getElementById('result-section');\n    if (main) {\n      main.remove();\n    }\n  };\n\n  const displayLoader = () => {\n    clearResult();\n    const loader = document.createElement('div');\n    loader.setAttribute('id', 'loader');\n    content.appendChild(loader);\n  };\n\n  const displayResults = (data, error) => {\n    document.getElementById('form-text').value = '';\n    const resultSection = document.createElement('div');\n    resultSection.setAttribute('id', 'result-section');\n    content.appendChild(resultSection);\n\n    const loaderElement = document.getElementById('loader');\n\n    if (error) {\n      loaderElement.remove();\n\n      const header = document.createElement('h2');\n      header.setAttribute('id', 'result-header');\n      header.textContent = `${data}!!!`;\n      resultSection.appendChild(header);\n    } else {\n      loaderElement.remove();\n\n      const header = document.createElement('h2');\n      header.setAttribute('id', 'result-header');\n      header.textContent = `${data.name}`;\n      resultSection.appendChild(header);\n\n      const country = document.createElement('P');\n      country.setAttribute('class', 'country_value');\n      country.innerText = `Country: ${data.sys.country}`;\n      resultSection.appendChild(country);\n\n      const results = document.createElement('div');\n      results.setAttribute('class', 'results');\n      resultSection.appendChild(results);\n\n      const left = document.createElement('div');\n      left.setAttribute('class', 'left-side');\n      results.appendChild(left);\n\n      const imgSec = document.createElement('div');\n      imgSec.setAttribute('class', 'image-section');\n      left.appendChild(imgSec);\n\n      const imgText = document.createElement('p');\n      imgText.setAttribute('class', 'weather_value');\n      imgText.innerText = `${data.weather[0].main}`;\n      imgSec.appendChild(imgText);\n\n      const imgDesc = document.createElement('p');\n      imgDesc.setAttribute('class', 'imgDesc');\n      imgDesc.innerText = `${data.weather[0].description}`;\n      imgSec.appendChild(imgDesc);\n\n      const img = document.createElement('img');\n      img.setAttribute('class', 'image');\n      img.setAttribute('src', (0,_imgTempGenerator__WEBPACK_IMPORTED_MODULE_0__.getImage)(data.weather[0].main));\n      imgSec.appendChild(img);\n\n      const latLon = document.createElement('span');\n      latLon.setAttribute('class', 'lat_value');\n      latLon.innerText = `Latitude: ${data.coord.lat}°\n      Longitude: ${data.coord.lon}°`;\n      left.appendChild(latLon);\n\n      const right = document.createElement('div');\n      right.setAttribute('class', 'right-side');\n      results.appendChild(right);\n\n      const temp = document.createElement('span');\n      temp.setAttribute('id', 'res_temp');\n\n      const feels = document.createElement('span');\n      feels.setAttribute('id', 'res_feels');\n\n      const temp1 = [{\n        kel: [data.main.temp, data.main.temp_min, data.main.temp_max, data.main.feels_like],\n      },\n      { deg: [] },\n      { far: [] },\n      ];\n      const tempUpdated = (0,_imgTempGenerator__WEBPACK_IMPORTED_MODULE_0__.temperatures)(temp1);\n\n      temp.innerText = `Temperature: ${(data.main.temp - 273.15).toFixed(2)}℃ (Min: ${(data.main.temp_min - 273.15).toFixed(2)}℃ - Max: ${(data.main.temp_max - 273.15).toFixed(2)}℃)`;\n      feels.innerText = `Feels Like: ${(data.main.feels_like - 273.15).toFixed(2)}℃`;\n\n      right.appendChild(temp);\n      right.appendChild(feels);\n\n      const humidity = document.createElement('span');\n      humidity.setAttribute('class', 'res_value');\n      humidity.innerText = `Humidity: ${data.main.humidity}%`;\n      right.appendChild(humidity);\n\n      const pressure = document.createElement('span');\n      pressure.setAttribute('class', 'res_value');\n      pressure.innerText = `Pressure: ${data.main.pressure} hPa`;\n      right.appendChild(pressure);\n\n      const toggleTemp = document.createElement('input');\n      toggleTemp.setAttribute('id', 'toggle-btn');\n      toggleTemp.setAttribute('type', 'submit');\n      toggleTemp.value = 'Toggle Temperature';\n      right.appendChild(toggleTemp);\n      (0,_appLogic__WEBPACK_IMPORTED_MODULE_1__.default)(toggleTemp, tempUpdated);\n    }\n  };\n\n  return {\n    displaySearch,\n    displayResults,\n    navbar,\n    clearResult,\n    displayLoader,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);\n\n//# sourceURL=webpack://weatherapp_js/./src/displayControl.js?");

/***/ }),

/***/ "./src/imgTempGenerator.js":
/*!*********************************!*\
  !*** ./src/imgTempGenerator.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getImage\": () => /* binding */ getImage,\n/* harmony export */   \"temperatures\": () => /* binding */ temperatures\n/* harmony export */ });\nconst getImage = (value) => {\n  let url = '';\n  if (value === 'Smoke') {\n    url = 'images/smoke.gif';\n  } else if (value === 'Mist') {\n    url = 'images/mist.gif';\n  } else if (value === 'Rain') {\n    url = 'images/rain.gif';\n  } else if (value === 'Clear') {\n    url = 'images/clear.gif';\n  } else if (value === 'Clouds') {\n    url = 'images/clouds.gif';\n  } else if (value === 'Snow') {\n    url = 'images/snow.gif';\n  } else if (value === 'Extreme') {\n    url = 'images/extreme.gif';\n  } else if (value === 'Thunderstorm') {\n    url = 'images/thunderstorm.gif';\n  } else if (value === 'Drizzle') {\n    url = 'images/drizzle.gif';\n  } else if (value === 'Haze') {\n    url = 'images/haze.gif';\n  } else if (value === 'Fog') {\n    url = 'images/fog.gif';\n  }\n  return url;\n};\n\nconst temperatures = (temp) => {\n  for (let i = 0; i < temp[0].kel.length; i += 1) {\n    (temp[1].deg).push((temp[0].kel[i] - 273.15).toFixed(2));\n    (temp[2].far).push((temp[0].kel[i] * (9 / 5) - 459.67).toFixed(2));\n  }\n  return temp;\n};\n\n\n\n//# sourceURL=webpack://weatherapp_js/./src/imgTempGenerator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayControl */ \"./src/displayControl.js\");\n/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appLogic */ \"./src/appLogic.js\");\n/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherData */ \"./src/weatherData.js\");\n\n\n\n\n(0,_displayControl__WEBPACK_IMPORTED_MODULE_0__.default)().navbar();\n(0,_displayControl__WEBPACK_IMPORTED_MODULE_0__.default)().displaySearch();\n(0,_weatherData__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_appLogic__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n//# sourceURL=webpack://weatherapp_js/./src/index.js?");

/***/ }),

/***/ "./src/weatherData.js":
/*!****************************!*\
  !*** ./src/weatherData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _displayControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayControl */ \"./src/displayControl.js\");\n\n\nconst report = async (city) => {\n  (0,_displayControl__WEBPACK_IMPORTED_MODULE_0__.default)().displayLoader();\n  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=83fd08105d85b9cbdd5228466d9d0385`;\n  try {\n    const regEx = /^[4-5][0-9][0-9]$/;\n    let error = false;\n    const response = await fetch(url, { mode: 'cors' });\n    const data = await response.json();\n    if (regEx.test(data.cod)) {\n      error = true;\n      (0,_displayControl__WEBPACK_IMPORTED_MODULE_0__.default)().displayResults(data.message, error);\n    } else {\n      (0,_displayControl__WEBPACK_IMPORTED_MODULE_0__.default)().displayResults(data, error);\n    }\n    return data;\n  } catch (error) {\n    return error;\n  }\n};\n\nconst controller = () => {\n  document.getElementById('form-submit').addEventListener('click', (event) => {\n    event.preventDefault();\n    const cityName = document.getElementById('form-text').value;\n    report(cityName);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controller);\n\n//# sourceURL=webpack://weatherapp_js/./src/weatherData.js?");

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