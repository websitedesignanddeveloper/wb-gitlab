(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["main"] = factory();
	else
		root["main"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/actions/projects/new.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/projects/new.ts":
/*!*************************************!*\
  !*** ./src/actions/projects/new.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/* eslint-disable no-param-reassign */\r\nvar api_1 = __webpack_require__(/*! ../../utils/api */ \"./src/utils/api.ts\");\r\nvar helper_1 = __webpack_require__(/*! ../../utils/helper */ \"./src/utils/helper.ts\");\r\nvar argsArr = args.filter(Boolean);\r\nvar projectName = '';\r\nvar isPrivateProject = false;\r\nif (argsArr[argsArr.length - 1] === 'private') {\r\n    projectName = argsArr.slice(0, argsArr.length - 1).join(' ');\r\n    isPrivateProject = true;\r\n}\r\nelse {\r\n    projectName = argsArr.join(' ');\r\n}\r\nif (!projectName) {\r\n    projectName = prompt('Github project name');\r\n}\r\nvar additionalProjectOptions = {\r\n    issues_access_level: isPrivateProject ? 'private' : 'enabled',\r\n    repository_access_level: 'enabled',\r\n    merge_requests_access_level: 'enabled',\r\n    forking_access_level: isPrivateProject ? 'private' : 'enabled',\r\n    builds_access_level: 'enabled',\r\n    wiki_access_level: isPrivateProject ? 'private' : 'enabled',\r\n    snippets_access_level: isPrivateProject ? 'private' : 'enabled',\r\n};\r\nvar projectData = __assign({ name: projectName, pages_access_level: isPrivateProject ? 'private' : 'public', visibility: isPrivateProject ? 'private' : 'public' }, additionalProjectOptions);\r\nvar response = api_1.createNewProject(projectData);\r\nvar result = helper_1.decodeApiResponse(response);\r\nif (result.status >= 400) {\r\n    helper_1.handleErrors(result.status, result.response.message ? result.response.message : result.response.error);\r\n}\r\nelse {\r\n    notify('Project Created', 'success', 3000);\r\n    open(result.response.http_url_to_repo);\r\n    reIndex(['gitlab', 'projects']);\r\n}\r\n\n\n//# sourceURL=webpack://main/./src/actions/projects/new.ts?");

/***/ }),

/***/ "./src/utils/api.ts":
/*!**************************!*\
  !*** ./src/utils/api.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.getAllOrgProjects = exports.getAllOrganizations = exports.rerunPipeline = exports.deletePipeline = exports.createNewPipeline = exports.getAllPipelines = exports.deleteIssue = exports.updateIssue = exports.createNewIssue = exports.getAllIssuesList = exports.deleteMR = exports.mergeMR = exports.getAllMergeRequest = exports.createNewMR = exports.deleteMergedBranches = exports.removeBranch = exports.createNewBranch = exports.listAllBranches = exports.updateProject = exports.removeProject = exports.createNewProject = exports.getAllProjects = exports.getUserInfo = void 0;\r\n/* eslint-disable import/prefer-default-export */\r\nvar request_1 = __importDefault(__webpack_require__(/*! ./request */ \"./src/utils/request.ts\"));\r\nexports.getUserInfo = function () { return request_1.default.get('/user'); };\r\nexports.getAllProjects = function () { return request_1.default.get(\"/projects?membership=true\"); };\r\nexports.createNewProject = function (data) { return request_1.default.post(\"/projects\", data); };\r\nexports.removeProject = function (id) { return request_1.default.delete(\"/projects/\" + id); };\r\nexports.updateProject = function (id, data) { return request_1.default.put(\"/projects/\" + id, data); };\r\nexports.listAllBranches = function (projectId) { return request_1.default.get(\"/projects/\" + projectId + \"/repository/branches\"); };\r\nexports.createNewBranch = function (projectId, data) {\r\n    return request_1.default.post(\"/projects/\" + projectId + \"/repository/branches\", data);\r\n};\r\nexports.removeBranch = function (projectId, branchName) {\r\n    return request_1.default.delete(\"/projects/\" + projectId + \"/repository/branches/\" + branchName);\r\n};\r\nexports.deleteMergedBranches = function (projectId) {\r\n    return request_1.default.delete(\"/projects/\" + projectId + \"/repository/merged_branches\");\r\n};\r\nexports.createNewMR = function (projectId, data) {\r\n    return request_1.default.post(\"/projects/\" + projectId + \"/merge_requests\", data);\r\n};\r\nexports.getAllMergeRequest = function (projectId) {\r\n    return request_1.default.get(\"/projects/\" + projectId + \"/merge_requests?state=opened\");\r\n};\r\nexports.mergeMR = function (projectId, mrId) {\r\n    return request_1.default.put(\"/projects/\" + projectId + \"/merge_requests/\" + mrId + \"/merge\");\r\n};\r\nexports.deleteMR = function (projectId, mrId) {\r\n    return request_1.default.delete(\"/projects/\" + projectId + \"/merge_requests/\" + mrId);\r\n};\r\nexports.getAllIssuesList = function (projectId) { return request_1.default.get(\"/projects/\" + projectId + \"/issues\"); };\r\nexports.createNewIssue = function (projectId, data) {\r\n    return request_1.default.post(\"/projects/\" + projectId + \"/issues\", data);\r\n};\r\nexports.updateIssue = function (projectId, issueId, data) {\r\n    return request_1.default.put(\"/projects/\" + projectId + \"/issues/\" + issueId, data);\r\n};\r\nexports.deleteIssue = function (projectId, issueId) {\r\n    return request_1.default.delete(\"/projects/\" + projectId + \"/issues/\" + issueId);\r\n};\r\nexports.getAllPipelines = function (projectId) { return request_1.default.get(\"/projects/\" + projectId + \"/pipelines\"); };\r\nexports.createNewPipeline = function (projectId, data) {\r\n    return request_1.default.post(\"/projects/\" + projectId + \"/pipeline\", data);\r\n};\r\nexports.deletePipeline = function (project, pipelineId) {\r\n    return request_1.default.delete(\"/projects/\" + project + \"/pipelines/\" + pipelineId);\r\n};\r\nexports.rerunPipeline = function (projectId, pipelineId) {\r\n    return request_1.default.post(\"/projects/\" + projectId + \"/pipelines/\" + pipelineId + \"/retry\");\r\n};\r\nexports.getAllOrganizations = function () { return request_1.default.get(\"/groups\"); };\r\nexports.getAllOrgProjects = function (id) { return request_1.default.get(\"/groups/\" + id + \"/projects\"); };\r\n\n\n//# sourceURL=webpack://main/./src/utils/api.ts?");

/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.store = exports.token = exports.uri = void 0;\r\n/* eslint-disable import/prefer-default-export */\r\nexports.uri = \"https://gitlab.com/api/v4\";\r\nexports.token = VARS['GITLAB_PERSONAL_TOKEN'];\r\nvar storageSetter = {\r\n    setData: function (key, data) {\r\n        localStorage.setItem(key, JSON.stringify(data));\r\n    },\r\n    getData: function (key) {\r\n        return JSON.parse(localStorage.getItem(key));\r\n    },\r\n};\r\nexports.store = storageSetter;\r\n\n\n//# sourceURL=webpack://main/./src/utils/constants.ts?");

/***/ }),

/***/ "./src/utils/helper.ts":
/*!*****************************!*\
  !*** ./src/utils/helper.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.handleErrors = exports.decodeApiResponse = exports.api = void 0;\r\n/* eslint-disable default-case */\r\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./src/utils/constants.ts\");\r\nfunction api(endpoint) {\r\n    return \"\" + constants_1.uri + endpoint;\r\n}\r\nexports.api = api;\r\nfunction decodeApiResponse(apiResponse) {\r\n    var result = apiResponse;\r\n    if (!result.response) {\r\n        return {\r\n            response: {},\r\n            status: result.status,\r\n        };\r\n    }\r\n    return {\r\n        response: JSON.parse(result.response),\r\n        status: result.status,\r\n    };\r\n}\r\nexports.decodeApiResponse = decodeApiResponse;\r\nexports.handleErrors = function (status, response) {\r\n    switch (status) {\r\n        case 400:\r\n        case 401:\r\n        case 403:\r\n        case 404:\r\n        case 405:\r\n        case 406:\r\n        case 500:\r\n            notify(response, 'error', 3000);\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://main/./src/utils/helper.ts?");

/***/ }),

/***/ "./src/utils/request.ts":
/*!******************************!*\
  !*** ./src/utils/request.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./src/utils/constants.ts\");\r\nvar helper_1 = __webpack_require__(/*! ./helper */ \"./src/utils/helper.ts\");\r\nvar commonHeaders = {\r\n    \"Private-Token\": \"\" + constants_1.token,\r\n    \"content-type\": \"application/json\",\r\n};\r\nvar Request = /** @class */ (function () {\r\n    function Request() {\r\n        this.api = helper_1.api;\r\n    }\r\n    Request.prototype.get = function (uri, headers) {\r\n        if (headers === void 0) { headers = {}; }\r\n        return httpGet(this.api(uri), __assign(__assign({}, commonHeaders), headers));\r\n    };\r\n    Request.prototype.delete = function (uri, data, headers) {\r\n        if (data === void 0) { data = {}; }\r\n        if (headers === void 0) { headers = {}; }\r\n        return httpDelete(this.api(uri), JSON.stringify(data), __assign(__assign({}, commonHeaders), headers));\r\n    };\r\n    Request.prototype.put = function (uri, data, headers) {\r\n        if (data === void 0) { data = {}; }\r\n        if (headers === void 0) { headers = {}; }\r\n        return httpPut(this.api(uri), JSON.stringify(data), __assign(__assign({}, commonHeaders), headers));\r\n    };\r\n    Request.prototype.post = function (uri, data, headers) {\r\n        if (data === void 0) { data = {}; }\r\n        if (headers === void 0) { headers = {}; }\r\n        return httpPost(this.api(uri), JSON.stringify(data), __assign(__assign({}, commonHeaders), headers));\r\n    };\r\n    return Request;\r\n}());\r\nvar request = new Request();\r\nexports.default = request;\r\n\n\n//# sourceURL=webpack://main/./src/utils/request.ts?");

/***/ })

/******/ });
});