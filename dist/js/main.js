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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/auth */ \"./modules/auth.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('2 january 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/auth.js":
/*!*************************!*\
  !*** ./modules/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst auth = () => {\r\n\r\n    const userName = document.querySelectorAll('[name=user_name]'),\r\n        userEmail = document.querySelectorAll('[name=user_email]'),\r\n        userPhone = document.querySelectorAll('[name=user_phone]'),\r\n        userMessage = document.querySelector('[name=user_message]');\r\n        // console.log(userForm);\r\n          \r\n\r\n    userEmail.forEach(item => {\r\n        item.addEventListener('input', (e) => {\r\n            \r\n             e.target.value = e.target.value.match(/^[a-z0-9!*.\\-_~'@]+/i);\r\n        \r\n        });\r\n    });\r\n\r\n    userMessage.addEventListener('input', (e) => {\r\n       \r\n        e.target.value = e.target.value.match(/^[а-яёА-ЯЁ -]+/gi);\r\n        \r\n       \r\n    });\r\n     userName.forEach(name => {\r\n        name.addEventListener('input', (e) => {\r\n\r\n            e.target.value = e.target.value.match(/^[а-яё -]+/gi);\r\n        });\r\n     });\r\n\r\n    userPhone.forEach(phone => {\r\n        phone.addEventListener('input', (e) => {\r\n         e.target.value = e.target.value.match(/^[0-9()-]+/gi);\r\n        });\r\n\r\n    });\r\n\r\n    // userName.forEach(nameText => () => {\r\n    //     console.log(nameText)\r\n    //     name.addEventListener('blur', (e) => {\r\n            \r\n    //         // let testName = /[^а-яё -]+/gi;\r\n    //         // if(testName.test(name.value) === false) {\r\n    //         //     e.target.value = e.target.value.replace(/^ +/gm, '') .replace(/^-+/gm, '').slice(0, 1).toUpperCase(0)+ e.target.value.slice(1).toLowerCase(0).replace(/[^а-я]+/gi, '').replace(/\\s+/g, ' ').replace(/-+/g, '-');\r\n    //         // } else {\r\n    //         //     e.target.value = e.target.value.replace(/[^а-я]+/gi, '').slice(0, 1).toUpperCase(0) + e.target.value.slice(1).toLowerCase(0).replace(/[a-zA-Z]/gi, '').replace(/\\s+/g, ' ').replace(/-+/g, '-').replace(/[^а-я-\\s]+/gi, '');\r\n    //         // }\r\n    // //         console.log(e.target);\r\n    //     });\r\n\r\n    // });\r\n\r\n\r\n    //      inputTextItem.addEventListener('blur', (e) => {\r\n    //         let testText = /[^а-я-\\s]+/gi;\r\n    //         if(testText.test(inputTextItem.value) === false){\r\n    //             inputTextItem.value = inputTextItem.value.replace(/^ +/gm, '') .replace(/^-+/gm, '') /.slice(0, 1).toUpperCase(0) + inputTextItem.value.slice(1).toLowerCase(0).replace(/[^а-яА-я]+/gi, '').replace(/\\s+/g, ' ').replace(/-+/g, '-');\r\n\r\n    //         }  else {\r\n    //             inputTextItem.value = inputTextItem.value.replace(/[^а-яА-я]+/gi, '').slice(0, 1).toUpperCase(0) + inputTextItem.value.slice(1).toLowerCase(0).replace(/[a-zA-Z]/gi, '').replace(/\\s+/g, ' ').replace(/-+/g, '-').replace(/[^а-яА-я-\\s]+/gi, '');\r\n    //         } \r\n    //     });\r\n    // });\r\n    // emailForm.forEach(emailItem => {\r\n    //     emailItem.addEventListener('blur', () => {\r\n    //         let testEmail = /^[^-a-zA-Z0-9!*.-~'@]+/gim;\r\n    //         if(testEmail.test(emailItem.value) === false){\r\n    //             emailItem.value = emailItem.value.replace(/[^-a-zA-Z0-9!*.-~'@]/g, '');\r\n    //         }  else {\r\n    //             emailItem.value = emailItem.value.replace(/[^-a-zA-Z0-9!*.-~'@]/g, '');\r\n    //             emailItem.value = emailItem.value.replace(/^[^-a-zA-Z0-9!*.-~'@]/g, '');\r\n    //         } \r\n    //     });\r\n    // });\r\n\r\n    // telForm.forEach(telItem => {\r\n    //     telItem.addEventListener('blur', () => {\r\n    //         let testTel = /^[^0-9()-]+/gi;\r\n    //         if(testTel.test(telItem.value) === false){\r\n    //             telItem.value = telItem.value/ .replace(/[^0-9()-]+/gi, ''); */\r\n    //         } else {\r\n    //             telItem.value = telItem.value.replace(/[^0-9()-]/gi, '');\r\n    //         }\r\n    //     });\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);\n\n//# sourceURL=webpack:///./modules/auth.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst calc = () => {\r\n\r\n\r\n    const calcType = document.querySelector('.calc-type'),\r\n          inputCalcSquare = document.querySelector('.calc-square'),\r\n          inputCalcCount = document.querySelector('.calc-count'),\r\n          inputCalcDay = document.querySelector('.calc-day');\r\n\r\n  \r\n\r\n\r\n\r\n    const checkInput = (input) => {\r\n        input.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/\\D+/,'');\r\n        });\r\n        \r\n    };\r\n    checkInput(inputCalcSquare);\r\n    checkInput(inputCalcCount);\r\n    checkInput(inputCalcDay);\r\n\r\n\r\n\r\n\r\n    \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuList = document.querySelector(\"menu\"),\r\n        menuItems = menuList.querySelectorAll(\"ul>li>a\"),\r\n        scrollBtn = document.querySelector(\"a img\"),\r\n        body = document.querySelector(\"body\");\r\n\r\n    const toggleMenu = () => {\r\n        body.addEventListener(\"click\", (e) => {\r\n        if (e.target.closest(\".menu\")) {\r\n            menuList.classList.add(\"active-menu\");\r\n        } else if (e.target.closest(\"menu\")) {\r\n            menuItems.forEach((menuItem) => {\r\n            if (menuItem === e.target) {\r\n                e.preventDefault();\r\n                let menuItemId = menuItem.getAttribute(\"href\");\r\n                document.querySelector(menuItemId).scrollIntoView({\r\n                behavior: \"smooth\",\r\n                block: \"start\",\r\n                });\r\n            } else {\r\n                menuList.classList.remove(\"active-menu\");\r\n            }\r\n            });\r\n        } else if (!e.target.closest(\"menu\")) {\r\n            menuList.classList.remove(\"active-menu\");\r\n        }\r\n        });\r\n    };\r\n    toggleMenu();\r\n\r\n    scrollBtn.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n        document.querySelector(\"#service-block\").scrollIntoView({\r\n        behavior: \"smooth\",\r\n        block: \"start\",\r\n        });\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst modal = () => {\r\n\r\n    const button = document.querySelectorAll('.popup-btn'),\r\n          modal = document.querySelector('.popup'),\r\n          closeBtn = modal.querySelector('.popup-close');\r\n    let width = document.documentElement;\r\n  \r\n\r\n\r\n\r\n    button.forEach(btn => {\r\n       \r\n        btn.addEventListener('click', () => {\r\n           \r\n            if (width.offsetWidth <= 768) {\r\n                 clearTimeout();\r\n                modal.style.display = 'block';\r\n                modal.style.opacity = '1';\r\n               \r\n            } else {\r\n                modal.style.opacity = '0';\r\n                modal.style.display = 'block';\r\n                setTimeout(() => {\r\n                modal.style.opacity = '1';\r\n                modal.style.transition = '.9s all';\r\n            }, 200);\r\n            }\r\n\r\n        });\r\n        \r\n    });\r\n    closeBtn.addEventListener('click', () => {\r\n       \r\n        if (width.offsetWidth <= 768) {\r\n            modal.style.display = 'none';\r\n            clearTimeout();\r\n        } else {\r\n            modal.style.opacity = '0';\r\n            modal.style.transition = '.9s all';\r\n            setTimeout(() => {\r\n            modal.style.display = 'none';\r\n            }, 600);\r\n        }\r\n                \r\n    });\r\n\r\n   \r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst slider = () => {\r\n \r\n    const sliderBlock = document.querySelector('.portfolio-content'),\r\n      slides = document.querySelectorAll('.portfolio-item'),\r\n      sliderDots = document.querySelector('.portfolio-dots');\r\n\r\n    const timeInterval = 2000;\r\n    const arrDots = [];\r\n      \r\n    let currentSlide = 0;\r\n    let interval;\r\n\r\n    const checkDots = () => {\r\n        \r\n        slides.forEach((item) => {\r\n            \r\n            const li = document.createElement('li');\r\n            li.classList.add('dot');\r\n            arrDots.push(li);\r\n            sliderDots.append(li);\r\n          \r\n        })\r\n\r\n    };\r\n    checkDots();\r\n\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n      elems[index].classList.remove(strClass);\r\n    };\r\n    const nextSlide = (elems, index, strClass) => {\r\n      elems[index].classList.add(strClass);\r\n    };\r\n\r\n\r\n    const  autoSlide = () => {\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n        prevSlide(arrDots, currentSlide, 'dot-active');\r\n        currentSlide ++;\r\n\r\n        if (currentSlide >= slides.length) {\r\n          currentSlide = 0;\r\n        }\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n        nextSlide(arrDots, currentSlide, 'dot-active');\r\n    };\r\n\r\n    const startSlide = (timer = 1500) => {\r\n        interval = setInterval(autoSlide, timer);\r\n    };\r\n\r\n    const stopSlide = () => {\r\n        clearInterval(interval);\r\n    };\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n\r\n      if (!e.target.matches('.dot, .portfolio-btn')) {\r\n        return;\r\n      }\r\n      prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n      prevSlide(arrDots, currentSlide, 'dot-active');\r\n\r\n      if (e.target.matches('#arrow-right')) {\r\n        currentSlide++;\r\n      } else if (e.target.matches('#arrow-left')) {\r\n        currentSlide--;\r\n      }\r\n      else if (e.target.classList.contains('dot')) {\r\n          arrDots.forEach((dot, index) => {\r\n              if (e.target === dot ) {\r\n                  currentSlide = index;\r\n              }\r\n\r\n          });\r\n      }\r\n\r\n      if (currentSlide >= slides.length) {\r\n        currentSlide = 0;\r\n      }\r\n      if (currentSlide < 0) {\r\n        currentSlide = slides.length - 1;\r\n      }\r\n      nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n      nextSlide(arrDots, currentSlide, 'dot-active');\r\n    });\r\n\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            stopSlide();\r\n        }\r\n        \r\n    }, true);\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n         if (e.target.matches('.dot, .portfolio-btn')) {\r\n           startSlide(timeInterval);\r\n        }\r\n    }, true);\r\n       \r\n       \r\n    startSlide(timeInterval);\r\n\r\n\r\n\r\n\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst tabs = () => {\r\n\r\n    const tabContent = document.querySelectorAll('.service-tab'),\r\n        tabPanel = document.querySelector('.service-header'),\r\n        tabs = document.querySelectorAll('.service-header-tab');\r\n\r\n\r\n    tabPanel.addEventListener('click', (e) => {\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab');\r\n            tabs.forEach((tab, index) => {\r\n                if (tab === tabBtn) {\r\n                    tab.classList.add('active');\r\n                    tabContent[index].classList.remove('d-none');\r\n                } else {\r\n                    tab.classList.remove(\"active\");\r\n                    tabContent[index].classList.add(\"d-none\");\r\n                }\r\n            })\r\n        }\r\n    });\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n\r\n    const timerHours = document.getElementById('timer-hours'),\r\n          timerMinutes = document.getElementById('timer-minutes'),\r\n          timerSeconds = document.getElementById('timer-seconds');\r\n    let idInterval;\r\n\r\n    const getTimeRemaining = () => {\r\n       \r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n      \r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n       \r\n        \r\n        let hours = Math.floor(timeRemaining / (60 * 60)); // 3. из минут получаем часы\r\n        let minutes = Math.floor((timeRemaining / 60) % 60); // 2. из секунд получаем минуты\r\n        let seconds = Math.floor(timeRemaining % 60); // 1. округляем полученное количество милисекунд до целочисленного\r\n        \r\n        return { timeRemaining, hours, minutes, seconds};\r\n           \r\n         \r\n    };\r\n\r\n    const getZero = (num) => {\r\n        if (num >= 0 && num < 10) {\r\n            return `0${num}`;\r\n        } else {\r\n            return num;\r\n        }\r\n    };\r\n   \r\n    \r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n    \r\n       \r\n        timerHours.textContent = getZero(getTime.hours);\r\n        timerMinutes.textContent = getZero(getTime.minutes);\r\n        timerSeconds.textContent = getZero(getTime.seconds);\r\n        \r\n      \r\n\r\n\r\n\r\n    };\r\n    updateClock();\r\n\r\n    idInterval = setInterval(() => {\r\n        let getTime = getTimeRemaining();\r\n        if (getTime.timeRemaining > 0) {\r\n           updateClock();\r\n        } else  if (getTime.timeRemaining <= 0) {\r\n            clearInterval(idInterval);\r\n\r\n        }\r\n    }, 1000);\r\n\r\n\r\n    \r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;