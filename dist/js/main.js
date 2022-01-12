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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_formSend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/formSend */ \"./modules/formSend.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('17 january 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(100);\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('.portfolio-item', '.portfolio-dots');\r\n(0,_modules_formSend__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\r\n    formId1: 'form1', \r\n    someElement1: [{\r\n        type: 'block',\r\n        id: 'total'\r\n    }],\r\n},\r\n{\r\n    formId2: 'form2',\r\n    someElement2: [{\r\n        type: 'input',\r\n        id: 'total'\r\n    }],\r\n},\r\n{\r\n    formId3: 'form3',\r\n    someElement3: [{\r\n        type: 'block',\r\n        id: 'total'\r\n    }],\r\n});\r\n    \r\n    \r\n    \r\n    \r\n//     {\r\n//     formId1: 'form1',\r\n//     formId2: 'form2',\r\n//     formId3: 'form3',\r\n//     someElement1: [{\r\n//         type: 'block',\r\n//         id: 'total'\r\n//     }],\r\n//     someElement2: [{\r\n//         type: 'input',\r\n//         id: 'total'\r\n//     }],\r\n//     someElement3: [{\r\n//         type: 'block',\r\n//         id: 'total'\r\n//     }]\r\n  \r\n// });\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\n\r\n\r\nconst calc = (price = 100) => {\r\n\r\n\r\n    const calcType = document.querySelector('.calc-type'),\r\n          calcSquare = document.querySelector('.calc-square'),\r\n          calcCount = document.querySelector('.calc-count'),\r\n          calcDay = document.querySelector('.calc-day'),\r\n          calcBlock = document.querySelector('.calc-block'),\r\n          total = document.getElementById('total');\r\n\r\n    let interval;\r\n    let totalValue = 0;\r\n\r\n    const checkInput = (input) => {\r\n        input.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/\\D+/,'');\r\n        });\r\n    };\r\n    checkInput(calcSquare);\r\n    checkInput(calcCount);\r\n    checkInput(calcDay);\r\n\r\n\r\n \r\n    \r\n    \r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n        const calcSquareValue = calcSquare.value;\r\n\r\n        \r\n        let calcCountValue = 1;\r\n        let calcDayValue = 1;\r\n        \r\n        \r\n        if (calcCount.value > 1) {\r\n            calcCountValue += +calcCount.value / 10;\r\n            \r\n        }\r\n\r\n        if (calcDay.value && calcDay.value < 5) {\r\n            calcDayValue = 2;\r\n            \r\n        } else if (calcDay.value && calcDay.value < 10) {\r\n            calcDayValue = 1.5;\r\n            \r\n        } \r\n\r\n        if (calcTypeValue && calcSquareValue) {\r\n            totalValue = +(price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue);\r\n            \r\n        } else {\r\n            totalValue = 0;\r\n        }\r\n        return totalValue;\r\n        \r\n    };\r\n   \r\n\r\n\r\n    calcBlock.addEventListener('change', (e) => {\r\n        if (e.target === calcType || e.target === calcSquare ||\r\n            e.target === calcCount || e.target === calcDay) {\r\n                // clearInterval(interval);\r\n                clearTimeout(interval);\r\n                \r\n                countCalc();\r\n            \r\n                const time = 3000; // время отводимое на перебор цифр\r\n                const step = 100; // шаг перебора\r\n                let n = 0; // число отсчитывается от нуля\r\n                let t = Math.round(time / +totalValue / step);\r\n\r\n                if (totalValue != 0) {\r\n                  \r\n                    interval = setTimeout(() => {\r\n                        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                            duration: 1000,\r\n                            timing(timeFraction) {\r\n                                return timeFraction;\r\n                            },\r\n                            draw(progress) {\r\n                               total.textContent = Math.round(progress * totalValue);\r\n                            }\r\n                        });\r\n                    },200);\r\n                }\r\n               \r\n                \r\n                 \r\n            \r\n            console.log(totalValue);\r\n        };\r\n    });\r\n     \r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/formSend.js":
/*!*****************************!*\
  !*** ./modules/formSend.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formSend = ({formId1, someElement1 = []}, {formId2, someElement2 = []}, {formId3, someElement3 = []}) => {\n\n    const form1 = document.getElementById(formId1),\n        form2 = document.getElementById(formId2),\n        form3 = document.getElementById(formId3),\n        userNames = document.querySelectorAll('[name=user_name]'),\n        userEmails = document.querySelectorAll('[name=user_email]'),\n        userPhones = document.querySelectorAll('[name=user_phone]'),\n        userMessage = document.querySelector('[name=user_message]');\n\n    const statusBlock = document.createElement('div'),\n        statusImg = document.createElement('img');\n    const loadText = 'images/oval.svg',\n        errorText = 'Ошибка...',\n        successText = 'Спасибо! Наш менеджер свами свяжется!';\n    statusBlock.style.color = 'yellow';\n        \n        statusImg.style.cssText = `\n            color: yellow;\n            display: block;\n            margin: 0 auto;\n            text-align:center;\n    `;\n        \n\n\n\n\n    const validEmail = (list) => {\n\n        list.forEach(email => {\n\n            email.addEventListener('blur', (e) => {\n                console.log(e.target.value);\n                let testEmail = /[a-z0-9~*!'_\\-\\.]*@[\\w-]+\\.\\w{2,4}/gi;\n                if (testEmail.test(e.target.value)) {\n                    email.value = e.target.value;\n                } else {\n                    email.value = e.target.value.replace(/[а-яё]+/gi, '').replace(/@+/g, '@').replace(/^[\\-\\s]+/g, '').replace(/[\\-\\s]+$/g, '');\n\n                }\n\n\n            });\n        });\n    };\n\n    const validMessage = () => {\n\n        userMessage.addEventListener('input', (e) => {\n\n            e.target.value = e.target.value.match(/[а-яё0-9 \\-\\.,;:?!]+/gi);\n\n\n        });\n    };\n\n    const validName = (list) => {\n        list.forEach(name => {\n            name.addEventListener('blur', (e) => {\n\n                let testText = /^[а-яё\\- ]+/gi;\n\n                if (testText.test(e.target.value)) {\n\n                    name.value = e.target.value.replace(/^[\\-\\s]+/gm, '').replace(/[\\-\\s]+$/gm, '')[0].toUpperCase() + e.target.value.slice(1).replace(/^[\\-\\s]+/gm, '').replace(/[\\-\\s]+$/gm, '');\n                } else {\n                    name.value = e.target.value.replace(/[^а-яё\\- ]+/gi, '').replace(/^[\\-\\s]+/gm, '').replace(/[\\-\\s]+$/gm, '') + e.target.value.replace(/[^а-яё\\- ]+/gi, '').replace(/^[\\-\\s]+/gm, '').replace(/[\\-\\s]+$/gm, '');\n\n                }\n\n\n            });\n        });\n    };\n\n    const validPhone = (list) => {\n        list.forEach(phone => {\n            phone.addEventListener('blur', (e) => {\n\n                let testPhone = /(\\+7|8)[(]?(\\d{3})[)]?(\\d{3})[-]?(\\d{2})[-]?(\\d{2})/g;\n                console.log(testPhone.test(e.target.value));\n                if (testPhone.test(e.target.value)) {\n                    phone.value = e.target.value;\n                } else {\n                    phone.value = e.target.value.replace(/[а-яa-z]+/g, '').replace(/\\-+/g, '-').replace(/[^\\d\\(\\)\\-\\+]+/g, '').replace(/^[\\-\\s]+/gm, '').replace(/[\\-\\s]+$/gm, '');\n                }\n\n            });\n\n        });\n\n    };\n\n\n    validEmail(userEmails);\n    validMessage();\n    validName(userNames);\n    validPhone(userPhones);\n\n\n\n    // Реализовать проверку введенных данных в поля ввода с помощью события blur(при потере полем ввода фокуса) и заменять их на корректные при необходимости по правилам:\n\n    // Должны удаляться все символы, кроме допустимых\n    // Несколько идущих подряд пробелов или дефисов должны заменяться на один.\n    // Пробелы и дефисы в начале и конце значения должны удаляться.\n    // Для поля type = text Первая буква каждого слова должна приводиться к верхнему регистру, а все остальные— к нижнему.\n\n\n\n\n\n    const validate = (list) => {\n        let success = false;\n\n        const testPhone = /^(\\+7|7|8)?[\\-]?\\(?[489][0-9]{2}\\)?[\\-]?[0-9]{3}[\\-]?[0-9]{2}[\\-]?[0-9]{2}$/;\n        const testName = /^[а-яё ]+$/i;\n        const testMessage = /^[а-яё0-9 \\-\\.,;:?!]+$/gi;\n\n\n        let ttext;\n        let ttext1;\n\n        let eemail;\n\n        let pphohe;\n        let pphone1;\n\n        let mmess;\n        \n\n\n\n\n        list.forEach(input => {\n\n            if (input.closest('[name=user_name]')) {\n                ttext = input.closest('[name=user_name]');\n                ttext = ttext.value;\n            }\n\n            if (input.closest('[name=user_phone]')) {\n                pphohe = input.closest('[name=user_phone]');\n                pphohe = pphohe.value;\n            }\n            if (input.closest('[name=user_email]')) {\n                eemail = input.closest('[name=user_email]');\n                eemail = eemail.value;\n            }\n            if (input.closest('[name=user_message]')) {\n                mmess = input.closest('[name=user_message]');\n                mmess = mmess.value;\n            }\n\n        });\n        //   console.log(eemail);\n        //   console.log(mmess);\n        //   console.log(ttext);\n        ttext1 = testName.test(ttext);\n        //   console.log(ttext1);\n        //   console.log(pphohe);\n        pphone1 = testPhone.test(pphohe);\n        //   console.log(pphone1);\n        // console.log(ttext1 && pphone1);\n\n\n\n        //  mmess1 = testMessage.test(mmess);\n        //  console.log(mmess1);\n\n        // console.log(mmess === undefined);\n\n        if (ttext == '' || eemail == '' || pphohe == '' || mmess == '') {\n            // success = false;\n            alert('Заполните все поля!!!');\n        }\n        if (mmess === undefined && ttext1 && pphone1) {\n\n            success = true;\n            // console.log('YES');\n\n        } else if (mmess && testMessage.test(mmess) && ttext1 && pphone1) {\n\n            success = true;\n            // console.log('YES MM1');\n        }\n\n        return success;\n    };\n\n    const sendData = (data) => {\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\n            method: 'POST',\n            body: JSON.stringify(data),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then(res => res.json());\n    };\n\n    const submitForm = (form, someElement) => {\n        const formElements = form.querySelectorAll('input');\n        const formData = new FormData(form);\n        const formBody = {};\n\n        \n        statusImg.src = loadText;\n        form.append(statusImg);\n        form.append(statusBlock);\n\n\n\n        formData.forEach((val, key) => {\n            formBody[key] = val;\n        });\n        someElement.forEach(elem => {\n            const element = document.getElementById(elem.id);\n\n\n            if (elem.type === 'block') {\n                formBody[elem.id] = element.textContent;\n            } else if (elem.type === 'input') {\n                formBody[elem.id] = element.value;\n            }\n\n        });\n\n\n        if (validate(formElements)) {\n            sendData(formBody)\n                .then(data => {\n                    statusBlock.textContent = successText;\n                    statusImg.src = '';\n                   \n                    formElements.forEach(input => {\n                        input.value = '';\n                        \n                    });\n                    \n                })\n                .catch(error => {\n                    statusBlock.textContent = errorText;\n                });\n\n        } else {\n\n\n            alert('Данные не валидны!!!!');\n            // statusBlock.textContent = errorText;\n            // statusImg.src = '';\n        }\n    };\n\n    \n    const formListener = (form, someElement) => {\n        try {\n            if (!form) {\n                throw new Error('Верните форму на место!!!');\n            }\n            form.addEventListener('submit', (e) => {\n                e.preventDefault();\n                statusBlock.textContent = '';\n                submitForm(form, someElement);\n\n\n            });\n        } catch (error) {\n            console.log(error.message);\n        }\n    };\n    formListener(form1, someElement1);\n    formListener(form2, someElement2);\n    formListener(form3, someElement3);\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formSend);\n\n//# sourceURL=webpack:///./modules/formSend.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\n\r\n\r\nconst animate = ({timing, draw, duration}) => {\r\n\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n\r\n    });\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\n\r\nconst modal = () => {\r\n\r\n    const button = document.querySelectorAll('.popup-btn'),\r\n          modal = document.querySelector('.popup'),\r\n          closeBtn = modal.querySelector('.popup-close');\r\n    let width = document.documentElement;\r\n  \r\n\r\n\r\n\r\n    button.forEach(btn => {\r\n       \r\n        btn.addEventListener('click', () => {\r\n           \r\n            if (width.offsetWidth <= 768) {\r\n                 clearTimeout();\r\n                modal.style.display = 'block';\r\n                modal.style.opacity = '1';\r\n               \r\n            } else {\r\n                modal.style.opacity = '0';\r\n                modal.style.display = 'block';\r\n                setTimeout(() => {\r\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                    duration: 1000,\r\n                    timing(timeFraction) {\r\n                        return timeFraction;\r\n                    },\r\n                    draw(progress) {\r\n                        modal.style.opacity = progress;\r\n                    }\r\n                });\r\n            },200);\r\n        }\r\n\r\n\r\n        });\r\n        \r\n    });\r\n    closeBtn.addEventListener('click', () => {\r\n       \r\n        if (width.offsetWidth <= 768) {\r\n            modal.style.display = 'none';\r\n            clearTimeout();\r\n        } else {\r\n            modal.style.opacity = '0';\r\n            modal.style.transition = '.9s all';\r\n            setTimeout(() => {\r\n            modal.style.display = 'none';\r\n            }, 600);\r\n        }\r\n                \r\n    });\r\n\r\n   \r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (classSlide, classDots, slideActive = 'portfolio-item-active', dotsActive = 'dot-active') => {\n\n\n\n  const sliderBlock = document.querySelector('.portfolio-content'),\n    slides = document.querySelectorAll(classSlide),\n    sliderDots = document.querySelector(classDots);\n\n\n\n  if (!sliderBlock && !slides && !sliderDots) {\n    return;\n  };\n\n  const timeInterval = 2000;\n  const arrDots = [];\n\n  let currentSlide = 0;\n  let interval;\n\n  const checkDots = () => {\n\n    slides.forEach((item) => {\n\n      const li = document.createElement('li');\n      li.classList.add('dot');\n      arrDots.push(li);\n      sliderDots.append(li);\n\n    });\n\n  };\n  checkDots();\n\n\n  const prevSlide = (elems, index, strClass) => {\n    elems[index].classList.remove(strClass);\n  };\n  const nextSlide = (elems, index, strClass) => {\n    elems[index].classList.add(strClass);\n  };\n\n\n  const autoSlide = () => {\n    prevSlide(slides, currentSlide, slideActive);\n    prevSlide(arrDots, currentSlide, dotsActive);\n    currentSlide++;\n\n    if (currentSlide >= slides.length) {\n      currentSlide = 0;\n    }\n    nextSlide(slides, currentSlide, slideActive);\n    nextSlide(arrDots, currentSlide, dotsActive);\n  };\n\n  const startSlide = (timer = 1500) => {\n    interval = setInterval(autoSlide, timer);\n  };\n\n  const stopSlide = () => {\n    clearInterval(interval);\n  };\n\n  sliderBlock.addEventListener('click', (e) => {\n    e.preventDefault();\n\n    if (!e.target.matches('.dot, .portfolio-btn')) {\n      return;\n    }\n    prevSlide(slides, currentSlide, slideActive);\n    prevSlide(arrDots, currentSlide, dotsActive);\n\n    if (e.target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (e.target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (e.target.classList.contains('dot')) {\n      arrDots.forEach((dot, index) => {\n        if (e.target === dot) {\n          currentSlide = index;\n        }\n\n      });\n    }\n\n    if (currentSlide >= slides.length) {\n      currentSlide = 0;\n    }\n    if (currentSlide < 0) {\n      currentSlide = slides.length - 1;\n    }\n    nextSlide(slides, currentSlide, slideActive);\n    nextSlide(arrDots, currentSlide, dotsActive);\n  });\n\n  sliderBlock.addEventListener('mouseenter', (e) => {\n    if (e.target.matches('.dot, .portfolio-btn')) {\n      stopSlide();\n    }\n\n  }, true);\n  sliderBlock.addEventListener('mouseleave', (e) => {\n    if (e.target.matches('.dot, .portfolio-btn')) {\n      startSlide(timeInterval);\n    }\n  }, true);\n\n\n  startSlide(timeInterval);\n\n\n\n\n\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

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