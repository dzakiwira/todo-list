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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\n\n// Modal\nconst projectModal = document.querySelector('#project-modal');\nconst openModal = document.querySelector('.add-project');\nconst closeModal = document.querySelector('.cancel');\nconst form = document.querySelector('.form');\n\n// Main\nconst addTask = document.querySelector('.add-task');\n\n// Listeners\nform.addEventListener('submit', () => {\n    _render__WEBPACK_IMPORTED_MODULE_0__.getUserProject();\n})\n\nopenModal.addEventListener('click', () => {\n    form.reset();\n    projectModal.showModal();\n})\n\ncloseModal.addEventListener('click', () => {\n    form.reset();\n    projectModal.close();\n})\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(name, desc) {\n        this.name = name;\n        this.desc = desc;\n        this.taskList = [];\n    }\n\n    setName(name) {\n        this.name = name;\n    }\n\n    setDesc(desc) {\n        this.desc = desc;\n    }\n\n    addTask(task) {\n        this.taskList.push(task);\n    }\n\n    deleteTask(delTask) {\n        this.taskList = this.taskList.filter(task => task !== delTask);\n    }\n\n    getName() {\n        return this.name;\n    }\n\n    getDesc() {\n        return this.desc;\n    }\n\n    getTaskList() {\n        return this.taskList;\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUserProject\": () => (/* binding */ getUserProject),\n/* harmony export */   \"loadProjects\": () => (/* binding */ loadProjects)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\n\nconst projectList = new _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\nprojectList.addProject(new _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Project 1', 'Test test test test'));\nprojectList.addProject(new _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Project 2', 'Test test test test'));\n\nloadProjects(projectList);\n\nfunction loadProjects(projects) {\n    const projectSidebarDiv = document.querySelector('.projects'); \n    projectSidebarDiv.innerHTML = '';\n\n    projects.getProjects().forEach((project, index) => {\n        const newProject = document.createElement('div');\n        newProject.classList.add('project-nav');\n        newProject.dataset.value = index;\n        newProject.addEventListener('click', () => {\n            loadMain(project)\n        });\n        newProject.textContent = project.getName();\n        project.addTask(new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Example Task', 'Jan 1 2023'));\n        project.addTask(new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Example Task 2', 'Jan 1 2023'));\n        projectSidebarDiv.appendChild(newProject);\n    });\n\n    console.log(projectList);\n}\n\nfunction loadMain(project) {\n    const mainTitle = document.querySelector('.main-title');\n    const mainDesc = document.querySelector('.main-desc');\n    \n    mainTitle.textContent = project.getName();\n    mainDesc.textContent = project.getDesc();\n    loadTasks(project);\n}\n\nfunction loadTasks(project) {\n    const mainContent = document.querySelector('.main-content');\n    mainContent.innerHTML = '';\n\n    project.getTaskList().forEach((task, index) => {\n        const newTask = document.createElement('div');\n        \n        newTask.classList.add('task');\n        newTask.dataset.value = index\n        newTask.textContent = task.getTaskDesc();\n        mainContent.appendChild(newTask);\n    });\n};\n\nfunction getUserProject() {\n    const projectName = document.getElementById('project').value;\n    const projectDesc = document.getElementById('description').value;\n    \n    addNewProject(projectName, projectDesc);\n    loadProjects(projectList);\n}\n\nfunction addNewProject(projectName, projectDesc) {\n    projectList.addProject(new _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectName, projectDesc));\n}\n\n//# sourceURL=webpack://todo-list/./src/render.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(taskDesc, date) {\n        this.taskDesc = taskDesc;\n        this.date = date;\n    }\n\n    setTaskDesc(taskDesc) {\n        this.taskDesc = taskDesc;\n    }\n\n    getTaskDesc() {\n        return this.taskDesc;\n    }\n\n    setDate(date) {\n        this.date = date;\n    }\n\n    getDate() {\n        return this.date;\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\nclass Todo {\n    constructor() {\n        this.projects = [];\n    }\n\n    addProject(newProject) {\n        this.projects.push(newProject);\n    }\n\n    getProjects() {\n        return this.projects;\n    }\n    \n    deleteProject(projectName) {\n        const projectToDel = this.projects.find(project => project.getName() === projectName);\n        this.projects.splice(this.projects.indexOf(projectToDel), 1);\n    }\n\n}\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

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