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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/auth */ \"./modules/auth.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\n\n\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('2 january 2022');\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/auth.js":
/*!*************************!*\
  !*** ./modules/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst auth = () => {\n\n    const userName = document.querySelectorAll('[name=user_name]'),\n        userEmail = document.querySelectorAll('[name=user_email]'),\n        userPhone = document.querySelectorAll('[name=user_phone]'),\n        userMessage = document.querySelector('[name=user_message]');\n        // console.log(userForm);\n          \n\n    userEmail.forEach(item => {\n        item.addEventListener('input', (e) => {\n            \n             e.target.value = e.target.value.match(/^[a-z0-9!*.\\-_~'@]+/i);\n        \n        });\n    });\n\n    userMessage.addEventListener('input', (e) => {\n       \n        e.target.value = e.target.value.match(/^[а-яёА-ЯЁ -]+/gi);\n        \n       \n    });\n     userName.forEach(name => {\n        name.addEventListener('input', (e) => {\n\n            e.target.value = e.target.value.match(/^[а-яё -]+/gi);\n        });\n     });\n\n    userPhone.forEach(phone => {\n        phone.addEventListener('input', (e) => {\n         e.target.value = e.target.value.match(/^[0-9()-]+/gi);\n        });\n\n    });\n\n    // userName.forEach(nameText => () => {\n    //     console.log(nameText)\n    //     name.addEventListener('blur', (e) => {\n            \n    //         // let testName = /[^а-яё -]+/gi;\n    //         // if(testName.test(name.value) === false) {\n    //         //     e.target.value = e.target.value.replace(/^ +/gm, '') .replace(/^-+/gm, '').slice(0, 1).toUpperCase(0)+ e.target.value.slice(1).toLowerCase(0).replace(/[^а-я]+/gi, '').replace(/\\s+/g, ' ').replace(/-+/g, '-');\n    //         // } else {\n    //         //     e.target.value = e.target.value.replace(/[^а-я]+/gi, '').slice(0, 1).toUpperCase(0) + e.target.value.slice(1).toLowerCase(0).replace(/[a-zA-Z]/gi, '').replace(/\\s+/g, ' ').replace(/-+/g, '-').replace(/[^а-я-\\s]+/gi, '');\n    //         // }\n    // //         console.log(e.target);\n    //     });\n\n    // });\n\n\n    //      inputTextItem.addEventListener('blur', (e) => {\n    //         let testText = /[^а-я-\\s]+/gi;\n    //         if(testText.test(inputTextItem.value) === false){\n    //             inputTextItem.value = inputTextItem.value.replace(/^ +/gm, '') .replace(/^-+/gm, '') /.slice(0, 1).toUpperCase(0) + inputTextItem.value.slice(1).toLowerCase(0).replace(/[^а-яА-я]+/gi, '').replace(/\\s+/g, ' ').replace(/-+/g, '-');\n\n    //         }  else {\n    //             inputTextItem.value = inputTextItem.value.replace(/[^а-яА-я]+/gi, '').slice(0, 1).toUpperCase(0) + inputTextItem.value.slice(1).toLowerCase(0).replace(/[a-zA-Z]/gi, '').replace(/\\s+/g, ' ').replace(/-+/g, '-').replace(/[^а-яА-я-\\s]+/gi, '');\n    //         } \n    //     });\n    // });\n    // emailForm.forEach(emailItem => {\n    //     emailItem.addEventListener('blur', () => {\n    //         let testEmail = /^[^-a-zA-Z0-9!*.-~'@]+/gim;\n    //         if(testEmail.test(emailItem.value) === false){\n    //             emailItem.value = emailItem.value.replace(/[^-a-zA-Z0-9!*.-~'@]/g, '');\n    //         }  else {\n    //             emailItem.value = emailItem.value.replace(/[^-a-zA-Z0-9!*.-~'@]/g, '');\n    //             emailItem.value = emailItem.value.replace(/^[^-a-zA-Z0-9!*.-~'@]/g, '');\n    //         } \n    //     });\n    // });\n\n    // telForm.forEach(telItem => {\n    //     telItem.addEventListener('blur', () => {\n    //         let testTel = /^[^0-9()-]+/gi;\n    //         if(testTel.test(telItem.value) === false){\n    //             telItem.value = telItem.value/ .replace(/[^0-9()-]+/gi, ''); */\n    //         } else {\n    //             telItem.value = telItem.value.replace(/[^0-9()-]/gi, '');\n    //         }\n    //     });\n\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);\n\n//# sourceURL=webpack:///./modules/auth.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst calc = () => {\n\n\n    const calcType = document.querySelector('.calc-type'),\n          inputCalcSquare = document.querySelector('.calc-square'),\n          inputCalcCount = document.querySelector('.calc-count'),\n          inputCalcDay = document.querySelector('.calc-day');\n\n  \n\n\n\n    const checkInput = (input) => {\n        input.addEventListener('input', (e) => {\n        e.target.value = e.target.value.replace(/\\D+/,'');\n        });\n        \n    };\n    checkInput(inputCalcSquare);\n    checkInput(inputCalcCount);\n    checkInput(inputCalcDay);\n\n\n\n\n    \n\n\n\n\n\n\n\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const menuList = document.querySelector(\"menu\"),\n        menuItems = menuList.querySelectorAll(\"ul>li>a\"),\n        scrollBtn = document.querySelector(\"a img\"),\n        body = document.querySelector(\"body\");\n\n    const toggleMenu = () => {\n        body.addEventListener(\"click\", (e) => {\n        if (e.target.closest(\".menu\")) {\n            menuList.classList.add(\"active-menu\");\n        } else if (e.target.closest(\"menu\")) {\n            menuItems.forEach((menuItem) => {\n            if (menuItem === e.target) {\n                e.preventDefault();\n                let menuItemId = menuItem.getAttribute(\"href\");\n                document.querySelector(menuItemId).scrollIntoView({\n                behavior: \"smooth\",\n                block: \"start\",\n                });\n            } else {\n                menuList.classList.remove(\"active-menu\");\n            }\n            });\n        } else if (!e.target.closest(\"menu\")) {\n            menuList.classList.remove(\"active-menu\");\n        }\n        });\n    };\n    toggleMenu();\n\n    scrollBtn.addEventListener(\"click\", (e) => {\n        e.preventDefault();\n        document.querySelector(\"#service-block\").scrollIntoView({\n        behavior: \"smooth\",\n        block: \"start\",\n        });\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst modal = () => {\n\n    const button = document.querySelectorAll('.popup-btn'),\n          modal = document.querySelector('.popup'),\n          closeBtn = modal.querySelector('.popup-close');\n    let width = document.documentElement;\n  \n\n\n\n    button.forEach(btn => {\n       \n        btn.addEventListener('click', () => {\n           \n            if (width.offsetWidth <= 768) {\n                 clearTimeout();\n                modal.style.display = 'block';\n                modal.style.opacity = '1';\n               \n            } else {\n                modal.style.opacity = '0';\n                modal.style.display = 'block';\n                setTimeout(() => {\n                modal.style.opacity = '1';\n                modal.style.transition = '.9s all';\n            }, 200);\n            }\n\n        });\n        \n    });\n    closeBtn.addEventListener('click', () => {\n       \n        if (width.offsetWidth <= 768) {\n            modal.style.display = 'none';\n            clearTimeout();\n        } else {\n            modal.style.opacity = '0';\n            modal.style.transition = '.9s all';\n            setTimeout(() => {\n            modal.style.display = 'none';\n            }, 600);\n        }\n                \n    });\n\n   \n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst slider = () => {\n \n    const sliderBlock = document.querySelector('.portfolio-content'),\n      slides = document.querySelectorAll('.portfolio-item'),\n      sliderDots = document.querySelector('.portfolio-dots');\n\n    const timeInterval = 2000;\n    const arrDots = [];\n      \n    let currentSlide = 0;\n    let interval;\n\n    const checkDots = () => {\n        \n        slides.forEach((item) => {\n            \n            const li = document.createElement('li');\n            li.classList.add('dot');\n            arrDots.push(li);\n            sliderDots.append(li);\n          \n        })\n\n    };\n    checkDots();\n\n\n    const prevSlide = (elems, index, strClass) => {\n      elems[index].classList.remove(strClass);\n    };\n    const nextSlide = (elems, index, strClass) => {\n      elems[index].classList.add(strClass);\n    };\n\n\n    const  autoSlide = () => {\n        prevSlide(slides, currentSlide, 'portfolio-item-active');\n        prevSlide(arrDots, currentSlide, 'dot-active');\n        currentSlide ++;\n\n        if (currentSlide >= slides.length) {\n          currentSlide = 0;\n        }\n        nextSlide(slides, currentSlide, 'portfolio-item-active');\n        nextSlide(arrDots, currentSlide, 'dot-active');\n    };\n\n    const startSlide = (timer = 1500) => {\n        interval = setInterval(autoSlide, timer);\n    };\n\n    const stopSlide = () => {\n        clearInterval(interval);\n    };\n\n    sliderBlock.addEventListener('click', (e) => {\n      e.preventDefault();\n\n      if (!e.target.matches('.dot, .portfolio-btn')) {\n        return;\n      }\n      prevSlide(slides, currentSlide, 'portfolio-item-active');\n      prevSlide(arrDots, currentSlide, 'dot-active');\n\n      if (e.target.matches('#arrow-right')) {\n        currentSlide++;\n      } else if (e.target.matches('#arrow-left')) {\n        currentSlide--;\n      }\n      else if (e.target.classList.contains('dot')) {\n          arrDots.forEach((dot, index) => {\n              if (e.target === dot ) {\n                  currentSlide = index;\n              }\n\n          });\n      }\n\n      if (currentSlide >= slides.length) {\n        currentSlide = 0;\n      }\n      if (currentSlide < 0) {\n        currentSlide = slides.length - 1;\n      }\n      nextSlide(slides, currentSlide, 'portfolio-item-active');\n      nextSlide(arrDots, currentSlide, 'dot-active');\n    });\n\n    sliderBlock.addEventListener('mouseenter', (e) => {\n        if (e.target.matches('.dot, .portfolio-btn')) {\n            stopSlide();\n        }\n        \n    }, true);\n    sliderBlock.addEventListener('mouseleave', (e) => {\n         if (e.target.matches('.dot, .portfolio-btn')) {\n           startSlide(timeInterval);\n        }\n    }, true);\n       \n       \n    startSlide(timeInterval);\n\n\n\n\n\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst tabs = () => {\n\n    const tabContent = document.querySelectorAll('.service-tab'),\n        tabPanel = document.querySelector('.service-header'),\n        tabs = document.querySelectorAll('.service-header-tab');\n\n\n    tabPanel.addEventListener('click', (e) => {\n        if (e.target.closest('.service-header-tab')) {\n            const tabBtn = e.target.closest('.service-header-tab');\n            tabs.forEach((tab, index) => {\n                if (tab === tabBtn) {\n                    tab.classList.add('active');\n                    tabContent[index].classList.remove('d-none');\n                } else {\n                    tab.classList.remove(\"active\");\n                    tabContent[index].classList.add(\"d-none\");\n                }\n            });\n        }\n    });\n\n\n\n\n\n\n\n\n\n\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n\n    const timerHours = document.getElementById('timer-hours'),\n          timerMinutes = document.getElementById('timer-minutes'),\n          timerSeconds = document.getElementById('timer-seconds');\n    let idInterval;\n\n    const getTimeRemaining = () => {\n       \n        let dateStop = new Date(deadline).getTime();\n        let dateNow = new Date().getTime();\n      \n        let timeRemaining = (dateStop - dateNow) / 1000;\n       \n        \n        let hours = Math.floor(timeRemaining / (60 * 60)); // 3. из минут получаем часы\n        let minutes = Math.floor((timeRemaining / 60) % 60); // 2. из секунд получаем минуты\n        let seconds = Math.floor(timeRemaining % 60); // 1. округляем полученное количество милисекунд до целочисленного\n        \n        return { timeRemaining, hours, minutes, seconds};\n           \n         \n    };\n\n    const getZero = (num) => {\n        if (num >= 0 && num < 10) {\n            return `0${num}`;\n        } else {\n            return num;\n        }\n    };\n   \n    \n    const updateClock = () => {\n        let getTime = getTimeRemaining();\n    \n       \n        timerHours.textContent = getZero(getTime.hours);\n        timerMinutes.textContent = getZero(getTime.minutes);\n        timerSeconds.textContent = getZero(getTime.seconds);\n        \n      \n\n\n\n    };\n    updateClock();\n\n    idInterval = setInterval(() => {\n        let getTime = getTimeRemaining();\n        if (getTime.timeRemaining > 0) {\n           updateClock();\n        } else  if (getTime.timeRemaining <= 0) {\n            clearInterval(idInterval);\n\n        }\n    }, 1000);\n\n\n    \n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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