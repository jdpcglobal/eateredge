"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/verify-otp";
exports.ids = ["pages/api/verify-otp"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fverify-otp&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Cverify-otp.js&middlewareConfigBase64=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fverify-otp&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Cverify-otp.js&middlewareConfigBase64=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _src_pages_api_verify_otp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src\\pages\\api\\verify-otp.js */ \"(api)/./src/pages/api/verify-otp.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_verify_otp_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_verify_otp_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/verify-otp\",\n        pathname: \"/api/verify-otp\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _src_pages_api_verify_otp_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRnZlcmlmeS1vdHAmcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZzcmMlNUNwYWdlcyU1Q2FwaSU1Q3ZlcmlmeS1vdHAuanMmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ0w7QUFDMUQ7QUFDNkQ7QUFDN0Q7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLHlEQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLGVBQWUsd0VBQUssQ0FBQyx5REFBUTtBQUNwQztBQUNPLHdCQUF3QixnSEFBbUI7QUFDbEQ7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Lz9jZWI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9zcmNcXFxccGFnZXNcXFxcYXBpXFxcXHZlcmlmeS1vdHAuanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS92ZXJpZnktb3RwXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdmVyaWZ5LW90cFwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fverify-otp&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Cverify-otp.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./src/models/Otp.js":
/*!***************************!*\
  !*** ./src/models/Otp.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst otpSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    mobileNumber: {\n        type: String,\n        required: true\n    },\n    otp: {\n        type: String,\n        required: true\n    },\n    resendCount: {\n        type: Number,\n        default: 1\n    },\n    lastSent: {\n        type: Date,\n        default: Date.now\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).OTP || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"OTP\", otpSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbW9kZWxzL090cC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsWUFBWSxJQUFJRCx3REFBZSxDQUFDO0lBQ3BDRyxjQUFjO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUM3Q0MsS0FBSztRQUFFSCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDcENFLGFBQWE7UUFBRUosTUFBTUs7UUFBUUMsU0FBUztJQUFDO0lBQ3ZDQyxVQUFVO1FBQUVQLE1BQU1RO1FBQU1GLFNBQVNFLEtBQUtDLEdBQUc7SUFBQztBQUc1QztBQUlBLGlFQUFlYix3REFBZSxDQUFDZSxHQUFHLElBQUlmLHFEQUFjLENBQUMsT0FBT0MsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbW9kZWxzL090cC5qcz9hMTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBvdHBTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBtb2JpbGVOdW1iZXI6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIG90cDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgcmVzZW5kQ291bnQ6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAxfSwgLy8gQ291bnQgZm9yIHJlc2VuZCBhdHRlbXB0c1xyXG4gIGxhc3RTZW50OiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93IH0sIC8vIExhc3QgT1RQIHNlbnQgdGltZVxyXG4gXHJcbiBcclxufSk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5PVFAgfHwgbW9uZ29vc2UubW9kZWwoJ09UUCcsIG90cFNjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIm90cFNjaGVtYSIsIlNjaGVtYSIsIm1vYmlsZU51bWJlciIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm90cCIsInJlc2VuZENvdW50IiwiTnVtYmVyIiwiZGVmYXVsdCIsImxhc3RTZW50IiwiRGF0ZSIsIm5vdyIsIm1vZGVscyIsIk9UUCIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/models/Otp.js\n");

/***/ }),

/***/ "(api)/./src/models/user.js":
/*!****************************!*\
  !*** ./src/models/user.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    userName: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    mobileNumber: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    isVerified: {\n        type: Boolean,\n        required: true,\n        default: false\n    }\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbW9kZWxzL3VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGFBQWEsSUFBSUQsd0RBQWUsQ0FBQztJQUNyQ0csVUFBVTtRQUFFQyxNQUFNQztRQUFRQyxVQUFVO1FBQU1DLFFBQVE7SUFBSztJQUN2REMsY0FBYztRQUFFSixNQUFNQztRQUFRQyxVQUFVO1FBQU1DLFFBQVE7SUFBSztJQUMzREUsWUFBWTtRQUFFTCxNQUFNTTtRQUFTSixVQUFVO1FBQU1LLFNBQVM7SUFBSztBQUM3RDtBQUVBLE1BQU1DLE9BQU9aLHdEQUFlLENBQUNZLElBQUksSUFBSVoscURBQWMsQ0FBQyxRQUFRQztBQUU1RCxpRUFBZVcsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbW9kZWxzL3VzZXIuanM/NzBiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIHVzZXJOYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxyXG4gIG1vYmlsZU51bWJlcjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcclxuICBpc1ZlcmlmaWVkOiB7IHR5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiBmYWxzZX0sXHJcbn0pO1xyXG5cclxuY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgdXNlclNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJ1c2VyU2NoZW1hIiwiU2NoZW1hIiwidXNlck5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJtb2JpbGVOdW1iZXIiLCJpc1ZlcmlmaWVkIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJVc2VyIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/models/user.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/verify-otp.js":
/*!*************************************!*\
  !*** ./src/pages/api/verify-otp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_Otp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Otp */ \"(api)/./src/models/Otp.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user */ \"(api)/./src/models/user.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n\n\n // Assuming you have a User model\n\n// Function to generate a random string of a given length\nconst generateRandomString = (length = 8)=>{\n    const characters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\n    let randomString = \"\";\n    for(let i = 0; i < length; i++){\n        randomString += characters.charAt(Math.floor(Math.random() * characters.length));\n    }\n    return randomString;\n};\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        return res.status(405).json({\n            error: `Method ${req.method} Not Allowed`\n        });\n    }\n    const { mobileNumber, otp } = req.body;\n    if (!mobileNumber || !otp) {\n        return res.status(400).json({\n            error: \"Mobile number and OTP are required\"\n        });\n    }\n    try {\n        // Connect to MongoDB\n        if (!(mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState) {\n            await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n        }\n        // Find the OTP record for the mobile number\n        const otpRecord = await _models_Otp__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            mobileNumber\n        });\n        if (!otpRecord) {\n            return res.status(400).json({\n                error: \"No valid OTP found\"\n            });\n        }\n        // Check if the OTP is expired\n        const otpExpirationTime = new Date(otpRecord.lastSent.getTime() + 10 * 60 * 1000); // 10 minutes\n        if (new Date() > otpExpirationTime) {\n            return res.status(400).json({\n                error: \"OTP has expired\"\n            });\n        }\n        // Verify OTP\n        if (otpRecord.otp !== otp) {\n            return res.status(400).json({\n                error: \"Invalid OTP\"\n            });\n        }\n        // Reset OTP record\n        await _models_Otp__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOneAndUpdate({\n            mobileNumber\n        }, {\n            resendCount: 0,\n            otp: null,\n            lastSent: new Date()\n        });\n        // Find the user associated with the mobile number\n        let user = await _models_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n            mobileNumber\n        });\n        if (!user) {\n            // Create a new user if not found\n            const newUser = new _models_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n                mobileNumber,\n                isVerified: true,\n                userName: generateRandomString(10)\n            });\n            // Save the new user\n            user = await newUser.save();\n        }\n        // If user is not verified, mark as verified\n        if (!user.isVerified) {\n            user.isVerified = true;\n            await user.save();\n        }\n        // Generate JWT tokens\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign({\n            userId: user._id\n        }, process.env.JWT_SECRET, {\n            expiresIn: \"1h\"\n        });\n        const refreshToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign({\n            userId: user._id\n        }, process.env.JWT_REFRESH_SECRET, {\n            expiresIn: \"7d\"\n        });\n        return res.status(200).json({\n            message: \"OTP verified successfully\",\n            token,\n            refreshToken\n        });\n    } catch (error) {\n        console.error(\"Error verifying OTP:\", error);\n        return res.status(500).json({\n            error: \"Internal server error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RztRQUFDLEdBQUduQixRQUFRQyxHQUFHLENBQUNtQixVQUFVLEVBQUU7WUFBRUMsV0FBVztRQUFLO1FBQ3ZGLE1BQU1DLGVBQWU5Qyx3REFBUSxDQUMzQjtZQUFFMEMsUUFBUVAsS0FBS1EsR0FBRztRQUFDLEdBQ25CbkIsUUFBUUMsR0FBRyxDQUFDc0Isa0JBQWtCLEVBQzlCO1lBQUVGLFdBQVc7UUFBSztRQUdwQixPQUFPakMsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUMxQmdDLFNBQVM7WUFDVFI7WUFDQU07UUFDRjtJQUNGLEVBQUUsT0FBTzdCLE9BQU87UUFDZGdDLFFBQVFoQyxLQUFLLENBQUMsd0JBQXdCQTtRQUN0QyxPQUFPTCxJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBd0I7SUFDL0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcGFnZXMvYXBpL3ZlcmlmeS1vdHAuanM/Yjg4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgT3RwIGZyb20gJy4uLy4uL21vZGVscy9PdHAnO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcic7IC8vIEFzc3VtaW5nIHlvdSBoYXZlIGEgVXNlciBtb2RlbFxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcblxyXG4vLyBGdW5jdGlvbiB0byBnZW5lcmF0ZSBhIHJhbmRvbSBzdHJpbmcgb2YgYSBnaXZlbiBsZW5ndGhcclxuY29uc3QgZ2VuZXJhdGVSYW5kb21TdHJpbmcgPSAobGVuZ3RoID0gOCkgPT4ge1xyXG4gIGNvbnN0IGNoYXJhY3RlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xyXG4gIGxldCByYW5kb21TdHJpbmcgPSAnJztcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICByYW5kb21TdHJpbmcgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVycy5sZW5ndGgpKTtcclxuICB9XHJcbiAgcmV0dXJuIHJhbmRvbVN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XHJcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnUE9TVCddKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiBgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBtb2JpbGVOdW1iZXIsIG90cCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gIGlmICghbW9iaWxlTnVtYmVyIHx8ICFvdHApIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnTW9iaWxlIG51bWJlciBhbmQgT1RQIGFyZSByZXF1aXJlZCcgfSk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgLy8gQ29ubmVjdCB0byBNb25nb0RCXHJcbiAgICBpZiAoIW1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZSkge1xyXG4gICAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaW5kIHRoZSBPVFAgcmVjb3JkIGZvciB0aGUgbW9iaWxlIG51bWJlclxyXG4gICAgY29uc3Qgb3RwUmVjb3JkID0gYXdhaXQgT3RwLmZpbmRPbmUoeyBtb2JpbGVOdW1iZXIgfSk7XHJcblxyXG4gICAgaWYgKCFvdHBSZWNvcmQpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdObyB2YWxpZCBPVFAgZm91bmQnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZSBPVFAgaXMgZXhwaXJlZFxyXG4gICAgY29uc3Qgb3RwRXhwaXJhdGlvblRpbWUgPSBuZXcgRGF0ZShvdHBSZWNvcmQubGFzdFNlbnQuZ2V0VGltZSgpICsgMTAgKiA2MCAqIDEwMDApOyAvLyAxMCBtaW51dGVzXHJcbiAgICBpZiAobmV3IERhdGUoKSA+IG90cEV4cGlyYXRpb25UaW1lKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnT1RQIGhhcyBleHBpcmVkJyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWZXJpZnkgT1RQXHJcbiAgICBpZiAob3RwUmVjb3JkLm90cCAhPT0gb3RwKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnSW52YWxpZCBPVFAnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlc2V0IE9UUCByZWNvcmRcclxuICAgIGF3YWl0IE90cC5maW5kT25lQW5kVXBkYXRlKFxyXG4gICAgICB7IG1vYmlsZU51bWJlciB9LFxyXG4gICAgICB7IHJlc2VuZENvdW50OiAwLCBvdHA6IG51bGwsIGxhc3RTZW50OiBuZXcgRGF0ZSgpIH1cclxuICAgICk7XHJcblxyXG4gICAgLy8gRmluZCB0aGUgdXNlciBhc3NvY2lhdGVkIHdpdGggdGhlIG1vYmlsZSBudW1iZXJcclxuICAgIGxldCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgbW9iaWxlTnVtYmVyIH0pO1xyXG5cclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICAvLyBDcmVhdGUgYSBuZXcgdXNlciBpZiBub3QgZm91bmRcclxuICAgICAgY29uc3QgbmV3VXNlciA9IG5ldyBVc2VyKHtcclxuICAgICAgICBtb2JpbGVOdW1iZXIsXHJcbiAgICAgICAgaXNWZXJpZmllZDogdHJ1ZSwgLy8gTWFyayB0aGUgbmV3IHVzZXIgYXMgdmVyaWZpZWRcclxuICAgICAgICB1c2VyTmFtZTogZ2VuZXJhdGVSYW5kb21TdHJpbmcoMTApLCAvLyBBc3NpZ24gYSB1bmlxdWUgcmFuZG9tIHVzZXJOYW1lXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gU2F2ZSB0aGUgbmV3IHVzZXJcclxuICAgICAgdXNlciA9IGF3YWl0IG5ld1VzZXIuc2F2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHVzZXIgaXMgbm90IHZlcmlmaWVkLCBtYXJrIGFzIHZlcmlmaWVkXHJcbiAgICBpZiAoIXVzZXIuaXNWZXJpZmllZCkge1xyXG4gICAgICB1c2VyLmlzVmVyaWZpZWQgPSB0cnVlO1xyXG4gICAgICBhd2FpdCB1c2VyLnNhdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBKV1QgdG9rZW5zXHJcbiAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHsgdXNlcklkOiB1c2VyLl9pZCB9LCBwcm9jZXNzLmVudi5KV1RfU0VDUkVULCB7IGV4cGlyZXNJbjogJzFoJyB9KTtcclxuICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IGp3dC5zaWduKFxyXG4gICAgICB7IHVzZXJJZDogdXNlci5faWQgfSxcclxuICAgICAgcHJvY2Vzcy5lbnYuSldUX1JFRlJFU0hfU0VDUkVULFxyXG4gICAgICB7IGV4cGlyZXNJbjogJzdkJyB9XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgIG1lc3NhZ2U6ICdPVFAgdmVyaWZpZWQgc3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgdG9rZW4sXHJcbiAgICAgIHJlZnJlc2hUb2tlbixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB2ZXJpZnlpbmcgT1RQOicsIGVycm9yKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiT3RwIiwiVXNlciIsImp3dCIsImdlbmVyYXRlUmFuZG9tU3RyaW5nIiwibGVuZ3RoIiwiY2hhcmFjdGVycyIsInJhbmRvbVN0cmluZyIsImkiLCJjaGFyQXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2V0SGVhZGVyIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibW9iaWxlTnVtYmVyIiwib3RwIiwiYm9keSIsImNvbm5lY3Rpb24iLCJyZWFkeVN0YXRlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIm90cFJlY29yZCIsImZpbmRPbmUiLCJvdHBFeHBpcmF0aW9uVGltZSIsIkRhdGUiLCJsYXN0U2VudCIsImdldFRpbWUiLCJmaW5kT25lQW5kVXBkYXRlIiwicmVzZW5kQ291bnQiLCJ1c2VyIiwibmV3VXNlciIsImlzVmVyaWZpZWQiLCJ1c2VyTmFtZSIsInNhdmUiLCJ0b2tlbiIsInNpZ24iLCJ1c2VySWQiLCJfaWQiLCJKV1RfU0VDUkVUIiwiZXhwaXJlc0luIiwicmVmcmVzaFRva2VuIiwiSldUX1JFRlJFU0hfU0VDUkVUIiwibWVzc2FnZSIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/verify-otp.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fverify-otp&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Cverify-otp.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();