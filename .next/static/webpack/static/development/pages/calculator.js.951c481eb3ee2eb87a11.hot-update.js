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




var Button = function Button(_ref) {
  var value = _ref.value;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-426087141",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "426087141",
    __self: this
  }, "div.jsx-426087141{border:1px solid grey;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:4.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxkZXNrdG9wXFxsYW1iZGFcXFNhbmRib3hlc1xcaG9va3NcXHBhZ2VzXFxjYWxjdWxhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlnQixBQUcrQixzQkFDWCxXQUNDLFlBQ0MsMEVBQ1UsbUdBQ04saUJBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxkZXNrdG9wXFxsYW1iZGFcXFNhbmRib3hlc1xcaG9va3NcXHBhZ2VzXFxjYWxjdWxhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9ICh7IHZhbHVlIH0pID0+IChcclxuICA8ZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBkaXYge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiA0LjVyZW07XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIHt2YWx1ZX1cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IENhbGN1bGF0b3IgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoXCIwXCIpO1xyXG5cclxuICBjb25zdCBzeW1ib2xzQW5kTnVtYmVycyA9IFtcclxuICAgIFwiQ1wiLFxyXG4gICAgXCIoKVwiLFxyXG4gICAgXCIlXCIsXHJcbiAgICBcIi9cIixcclxuICAgIDcsXHJcbiAgICA4LFxyXG4gICAgOSxcclxuICAgIFwiWFwiLFxyXG4gICAgNCxcclxuICAgIDUsXHJcbiAgICA2LFxyXG4gICAgXCItXCIsXHJcbiAgICAxLFxyXG4gICAgMixcclxuICAgIDMsXHJcbiAgICBcIitcIixcclxuICAgIFwiKy8tXCIsXHJcbiAgICBcIjBcIixcclxuICAgIFwiLlwiLFxyXG4gICAgXCI9XCJcclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDI+Q2FsY3VsYXRvcjwvaDI+XHJcblxyXG4gICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cImRpc3BsYXlcIj57ZGlzcGxheX08L2Rpdj5cclxuICAgICAgICB7c3ltYm9sc0FuZE51bWJlcnMubWFwKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxCdXR0b24gdmFsdWU9e3ZhbHVlfS8+XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICNjb250YWluZXIge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDc1MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2Rpc3BsYXkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDU7XHJcbiAgICAgICAgICBncmlkLXJvdzogMSAvIDM7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICN0b3AtY29sLFxyXG4gICAgICAgICNzZWMtY29sLFxyXG4gICAgICAgICN0aGktY29sLFxyXG4gICAgICAgICNmb3UtY29sLFxyXG4gICAgICAgICNmaXYtY29sLFxyXG4gICAgICAgICNib3QtY29sIHtcclxuICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gNTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0b3I7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\cembr\\OneDrive\\desktop\\lambda\\Sandboxes\\hooks\\pages\\calculator.js */"), value);
};

var Calculator = function Calculator() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("0"),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      display = _useState2[0],
      setDisplay = _useState2[1];

  var symbolsAndNumbers = ["C", "()", "%", "/", 7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", "+/-", "0", ".", "="];
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "jsx-3492762226",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Calculator"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "container",
    className: "jsx-3492762226",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "display",
    className: "jsx-3492762226",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, display), symbolsAndNumbers.map(function (value) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
      value: value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3492762226",
    __self: this
  }, "#container.jsx-3492762226{box-sizing:border-box;max-width:600px;height:750px;margin:0 auto;border:1px solid black;display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(7,1fr);}#display.jsx-3492762226{width:100%;grid-column:1 / 5;grid-row:1 / 3;background-color:red;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:5rem;}#top-col.jsx-3492762226,#sec-col.jsx-3492762226,#thi-col.jsx-3492762226,#fou-col.jsx-3492762226,#fiv-col.jsx-3492762226,#bot-col.jsx-3492762226{grid-column:1 / 5;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:4.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxkZXNrdG9wXFxsYW1iZGFcXFNhbmRib3hlc1xcaG9va3NcXHBhZ2VzXFxjYWxjdWxhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEa0IsQUFHaUMsQUFVWCxBQWVPLFdBZEEsT0FlTCxJQXpCRyxPQVdELFNBVkYsTUFXUSxPQVZQLGNBQ1MsQUFVVix1QkFUQSxJQXNCRixTQXJCMEIsRUFzQlIsa0NBckJLLEVBUVQsK0JBUDNCLHdEQXFCcUIsVUFiQSxtRkFjRixVQWJGLE9BY2pCLFFBYkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxjZW1iclxcT25lRHJpdmVcXGRlc2t0b3BcXGxhbWJkYVxcU2FuZGJveGVzXFxob29rc1xccGFnZXNcXGNhbGN1bGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHsgdmFsdWUgfSkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDQuNXJlbTtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAge3ZhbHVlfVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgQ2FsY3VsYXRvciA9ICgpID0+IHtcclxuICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZShcIjBcIik7XHJcblxyXG4gIGNvbnN0IHN5bWJvbHNBbmROdW1iZXJzID0gW1xyXG4gICAgXCJDXCIsXHJcbiAgICBcIigpXCIsXHJcbiAgICBcIiVcIixcclxuICAgIFwiL1wiLFxyXG4gICAgNyxcclxuICAgIDgsXHJcbiAgICA5LFxyXG4gICAgXCJYXCIsXHJcbiAgICA0LFxyXG4gICAgNSxcclxuICAgIDYsXHJcbiAgICBcIi1cIixcclxuICAgIDEsXHJcbiAgICAyLFxyXG4gICAgMyxcclxuICAgIFwiK1wiLFxyXG4gICAgXCIrLy1cIixcclxuICAgIFwiMFwiLFxyXG4gICAgXCIuXCIsXHJcbiAgICBcIj1cIlxyXG4gIF07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMj5DYWxjdWxhdG9yPC9oMj5cclxuXHJcbiAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGlkPVwiZGlzcGxheVwiPntkaXNwbGF5fTwvZGl2PlxyXG4gICAgICAgIHtzeW1ib2xzQW5kTnVtYmVycy5tYXAodmFsdWUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPEJ1dHRvbiB2YWx1ZT17dmFsdWV9Lz5cclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgI2NvbnRhaW5lciB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICAgIGhlaWdodDogNzUwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCAxZnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjZGlzcGxheSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gNTtcclxuICAgICAgICAgIGdyaWQtcm93OiAxIC8gMztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3RvcC1jb2wsXHJcbiAgICAgICAgI3NlYy1jb2wsXHJcbiAgICAgICAgI3RoaS1jb2wsXHJcbiAgICAgICAgI2ZvdS1jb2wsXHJcbiAgICAgICAgI2Zpdi1jb2wsXHJcbiAgICAgICAgI2JvdC1jb2wge1xyXG4gICAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyA1O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0LjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRvcjtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\cembr\\OneDrive\\desktop\\lambda\\Sandboxes\\hooks\\pages\\calculator.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Calculator);

/***/ })

})
//# sourceMappingURL=calculator.js.951c481eb3ee2eb87a11.hot-update.js.map