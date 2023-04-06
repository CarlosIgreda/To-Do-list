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
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "saveTasks": () => (/* binding */ saveTasks)
/* harmony export */ });
// Define a function to save the tasks in local storage
const saveTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Define the functions for adding, deleting and editing tasks
const addTask = (description, tasks) => {
  const task = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(task);
  saveTasks(tasks);
  return task;
};

const deleteTask = (index, tasks) => {
  tasks.splice(index, 1);
  tasks.forEach((task, i) => {
    task.index = i;
  });
  saveTasks(tasks);
};

const editTask = (index, description, tasks) => {
  tasks[index].description = description;
  saveTasks(tasks);
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/functionality.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25hbGl0eS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZnVuY3Rpb25hbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZWZpbmUgYSBmdW5jdGlvbiB0byBzYXZlIHRoZSB0YXNrcyBpbiBsb2NhbCBzdG9yYWdlXG5leHBvcnQgY29uc3Qgc2F2ZVRhc2tzID0gKHRhc2tzKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG59O1xuXG4vLyBEZWZpbmUgdGhlIGZ1bmN0aW9ucyBmb3IgYWRkaW5nLCBkZWxldGluZyBhbmQgZWRpdGluZyB0YXNrc1xuZXhwb3J0IGNvbnN0IGFkZFRhc2sgPSAoZGVzY3JpcHRpb24sIHRhc2tzKSA9PiB7XG4gIGNvbnN0IHRhc2sgPSB7XG4gICAgZGVzY3JpcHRpb24sXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICBpbmRleDogdGFza3MubGVuZ3RoICsgMSxcbiAgfTtcbiAgdGFza3MucHVzaCh0YXNrKTtcbiAgc2F2ZVRhc2tzKHRhc2tzKTtcbiAgcmV0dXJuIHRhc2s7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlVGFzayA9IChpbmRleCwgdGFza3MpID0+IHtcbiAgdGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgdGFza3MuZm9yRWFjaCgodGFzaywgaSkgPT4ge1xuICAgIHRhc2suaW5kZXggPSBpO1xuICB9KTtcbiAgc2F2ZVRhc2tzKHRhc2tzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBlZGl0VGFzayA9IChpbmRleCwgZGVzY3JpcHRpb24sIHRhc2tzKSA9PiB7XG4gIHRhc2tzW2luZGV4XS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICBzYXZlVGFza3ModGFza3MpO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=