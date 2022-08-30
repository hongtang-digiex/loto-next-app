"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Inputname.js":
/*!*********************************!*\
  !*** ./components/Inputname.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Inputname; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _PlayersList_playersList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlayersList/playersList */ \"./components/PlayersList/playersList.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"].connect(\"http://localhost:3001\");\nfunction Inputname() {\n    var ref, ref1;\n    _s();\n    var ref2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1__.useState(false), 2), filled = ref2[0], setInputField = ref2[1];\n    var ref3 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1__.useState(false), 2), isResigned = ref3[0], setResigned = ref3[1];\n    var playerName = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n    var roomID = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n    var colors = [\n        \"#ddee55\",\n        \"#e9cbff\",\n        \"#99ccdd\",\n        \"#a4daef\",\n        \"#aaddee\",\n        \"#009489\",\n        \"#fdc8c0\",\n        \"#8de8e8\",\n        \"#ac92c0\",\n        \"#ab92b3\", \n    ];\n    var handleClickGo = function() {\n        socket.emit(\"get-user\", {\n            player: playerName.current.childNodes[1].childNodes[0].value,\n            room_id: roomID.current.childNodes[1].childNodes[0].value\n        });\n        setResigned(!isResigned);\n    };\n    var handleInputField = function() {\n        var ref, ref1;\n        setInputField((playerName === null || playerName === void 0 ? void 0 : (ref = playerName.current) === null || ref === void 0 ? void 0 : ref.childNodes[1].childNodes[0].value) && (roomID === null || roomID === void 0 ? void 0 : (ref1 = roomID.current) === null || ref1 === void 0 ? void 0 : ref1.childNodes[1].childNodes[0].value));\n    };\n    var joinRoom = function() {\n        if (roomID.current.childNodes[1].childNodes[0].value !== \"\") {\n            socket.emit(\"join_room\", roomID.current.childNodes[1].childNodes[0].value);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"pixel-font text-center text-5xl\",\n                children: \"Lottto\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PinkguyPC\\\\Desktop\\\\loto-next\\\\loto-next-app\\\\components\\\\Inputname.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-3 items-center justify-center px-3 \".concat(!isResigned ? \"block\" : \"hidden\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        required: true,\n                        id: \"outlined-required\",\n                        label: \"Input your name\",\n                        onChange: function() {\n                            handleInputField();\n                        },\n                        ref: playerName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PinkguyPC\\\\Desktop\\\\loto-next\\\\loto-next-app\\\\components\\\\Inputname.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        required: true,\n                        id: \"outlined-required\",\n                        label: \"Room ID\",\n                        onChange: function() {\n                            handleInputField();\n                        },\n                        ref: roomID\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PinkguyPC\\\\Desktop\\\\loto-next\\\\loto-next-app\\\\components\\\\Inputname.js\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        disabled: !filled,\n                        variant: \"contained\",\n                        className: \"bg-blue-500\",\n                        onClick: function() {\n                            joinRoom();\n                            handleClickGo();\n                        },\n                        children: \"Go!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PinkguyPC\\\\Desktop\\\\loto-next\\\\loto-next-app\\\\components\\\\Inputname.js\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PinkguyPC\\\\Desktop\\\\loto-next\\\\loto-next-app\\\\components\\\\Inputname.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            isResigned && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlayersList_playersList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                socket: socket,\n                player: (ref = playerName.current) === null || ref === void 0 ? void 0 : ref.childNodes[1].childNodes[0].value,\n                room_id: (ref1 = roomID.current) === null || ref1 === void 0 ? void 0 : ref1.childNodes[1].childNodes[0].value,\n                color: colors[Math.floor(Math.random() * 9)]\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PinkguyPC\\\\Desktop\\\\loto-next\\\\loto-next-app\\\\components\\\\Inputname.js\",\n                lineNumber: 92,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PinkguyPC\\\\Desktop\\\\loto-next\\\\loto-next-app\\\\components\\\\Inputname.js\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, this);\n};\n_s(Inputname, \"d/gpXjRE2ujWLD9kPsYTB/S3qkI=\");\n_c = Inputname;\nvar _c;\n$RefreshReg$(_c, \"Inputname\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkEsS0FBQUEsQ0FBMEIsR0FBMUJBLElBQWMsQ0FBRVksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDQSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUNDLEtBQUs7Z0JBQzFEZSxLQUFLLEVBQUlyQixNQUFNLENBQUNzQixJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQzs7Ozs7b0JBQ2hEOzs7Ozs7WUFJSixDQUNUO0NBQ0o7R0ExRnVCakMsU0FBUztBQUFUQSxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSW5wdXRuYW1lLmpzPzNjZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xyXG5pbXBvcnQgU3RhY2sgZnJvbSAnQG11aS9tYXRlcmlhbC9TdGFjayc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXHJcbmltcG9ydCBQbGF5ZXJzTGlzdCBmcm9tICcuL1BsYXllcnNMaXN0L3BsYXllcnNMaXN0J1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJ1xyXG5cclxuXHJcbmNvbnN0IHNvY2tldCA9IGlvLmNvbm5lY3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDFcIilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0bmFtZSgpIHtcclxuXHJcbiAgICBjb25zdCBbZmlsbGVkLCBzZXRJbnB1dEZpZWxkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzUmVzaWduZWQsIHNldFJlc2lnbmVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgcGxheWVyTmFtZSA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgY29uc3Qgcm9vbUlEID0gUmVhY3QudXNlUmVmKCk7XHJcblxyXG4gICAgY29uc3QgY29sb3JzID0gW1xyXG4gICAgICAgIFwiI2RkZWU1NVwiLFxyXG4gICAgICAgIFwiI2U5Y2JmZlwiLFxyXG4gICAgICAgIFwiIzk5Y2NkZFwiLFxyXG4gICAgICAgIFwiI2E0ZGFlZlwiLFxyXG4gICAgICAgIFwiI2FhZGRlZVwiLFxyXG4gICAgICAgIFwiIzAwOTQ4OVwiLFxyXG4gICAgICAgICcjZmRjOGMwJyxcclxuICAgICAgICAnIzhkZThlOCcsXHJcbiAgICAgICAgJyNhYzkyYzAnLFxyXG4gICAgICAgIFwiI2FiOTJiM1wiLFxyXG4gICAgXVxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGlja0dvID0gKCkgPT4ge1xyXG4gICAgICAgIHNvY2tldC5lbWl0KCdnZXQtdXNlcicsIHtcclxuICAgICAgICAgICAgcGxheWVyOiBwbGF5ZXJOYW1lLmN1cnJlbnQuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICByb29tX2lkOiByb29tSUQuY3VycmVudC5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF0udmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldFJlc2lnbmVkKCFpc1Jlc2lnbmVkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0RmllbGQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SW5wdXRGaWVsZChcclxuICAgICAgICAgICAgcGxheWVyTmFtZT8uY3VycmVudD8uY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzBdLnZhbHVlICYmXHJcbiAgICAgICAgICAgIHJvb21JRD8uY3VycmVudD8uY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzBdLnZhbHVlXHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBqb2luUm9vbSA9ICgpID0+IHtcclxuICAgICAgICBpZiAocm9vbUlELmN1cnJlbnQuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzBdLnZhbHVlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdqb2luX3Jvb20nLCByb29tSUQuY3VycmVudC5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF0udmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BgfT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17XCJwaXhlbC1mb250IHRleHQtY2VudGVyIHRleHQtNXhsXCJ9PkxvdHR0bzwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBnYXAtMyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtMyAkeyFpc1Jlc2lnbmVkID8gJ2Jsb2NrJyA6ICdoaWRkZW4nfWB9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSW5wdXQgeW91ciBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4geyBoYW5kbGVJbnB1dEZpZWxkKCkgfX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e3BsYXllck5hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUm9vbSBJRFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHsgaGFuZGxlSW5wdXRGaWVsZCgpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyb29tSUR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWZpbGxlZH1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BiZy1ibHVlLTUwMGB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBqb2luUm9vbSgpOyBoYW5kbGVDbGlja0dvKCk7IH19XHJcbiAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEdvIVxyXG5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlzUmVzaWduZWQgJiYgXHJcbiAgICAgICAgICAgICAgICA8UGxheWVyc0xpc3RcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0PXtzb2NrZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyPXtwbGF5ZXJOYW1lLmN1cnJlbnQ/LmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICByb29tX2lkPXtyb29tSUQuY3VycmVudD8uY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzBdLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yID0ge2NvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KV19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJUZXh0RmllbGQiLCJCdXR0b24iLCJTdGFjayIsIkxpbmsiLCJpbyIsIlBsYXllcnNMaXN0IiwiQ29va2llcyIsInNvY2tldCIsImNvbm5lY3QiLCJJbnB1dG5hbWUiLCJwbGF5ZXJOYW1lIiwicm9vbUlEIiwidXNlU3RhdGUiLCJmaWxsZWQiLCJzZXRJbnB1dEZpZWxkIiwiaXNSZXNpZ25lZCIsInNldFJlc2lnbmVkIiwidXNlUmVmIiwiY29sb3JzIiwiaGFuZGxlQ2xpY2tHbyIsImVtaXQiLCJwbGF5ZXIiLCJjdXJyZW50IiwiY2hpbGROb2RlcyIsInZhbHVlIiwicm9vbV9pZCIsImhhbmRsZUlucHV0RmllbGQiLCJqb2luUm9vbSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicmVxdWlyZWQiLCJpZCIsImxhYmVsIiwib25DaGFuZ2UiLCJyZWYiLCJkaXNhYmxlZCIsInZhcmlhbnQiLCJvbkNsaWNrIiwiY29sb3IiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Inputname.js\n"));

/***/ })

});