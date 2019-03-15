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
  var number = _ref.number,
      symbol = _ref.symbol;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, number || symbol);
};

var Calculator = function Calculator() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("0"),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      display = _useState2[0],
      setDisplay = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "jsx-381321122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Calculator"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "container",
    className: "jsx-381321122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "display",
    className: "jsx-381321122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, display), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "top-col",
    className: "jsx-381321122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    symbol: "C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    symbol: "()",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    symbol: "%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    symbol: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "sec-col",
    className: "jsx-381321122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    number: 7,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    number: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    number: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    symbol: "X",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "thi-col",
    className: "jsx-381321122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-381321122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "4"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-381321122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "5"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-381321122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "6"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-381321122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "-")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "fou-col",
    className: "jsx-381321122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-381321122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "1"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-381321122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "2"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-381321122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "3"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-381321122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "+")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "bot-col",
    className: "jsx-381321122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-381321122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "+/-"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-381321122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "0"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-381321122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-381321122",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "="))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "381321122",
    __self: this
  }, "#container.jsx-381321122{box-sizing:border-box;max-width:600px;height:750px;margin:0 auto;border:1px solid black;display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(7,1fr);}#display.jsx-381321122{width:100%;grid-column:1 / 5;grid-row:1 / 3;background-color:red;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:5rem;}#top-col.jsx-381321122,#sec-col.jsx-381321122,#thi-col.jsx-381321122,#fou-col.jsx-381321122,#fiv-col.jsx-381321122,#bot-col.jsx-381321122{grid-column:1 / 5;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:4.5rem;}div.jsx-381321122{border:1px solid grey;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxkZXNrdG9wXFxsYW1iZGFcXFNhbmRib3hlc1xcaG9va3NcXHBhZ2VzXFxjYWxjdWxhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDa0IsQUFHaUMsQUFVWCxBQWVPLEFBUUksV0F0QkosT0FlTCxJQXpCRyxBQWlDTCxPQXRCSSxJQXVCSCxLQWpDQyxNQVdRLENBdUJSLE1BakNDLGNBQ1MsQUFVVix1QkFUQSxJQXNCRixTQXJCMEIsRUFzQlIsZ0JBU04sa0JBOUJXLEVBUVQsK0JBUDNCLGdEQThCcUIsUUFUQSxVQWJBLDJFQXVCckIsUUFUbUIsVUFiRixPQWNqQixRQWJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY2VtYnJcXE9uZURyaXZlXFxkZXNrdG9wXFxsYW1iZGFcXFNhbmRib3hlc1xcaG9va3NcXHBhZ2VzXFxjYWxjdWxhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9ICh7IG51bWJlciwgc3ltYm9sIH0pID0+IDxkaXY+e251bWJlciB8fCBzeW1ib2x9PC9kaXY+O1xyXG5cclxuY29uc3QgQ2FsY3VsYXRvciA9ICgpID0+IHtcclxuICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZShcIjBcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDI+Q2FsY3VsYXRvcjwvaDI+XHJcblxyXG4gICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cImRpc3BsYXlcIj57ZGlzcGxheX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwidG9wLWNvbFwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBzeW1ib2w9XCJDXCIgLz5cclxuICAgICAgICAgIDxCdXR0b24gc3ltYm9sPVwiKClcIiAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiBzeW1ib2w9XCIlXCIgLz5cclxuICAgICAgICAgIDxCdXR0b24gc3ltYm9sPVwiL1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cInNlYy1jb2xcIj5cclxuICAgICAgICAgIDxCdXR0b24gbnVtYmVyPXs3fSAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiBudW1iZXI9ezh9IC8+XHJcbiAgICAgICAgICA8QnV0dG9uIG51bWJlcj17OX0gLz5cclxuICAgICAgICAgIDxCdXR0b24gc3ltYm9sPVwiWFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cInRoaS1jb2xcIj5cclxuICAgICAgICAgIDxkaXY+NDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj41PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PjY8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+LTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJmb3UtY29sXCI+XHJcbiAgICAgICAgICA8ZGl2PjE8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+MjwvZGl2PlxyXG4gICAgICAgICAgPGRpdj4zPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2Pis8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiYm90LWNvbFwiPlxyXG4gICAgICAgICAgPGRpdj4rLy08L2Rpdj5cclxuICAgICAgICAgIDxkaXY+MDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj4uPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2Pj08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgI2NvbnRhaW5lciB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICAgIGhlaWdodDogNzUwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCAxZnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjZGlzcGxheSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gNTtcclxuICAgICAgICAgIGdyaWQtcm93OiAxIC8gMztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3RvcC1jb2wsXHJcbiAgICAgICAgI3NlYy1jb2wsXHJcbiAgICAgICAgI3RoaS1jb2wsXHJcbiAgICAgICAgI2ZvdS1jb2wsXHJcbiAgICAgICAgI2Zpdi1jb2wsXHJcbiAgICAgICAgI2JvdC1jb2wge1xyXG4gICAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyA1O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0LjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0b3I7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\cembr\\OneDrive\\desktop\\lambda\\Sandboxes\\hooks\\pages\\calculator.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Calculator);

/***/ })

})
//# sourceMappingURL=calculator.js.d5cdbf02a796c89396a8.hot-update.js.map