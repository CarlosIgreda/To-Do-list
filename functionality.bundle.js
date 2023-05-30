"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["functionality"],{

/***/ "./src/functionality.js":
/*!******************************!*\
  !*** ./src/functionality.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "deleteTaskByIndex": () => (/* binding */ deleteTaskByIndex),
/* harmony export */   "editTask": () => (/* binding */ editTask)
/* harmony export */ });
// Define the functions for adding, deleting and editing tasks
const addTask = (description, tasks) => {
  const task = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(task);
  return tasks;
};

const deleteTaskByIndex = (index, tasks) => {
  tasks.splice(index, 1);
  tasks.forEach((task, i) => {
    task.index = i + 1;
  });
  return tasks;
};

const editTask = (index, description, tasks) => {
  tasks[index].description = description;
  return tasks;
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/functionality.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25hbGl0eS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZnVuY3Rpb25hbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZWZpbmUgdGhlIGZ1bmN0aW9ucyBmb3IgYWRkaW5nLCBkZWxldGluZyBhbmQgZWRpdGluZyB0YXNrc1xuZXhwb3J0IGNvbnN0IGFkZFRhc2sgPSAoZGVzY3JpcHRpb24sIHRhc2tzKSA9PiB7XG4gIGNvbnN0IHRhc2sgPSB7XG4gICAgZGVzY3JpcHRpb24sXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICBpbmRleDogdGFza3MubGVuZ3RoICsgMSxcbiAgfTtcbiAgdGFza3MucHVzaCh0YXNrKTtcbiAgcmV0dXJuIHRhc2tzO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRhc2tCeUluZGV4ID0gKGluZGV4LCB0YXNrcykgPT4ge1xuICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XG4gICAgdGFzay5pbmRleCA9IGkgKyAxO1xuICB9KTtcbiAgcmV0dXJuIHRhc2tzO1xufTtcblxuZXhwb3J0IGNvbnN0IGVkaXRUYXNrID0gKGluZGV4LCBkZXNjcmlwdGlvbiwgdGFza3MpID0+IHtcbiAgdGFza3NbaW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHJldHVybiB0YXNrcztcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9