"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["status"],{

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Define a function to save the tasks in local storage
const saveTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveTasks);

/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCheckboxEventListener": () => (/* binding */ addCheckboxEventListener),
/* harmony export */   "handlerClearText": () => (/* binding */ handlerClearText)
/* harmony export */ });
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save.js */ "./src/save.js");


const addCheckboxEventListener = (checkbox, task, input, tasks) => {
  checkbox.addEventListener('change', () => {
    task.completed = checkbox.checked;
    input.classList.toggle('activated');
    (0,_save_js__WEBPACK_IMPORTED_MODULE_0__["default"])(tasks);
  });
};

const handlerClearText = (tasks) => {
  tasks = tasks.filter((task) => !task.completed);
  tasks.forEach((task, i) => {
    task.index = i + 1;
  });
  (0,_save_js__WEBPACK_IMPORTED_MODULE_0__["default"])(tasks);
  return tasks;
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/status.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xVOztBQUUzQjtBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQVM7QUFDYixHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSxvREFBUztBQUNYO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NhdmUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdGF0dXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVmaW5lIGEgZnVuY3Rpb24gdG8gc2F2ZSB0aGUgdGFza3MgaW4gbG9jYWwgc3RvcmFnZVxuY29uc3Qgc2F2ZVRhc2tzID0gKHRhc2tzKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzYXZlVGFza3M7IiwiaW1wb3J0IHNhdmVUYXNrcyBmcm9tICcuL3NhdmUuanMnO1xuXG5leHBvcnQgY29uc3QgYWRkQ2hlY2tib3hFdmVudExpc3RlbmVyID0gKGNoZWNrYm94LCB0YXNrLCBpbnB1dCwgdGFza3MpID0+IHtcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIHRhc2suY29tcGxldGVkID0gY2hlY2tib3guY2hlY2tlZDtcbiAgICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmF0ZWQnKTtcbiAgICBzYXZlVGFza3ModGFza3MpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyQ2xlYXJUZXh0ID0gKHRhc2tzKSA9PiB7XG4gIHRhc2tzID0gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZWQpO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XG4gICAgdGFzay5pbmRleCA9IGkgKyAxO1xuICB9KTtcbiAgc2F2ZVRhc2tzKHRhc2tzKTtcbiAgcmV0dXJuIHRhc2tzO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=