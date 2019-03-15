webpackHotUpdate("static\\development\\pages\\calculator.js",{

/***/ "./pages/calculator.js":
/*!*****************************!*\
  !*** ./pages/calculator.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js?768b");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\cembr\\OneDrive\\desktop\\lambda\\Sandboxes\\hooks\\pages\\calculator.js";




var Calculator = function Calculator() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("0"),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      display = _useState2[0],
      setDisplay = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "jsx-3969957292",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Calculator"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "container",
    className: "jsx-3969957292",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "display",
    className: "jsx-3969957292",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, display), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "top-column",
    className: "jsx-3969957292",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3969957292",
    __self: this
  }, "#container.jsx-3969957292{box-sizing:border-box;max-width:600px;height:750px;margin:0 auto;border:1px solid black;display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(8,1fr);}#display.jsx-3969957292{width:100%;grid-column:1 / 5;background-color:red;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:5rem;}#top-column.jsx-3969957292{grid-column:1 / 5;background-color:grey;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxkZXNrdG9wXFxsYW1iZGFcXFNhbmRib3hlc1xcaG9va3NcXHBhZ2VzXFxjYWxjdWxhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNrQixBQUdtQyxBQVVYLEFBU08sV0FSQSxPQVNJLElBbkJSLE9BV08sU0FWVixFQW1CZixVQVJpQixDQVZELGNBQ1MsdUJBQ1YsYUFDd0IsdUJBUVYsYUFQTyxpQ0FDcEMsbURBT3VCLDZGQUNKLGVBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxkZXNrdG9wXFxsYW1iZGFcXFNhbmRib3hlc1xcaG9va3NcXHBhZ2VzXFxjYWxjdWxhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENhbGN1bGF0b3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZShcIjBcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDI+Q2FsY3VsYXRvcjwvaDI+XHJcblxyXG4gICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cImRpc3BsYXlcIj57ZGlzcGxheX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwidG9wLWNvbHVtblwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAjY29udGFpbmVyIHtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDc1MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2Rpc3BsYXkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyA1O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3RvcC1jb2x1bW4ge1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRvcjtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\cembr\\OneDrive\\desktop\\lambda\\Sandboxes\\hooks\\pages\\calculator.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Calculator);

/***/ })

})
//# sourceMappingURL=calculator.js.e9d7230d256c61ba4d9c.hot-update.js.map